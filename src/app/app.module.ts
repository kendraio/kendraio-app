import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './components/layout/layout.component';
import { KendraioMaterialModule } from './kendraio-material/kendraio-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ImportPageComponent } from './pages/import-page/import-page.component';
import { UploadPageComponent } from './pages/upload-page/upload-page.component';
import { VisualisePageComponent } from './pages/visualise-page/visualise-page.component';
import { AdaptersPageComponent } from './pages/adapters-page/adapters-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { ConfirmAppResetDialogComponent } from './dialogs/confirm-app-reset-dialog/confirm-app-reset-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { ObjectKeysPipe } from './pipes/object-keys.pipe';
import { ImportProgressDialogComponent } from './dialogs/import-progress-dialog/import-progress-dialog.component';
import { AddNewNodeDialogComponent } from './dialogs/add-new-node-dialog/add-new-node-dialog.component';
import { NodeEditPageComponent } from './pages/node-edit-page/node-edit-page.component';
import { NodeTeaserComponent } from './components/node-teaser/node-teaser.component';
import { ConfirmDeleteDialogComponent } from './dialogs/confirm-delete-dialog/confirm-delete-dialog.component';
import { EditPhotoFormComponent } from './forms/edit-photo-form/edit-photo-form.component';
import { ReplaceImageUrlDialogComponent } from './dialogs/replace-image-url-dialog/replace-image-url-dialog.component';
import { EditRinProjectFormComponent } from './forms/edit-rin-project-form/edit-rin-project-form.component';
import { InclusionPreviewComponent } from './components/inclusion-preview/inclusion-preview.component';
import { PersonPreviewComponent } from './components/person-preview/person-preview.component';
import { EditPersonFormComponent } from './forms/edit-person-form/edit-person-form.component';
import { DraggableDirective } from './directives/draggable.directive';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DashboardPageComponent,
    ImportPageComponent,
    UploadPageComponent,
    VisualisePageComponent,
    AdaptersPageComponent,
    SettingsPageComponent,
    UserPageComponent,
    ConfirmAppResetDialogComponent,
    ObjectKeysPipe,
    ImportProgressDialogComponent,
    AddNewNodeDialogComponent,
    NodeEditPageComponent,
    NodeTeaserComponent,
    ConfirmDeleteDialogComponent,
    EditPhotoFormComponent,
    ReplaceImageUrlDialogComponent,
    EditRinProjectFormComponent,
    InclusionPreviewComponent,
    PersonPreviewComponent,
    EditPersonFormComponent,
    DraggableDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    KendraioMaterialModule
  ],
  entryComponents: [
    ConfirmAppResetDialogComponent,
    ImportProgressDialogComponent,
    AddNewNodeDialogComponent,
    ConfirmDeleteDialogComponent,
    ReplaceImageUrlDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
