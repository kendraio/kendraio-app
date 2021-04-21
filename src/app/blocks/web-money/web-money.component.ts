import { Component } from '@angular/core';
import { BaseBlockComponent } from '../base-block/base-block.component';
import { mappingUtility } from '../mapping-block/mapping-util';
import { get } from 'lodash-es';
import * as uuid from 'uuid';
import { Tracking } from './tracking';

const tracking = new Tracking();
const metaSelector = 'meta[name="monetization"]';

function isMonetizationSupported(): boolean {
  return Boolean(document['monetization']);
}

function setPaymentPointer(paymentPointer: string) {
  // Creates or modifies monetization meta tag with a payment pointer
  // using track data, stored in the player's dataset
  var metaTag = document.querySelector(metaSelector);
  if (!metaTag) {
    metaTag = document.createElement('meta');
    metaTag.setAttribute("name", "monetization");
    document.head.appendChild(metaTag);
    console.info('Added Web Monetization metatag for Web Money block')
  }

  metaTag.setAttribute("content", paymentPointer);
  console.info('Set payment pointer to:', paymentPointer);
}


function removePaymentPointer() {
  console.info('removePaymentPointer called');
  var metaTag = document.querySelector(metaSelector);
  if (metaTag) {
    metaTag.remove();
  }
};

const COIL_CLIENT_ID = '19d9c8e7-3a37-4fd5-803c-057300f4354b';


function addCoilClientScript() {
  const s = document.createElement('script');
  s.setAttribute('src', 'https://cdn.coil.com/coil-oauth-wm.v7.beta.js');
  document.head.appendChild(s);
  document['monetization'] = document.createElement('div');
  document['monetization'].state = 'stopped';
}

async function setupCoilClient() {

  // Upon Coil Oauth confirmation, we recieve a redirect 
  // callback from Coil, at a URL like:
  // https://app.kendra.io/coil/callback?code=something&state=something
  // we we look for callbacks to this whenever this component
  // exists to redirect the app to the desired URL

  let codeURLParameter = new URLSearchParams(location.search).get('code');
  let coilAuthStateParameter = new URLSearchParams(location.search).get('state');
  let coilOauthCallbackCode = new URLSearchParams(location.search).get(
    'coilOauthCallbackCode' // long name to ensure exact match
  );


  if (location.pathname === '/coil/callback') {
    // Callback redirect from Coil found, redirecting to correct app URL
    // and also passing the coilOauthCallbackCode
    let invokerURL = atob(coilAuthStateParameter.split('_')[1]);
    let baseURL = location.protocol + '//' + location.host;
    location.href = baseURL + invokerURL + '?coilOauthCallbackCode=' + codeURLParameter;
    return
  }

  if (coilOauthCallbackCode) {
    // coilOauthCallbackCode found, so we load the Coil polyfill script,
    // that implements the Web Monetization API and request the
    // BTP token for the user, and pass it to the polyfill

    addCoilClientScript();

    let response = await fetch('https://coil-api-proxy.vercel.app/api/login?code=' + coilOauthCallbackCode, {
      method: 'POST'
    });

    let result = await response.json();
    if (result.btpToken) {
      console.info('logged in Coil, and got BTP token');

      // Removes ugly parameters from browser URL:
      window.history.replaceState(null, document.title, location.href.replace(location.search, ''));

      // Provides BTP token to the polyfill:
      document['coilMonetizationPolyfill'].init({ btpToken: result.btpToken });

    } else {
      console.error('Failed to connect with Coil', result);
      alert('Failed to connect with Coil :(');
    }


  }
}



const urlPrefix = "https://app.kendra.io/";;

