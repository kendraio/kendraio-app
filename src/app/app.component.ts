import { Component, ViewChild } from '@angular/core';
import { HomePage } from '@pages/home.page';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { MenuSetLinksAction } from '@store/actions/menu';
import { SettingsPage } from '@pages/settings.page';
import { IdentityPage } from '@pages/identity.page';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  rootPage = HomePage;

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private store: Store<AppState>
  ) {
    this.initializeApp();
    this.store.dispatch(new MenuSetLinksAction([
      { title: 'Dashboard', component: HomePage },
      { title: 'Identity', component: IdentityPage },
      { title: 'Settings', component: SettingsPage }
    ]))
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
