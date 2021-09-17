import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BaseBlockComponent } from '../base-block/base-block.component';
import { mappingUtility } from '../mapping-block/mapping-util';
import { get, clone } from 'lodash-es';
import * as uuid from 'uuid';
import { search } from '@daz.is/jmespath';

const axios = require('axios').default;

const UPHOLD_OAUTH_PROXY_URL = environment.uphold.proxy + 'api/login?code=';
const UPHOLD_SITE_ROOT = environment.uphold.siteRoot;
const UPHOLD_API_ROOT = environment.uphold.proxy;

const MY_UPHOLD_CARDS = environment.uphold.proxy + 'v0/me/cards/';


function hasActiveToken() {
  // To ensure user has a recently authorised token, this check
  // returns true if we have an Uphold auth token younger than 25 minutes 
  // and otherwise returns false
  // this is an arbitrary time, as the token expiry date is undocumented:
  // https://uphold.com/en/developer/api/documentation/

  const max_time = 25 * 60; // 25 minutes in seconds
  const timestamp = localStorage.getItem('uphold_token_timestamp');
  // if no timestamp exists, no active token exists either:
  if (!timestamp) { return false; }
  const issue_time = Number(timestamp);
  // calculate issue age in seconds:
  const issue_age = (Date.now() - issue_time) / 1000;
  const is_fresh = issue_age < max_time;
  return is_fresh;
}

function getUpholdOauthLoginURL() {
  // Returns the URL to redirect to for Uphold OAuth login button.
  // the URL is constructed like this, to ensure that arbitrary
  // data from the pathname is encoded safely for use in the
  // Oauth redirect URL
  const existing_path = btoa(location.pathname); // encodes path as base64
  // to uniquely represent this user auth attempt, and the users place here
  // in our app, we generate a random UUID with the current path appended 
  // to allow redirecting the user back to where they were once authorised:
  const oauthState = uuid.v4() + '_' + existing_path;
  // A random UUID with our current path, to redirect back to.
  // URL is constructed like this, to ensure that potential 
  // arbitrary user data like the pathname is safely encoded
  const loginURL = new URL(UPHOLD_SITE_ROOT + 'authorize/' + environment.uphold.clientID);
  // now we safely combine the above base URL with the query params
  // to create the full URL for the login button:
  Object.entries({
    scope: 'transactions:read cards:write cards:read',
    state: oauthState
  }).forEach(([key, value]) => {
    loginURL.searchParams.append(key, value);
  });
  return loginURL.href;
}


