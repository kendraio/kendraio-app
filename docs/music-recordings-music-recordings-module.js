(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["music-recordings-music-recordings-module"],{

/***/ "./src/app/music-recordings/_shared/forms/formModel.ts":
/*!*************************************************************!*\
  !*** ./src/app/music-recordings/_shared/forms/formModel.ts ***!
  \*************************************************************/
/*! exports provided: STATES_AUTOCOMPLETE_LIST, MY_FORM_MODEL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATES_AUTOCOMPLETE_LIST", function() { return STATES_AUTOCOMPLETE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORM_MODEL", function() { return MY_FORM_MODEL; });
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm5/core.js");

var STATES_AUTOCOMPLETE_LIST = [
    'Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
    'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
    'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
    'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
    'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];
var MY_FORM_MODEL = [
    // new DynamicFormGroupModel({
    //     id: 'stay',
    //     group: [
    //         new DynamicDatePickerModel({
    //             id: 'arrivalDate',
    //             inline: false,
    //             placeholder: 'Date of Arrival'
    //         }),
    //         new DynamicDatePickerModel({
    //             id: 'departureDate',
    //             inline: false,
    //             placeholder: 'Date of Departure'
    //         })
    //     ],
    //     // validators: {
    //     //     customDateRangeValidator: null
    //     // },
    //     // errorMessages: {
    //     //     customDateRangeValidator: 'Invalid period of time selected'
    //     // }
    // }),
    // new DynamicFormGroupModel({
    //     id: 'room',
    //     group: [
    //         new DynamicSelectModel<string>({
    //             id: 'roomSize',
    //             placeholder: 'Room Size',
    //             hint: 'Choose a room type',
    //             options: [
    //                 {
    //                     label: 'Single Room',
    //                     value: 'single-room'
    //                 },
    //                 {
    //                     label: 'Double Room',
    //                     value: 'double-room'
    //                 },
    //                 {
    //                     label: 'Business Suite',
    //                     value: 'business-suite'
    //                 },
    //                 {
    //                     label: 'Presidential Suite',
    //                     value: 'presidential-suite'
    //                 },
    //                 {
    //                     label: 'Storeroom',
    //                     value: 'storeroom'
    //                 }
    //             ]
    //         }),
    //         new DynamicInputModel({
    //             id: 'roomQuantity',
    //             inputType: 'number',
    //             placeholder: 'Room Quantity',
    //             hint: 'Maximum: 5',
    //             max: 5,
    //             min: 0
    //         })
    //     ]
    // }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'Name',
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
        id: 'Artist',
        maxLength: 50,
        placeholder: 'Name of Artist',
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
        id: 'ISRC',
        placeholder: 'ISRC',
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is Required'
        }
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'ISWC',
        placeholder: 'ISWC',
        hint: 'Add your ISWC code',
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        }
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'Country',
        placeholder: 'Country',
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        }
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'Owner',
        placeholder: 'Owner',
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        }
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'Collective',
        placeholder: 'Collective',
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        }
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'Submitted to',
        placeholder: 'Submitted to...',
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

/***/ "./src/app/music-recordings/index.ts":
/*!*******************************************!*\
  !*** ./src/app/music-recordings/index.ts ***!
  \*******************************************/
/*! exports provided: IndexComponent, MusicRecordingsDetailComponent, MusicRecordingsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _music_recordings_music_recordings_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./music-recordings/music-recordings-index.component */ "./src/app/music-recordings/music-recordings/music-recordings-index.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return _music_recordings_music_recordings_index_component__WEBPACK_IMPORTED_MODULE_0__["IndexComponent"]; });

/* harmony import */ var _music_recordings_detail_music_recordings_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./music-recordings-detail/music-recordings-detail.component */ "./src/app/music-recordings/music-recordings-detail/music-recordings-detail.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MusicRecordingsDetailComponent", function() { return _music_recordings_detail_music_recordings_detail_component__WEBPACK_IMPORTED_MODULE_1__["MusicRecordingsDetailComponent"]; });

/* harmony import */ var _music_recordings_edit_music_recordings_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./music-recordings-edit/music-recordings-edit.component */ "./src/app/music-recordings/music-recordings-edit/music-recordings-edit.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MusicRecordingsEditComponent", function() { return _music_recordings_edit_music_recordings_edit_component__WEBPACK_IMPORTED_MODULE_2__["MusicRecordingsEditComponent"]; });






