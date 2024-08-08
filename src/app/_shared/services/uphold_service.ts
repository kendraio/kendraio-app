import { clone } from 'lodash-es';
import { search } from '@daz.is/jmespath';

import { environment } from '../../../environments/environment';
import * as uuid from 'uuid';
// const axios = require('axios').default;
import axios from 'axios';

const UPHOLD_OAUTH_PROXY_URL = environment.uphold.proxy + 'api/login?code=';
const UPHOLD_SITE_ROOT = environment.uphold.siteRoot;
const UPHOLD_API_ROOT = environment.uphold.proxy;
const MY_UPHOLD_CARDS = environment.uphold.proxy + 'v0/me/cards/';

/**
 * Ensures the user has a recently authorised token 
 * 
 * @returns true if we have an Uphold auth token younger
 * than 25 minutes and otherwise returns false
 */
export function hasActiveToken(): boolean {
  const max_time = 25 * 60; // 25 minutes in seconds
  // this is an arbitrary time, as the token expiry date is undocumented:
  // https://uphold.com/en/developer/api/documentation/
  const timestamp = localStorage.getItem('uphold_token_timestamp');
  // if no timestamp exists, no active token exists either:
  if (!timestamp) { return false; }
  const issue_time = Number(timestamp);
  // calculate issue age in seconds:
  const issue_age = (Date.now() - issue_time) / 1000;
  const is_fresh = issue_age < max_time;
  return is_fresh;
}

/**
 * Generates the URL to redirect to for Uphold OAuth login button.
 * @returns url string with current location base64 encoded
 */
export function getUpholdOauthLoginURL(): string {
  // The URL is encoded and constructed like this, to ensure 
  // that arbitrary data from the pathname is encoded safely 
  // for use in the Oauth redirect URL

  // Encodes path as base64, to uniquely represent this
  // user auth attempt, and the users place here in our app,
  // we generate a random UUID with the current path appended 
  // to allow redirecting the user back to where they were once authorised:
  const oauthState = uuid.v4() + '_' + btoa(location.pathname);

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

/**
 * Called when the user has successfully logged in to Uphold
 * and we have received a code from the OAuth server. 
 */
export async function finishAuth(): Promise<void> {
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

/**
 * UpholdService
 */
export class UpholdService {
  // Uphold card IDs with XRP wallet balance and optional ILP address if exists:
  xrp_address_balances: { [key: string]: { balance: number, ILP_URL?: string } } = {};
  // Uphold token:
  token: string;
  // Optional Interledger address to get balance for:
  balance_address: string;
  // Output to emit the balance to:
  output: any;

  /**
   * Constructor
   */
  constructor(options: any) {
    if (options) {
      this.balance_address = options.balance_address;
      this.output = options.output;
    }
  }

  /**
   * Get the Uphold token or raise error without it
   */
  get_token() {
    this.token = localStorage.getItem('uphold_token');
    if (this.token) {
      return this.token;
    } else {
      console.error('No auth token loaded, stopping.');
    }
  }

  /**
   * Emits an array of the users XRP cards / wallets, as well as the balance for each.
   *
   * @param only_balance  If only_balance is true, then we only emit the balance for the specified address.
   * Otherwise we emit the entire list of balances.
   */
  public async get_xrp_cards_list(only_balance: boolean) {

    const token = this.get_token();
    if (!token) {
      return;
    }

    const parent_this = this; // we use this scope later to
    // save 'xrp_address_balances', 
    // look for a specified 'balance_address',
    // and emit our result to 'output'

    // TODO: use return instead of emit, to improve service seperation

    /**
     * Helper function to do authorised calls to the Uphold API
     * using the users Uphold token and return the data
     */
    async function oauth_get(url: string) {
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
      // we extract the Interledger address from the response using JMESPath
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

  /**
   * Makes a new XRP card with Interledger address.
   * 1. Post a request to make a new XRP card, 
   * 2. Requests the Interledger address for the card
   * 3. Emit new card data
   */
  public async make_card() {
    const token = this.get_token();
    if (!token) {
      return;
    }

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
}
