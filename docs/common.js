(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/_shared/base/base.component.ts":
/*!************************************************!*\
  !*** ./src/app/_shared/base/base.component.ts ***!
  \************************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_page_title_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/page-title.service */ "./src/app/services/page-title.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var src_app_services_test_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/test-data.service */ "./src/app/services/test-data.service.ts");
/* harmony import */ var _services_help_text_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/help-text.service */ "./src/app/_shared/services/help-text.service.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/config.service */ "./src/app/_shared/services/config.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");







var BaseComponent = /** @class */ (function () {
    function BaseComponent(route, router, pageTitle, dialog, testData, help, config, translate) {
        this.route = route;
        this.router = router;
        this.pageTitle = pageTitle;
        this.dialog = dialog;
        this.testData = testData;
        this.help = help;
        this.config = config;
        this.translate = translate;
        this.pageHelp = [];
        // this.router.events.pipe(
        //   filter(event => event instanceof NavigationEnd),
        //   distinctUntilChanged(),
        //   map(event => console.log(this.route))
        // );
        this.routeData = this.route.snapshot.data;
        this.pageTitle.setTitle(this.routeData.pageTitle[this.config.locale]);
        //  this.pageHelp = this.help.getHelpTextForSection('assets');
    }
    BaseComponent.prototype.getHelpText = function (page, itemRef) {
        // this.pageHelp =  this.help.getHelpTextForSection(this.routeData.breadcrumb) || [];
        // if (this.pageHelp.length) {
        //   const v = this.pageHelp[0].items.filter(f => f.ref === itemRef)[0].text;
        //   console.log(v);
        //   return v;
        // }
    };
    return BaseComponent;
}());



/***/ }),

/***/ "./src/app/_shared/components/index.ts":
/*!*********************************************!*\
  !*** ./src/app/_shared/components/index.ts ***!
  \*********************************************/
/*! exports provided: MatInputComponent, MatButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_material_mat_input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/material/mat-input.component */ "./src/app/_shared/components/material/mat-input.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatInputComponent", function() { return _components_material_mat_input_component__WEBPACK_IMPORTED_MODULE_0__["MatInputComponent"]; });

/* harmony import */ var _material_mat_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material/mat-button.component */ "./src/app/_shared/components/material/mat-button.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatButtonComponent", function() { return _material_mat_button_component__WEBPACK_IMPORTED_MODULE_1__["MatButtonComponent"]; });





/***/ })

}]);
//# sourceMappingURL=common.js.map