/***/ }),

/***/ "./src/app/music-recordings/music-recordings-detail/music-recordings-detail.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/music-recordings/music-recordings-detail/music-recordings-detail.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  music-recordings-detail works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/music-recordings/music-recordings-detail/music-recordings-detail.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/music-recordings/music-recordings-detail/music-recordings-detail.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL211c2ljLXJlY29yZGluZ3MvbXVzaWMtcmVjb3JkaW5ncy1kZXRhaWwvbXVzaWMtcmVjb3JkaW5ncy1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/music-recordings/music-recordings-detail/music-recordings-detail.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/music-recordings/music-recordings-detail/music-recordings-detail.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: MusicRecordingsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicRecordingsDetailComponent", function() { return MusicRecordingsDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MusicRecordingsDetailComponent = /** @class */ (function () {
    function MusicRecordingsDetailComponent() {
    }
    MusicRecordingsDetailComponent.prototype.ngOnInit = function () {
    };
    MusicRecordingsDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-music-recordings-detail',
            template: __webpack_require__(/*! ./music-recordings-detail.component.html */ "./src/app/music-recordings/music-recordings-detail/music-recordings-detail.component.html"),
            styles: [__webpack_require__(/*! ./music-recordings-detail.component.scss */ "./src/app/music-recordings/music-recordings-detail/music-recordings-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MusicRecordingsDetailComponent);
    return MusicRecordingsDetailComponent;
}());



/***/ }),

/***/ "./src/app/music-recordings/music-recordings-edit/form.layout.ts":
/*!***********************************************************************!*\
  !*** ./src/app/music-recordings/music-recordings-edit/form.layout.ts ***!
  \***********************************************************************/
/*! exports provided: FORM_LAYOUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM_LAYOUT", function() { return FORM_LAYOUT; });
var FORM_LAYOUT = {
    'addressStreet': {
        element: {
            host: 'material-form-group'
        }
    }
};


/***/ }),

/***/ "./src/app/music-recordings/music-recordings-edit/music-recordings-edit.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/music-recordings/music-recordings-edit/music-recordings-edit.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n  <mat-card>\r\n\r\n    <form [formGroup]=\"formGroup\">\r\n\r\n      <dynamic-material-form [group]=\"formGroup\" [layout]=\"formLayout\" [model]=\"formModel\" (blur)=\"onBlur($event)\"\r\n        (change)=\"onChange($event)\" (focus)=\"onFocus($event)\" (matEvent)=\"onMatEvent($event)\" fxLayout=\"row wrap\"\r\n        fxLayoutAlign=\"start start\" fxLayoutGap=\"40px\"></dynamic-material-form>\r\n\r\n    </form>\r\n  </mat-card>\r\n\r\n  <div mat-dialog-actions class=\"align-right\">\r\n    <button mat-button mat-dialog-close=\"Edit Cancelled\">Cancel</button>\r\n    <button mat-button [mat-dialog-close]=\"data.Name\" cdkFocusInitial [disabled]=\"formGroup.invalid\">Save</button>\r\n  </div>\r\n\r\n\r\n  <pre>{{formGroup.value | json}}</pre>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/music-recordings/music-recordings-edit/music-recordings-edit.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/music-recordings/music-recordings-edit/music-recordings-edit.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL211c2ljLXJlY29yZGluZ3MvbXVzaWMtcmVjb3JkaW5ncy1lZGl0L211c2ljLXJlY29yZGluZ3MtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/music-recordings/music-recordings-edit/music-recordings-edit.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/music-recordings/music-recordings-edit/music-recordings-edit.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: MusicRecordingsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicRecordingsEditComponent", function() { return MusicRecordingsEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm5/core.js");
/* harmony import */ var _shared_forms_formModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_shared/forms/formModel */ "./src/app/music-recordings/_shared/forms/formModel.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _form_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form.layout */ "./src/app/music-recordings/music-recordings-edit/form.layout.ts");






var MusicRecordingsEditComponent = /** @class */ (function () {
    function MusicRecordingsEditComponent(data, formService) {
        this.data = data;
        this.formService = formService;
        this.formModel = _shared_forms_formModel__WEBPACK_IMPORTED_MODULE_3__["MY_FORM_MODEL"];
        this.formLayout = _form_layout__WEBPACK_IMPORTED_MODULE_5__["FORM_LAYOUT"];
    }
    MusicRecordingsEditComponent.prototype.ngOnInit = function () {
        this.formGroup = this.formService.createFormGroup(this.formModel);
        this.formGroup.patchValue(this.data);
    };
    MusicRecordingsEditComponent.prototype.onBlur = function ($event) {
        console.log("Material blur event on: " + $event.model.id + ": ", $event);
    };
    MusicRecordingsEditComponent.prototype.onChange = function ($event) {
        console.log("Material change event on: " + $event.model.id + ": ", $event);
    };
    MusicRecordingsEditComponent.prototype.onFocus = function ($event) {
        console.log("Material focus event on: " + $event.model.id + ": ", $event);
    };
    MusicRecordingsEditComponent.prototype.onMatEvent = function ($event) {
        console.log("Material " + $event.type + " event on: " + $event.model.id + ": ", $event);
    };
    MusicRecordingsEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-music-recordings-edit',
            template: __webpack_require__(/*! ./music-recordings-edit.component.html */ "./src/app/music-recordings/music-recordings-edit/music-recordings-edit.component.html"),
            styles: [__webpack_require__(/*! ./music-recordings-edit.component.scss */ "./src/app/music-recordings/music-recordings-edit/music-recordings-edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_2__["DynamicFormService"]])
    ], MusicRecordingsEditComponent);
    return MusicRecordingsEditComponent;
}());



/***/ }),

