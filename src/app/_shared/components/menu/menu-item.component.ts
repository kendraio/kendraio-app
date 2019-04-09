import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import { MenuItem } from 'src/app/_models/classes/common';


@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {
  @Input() items: MenuItem[];
  @ViewChild('childMenu') public childMenu;

  constructor(public router: Router) {
  }

  ngOnInit() {
  }
}
