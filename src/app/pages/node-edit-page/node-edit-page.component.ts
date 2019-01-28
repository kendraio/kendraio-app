// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { DatabaseService } from '../../services/database.service';
// import { map, switchMap, tap } from 'rxjs/operators';
// import { PageTitleService } from '../../services/page-title.service';
// import { MatDialog } from '@angular/material';
// import { ConfirmDeleteDialogComponent } from '../../dialogs/confirm-delete-dialog/confirm-delete-dialog.component';
//
// @Component({
//   selector: 'app-node-edit-page',
//   templateUrl: './node-edit-page.component.html',
//   styleUrls: ['./node-edit-page.component.scss']
// })
// export class NodeEditPageComponent implements OnInit {
//
//   item$;
//
//   constructor(
//     private readonly router: Router,
//     private readonly route: ActivatedRoute,
//     private readonly database: DatabaseService,
//     private readonly title: PageTitleService,
//     private readonly dialog: MatDialog
//   ) {
//     this.title.setTitle('Edit node');
//   }
//
//   ngOnInit() {
//     this.item$ = this.route.paramMap.pipe(
//       map(params => params.get('id')),
//       switchMap(id => this.database.get(id))
//     );
//   }
//
//   onCancel() {
//     this.router.navigate(['/']);
//   }
//
//   onSave(item) {
//     // console.log({ item });
//     this.database.save(item).subscribe(() => {
//       this.router.navigate(['/']);
//     });
//   }
//
//   doDelete(item) {
//     this.dialog.open(ConfirmDeleteDialogComponent, {
//       data: { item }
//     }).afterClosed().subscribe(result => {
//       if (result) {
//         this.database.delete(item.id).subscribe(() => {
//           console.log(`Deleted ${item.id}`);
//           this.router.navigate(['/']);
//         });
//       }
//     });
//   }
// }
