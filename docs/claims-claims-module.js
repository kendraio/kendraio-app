(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["claims-claims-module"],{

/***/ "./src/app/_shared/services/claims.service.ts":
/*!****************************************************!*\
  !*** ./src/app/_shared/services/claims.service.ts ***!
  \****************************************************/
/*! exports provided: ClaimsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimsService", function() { return ClaimsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ClaimsService = /** @class */ (function () {
    function ClaimsService() {
    }
    ClaimsService.prototype.getUnsentClaims = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(JSON.parse(localStorage.getItem('myClaims')));
    };
    ClaimsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ClaimsService);
    return ClaimsService;
}());



/***/ }),

/***/ "./src/app/claims/_shared/forms/edit-send-form/edit-send-form.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/claims/_shared/forms/edit-send-form/edit-send-form.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section\nfxLayout=\"row wrap\"\nfxLayoutAlign=\"start start\" \nfxLayoutGap=\"20px\"\n>\n\n<mat-card>\n\n  <mat-card-header>\n  <b>Claim Details</b>\n  </mat-card-header>\n  <mat-card-content>\n\n\n    <mat-list>\n        <mat-list-item>Name:   {{data.name}} </mat-list-item>\n        <mat-list-item>Artist:   {{data.artist}} </mat-list-item>\n        <mat-list-item>Collective:  {{data.collective}} </mat-list-item>\n        <mat-list-item>Collective:  {{data.owner}} </mat-list-item>\n       </mat-list>\n\n  </mat-card-content>\n\n\n</mat-card>\n\n\n    <mat-card>\n        <mat-card-header>\n            <b>Extra Information</b>\n            <button mat-button ><mat-icon>file_copy</mat-icon> copy from previous</button>\n          </mat-card-header>\n  \n      <form [formGroup]=\"formGroup\">\n\n\n        <dynamic-material-form \n                      [group]=\"formGroup\" [layout]=\"formLayout\" [model]=\"formModel\" (blur)=\"onBlur($event)\"\n                      (change)=\"onChange($event)\" (focus)=\"onFocus($event)\" (matEvent)=\"onMatEvent($event)\" \n                 \n                           ></dynamic-material-form>\n  \n      </form>\n    </mat-card>\n  \n    <div mat-dialog-actions class=\"align-right\">\n      <button mat-button mat-dialog-close=\"Edit Cancelled\">Cancel</button>\n      <button mat-raised-button mat-button [mat-dialog-close]=\"data.Name\" cdkFocusInitial [disabled]=\"formGroup.invalid\">Send</button>\n    </div>\n     <!-- formdata = {{ data | json }} -->\n     <!-- formGroup = {{formGroup.value | json}} -->\n  \n  </section>\n\n\n  \n\n\n"

/***/ }),

/***/ "./src/app/claims/_shared/forms/edit-send-form/edit-send-form.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/claims/_shared/forms/edit-send-form/edit-send-form.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsYWltcy9fc2hhcmVkL2Zvcm1zL2VkaXQtc2VuZC1mb3JtL2VkaXQtc2VuZC1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/claims/_shared/forms/edit-send-form/edit-send-form.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/claims/_shared/forms/edit-send-form/edit-send-form.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EditSendFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSendFormComponent", function() { return EditSendFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _formModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../formModel */ "./src/app/claims/_shared/forms/formModel.ts");
/* harmony import */ var _form_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form.layout */ "./src/app/claims/_shared/forms/edit-send-form/form.layout.ts");






