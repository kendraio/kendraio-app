import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ALL_PAGES } from '../pages';
import { initApp } from './utils/app-init';
import { Store } from '@ngrx/store';
import { AppStateModule } from './state';
import { ALL_COMPONENTS } from './components';
import { KendraioFormsService } from './services/kendraio-forms.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DynamicFormsCoreModule } from '@ng-dynamic-forms/core';
import { DynamicFormsIonicUIModule } from '@ng-dynamic-forms/ui-ionic';

@NgModule({
  declarations: [
    MyApp,
    ...ALL_PAGES,
    ...ALL_COMPONENTS
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AppStateModule,
    ReactiveFormsModule,
    HttpClientModule,
    DynamicFormsCoreModule.forRoot(),
    DynamicFormsIonicUIModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ...ALL_PAGES
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: APP_INITIALIZER, useFactory: initApp, deps: [Store], multi: true},
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    KendraioFormsService
  ]
})
export class AppModule {}