/***/ "./src/app/music-recordings/music-recordings-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/music-recordings/music-recordings-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: MusicRecordingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicRecordingsRoutingModule", function() { return MusicRecordingsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./src/app/music-recordings/index.ts");




var routes = [
    { path: '', component: _index__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"] },
    { path: 'edit/:id', component: _index__WEBPACK_IMPORTED_MODULE_3__["MusicRecordingsEditComponent"] },
    { path: 'detail/:id', component: _index__WEBPACK_IMPORTED_MODULE_3__["MusicRecordingsDetailComponent"] },
];
var MusicRecordingsRoutingModule = /** @class */ (function () {
    function MusicRecordingsRoutingModule() {
    }
    MusicRecordingsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MusicRecordingsRoutingModule);
    return MusicRecordingsRoutingModule;
}());



/***/ }),

/***/ "./src/app/music-recordings/music-recordings.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/music-recordings/music-recordings.module.ts ***!
  \*************************************************************/
/*! exports provided: MusicRecordingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicRecordingsModule", function() { return MusicRecordingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-material/app-material.module */ "./src/app/app-material/app-material.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _music_recordings_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./music-recordings-routing.module */ "./src/app/music-recordings/music-recordings-routing.module.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ */ "./src/app/music-recordings/index.ts");
/* harmony import */ var _ng_dynamic_forms_ui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-dynamic-forms/ui-material */ "./node_modules/@ng-dynamic-forms/ui-material/fesm5/ui-material.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../_shared/shared.module */ "./src/app/_shared/shared.module.ts");










// import {DialogDataExampleDialog} from './index/music-recordings-index.component';

// import { SendClaimsComponent } from '../claims/send-claims/send-claims.component';

// import { ButtonRendererComponent } from './button-renderer.component';
var MusicRecordingsModule = /** @class */ (function () {
    function MusicRecordingsModule() {
    }
    MusicRecordingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                ___WEBPACK_IMPORTED_MODULE_7__["IndexComponent"],
                ___WEBPACK_IMPORTED_MODULE_7__["MusicRecordingsEditComponent"],
                ___WEBPACK_IMPORTED_MODULE_7__["MusicRecordingsDetailComponent"],
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _music_recordings_routing_module__WEBPACK_IMPORTED_MODULE_6__["MusicRecordingsRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ng_dynamic_forms_ui_material__WEBPACK_IMPORTED_MODULE_8__["DynamicFormsMaterialUIModule"],
                _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_4__["AppMaterialModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_9__["AgGridModule"].withComponents([]),
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"]
            ],
            entryComponents: [
            // TestSendClaimsComponent 
            // SendClaimsComponent
            ]
        })
    ], MusicRecordingsModule);
    return MusicRecordingsModule;
}());



/***/ }),

