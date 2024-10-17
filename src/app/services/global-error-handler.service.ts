import { Injectable, ErrorHandler } from '@angular/core';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { Subject } from 'rxjs';
import { debounceTime, throttleTime } from 'rxjs/operators';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
  error$ = new Subject();

  constructor(private readonly notify: MatSnackBar) {
    this.error$.pipe(throttleTime(4000)).subscribe((error: any) => {
      this.notify.dismiss();
      if (error.message && error.message.length > 0) {
        this.notify.open(error.message, 'Dismiss', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 4000,
        });
      }
    });
  }

  handleError(error: any): void {
    console.error(error);
    this.error$.next(error);
  }
}