var EditSendFormComponent = /** @class */ (function () {
    function EditSendFormComponent(formService) {
        this.formService = formService;
        this.formModel = _formModel__WEBPACK_IMPORTED_MODULE_4__["MY_CLAIMS_FORM_MODEL"];
        this.formLayout = _form_layout__WEBPACK_IMPORTED_MODULE_5__["CLAIMS_FORM_LAYOUT"];
    }
    EditSendFormComponent.prototype.ngOnInit = function () {
        this.formGroup = this.formService.createFormGroup(this.formModel);
        this.formGroup.patchValue(this.data);
        // this.formGroup.get('comments').patchValue('booly');
        // this.formGroup.get('claim.details').patchValue(this.data);
        this.formGroup.addControl('details', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''));
        this.formGroup.get('details').patchValue(this.data);
    };
    EditSendFormComponent.prototype.ngOnChanges = function (changes) {
        if (this.formGroup) {
            this.formGroup.get('details').patchValue(this.data);
        }
    };
    //   ngDoCheck(): void {
    //     //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //     //Add 'implements DoCheck' to the class.
    // alert('checks');
    //   }
    EditSendFormComponent.prototype.onBlur = function ($event) {
        console.log("Material blur event on: " + $event.model.id + ": ", $event);
    };
    EditSendFormComponent.prototype.onChange = function ($event) {
        console.log("Material change event on: " + $event.model.id + ": ", $event);
    };
    EditSendFormComponent.prototype.onFocus = function ($event) {
        console.log("Material focus event on: " + $event.model.id + ": ", $event);
    };
    EditSendFormComponent.prototype.onMatEvent = function ($event) {
        console.log("Material " + $event.type + " event on: " + $event.model.id + ": ", $event);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditSendFormComponent.prototype, "data", void 0);
    EditSendFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-send-form',
            template: __webpack_require__(/*! ./edit-send-form.component.html */ "./src/app/claims/_shared/forms/edit-send-form/edit-send-form.component.html"),
            styles: [__webpack_require__(/*! ./edit-send-form.component.scss */ "./src/app/claims/_shared/forms/edit-send-form/edit-send-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_2__["DynamicFormService"]])
    ], EditSendFormComponent);
    return EditSendFormComponent;
}());



/***/ }),

/***/ "./src/app/claims/_shared/forms/edit-send-form/form.layout.ts":
/*!********************************************************************!*\
  !*** ./src/app/claims/_shared/forms/edit-send-form/form.layout.ts ***!
  \********************************************************************/
/*! exports provided: CLAIMS_FORM_LAYOUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLAIMS_FORM_LAYOUT", function() { return CLAIMS_FORM_LAYOUT; });
var CLAIMS_FORM_LAYOUT = {
    'stuff': {
        element: {
            host: 'material-form-group'
        }
    }
};


/***/ }),

/***/ "./src/app/claims/claims-edit-send/claims-edit-send.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/claims/claims-edit-send/claims-edit-send.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<h2>Edit and Send Form:</h2>\n<h5>You are about to send {{data.length}} claims</h5>\n\n<mat-card>\n  <mat-card-header>\n    <mat-card-title> Claim {{rowCurrent + 1}} of  {{rowCount}}</mat-card-title>\n    <mat-card-subtitle></mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n  \n      <!-- {{claim | json}} -->\n\n<app-edit-send-form [data]=\"claim\">\n   \n\n</app-edit-send-form>\n\n  </mat-card-content>\n\n</mat-card>\n\n\n\n  <mat-card-actions>\n      <button mat-mini-fab (click)=\"goToPrevRow()\"><mat-icon>arrow_backward</mat-icon></button>\n      <button mat-mini-fab (click)=\"goToNextRow()\"><mat-icon>arrow_forward</mat-icon></button>\n  </mat-card-actions>"

/***/ }),

/***/ "./src/app/claims/claims-edit-send/claims-edit-send.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/claims/claims-edit-send/claims-edit-send.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsYWltcy9jbGFpbXMtZWRpdC1zZW5kL2NsYWltcy1lZGl0LXNlbmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/claims/claims-edit-send/claims-edit-send.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/claims/claims-edit-send/claims-edit-send.component.ts ***!
  \***********************************************************************/
/*! exports provided: ClaimsEditSendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimsEditSendComponent", function() { return ClaimsEditSendComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm5/core.js");
/* harmony import */ var _shared_forms_formModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_shared/forms/formModel */ "./src/app/claims/_shared/forms/formModel.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _claims_edit_form_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../claims-edit/form.layout */ "./src/app/claims/claims-edit/form.layout.ts");






