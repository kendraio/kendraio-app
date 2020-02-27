// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { map } from 'rxjs/operators';
// import { PageTitleService } from '../../services/page-title.service';

// @Component({
//   selector: 'app-swagger-page',
//   templateUrl: './swagger-page.component.html',
//   styleUrls: ['./swagger-page.component.scss']
// })
// export class SwaggerPageComponent implements OnInit {

//   url$;

//   constructor(
//     private readonly pageTitle: PageTitleService,
//     private readonly route: ActivatedRoute
//   ) { }

//   ngOnInit() {
//     this.pageTitle.setTitle('API Client');
//     this.url$ = this.route.paramMap.pipe(
//       map(params => params.get('id')),
//       map(id => `/assets/swagger/${id}.json`)
//     );
//   }

// }
