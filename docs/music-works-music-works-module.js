(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["music-works-music-works-module"],{

/***/ "./src/app/assets/music-works/_shared/forms/formModel.ts":
/*!***************************************************************!*\
  !*** ./src/app/assets/music-works/_shared/forms/formModel.ts ***!
  \***************************************************************/
/*! exports provided: WORKS_FORM_MODEL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORKS_FORM_MODEL", function() { return WORKS_FORM_MODEL; });
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm5/core.js");

var WORKS_FORM_MODEL = [
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
        id: 'Composer',
        placeholder: 'Composer',
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        }
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'lyricist',
        placeholder: 'lyricist',
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        }
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'Arranger',
        placeholder: 'Arranger',
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        }
    }),
];


/***/ }),

/***/ "./src/app/assets/music-works/_shared/forms/registerWork.ts":
/*!******************************************************************!*\
  !*** ./src/app/assets/music-works/_shared/forms/registerWork.ts ***!
  \******************************************************************/
/*! exports provided: WORKS_REGISTER_FORM_MODEL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORKS_REGISTER_FORM_MODEL", function() { return WORKS_REGISTER_FORM_MODEL; });
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm5/core.js");

var WORKS_REGISTER_FORM_MODEL = [
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'title',
        maxLength: 25,
        placeholder: 'Title of work',
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        }
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'altTitle',
        maxLength: 25,
        placeholder: 'Any alternative titles',
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        }
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'Duration',
        maxLength: 50,
        placeholder: 'Duration',
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
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicTextAreaModel"]({
        id: 'instrumentation',
        placeholder: 'instrumentation',
        hint: 'if a classical or dramatic work',
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        }
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicTextAreaModel"]({
        id: 'CAE',
        placeholder: 'CAE/IPI number of any other writers',
        hint: 'CAE/IPI number of any other writers',
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        }
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicCheckboxGroupModel"]({
        id: 'cmo',
        label: 'Please choose all that apply ',
        group: [
            new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicCheckboxModel"]({
                id: 'prs',
                label: 'PRS',
                value: true
            }),
            new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicCheckboxModel"]({
                id: 'mcps',
                label: 'MCPS',
                value: false
            }),
            new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicCheckboxModel"]({
                id: 'ppl',
                label: 'PPL',
                value: false
            })
        ]
    }),
];


/***/ }),

/***/ "./src/app/assets/music-works/add-new/form.layout.ts":
/*!***********************************************************!*\
  !*** ./src/app/assets/music-works/add-new/form.layout.ts ***!
  \***********************************************************/
/*! exports provided: WORKS_FORM_LAYOUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORKS_FORM_LAYOUT", function() { return WORKS_FORM_LAYOUT; });
var WORKS_FORM_LAYOUT = {
    'addressStreet': {
        element: {
            host: 'material-form-group'
        }
    }
};


/***/ }),

/***/ "./src/app/assets/music-works/add-new/register.component.html":
/*!********************************************************************!*\
  !*** ./src/app/assets/music-works/add-new/register.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n\r\n\r\n\r\n\r\n<p>\r\n    As a writer or composer, you can register your own works and amend the details at any time. \r\n    However, if you have a publisher, they will usually manage any registration and amendments on your behalf.\r\n</p>\r\n\r\n  \r\n\r\n  <mat-card>\r\n\r\n      <form [formGroup]=\"formGroup\">\r\n    \r\n          <dynamic-material-form [group]=\"formGroup\"\r\n                                 [layout]=\"formLayout\"\r\n                                 [model]=\"formModel\"\r\n                                 (blur)=\"onBlur($event)\"\r\n                                 (change)=\"onChange($event)\"\r\n                                 (focus)=\"onFocus($event)\"\r\n                                 (matEvent)=\"onMatEvent($event)\" \r\n                                 fxLayout=\"row wrap\" fxLayoutAlign=\"start start\" fxLayoutGap=\"40px\"\r\n                                 ></dynamic-material-form>\r\n\r\n      </form>  \r\n  </mat-card>\r\n\r\n\r\n  <div mat-dialog-actions class=\"align-right\">\r\n      <button mat-button  mat-dialog-close=\"cancel\">Cancel</button>\r\n      <button mat-button [mat-dialog-close]=\"data.Name\" cdkFocusInitial [disabled]=\"formGroup.invalid\">Save</button>\r\n    </div>\r\n\r\n<p>You’ll be given a reference when you submit your work details, followed by a unique tune code for each work.</p>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/assets/music-works/add-new/register.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/assets/music-works/add-new/register.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2V0cy9tdXNpYy13b3Jrcy9hZGQtbmV3L3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/assets/music-works/add-new/register.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/assets/music-works/add-new/register.component.ts ***!
  \******************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_forms_registerWork__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_shared/forms/registerWork */ "./src/app/assets/music-works/_shared/forms/registerWork.ts");
