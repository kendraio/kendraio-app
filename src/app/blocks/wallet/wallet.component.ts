import { Component } from '@angular/core';
import { BaseBlockComponent } from '../base-block/base-block.component';
import { mappingUtility } from '../mapping-block/mapping-util';
import { get } from 'lodash-es';
import {
  UpholdService,
  hasActiveToken,
  getUpholdOauthLoginURL,
  finishAuth,
} from '../../_shared/services/uphold_service';

@Component({
  selector: 'app-wallet-block',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
})
export class WalletComponent extends BaseBlockComponent {
  paymentPointerSourceMapping = 'data.paymentPointer';
  paymentPointer = '';
  enabled = true;
  login_url = getUpholdOauthLoginURL(); // uses current location to redirect back here when done
  loginActive = hasActiveToken(); // detects if we have an active login token
  redirect = '';
  get_balance = '';
  code = '';
  token = '';
  cards = [];
  balance_target_type = '';
  balance_address = ''; // config may specify a balance of interest, stored here
  make_card_button = false;
  reconnect_button = false;
  list_all_balances = false;
  upholdService = new UpholdService({
    balance_address: this.balance_address,
    output: this.output,
  });
  makeCard() {
    this.upholdService.make_card();
  }

  onConfigUpdate(config: any) {
    this.paymentPointerSourceMapping = get(
      config,
      'mapping',
      'data.paymentPointer'
    );
    this.enabled = get(config, 'enabled', true);
    this.redirect = get(config, 'redirect', false);

    if (this.redirect === 'return') {
      // The useragent arrived at the Oauth redirect URL
      this.loginActive = true; // Hide the login button on this redirect display
      finishAuth();
      return;
    }

    // Now we should be on an actual flow, not a redirect page:

    this.make_card_button = get(config, 'make_card_button', false);
    this.reconnect_button = get(config, 'reconnect_button', false);
    this.get_balance = get(config, 'get_balance', false);
    this.list_all_balances = get(config, 'list_all_balances', false);

    if (!this.loginActive) {
      // we can't do anything without login, the UI will already show login button so we stop now.
      return;
    }

    if (this.get_balance) {
      if (this.get_balance.hasOwnProperty('ILP')) {
        this.balance_target_type = 'ILP';
        this.balance_address = this.get_balance['ILP'];
        this.upholdService.get_xrp_cards_list(true);
      }
    }
    if (this.list_all_balances === true) {
      this.upholdService.get_xrp_cards_list(false);
    }
  }

  onData(data: any, _firstChange: boolean) {
    this.paymentPointer = mappingUtility(
      { data: this.model, context: this.context },
      this.paymentPointerSourceMapping
    );
  }
}
