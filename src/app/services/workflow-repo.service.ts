import { Injectable } from '@angular/core';
import {AdaptersService} from './adapters.service';
import {map, switchMap, tap} from 'rxjs/operators';
import {get} from 'lodash-es';
import {from, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {LocalDatabaseService} from './local-database.service';

@Injectable({
  providedIn: 'root'
})
export class WorkflowRepoService {

  constructor(
    private readonly adapters: AdaptersService,
    private readonly http: HttpClient,
    private readonly localData: LocalDatabaseService
  ) { }

  getBlocks(adapterName: string, workflowId: string) {
    const context = {
      // TODO: Object wrapper for context to enforce rules about use, for example
      // the app key is for internal use only and workflows should be prevented from updating this
      app: {
        adapterName,
        workflowId,
        // TODO: adapter info may not be loaded at this point
        adapters: this.adapters.getAdaptersInfo()
      }
    };

    // Attempt to load workflow from DB, fall back to legacy loading if not found
    return from(this.localData['workflows'].where({
      adapterName,
      workflowId
    }).first()).pipe(
      switchMap((data: any) => {
        if (!!data) {
          const { title, blocks } = data;
          return of({ title, blocks, adapterName, workflowId, context });
        }
        console.log(`Workflow ${workflowId} loaded with previous loader`);
        return this.prevGetBlocks(adapterName, workflowId, context);
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
