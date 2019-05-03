import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ListComponent } from './list/list.component';



const routes: Routes = [
{
        path: '',
        component: ListComponent,
        data: {
          pageTitle: {'de': 'Dateien' , 'fr': '', 'en-US': 'List User'},
          breadcrumb: {'de': 'Dateien' , 'fr': '', 'en-US': 'list.title'},
          menuLabel: 'List'  
        }
      },
      {
        path: 'list',
        component: ListComponent,
        data: {
          pageTitle: {'de': 'Dateien' , 'fr': '', 'en-US': 'List User'},
          breadcrumb: {'de': 'Dateien' , 'fr': '', 'en-US': 'list.title'},
          menuLabel: 'List'  
        }
      },

      {
        path: 'register',
        component: RegisterUserComponent,
        data: {
          pageTitle: {'de': 'Dateien' , 'fr': '', 'en-US': 'Register'},
          breadcrumb: {'de': 'Dateien' , 'fr': '', 'en-US': 'register.title'},
          menuLabel: 'Register'
  
        }
      },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
