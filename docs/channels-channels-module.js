(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["channels-channels-module"],{

/***/ "./src/app/channels/channel/channel.component.html":
/*!*********************************************************!*\
  !*** ./src/app/channels/channel/channel.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  channel works!\n</p>\n"

/***/ }),

/***/ "./src/app/channels/channel/channel.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/channels/channel/channel.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5uZWxzL2NoYW5uZWwvY2hhbm5lbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/channels/channel/channel.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/channels/channel/channel.component.ts ***!
  \*******************************************************/
/*! exports provided: ChannelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelComponent", function() { return ChannelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChannelComponent = /** @class */ (function () {
    function ChannelComponent() {
    }
    ChannelComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ChannelComponent.prototype, "channelName", void 0);
    ChannelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-channel',
            template: __webpack_require__(/*! ./channel.component.html */ "./src/app/channels/channel/channel.component.html"),
            styles: [__webpack_require__(/*! ./channel.component.scss */ "./src/app/channels/channel/channel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChannelComponent);
    return ChannelComponent;
}());



/***/ }),

/***/ "./src/app/channels/channels-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/channels/channels-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ChannelsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelsRoutingModule", function() { return ChannelsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ */ "./src/app/channels/index.ts");




var routes = [
    {
        path: '',
        component: ___WEBPACK_IMPORTED_MODULE_3__["ChannelsComponent"],
        data: {
            breadcrumb: '',
            menuLabel: ''
        }
    }
];
var ChannelsRoutingModule = /** @class */ (function () {
    function ChannelsRoutingModule() {
    }
    ChannelsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ChannelsRoutingModule);
    return ChannelsRoutingModule;
}());



/***/ }),

/***/ "./src/app/channels/channels.component.html":
/*!**************************************************!*\
  !*** ./src/app/channels/channels.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  channels works!\n</p>\n\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/channels/channels.component.scss":
/*!**************************************************!*\
  !*** ./src/app/channels/channels.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5uZWxzL2NoYW5uZWxzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/channels/channels.component.ts":
/*!************************************************!*\
  !*** ./src/app/channels/channels.component.ts ***!
  \************************************************/
/*! exports provided: ChannelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelsComponent", function() { return ChannelsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChannelsComponent = /** @class */ (function () {
    function ChannelsComponent() {
    }
    ChannelsComponent.prototype.ngOnInit = function () {
    };
    ChannelsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-channels',
            template: __webpack_require__(/*! ./channels.component.html */ "./src/app/channels/channels.component.html"),
            styles: [__webpack_require__(/*! ./channels.component.scss */ "./src/app/channels/channels.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChannelsComponent);
    return ChannelsComponent;
}());



/***/ }),

/***/ "./src/app/channels/channels.module.ts":
/*!*********************************************!*\
  !*** ./src/app/channels/channels.module.ts ***!
  \*********************************************/
/*! exports provided: ChannelsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelsModule", function() { return ChannelsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _channels_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./channels-routing.module */ "./src/app/channels/channels-routing.module.ts");
/* harmony import */ var _channels_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./channels.component */ "./src/app/channels/channels.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_shared/shared.module */ "./src/app/_shared/shared.module.ts");
/* harmony import */ var _channel_channel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./channel/channel.component */ "./src/app/channels/channel/channel.component.ts");







var ChannelsModule = /** @class */ (function () {
    function ChannelsModule() {
    }
    ChannelsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_channels_component__WEBPACK_IMPORTED_MODULE_4__["ChannelsComponent"], _channel_channel_component__WEBPACK_IMPORTED_MODULE_6__["ChannelComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _channels_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChannelsRoutingModule"]
            ]
        })
    ], ChannelsModule);
    return ChannelsModule;
}());



/***/ }),

/***/ "./src/app/channels/index.ts":
/*!***********************************!*\
  !*** ./src/app/channels/index.ts ***!
  \***********************************/
/*! exports provided: ChannelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _channels_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./channels.component */ "./src/app/channels/channels.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChannelsComponent", function() { return _channels_component__WEBPACK_IMPORTED_MODULE_0__["ChannelsComponent"]; });


// export * from './spotify/spotify.component';


/***/ })

}]);
//# sourceMappingURL=channels-channels-module.js.map