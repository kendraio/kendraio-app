import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
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
      href: '/claims',
      title: 'Claims',
      icon: 'attach_money'
    },
    {
      href: '/tasks',
      title: 'Tasks',
      icon: 'alarm_on'
    },
    {
      href: '/reports',
      title: 'Reports',
      icon: 'assignment'
    },
    {
      href: '/contacts',
      title: 'Contacts',
      icon: 'contacts'
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
      title: 'settings',
      icon: 'settings'
    },
    {
      href: '/docs',
      title: 'database',
      icon: 'storage'
    },
    {
      href: '/user',
      title: 'Identities',
      icon: 'person'
    }
  ];

  pageTitle$: Observable<{ title: string, isWorkflow: boolean}>;
  sidenav: MatSidenav;

  constructor(
    private readonly router: Router,
    private readonly title: PageTitleService,

  ) { }

  ngOnInit() {
    this.pageTitle$ = this.title.pageTitle$;
  //  this.sidenav.open();
  }

  onRefresh() {
    this.title.onRefresh();
  }

  gotoPage(href: string, sidenav: MatSidenav) {
    this.router.navigate([href]);
  // sidenav.open();
  }
}
