import { Component } from '@angular/core';
import { BaseBlockComponent } from '../base-block/base-block.component';
import { mappingUtility } from '../mapping-block/mapping-util';
import { get } from 'lodash-es';

const metaSelector = 'meta[name="monetization"]';

function isMonetizationSupported(): boolean {
  if (!document['monetization']){
    return false;
  } else {
    return true;
  }
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
  supportFoundMessage = '';
  supportMissingMessage = '';
  supportFoundTemplateConfig = {template: this.supportFoundMessage};
  supportMissingTemplateConfig = {template: this.supportMissingMessage};
  
  onConfigUpdate(config: any) {
    this.mapping = get(config, 'mapping', 'data.paymentPointer');
    this.enabled = get(config, 'enabled', true);
    this.supportFoundMessage = get(config, 'supportFoundMessage', 'It works!');
    this.supportMissingMessage = get(config, 'supportMissingMessage', 'Install Coil?');
    
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
