import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

/**
 * Async modal dialog service
 * 
 * TODO: better modal implementation that doesn't use window.confirm
 */
@Injectable({
  providedIn: 'root',
})
export class DirtyDialogService {
   /**
   * Ask user to confirm an action. `message` explains the action and choices.
   * Returns observable resolving to `true`=confirm or `false`=cancel
   */
  confirm(message?: string): Observable<boolean> {
    console.log('DirtyDialogService.confirm', message);
    const confirmation = window.confirm(message || 'Is it OK?');
    return of(confirmation);
  }
}