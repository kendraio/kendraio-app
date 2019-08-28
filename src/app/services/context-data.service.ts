import { Injectable } from '@angular/core';
import {TeostoProfileHandlerService} from '../handlers/teosto-profile-handler.service';
import {search} from 'jmespath';
import {has} from 'lodash-es';

@Injectable({
  providedIn: 'root'
})
export class ContextDataService {

  constructor(
    private readonly teostoProfile: TeostoProfileHandlerService
  ) {
  }

  // TODO: Generic handling of profile data from all adapters
  getGlobalContext(valueGetters) {
    const context = {
      user: {
        profile: this.getUserContext(),
        teosto: this.getTeostoContext()
      },
    };
    return Object.keys(valueGetters).reduce((a, v) => {
      a[v] = search(context, valueGetters[v]);
      return a;
    }, {});
  }

  getFromContextWithModel(endpoint, model) {
    // console.log({ endpoint, model });
    const context = {
      model,
      user: {
        profile: this.getUserContext(),
        teosto: this.getTeostoContext()
      },
    };
    // console.log({ context });
    const valueGetters = has(endpoint, 'valueGetters')
      ? Object.keys(endpoint.valueGetters).reduce((a, v) => {
        try {
          a[v] = search(context, endpoint.valueGetters[v]);
        } catch (e) {

        }
        return a;
        }, {})
      : {};
    return { ...endpoint, ...valueGetters };
  }

  getUserContext() {
    const profile = JSON.parse(localStorage.getItem('kendraio-user-profile'));
    return profile || {};
  }

  getTeostoContext() {
    return this.teostoProfile.getProfile();
  }
}
