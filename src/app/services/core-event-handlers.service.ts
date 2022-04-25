import { Injectable } from '@angular/core';
import {FormSubmitHandlerService} from './form-submit-handler.service';
import {filter} from 'rxjs/operators';
import {AdaptersService} from './adapters.service';
import {DocumentRepositoryService} from './document-repository.service';
import {get, has} from 'lodash-es';
import {WorkflowService} from './workflow.service';
import {LocalDatabaseService} from './local-database.service';
import {AdapterInstallService} from './adapter-install.service';
import {TranslateService} from '@ngx-translate/core';
import { AppSettingsService } from './app-settings.service';

@Injectable({
  providedIn: 'root'
})
export class CoreEventHandlersService {

  constructor(
    private readonly formSubmit: FormSubmitHandlerService,
    private readonly adapters: AdaptersService,
    private readonly database: DocumentRepositoryService,
    private readonly workflow: WorkflowService,
    private readonly localData: LocalDatabaseService,
    private readonly adapterInstall: AdapterInstallService,
    private readonly translate: TranslateService,
    private readonly settings: AppSettingsService
  ) {
    // The main settings page now has an option to "Expose core actions". 
    // If this is enabled, we allow workflows to the core actions.
    // Without this setting, only core workflows can do this
    const expose = this.settings.get('exposeCoreActions', false);
    this.formSubmit.actions$
      .pipe( 
        // Filter events that don't come from core workflows, unless we have explicitly exposed these actions
      
        filter(({ form }) => (form === 'core') || expose)
      )
      .subscribe(({ action, payload }) => {
        switch (action) {
          case 'resetApp':
            // TODO: refactor this into workflow actions
            // TODO: uninstall all adapters (uninstall hooks delete to delete data)
            this.adapters.resetApp();
            this.database.resetApp();
            this.localData.resetApp();
            break;
          case 'installAdapter':
            // console.log({ payload });
            this.adapterInstall.install(payload);
            break;
          case 'uninstallAdapter':
            // console.log('uninstall', { payload });
            this.adapterInstall.uninstall(payload);
            break;
          case 'addNewAdapter':
            this.adapterInstall.addNewAdapter(payload);
            break;
          case 'addNewWorkflow':
            this.adapterInstall.addNewWorkflow(payload);
            break;
          case 'exportAdapter':
            this.adapterInstall.exportAdapter(payload);
            break;
          case 'importAdapter':
            this.adapterInstall.importAdapter(payload);
            break;
          case 'cloneAdapter':
            this.adapterInstall.cloneAdapter(payload);
            break;
          case 'enableAdapter':
            if (has(payload, 'adapter.name')) {
              this.adapters.enableAdapter(get(payload, 'adapter.name'));
              this.workflow.refresh();
            }
            break;
          case 'disableAdapter':
            if (has(payload, 'adapter.name')) {
              this.adapters.disableAdapter(get(payload, 'adapter.name'));
              this.workflow.refresh();
            }
            break;
          case 'refreshWorkflow':
            this.workflow.refresh();
            break;
          case 'debug':
            console.log('Debug action', payload);
            break;
          case 'switchLanguage':
            const { language } = payload;
            this.translate.use(language);
            break;
          default:
            console.log('Unknown core action', action);
            break;
        }
      });
    this.formSubmit.actions$
      .pipe(
      )
      .subscribe(({action, payload}) => {         
        if (action === 'refreshWorkflow') {
          this.workflow.refresh();
          return;
        }
        
        
      });
  }
}
