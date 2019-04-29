import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BreadCrumb } from 'src/app/_models/classes/common';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { get } from 'lodash-es';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BreadcrumbComponent implements OnInit {
  @Input() locale = 'en';
  breadcrumbs$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    distinctUntilChanged(),
    map(event => this.buildBreadCrumb(this.activatedRoute))
  );
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public translate: TranslateService
  ) {
  }

  ngOnInit() {
  }

  buildBreadCrumb(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: Array<BreadCrumb> = []): Array<BreadCrumb> {
    const label = get('routeConfig.data.breadcrumb.en-US', 'Home');
    const path = route.routeConfig ? route.routeConfig.path : '..'; // fix this
    const nextUrl = `${url}/${path}`;
    const breadcrumb = {
      label: label,
      url: nextUrl,
    };
    let newBreadcrumbs;
    newBreadcrumbs = [...breadcrumbs, breadcrumb];

    if (route.firstChild !== null) {
      // console.log(this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs).filter(item => item['label'] > ''));
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs).filter(item => item['label'] > '');

    }
    return newBreadcrumbs;

  }
  getLabel(arg: any): any {
    if (arg && arg.data) {
      return arg.data['breadcrumb'];
    } else {
      return null;
    }
  }

}
