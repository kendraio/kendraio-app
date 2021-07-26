import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BaseBlockComponent } from '../base-block/base-block.component';
import { mappingUtility } from '../mapping-block/mapping-util';
import { get } from 'lodash-es';
import * as uuid from 'uuid';
import { search } from '@daz.is/jmespath';

const axios = require('axios').default;
const qs = require('qs');

const CORS_PROXY = environment.corsProxyUrl;
const UPHOLD_OAUTH_PROXY_URL = environment.uphold.proxy;
const UPHOLD_SITE_ROOT = environment.uphold.siteRoot;
const UPHOLD_API_ROOT = environment.uphold.apiRoot;

const MY_UPHOLD_CARDS = UPHOLD_API_ROOT + 'v0/me/cards';

// TODO: define expected config and emit output when listing all cards
// TODO: define expected config and emit output when listing the balance for a card
// TODO: define expected config and emit output when making new cards


function hasActiveToken() {
  const max_time = 25 * 60 * 1000;
  // TODO: validate this
  const issue_time = Number(localStorage.getItem('uphold_token_timestamp'));
  const issue_age = (Date.now() - issue_time) / 1000;
  console.log('issue age', issue_age);
  const is_fresh = (issue_time && issue_age < max_time);
  console.log('is_fresh', is_fresh);
  return is_fresh;
}

function getUpholdOauthLoginURL() {
  const existing_path = btoa(location.pathname);
  const oauthState = uuid.v4() + '_' + existing_path;
  // A random UUID with our current path, to redirect back to.
  // URL is constructed like this, to ensure that potential 
  // arbitrary user data like the pathname is safely encoded
  const loginURL = new URL(UPHOLD_SITE_ROOT + 'authorize/' + environment.uphold.clientID);
  Object.entries({
    scope: 'transactions:read cards:write cards:read',
    state: oauthState
  }).forEach(([key, value]) => {
    loginURL.searchParams.append(key, value);
  });
  return loginURL.href;
}


@Component({
  selector: 'app-wallet-block',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent extends BaseBlockComponent {

  paymentPointerSourceMapping = 'data.paymentPointer';
  paymentPointer = '';
  enabled = true;
  login_url = '';
  loginActive = hasActiveToken();
  redirect = '';
  get_balance = '';
  code = '';
  token = '';
  cards = [];
  xrp_address_list = [];
  balance_target_type = '';
  balance_address = '';

  async check_auth_and_list_cards(only_balance) {
    const parent_this = this;

    async function main() {

      async function oauth_get(url) {

        const request = await axios.request({
          method: 'GET',
          url: CORS_PROXY,
          headers: {
            'Authorization': 'Bearer ' + parent_this.token,
            'Remove-Origin': '1',
            'Target-URL': UPHOLD_API_ROOT + url
          }
        });
        return await request.data;
      }

      const users_cards = await oauth_get('v0/me/cards/');
      const xrp_cards = users_cards.filter(item => item.currency === 'XRP');

      parent_this.xrp_address_list = [];

      await Promise.all(xrp_cards.map(async (card) => {
        const address_data = await oauth_get('v0/me/cards/' + card.id + '/addresses');
        const ILP_address = search(address_data, `[?type=='interledger'].formats[0].value|[0]`);
        const cardBalance = users_cards.filter(cardItem => cardItem.id === card.id)[0].balance;
        parent_this.xrp_address_list.push(ILP_address + ' ' + cardBalance);
        if (parent_this.balance_address === ILP_address && only_balance === true) {
          parent_this.output.emit(cardBalance);
        }
      }));

      if (only_balance !== true) {
        parent_this.output.emit(parent_this.xrp_address_list);
      }

    }

    if (hasActiveToken()) {
      parent_this.token = localStorage.getItem('uphold_token');
      main();
    } else {
      const response = await fetch(UPHOLD_OAUTH_PROXY_URL + parent_this.code, {
        method: 'POST'
      });

      const result = await response.json();
      if (result.access_token) {
        parent_this.token = result.access_token;
        console.dir(result);
        console.log(parent_this.token);

        // TODO: deduplicate code
        // TODO: ensure runs only once
        localStorage.setItem('uphold_token', result.access_token);
        localStorage.setItem('uphold_token_timestamp', Date.now().toString());
        main();
      }
    }

  }

  async make_card() {
    // 1. Post a request to make a new XRP card, 
    // 2. Requests the Interledger address for the card
    // 3. Emit card data

    const parent_this = this;

    axios.request({
      method: 'POST',
      url: CORS_PROXY,
      headers: {
        Authorization: 'Bearer ' + parent_this.token,
        'Remove-Origin': '1',
        'Target-URL': MY_UPHOLD_CARDS
      },
      data: { currency: 'XRP' }
    }).then(function (new_card_response) {
      const new_card_data = new_card_response.data;
      console.log('new_card_response', new_card_data);
      console.log(new_card_response.data);

      axios.request({
        method: 'POST',
        url: CORS_PROXY,
        headers: {
          Authorization: 'Bearer ' + parent_this.token,
          'Remove-Origin': '1',
          'Target-URL': MY_UPHOLD_CARDS + '/' + new_card_data.id + '/addresses'
        },
        data: { network: 'interledger' }
      }).then(function (interledger_address_response) {
        parent_this.xrp_address_list.push(interledger_address_response.data.id);
        parent_this.output.emit(parent_this.xrp_address_list);
        parent_this.check_auth_and_list_cards(false);

      }).catch(function (error) {
        console.error(error);
      });


    }).catch(function (error) {
      console.error(error);
    });






  }

  onConfigUpdate(config: any) {
    this.paymentPointerSourceMapping = get(config, 'mapping', 'data.paymentPointer');
    this.enabled = get(config, 'enabled', true);
    this.login_url = getUpholdOauthLoginURL(); // uses current location to redirect back here when done
    this.redirect = get(config, 'redirect', false);
    if (this.redirect === 'return') { // The useragent arrived at the Oauth redirect URL
      const parsed_url = new URL(window.location.href);
      this.code = parsed_url.searchParams.get('code');
      this.loginActive = true;
      const state = parsed_url.searchParams.get('state');
      const decoded_path_name = atob(state.split('_')[1]);
      // redirects to the original path if different, unless it is workflow-builder which would fail due 
      // to the URL 'search' parameters being incompatible
      if ((decoded_path_name !== window.location.pathname) && (decoded_path_name !== '/workflow-builder')) {
        window.location.pathname = decoded_path_name;

      }
    }
    this.get_balance = get(config, 'get_balance', false);
    if (this.get_balance) {
      if (this.get_balance.hasOwnProperty('ILP')) {
        this.balance_target_type = 'ILP';
        this.balance_address = this.get_balance['ILP'];
        this.check_auth_and_list_cards(true);

      }
    }
  }

  onData(data: any, _firstChange: boolean) {
    this.paymentPointer = mappingUtility({ data: this.model, context: this.context }, this.paymentPointerSourceMapping);
  }

}