var ClaimsEditSendComponent = /** @class */ (function () {
    function ClaimsEditSendComponent(data, formService) {
        this.data = data;
        this.formService = formService;
        this.formModel = _shared_forms_formModel__WEBPACK_IMPORTED_MODULE_3__["MY_CLAIMS_FORM_MODEL"];
        this.formLayout = _claims_edit_form_layout__WEBPACK_IMPORTED_MODULE_5__["CLAIMS_FORM_LAYOUT"];
        this.rowCurrent = 0;
    }
    ClaimsEditSendComponent.prototype.ngOnInit = function () {
        //this.formGroup = this.formService.createFormGroup(this.formModel);
        this.rowCount = this.data.length;
        this.claim = this.data[0];
        // this.formGroup.patchValue(this.data[0]);
        //  this.formGroup.get('comments').patchValue('boo');
    };
    ClaimsEditSendComponent.prototype.goToNextRow = function () {
        if (this.rowCurrent < this.rowCount - 1) {
            this.claim = this.data[this.rowCurrent + 1];
            this.rowCurrent++;
        }
    };
    ClaimsEditSendComponent.prototype.goToPrevRow = function () {
        if (this.rowCurrent > 0) {
            this.claim = this.data[this.rowCurrent - 1];
            this.rowCurrent--;
        }
    };
    ClaimsEditSendComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-claims-edit-send',
            template: __webpack_require__(/*! ./claims-edit-send.component.html */ "./src/app/claims/claims-edit-send/claims-edit-send.component.html"),
            styles: [__webpack_require__(/*! ./claims-edit-send.component.scss */ "./src/app/claims/claims-edit-send/claims-edit-send.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_2__["DynamicFormService"]])
    ], ClaimsEditSendComponent);
    return ClaimsEditSendComponent;
}());



/***/ }),

/***/ "./src/app/claims/claims-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/claims/claims-routing.module.ts ***!
  \*************************************************/
/*! exports provided: ClaimsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimsRoutingModule", function() { return ClaimsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./src/app/claims/index.ts");




var routes = [
    { path: '', component: _index__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"] },
];
var ClaimsRoutingModule = /** @class */ (function () {
    function ClaimsRoutingModule() {
    }
    ClaimsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ClaimsRoutingModule);
    return ClaimsRoutingModule;
}());



/***/ }),

/***/ "./src/app/claims/claims.module.ts":
/*!*****************************************!*\
  !*** ./src/app/claims/claims.module.ts ***!
  \*****************************************/
/*! exports provided: ClaimsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimsModule", function() { return ClaimsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _claims_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./claims-routing.module */ "./src/app/claims/claims-routing.module.ts");
/* harmony import */ var _index_claims_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index/claims.component */ "./src/app/claims/index/claims.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_shared/shared.module */ "./src/app/_shared/shared.module.ts");
/* harmony import */ var _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app-material/app-material.module */ "./src/app/app-material/app-material.module.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ng_dynamic_forms_ui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-dynamic-forms/ui-material */ "./node_modules/@ng-dynamic-forms/ui-material/fesm5/ui-material.js");
/* harmony import */ var _claims_edit_send_claims_edit_send_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./claims-edit-send/claims-edit-send.component */ "./src/app/claims/claims-edit-send/claims-edit-send.component.ts");
/* harmony import */ var _shared_forms_edit_send_form_edit_send_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_shared/forms/edit-send-form/edit-send-form.component */ "./src/app/claims/_shared/forms/edit-send-form/edit-send-form.component.ts");



// import { AppMaterialModule } from '../app-material/app-material.module';


// import { SendClaimsComponent } from './send-claims/send-claims.component';
// import { MatButtonModule,  MatButton } from '@angular/material';
// import {MatDialogModule} from '@angular/material';

// import { ClaimsEditComponent } from './claims-edit/claims-edit.component';

// import { FlexLayoutModule } from '@angular/flex-layout';




var ClaimsModule = /** @class */ (function () {
    function ClaimsModule() {
    }
    ClaimsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _index_claims_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"],
                _claims_edit_send_claims_edit_send_component__WEBPACK_IMPORTED_MODULE_9__["ClaimsEditSendComponent"],
                _shared_forms_edit_send_form_edit_send_form_component__WEBPACK_IMPORTED_MODULE_10__["EditSendFormComponent"]
                //ClaimsEditComponent, 
                // SendClaimsComponent
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _claims_routing_module__WEBPACK_IMPORTED_MODULE_3__["ClaimsRoutingModule"],
                _ng_dynamic_forms_ui_material__WEBPACK_IMPORTED_MODULE_8__["DynamicFormsMaterialUIModule"],
                // FlexLayoutModule
                // AppMaterialModule,
                // MatButtonModule,
                // MatDialogModule
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__["AgGridModule"].withComponents([]),
                _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_6__["AppMaterialModule"],
            ],
            entryComponents: [
                _claims_edit_send_claims_edit_send_component__WEBPACK_IMPORTED_MODULE_9__["ClaimsEditSendComponent"]
            ]
        })
    ], ClaimsModule);
    return ClaimsModule;
}());



