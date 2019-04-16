import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule, Type} from '@angular/core';

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

import {
  DYNAMIC_FORM_CONTROL_MAP_FN,
  DynamicFormControl,
  DynamicFormControlModel,
  DynamicFormsCoreModule,
  DynamicFormService
} from '@ng-dynamic-forms/core';
import { DynamicFormsMaterialUIModule } from '@ng-dynamic-forms/ui-material';
import { DiagramPageComponent } from './pages/diagram-page/diagram-page.component';
import { DynamicAudioInputControlComponent } from
    './form-controls/dynamic-audio-input-control/dynamic-audio-input-control.component';
import {AUDIO_FILE_DYNAMIC_FORM_CONTROL_TYPE} from './form-controls/audio-form-model';
import {CustomFormService} from './form-controls/custom-form-service';
import { DynamicImageInputControlComponent } from './form-controls/dynamic-image-input-control/dynamic-image-input-control.component';
import {IMAGE_FILE_DYNAMIC_FORM_CONTROL_TYPE} from './form-controls/image-form-model';
import { ReferenceInputControlComponent } from './form-controls/reference-input-control/reference-input-control.component';
import { DynamicReferenceInputControlComponent } from
    './form-controls/dynamic-reference-input-control/dynamic-reference-input-control.component';
import {REFERENCE_DYNAMIC_FORM_CONTROL_TYPE} from './form-controls/reference-form-model';

// import { ContactsComponent } from './pages';
import { ContactsModule } from './contacts/contacts.module';
import { TasksModule } from './tasks/tasks.module';
// import { ReportsComponent } from './reports/reports.component';
import { ReportsModule } from './reports/reports.module';
import { BloomenTestPageComponent } from './pages/bloomen-test-page/bloomen-test-page.component';
import { RemoteImageControlComponent } from './form-controls/remote-image-control/remote-image-control.component';
import { DynamicRemoteImageControlComponent } from './form-controls/dynamic-remote-image-control/dynamic-remote-image-control.component';
import {REMOTE_IMAGE_DYNAMIC_FORM_CONTROL_TYPE} from './form-controls/remote-image-model';
import { AssetsModule } from './assets/assets.module';
import { MainMenuComponent } from './_shared/components/main-menu/main-menu.component';
import { MenuItemComponent } from './_shared/components/menu/menu-item.component';
import { Menu2ItemComponent } from './_shared/components/menu/menu-2-item.component';
import { MessagesModule } from './messages/messages.module';
import { DynamicDebugControlComponent } from './form-controls/dynamic-debug-control/dynamic-debug-control.component';
import {DEBUG_DYNAMIC_FORM_CONTROL_TYPE} from './form-controls/debug-form-model';
import {AppSettingsService} from './services/app-settings.service';
import { DebugOnlyDirective } from './directives/debug-only.directive';
import {TextMaskModule} from 'angular2-text-mask';
import {MatAutocompleteModule} from '@angular/material';
import { YoutubePageComponent } from './pages/youtube-page/youtube-page.component';
// import { BreadcrumbComponent } from './_shared/components/breadcrumb/breadcrumb.component';

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
    BloomenTestPageComponent,
    RemoteImageControlComponent,
    ReferenceInputControlComponent,
    DynamicAudioInputControlComponent,
    DynamicImageInputControlComponent,
    DynamicReferenceInputControlComponent,
    DynamicRemoteImageControlComponent,
    MainMenuComponent,
    MenuItemComponent,
    Menu2ItemComponent,
    DynamicDebugControlComponent,
    DebugOnlyDirective,
    YoutubePageComponent
    // BreadcrumbComponent
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
    ReportsModule,
    AssetsModule,
    MessagesModule,
    TextMaskModule,
    MatAutocompleteModule
  ],
  entryComponents: [
    AddDocDialogComponent,
    ConfirmAppResetDialogComponent,
    ImportProgressDialogComponent,
    AddNewNodeDialogComponent,
    ConfirmDeleteDialogComponent,
    ReplaceImageUrlDialogComponent,
    EditClipDialogComponent,
    TestImportDialogComponent,
    DynamicAudioInputControlComponent,
    DynamicImageInputControlComponent,
    DynamicReferenceInputControlComponent,
    DynamicRemoteImageControlComponent,
    DynamicDebugControlComponent
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
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: (settings: AppSettingsService) => () => settings.init(),
      deps: [ AppSettingsService ]
    },
    {
      provide: DYNAMIC_FORM_CONTROL_MAP_FN,
      useValue: (model: DynamicFormControlModel): Type<DynamicFormControl> | null  => {
        switch (model.type) {
          case AUDIO_FILE_DYNAMIC_FORM_CONTROL_TYPE:
            return DynamicAudioInputControlComponent;
          case IMAGE_FILE_DYNAMIC_FORM_CONTROL_TYPE:
            return DynamicImageInputControlComponent;
          case REFERENCE_DYNAMIC_FORM_CONTROL_TYPE:
            return DynamicReferenceInputControlComponent;
          case REMOTE_IMAGE_DYNAMIC_FORM_CONTROL_TYPE:
            return DynamicRemoteImageControlComponent;
          case DEBUG_DYNAMIC_FORM_CONTROL_TYPE:
            return DynamicDebugControlComponent;
        }
      }
    },
    {
      provide: DynamicFormService,
      useClass: CustomFormService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
