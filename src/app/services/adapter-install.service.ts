import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LocalDatabaseService} from './local-database.service';
import {get, has} from 'lodash-es';

@Injectable({
  providedIn: 'root'
})
export class AdapterInstallService {

  constructor(
    private readonly http: HttpClient,
    private readonly localData: LocalDatabaseService
  ) { }

  install({ repoUrl, name }) {
    // console.log(`Installing ${name} from ${repoUrl}`);
    this.http.get<any>(`${repoUrl}${name}.json`, { responseType: 'json' })
      .subscribe(({ attachments, ...adapterConfig }) => {
        const adapterName = get(adapterConfig, 'name');
        if (!adapterName) {
          throw new Error('Adapter config does not have a name property');
        }
        const errorReporter = params => err => console.error('db error', err.message, params);

        // Load in main adapter metadata
        this.localData['adapters']
          .add({ ...adapterConfig, adapterName })
          .catch(errorReporter({ adapterName }));

        // Load in adapter dashboard route location
        if (has(adapterConfig, 'dashboard')) {
          this.localData['dashboards']
            .add({ ...get(adapterConfig, 'dashboard'), adapterName })
            .catch(errorReporter({ type: 'dashboard', adapterName }));
        }
        // Load services menu items
        const services = get(adapterConfig, 'services', []);
        this.localData['services']
          .add({ services, adapterName })
          .catch(errorReporter({ type: 'services', adapterName }));

        // Load in database schemas
        const schemas = get(adapterConfig, 'database', []);
        schemas.forEach(({ name: schemaName, schema }) => {
          const schemaConfig = get(adapterConfig, `attachments.${schema}`, {});
          this.localData['schemas']
            .add({ ...schemaConfig, schemaName, adapterName })
            .catch(errorReporter({ schema }));
        });

        // Load in workflow configs
        const workflows = get(adapterConfig, 'workflow', []);
        workflows.forEach(({ title, workflowId, config }) => {
          const workflowConfig = get(adapterConfig, `attachments.${config}`, {});
          this.localData['workflows']
            .add({ ...workflowConfig, title, workflowId, adapterName })
            .catch(errorReporter({ workflowId }));
        });

        // Load in form configs
        const forms = get(adapterConfig, 'forms', []);
        forms.forEach(({ formId, title, jsonSchema, uiSchema }) => {
          const jsonSchemaConfig = get(adapterConfig,  `attachments.${jsonSchema}`, {});
          const uiSchemaConfig = get(adapterConfig,  `attachments.${uiSchema}`, {});
          this.localData['forms']
            .add({ formId, title, jsonSchema: jsonSchemaConfig, uiSchema: uiSchemaConfig, adapterName })
            .catch(errorReporter({ formId }));
        });

        // Load in API configs
        const apis = get(adapterConfig, 'apis', []);
        apis.forEach((apiPath) => {
          const apiConfig = get(adapterConfig, `attachments.${apiPath}`, {});
          this.localData['apis']
            .add({ adapterName, apiPath, apiConfig })
            .catch(errorReporter({ apiPath }));
        });
      });
  }

  uninstall({ name: adapterName }) {
    this.localData['adapters'].where({ adapterName }).delete();
    this.localData['dashboards'].where({ adapterName }).delete();
    this.localData['services'].where({ adapterName }).delete();
    this.localData['schemas'].where({ adapterName }).delete();
    this.localData['forms'].where({ adapterName }).delete();
    this.localData['workflows'].where({ adapterName }).delete();
    this.localData['apis'].where({ adapterName }).delete();
  }
}