/* harmony import */ var _form_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form.layout */ "./src/app/assets/music-works/add-new/form.layout.ts");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(data, formService) {
        this.data = data;
        this.formService = formService;
        this.formModel = _shared_forms_registerWork__WEBPACK_IMPORTED_MODULE_4__["WORKS_REGISTER_FORM_MODEL"];
        this.formLayout = _form_layout__WEBPACK_IMPORTED_MODULE_5__["WORKS_FORM_LAYOUT"];
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.formGroup = this.formService.createFormGroup(this.formModel);
        this.formGroup.patchValue(this.data);
    };
    RegisterComponent.prototype.onBlur = function ($event) {
        console.log("Material blur event on: " + $event.model.id + ": ", $event);
    };
    RegisterComponent.prototype.onChange = function ($event) {
        console.log("Material change event on: " + $event.model.id + ": ", $event);
    };
    RegisterComponent.prototype.onFocus = function ($event) {
        console.log("Material focus event on: " + $event.model.id + ": ", $event);
    };
    RegisterComponent.prototype.onMatEvent = function ($event) {
        console.log("Material " + $event.type + " event on: " + $event.model.id + ": ", $event);
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/assets/music-works/add-new/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/assets/music-works/add-new/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_2__["DynamicFormService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/assets/music-works/detail/detail.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/assets/music-works/detail/detail.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  detail works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/assets/music-works/detail/detail.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/assets/music-works/detail/detail.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2V0cy9tdXNpYy13b3Jrcy9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/assets/music-works/detail/detail.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/assets/music-works/detail/detail.component.ts ***!
  \***************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetailComponent = /** @class */ (function () {
    function DetailComponent() {
    }
    DetailComponent.prototype.ngOnInit = function () {
    };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! ./detail.component.html */ "./src/app/assets/music-works/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/assets/music-works/detail/detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/assets/music-works/edit/edit.component.html":
/*!*************************************************************!*\
  !*** ./src/app/assets/music-works/edit/edit.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n  <mat-card>\r\n\r\n      <form [formGroup]=\"formGroup\">\r\n    \r\n          <dynamic-material-form [group]=\"formGroup\"\r\n                                 [layout]=\"formLayout\"\r\n                                 [model]=\"formModel\"\r\n                                 (blur)=\"onBlur($event)\"\r\n                                 (change)=\"onChange($event)\"\r\n                                 (focus)=\"onFocus($event)\"\r\n                                 (matEvent)=\"onMatEvent($event)\" \r\n                                 fxLayout=\"row wrap\" fxLayoutAlign=\"start start\" fxLayoutGap=\"40px\"\r\n                                 ></dynamic-material-form>\r\n\r\n      </form>  \r\n  </mat-card>\r\n\r\n\r\n  <div mat-dialog-actions class=\"align-right\">\r\n      <button mat-button  mat-dialog-close=\"cancel\">Cancel</button>\r\n      <button mat-button [mat-dialog-close]=\"data.Name\" cdkFocusInitial [disabled]=\"formGroup.invalid\">Save</button>\r\n    </div>\r\n\r\n\r\n<!--  <pre>{{formGroup.value | json}}</pre>-->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/assets/music-works/edit/edit.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/assets/music-works/edit/edit.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2V0cy9tdXNpYy13b3Jrcy9lZGl0L2VkaXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/assets/music-works/edit/edit.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/assets/music-works/edit/edit.component.ts ***!
  \***********************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_forms_formModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_shared/forms/formModel */ "./src/app/assets/music-works/_shared/forms/formModel.ts");
/* harmony import */ var _form_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form.layout */ "./src/app/assets/music-works/edit/form.layout.ts");






var EditComponent = /** @class */ (function () {
    function EditComponent(data, formService) {
        this.data = data;
        this.formService = formService;
        this.formModel = _shared_forms_formModel__WEBPACK_IMPORTED_MODULE_4__["WORKS_FORM_MODEL"];
        this.formLayout = _form_layout__WEBPACK_IMPORTED_MODULE_5__["WORKS_FORM_LAYOUT"];
    }
    EditComponent.prototype.ngOnInit = function () {
        this.formGroup = this.formService.createFormGroup(this.formModel);
        this.formGroup.patchValue(this.data);
    };
    EditComponent.prototype.onBlur = function ($event) {
        console.log("Material blur event on: " + $event.model.id + ": ", $event);
    };
    EditComponent.prototype.onChange = function ($event) {
        console.log("Material change event on: " + $event.model.id + ": ", $event);
    };
    EditComponent.prototype.onFocus = function ($event) {
        console.log("Material focus event on: " + $event.model.id + ": ", $event);
    };
    EditComponent.prototype.onMatEvent = function ($event) {
        console.log("Material " + $event.type + " event on: " + $event.model.id + ": ", $event);
    };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/assets/music-works/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/assets/music-works/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_2__["DynamicFormService"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/assets/music-works/edit/form.layout.ts":
/*!********************************************************!*\
  !*** ./src/app/assets/music-works/edit/form.layout.ts ***!
  \********************************************************/
/*! exports provided: WORKS_FORM_LAYOUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORKS_FORM_LAYOUT", function() { return WORKS_FORM_LAYOUT; });
var WORKS_FORM_LAYOUT = {
    'addressStreet': {
        element: {
            host: 'material-form-group'
        }
    }
};


/***/ }),

/***/ "./src/app/assets/music-works/index.ts":
/*!*********************************************!*\
  !*** ./src/app/assets/music-works/index.ts ***!
  \*********************************************/
/*! exports provided: WorksComponent, DetailComponent, EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _works_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./works.component */ "./src/app/assets/music-works/works.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WorksComponent", function() { return _works_component__WEBPACK_IMPORTED_MODULE_0__["WorksComponent"]; });

/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/assets/music-works/detail/detail.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return _detail_detail_component__WEBPACK_IMPORTED_MODULE_1__["DetailComponent"]; });

