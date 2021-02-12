import { Component } from '@angular/core';
import { BaseBlockComponent } from '../base-block/base-block.component';
import { mappingUtility } from '../mapping-block/mapping-util';
import { get } from 'lodash-es';

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
function uuid4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

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


const oauthState = uuid4() + '_' + btoa(location.pathname);
// A random UUID with our current path, to redirect back to

const urlPrefix = "https://app.kendra.io/";;

const coilLoginParameters = {
  response_type:'code',
  scope:'simple_wm openid',
  client_id: COIL_CLIENT_ID,
  state: oauthState,
  redirect_uri: urlPrefix + 'coil/callback'
};

const coilOauthLoginURL = new URL("https://coil.com/oauth/auth");
Object.entries(coilLoginParameters).forEach(([key,value])=>{
  coilOauthLoginURL.searchParams.append(key,value);
})

const webMonetizationSupportFound = isMonetizationSupported();
if (!webMonetizationSupportFound) {
  setupCoilClient()
}
const defaultPaymentActiveMessage = `💸▶️ Streaming web payment`;
const defaultPaymentPausedMessage = '💸⏸️';
const defaultSupportFoundMessage = '';
const defaultSupportMissingMessage = `
No Web Monetization extension found 😟.

<br> 
<a href="https://webmonetization.org">
  Learn about Web Monetization here.</a>
<br>
<br>
<a href="https://coil.com">
  Join Coil here.
</a>`;


@Component({
  selector: 'app-web-money-block',
  templateUrl: './web-money.component.html',
  styleUrls: ['./web-money.component.scss']
})
export class WebMoneyComponent extends BaseBlockComponent {

  mapping = 'data.paymentPointer';
  paymentPointer = '';
  enabled = true;
  supported = isMonetizationSupported();
  showPaymentPointer = true;
  coilLoginURL = coilOauthLoginURL.href;
  supportFoundMessage = defaultSupportFoundMessage;
  supportMissingMessage = defaultSupportMissingMessage;
  paymentActiveMessage = defaultPaymentActiveMessage;
  paymentPausedMessage = defaultPaymentPausedMessage;
  paymentActiveTemplateConfig = { template: this.paymentActiveMessage };
  paymentPausedTemplateConfig = { template: this.paymentPausedMessage };
  supportFoundTemplateConfig = { template: this.supportFoundMessage };
  supportMissingTemplateConfig = { template: this.supportMissingMessage };

  onConfigUpdate(config: any) {
    this.mapping = get(config, 'mapping', 'data.paymentPointer');
    this.enabled = get(config, 'enabled', true);
    this.showPaymentPointer = get(config, 'showPaymentPointer', true);
    this.paymentPausedMessage = get(config, 'paymentPausedMessage', defaultPaymentPausedMessage);
    this.supportFoundMessage = get(config, 'supportFoundMessage', defaultSupportFoundMessage);
    this.supportMissingMessage = get(config, 'supportMissingMessage', defaultSupportMissingMessage);
    this.paymentActiveTemplateConfig = { template: this.paymentActiveMessage };
    this.paymentPausedTemplateConfig = { template: this.paymentPausedMessage };
    this.supportFoundTemplateConfig = { template: this.supportFoundMessage };
    this.supportMissingTemplateConfig = { template: this.supportMissingMessage };

  }

  onData(data: any, _firstChange: boolean) {
    this.paymentPointer = mappingUtility({ data: this.model, context: this.context }, this.mapping);
    if (!!this.model.paymentPointer && this.model.paymentPointer.length > 0 && this.enabled) {
      setPaymentPointer(this.model.paymentPointer);
    } else {
      removePaymentPointer();
    }

  }

}
