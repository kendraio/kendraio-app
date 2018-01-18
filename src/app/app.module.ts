import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AppComponent } from './app.component';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HomePage } from '@pages/home.page';
import { LayoutComponent } from './container/layout/layout.component';
import { MenuListComponent } from './component/menu-list/menu-list.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '@store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { SettingsPage } from '@pages/settings.page';
import { IdentityPage } from '@pages/identity.page';
import { RinEffects } from '@store/effects/rin';
import { ProjectListComponent } from './component/project-list/project-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    SettingsPage,
    IdentityPage,
    LayoutComponent,
    MenuListComponent,
    ProjectListComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(AppComponent),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([ RinEffects ])
  ],
  entryComponents: [
    HomePage,
    SettingsPage,
    IdentityPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    RinEffects,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  bootstrap: [IonicApp]
})
export class AppModule {
}