/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/assets/music-works/edit/edit.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__["EditComponent"]; });






/***/ }),

/***/ "./src/app/assets/music-works/music-works-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/assets/music-works/music-works-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: MusicWorksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicWorksRoutingModule", function() { return MusicWorksRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./src/app/assets/music-works/index.ts");




var routes = [
    { path: '', component: _index__WEBPACK_IMPORTED_MODULE_3__["WorksComponent"],
        data: {
            breadcrumb: ''
        } },
    { path: 'edit/:id', component: _index__WEBPACK_IMPORTED_MODULE_3__["EditComponent"] },
    { path: 'detail/:id', component: _index__WEBPACK_IMPORTED_MODULE_3__["DetailComponent"] },
];
var MusicWorksRoutingModule = /** @class */ (function () {
    function MusicWorksRoutingModule() {
    }
    MusicWorksRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MusicWorksRoutingModule);
    return MusicWorksRoutingModule;
}());



/***/ }),

/***/ "./src/app/assets/music-works/music-works.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/assets/music-works/music-works.module.ts ***!
  \**********************************************************/
/*! exports provided: MusicWorksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicWorksModule", function() { return MusicWorksModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _music_works_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./music-works-routing.module */ "./src/app/assets/music-works/music-works-routing.module.ts");
/* harmony import */ var _works_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./works.component */ "./src/app/assets/music-works/works.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/assets/music-works/edit/edit.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/assets/music-works/detail/detail.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_dynamic_forms_ui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-dynamic-forms/ui-material */ "./node_modules/@ng-dynamic-forms/ui-material/fesm5/ui-material.js");
/* harmony import */ var src_app_app_material_app_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/app-material/app-material.module */ "./src/app/app-material/app-material.module.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _add_new_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-new/register.component */ "./src/app/assets/music-works/add-new/register.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/_shared/shared.module */ "./src/app/_shared/shared.module.ts");