function getCoilOauthLoginURL(): string {
  const coilOauthLoginURL = new URL("https://coil.com/oauth/auth");

  const oauthState = uuid.v4() + '_' + btoa(location.pathname);
  // A random UUID with our current path, to redirect back to

  Object.entries({
    response_type: 'code',
    scope: 'simple_wm openid',
    client_id: COIL_CLIENT_ID,
    state: oauthState,
    redirect_uri: urlPrefix + 'coil/callback'
  }).forEach(([key, value]) => {
    coilOauthLoginURL.searchParams.append(key, value);
  })

  return coilOauthLoginURL.href;
}
const webMonetizationSupportFound = isMonetizationSupported();
if (!webMonetizationSupportFound) {
  setupCoilClient()
}
const defaultPaymentActiveMessage = `💸▶️ Streaming web payment`;
const defaultPaymentPausedMessage = '💸⏸️';
const defaultSupportFoundMessage = '';
const defaultSupportMissingMessage = `
<a href="https://webmonetization.org">
  Learn about Web Monetization here.</a>
<br>
<br>
<a href="https://coil.com">
  Join Coil here.
</a>`;


// memory caches currency rates, indexed by a key, made of assetCode + fiat
var rates = {};
var rate_fetches = {};
function loadCurrencyRates(assetCode, fiat) {
  if (assetCode + fiat in rate_fetches) {
    return // prevent clobbering
  }
  rate_fetches[assetCode + fiat] = true;

  return fetch('https://api.coingecko.com/api/v3/coins/markets?order=market_cap_desc&per_page=20&page=1&sparkline=false&vs_currency=' + fiat, {
    method: 'GET',
    mode: 'cors'
  }).then((response) => response.json()).then((response) => {
    const matching_asset = response.filter((item) => { return item.symbol === assetCode });
    rates[assetCode + fiat] = matching_asset[0].current_price;
  });
}


let totalAmount = 0;
let lastStreamTotalAmount = 0;

const defaultFiatCurrency = 'usd'; //must be lowercase

@Component({
  selector: 'app-web-money-block',
  templateUrl: './web-money.component.html',
  styleUrls: ['./web-money.component.scss']
})
export class WebMoneyComponent extends BaseBlockComponent {

  paymentPointerSourceMapping = 'data.paymentPointer';
  paymentPointer = '';
  analyticsRecipientID = '';
  analyticsItemUUID = '';
  enabled = true;
  trackingEnabled = false;
  supported = isMonetizationSupported();
  showPaymentPointer = true;

  showPaymentTotal = true;
  fiatCurrency = defaultFiatCurrency;
  nativeTotalAmount = ''; // total amount stored in native currency format (e.g: ETH, XRP)
  nativeLastStreamTotalAmount = ''; // total amount of the last / current payment stream only

  fiatTotalAmount = ''; // total amount converted to a fiat currency (e.g: USD, EUR)
  fiatLastStreamTotalAmount = ''; // last / current payment stream, currency converted
  payTotalTitle = ''; // heading for the total amounts

  coilLoginURL = '';
  supportFoundMessage = defaultSupportFoundMessage;
  supportMissingMessage = defaultSupportMissingMessage;
  paymentActiveMessage = defaultPaymentActiveMessage;
  paymentPausedMessage = defaultPaymentPausedMessage;
  paymentActiveTemplateConfig = { template: this.paymentActiveMessage };
  paymentPausedTemplateConfig = { template: this.paymentPausedMessage };
  supportFoundTemplateConfig = { template: this.supportFoundMessage };
  supportMissingTemplateConfig = { template: this.supportMissingMessage };

  onConfigUpdate(config: any) {
    this.paymentPointerSourceMapping = get(config, 'mapping', 'data.paymentPointer');
    this.enabled = get(config, 'enabled', true);
    this.trackingEnabled = get(config, 'trackingEnabled', false);
    this.showPaymentPointer = get(config, 'showPaymentPointer', true);
    this.showPaymentTotal = get(config, 'showPaymentTotal', true);
    this.fiatCurrency = get(config, 'fiatCurrency', defaultFiatCurrency).toLowerCase();
    this.payTotalTitle = get(config, 'payTotalTitle', 'Pay total:');
    this.paymentActiveMessage = get(config, 'paymentActiveMessage', defaultPaymentActiveMessage);
    this.paymentPausedMessage = get(config, 'paymentPausedMessage', defaultPaymentPausedMessage);
    this.supportFoundMessage = get(config, 'supportFoundMessage', defaultSupportFoundMessage);
    this.supportMissingMessage = get(config, 'supportMissingMessage', defaultSupportMissingMessage);
    this.paymentActiveTemplateConfig = { template: this.paymentActiveMessage };
    this.paymentPausedTemplateConfig = { template: this.paymentPausedMessage };
    this.supportFoundTemplateConfig = { template: this.supportFoundMessage };
    this.supportMissingTemplateConfig = { template: this.supportMissingMessage };
    this.coilLoginURL = getCoilOauthLoginURL(); // uses location to redirect back
  }

