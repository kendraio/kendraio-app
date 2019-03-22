(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["files-files-module"],{

/***/ "./src/app/files/_shared/forms/form.layout.ts":
/*!****************************************************!*\
  !*** ./src/app/files/_shared/forms/form.layout.ts ***!
  \****************************************************/
/*! exports provided: FILES_FORM_LAYOUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILES_FORM_LAYOUT", function() { return FILES_FORM_LAYOUT; });
var FILES_FORM_LAYOUT = {
    'addressStreet': {
        element: {
            host: 'material-form-group'
        }
    }
};


/***/ }),

/***/ "./src/app/files/_shared/forms/formModel.ts":
/*!**************************************************!*\
  !*** ./src/app/files/_shared/forms/formModel.ts ***!
  \**************************************************/
/*! exports provided: FILES_FORM_MODEL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILES_FORM_MODEL", function() { return FILES_FORM_MODEL; });
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm5/core.js");

var FILES_FORM_MODEL = [
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'File',
        maxLength: 25,
        placeholder: 'Title of Recording',
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        }
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'Title',
        maxLength: 150,
        placeholder: 'Title',
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        },
        additional: {
            color: 'accent'
        }
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'Type',
        maxLength: 50,
        placeholder: 'Type',
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        },
        additional: {
            color: 'accent'
        }
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'Uploaded date',
        placeholder: 'Uploaded date',
        hint: 'Uploaded date',
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        }
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'Uploaded by',
        placeholder: 'Uploaded by',
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        }
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'Created date',
        placeholder: 'Created date',
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        }
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'Created by',
        placeholder: 'Created by',
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        }
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicFormGroupModel"]({
        id: 'signoff',
        group: [
            new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicSwitchModel"]({
                id: 'reminder',
                offLabel: 'Send me a reminder',
                onLabel: 'Send me a reminder',
                value: false
            }),
            new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicSwitchModel"]({
                id: 'updates',
                offLabel: 'Subscribe to Updates',
                onLabel: 'Subscribe to Updates',
                value: false
            }),
            new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicCheckboxModel"]({
                id: 'confirm',
                label: 'I confirm the information given above',
                value: false,
                validators: {
                    requiredTrue: null
                },
                errorMessages: {
                    required: 'You must confirm your data is correct'
                }
            })
        ]
    })
];


/***/ }),

/***/ "./src/app/files/file-details/file-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/files/file-details/file-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  file-details works!\n</p>\n\n\n\nFile\nThe name of the uploaded file.\nTitle\nUser can give an uploaded file a title.\nType\nThe type of file. It may be useful to have this as two parts “Audio - wave” , “Audio - mp3” and allow filtering by both.\nAudio\nPhoto\nVideo\nUploaded date\nDate the file was uploaded.\nUploaded by\nOnly needed if we are supporting more then one user in the app.\nCreated date\nmetadata that can be entered about the date the resource was created.\nCreated by\nor should it be “Copyright owner” - Not sure if we need this as we will likely manage in other screens. This may be derived from other linked information \nEDIT \nLink to edit page\nUsed by\nIt can be useful to see a list of releases using an audio file. We may need a “...” after if more then we have room for as a file can be used in more than one place. Use a popup or other way to expand on click.\n"

/***/ }),

/***/ "./src/app/files/file-details/file-details.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/files/file-details/file-details.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbGVzL2ZpbGUtZGV0YWlscy9maWxlLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/files/file-details/file-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/files/file-details/file-details.component.ts ***!
  \**************************************************************/
/*! exports provided: FileDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileDetailsComponent", function() { return FileDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FileDetailsComponent = /** @class */ (function () {
    function FileDetailsComponent() {
    }
    FileDetailsComponent.prototype.ngOnInit = function () {
    };
    FileDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-file-details',
            template: __webpack_require__(/*! ./file-details.component.html */ "./src/app/files/file-details/file-details.component.html"),
            styles: [__webpack_require__(/*! ./file-details.component.scss */ "./src/app/files/file-details/file-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FileDetailsComponent);
    return FileDetailsComponent;
}());



/***/ }),

