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
}

async function setupCoilClient() {
  let callbackCode = new URLSearchParams(location.search).get('code');

  if (callbackCode) {
    addCoilClientScript()
    document['monetization'] = document.createElement('div')
    document['monetization'].state = 'stopped'
    let response = await fetch('http://localhost:3000/api/login?code=' + callbackCode, {
      method: 'POST'
    });

    let result = await response.json();
    console.dir({ btpToken: result.btpToken })
    window.history.replaceState(null, document.title, location.href.replace(location.search, ''));
    document['coilMonetizationPolyfill'].init({ btpToken: result.btpToken })
  } else { console.log('login?') }
}





function unixTime() {
  return Math.floor(Date.now() / 1000);
}

const sessionUUID = uuid4();
const loginURL = `https://coil.com/oauth/auth?response_type=code&scope=simple_wm openid&client_id=` + COIL_CLIENT_ID +
  `&state=` + sessionUUID + `&redirect_uri=https://app.kendra.io/coil/callback`;


const supportCheck = isMonetizationSupported();
if (supportCheck == false) {
  setupCoilClient()

}
const defaultPaymentActiveMessage = `💸▶️ Streaming web payment`;
const defaultPaymentPausedMessage = '💸⏸️';
const defaultSupportFoundMessage = '';
const protectedLoginButtonMessage = `<a href="` + loginURL + `">
<img src="https://coil.com/images/coil-logo.svg" title="Coil logo"/>
<br>
Login with Coil here
</a>`;
const defaultSupportMissingMessage = `
No Web Monetization extension found 😟.

<br> 
<a href="https://webmonetization.org">
  Learn about Web Monetization here.</a>
<br>
<br>
<a href="https://coil.com">
  <img src="https://coil.com/images/coil-logo.svg" title="Coil logo"/>
  <br>
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
  protectedLoginButtonMessage = protectedLoginButtonMessage;
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
