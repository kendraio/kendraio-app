import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LocalDatabaseService} from './local-database.service';
import {findIndex, get, has} from 'lodash-es';
import {AppSettingsService} from './app-settings.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as LZS from 'lz-string';

@Injectable({
  providedIn: 'root'
})
export class AdapterInstallService {

  constructor(
    private readonly http: HttpClient,
    private readonly localData: LocalDatabaseService,
    private readonly settings: AppSettingsService,
    private readonly notify: MatSnackBar
  ) { }

  addNewAdapter(adapter) {
    const errorReporter = params => err => console.error('db error', err.message, params);
    // console.log({ adapter });
    this.localData['adapters']
      .add({ ...adapter, name: get(adapter, 'adapterName'), modified: false })
      .then(() => {
        this.notify.open('Saved adapter', 'OK', { verticalPosition: 'top', horizontalPosition: 'center', duration: 2000 });
      })
      .catch(errorReporter(adapter));
  }

  addNewWorkflow(workflow) {
    const { adapterName, workflowId, title } = workflow;
    const errorReporter = params => err => console.error('db error', err.message, params);
    // console.log({ workflow });

    this.localData['workflows']
      .add({ ...workflow, adapterName, workflowId, title, blocks: [] })
      .catch(errorReporter(workflow))
      .then(() => {
        this.localData['adapters'].get(adapterName).then(adapter => {
          const workflowMeta = get(adapter, 'workflow', []);
          workflowMeta.push({ ...workflow, modified: false });
          this.localData['adapters'].update(adapterName, { ...adapter, workflow: workflowMeta, modified: true }).then(() => {
            this.notify.open('Saved workflow', 'OK', { verticalPosition: 'top', horizontalPosition: 'center', duration: 2000 });
          });
        });
      });
  }

  async cloneAdapter(payload) {
    const { sourceAdapter, sourceId, targetAdapter, targetId } = payload;
    const workflow = get(await this.localData['workflows'].where({adapterName: sourceAdapter, workflowId: sourceId}).toArray(), '[0]', {});

    const errorReporter = params => err => console.error('db error', err.message, params);
    this.localData['workflows']
      .add({ ...workflow, adapterName: targetAdapter, workflowId: targetId })
      .catch(errorReporter(workflow))
      .then(() => {
        this.localData['adapters'].get(targetAdapter).then(adapter => {
          const workflowMeta = get(adapter, 'workflow', []);
          workflowMeta.push({ adapterName: targetAdapter, workflowId: targetId, title: workflow.title, modified: false });
          this.localData['adapters'].update(targetAdapter, { ...adapter, workflow: workflowMeta, modified: true }).then(() => {
            this.notify.open('Saved workflow', 'OK', { verticalPosition: 'top', horizontalPosition: 'center', duration: 2000 });
          });
        });
      });
  }

  async compileAdapter(adapterConfig) {
    // console.log({adapterConfig});
    const {adapterName} = adapterConfig;
    // const compressed = LZS.compressToEncodedURIComponent(JSON.stringify(adapterConfig));
    const database = get(adapterConfig, 'database', [])
      .map(item => ({ ...item, schema: `schemas/${item.schemaName}.json`}));
    const workflow = get(adapterConfig, 'workflow', [])
      .map(item => ({ ...item, config: `configs/${item.workflowId}.json`}));
    const forms = get(adapterConfig, 'forms', [])
      .map(item => ({ ...item, jsonSchema: `jsonSchema/${item.formId}.json`, uiSchema: `uiSchema/${item.formId}.json`}));

    const attachments = {};

    const databaseConfigs = await this.localData['schemas'].where({adapterName}).toArray();
    databaseConfigs.forEach(item => {
      attachments[`schemas/${item.schemaName}.json`] = item;
    });
    const workflowConfigs = await this.localData['workflows'].where({adapterName}).toArray();
    workflowConfigs.forEach(item => {
      attachments[`configs/${item.workflowId}.json`] = item;
    });
    const formConfigs = await this.localData['forms'].where({adapterName}).toArray();
    formConfigs.forEach(item => {
      attachments[`jsonSchema/${item.formId}.json`] = item.jsonSchema;
      attachments[`uiSchema/${item.formId}.json`] = item.uiSchema;
    });

    const exportData = {...adapterConfig, workflow, database, forms, attachments};
    return exportData;
  }

  async exportAdapter(adapterConfig) {
    const {adapterName} = adapterConfig;
    this.compileAdapter(adapterConfig).then(exportData => {
      this.downloadData(exportData, adapterName);
    });
  }