/***/ "./src/app/files/file-edit/file-edit.component.html":
/*!**********************************************************!*\
  !*** ./src/app/files/file-edit/file-edit.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n    <mat-card>\r\n  \r\n        <form [formGroup]=\"formGroup\">\r\n      \r\n            <dynamic-material-form [group]=\"formGroup\"\r\n                                   [layout]=\"formLayout\"\r\n                                   [model]=\"formModel\"\r\n                                   (blur)=\"onBlur($event)\"\r\n                                   (change)=\"onChange($event)\"\r\n                                   (focus)=\"onFocus($event)\"\r\n                                   (matEvent)=\"onMatEvent($event)\" \r\n                                   fxLayout=\"row wrap\" fxLayoutAlign=\"start start\" fxLayoutGap=\"40px\"\r\n                                   ></dynamic-material-form>\r\n  \r\n        </form>  \r\n    </mat-card>\r\n  \r\n  \r\n    <div mat-dialog-actions class=\"align-right\">\r\n        <button mat-button  mat-dialog-close=\"Edit Cancelled\">Cancel</button>\r\n        <button mat-button [mat-dialog-close]=\"data.Name\" cdkFocusInitial [disabled]=\"formGroup.invalid\">Save</button>\r\n      </div>\r\n  \r\n  \r\n    <pre>{{formGroup.value | json}}</pre>\r\n  \r\n  </div>"

/***/ }),

/***/ "./src/app/files/file-edit/file-edit.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/files/file-edit/file-edit.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbGVzL2ZpbGUtZWRpdC9maWxlLWVkaXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/files/file-edit/file-edit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/files/file-edit/file-edit.component.ts ***!
  \********************************************************/
/*! exports provided: FileEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileEditComponent", function() { return FileEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_forms_formModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_shared/forms/formModel */ "./src/app/files/_shared/forms/formModel.ts");
/* harmony import */ var _shared_forms_form_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_shared/forms/form.layout */ "./src/app/files/_shared/forms/form.layout.ts");






var FileEditComponent = /** @class */ (function () {
    function FileEditComponent(data, formService) {
        this.data = data;
        this.formService = formService;
        this.formModel = _shared_forms_formModel__WEBPACK_IMPORTED_MODULE_4__["FILES_FORM_MODEL"];
        this.formLayout = _shared_forms_form_layout__WEBPACK_IMPORTED_MODULE_5__["FILES_FORM_LAYOUT"];
    }
    FileEditComponent.prototype.ngOnInit = function () {
        this.formGroup = this.formService.createFormGroup(this.formModel);
        this.formGroup.patchValue(this.data);
    };
    FileEditComponent.prototype.onBlur = function ($event) {
        console.log("Material blur event on: " + $event.model.id + ": ", $event);
    };
    FileEditComponent.prototype.onChange = function ($event) {
        console.log("Material change event on: " + $event.model.id + ": ", $event);
    };
    FileEditComponent.prototype.onFocus = function ($event) {
        console.log("Material focus event on: " + $event.model.id + ": ", $event);
    };
    FileEditComponent.prototype.onMatEvent = function ($event) {
        console.log("Material " + $event.type + " event on: " + $event.model.id + ": ", $event);
    };
    FileEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-file-edit',
            template: __webpack_require__(/*! ./file-edit.component.html */ "./src/app/files/file-edit/file-edit.component.html"),
            styles: [__webpack_require__(/*! ./file-edit.component.scss */ "./src/app/files/file-edit/file-edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_2__["DynamicFormService"]])
    ], FileEditComponent);
    return FileEditComponent;
}());



/***/ }),

/***/ "./src/app/files/files-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/files/files-routing.module.ts ***!
  \***********************************************/
/*! exports provided: FilesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesRoutingModule", function() { return FilesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./src/app/files/index.ts");




// import { SharedModule } from '../_shared/shared.module';
var routes = [
    { path: '', component: _index__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"] },
    { path: 'file-detail/:id', component: _index__WEBPACK_IMPORTED_MODULE_3__["FileDetailsComponent"] },
    { path: 'file-edit/:id', component: _index__WEBPACK_IMPORTED_MODULE_3__["FileEditComponent"] },
];
var FilesRoutingModule = /** @class */ (function () {
    function FilesRoutingModule() {
    }
    FilesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], FilesRoutingModule);
    return FilesRoutingModule;
}());



