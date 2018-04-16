import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from '../../app/state';
import { getNodes, hasNodes } from '../../app/state/nodes/selectors';
import { NodePage } from '../node/node';
import { NodesActions } from '../../app/state/nodes/actions';
import { getSelectedAdapter, getSelectedAdapterNodeTypes } from '../../app/state/adapters/selectors';
import { AdaptersActions } from '../../app/state/adapters/actions';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  hasNodes$: Observable<boolean>;
  nodes$: Observable<Array<any>>;

  adapterId: string;
  nodeType: string;
  message: string = '';

  selectedAdapter$;
  selectedAdapterNodeTypes$;

  constructor(public navCtrl: NavController, private store: Store<AppState>) {

  }

  ngOnInit() {
    this.hasNodes$ = this.store.select(hasNodes);
    this.nodes$ = this.store.select(getNodes);
    this.selectedAdapter$ = this.store.select(getSelectedAdapter);
    this.selectedAdapterNodeTypes$ = this.store.select(getSelectedAdapterNodeTypes);
  }

  itemTapped(event, item) {
    this.navCtrl.push(NodePage, {
      item: item,
      adapterId: 'm-rin'
    });
  }

  onAdapterChange(id) {
    this.adapterId = id;
    this.store.dispatch(AdaptersActions.selectAdapter({ id }));
  }

  onTypeChange(type) {
    this.nodeType = type;
  }

  addNode() {
    if (this.adapterId && this.nodeType) {
      this.message = '';
      this.store.dispatch(NodesActions.addNode({ adapterId: this.adapterId, type: this.nodeType }));
    } else {
      this.message = 'Select adapter and node type';
    }
  }
}
