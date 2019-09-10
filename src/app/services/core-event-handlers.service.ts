import { Injectable } from '@angular/core';
import {FormSubmitHandlerService} from './form-submit-handler.service';
import {filter} from 'rxjs/operators';
import {AdaptersService} from './adapters.service';
import {DocumentRepositoryService} from './document-repository.service';

@Injectable({
  providedIn: 'root'
})
export class CoreEventHandlersService {

  constructor(
    private readonly formSubmit: FormSubmitHandlerService,
    private readonly adapters: AdaptersService,
    private readonly database: DocumentRepositoryService
  ) {
    this.formSubmit.actions$
      .pipe(
        filter(({ form }) => form === 'core')
      )
      .subscribe(({ action, payload }) => {
        switch (action) {
          case 'resetApp':
            // TODO: refactor this into workflow actions
            // TODO: uninstall all adapters (uninstall hooks delete to delete data)
            this.adapters.resetApp();
            this.database.resetApp();
            break;
          case 'debug':
            console.log('Debug action', payload);
            break;
          default:
            console.log('Unknown core action', action);
            break;
        }
      });
  }
}
