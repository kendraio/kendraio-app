import { Injectable } from '@angular/core';
import {AdaptersService} from './adapters.service';
import {map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {get} from 'lodash-es';
import {of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkflowRepoService {

  constructor(
    private readonly adapters: AdaptersService,
    private readonly http: HttpClient
  ) { }

  getBlocks(adapterName: string, workflowId: string) {
    return this.adapters.getAdapter(adapterName)
      .pipe(
        switchMap(adapterConfig => {
          const blocks = get(adapterConfig, `workflows.${workflowId}`);
          if (!!blocks) {
            return of(blocks);
          }
          return this.http.get(`/assets/adapters/${adapterName}/${workflowId}.json`);
        })
      );
  }

}
