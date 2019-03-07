import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav, MatMenu } from '@angular/material';
import { Observable } from 'rxjs';
import {SharedModule} from '../../_shared/shared.module';
import { PageTitleService } from '../../services/page-title.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  links = [
    {
      href: '/',
      title: 'Dashboard',
      icon: 'dashboard'
    },
    {
      href: '/assets',
      title: 'Assets',
      icon: 'favorite'
    },
    {
      href: '/claims',
      title: 'Claims',
      icon: 'attach_money'
    },
    {
      href: '/import',
      title: 'Import',
      icon: 'import_export'
    },
    {
      href: '/upload',
      title: 'Upload',
      icon: 'cloud_upload'
    },
    // {
    //   href: '/diagram',
    //   title: 'Processes',
    //   icon: 'bubble_chart'
    // },
    {
      href: '/adapters',
      title: 'Adapters',
      icon: 'extension'
    },
    {
      href: '/settings',
      title: 'Settings',
      icon: 'settings'
    },
    {
      href: '/docs',
      title: 'Database',
      icon: 'storage'
    },
    {
      href: '/user',
      title: 'Identities',
      icon: 'person'
    }
  ];

  pageTitle$: Observable<string>;
  sidenav: MatSidenav;

  constructor(
    private readonly router: Router,
    private readonly title: PageTitleService,
   
  ) { }

  ngOnInit() {
    this.pageTitle$ = this.title.pageTitle$;
  //  this.sidenav.open();
  }

  gotoPage(href: string, sidenav: MatSidenav) {
    this.router.navigate([href]);
  // sidenav.open();
  }
}