/***/ "./src/app/music-recordings/music-recordings/music-recordings-index.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/music-recordings/music-recordings/music-recordings-index.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Music recordings\r\n  This will allow the user to manage rights data and other related metadata about recordings. These recordings could be\r\n  unreleased or released.</p>\r\n\r\n<mat-progress-bar *ngIf=\"showSpinner\" mode=\"indeterminate\"></mat-progress-bar>\r\n\r\n<div class=\"table-responsive-lg\">\r\n  <!-- (rowClicked)=\"openDialog($event)\" -->\r\n  <ag-grid-angular #agGrid style=\"width: 100%; height: 700px;\" class=\"ag-theme-material\" \r\n  [gridOptions]=\"gridOptions\"\r\n    [rowData]=\"allItems\" \r\n    rowSelection=\"multiple\"\r\n    (cellClicked)=\"onCellClicked($event)\"\r\n    (selectionChanged)=\"onSelectionChanged($event)\"\r\n    >\r\n\r\n    <ag-grid-column headerName=\"Recordings\">\r\n\r\n      <ag-grid-column headerName=\"Actions\" [width]=\"100\" [pinned]=\"true\" [cellRenderer]=\"editBtnCellRenderer\">\r\n      </ag-grid-column>\r\n\r\n      <ag-grid-column headerName=\"#\" [width]=\"80\" [checkboxSelection]=\"true\"  [suppressMenu]=\"false\" [pinned]=\"true\"\r\n       ></ag-grid-column>\r\n\r\n      <ag-grid-column headerName=\"Name\" field=\"Name\" [width]=\"125\" [pinned]=\"true\" [sortable]=\"true\" [resizable]=\"true\"\r\n        [filter]=\"true\"></ag-grid-column>\r\n\r\n      <ag-grid-column headerName=\"Artist\" field=\"Artist\" [width]=\"120\" [pinned]=\"false\" [sortable]=\"true\"\r\n        [resizable]=\"true\" [filter]=\"true\"></ag-grid-column>\r\n    </ag-grid-column>\r\n\r\n    <ag-grid-column headerName=\"Details\">\r\n      <ag-grid-column headerName=\"ISRC\" field=\"ISRC\" [width]=\"150\" [sortable]=\"true\" [resizable]=\"true\" [filter]=\"true\">\r\n      </ag-grid-column>\r\n      <ag-grid-column headerName=\"ISWC\" field=\"ISWC\" [width]=\"100\" [sortable]=\"true\" [resizable]=\"true\" [filter]=\"true\">\r\n      </ag-grid-column>\r\n      <ag-grid-column headerName=\"Date\" field=\"Date\" [width]=\"100\" [sortable]=\"true\" [resizable]=\"true\" [filter]=\"true\">\r\n      </ag-grid-column>\r\n      <ag-grid-column headerName=\"Country\" field=\"Country\" [width]=\"150\" [cellRenderer]=\"countryCellRenderer\"\r\n        [sortable]=\"true\" [resizable]=\"true\" [filter]=\"true\"></ag-grid-column>\r\n      <ag-grid-column headerName=\"Owner\" field=\"Owner\" [width]=\"150\" [sortable]=\"true\" [resizable]=\"true\"\r\n        [filter]=\"true\"></ag-grid-column>\r\n      <ag-grid-column headerName=\"Collective\" field=\"Collective\" [width]=\"150\" [sortable]=\"true\" [resizable]=\"true\"\r\n        [filter]=\"true\"></ag-grid-column>\r\n      <ag-grid-column headerName=\"Submitted to\" field=\"Submitted to\" [width]=\"150\" [pinned]=\"false\" [sortable]=\"true\"\r\n        [resizable]=\"true\" [filter]=\"true\"></ag-grid-column>\r\n      <ag-grid-column headerName=\"Status\" field=\"Status\" [width]=\"150\" [pinned]=\"false\" [sortable]=\"true\"\r\n        [resizable]=\"true\" [filter]=\"true\"></ag-grid-column>\r\n\r\n    </ag-grid-column>\r\n  </ag-grid-angular>\r\n\r\n  <mat-action-list *ngIf=\"claimsToSend.length > 0\">  <button mat-raised-button mat-button (click)=\"sendToClaim($event)\">Claim Selected</button>\r\n     </mat-action-list> \r\n     <div>Selection: <span id=\"selectedRows\">...</span></div>\r\n\r\n\r\n \r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- <mat-card *ngIf=\"allItems\">\r\n\r\n0: \"Name\"\r\n1: \"Type\"\r\n2: \"ISWC\"\r\n3: \"Type\"\r\n4: \"Composer\"\r\n5: \"lyricist\"\r\n6: \"Arranger\"\r\n\r\n\r\n\r\n\r\n<div class=\"table-responsive-lg\">\r\n\r\n    <table class=\"table table-striped table-hover table-sm small\">\r\n  \r\n      <thead class=\"thead-dark\">\r\n        <tr>\r\n          <th>Ref</th>\r\n          <th>Title</th>\r\n          <th>Artist</th>\r\n          <th>ISRC</th>       \r\n          <th >ISWC</th>\r\n          <th >Date</th>\r\n          <th >Country</th>\r\n          <th >Owner</th>\r\n          <th >Collective</th>\r\n          <th>Submitted to</th>\r\n          <th >Status</th>\r\n          <th>Actions</th>\r\n        </tr>\r\n      </thead>\r\n  \r\n      <tbody>\r\n \r\n        <tr *ngFor=\"let item of allItems\">\r\n            <td>ISDN-2345/4321</td>\r\n            <td>{{item.Name}}</td>\r\n            <td>{{item.Artist}}</td>\r\n            <td>{{item.ISRC}}</td>     \r\n            <td>{{item.ISWC}}</td>\r\n            <td>{{item.Date}}</td>\r\n            <td>{{item.Country}}</td>\r\n            <td>{{item.Owner}}</td>\r\n            <td>{{item.Collective}}</td>\r\n            <td>{{item['Submitted to']}}</td>\r\n            <th>{{item.Status}}</th>\r\n            <td>\r\n              <button  [routerLink]=\"['edit', item.ISRC]\">Edit</button>   \r\n              <a mat-stroked-button  [routerLink]=\"['detail', item.ISRC]\">view</a>\r\n            </td>\r\n          </tr>\r\n     \r\n  \r\n        </tbody>  \r\n        </table>  \r\n  \r\n  </div>\r\n\r\n\r\n</mat-card> -->\r\n\r\n<!-- Music recordings\r\nTitle\r\nthe recording title/name.\r\nArtist\r\nThe name of the band or artist associated with the recording\r\nISRC\r\n12 alphanumeric characters, formed from the four code elements - see details. Example: UKNF91800001,  “UKNF9” - is the artist/band code, “18” two digit year, “00001” the first recording in that year.\r\nISWC\r\n\r\n\r\nDate\r\nThe recording date. We may only need the year (P date) or year/month. \r\nCountry\r\nthe country of recording, maybe this should be labeled location. \r\nOwner\r\nThe primary rights owner.\r\nCollective\r\nCollective Management Organisations. For a single right type this can be a single CMO that is that is tasked with collecting on your behalf or multiple CMOs. I think we should allow for a comma separated list with an expandable “...”\r\nSubmitted to\r\nOther services like musicbrainz the user has enabled adapters for and submitted the recordings to. Will need expandable “...”\r\nStatus\r\nAs the user can potentially submit a recording to multiple CMOs and possibly other services like musicbrainz we may have multiple statuses. This should act as a guide for identifying a combined state and actions needed. We may need to keep this simple and rely on a detail page to hold the details. So this may say “not submitted” “processing”, “need more input to complete” and “submitted”. \r\nAction\r\nCommon actions should be: Edit, View details, Submit, Edit submit list.\r\nNotes:\r\nThis should be used as an overview as we will have data that can not be easily tabulated. This is especially true if the data is submitted using multiple adapters. \r\nEditing and viewing the data is simple up to the point the user submits it. Once it is submitted to multiple services the data and state can diverge. If one of the services reports a title to be to long or containing unrecognised characters the data will need to be edited for that specific service and will diverge. I think we will need an expanded view for this.      -->\r\n"

