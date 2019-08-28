import { Injectable } from '@angular/core';
import { FormSubmitHandlerService } from '../services/form-submit-handler.service';
import { filter, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeostoProfileHandlerService {

  constructor(
    private readonly formSubmit: FormSubmitHandlerService
  ) {
    this.formSubmit.actions$
      .pipe(
        filter(({ form }) => form === 'teosto:profile')
      )
      .subscribe(({ payload }) => {
        localStorage.setItem('teosto-user-profile', JSON.stringify(payload));
      });
  }

  getProfile() {
    const teostoProfile = JSON.parse(localStorage.getItem('teosto-user-profile'));
    return teostoProfile || {};
  }
}
