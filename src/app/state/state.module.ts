import { NgModule, Optional, SkipSelf } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AdaptersEffects } from './adapters/effects';
import { NodesEffects } from './nodes/effects';
import { AppEffects } from './app/effects';

@NgModule({
  imports: [
    // The single global state of the app
    StoreModule.forRoot(reducers, { metaReducers }),

    // Only enable this next line in dev environments
    // Is allows use of Redux dev tools in the browser
    StoreDevtoolsModule.instrument(),

    // All side effects are contained within effects classes
    EffectsModule.forRoot([
      AdaptersEffects,
      NodesEffects,
      AppEffects
    ])
  ]
})
export class AppStateModule {
  constructor(
    // check module is only imported once
    @Optional() @SkipSelf() parentModule: AppStateModule
  ) {
    if (parentModule) {
      throw new Error('AppStateModule is already loaded. Import only in AppModule.');
    }
  }
}
