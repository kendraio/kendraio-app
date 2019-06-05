(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bloomen-bloomen-module"],{

/***/ "./src/app/bloomen/bloomen-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/bloomen/bloomen-routing.module.ts ***!
  \***************************************************/
/*! exports provided: BloomenRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BloomenRoutingModule", function() { return BloomenRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users/users.component */ "./src/app/bloomen/users/users.component.ts");




var routes = [
    {
        path: '',
        component: _users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"],
        data: {
            breadcrumb: '',
            menuLabel: 'Users'
        },
        children: [
            {
                path: 'users',
                loadChildren: './users/users.module#UsersModule',
                data: {
                    pageTitle: { 'de': 'Dateien', 'fr': '', 'en-US': 'Users' },
                    breadcrumb: { 'de': 'Dateien', 'fr': '', 'en-US': 'Users' },
                    menuLabel: 'Bloomen Users'
                }
            }
        ]
    }
];
var BloomenRoutingModule = /** @class */ (function () {
    function BloomenRoutingModule() {
    }
    BloomenRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BloomenRoutingModule);
    return BloomenRoutingModule;
}());



/***/ }),

/***/ "./src/app/bloomen/bloomen.module.ts":
/*!*******************************************!*\
  !*** ./src/app/bloomen/bloomen.module.ts ***!
  \*******************************************/
/*! exports provided: BloomenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BloomenModule", function() { return BloomenModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _bloomen_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bloomen-routing.module */ "./src/app/bloomen/bloomen-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_shared/shared.module */ "./src/app/_shared/shared.module.ts");
/* harmony import */ var _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-material/app-material.module */ "./src/app/app-material/app-material.module.ts");






var BloomenModule = /** @class */ (function () {
    function BloomenModule() {
    }
    BloomenModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _bloomen_routing_module__WEBPACK_IMPORTED_MODULE_3__["BloomenRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_5__["AppMaterialModule"]
            ],
            providers: []
        })
    ], BloomenModule);
    return BloomenModule;
}());



/***/ })

}]);
//# sourceMappingURL=bloomen-bloomen-module.js.map