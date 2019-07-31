import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, Route, Routes } from '@angular/router';

import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { MenuItem } from 'src/app/_models/classes/common';
// import { LoadedRouterConfig } from '@angular/router/src/config';
import { __values } from 'tslib';
// import { LoadedRouterConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  // menuItems$ = this.router.events.pipe(
  //   filter(event => event instanceof NavigationEnd),
  //   distinctUntilChanged(),
  //   map(event => this.buildMainMenu(this.activatedRoute))
  // );
  menuItems: Array<MenuItem> = [];
  newMenuItems: Array<MenuItem> = [];
  menuItem: MenuItem;



  constructor(
  //  private loadedRouterConfig: LoadedRouterConfig,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    // private routes: Routes[]
    ) {
  }


  ngOnInit() {
    this.printpath('', this.router.config);
     this.printPaths2('', this.router.config);
// console.log(this.routes);
// this.loadedRouterConfig.routes.
  }
  printpath(parent: String, config: Route[]) {
  //   const label = config ? route.routeConfig.data[ 'menuTitle' ] : 'Home def';
  // const menuItem = {
  //     label: label,
  //     path: nextUrl,
  //   };

    for (let i = 0; i < config.length; i++) {
       const route = config[i];
      // console.log(parent + '/' + route.path);

// if (route.data && route.data.menuLabel) {
//         this.newMenuItems.push(
//         {
//           label: route.data.menuLabel,
//           path: route.path,
//           parentLabel: parent,
//           icon: route.data.icon,
//           hasChildren: route.children ? true : false
//         }
//       );
// }


      // = [...this.menuItems, menuItem];

      if (route.children) {
        const currentPath = route.path ? parent + '/' + route.data.breadcrumb : parent;
        this.printpath(currentPath, route.children);
      }
    }
  }

  hasChildren(children: Route[]): boolean {
    if (children) {
return children.length > 0;
    } else {
      return false;
    }

  }


  printPaths2(parent: string, routes: Route[]) {
    const getFullPath = (path?: string) => {
        if (path) {
            return parent + '/' + path;
        }

        return parent;
    };

    for (let i = 0; i < routes.length; i++) {
        const route = routes[i];
        const fullPath = getFullPath(route.path);

        console.log(parent + '/' + route.path, route.component);

        if (route.children /*&& route.children.length > 0*/) {
          this.printPaths2(route.data.menuLabel, route.children);
            // this.printPaths2(fullPath, route.children);
        }

        if (route.loadChildren && route.loadChildren.length > 0) {

            // const routerConfig = <LoadedRouterConfig>(<any>routes)['_loadedConfig'];
            // if (routerConfig) {
            //     this.printPaths2(fullPath, routerConfig.routes);
            // }
        }
    }
}




  buildMainMenu(
    route: ActivatedRoute,
    url: string = '',
    menuItems: Array<MenuItem> = []): Array<MenuItem> {  // todo  Type this
    const label = route.routeConfig ? route.routeConfig.data[ 'menuTitle' ] : 'Home def';
    // const path = route.routeConfig ? route.routeConfig.path || 'assets' : '..'; // fix this
    const path = route.routeConfig ? route.routeConfig.path : '..'; // fix this

    const pathx =  this.router;

    // const nextUrl = `${url}/${path}`;
    // const breadcrumb = {
    //   label: label,
    //   url: nextUrl,
    // };
    // let newBreadcrumbs;

    // newBreadcrumbs = [...menuItems, breadcrumb];
    // console.log(route.routeConfig)

    // if (route.firstChild !== null) {
    //   return this.buildMainMenu(route.firstChild, nextUrl, newBreadcrumbs).filter(item => item['label'] > '');

    // }
    // return newBreadcrumbs;


    // this.menuItems = route.routeConfig.children;
    // this.menuItems = this.router.config;
    // .filter(
    //   routey => routey.data && routey.data.menuTitle.length
    // );

//     this.menuItems.forEach((item, index) => {
//       if (item.data) {
//         if (item.data.breadcrumb) {
// console.log(item.data.breadcrumb);

//          // this.progressBarItemsx.push(item);
//         }
//       }

//       if (item.children) {
//         item.children.forEach((itemc, indexc) => {
//           console.log(itemc.data.breadcrumb);
//         });
//       }


//     });

       return this.menuItems;



  }

  gotoPage(href: string, sidenav) {
    this.router.navigate([href]);
   }

  getLabel(arg: any): any {
    if (arg && arg.data) {
      return arg.data['breadcrumb'];
    } else {
      return null;
    }
  }


}
