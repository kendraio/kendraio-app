import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from "./components/layout/layout.component";
import { DocsListPageComponent } from "./pages/docs-list-page/docs-list-page.component";
import { SchemaListPageComponent } from "./pages/schema-list-page/schema-list-page.component";
import { DocEditPageComponent } from "./pages/doc-edit-page/doc-edit-page.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'docs',
        component: DocsListPageComponent
      },
      {
        path: 'docs/:id',
        component: DocEditPageComponent
      },
      {
        path: 'schemas',
        component: SchemaListPageComponent
      },
      { path: '',   redirectTo: '/docs', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
