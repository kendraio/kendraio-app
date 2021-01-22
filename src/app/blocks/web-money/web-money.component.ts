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

const defaultPaymentActiveMessage = `💸▶️ Streaming web payment`;
const defaultPaymentPausedMessage = '💸⏸️';
const defaultSupportFoundMessage = '';
const defaultSupportMissingMessage = `
No Web Monetization support found 😟.
<br> 
<a href="https://webmonetization.org">
  Learn about Web Monetization here.</a>
<br>
<br>
<a href="https://coil.com">
  <img src="https://coil.com/images/coil-logo.svg" title="Coil logo"/>
  <br>
  Support us with Coil.
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