/***/ }),

/***/ "./src/app/claims/index.ts":
/*!*********************************!*\
  !*** ./src/app/claims/index.ts ***!
  \*********************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_claims_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index/claims.component */ "./src/app/claims/index/claims.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return _index_claims_component__WEBPACK_IMPORTED_MODULE_0__["IndexComponent"]; });




/***/ }),

/***/ "./src/app/claims/index/claims.component.html":
/*!****************************************************!*\
  !*** ./src/app/claims/index/claims.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- xx{{listAll$ | json}}xx -->\r\n\r\n\r\n<div class=\"table-responsive-lg\">\r\n  <!-- (rowClicked)=\"openDialog($event)\" -->\r\n  <mat-card>\r\n<h2>Claims Out Box</h2>\r\n\r\n  <ag-grid-angular   #agGrid style=\"width: 100%;\" class=\"ag-theme-material\" \r\n  [gridOptions]=\"gridOptions\"\r\n    [rowData]=\"listAll$\" \r\n    rowSelection=\"multiple\"\r\n    (cellClicked)=\"onCellClicked($event)\"\r\n    (selectionChanged)=\"onSelectionChanged($event)\"\r\n    >\r\n\r\n\r\n\r\n    <ag-grid-column headerName=\"Recordings\">\r\n\r\n      <ag-grid-column headerName=\"Actions\" [width]=\"100\" [pinned]=\"true\" [cellRenderer]=\"editBtnCellRenderer\">\r\n      </ag-grid-column>\r\n\r\n      <ag-grid-column headerName=\"#\" [width]=\"80\" [checkboxSelection]=\"true\"  [suppressMenu]=\"false\" [pinned]=\"true\"\r\n       ></ag-grid-column>\r\n\r\n      <ag-grid-column headerName=\"Name\" field=\"name\" [width]=\"175\" [pinned]=\"true\" [sortable]=\"true\" [resizable]=\"true\"\r\n        [filter]=\"true\"></ag-grid-column>\r\n        \r\n   </ag-grid-column>\r\n      <ag-grid-column headerName=\"Artist\" field=\"artist\" [width]=\"120\" [pinned]=\"false\" [sortable]=\"true\"\r\n        [resizable]=\"true\" [filter]=\"true\"></ag-grid-column>\r\n\r\n \r\n\r\n\r\n    <ag-grid-column headerName=\"Details\">\r\n      <ag-grid-column headerName=\"ISRC\" field=\"ISRC\" [width]=\"150\" [sortable]=\"true\" [resizable]=\"true\" [filter]=\"true\">\r\n      </ag-grid-column>\r\n      <ag-grid-column headerName=\"ISWC\" field=\"ISWC\" [width]=\"100\" [sortable]=\"true\" [resizable]=\"true\" [filter]=\"true\">\r\n      </ag-grid-column>\r\n\r\n      <ag-grid-column headerName=\"Owner\" field=\"owner\" [width]=\"150\" [sortable]=\"true\" [resizable]=\"true\"\r\n        [filter]=\"true\"></ag-grid-column>\r\n      <ag-grid-column headerName=\"Collective\" field=\"collective\" [width]=\"150\" [sortable]=\"true\" [resizable]=\"true\"\r\n        [filter]=\"true\"></ag-grid-column>\r\n      <ag-grid-column headerName=\"Claim Status\" field=\"status\" [width]=\"150\" [pinned]=\"false\" [sortable]=\"false\"\r\n        [resizable]=\"false\" [filter]=\"false\"></ag-grid-column>\r\n\r\n    </ag-grid-column>\r\n  </ag-grid-angular>\r\n\r\n  <mat-action-list>  <button mat-raised-button mat-button (click)=\"sendToClaim($event)\">Delete Selected</button>\r\n    <button mat-raised-button mat-button (click)=\"editSendClaims(claimsToSend)\">Send Selected</button>\r\n     </mat-action-list> \r\n     <div>Selection: <span id=\"selectedRows\">...</span></div>\r\n\r\n</mat-card>\r\n     <hr>\r\n\r\n\r\n    <mat-card>\r\n     <h2>Claims In Box</h2>\r\n     your in box is empty please check back later</mat-card>"

/***/ }),

