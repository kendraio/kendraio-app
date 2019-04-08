import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BreadCrumb } from 'src/app/_models/classes/common';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    distinctUntilChanged(),
    map(event => this.buildBreadCrumb(this.activatedRoute))
  );
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
  }

  buildBreadCrumb(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: Array<BreadCrumb> = []): Array<BreadCrumb> {
    const label = route.routeConfig ? route.routeConfig.data[ 'breadcrumb' ] : 'Home';
    // const path = route.routeConfig ? route.routeConfig.path || 'assets' : '..'; // fix this
    const path = route.routeConfig ? route.routeConfig.path : '..'; // fix this
    const nextUrl = `${url}/${path}`;
    const breadcrumb = {
      label: label,
      url: nextUrl,
    };
    let newBreadcrumbs;

    newBreadcrumbs = [...breadcrumbs, breadcrumb];
    // console.log(route.routeConfig)

    if (route.firstChild !== null) {
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