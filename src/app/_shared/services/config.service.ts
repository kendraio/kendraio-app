import { Injectable, LOCALE_ID, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  constructor(
    @Inject(LOCALE_ID) public locale: string,
  ) { }
}
