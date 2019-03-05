(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["claims-claims-module"],{

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



// import { AppMaterialModule } from '../app-material/app-material.module';


// import { SendClaimsComponent } from './send-claims/send-claims.component';
// import { MatButtonModule,  MatButton } from '@angular/material';
// import {MatDialogModule} from '@angular/material';

// import { FlexLayoutModule } from '@angular/flex-layout';
var ClaimsModule = /** @class */ (function () {
    function ClaimsModule() {
    }
    ClaimsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"],
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _claims_routing_module__WEBPACK_IMPORTED_MODULE_3__["ClaimsRoutingModule"],
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

module.exports = "<p>\r\n  index works!\r\n</p>\r\n"

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


var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/claims/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/claims/index/index.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ })

}]);
//# sourceMappingURL=claims-claims-module.js.map