/***/ }),

/***/ "./src/app/files/files.module.ts":
/*!***************************************!*\
  !*** ./src/app/files/files.module.ts ***!
  \***************************************/
/*! exports provided: FilesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesModule", function() { return FilesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_dynamic_forms_ui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-dynamic-forms/ui-material */ "./node_modules/@ng-dynamic-forms/ui-material/fesm5/ui-material.js");
/* harmony import */ var _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-material/app-material.module */ "./src/app/app-material/app-material.module.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _files_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./files-routing.module */ "./src/app/files/files-routing.module.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! . */ "./src/app/files/index.ts");










var FilesModule = /** @class */ (function () {
    function FilesModule() {
    }
    FilesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [___WEBPACK_IMPORTED_MODULE_9__["IndexComponent"], ___WEBPACK_IMPORTED_MODULE_9__["FileDetailsComponent"], ___WEBPACK_IMPORTED_MODULE_9__["FileEditComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _files_routing_module__WEBPACK_IMPORTED_MODULE_8__["FilesRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ng_dynamic_forms_ui_material__WEBPACK_IMPORTED_MODULE_4__["DynamicFormsMaterialUIModule"],
                _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_5__["AppMaterialModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__["AgGridModule"].withComponents([]),
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"]
            ],
            bootstrap: [___WEBPACK_IMPORTED_MODULE_9__["IndexComponent"]]
        })
    ], FilesModule);
    return FilesModule;
}());



/***/ }),

/***/ "./src/app/files/index.ts":
/*!********************************!*\
  !*** ./src/app/files/index.ts ***!
  \********************************/
/*! exports provided: FileDetailsComponent, IndexComponent, FileEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_details_file_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-details/file-details.component */ "./src/app/files/file-details/file-details.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileDetailsComponent", function() { return _file_details_file_details_component__WEBPACK_IMPORTED_MODULE_0__["FileDetailsComponent"]; });

/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index/index.component */ "./src/app/files/index/index.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return _index_index_component__WEBPACK_IMPORTED_MODULE_1__["IndexComponent"]; });

/* harmony import */ var _file_edit_file_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file-edit/file-edit.component */ "./src/app/files/file-edit/file-edit.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileEditComponent", function() { return _file_edit_file_edit_component__WEBPACK_IMPORTED_MODULE_2__["FileEditComponent"]; });






/***/ }),

/***/ "./src/app/files/index/index.component.html":
/*!**************************************************!*\
  !*** ./src/app/files/index/index.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar *ngIf=\"showSpinner\" mode=\"indeterminate\"></mat-progress-bar>\r\n\r\n<div class=\"table-responsive-lg\">\r\n  <!-- (rowClicked)=\"openDialog($event)\" -->\r\n  <ag-grid-angular #agGrid style=\"width: 100%; height: 700px;\" class=\"ag-theme-material\" \r\n  [gridOptions]=\"gridOptions\"\r\n  [rowData]=\"allItems\"\r\n    (cellClicked)=\"onCellClicked($event)\">\r\n\r\n    <ag-grid-column headerName=\"File\">\r\n\r\n      <ag-grid-column headerName=\"Actions\" [width]=\"100\" [pinned]=\"true\" [cellRenderer]=\"editBtnCellRenderer\">\r\n      </ag-grid-column>\r\n\r\n      <ag-grid-column headerName=\"File\" field=\"File\" [width]=\"165\" [pinned]=\"true\" [sortable]=\"true\" [resizable]=\"true\"\r\n        [filter]=\"true\"></ag-grid-column>\r\n\r\n    </ag-grid-column>\r\n\r\n    <ag-grid-column headerName=\"Details\">\r\n      <ag-grid-column headerName=\"Title\" field=\"Title\" [width]=\"150\" [sortable]=\"true\" [resizable]=\"true\" [filter]=\"true\">\r\n      </ag-grid-column>\r\n\r\n      <ag-grid-column headerName=\"Type\" field=\"Type\" [width]=\"100\" [sortable]=\"true\" [resizable]=\"true\" [filter]=\"true\">\r\n      </ag-grid-column>\r\n\r\n      <ag-grid-column headerName=\"Uploaded date\" field=\"Uploaded date\" [width]=\"150\" [sortable]=\"true\" [resizable]=\"true\"\r\n        [filter]=\"true\">\r\n      </ag-grid-column>\r\n\r\n      <ag-grid-column headerName=\"Uploaded by\" field=\"Uploaded by\" [width]=\"150\" [sortable]=\"true\" [resizable]=\"true\"\r\n        [filter]=\"true\"></ag-grid-column>\r\n\r\n      <ag-grid-column headerName=\"Created date\" field=\"Created date\" [width]=\"200\" [sortable]=\"true\" [resizable]=\"true\"\r\n        [filter]=\"true\"></ag-grid-column>\r\n        <ag-grid-column headerName=\"Created by\" field=\"Created by\" [width]=\"200\" [sortable]=\"true\" [resizable]=\"true\"\r\n        [filter]=\"true\"></ag-grid-column>\r\n\r\n    </ag-grid-column>\r\n  </ag-grid-angular>\r\n</div>"

/***/ }),

