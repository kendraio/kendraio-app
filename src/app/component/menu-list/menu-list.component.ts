import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuLink } from '@store/model';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent {
  @Input() links: Array<MenuLink>;
  @Output() itemSelected = new EventEmitter<MenuLink>();

  onLinkClick(link: MenuLink) {
    this.itemSelected.emit(link);
  }
}
