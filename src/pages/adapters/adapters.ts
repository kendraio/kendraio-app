import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from '../../app/state';
import { getAdapterEnabledList } from '../../app/state/adapters/selectors';

@Component({
  selector: 'page-adapters',
  templateUrl: 'adapters.html'
})
export class AdaptersPage implements OnInit {

  adapters$;

  constructor(public navCtrl: NavController, private store: Store<AppState>) {

  }

  ngOnInit() {
    this.adapters$ = this.store.select(getAdapterEnabledList);
  }

}