  setupPaymentWatcher() {
    var parentScope = this;
    const fiat = this.fiatCurrency;

    function monetizationprogressHandler(event) {
      let detail = event.detail;
      detail.assetCode = detail.assetCode.toLowerCase();

      totalAmount += Number(detail.amount);
      lastStreamTotalAmount += Number(detail.amount);
      const floatTotalAmount = totalAmount * Math.pow(10, -detail.assetScale);
      const lastStreamFloatTotalAmount = lastStreamTotalAmount * Math.pow(10, -detail.assetScale);
      const fiatCurrencyFormatter = new Intl.NumberFormat(window.navigator.language, {
        style: 'currency',
        currency: fiat.toUpperCase(),
        minimumFractionDigits: 2,
        maximumFractionDigits: 20,
        maximumSignificantDigits: 5
      });
      const nativeCurrencyFormatter = new Intl.NumberFormat(window.navigator.language, {
        // when cryptocurrencies are part of browser number formatting,
        // perhaps a style parameter can be passed to get symbol icons etc
        minimumFractionDigits: 2,
        maximumFractionDigits: 20,
        maximumSignificantDigits: 5
      });

      parentScope.nativeTotalAmount = `${nativeCurrencyFormatter.format(floatTotalAmount)}  ${detail.assetCode.toUpperCase()}`;
      parentScope.nativeLastStreamTotalAmount = `${nativeCurrencyFormatter.format(lastStreamFloatTotalAmount)}  ${detail.assetCode.toUpperCase()}`;
      if (detail.assetCode + fiat in rates) {
        const fiatTotalAmount = floatTotalAmount * rates[detail.assetCode + fiat];
        const lastStreamFiatTotalAmount = lastStreamFloatTotalAmount * rates[detail.assetCode + fiat];
        parentScope.fiatTotalAmount = `${fiatCurrencyFormatter.format(fiatTotalAmount)} ${fiat.toUpperCase()}`;
        parentScope.fiatLastStreamTotalAmount = `${fiatCurrencyFormatter.format(lastStreamFiatTotalAmount)} ${fiat.toUpperCase()}`;
        if (parentScope.trackingEnabled) {
          tracking.capture(
            {
              "type": "nativeWebMoneyTotal",
              "numericKey": detail.assetCode.toUpperCase(),
              "numericValue": lastStreamFloatTotalAmount,
              "data": {
                "fiatLastStreamTotalAmount": parentScope.fiatLastStreamTotalAmount
              },
              "analyticsRecipientID": parentScope.analyticsRecipientID,
              "analyticsItemUUID": parentScope.analyticsItemUUID
            })
        }
      } else {
        console.info('loading latest currency conversion');
        loadCurrencyRates(detail.assetCode, fiat);
      }

    }
    if (document['monetization']) {
      document['monetization'].addEventListener('monetizationprogress', monetizationprogressHandler);
    }
  }

  onData(data: any, _firstChange: boolean) {
    this.analyticsRecipientID = mappingUtility({ data: this.model, context: this.context }, "data.analyticsRecipientID");
    this.analyticsItemUUID = mappingUtility({ data: this.model, context: this.context }, "data.analyticsItemUUID");
    this.paymentPointer = mappingUtility({ data: this.model, context: this.context }, this.paymentPointerSourceMapping);
    lastStreamTotalAmount = 0; //reset on event change
    if (!!this.model.paymentPointer && this.model.paymentPointer.length > 0 && this.enabled) {
      setPaymentPointer(this.model.paymentPointer);
      this.setupPaymentWatcher();
    } else {
      removePaymentPointer();
    }

  }

}
