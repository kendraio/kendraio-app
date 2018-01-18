import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MenuLink } from '@store/model';
import { Nav } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState, getMenuItems } from '@store/reducers';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @ViewChild(Nav) nav: Nav;
  @Input() menuTitle: string;
  @Input() rootPage: any;

  links$: Observable<Array<MenuLink>>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.links$ = this.store.select(getMenuItems);
  }

  goto(link: MenuLink) {
    this.nav.setRoot(link.component);
  }
}
