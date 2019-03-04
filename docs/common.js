(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/claims/send-claims/send-claims.component.html":
/*!***************************************************************!*\
  !*** ./src/app/claims/send-claims/send-claims.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <pre> {{ data | json }}</pre>  -->\n\n\n<h1>Claim Sheet</h1>\nLorem ipsum dolor sit amet consectetur adipisicing elit. Placeat consectetur incidunt facere esse vero minus, voluptates voluptatem autem at ratione non! Alias hic temporibus rerum nisi odit quisquam dolorum fugiat!\n\n\n<div class=\"mt-4\" fxLayout=\"row wrap\" fxLayoutGap=\"20px 20px\"   fxLayoutAlign=\"space-around stretch\">\n\n<mat-card *ngFor=\"let item of data; let i = index;\"  >\n    <mat-card-header>\n      \n        <mat-card-title>Claim {{i+1}} / {{data.length}}</mat-card-title>\n        <mat-card-subtitle>{{item.name}}</mat-card-subtitle>\n      </mat-card-header>\n\n    <mat-card-content>\n\n Artist: {{item.artist}}<br>\n Collective: {{item.collective}}<br>\n Owner: {{item.owner}}<br>\n</mat-card-content>\n\n  \n\n  \n\n\n\n    <mat-card-actions>\n        <button mat-mini-fab matTooltip=\"Remove from Claim\" (click)=\"removeClaim(i)\"><mat-icon>delete</mat-icon></button>\n      </mat-card-actions>\n\n</mat-card>\n\n</div>\n\n<div mat-dialog-actions class=\"align-right\">\n  <button mat-button mat-dialog-close=\"Edit Cancelled\">Cancel</button>\n  <button mat-button [mat-dialog-close]=\"data.Name\">Send All</button>\n</div>\n\n"

/***/ }),

/***/ "./src/app/claims/send-claims/send-claims.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/claims/send-claims/send-claims.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  padding: 30px;\n  margin-bottom: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xhaW1zL3NlbmQtY2xhaW1zL0M6XFxVc2Vyc1xcVGltXFxrZW5kcmFpby1hcHAvc3JjXFxhcHBcXGNsYWltc1xcc2VuZC1jbGFpbXNcXHNlbmQtY2xhaW1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVcsY0FBWTtFQUFFLG9CQUFtQixFQUFFIiwiZmlsZSI6InNyYy9hcHAvY2xhaW1zL3NlbmQtY2xhaW1zL3NlbmQtY2xhaW1zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQgeyBwYWRkaW5nOjMwcHg7IG1hcmdpbi1ib3R0b206IDIwcHh9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/claims/send-claims/send-claims.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/claims/send-claims/send-claims.component.ts ***!
  \*************************************************************/
/*! exports provided: SendClaimsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendClaimsComponent", function() { return SendClaimsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var SendClaimsComponent = /** @class */ (function () {
    function SendClaimsComponent(data) {
        this.data = data;
    }
    SendClaimsComponent.prototype.ngOnInit = function () {
    };
    SendClaimsComponent.prototype.removeClaim = function (i) {
        this.data.splice(i, 1);
    };
    SendClaimsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-send-claims',
            template: __webpack_require__(/*! ./send-claims.component.html */ "./src/app/claims/send-claims/send-claims.component.html"),
            styles: [__webpack_require__(/*! ./send-claims.component.scss */ "./src/app/claims/send-claims/send-claims.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], SendClaimsComponent);
    return SendClaimsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map