  downloadData(outputData, fileName) {
    const blob = new Blob([JSON.stringify(outputData, null, 2)], { type: `application/json;charset=utf-8;` });
    const link = document.createElement('a');
    if (link.download !== undefined) { // feature detection
      // Browsers that support HTML5 download attribute
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', `${fileName}.json`);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  async commitAdapter(adapterCommitConfig) {
    const {adapterConfig, repositoryUrl, branch, commitMessage, token} = adapterCommitConfig;
    const {adapterName} = adapterConfig;
    this.compileAdapter(adapterConfig).then(exportData => {
      this.commitData(exportData, adapterName, repositoryUrl, branch, commitMessage, token);
    });
  }
   
  /**
   * Returns the latest commit hash for the given branch
   * @param repositoryUrl github repository "owner/repo"
   * @param branch 
   * @param token 
   */
  async getLatestCommitOid(repositoryUrl, branch, token) {
    // split repositoryUrl to get the owner and name
    const [owner, name] = repositoryUrl.split('/').slice(-2);
    // use the github graphql api to get the latest commit hash
    const query = `
      query {
        repository(owner: "${owner}", name: "${name}") {
          ... on Repository{
            ref(qualifiedName: "${branch}") {
                       target {
                         ... on Commit {
                           oid
                         }
                       }
                     }      
                }
          }
        }
    `;      
    const response = await fetch(`https://api.github.com/graphql`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });
    const data = await response.json();
    const commitOid = get(data, 'data.repository.ref.target.oid', '');
    return commitOid;
  }
  /**
   *  Commit data to github repository
   * @param outputData 
   * @param fileName 
   * @param repositoryUrl 
   * @param branch 
   * @param commitMessage 
   * @param token 
   */
  commitData(outputData, fileName, repositoryUrl, branch, commitMessage, token) {
    // encode data to base64
    const content = btoa(JSON.stringify(outputData, null, 2));
       // get the latest commit hash
    this.getLatestCommitOid(repositoryUrl, branch, token).then(commitOid => {
      // use the github graphql api to create a new commit
      const query = `        
          mutation MyQuery($input: CreateCommitOnBranchInput!) 
          { 
            createCommitOnBranch(input: $input) { 
          commit { 
            url 
          } 
    }`
      const variables = `{
        "input": {
          "branch": {
            "repositoryNameWithOwner": "${repositoryUrl}",
            "branchName": "${branch}"
          },
          "message": {
            "headline": "${commitMessage}",
          },
          "fileChanges": {
            "additions": [
              {
                "path": "${fileName}.json",
                "contents": "${content}"
              }
            ]
          },
          "expectedHeadOid": "${commitOid}"
        }
      }`;
      // call the graphql api
      const response = fetch(`https://api.github.com/graphql`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: query, variables: variables }), 
      });
      // handle the response
      response.then(res => {
        res.json().then(data => {
          console.log(data);
        });
      }); 
    });
  }



  importAdapter({ attachments, ...adapterConfig }) {
    // const decompressed = LZS.decompressFromEncodedURIComponent(data);
    // return JSON.parse(decompressed);

    const adapterName = get(adapterConfig, 'name');
    if (!adapterName) {
      throw new Error('Adapter config does not have a name property');
    }
    const errorReporter = params => err => console.error('db error', err.message, params);

    // Load in main adapter metadata
    this.localData['adapters']
      .add({ ...adapterConfig, adapterName, modified: false })
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
      const schemaConfig = get(attachments, schema, {});
      this.localData['schemas']
        .add({ ...schemaConfig, schemaName, adapterName })
        .catch(errorReporter({ schema }));
    });

    // Load in workflow configs
    const workflows = get(adapterConfig, 'workflow', []);
    workflows.forEach(({ title, workflowId, config }) => {
      const workflowConfig = get(attachments, config, {});
      this.localData['workflows']
        .add({ ...workflowConfig, title, workflowId, adapterName, modified: false })
        .catch(errorReporter({ workflowId }));
    });

    // Load in form configs
    const forms = get(adapterConfig, 'forms', []);
    forms.forEach(({ formId, title, jsonSchema, uiSchema }) => {
      const jsonSchemaConfig = get(attachments,  jsonSchema, {});
      const uiSchemaConfig = get(attachments, uiSchema, {});
      this.localData['forms']
        .add({ formId, title, jsonSchema: jsonSchemaConfig, uiSchema: uiSchemaConfig, adapterName })
        .catch(errorReporter({ formId }));
    });

    // Load in API configs
    const apis = get(adapterConfig, 'apis', []);
    apis.forEach((apiPath) => {
      const apiConfig = get(attachments, apiPath, {});
      this.localData['apis']
        .add({ adapterName, apiPath, apiConfig })
        .catch(errorReporter({ apiPath }));
    });
  }

  install({ repoUrl, name }) {
    // console.log(`Installing ${name} from ${repoUrl}`);
    this.http.get<any>(`${repoUrl}${name}.json`, { responseType: 'json' })
      .subscribe(({ attachments, ...adapterConfig }) => {
        this.importAdapter({ attachments, ...adapterConfig });
        setTimeout(() => this.settings.settingsUpdated$.next(), 400);
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
