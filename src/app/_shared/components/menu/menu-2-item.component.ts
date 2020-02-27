import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import { MenuItem } from 'src/app/_models/classes/common';


@Component({
  selector: 'app-menu-2-item',
  templateUrl: './menu-2-item.component.html'
})
export class Menu2ItemComponent implements OnInit {
  @Input() items: MenuItem[];
  @ViewChild('childMenu', { static: false }) public childMenu;

  constructor(public router: Router) {
  }

  ngOnInit() {
  }
}