async function finish_auth() {
  // Called when the user has successfully logged in to Uphold
  // and we have received a code from the OAuth server. 
  // By this point the user has been redirect back to us, and we can now 
  // exchange this code for an access token then direct the user back to 
  // the original page they were on before.
  const parsed_url = new URL(window.location.href);
  // we parse the URL to extract the code from the query params
  const code = parsed_url.searchParams.get('code');
  // we then use the code to fetch the token from the OAuth proxy server
  const response = await fetch(UPHOLD_OAUTH_PROXY_URL + code, {
    method: 'POST'
  });
  // we then parse the response as JSON and extract the access token
  const result = await response.json();
  if (result.access_token) {
    // if we have an access token, we can store it in local storage for later use
    localStorage.setItem('uphold_token', result.access_token);
    localStorage.setItem('uphold_token_timestamp', Date.now().toString());

    // we also extract the 'state' from the query params, which is a unique
    // identifier for this user auth attempt that also contains the original
    // pathname of the page they were on before. We can use this to redirect
    // them back to where they were once authorised:
    const state = parsed_url.searchParams.get('state');
    // we decode the pathname from the state:
    const decoded_path_name = atob(state.split('_')[1]);
    // and redirects to the original path if different, unless it is
    // workflow-builder which would fail due to the URL 'search' parameters
    // being incompatible
    if ((decoded_path_name !== window.location.pathname) && (decoded_path_name !== '/workflow-builder')) {
      window.location.href = decoded_path_name;
    }
  }
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
  xrp_address_balances = {}; // Uphold card IDs with XRP wallet balance and ILP addresse if exist
  balance_target_type = '';
  balance_address = ''; // config may specify a balance of interest, stored here
  make_card_button = false;
  reconnect_button = false;
  list_all_balances = false;

  async get_xrp_cards_list(only_balance) {
    // Emits an array of the users XRP cards / wallets, as well as the balance for each.
    // If only_balance is true, then we only emit the balance for the specified address.
    // Otherwise we emit the entire list of balances.
    const parent_this = this; // we use this scope later to
    // save 'xrp_address_balances', 
    // look for a specified 'balance_address',
    // and emit our result to 'output'
    // We get the users Uphold token from local storage:
    this.token = localStorage.getItem('uphold_token');

    async function oauth_get(url) {
      // This helper function helps do authorised calls to the Uphold API
      // using the users Uphold token and return the data

      const request = await axios.request({
        method: 'GET',
        url: UPHOLD_API_ROOT + url,
        headers: {
          'Authorization': 'Bearer ' + parent_this.token
        }
      });

      return await request.data;
    }

    // we get a list of all the users cards:
    const users_cards = await oauth_get('v0/me/cards/');
    // we filter out the XRP cards:
    const xrp_cards = users_cards.filter(
      item => item.currency === 'XRP'
    );

    // we wait for all the XRP card balances to be fetched:
    await Promise.all(xrp_cards.map(async (card) => {
      // we get the balance for this card:
      const address_data = await oauth_get('v0/me/cards/' + card.id + '/addresses');
      // we extract the Interledger Protocol address from the response using JMESPath
      // assuming it exists:
      const ILP_address = search(address_data, `[?type=='interledger'].formats[0].value|[0]`);
      // we get the card from the list of results, to get the balance:
      const matchingCard = users_cards.filter(cardItem => cardItem.id === card.id)[0];
      // we parse the balance as a float:
      const cardBalance = parseFloat(matchingCard.balance);
      // we store the balance in our object of balances:
      parent_this.xrp_address_balances[card.id.replace(/-/g, '')] = { 'balance': cardBalance, 'ILP_URL': ILP_address };
      // if only_balance is true, we emit the balance for the specified address:
      if (parent_this.balance_address === ILP_address && only_balance === true) {
        parent_this.output.emit(cardBalance);
      }
    }));

    // if only_balance is not set, we emit all XRP card balances:
    if (only_balance !== true) {
      parent_this.output.emit(parent_this.xrp_address_balances);
    }

  }

  async make_card() {
    // Makes a new XRP card with Interledger address.
    // 1. Post a request to make a new XRP card, 
    // 2. Requests the Interledger address for the card
    // 3. Emit new card data

    // we emit using the 'output' of this scope,
    // and add the new card to 'xrp_address_balances'
    const parent_this = this;

    const new_card_request = await axios.request({
      method: 'POST',
      url: MY_UPHOLD_CARDS,
      headers: {
        Authorization: 'Bearer ' + parent_this.token
      },
      data: { currency: 'XRP' }
    });

    const new_card_data = await new_card_request.data;

    const interledger_address_request = await axios.request({
      method: 'POST',
      url: MY_UPHOLD_CARDS + new_card_data.id + '/addresses',
      headers: {
        Authorization: 'Bearer ' + parent_this.token
      },
      data: { network: 'interledger' }
    });

    const interledger_address_data = await interledger_address_request.data;

    // get new card id without dashes
    const card_id = new_card_data.id.replace(/-/g, '');

    // store the new card info to repulate the UI
    parent_this.xrp_address_balances[card_id] = {
      'balance': 0.00,
      'ILP_URL': interledger_address_data.id
    };

    // Output the cards, with the new card for flows to make use of:
    parent_this.output.emit(clone(parent_this.xrp_address_balances));

  }

  onConfigUpdate(config: any) {
    this.paymentPointerSourceMapping = get(config, 'mapping', 'data.paymentPointer');
    this.enabled = get(config, 'enabled', true);
    this.login_url = getUpholdOauthLoginURL(); // uses current location to redirect back here when done
    this.redirect = get(config, 'redirect', false);

    if (this.redirect === 'return') { // The useragent arrived at the Oauth redirect URL
      this.loginActive = true; // Hide the login button on this redirect display
      finish_auth();
      return;
    }

    this.make_card_button = get(config, 'make_card_button', false);
    this.reconnect_button = get(config, 'reconnect_button', false);
    this.get_balance = get(config, 'get_balance', false);
    this.list_all_balances = get(config, 'list_all_balances', false);

    if (this.get_balance) {
      if (this.get_balance.hasOwnProperty('ILP')) {
        this.balance_target_type = 'ILP';
        this.balance_address = this.get_balance['ILP'];
        this.get_xrp_cards_list(true);
      }
    }
    if (this.list_all_balances === true) {
      this.get_xrp_cards_list(false);
    }

  }

  onData(data: any, _firstChange: boolean) {
    this.paymentPointer = mappingUtility({ data: this.model, context: this.context }, this.paymentPointerSourceMapping);
  }

}
