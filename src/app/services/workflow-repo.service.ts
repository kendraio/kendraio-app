import { Injectable } from '@angular/core';
import {AdaptersService} from './adapters.service';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {get} from 'lodash-es';
import {from, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {LocalDatabaseService} from './local-database.service';
import {environment} from '../../environments/environment';
import {camelCase} from 'camel-case';

@Injectable({
  providedIn: 'root'
})
export class WorkflowRepoService {

  configCache = {};

  constructor(
    private readonly adapters: AdaptersService,
    private readonly http: HttpClient,
    private readonly localData: LocalDatabaseService
  ) { }

  clearCacheFor(adapterName: string, workflowId: string) {
    delete(this.configCache[`${adapterName}::${workflowId}`]);
  }

  getBlocks(adapterName: string, workflowId: string) {
    const context = {
      // TODO: Object wrapper for context to enforce rules about use, for example
      // the app key is for internal use only and workflows should be prevented from updating this
      app: {
        adapterName,
        workflowId,
        location: location,
        // TODO: adapter info may not be loaded at this point
        // adapters: this.adapters.getAdaptersInfo()
      }
    };

    if (this.configCache[`${adapterName}::${workflowId}`]) {
      const { title, blocks, tags } = this.configCache[`${adapterName}::${workflowId}`];
      return of({ title, blocks, tags, adapterName, workflowId, context });
    }

    // Attempt to load workflow from DB, fall back to legacy loading if not found
    return from(this.localData['workflows'].where({
      adapterName,
      workflowId
    }).first()).pipe(
      switchMap((data: any) => {
        if (!!data) {
          const { title, blocks, tags } = data;
          this.configCache[`${adapterName}::${workflowId}`] = data;
          return of({ title, blocks, tags, adapterName, workflowId, context });
        }

        const URL = `${environment.workflowStoreUrl}/${adapterName}/${camelCase(workflowId)}`;
        return this.http.get(URL).pipe(
          map(config => ({
            ...config,
            context: {
              app: {
                adapterName,
                workflowId
              }
            }
          })),
          tap(({ title, blocks, tags }: any) => {
            this.configCache[`${adapterName}::${workflowId}`] = { title, blocks, tags };
          }),
          catchError(err => {
            const URL2 = `${environment.workflowStoreUrl}/${adapterName}/${workflowId}`;
            return this.http.get(URL2).pipe(
              map(config => ({
                ...config,
                context: {
                  app: {
                    adapterName,
                    workflowId
                  }
                }
              })),
              tap(({ title, blocks, tags }: any) => {
                this.configCache[`${adapterName}::${workflowId}`] = { title, blocks, tags };
              }),
              catchError(err2 => {
                console.log(`Workflow ${workflowId} loaded with previous loader`);
                return this.prevGetBlocks(adapterName, workflowId, context);
              })
            );
          })
        );
      })
    );
  }

  // TODO: remove this old implementation once all workflows are loaded from DB
  prevGetBlocks(adapterName: string, workflowId: string, context) {
    return this.adapters.getAdapter(adapterName)
      .pipe(
        switchMap(adapterConfig => {
          const blocks = get(adapterConfig, `workflows.${workflowId}`);
          if (!!blocks) {
            return of(blocks);
          }
          return this.http.get(`/assets/adapters/${adapterName}/${workflowId}.json`)
            .pipe(
              map((config) => {
                return { ...config, context };
              })
            );
        })
      );
  }

}
