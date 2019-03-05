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
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index/index.component */ "./src/app/claims/index/index.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_shared/shared.module */ "./src/app/_shared/shared.module.ts");
/* harmony import */ var _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app-material/app-material.module */ "./src/app/app-material/app-material.module.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ng_dynamic_forms_ui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-dynamic-forms/ui-material */ "./node_modules/@ng-dynamic-forms/ui-material/fesm5/ui-material.js");



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
                _index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"]
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
            //  SendClaimsComponent
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
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index/index.component */ "./src/app/claims/index/index.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return _index_index_component__WEBPACK_IMPORTED_MODULE_0__["IndexComponent"]; });




/***/ }),

/***/ "./src/app/claims/index/index.component.html":
/*!***************************************************!*\
  !*** ./src/app/claims/index/index.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- xx{{listAll$ | json}}xx -->\r\n\r\n\r\n<div class=\"table-responsive-lg\">\r\n  <!-- (rowClicked)=\"openDialog($event)\" -->\r\n  <mat-card>\r\n<h2>Claims Out Box</h2>\r\n\r\n  <ag-grid-angular   #agGrid style=\"width: 100%;\" class=\"ag-theme-material\" \r\n  [gridOptions]=\"gridOptions\"\r\n    [rowData]=\"listAll$\" \r\n    rowSelection=\"multiple\"\r\n    (cellClicked)=\"onCellClicked($event)\"\r\n    (selectionChanged)=\"onSelectionChanged($event)\"\r\n    >\r\n\r\n\r\n\r\n    <ag-grid-column headerName=\"Recordings\">\r\n\r\n      <ag-grid-column headerName=\"Actions\" [width]=\"100\" [pinned]=\"true\" [cellRenderer]=\"editBtnCellRenderer\">\r\n      </ag-grid-column>\r\n\r\n      <ag-grid-column headerName=\"#\" [width]=\"80\" [checkboxSelection]=\"true\"  [suppressMenu]=\"false\" [pinned]=\"true\"\r\n       ></ag-grid-column>\r\n\r\n      <ag-grid-column headerName=\"Name\" field=\"name\" [width]=\"175\" [pinned]=\"true\" [sortable]=\"true\" [resizable]=\"true\"\r\n        [filter]=\"true\"></ag-grid-column>\r\n        \r\n   </ag-grid-column>\r\n      <ag-grid-column headerName=\"Artist\" field=\"artist\" [width]=\"120\" [pinned]=\"false\" [sortable]=\"true\"\r\n        [resizable]=\"true\" [filter]=\"true\"></ag-grid-column>\r\n\r\n \r\n\r\n\r\n    <ag-grid-column headerName=\"Details\">\r\n      <ag-grid-column headerName=\"ISRC\" field=\"ISRC\" [width]=\"150\" [sortable]=\"true\" [resizable]=\"true\" [filter]=\"true\">\r\n      </ag-grid-column>\r\n      <ag-grid-column headerName=\"ISWC\" field=\"ISWC\" [width]=\"100\" [sortable]=\"true\" [resizable]=\"true\" [filter]=\"true\">\r\n      </ag-grid-column>\r\n\r\n      <ag-grid-column headerName=\"Owner\" field=\"owner\" [width]=\"150\" [sortable]=\"true\" [resizable]=\"true\"\r\n        [filter]=\"true\"></ag-grid-column>\r\n      <ag-grid-column headerName=\"Collective\" field=\"collective\" [width]=\"150\" [sortable]=\"true\" [resizable]=\"true\"\r\n        [filter]=\"true\"></ag-grid-column>\r\n      <ag-grid-column headerName=\"Claim Status\" field=\"status\" [width]=\"150\" [pinned]=\"false\" [sortable]=\"false\"\r\n        [resizable]=\"false\" [filter]=\"false\"></ag-grid-column>\r\n\r\n    </ag-grid-column>\r\n  </ag-grid-angular>\r\n\r\n  <mat-action-list>  <button mat-raised-button mat-button (click)=\"sendToClaim($event)\">Delete Selected</button>\r\n     </mat-action-list> \r\n     <div>Selection: <span id=\"selectedRows\">...</span></div>\r\n\r\n</mat-card>\r\n     <hr>\r\n\r\n\r\n    <mat-card>\r\n     <h2>Claims In Box</h2>\r\n     your in box is empty please check back later</mat-card>"

/***/ }),

/***/ "./src/app/claims/index/index.component.scss":
/*!***************************************************!*\
  !*** ./src/app/claims/index/index.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsYWltcy9pbmRleC9pbmRleC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/claims/index/index.component.ts":
/*!*************************************************!*\
  !*** ./src/app/claims/index/index.component.ts ***!
  \*************************************************/
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
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/claims/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/claims/index/index.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            src_app_shared_services_claims_service__WEBPACK_IMPORTED_MODULE_4__["ClaimsService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ })

}]);
//# sourceMappingURL=claims-claims-module.js.map