var MusicWorksModule = /** @class */ (function () {
    function MusicWorksModule() {
    }
    MusicWorksModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _works_component__WEBPACK_IMPORTED_MODULE_4__["WorksComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"],
                _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__["DetailComponent"],
                _add_new_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"]
            ],
            imports: [
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _music_works_routing_module__WEBPACK_IMPORTED_MODULE_3__["MusicWorksRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _ng_dynamic_forms_ui_material__WEBPACK_IMPORTED_MODULE_8__["DynamicFormsMaterialUIModule"],
                src_app_app_material_app_material_module__WEBPACK_IMPORTED_MODULE_9__["AppMaterialModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__["AgGridModule"].withComponents([]),
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"]
            ],
            entryComponents: [
                _add_new_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"]
            ]
        })
    ], MusicWorksModule);
    return MusicWorksModule;
}());



/***/ }),

/***/ "./src/app/assets/music-works/works.component.html":
/*!*********************************************************!*\
  !*** ./src/app/assets/music-works/works.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<mat-toolbar>\r\n    <span>\r\n<button mat-button mat-raised-button (click)=\"openAddNewDialog()\">\r\n{{ 'works.registerNew'  | translate}}\r\n</button>  <span class=\"ml-3\" appHelp=\"help.1\"></span>\r\n</span>\r\n</mat-toolbar>  \r\n\r\n\r\n<h3>Your Works</h3>\r\n\r\n<div class=\"table-responsive-lg\">\r\n\r\n  <ag-grid-angular #agGrid style=\"width: 100%; height: 700px;\" class=\"ag-theme-material\" \r\n  [gridOptions]=\"gridOptions\"\r\n  [rowData]=\"allItems\"\r\n    (cellClicked)=\"onCellClicked($event)\">\r\n\r\n    <ag-grid-column headerName=\"Work\">\r\n\r\n      <ag-grid-column headerName=\"Actions\" [width]=\"100\" [pinned]=\"true\" [cellRenderer]=\"editBtnCellRenderer\">\r\n      </ag-grid-column>\r\n\r\n      <ag-grid-column headerName=\"Name\" field=\"Name\" [width]=\"165\" [pinned]=\"true\" [sortable]=\"true\" [resizable]=\"true\"\r\n        [filter]=\"true\"></ag-grid-column>\r\n\r\n     \r\n    </ag-grid-column>\r\n\r\n    <ag-grid-column headerName=\"Details\">\r\n      <ag-grid-column headerName=\"Type\" field=\"Type\" [width]=\"150\" [sortable]=\"true\" [resizable]=\"true\" [filter]=\"true\">\r\n      </ag-grid-column>\r\n\r\n      <ag-grid-column headerName=\"ISWC\" field=\"ISWC\" [width]=\"100\" [sortable]=\"true\" [resizable]=\"true\" [filter]=\"true\">\r\n      </ag-grid-column>\r\n\r\n      <ag-grid-column headerName=\"Composer\" field=\"Composer\" [width]=\"100\" [sortable]=\"true\" [resizable]=\"true\" [filter]=\"true\">\r\n      </ag-grid-column>\r\n\r\n      <ag-grid-column headerName=\"Lyricist\" field=\"lyricist\" [width]=\"150\"\r\n        [sortable]=\"true\" [resizable]=\"true\" [filter]=\"true\"></ag-grid-column>\r\n\r\n      <ag-grid-column headerName=\"Arranger\" field=\"Arranger\" [width]=\"200\" [sortable]=\"true\" [resizable]=\"true\"\r\n        [filter]=\"true\"></ag-grid-column>\r\n\r\n\r\n\r\n    </ag-grid-column>\r\n  </ag-grid-angular>\r\n</div>\r\n\r\n<p>you can amend the registration details of any works where you are a rightsholder. </p>"

/***/ }),

