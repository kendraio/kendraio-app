import { Injectable } from '@angular/core';
import {TeostoProfileHandlerService} from '../handlers/teosto-profile-handler.service';
import {search} from 'jmespath';

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

  getUserContext() {
    const profile = JSON.parse(localStorage.getItem('kendraio-user-profile'));
    return profile || {};
  }

  getTeostoContext() {
    return this.teostoProfile.getProfile();
  }
}
