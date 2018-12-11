import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule, Type } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { LayoutComponent } from './components/layout/layout.component';
import { DocsListPageComponent } from './pages/docs-list-page/docs-list-page.component';
import { SchemaListPageComponent } from './pages/schema-list-page/schema-list-page.component';
import { AppMaterialModule } from "./app-material/app-material.module";
import { SchemaRepositoryService } from "./services/schema-repository.service";
import { HttpClientModule } from "@angular/common/http";
import { AddDocDialogComponent } from './dialogs/add-doc-dialog/add-doc-dialog.component';
import { DocEditPageComponent } from './pages/doc-edit-page/doc-edit-page.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  DYNAMIC_FORM_CONTROL_INPUT_TYPE_FILE,
  DYNAMIC_FORM_CONTROL_MAP_FN,
  DynamicFormControl,
  DynamicFormControlModel,
  DynamicFormsCoreModule, DynamicInputControlModel
} from "@ng-dynamic-forms/core";
import { DynamicFormsMaterialUIModule } from "@ng-dynamic-forms/ui-material";
import { DocEditFormComponent } from './forms/doc-edit-form/doc-edit-form.component';
import { DocumentRepositoryService } from "./services/document-repository.service";
import { ImageInputControlComponent } from './form-controls/image-input-control/image-input-control.component';
import { TextInputFormControlComponent } from './form-controls/text-input-form-control/text-input-form-control.component';
import { NgxTaggerModule } from "../../projects/ngx-tagger/src/lib/ngx-tagger.module";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DocsListPageComponent,
    SchemaListPageComponent,
    AddDocDialogComponent,
    DocEditPageComponent,
    DocEditFormComponent,
    ImageInputControlComponent,
    TextInputFormControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects]),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    DynamicFormsCoreModule,
    DynamicFormsMaterialUIModule,
    NgxTaggerModule
  ],
  entryComponents: [
    AddDocDialogComponent
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
