import { Injectable } from '@angular/core';
import { set } from 'lodash';
import {HttpClient} from '@angular/common/http';
import {environment} from '@env/environment';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConnectionManagerService {

  connections: Set<string> = new Set<string>();
  flows = [];

  constructor(
    private readonly http: HttpClient,
  ) {
    const savedConnections = localStorage.getItem('kendraio-saved-connection-list');
    if (savedConnections) {
      (<string[]>JSON.parse(savedConnections)).forEach(workflowId => {
        this.connections.add(workflowId);
      });
    }
  }

  init() {
    return this.http.get<any[]>(`${environment.workflowStoreUrl}/tag/connect`)
      .pipe(
        tap(flows => this.flows = flows)
      )
      .toPromise();
  }

  addConnection(workflowId) {
    this.connections.add(workflowId);
    localStorage.setItem('kendraio-saved-connection-list', JSON.stringify(this.toPlainArray()));
  }

  toPlainArray(): string[] {
    return Array.from(this.connections.values());
  }

  addToContext(context) {
    set(context, 'app.connections', this.toPlainArray());
  }
}
