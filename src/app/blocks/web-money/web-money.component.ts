import { Component } from '@angular/core';
import { BaseBlockComponent } from '../base-block/base-block.component';
import { mappingUtility } from '../mapping-block/mapping-util';
import { get } from 'lodash-es';

const metaSelector = 'meta[name="monetization"]';

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


@Component({
  selector: 'app-web-money-block',
  templateUrl: './web-money.component.html',
  styleUrls: ['./web-money.component.scss']
})
export class WebMoneyComponent extends BaseBlockComponent {

  mapping = 'data.paymentPointer';
  paymentPointer = '';


  onConfigUpdate(config: any) {
    this.mapping = get(config, 'mapping', this.mapping);
  }

  onData(data: any, _firstChange: boolean) {
    this.paymentPointer = mappingUtility({ data: this.model, context: this.context }, this.mapping);
    setPaymentPointer(this.model.paymentPointer);
  }

}