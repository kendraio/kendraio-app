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
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
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
// import { SwaggerPageComponent } from './pages/swagger-page/swagger-page.component';
// import { SwaggerUiDirective } from './directives/swagger-ui.directive';
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
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { LOCALE_ID  } from '@angular/core';

import { YoutubePageComponent } from './pages/youtube-page/youtube-page.component';
// import { BreadcrumbComponent } from './_shared/components/breadcrumb/breadcrumb.component';

// import { AgGridModule } from 'ag-grid-angular';
// import { MatInputComponent } from './_shared/components';
// import {DialogDataExampleDialog} from './music-recordings';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { YoutubeUploadComponent } from './components/youtube-upload/youtube-upload.component';
import { DynamicFormRepoComponent } from './components/dynamic-form-repo/dynamic-form-repo.component';
import { BloomenSearchPageComponent } from './pages/bloomen-search-page/bloomen-search-page.component';
import { HttpErrorInterceptor } from './_shared/404.interceptor';
import { FormlyModule } from '@ngx-formly/core';
import { UserIpnFormComponent } from './forms/user-ipn-form/user-ipn-form.component';
import { ProfileDataFormComponent } from './forms/profile-data-form/profile-data-form.component';
import { GenericFormComponent } from './forms/generic-form/generic-form.component';
import { FormTestPageComponent } from './pages/form-test-page/form-test-page.component';
import { OrderKeysPipe } from './pipes/order-keys.pipe';
import { ShowShareLinkDialogComponent } from './dialogs/show-share-link-dialog/show-share-link-dialog.component';
import { FormlyImageInputComponent } from './form-controls/formly-image-input/formly-image-input.component';
import { FormlyAudioInputComponent } from './form-controls/formly-audio-input/formly-audio-input.component';
import {MonacoEditorModule} from 'ngx-monaco-editor';
import { FormBuilderPageComponent } from './pages/form-builder-page/form-builder-page.component';
import { FormSelectDialogComponent } from './dialogs/form-select-dialog/form-select-dialog.component';
import { FormDataSelectDialogComponent } from './dialogs/form-data-select-dialog/form-data-select-dialog.component';
import { FormlyRemoteImageInputComponent } from './form-controls/formly-remote-image-input/formly-remote-image-input.component';
import { SwaggerFormSelectDialogComponent } from './dialogs/swagger-form-select-dialog/swagger-form-select-dialog.component';
import { ApiDataSelectDialogComponent } from './dialogs/api-data-select-dialog/api-data-select-dialog.component';
import { QueryBuilderPageComponent } from './pages/query-builder-page/query-builder-page.component';
import {AgGridModule} from 'ag-grid-angular';
import { AdapterQuerySelectDialogComponent } from './dialogs/adapter-query-select-dialog/adapter-query-select-dialog.component';
import { DataChartOutputComponent } from './components/data-chart-output/data-chart-output.component';
import { TeostoUserFormComponent } from './forms/teosto-user-form/teosto-user-form.component';
import { BlocksBuilderPageComponent } from './pages/blocks-builder-page/blocks-builder-page.component';
import { FormBlockComponent } from './blocks/form-block/form-block.component';
import { DebugBlockComponent } from './blocks/debug-block/debug-block.component';
import { QueryBlockComponent } from './blocks/query-block/query-block.component';
import { MappingBlockComponent } from './blocks/mapping-block/mapping-block.component';
import { GridBlockComponent } from './blocks/grid-block/grid-block.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { EditorLayoutComponent } from './components/editor-layout/editor-layout.component';
import { BlockBuilderBoxComponent } from './components/block-builder-box/block-builder-box.component';
import { HttpBlockComponent } from './blocks/http-block/http-block.component';
import { AdapterBlocksConfigSelectDialogComponent } from './dialogs/adapter-blocks-config-select-dialog/adapter-blocks-config-select-dialog.component';
import { ExportConfigDialogComponent } from './dialogs/export-config-dialog/export-config-dialog.component';
import { ChartBlockComponent } from './blocks/chart-block/chart-block.component';
import { InitBlockComponent } from './blocks/init-block/init-block.component';
import { MessageBlockComponent } from './blocks/message-block/message-block.component';
import { TemplateBlockComponent } from './blocks/template-block/template-block.component';
import { ButtonBlockComponent } from './blocks/button-block/button-block.component';
import { BlocksDialogComponent } from './dialogs/blocks-dialog/blocks-dialog.component';
import { PasteConfigDialogComponent } from './dialogs/paste-config-dialog/paste-config-dialog.component';
import { BlocksWorkflowComponent } from './components/blocks-workflow/blocks-workflow.component';
import { FormlyBlocksInputComponent } from './form-controls/formly-blocks-input/formly-blocks-input.component';
import { BlocksInputControlComponent } from './form-controls/blocks-input-control/blocks-input-control.component';
import { DialogBlockComponent } from './blocks/dialog-block/dialog-block.component';
import { ActionsBlockComponent } from './blocks/actions-block/actions-block.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SwitchBlockComponent } from './blocks/switch-block/switch-block.component';
import { BatchBlockComponent } from './blocks/batch-block/batch-block.component';
import { VariableGetComponent } from './blocks/variable-get/variable-get.component';
import { VariableSetComponent } from './blocks/variable-set/variable-set.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


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
    // SwaggerPageComponent,
    // SwaggerUiDirective,
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
    YoutubePageComponent,
    YoutubeUploadComponent,
    DynamicFormRepoComponent,
    BloomenSearchPageComponent,
    UserIpnFormComponent,
    ProfileDataFormComponent,
    GenericFormComponent,
    FormTestPageComponent,
    OrderKeysPipe,
    ShowShareLinkDialogComponent,
    FormlyImageInputComponent,
    FormlyAudioInputComponent,
    FormBuilderPageComponent,
    FormSelectDialogComponent,
    FormDataSelectDialogComponent,
    FormlyRemoteImageInputComponent,
    SwaggerFormSelectDialogComponent,
    ApiDataSelectDialogComponent,
    QueryBuilderPageComponent,
    AdapterQuerySelectDialogComponent,
    DataChartOutputComponent,
    // BreadcrumbComponent
    // ReportsComponent,
    // ContactsComponent
    // MatInputComponent
    // DialogDataExampleDialog
    // MusicRecordingsEditComponent
    TeostoUserFormComponent,
    BlocksBuilderPageComponent,
    FormBlockComponent,
    DebugBlockComponent,
    QueryBlockComponent,
    MappingBlockComponent,
    GridBlockComponent,
    EditorLayoutComponent,
    BlockBuilderBoxComponent,
    HttpBlockComponent,
    AdapterBlocksConfigSelectDialogComponent,
    ExportConfigDialogComponent,
    ChartBlockComponent,
    InitBlockComponent,
    MessageBlockComponent,
    TemplateBlockComponent,
    ButtonBlockComponent,
    BlocksDialogComponent,
    PasteConfigDialogComponent,
    BlocksWorkflowComponent,
    FormlyBlocksInputComponent,
    BlocksInputControlComponent,
    DialogBlockComponent,
    ActionsBlockComponent,
    NotFoundComponent,
    SwitchBlockComponent,
    BatchBlockComponent,
    VariableGetComponent,
    VariableSetComponent
  ],
  imports: [
    // AgGridModule.withComponents([
    //   // MatInputComponent
    // ]),

    FormlyModule.forRoot({
    }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    StoreModule.forRoot({}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
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
    MatAutocompleteModule,
    MonacoEditorModule.forRoot(),
    AgGridModule.withComponents([]),
    DragDropModule
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
    DynamicDebugControlComponent,
    ShowShareLinkDialogComponent,
    FormSelectDialogComponent,
    FormDataSelectDialogComponent,
    SwaggerFormSelectDialogComponent,
    ApiDataSelectDialogComponent,
    AdapterQuerySelectDialogComponent,
    AdapterBlocksConfigSelectDialogComponent,
    ExportConfigDialogComponent,
    BlocksDialogComponent,
    PasteConfigDialogComponent
  ],
  providers: [
    // { provide: LOCALE_ID, useValue: 'de-DE' } ,
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: (schemaRepo: SchemaRepositoryService) => () => schemaRepo.init(),
      deps: [SchemaRepositoryService]
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: (docsRepo: DocumentRepositoryService) => () => docsRepo.init(),
      deps: [DocumentRepositoryService]
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: (settings: AppSettingsService) => () => settings.init(),
      deps: [AppSettingsService]
    },
    {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true
  },
    {
      provide: DYNAMIC_FORM_CONTROL_MAP_FN,
      useValue: (model: DynamicFormControlModel): Type<DynamicFormControl> | null => {
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
  exports: [
    DebugOnlyDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
