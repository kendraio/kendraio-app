import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';


const routes: Routes = [
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
