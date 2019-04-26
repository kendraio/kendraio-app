import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    data: {
      breadcrumb: '',
      menuLabel: 'Users'
    },
    children: [
      {
        path: 'users',
        loadChildren: './users/users.module#UsersModule',
        data: {
          pageTitle: {'de': 'Dateien' , 'fr': '', 'en-US': 'Users'},
          breadcrumb: {'de': 'Dateien' , 'fr': '', 'en-US': 'Users'},
          menuLabel: 'Bloomen Users'
  
        }
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BloomenRoutingModule { }