/***/ "./src/app/files/index/index.component.ts":
/*!************************************************!*\
  !*** ./src/app/files/index/index.component.ts ***!
  \************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_page_title_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/page-title.service */ "./src/app/services/page-title.service.ts");
/* harmony import */ var src_app_services_test_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/test-data.service */ "./src/app/services/test-data.service.ts");
/* harmony import */ var _file_edit_file_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../file-edit/file-edit.component */ "./src/app/files/file-edit/file-edit.component.ts");


// import { TestDataService } from 'src/app/_shared/services/test-api.service';






var IndexComponent = /** @class */ (function () {
    function IndexComponent(testData, dialog, pageTitle) {
        this.testData = testData;
        this.dialog = dialog;
        this.pageTitle = pageTitle;
        this.listAll();
    }
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageTitle.setTitle('Files');
        this.entityTypes$ = this.testData.listEntityTypes();
        this.entityList$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (type) { return _this.testData.listEntities(type); }));
        this.selectedEntity$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (id) { return _this.testData.getEntity(_this.selectedType, id); }));
        this.listAll$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (type) { return _this.testData.listAll(type); }));
        this.listAll();
    };
    IndexComponent.prototype.countryCellRenderer = function (params) {
        var flag = "<img border='0' width='15' height='10' style='margin-bottom: 2px' src='https://www.ag-grid.com/images/flags/gb.png'>";
        return flag + " " + params.value;
    };
    IndexComponent.prototype.editBtnCellRenderer = function (params) {
        var btn = '<button type="button" class="btn btn-primary btn-sm">Edit</button>';
        return btn;
    };
    IndexComponent.prototype.editBtnCellRendererParams = function () {
        var clickMe = {
            onClick: this.openDialog.bind(this),
            label: 'Click 1'
        };
        return clickMe;
    };
    IndexComponent.prototype.changeEntityType = function (type) {
        this.selectedType = type;
        this.entityList$.next(type);
    };
    IndexComponent.prototype.changeEntity = function (id) {
        this.selectedEntity$.next(id);
    };
    IndexComponent.prototype.onCellClicked = function (ev) {
        if (ev.colDef.headerName === 'Actions') {
            this.openDialog(ev.data);
        }
    };
    IndexComponent.prototype.openDialog = function (ev) {
        var dialogRef = this.dialog.open(_file_edit_file_edit_component__WEBPACK_IMPORTED_MODULE_7__["FileEditComponent"], {
            data: ev,
            width: '80%',
            panelClass: 'formFieldWidth380'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    IndexComponent.prototype.listAll = function () {
        var _this = this;
        this.testData.listAll('file').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return _this.showSpinner = true; }))
            .subscribe(function (res) {
            _this.allItems = res;
            _this.showSpinner = false;
        });
    };
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/files/index/index.component.html"),
            styles: [" \n  dynamic-material-form[fxLayoutAlign] { padding:10px; padding-left: 25px;}\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_test_data_service__WEBPACK_IMPORTED_MODULE_6__["TestDataService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            src_app_services_page_title_service__WEBPACK_IMPORTED_MODULE_5__["PageTitleService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ })

}]);
//# sourceMappingURL=files-files-module.js.map