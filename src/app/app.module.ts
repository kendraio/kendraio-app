import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { LayoutComponent } from './components/layout/layout.component';
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
import { ConfirmDeleteDialogComponent } from './dialogs/confirm-delete-dialog/confirm-delete-dialog.component';
import { ReplaceImageUrlDialogComponent } from './dialogs/replace-image-url-dialog/replace-image-url-dialog.component';
import { AuthCallbackComponent } from './pages/auth-callback/auth-callback.component';
import { WaveformComponent } from './components/waveform/waveform.component';
import { DocsListPageComponent } from './pages/docs-list-page/docs-list-page.component';
import { AddDocDialogComponent } from './dialogs/add-doc-dialog/add-doc-dialog.component';
import { DocEditPageComponent } from './pages/doc-edit-page/doc-edit-page.component';
import { DocEditFormComponent } from './forms/doc-edit-form/doc-edit-form.component';
import { ImageInputControlComponent } from './form-controls/image-input-control/image-input-control.component';
import { TextInputFormControlComponent } from './form-controls/text-input-form-control/text-input-form-control.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { NgxTaggerModule } from 'ngx-tagger';
import { SchemaRepositoryService } from './services/schema-repository.service';
import { DocumentRepositoryService } from './services/document-repository.service';
import { DropboxPageComponent } from './pages/dropbox-page/dropbox-page.component';
import { LegacyDataFormControlComponent } from './form-controls/legacy-data-form-control/legacy-data-form-control.component';
import { AudioInputControlComponent } from './form-controls/audio-input-control/audio-input-control.component';
import { TrackClipDirective } from './directives/track-clip.directive';
import { EditClipDialogComponent } from './dialogs/edit-clip-dialog/edit-clip-dialog.component';
import { DoughnutChartDirective } from './directives/doughnut-chart.directive';
import { SwaggerPageComponent } from './pages/swagger-page/swagger-page.component';
import { SwaggerUiDirective } from './directives/swagger-ui.directive';
import { TestApiPageComponent } from './pages/test-api-page/test-api-page.component';
import { TestImportDialogComponent } from './dialogs/test-import-dialog/test-import-dialog.component';
import { AssetsPageComponent } from './pages/assets-page/assets-page.component';

// import {MusicRecordingsEditComponent} from './music-recordings/index';

import { DynamicFormsCoreModule } from '@ng-dynamic-forms/core';
import { DynamicFormsMaterialUIModule } from '@ng-dynamic-forms/ui-material';
import { DiagramPageComponent } from './pages/diagram-page/diagram-page.component';
// import { ContactsComponent } from './pages';
import { ContactsModule } from './contacts/contacts.module';
import { TasksModule } from './tasks/tasks.module';
// import { ReportsComponent } from './reports/reports.component';
import { ReportsModule } from './reports/reports.module';
// import { AgGridModule } from 'ag-grid-angular';
// import { MatInputComponent } from './_shared/components';
// import {DialogDataExampleDialog} from './music-recordings';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DocsListPageComponent,
    AddDocDialogComponent,
    DocEditPageComponent,
    DocEditFormComponent,
    ImageInputControlComponent,
    TextInputFormControlComponent,
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
    ConfirmDeleteDialogComponent,
    ReplaceImageUrlDialogComponent,
    AuthCallbackComponent,
    WaveformComponent,
    DropboxPageComponent,
    LegacyDataFormControlComponent,
    AudioInputControlComponent,
    TrackClipDirective,
    EditClipDialogComponent,
    DoughnutChartDirective,
    SwaggerPageComponent,
    SwaggerUiDirective,
    TestApiPageComponent,
    TestImportDialogComponent,
    AssetsPageComponent,
    DiagramPageComponent,
    // ReportsComponent,
    // ContactsComponent
    // MatInputComponent
    // DialogDataExampleDialog
    // MusicRecordingsEditComponent
  ],
  imports: [
    // AgGridModule.withComponents([ 
    //   // MatInputComponent
    // ]),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    StoreModule.forRoot({}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxTaggerModule,
    DynamicFormsCoreModule,
    DynamicFormsMaterialUIModule,
    ContactsModule,
    TasksModule,
    ReportsModule
  ],
  entryComponents: [
    AddDocDialogComponent,
    ConfirmAppResetDialogComponent,
    ImportProgressDialogComponent,
    AddNewNodeDialogComponent,
    ConfirmDeleteDialogComponent,
    ReplaceImageUrlDialogComponent,
    EditClipDialogComponent,
    TestImportDialogComponent
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: (schemaRepo: SchemaRepositoryService) => () => schemaRepo.init(),
      deps: [ SchemaRepositoryService ]
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: (docsRepo: DocumentRepositoryService) => () => docsRepo.init(),
      deps: [ DocumentRepositoryService ]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
