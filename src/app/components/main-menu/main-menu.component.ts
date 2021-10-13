import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MenuItem } from '../../_models/classes/common';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { MenuBuilderService } from '../../services/menu-builder.service';
import { Animations } from '../../_shared/animations';

@Component({
  animations: [Animations.kendraAnimations],
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  treeControl = new NestedTreeControl<MenuItem>(node => node.children);
  dataSource = new MatTreeNestedDataSource<MenuItem>();
  menu$ = this.menuBuilder.menuItems$;

  hasChild = (_: number, node: MenuItem) => !!node.children && node.children.length > 0;

  constructor(
    private readonly menuBuilder: MenuBuilderService
  ) {
    this.dataSource.data = menuBuilder.getMenu();
  }

  ngOnInit() {
  }

  collapseAll(ev) {
    // const level = this.dataSource.data.indexOf(ev);
    //
    // if (level > -1) {
    //   for (let i = 0; i < this.dataSource.data.length; i++) {
    //     if (this.dataSource.data[i].label !== ev.label) {
    //       this.treeControl.collapse(this.dataSource.data[i]);
    //     }
    //   }
    // }
  }
}