/***/ "./src/app/assets/music-works/works.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/assets/music-works/works.component.ts ***!
  \*******************************************************/
/*! exports provided: WorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksComponent", function() { return WorksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_page_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/page-title.service */ "./src/app/services/page-title.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/assets/music-works/edit/edit.component.ts");
/* harmony import */ var src_app_services_test_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/test-data.service */ "./src/app/services/test-data.service.ts");
/* harmony import */ var _add_new_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-new/register.component */ "./src/app/assets/music-works/add-new/register.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");










var WorksComponent = /** @class */ (function () {
    function WorksComponent(testData, pageTitle, dialog, route) {
        this.testData = testData;
        this.pageTitle = pageTitle;
        this.dialog = dialog;
        this.route = route;
        this.routeData = this.route.snapshot.data;
    }
    WorksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageTitle.setTitle(this.routeData.pageTitle);
        this.entityTypes$ = this.testData.listEntityTypes();
        this.entityList$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (type) { return _this.testData.listEntities(type); }));
        this.selectedEntity$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (id) { return _this.testData.getEntity(_this.selectedType, id); }));
        this.listAll$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (type) { return _this.testData.listAll(type); }));
        this.listAll();
    };
    WorksComponent.prototype.countryCellRenderer = function (params) {
        var flag = "<img border='0' width='15' height='10' style='margin-bottom: 2px' src='https://www.ag-grid.com/images/flags/gb.png'>";
        return flag + " " + params.value;
    };
    WorksComponent.prototype.editBtnCellRenderer = function (params) {
        var btn = '<button type="button" class="btn btn-primary btn-sm">Amend</button>';
        return btn;
    };
    WorksComponent.prototype.changeEntityType = function (type) {
        this.selectedType = type;
        this.entityList$.next(type);
    };
    WorksComponent.prototype.changeEntity = function (id) {
        this.selectedEntity$.next(id);
    };
    WorksComponent.prototype.onCellClicked = function (ev) {
        if (ev.colDef.headerName === 'Actions') {
            this.openDialog(ev.data);
        }
    };
    WorksComponent.prototype.openDialog = function (ev) {
        var dialogRef = this.dialog.open(_edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"], {
            data: ev,
            width: '80%',
            panelClass: 'formFieldWidth380'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    WorksComponent.prototype.openAddNewDialog = function (ev) {
        var dialogRef = this.dialog.open(_add_new_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"], {
            data: 'ev',
            width: '80%',
            panelClass: 'formFieldWidth380'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    WorksComponent.prototype.listAll = function () {
        var _this = this;
        this.testData.listAll('music-work').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return _this.showSpinner = true; }))
            .subscribe(function (res) {
            _this.allItems = res;
            _this.showSpinner = false;
        });
    };
    WorksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./works.component.html */ "./src/app/assets/music-works/works.component.html"),
            styles: [" \n  dynamic-material-form[fxLayoutAlign] { padding:10px; padding-left: 25px;}\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_test_data_service__WEBPACK_IMPORTED_MODULE_7__["TestDataService"],
            src_app_services_page_title_service__WEBPACK_IMPORTED_MODULE_4__["PageTitleService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]])
    ], WorksComponent);
    return WorksComponent;
}());



/***/ })

}]);
//# sourceMappingURL=music-works-music-works-module.js.map