/***/ }),

/***/ "./src/app/music-recordings/music-recordings/music-recordings-index.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/music-recordings/music-recordings/music-recordings-index.component.ts ***!
  \***************************************************************************************/
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
/* harmony import */ var _music_recordings_edit_music_recordings_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../music-recordings-edit/music-recordings-edit.component */ "./src/app/music-recordings/music-recordings-edit/music-recordings-edit.component.ts");
/* harmony import */ var _services_test_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/test-data.service */ "./src/app/services/test-data.service.ts");
/* harmony import */ var src_app_claims_send_claims_send_claims_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/claims/send-claims/send-claims.component */ "./src/app/claims/send-claims/send-claims.component.ts");









// import { ButtonRendererComponent } from '../button-renderer.component';
// import {TestSendClaimsComponent} from '..'
var IndexComponent = /** @class */ (function () {
    function IndexComponent(testData, dialog, pageTitle) {
        this.testData = testData;
        this.dialog = dialog;
        this.pageTitle = pageTitle;
        this.listAll();
    }
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.claimsToSend = [];
        this.pageTitle.setTitle('Recordings');
        this.entityTypes$ = this.testData.listEntityTypes();
        this.entityList$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (type) { return _this.testData.listEntities(type); }));
        this.selectedEntity$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (id) { return _this.testData.getEntity(_this.selectedType, id); }));
        this.listAll$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (type) { return _this.testData.listAll(type); }));
        //  this.listAll();
    };
    IndexComponent.prototype.countryCellRenderer = function (params) {
        var flag = '<img border=\'0\' width=\'15\' height=\'10\' style=\'margin-bottom: 2px\' src=\'https://www.ag-grid.com/images/flags/gb.png\'>';
        return flag + ' ' + params.value;
    };
    IndexComponent.prototype.editBtnCellRenderer = function (params) {
        var btn = '<button class="mat-button mat-raised-button"><span class="mat-button-wrapper">Edit</span><div class="mat-button-ripple mat-ripple"></div><div class="mat-button-focus-overlay"></div></button>';
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
        var dialogRef = this.dialog.open(_music_recordings_edit_music_recordings_edit_component__WEBPACK_IMPORTED_MODULE_6__["MusicRecordingsEditComponent"], {
            data: ev,
            width: '80%',
            panelClass: 'formFieldWidth380'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    IndexComponent.prototype.onSelectionChanged = function (ev) {
        var _this = this;
        this.gridApi = ev.api;
        var selectedRows = this.gridApi.getSelectedRows();
        var selectedRowsString = '';
        var theRow;
        selectedRows.forEach(function (selectedRow, index) {
            if (index > 5) {
                return;
            }
            if (index !== 0) {
                selectedRowsString += ', ';
            }
            selectedRowsString += selectedRow.Name;
            theRow = selectedRow;
        });
        this.claimsToSend = [];
        selectedRows.forEach(function (i) {
            _this.claimsToSend.push({
                'name': i.Name,
                'artist': i.Artist,
                'collective': i.Collective,
                'owner': i.Owner
            });
        });
        if (selectedRows.length >= 6) {
            selectedRowsString += ' - and ' + (selectedRows.length - 6) + ' others';
        }
        document.querySelector('#selectedRows').innerHTML = selectedRowsString;
    };
    IndexComponent.prototype.sendToClaim = function (ev) {
        var dialogRef = this.dialog.open(src_app_claims_send_claims_send_claims_component__WEBPACK_IMPORTED_MODULE_8__["SendClaimsComponent"], {
            data: this.claimsToSend,
            width: '80%',
            panelClass: 'formFieldWidth380'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    IndexComponent.prototype.listAll = function () {
        var _this = this;
        this.testData.listAll('music-recording').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return _this.showSpinner = true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(500) // fake loading
        )
            .subscribe(function (res) {
            _this.allItems = res;
            _this.showSpinner = false;
        });
    };
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./music-recordings-index.component.html */ "./src/app/music-recordings/music-recordings/music-recordings-index.component.html"),
            styles: [" \n  dynamic-material-form[fxLayoutAlign] { padding:10px; padding-left: 25px;}\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_test_data_service__WEBPACK_IMPORTED_MODULE_7__["TestDataService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            src_app_services_page_title_service__WEBPACK_IMPORTED_MODULE_5__["PageTitleService"]])
    ], IndexComponent);
    return IndexComponent;
}());

// @Component({
//   selector: 'app-test-import-dialog',
//   template: `
//   <pre> {{ data | json }}</pre> 
//   <div mat-dialog-actions class="align-right">
//     <button mat-button mat-dialog-close="Edit Cancelled">Cancel</button>
//     <button mat-button [mat-dialog-close]="data.Name">Send All</button>
//   </div>
//   `
// })
// export class TestSendClaimsComponent implements OnInit {
//   constructor(
//     @Inject(MAT_DIALOG_DATA) public data: any,
//    // private formService: DynamicFormService
//   ) { }
//   ngOnInit() {
//   }
// }


/***/ })

}]);
//# sourceMappingURL=music-recordings-music-recordings-module.js.map