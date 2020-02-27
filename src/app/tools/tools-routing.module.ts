import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as pages from './';

const routes: Routes = [
  {
    path: '',
    component: pages.ToolsindexComponent,
    data: {
      breadcrumb: '',
      menuLabel: 'Tool-Box'
    },
    children: [
      { path: 'form-generator', component: pages.FormGeneratorComponent,
      data: {
        breadcrumb: {'en-US': 'contacts.people'},
        menuLabel: 'Contacts/People'
      } },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolsRoutingModule { }
