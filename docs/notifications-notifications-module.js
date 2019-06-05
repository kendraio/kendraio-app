(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"],{

/***/ "./src/app/notifications/index.ts":
/*!****************************************!*\
  !*** ./src/app/notifications/index.ts ***!
  \****************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/notifications/notifications/notifications.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_0__["NotificationsComponent"]; });


// export * from './spotify/spotify.component';


/***/ }),

/***/ "./src/app/notifications/notifications-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/notifications/notifications-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: NotificationsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsRoutingModule", function() { return NotificationsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ */ "./src/app/notifications/index.ts");




var routes = [
    {
        path: '',
        component: ___WEBPACK_IMPORTED_MODULE_3__["NotificationsComponent"],
        data: {
            breadcrumb: '',
            menuLabel: ''
        }
    }
];
var NotificationsRoutingModule = /** @class */ (function () {
    function NotificationsRoutingModule() {
    }
    NotificationsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], NotificationsRoutingModule);
    return NotificationsRoutingModule;
}());



/***/ }),

/***/ "./src/app/notifications/notifications.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.module.ts ***!
  \*******************************************************/
/*! exports provided: NotificationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsModule", function() { return NotificationsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifications-routing.module */ "./src/app/notifications/notifications-routing.module.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/notifications/notifications/notifications.component.ts");





var NotificationsModule = /** @class */ (function () {
    function NotificationsModule() {
    }
    NotificationsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_4__["NotificationsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _notifications_routing_module__WEBPACK_IMPORTED_MODULE_3__["NotificationsRoutingModule"]
            ]
        })
    ], NotificationsModule);
    return NotificationsModule;
}());



/***/ }),

/***/ "./src/app/notifications/notifications/notifications.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/notifications/notifications/notifications.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  notifications works!\n</p>\n"

/***/ }),

/***/ "./src/app/notifications/notifications/notifications.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/notifications/notifications/notifications.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/notifications/notifications/notifications.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/notifications/notifications/notifications.component.ts ***!
  \************************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent.prototype.ngOnInit = function () {
    };
    NotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__(/*! ./notifications.component.html */ "./src/app/notifications/notifications/notifications.component.html"),
            styles: [__webpack_require__(/*! ./notifications.component.scss */ "./src/app/notifications/notifications/notifications.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=notifications-notifications-module.js.map