/***/ "./src/app/claims/index/claims.component.scss":
/*!****************************************************!*\
  !*** ./src/app/claims/index/claims.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsYWltcy9pbmRleC9jbGFpbXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/claims/index/claims.component.ts":
/*!**************************************************!*\
  !*** ./src/app/claims/index/claims.component.ts ***!
  \**************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _claims_edit_claims_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../claims-edit/claims-edit.component */ "./src/app/claims/claims-edit/claims-edit.component.ts");
/* harmony import */ var src_app_shared_services_claims_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_shared/services/claims.service */ "./src/app/_shared/services/claims.service.ts");
/* harmony import */ var _claims_edit_send_claims_edit_send_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../claims-edit-send/claims-edit-send.component */ "./src/app/claims/claims-edit-send/claims-edit-send.component.ts");






var IndexComponent = /** @class */ (function () {
    function IndexComponent(dialog, claimsService) {
        this.dialog = dialog;
        this.claimsService = claimsService;
        this.listAll();
    }
    IndexComponent.prototype.ngOnInit = function () {
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
                'name': i.name,
                'artist': i.artist,
                'collective': i.collective,
                'owner': i.owner
            });
        });
        if (selectedRows.length >= 6) {
            selectedRowsString += ' - and ' + (selectedRows.length - 6) + ' others';
        }
        document.querySelector('#selectedRows').innerHTML = selectedRowsString;
    };
    IndexComponent.prototype.openDialog = function (ev) {
        var dialogRef = this.dialog.open(_claims_edit_claims_edit_component__WEBPACK_IMPORTED_MODULE_3__["ClaimsEditComponent"], {
            data: ev,
            width: '80%',
            panelClass: 'formFieldWidth380'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    IndexComponent.prototype.openEditSend = function (ev) {
        var dialogRef = this.dialog.open(_claims_edit_send_claims_edit_send_component__WEBPACK_IMPORTED_MODULE_5__["ClaimsEditSendComponent"], {
            data: ev,
            width: '80%',
            panelClass: 'formFieldWidth380'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    IndexComponent.prototype.editBtnCellRenderer = function (params) {
        var btn = '<button class="mat-button mat-raised-button"><span class="mat-button-wrapper">Edit</span><div class="mat-button-ripple mat-ripple"></div><div class="mat-button-focus-overlay"></div></button>';
        return btn;
    };
    IndexComponent.prototype.listAll = function () {
        this.listAll$ = JSON.parse(localStorage.getItem('myClaims'));
        // this.listAll$ = new Subject<string>().pipe(
        //   switchMap(type => this.claimsService.getUnsentClaims())
        // );
        // this.claimsService.getUnsentClaims().pipe(
        //   tap(() => this.showSpinner = true),
        //   delay(500) // fake loading
        // )
        //   .subscribe(res => {
        //     this.allItems = res;
        //     this.showSpinner = false;
        //   });
    };
    IndexComponent.prototype.sendToClaim = function (ev) {
    };
    IndexComponent.prototype.onCellClicked = function (ev) {
        if (ev.colDef.headerName === 'Actions') {
            this.openDialog(ev.data);
        }
    };
    IndexComponent.prototype.editSendClaims = function (ev) {
        this.openEditSend(ev);
    };
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./claims.component.html */ "./src/app/claims/index/claims.component.html"),
            styles: [__webpack_require__(/*! ./claims.component.scss */ "./src/app/claims/index/claims.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            src_app_shared_services_claims_service__WEBPACK_IMPORTED_MODULE_4__["ClaimsService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ })

}]);
//# sourceMappingURL=claims-claims-module.js.map