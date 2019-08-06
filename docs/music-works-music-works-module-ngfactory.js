(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["music-works-music-works-module-ngfactory"],{

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

/***/ "./src/app/assets/music-works/add-new/register.component.ngfactory.js":
/*!****************************************************************************!*\
  !*** ./src/app/assets/music-works/add-new/register.component.ngfactory.js ***!
  \****************************************************************************/
/*! exports provided: RenderType_RegisterComponent, View_RegisterComponent_0, View_RegisterComponent_Host_0, RegisterComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_RegisterComponent", function() { return RenderType_RegisterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RegisterComponent_0", function() { return View_RegisterComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RegisterComponent_Host_0", function() { return View_RegisterComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponentNgFactory", function() { return RegisterComponentNgFactory; });
/* harmony import */ var _register_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component.scss.shim.ngstyle */ "./src/app/assets/music-works/add-new/register.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/card/typings/index.ngfactory */ "./node_modules/@angular/material/card/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _node_modules_ng_dynamic_forms_ui_material_ui_material_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../node_modules/@ng-dynamic-forms/ui-material/ui-material.ngfactory */ "./node_modules/@ng-dynamic-forms/ui-material/ui-material.ngfactory.js");
/* harmony import */ var _ng_dynamic_forms_ui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-dynamic-forms/ui-material */ "./node_modules/@ng-dynamic-forms/ui-material/fesm5/ui-material.js");
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./register.component */ "./src/app/assets/music-works/add-new/register.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

















var styles_RegisterComponent = [_register_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_RegisterComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_RegisterComponent, data: {} });

function View_RegisterComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 27, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" As a writer or composer, you can register your own works and amend the details at any time. However, if you have a publisher, they will usually manage any registration and amendments on your behalf.\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 12, "mat-card", [["class", "mat-card"]], [[2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 10, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 5, "dynamic-material-form", [["fxLayout", "row wrap"], ["fxLayoutAlign", "start start"], ["fxLayoutGap", "40px"]], null, [[null, "blur"], [null, "change"], [null, "focus"], [null, "matEvent"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("blur" === en)) {
        var pd_0 = (_co.onBlur($event) !== false);
        ad = (pd_0 && ad);
    } if (("change" === en)) {
        var pd_1 = (_co.onChange($event) !== false);
        ad = (pd_1 && ad);
    } if (("focus" === en)) {
        var pd_2 = (_co.onFocus($event) !== false);
        ad = (pd_2 && ad);
    } if (("matEvent" === en)) {
        var pd_3 = (_co.onMatEvent($event) !== false);
        ad = (pd_3 && ad);
    } return ad; }, _node_modules_ng_dynamic_forms_ui_material_ui_material_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_DynamicMaterialFormComponent_0"], _node_modules_ng_dynamic_forms_ui_material_ui_material_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_DynamicMaterialFormComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 49152, null, 1, _ng_dynamic_forms_ui_material__WEBPACK_IMPORTED_MODULE_7__["DynamicMaterialFormComponent"], [_ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_8__["DynamicFormService"], _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_8__["DynamicFormLayoutService"]], { formGroup: [0, "formGroup"], formModel: [1, "formModel"], formLayout: [2, "formLayout"] }, { blur: "blur", change: "change", focus: "focus", customEvent: "matEvent" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { templates: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 1720320, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutGapDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["LayoutGapStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["MediaMarshaller"]], { fxLayoutGap: [0, "fxLayoutGap"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 9, "div", [["class", "align-right mat-dialog-actions"], ["mat-dialog-actions", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 3, "button", [["mat-button", ""], ["mat-dialog-close", "cancel"], ["type", "button"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).dialogRef.close(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).dialogResult) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 606208, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogClose"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"]], { dialogResult: [0, "dialogResult"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Cancel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 3, "button", [["cdkFocusInitial", ""], ["mat-button", ""], ["type", "button"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).dialogRef.close(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).dialogResult) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], { disabled: [0, "disabled"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 606208, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogClose"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"]], { dialogResult: [0, "dialogResult"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Save"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["You\u2019ll be given a reference when you submit your work details, followed by a unique tune code for each work."]))], function (_ck, _v) { var _co = _v.component; var currVal_8 = _co.formGroup; _ck(_v, 7, 0, currVal_8); var currVal_9 = _co.formGroup; var currVal_10 = _co.formModel; var currVal_11 = _co.formLayout; _ck(_v, 11, 0, currVal_9, currVal_10, currVal_11); var currVal_12 = "row wrap"; _ck(_v, 13, 0, currVal_12); var currVal_13 = "40px"; _ck(_v, 14, 0, currVal_13); var currVal_14 = "start start"; _ck(_v, 15, 0, currVal_14); var currVal_18 = "cancel"; _ck(_v, 20, 0, currVal_18); var currVal_22 = _co.formGroup.invalid; _ck(_v, 23, 0, currVal_22); var currVal_23 = _co.data.Name; _ck(_v, 24, 0, currVal_23); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._animationMode === "NoopAnimations"); _ck(_v, 3, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassUntouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassTouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassPristine; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassDirty; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassValid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassInvalid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassPending; _ck(_v, 5, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_15 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).disabled || null); var currVal_16 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._animationMode === "NoopAnimations"); var currVal_17 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ariaLabel || null); _ck(_v, 18, 0, currVal_15, currVal_16, currVal_17); var currVal_19 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).disabled || null); var currVal_20 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._animationMode === "NoopAnimations"); var currVal_21 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ariaLabel || null); _ck(_v, 22, 0, currVal_19, currVal_20, currVal_21); }); }
function View_RegisterComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-register", [], null, null, null, View_RegisterComponent_0, RenderType_RegisterComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MAT_DIALOG_DATA"], _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_8__["DynamicFormService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var RegisterComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-register", _register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"], View_RegisterComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/assets/music-works/add-new/register.component.scss.shim.ngstyle.js":
/*!************************************************************************************!*\
  !*** ./src/app/assets/music-works/add-new/register.component.scss.shim.ngstyle.js ***!
  \************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2V0cy9tdXNpYy13b3Jrcy9hZGQtbmV3L3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"];



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm5/core.js");
/* harmony import */ var _shared_forms_registerWork__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_shared/forms/registerWork */ "./src/app/assets/music-works/_shared/forms/registerWork.ts");
/* harmony import */ var _form_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form.layout */ "./src/app/assets/music-works/add-new/form.layout.ts");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(data, formService) {
        this.data = data;
        this.formService = formService;
        this.formModel = _shared_forms_registerWork__WEBPACK_IMPORTED_MODULE_2__["WORKS_REGISTER_FORM_MODEL"];
        this.formLayout = _form_layout__WEBPACK_IMPORTED_MODULE_3__["WORKS_FORM_LAYOUT"];
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
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/assets/music-works/detail/detail.component.ngfactory.js":
/*!*************************************************************************!*\
  !*** ./src/app/assets/music-works/detail/detail.component.ngfactory.js ***!
  \*************************************************************************/
/*! exports provided: RenderType_DetailComponent, View_DetailComponent_0, View_DetailComponent_Host_0, DetailComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DetailComponent", function() { return RenderType_DetailComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DetailComponent_0", function() { return View_DetailComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DetailComponent_Host_0", function() { return View_DetailComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponentNgFactory", function() { return DetailComponentNgFactory; });
/* harmony import */ var _detail_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.component.scss.shim.ngstyle */ "./src/app/assets/music-works/detail/detail.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail.component */ "./src/app/assets/music-works/detail/detail.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_DetailComponent = [_detail_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_DetailComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_DetailComponent, data: {} });

function View_DetailComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" detail works!\n"]))], null, null); }
function View_DetailComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-detail", [], null, null, null, View_DetailComponent_0, RenderType_DetailComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _detail_component__WEBPACK_IMPORTED_MODULE_2__["DetailComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var DetailComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-detail", _detail_component__WEBPACK_IMPORTED_MODULE_2__["DetailComponent"], View_DetailComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/assets/music-works/detail/detail.component.scss.shim.ngstyle.js":
/*!*********************************************************************************!*\
  !*** ./src/app/assets/music-works/detail/detail.component.scss.shim.ngstyle.js ***!
  \*********************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2V0cy9tdXNpYy13b3Jrcy9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"];



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var DetailComponent = /** @class */ (function () {
    function DetailComponent() {
    }
    DetailComponent.prototype.ngOnInit = function () {
    };
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/assets/music-works/edit/edit.component.ngfactory.js":
/*!*********************************************************************!*\
  !*** ./src/app/assets/music-works/edit/edit.component.ngfactory.js ***!
  \*********************************************************************/
/*! exports provided: RenderType_EditComponent, View_EditComponent_0, View_EditComponent_Host_0, EditComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_EditComponent", function() { return RenderType_EditComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EditComponent_0", function() { return View_EditComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EditComponent_Host_0", function() { return View_EditComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponentNgFactory", function() { return EditComponentNgFactory; });
/* harmony import */ var _edit_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.component.scss.shim.ngstyle */ "./src/app/assets/music-works/edit/edit.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/card/typings/index.ngfactory */ "./node_modules/@angular/material/card/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _node_modules_ng_dynamic_forms_ui_material_ui_material_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../node_modules/@ng-dynamic-forms/ui-material/ui-material.ngfactory */ "./node_modules/@ng-dynamic-forms/ui-material/ui-material.ngfactory.js");
/* harmony import */ var _ng_dynamic_forms_ui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-dynamic-forms/ui-material */ "./node_modules/@ng-dynamic-forms/ui-material/fesm5/ui-material.js");
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./edit.component */ "./src/app/assets/music-works/edit/edit.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

















var styles_EditComponent = [_edit_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_EditComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_EditComponent, data: {} });

function View_EditComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 23, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 12, "mat-card", [["class", "mat-card"]], [[2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 10, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 5, "dynamic-material-form", [["fxLayout", "row wrap"], ["fxLayoutAlign", "start start"], ["fxLayoutGap", "40px"]], null, [[null, "blur"], [null, "change"], [null, "focus"], [null, "matEvent"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("blur" === en)) {
        var pd_0 = (_co.onBlur($event) !== false);
        ad = (pd_0 && ad);
    } if (("change" === en)) {
        var pd_1 = (_co.onChange($event) !== false);
        ad = (pd_1 && ad);
    } if (("focus" === en)) {
        var pd_2 = (_co.onFocus($event) !== false);
        ad = (pd_2 && ad);
    } if (("matEvent" === en)) {
        var pd_3 = (_co.onMatEvent($event) !== false);
        ad = (pd_3 && ad);
    } return ad; }, _node_modules_ng_dynamic_forms_ui_material_ui_material_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_DynamicMaterialFormComponent_0"], _node_modules_ng_dynamic_forms_ui_material_ui_material_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_DynamicMaterialFormComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 49152, null, 1, _ng_dynamic_forms_ui_material__WEBPACK_IMPORTED_MODULE_7__["DynamicMaterialFormComponent"], [_ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_8__["DynamicFormService"], _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_8__["DynamicFormLayoutService"]], { formGroup: [0, "formGroup"], formModel: [1, "formModel"], formLayout: [2, "formLayout"] }, { blur: "blur", change: "change", focus: "focus", customEvent: "matEvent" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { templates: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 1720320, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutGapDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["LayoutGapStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["MediaMarshaller"]], { fxLayoutGap: [0, "fxLayoutGap"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 9, "div", [["class", "align-right mat-dialog-actions"], ["mat-dialog-actions", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 3, "button", [["mat-button", ""], ["mat-dialog-close", "cancel"], ["type", "button"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).dialogRef.close(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).dialogResult) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 606208, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogClose"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"]], { dialogResult: [0, "dialogResult"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Cancel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 3, "button", [["cdkFocusInitial", ""], ["mat-button", ""], ["type", "button"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).dialogRef.close(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).dialogResult) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], { disabled: [0, "disabled"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 606208, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogClose"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"]], { dialogResult: [0, "dialogResult"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Save"]))], function (_ck, _v) { var _co = _v.component; var currVal_8 = _co.formGroup; _ck(_v, 5, 0, currVal_8); var currVal_9 = _co.formGroup; var currVal_10 = _co.formModel; var currVal_11 = _co.formLayout; _ck(_v, 9, 0, currVal_9, currVal_10, currVal_11); var currVal_12 = "row wrap"; _ck(_v, 11, 0, currVal_12); var currVal_13 = "40px"; _ck(_v, 12, 0, currVal_13); var currVal_14 = "start start"; _ck(_v, 13, 0, currVal_14); var currVal_18 = "cancel"; _ck(_v, 18, 0, currVal_18); var currVal_22 = _co.formGroup.invalid; _ck(_v, 21, 0, currVal_22); var currVal_23 = _co.data.Name; _ck(_v, 22, 0, currVal_23); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._animationMode === "NoopAnimations"); _ck(_v, 1, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassUntouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassTouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassPristine; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassDirty; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassValid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassInvalid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassPending; _ck(_v, 3, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_15 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).disabled || null); var currVal_16 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._animationMode === "NoopAnimations"); var currVal_17 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).ariaLabel || null); _ck(_v, 16, 0, currVal_15, currVal_16, currVal_17); var currVal_19 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).disabled || null); var currVal_20 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._animationMode === "NoopAnimations"); var currVal_21 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ariaLabel || null); _ck(_v, 20, 0, currVal_19, currVal_20, currVal_21); }); }
function View_EditComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-edit", [], null, null, null, View_EditComponent_0, RenderType_EditComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _edit_component__WEBPACK_IMPORTED_MODULE_16__["EditComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MAT_DIALOG_DATA"], _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_8__["DynamicFormService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var EditComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-edit", _edit_component__WEBPACK_IMPORTED_MODULE_16__["EditComponent"], View_EditComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/assets/music-works/edit/edit.component.scss.shim.ngstyle.js":
/*!*****************************************************************************!*\
  !*** ./src/app/assets/music-works/edit/edit.component.scss.shim.ngstyle.js ***!
  \*****************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2V0cy9tdXNpYy13b3Jrcy9lZGl0L2VkaXQuY29tcG9uZW50LnNjc3MifQ== */"];



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm5/core.js");
/* harmony import */ var _shared_forms_formModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_shared/forms/formModel */ "./src/app/assets/music-works/_shared/forms/formModel.ts");
/* harmony import */ var _form_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form.layout */ "./src/app/assets/music-works/edit/form.layout.ts");




var EditComponent = /** @class */ (function () {
    function EditComponent(data, formService) {
        this.data = data;
        this.formService = formService;
        this.formModel = _shared_forms_formModel__WEBPACK_IMPORTED_MODULE_2__["WORKS_FORM_MODEL"];
        this.formLayout = _form_layout__WEBPACK_IMPORTED_MODULE_3__["WORKS_FORM_LAYOUT"];
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
/*! exports provided: MusicWorksRoutingModule, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicWorksRoutingModule", function() { return MusicWorksRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/app/assets/music-works/index.ts");


var ɵ0 = {
    breadcrumb: ''
};
var routes = [
    { path: '', component: _index__WEBPACK_IMPORTED_MODULE_1__["WorksComponent"],
        data: ɵ0 },
    { path: 'edit/:id', component: _index__WEBPACK_IMPORTED_MODULE_1__["EditComponent"] },
    { path: 'detail/:id', component: _index__WEBPACK_IMPORTED_MODULE_1__["DetailComponent"] },
];
var MusicWorksRoutingModule = /** @class */ (function () {
    function MusicWorksRoutingModule() {
    }
    return MusicWorksRoutingModule;
}());




/***/ }),

/***/ "./src/app/assets/music-works/music-works.module.ngfactory.js":
/*!********************************************************************!*\
  !*** ./src/app/assets/music-works/music-works.module.ngfactory.js ***!
  \********************************************************************/
/*! exports provided: MusicWorksModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicWorksModuleNgFactory", function() { return MusicWorksModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _music_works_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./music-works.module */ "./src/app/assets/music-works/music-works.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/dialog/typings/index.ngfactory */ "./node_modules/@angular/material/dialog/typings/index.ngfactory.js");
/* harmony import */ var _node_modules_angular_material_tooltip_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/tooltip/typings/index.ngfactory */ "./node_modules/@angular/material/tooltip/typings/index.ngfactory.js");
/* harmony import */ var _node_modules_angular_material_datepicker_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/datepicker/typings/index.ngfactory */ "./node_modules/@angular/material/datepicker/typings/index.ngfactory.js");
/* harmony import */ var _node_modules_ng_dynamic_forms_ui_material_ui_material_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../node_modules/@ng-dynamic-forms/ui-material/ui-material.ngfactory */ "./node_modules/@ng-dynamic-forms/ui-material/ui-material.ngfactory.js");
/* harmony import */ var _node_modules_ngx_formly_core_ngx_formly_core_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../node_modules/@ngx-formly/core/ngx-formly-core.ngfactory */ "./node_modules/@ngx-formly/core/ngx-formly-core.ngfactory.js");
/* harmony import */ var _node_modules_ngx_formly_material_form_field_ngx_formly_material_form_field_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../node_modules/@ngx-formly/material/form-field/ngx-formly-material-form-field.ngfactory */ "./node_modules/@ngx-formly/material/form-field/ngx-formly-material-form-field.ngfactory.js");
/* harmony import */ var _node_modules_ngx_formly_material_datepicker_ngx_formly_material_datepicker_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../node_modules/@ngx-formly/material/datepicker/ngx-formly-material-datepicker.ngfactory */ "./node_modules/@ngx-formly/material/datepicker/ngx-formly-material-datepicker.ngfactory.js");
/* harmony import */ var _shared_ui_form_wrappers_panel_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../_shared/ui-form/wrappers/panel-wrapper.component.ngfactory */ "./src/app/_shared/ui-form/wrappers/panel-wrapper.component.ngfactory.js");
/* harmony import */ var _shared_ui_form_types_video_viewer_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../_shared/ui-form/types/video-viewer.component.ngfactory */ "./src/app/_shared/ui-form/types/video-viewer.component.ngfactory.js");
/* harmony import */ var _shared_ui_form_types_visibility_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../_shared/ui-form/types/visibility.component.ngfactory */ "./src/app/_shared/ui-form/types/visibility.component.ngfactory.js");
/* harmony import */ var _shared_ui_form_types_playlists_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../_shared/ui-form/types/playlists.component.ngfactory */ "./src/app/_shared/ui-form/types/playlists.component.ngfactory.js");
/* harmony import */ var _shared_ui_form_types_tags_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../_shared/ui-form/types/tags.component.ngfactory */ "./src/app/_shared/ui-form/types/tags.component.ngfactory.js");
/* harmony import */ var _shared_ui_form_types_countries_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../_shared/ui-form/types/countries.component.ngfactory */ "./src/app/_shared/ui-form/types/countries.component.ngfactory.js");
/* harmony import */ var _shared_ui_form_types_money_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../_shared/ui-form/types/money.component.ngfactory */ "./src/app/_shared/ui-form/types/money.component.ngfactory.js");
/* harmony import */ var _shared_ui_form_types_percentage_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../_shared/ui-form/types/percentage.component.ngfactory */ "./src/app/_shared/ui-form/types/percentage.component.ngfactory.js");
/* harmony import */ var _shared_ui_form_types_typeahead_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../_shared/ui-form/types/typeahead.component.ngfactory */ "./src/app/_shared/ui-form/types/typeahead.component.ngfactory.js");
/* harmony import */ var _shared_components_material_mat_input_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../_shared/components/material/mat-input.component.ngfactory */ "./src/app/_shared/components/material/mat-input.component.ngfactory.js");
/* harmony import */ var _shared_components_material_mat_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../_shared/components/material/mat-button.component.ngfactory */ "./src/app/_shared/components/material/mat-button.component.ngfactory.js");
/* harmony import */ var _claims_send_claims_send_claims_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../claims/send-claims/send-claims.component.ngfactory */ "./src/app/claims/send-claims/send-claims.component.ngfactory.js");
/* harmony import */ var _claims_claims_edit_claims_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../claims/claims-edit/claims-edit.component.ngfactory */ "./src/app/claims/claims-edit/claims-edit.component.ngfactory.js");
/* harmony import */ var _shared_form_controls_password_input_dynamic_dynamic_password_input_dynamic_password_input_component_ngfactory__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../_shared/form-controls/password-input/dynamic/dynamic-password-input/dynamic-password-input.component.ngfactory */ "./src/app/_shared/form-controls/password-input/dynamic/dynamic-password-input/dynamic-password-input.component.ngfactory.js");
/* harmony import */ var _works_component_ngfactory__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./works.component.ngfactory */ "./src/app/assets/music-works/works.component.ngfactory.js");
/* harmony import */ var _edit_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./edit/edit.component.ngfactory */ "./src/app/assets/music-works/edit/edit.component.ngfactory.js");
/* harmony import */ var _detail_detail_component_ngfactory__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./detail/detail.component.ngfactory */ "./src/app/assets/music-works/detail/detail.component.ngfactory.js");
/* harmony import */ var _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/snack-bar/typings/index.ngfactory */ "./node_modules/@angular/material/snack-bar/typings/index.ngfactory.js");
/* harmony import */ var _add_new_register_component_ngfactory__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./add-new/register.component.ngfactory */ "./src/app/assets/music-works/add-new/register.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm5/observers.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");
/* harmony import */ var _shared_services_help_text_service__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../../_shared/services/help-text.service */ "./src/app/_shared/services/help-text.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../../_shared/services/message.service */ "./src/app/_shared/services/message.service.ts");
/* harmony import */ var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../../_shared/services/config.service */ "./src/app/_shared/services/config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm5/text-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var ag_grid_angular_dist_aggrid_module__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ag-grid-angular/dist/aggrid.module */ "./node_modules/ag-grid-angular/dist/aggrid.module.js");
/* harmony import */ var ag_grid_angular_dist_aggrid_module__WEBPACK_IMPORTED_MODULE_70___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular_dist_aggrid_module__WEBPACK_IMPORTED_MODULE_70__);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/esm5/extended.es5.js");
/* harmony import */ var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! @angular/flex-layout/grid */ "./node_modules/@angular/flex-layout/esm5/grid.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_77___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_77__);
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm5/core.js");
/* harmony import */ var _ng_dynamic_forms_ui_material__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! @ng-dynamic-forms/ui-material */ "./node_modules/@ng-dynamic-forms/ui-material/fesm5/ui-material.js");
/* harmony import */ var _ngx_formly_material_form_field__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! @ngx-formly/material/form-field */ "./node_modules/@ngx-formly/material/fesm5/ngx-formly-material-form-field.js");
/* harmony import */ var _ngx_formly_material_datepicker__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! @ngx-formly/material/datepicker */ "./node_modules/@ngx-formly/material/fesm5/ngx-formly-material-datepicker.js");
/* harmony import */ var _shared_ui_form_helpers_validations_messages__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ../../_shared/ui-form/helpers/validations-messages */ "./src/app/_shared/ui-form/helpers/validations-messages.ts");
/* harmony import */ var _shared_ui_form_wrappers_panel_wrapper_component__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ../../_shared/ui-form/wrappers/panel-wrapper.component */ "./src/app/_shared/ui-form/wrappers/panel-wrapper.component.ts");
/* harmony import */ var _shared_ui_form_types_video_viewer_component__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ../../_shared/ui-form/types/video-viewer.component */ "./src/app/_shared/ui-form/types/video-viewer.component.ts");
/* harmony import */ var _shared_ui_form_types_visibility_component__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ../../_shared/ui-form/types/visibility.component */ "./src/app/_shared/ui-form/types/visibility.component.ts");
/* harmony import */ var _shared_ui_form_types_playlists_component__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ../../_shared/ui-form/types/playlists.component */ "./src/app/_shared/ui-form/types/playlists.component.ts");
/* harmony import */ var _shared_ui_form_types_tags_component__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ../../_shared/ui-form/types/tags.component */ "./src/app/_shared/ui-form/types/tags.component.ts");
/* harmony import */ var _shared_ui_form_types_countries_component__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ../../_shared/ui-form/types/countries.component */ "./src/app/_shared/ui-form/types/countries.component.ts");
/* harmony import */ var _shared_ui_form_types_money_component__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ../../_shared/ui-form/types/money.component */ "./src/app/_shared/ui-form/types/money.component.ts");
/* harmony import */ var _shared_ui_form_types_percentage_component__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ../../_shared/ui-form/types/percentage.component */ "./src/app/_shared/ui-form/types/percentage.component.ts");
/* harmony import */ var _shared_ui_form_types_typeahead_component__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ../../_shared/ui-form/types/typeahead.component */ "./src/app/_shared/ui-form/types/typeahead.component.ts");
/* harmony import */ var _shared_ui_form_helpers_validators__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ../../_shared/ui-form/helpers/validators */ "./src/app/_shared/ui-form/helpers/validators.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select-ng-select.js");
/* harmony import */ var _shared_ui_form_ui_form_module__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ../../_shared/ui-form/ui-form.module */ "./src/app/_shared/ui-form/ui-form.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ../../_shared/shared.module */ "./src/app/_shared/shared.module.ts");
/* harmony import */ var _music_works_routing_module__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./music-works-routing.module */ "./src/app/assets/music-works/music-works-routing.module.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! @angular/cdk/accordion */ "./node_modules/@angular/cdk/esm5/accordion.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! ../../app-material/app-material.module */ "./src/app/app-material/app-material.module.ts");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _works_component__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! ./works.component */ "./src/app/assets/music-works/works.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/assets/music-works/edit/edit.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/assets/music-works/detail/detail.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

















































































































var MusicWorksModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_music_works_module__WEBPACK_IMPORTED_MODULE_1__["MusicWorksModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["MatDialogContainerNgFactory"], _node_modules_angular_material_tooltip_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["TooltipComponentNgFactory"], _node_modules_angular_material_datepicker_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerContentNgFactory"], _node_modules_angular_material_datepicker_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MatCalendarHeaderNgFactory"], _node_modules_ng_dynamic_forms_ui_material_ui_material_ngfactory__WEBPACK_IMPORTED_MODULE_6__["DynamicMaterialCheckboxComponentNgFactory"], _node_modules_ng_dynamic_forms_ui_material_ui_material_ngfactory__WEBPACK_IMPORTED_MODULE_6__["DynamicMaterialChipsComponentNgFactory"], _node_modules_ng_dynamic_forms_ui_material_ui_material_ngfactory__WEBPACK_IMPORTED_MODULE_6__["DynamicMaterialDatePickerComponentNgFactory"], _node_modules_ng_dynamic_forms_ui_material_ui_material_ngfactory__WEBPACK_IMPORTED_MODULE_6__["DynamicMaterialFormArrayComponentNgFactory"], _node_modules_ng_dynamic_forms_ui_material_ui_material_ngfactory__WEBPACK_IMPORTED_MODULE_6__["DynamicMaterialFormGroupComponentNgFactory"], _node_modules_ng_dynamic_forms_ui_material_ui_material_ngfactory__WEBPACK_IMPORTED_MODULE_6__["DynamicMaterialInputComponentNgFactory"], _node_modules_ng_dynamic_forms_ui_material_ui_material_ngfactory__WEBPACK_IMPORTED_MODULE_6__["DynamicMaterialRadioGroupComponentNgFactory"], _node_modules_ng_dynamic_forms_ui_material_ui_material_ngfactory__WEBPACK_IMPORTED_MODULE_6__["DynamicMaterialSelectComponentNgFactory"], _node_modules_ng_dynamic_forms_ui_material_ui_material_ngfactory__WEBPACK_IMPORTED_MODULE_6__["DynamicMaterialSlideToggleComponentNgFactory"], _node_modules_ng_dynamic_forms_ui_material_ui_material_ngfactory__WEBPACK_IMPORTED_MODULE_6__["DynamicMaterialSliderComponentNgFactory"], _node_modules_ng_dynamic_forms_ui_material_ui_material_ngfactory__WEBPACK_IMPORTED_MODULE_6__["DynamicMaterialTextAreaComponentNgFactory"], _node_modules_ngx_formly_core_ngx_formly_core_ngfactory__WEBPACK_IMPORTED_MODULE_7__["ɵbNgFactory"], _node_modules_ngx_formly_core_ngx_formly_core_ngfactory__WEBPACK_IMPORTED_MODULE_7__["ɵdNgFactory"], _node_modules_ngx_formly_material_form_field_ngx_formly_material_form_field_ngfactory__WEBPACK_IMPORTED_MODULE_8__["ɵaNgFactory"], _node_modules_ngx_formly_material_datepicker_ngx_formly_material_datepicker_ngfactory__WEBPACK_IMPORTED_MODULE_9__["ɵaNgFactory"], _shared_ui_form_wrappers_panel_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["PanelWrapperComponentNgFactory"], _shared_ui_form_types_video_viewer_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["FormlyFieldVideoViewerNgFactory"], _shared_ui_form_types_visibility_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["FieldInputVisibilityComponentNgFactory"], _shared_ui_form_types_playlists_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["FieldInputPlaylistComponentNgFactory"], _shared_ui_form_types_tags_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["SelectTagsComponentNgFactory"], _shared_ui_form_types_countries_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["FieldCountriesComponentNgFactory"], _shared_ui_form_types_money_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["FormlyFieldInputMoneyNgFactory"], _shared_ui_form_types_percentage_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["FormlyFieldInputPercentageNgFactory"], _shared_ui_form_types_typeahead_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__["FormlyFieldTypeaheadNgFactory"], _shared_components_material_mat_input_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["MatInputComponentNgFactory"], _shared_components_material_mat_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__["MatButtonComponentNgFactory"], _claims_send_claims_send_claims_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__["SendClaimsComponentNgFactory"], _claims_claims_edit_claims_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__["ClaimsEditComponentNgFactory"], _shared_form_controls_password_input_dynamic_dynamic_password_input_dynamic_password_input_component_ngfactory__WEBPACK_IMPORTED_MODULE_23__["DynamicPasswordInputComponentNgFactory"], _works_component_ngfactory__WEBPACK_IMPORTED_MODULE_24__["WorksComponentNgFactory"], _edit_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__["EditComponentNgFactory"], _detail_detail_component_ngfactory__WEBPACK_IMPORTED_MODULE_26__["DetailComponentNgFactory"], _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarContainerNgFactory"], _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_27__["SimpleSnackBarNgFactory"], _add_new_register_component_ngfactory__WEBPACK_IMPORTED_MODULE_28__["RegisterComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_29__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_29__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_29__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_30__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_30__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_30__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_31__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_31__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_31__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_31__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_32__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_32__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_32__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_32__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_32__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_32__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_29__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_33__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_29__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_32__["ɵc"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_32__["ɵd"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_32__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_menu__WEBPACK_IMPORTED_MODULE_34__["MAT_MENU_SCROLL_STRATEGY"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_34__["ɵb23"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_32__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_35__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_35__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_select__WEBPACK_IMPORTED_MODULE_37__["MAT_SELECT_SCROLL_STRATEGY"], _angular_material_select__WEBPACK_IMPORTED_MODULE_37__["MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_32__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_38__["HAMMER_GESTURE_CONFIG"], _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["GestureConfig"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MAT_HAMMER_OPTIONS"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatCommonModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_39__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_39__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_32__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_39__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_39__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_32__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_29__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_39__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_39__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_39__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_32__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__["MAT_TOOLTIP_SCROLL_STRATEGY"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__["MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_32__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_41__["FocusMonitor"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_41__["FocusMonitor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_42__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_43__["CdkTreeNodeDef"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_43__["CdkTreeNodeDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p0_1) { return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_44__["removeStyles"](p0_0, p0_1)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_29__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_45__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_45__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_32__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_46__["MatDatepickerIntl"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_46__["MatDatepickerIntl"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_46__["MAT_DATEPICKER_SCROLL_STRATEGY"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_46__["MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_32__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_47__["FormlyFormBuilder"], _ngx_formly_core__WEBPACK_IMPORTED_MODULE_47__["FormlyFormBuilder"], [_ngx_formly_core__WEBPACK_IMPORTED_MODULE_47__["FormlyConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["DateAdapter"], _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["NativeDateAdapter"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MAT_DATE_LOCALE"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_42__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_29__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_29__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_29__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_29__["LowerCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_services_help_text_service__WEBPACK_IMPORTED_MODULE_48__["HelpTextService"], _shared_services_help_text_service__WEBPACK_IMPORTED_MODULE_48__["HelpTextService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpClient"], _shared_services_message_service__WEBPACK_IMPORTED_MODULE_49__["MessageService"], _shared_services_config_service__WEBPACK_IMPORTED_MODULE_50__["AppConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_51__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_52__["TranslateService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_53__["MatStepperIntl"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_53__["MAT_STEPPER_INTL_PROVIDER_FACTORY"], [[3, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_53__["MatStepperIntl"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_29__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_29__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_31__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_31__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_31__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_31__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_31__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_31__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_51__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_51__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_51__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_51__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_33__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_33__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatCommonModule"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MATERIAL_SANITY_CHECKS"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_38__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_card__WEBPACK_IMPORTED_MODULE_54__["MatCardModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_54__["MatCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_42__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_42__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_55__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_55__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_56__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_56__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_32__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_32__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_34__["_MatMenuDirectivesModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_34__["_MatMenuDirectivesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_34__["MatMenuModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_34__["MatMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_57__["MatButtonToggleModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_57__["MatButtonToggleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_58__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_58__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_35__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_35__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_59__["_MatCheckboxRequiredValidatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_59__["_MatCheckboxRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_59__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_59__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_60__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_60__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_61__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_61__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_62__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_62__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_63__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_63__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_64__["MatProgressSpinnerModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_64__["MatProgressSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_radio__WEBPACK_IMPORTED_MODULE_65__["MatRadioModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_65__["MatRadioModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_select__WEBPACK_IMPORTED_MODULE_37__["MatSelectModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_37__["MatSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slider__WEBPACK_IMPORTED_MODULE_66__["MatSliderModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_66__["MatSliderModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_39__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_39__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_41__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_41__["A11yModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__["MatTooltipModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__["MatTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatLineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_divider__WEBPACK_IMPORTED_MODULE_67__["MatDividerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_67__["MatDividerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_list__WEBPACK_IMPORTED_MODULE_68__["MatListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_68__["MatListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_43__["CdkTreeModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_43__["CdkTreeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tree__WEBPACK_IMPORTED_MODULE_69__["MatTreeModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_69__["MatTreeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ag_grid_angular_dist_aggrid_module__WEBPACK_IMPORTED_MODULE_70__["AgGridModule"], ag_grid_angular_dist_aggrid_module__WEBPACK_IMPORTED_MODULE_70__["AgGridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_44__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_44__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_71__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_71__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_72__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_72__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_73__["GridModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_73__["GridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_74__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_74__["FlexLayoutModule"], [[2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_44__["SERVER_TOKEN"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_45__["MatAutocompleteModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_45__["MatAutocompleteModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_chips__WEBPACK_IMPORTED_MODULE_75__["MatChipsModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_75__["MatChipsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_46__["MatDatepickerModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_46__["MatDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_76__["_MatSlideToggleRequiredValidatorModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_76__["_MatSlideToggleRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_76__["MatSlideToggleModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_76__["MatSlideToggleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular2_text_mask__WEBPACK_IMPORTED_MODULE_77__["TextMaskModule"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_77__["TextMaskModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_78__["DynamicFormsCoreModule"], _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_78__["DynamicFormsCoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_dynamic_forms_ui_material__WEBPACK_IMPORTED_MODULE_79__["DynamicFormsMaterialUIModule"], _ng_dynamic_forms_ui_material__WEBPACK_IMPORTED_MODULE_79__["DynamicFormsMaterialUIModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_47__["FormlyConfig"], _ngx_formly_core__WEBPACK_IMPORTED_MODULE_47__["FormlyConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_47__["FORMLY_CONFIG"], function (p2_0, p4_0) { return [{ wrappers: [{ name: "form-field", component: _ngx_formly_material_form_field__WEBPACK_IMPORTED_MODULE_80__["ɵa"] }] }, { types: [{ name: "datepicker", component: _ngx_formly_material_datepicker__WEBPACK_IMPORTED_MODULE_81__["ɵa"], wrappers: ["form-field"] }] }, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_47__["ɵa"](p2_0), { validationMessages: [{ name: "required", message: "err 12: This field is required" }, { name: "minlength", message: _shared_ui_form_helpers_validations_messages__WEBPACK_IMPORTED_MODULE_82__["minlengthValidationMessage"] }, { name: "maxlength", message: _shared_ui_form_helpers_validations_messages__WEBPACK_IMPORTED_MODULE_82__["maxlengthValidationMessage"] }, { name: "min", message: _shared_ui_form_helpers_validations_messages__WEBPACK_IMPORTED_MODULE_82__["minValidationMessage"] }, { name: "max", message: _shared_ui_form_helpers_validations_messages__WEBPACK_IMPORTED_MODULE_82__["maxValidationMessage"] }, { name: "passwordMatchValidation", message: _shared_ui_form_helpers_validations_messages__WEBPACK_IMPORTED_MODULE_82__["passwordMatchValidationMessage"] }, { name: "maximumNumValidation", message: _shared_ui_form_helpers_validations_messages__WEBPACK_IMPORTED_MODULE_82__["maximumNumValidationMessage"] }, { name: "PasswordStrengthValidation", message: _shared_ui_form_helpers_validations_messages__WEBPACK_IMPORTED_MODULE_82__["PasswordStrengthValidationMessage"] }], wrappers: [{ name: "panel", component: _shared_ui_form_wrappers_panel_wrapper_component__WEBPACK_IMPORTED_MODULE_83__["PanelWrapperComponent"] }], types: [{ name: "videoviewer", component: _shared_ui_form_types_video_viewer_component__WEBPACK_IMPORTED_MODULE_84__["FormlyFieldVideoViewer"] }, { name: "visibility", component: _shared_ui_form_types_visibility_component__WEBPACK_IMPORTED_MODULE_85__["FieldInputVisibilityComponent"] }, { name: "playlist", component: _shared_ui_form_types_playlists_component__WEBPACK_IMPORTED_MODULE_86__["FieldInputPlaylistComponent"] }, { name: "tags", component: _shared_ui_form_types_tags_component__WEBPACK_IMPORTED_MODULE_87__["SelectTagsComponent"] }, { name: "countries", component: _shared_ui_form_types_countries_component__WEBPACK_IMPORTED_MODULE_88__["FieldCountriesComponent"] }, { name: "money", component: _shared_ui_form_types_money_component__WEBPACK_IMPORTED_MODULE_89__["FormlyFieldInputMoney"], defaultOptions: { expressionProperties: {}, defaultValue: 5903, templateOptions: { placeholder: "hello", disabled: false } } }, { name: "percentage", component: _shared_ui_form_types_percentage_component__WEBPACK_IMPORTED_MODULE_90__["FormlyFieldInputPercentage"], defaultOptions: { expressionProperties: {}, defaultValue: 0, templateOptions: { placeholder: "hello", disabled: false } } }, { name: "typeahead", component: _shared_ui_form_types_typeahead_component__WEBPACK_IMPORTED_MODULE_91__["FormlyFieldTypeahead"] }, { name: "number", extends: "input", defaultOptions: { templateOptions: { type: "number" } } }, { name: "date", extends: "input", defaultOptions: { templateOptions: { type: "date" } } }, { name: "integer", extends: "input" }, { name: "string", extends: "input" }, { name: "object", extends: "formly-group" }, { name: "boolean", extends: "checkbox" }, { name: "enum", extends: "select" }], validators: [{ name: "maximumNumValidation", validation: _shared_ui_form_helpers_validators__WEBPACK_IMPORTED_MODULE_92__["maximumNumValidation"] }, { name: "passwordMatchValidation", validation: _shared_ui_form_helpers_validators__WEBPACK_IMPORTED_MODULE_92__["passwordMatchValidation"] }, { name: "PasswordStrengthValidation", validation: _shared_ui_form_helpers_validators__WEBPACK_IMPORTED_MODULE_92__["PasswordStrengthValidation"] }] }, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_47__["ɵa"](p4_0), {}]; }, [_ngx_formly_core__WEBPACK_IMPORTED_MODULE_47__["FormlyConfig"], _ngx_formly_core__WEBPACK_IMPORTED_MODULE_47__["FormlyConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_47__["FormlyModule"], _ngx_formly_core__WEBPACK_IMPORTED_MODULE_47__["FormlyModule"], [_ngx_formly_core__WEBPACK_IMPORTED_MODULE_47__["FormlyConfig"], [2, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_47__["FORMLY_CONFIG"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_93__["NgSelectModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_93__["NgSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngx_formly_material_form_field__WEBPACK_IMPORTED_MODULE_80__["FormlyMatFormFieldModule"], _ngx_formly_material_form_field__WEBPACK_IMPORTED_MODULE_80__["FormlyMatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngx_formly_material_datepicker__WEBPACK_IMPORTED_MODULE_81__["FormlyMatDatepickerModule"], _ngx_formly_material_datepicker__WEBPACK_IMPORTED_MODULE_81__["FormlyMatDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["NativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["NativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatNativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatNativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_ui_form_ui_form_module__WEBPACK_IMPORTED_MODULE_94__["UiFormModule"], _shared_ui_form_ui_form_module__WEBPACK_IMPORTED_MODULE_94__["UiFormModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_52__["TranslateModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_52__["TranslateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_95__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_95__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _music_works_routing_module__WEBPACK_IMPORTED_MODULE_96__["MusicWorksRoutingModule"], _music_works_routing_module__WEBPACK_IMPORTED_MODULE_96__["MusicWorksRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_97__["MatGridListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_97__["MatGridListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_98__["MatSidenavModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_98__["MatSidenavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_99__["CdkTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_99__["CdkTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_table__WEBPACK_IMPORTED_MODULE_100__["MatTableModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_100__["MatTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_101__["MatToolbarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_101__["MatToolbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_102__["MatProgressBarModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_102__["MatProgressBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_103__["MatSnackBarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_103__["MatSnackBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_104__["CdkAccordionModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_104__["CdkAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_105__["MatExpansionModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_105__["MatExpansionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_106__["CdkStepperModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_106__["CdkStepperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_53__["MatStepperModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_53__["MatStepperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_badge__WEBPACK_IMPORTED_MODULE_107__["MatBadgeModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_107__["MatBadgeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_108__["AppMaterialModule"], _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_108__["AppMaterialModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _music_works_module__WEBPACK_IMPORTED_MODULE_1__["MusicWorksModule"], _music_works_module__WEBPACK_IMPORTED_MODULE_1__["MusicWorksModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_chips__WEBPACK_IMPORTED_MODULE_75__["MAT_CHIPS_DEFAULT_OPTIONS"], { separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_109__["ENTER"]] }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_93__["SELECTION_MODEL_FACTORY"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_93__["ɵb"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MAT_DATE_FORMATS"], _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MAT_NATIVE_DATE_FORMATS"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_forms__WEBPACK_IMPORTED_MODULE_31__["NG_VALIDATORS"], function () { return [_shared_shared_module__WEBPACK_IMPORTED_MODULE_95__["ɵ0"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_95__["ɵ1"]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_78__["DYNAMIC_FORM_CONTROL_MAP_FN"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_95__["ɵ2"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_51__["ROUTES"], function () { return [[{ path: "", component: _works_component__WEBPACK_IMPORTED_MODULE_110__["WorksComponent"], data: _music_works_routing_module__WEBPACK_IMPORTED_MODULE_96__["ɵ0"] }, { path: "edit/:id", component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_111__["EditComponent"] }, { path: "detail/:id", component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_112__["DetailComponent"] }]]; }, [])]); });



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
var MusicWorksModule = /** @class */ (function () {
    function MusicWorksModule() {
    }
    return MusicWorksModule;
}());



/***/ }),

/***/ "./src/app/assets/music-works/works.component.ngfactory.js":
/*!*****************************************************************!*\
  !*** ./src/app/assets/music-works/works.component.ngfactory.js ***!
  \*****************************************************************/
/*! exports provided: RenderType_WorksComponent, View_WorksComponent_0, View_WorksComponent_Host_0, WorksComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_WorksComponent", function() { return RenderType_WorksComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_WorksComponent_0", function() { return View_WorksComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_WorksComponent_Host_0", function() { return View_WorksComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksComponentNgFactory", function() { return WorksComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/toolbar/typings/index.ngfactory */ "./node_modules/@angular/material/toolbar/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_directives_help_text_btn_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../_shared/directives/help-text-btn.directive */ "./src/app/_shared/directives/help-text-btn.directive.ts");
/* harmony import */ var _shared_services_help_text_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../_shared/services/help-text.service */ "./src/app/_shared/services/help-text.service.ts");
/* harmony import */ var _services_app_settings_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/app-settings.service */ "./src/app/services/app-settings.service.ts");
/* harmony import */ var _node_modules_ag_grid_angular_dist_agGridAngular_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../node_modules/ag-grid-angular/dist/agGridAngular.ngfactory */ "./node_modules/ag-grid-angular/dist/agGridAngular.ngfactory.js");
/* harmony import */ var ag_grid_angular_dist_angularFrameworkOverrides__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ag-grid-angular/dist/angularFrameworkOverrides */ "./node_modules/ag-grid-angular/dist/angularFrameworkOverrides.js");
/* harmony import */ var ag_grid_angular_dist_angularFrameworkOverrides__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular_dist_angularFrameworkOverrides__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var ag_grid_angular_dist_angularFrameworkComponentWrapper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ag-grid-angular/dist/angularFrameworkComponentWrapper */ "./node_modules/ag-grid-angular/dist/angularFrameworkComponentWrapper.js");
/* harmony import */ var ag_grid_angular_dist_angularFrameworkComponentWrapper__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular_dist_angularFrameworkComponentWrapper__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var ag_grid_angular_dist_agGridAngular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ag-grid-angular/dist/agGridAngular */ "./node_modules/ag-grid-angular/dist/agGridAngular.js");
/* harmony import */ var ag_grid_angular_dist_agGridAngular__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular_dist_agGridAngular__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../node_modules/ag-grid-angular/dist/agGridColumn.ngfactory */ "./node_modules/ag-grid-angular/dist/agGridColumn.ngfactory.js");
/* harmony import */ var ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ag-grid-angular/dist/agGridColumn */ "./node_modules/ag-grid-angular/dist/agGridColumn.js");
/* harmony import */ var ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _works_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./works.component */ "./src/app/assets/music-works/works.component.ts");
/* harmony import */ var _services_test_data_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../services/test-data.service */ "./src/app/services/test-data.service.ts");
/* harmony import */ var _services_page_title_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../services/page-title.service */ "./src/app/services/page-title.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
























var styles_WorksComponent = ["dynamic-material-form[fxLayoutAlign][_ngcontent-%COMP%] { padding:10px; padding-left: 25px;}"];
var RenderType_WorksComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_WorksComponent, data: {} });

function View_WorksComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 9, "mat-toolbar", [["class", "mat-toolbar"]], [[2, "mat-toolbar-multiple-rows", null], [2, "mat-toolbar-single-row", null]], null, null, _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_MatToolbar_0"], _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_MatToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4243456, null, 1, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, { _toolbarRows: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, 0, 6, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 3, "button", [["mat-button", ""], ["mat-raised-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openAddNewDialog() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](6, 0, ["\n", "\n"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "span", [["appHelp", "help.1"], ["class", "ml-3"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 16384, null, 0, _shared_directives_help_text_btn_directive__WEBPACK_IMPORTED_MODULE_10__["HelpTextBtnDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _shared_services_help_text_service__WEBPACK_IMPORTED_MODULE_11__["HelpTextService"], _services_app_settings_service__WEBPACK_IMPORTED_MODULE_12__["AppSettingsService"]], { helpRef: [0, "helpRef"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Your Works"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 32, "div", [["class", "table-responsive-lg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 16777216, null, null, 31, "ag-grid-angular", [["class", "ag-theme-material"], ["style", "width: 100%; height: 700px;"]], null, [[null, "cellClicked"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("cellClicked" === en)) {
        var pd_0 = (_co.onCellClicked($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_ag_grid_angular_dist_agGridAngular_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_AgGridAngular_0"], _node_modules_ag_grid_angular_dist_agGridAngular_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_AgGridAngular"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, ag_grid_angular_dist_angularFrameworkOverrides__WEBPACK_IMPORTED_MODULE_14__["AngularFrameworkOverrides"], ag_grid_angular_dist_angularFrameworkOverrides__WEBPACK_IMPORTED_MODULE_14__["AngularFrameworkOverrides"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, ag_grid_angular_dist_angularFrameworkComponentWrapper__WEBPACK_IMPORTED_MODULE_15__["AngularFrameworkComponentWrapper"], ag_grid_angular_dist_angularFrameworkComponentWrapper__WEBPACK_IMPORTED_MODULE_15__["AngularFrameworkComponentWrapper"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 4898816, [["agGrid", 4]], 1, ag_grid_angular_dist_agGridAngular__WEBPACK_IMPORTED_MODULE_16__["AgGridAngular"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], ag_grid_angular_dist_angularFrameworkOverrides__WEBPACK_IMPORTED_MODULE_14__["AngularFrameworkOverrides"], ag_grid_angular_dist_angularFrameworkComponentWrapper__WEBPACK_IMPORTED_MODULE_15__["AngularFrameworkComponentWrapper"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], { gridOptions: [0, "gridOptions"], rowData: [1, "rowData"] }, { cellClicked: "cellClicked" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, { columns: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 8, "ag-grid-column", [["headerName", "Work"]], null, null, null, _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_AgGridColumn_0"], _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_AgGridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](19, 49152, [[3, 4], [2, 4]], 1, ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_18__["AgGridColumn"], [], { headerName: [0, "headerName"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 3, { childColumns: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 2, "ag-grid-column", [["headerName", "Actions"]], null, null, null, _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_AgGridColumn_0"], _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_AgGridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 49152, [[4, 4], [3, 4]], 1, ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_18__["AgGridColumn"], [], { headerName: [0, "headerName"], cellRenderer: [1, "cellRenderer"], pinned: [2, "pinned"], width: [3, "width"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 4, { childColumns: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 2, "ag-grid-column", [["field", "Name"], ["headerName", "Name"]], null, null, null, _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_AgGridColumn_0"], _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_AgGridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](25, 49152, [[5, 4], [3, 4]], 1, ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_18__["AgGridColumn"], [], { headerName: [0, "headerName"], field: [1, "field"], filter: [2, "filter"], pinned: [3, "pinned"], width: [4, "width"], sortable: [5, "sortable"], resizable: [6, "resizable"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 5, { childColumns: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 17, "ag-grid-column", [["headerName", "Details"]], null, null, null, _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_AgGridColumn_0"], _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_AgGridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](28, 49152, [[6, 4], [2, 4]], 1, ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_18__["AgGridColumn"], [], { headerName: [0, "headerName"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 6, { childColumns: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 2, "ag-grid-column", [["field", "Type"], ["headerName", "Type"]], null, null, null, _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_AgGridColumn_0"], _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_AgGridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](31, 49152, [[7, 4], [6, 4]], 1, ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_18__["AgGridColumn"], [], { headerName: [0, "headerName"], field: [1, "field"], filter: [2, "filter"], width: [3, "width"], sortable: [4, "sortable"], resizable: [5, "resizable"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 7, { childColumns: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 2, "ag-grid-column", [["field", "ISWC"], ["headerName", "ISWC"]], null, null, null, _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_AgGridColumn_0"], _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_AgGridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](34, 49152, [[8, 4], [6, 4]], 1, ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_18__["AgGridColumn"], [], { headerName: [0, "headerName"], field: [1, "field"], filter: [2, "filter"], width: [3, "width"], sortable: [4, "sortable"], resizable: [5, "resizable"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 8, { childColumns: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](36, 0, null, null, 2, "ag-grid-column", [["field", "Composer"], ["headerName", "Composer"]], null, null, null, _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_AgGridColumn_0"], _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_AgGridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](37, 49152, [[9, 4], [6, 4]], 1, ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_18__["AgGridColumn"], [], { headerName: [0, "headerName"], field: [1, "field"], filter: [2, "filter"], width: [3, "width"], sortable: [4, "sortable"], resizable: [5, "resizable"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 9, { childColumns: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, null, 2, "ag-grid-column", [["field", "lyricist"], ["headerName", "Lyricist"]], null, null, null, _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_AgGridColumn_0"], _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_AgGridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](40, 49152, [[10, 4], [6, 4]], 1, ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_18__["AgGridColumn"], [], { headerName: [0, "headerName"], field: [1, "field"], filter: [2, "filter"], width: [3, "width"], sortable: [4, "sortable"], resizable: [5, "resizable"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 10, { childColumns: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](42, 0, null, null, 2, "ag-grid-column", [["field", "Arranger"], ["headerName", "Arranger"]], null, null, null, _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_AgGridColumn_0"], _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_AgGridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](43, 49152, [[11, 4], [6, 4]], 1, ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_18__["AgGridColumn"], [], { headerName: [0, "headerName"], field: [1, "field"], filter: [2, "filter"], width: [3, "width"], sortable: [4, "sortable"], resizable: [5, "resizable"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 11, { childColumns: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](45, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["you can amend the registration details of any works where you are a rightsholder. "]))], function (_ck, _v) { var _co = _v.component; var currVal_5 = "help.1"; _ck(_v, 9, 0, currVal_5); var currVal_6 = _co.gridOptions; var currVal_7 = _co.allItems; _ck(_v, 16, 0, currVal_6, currVal_7); var currVal_8 = "Work"; _ck(_v, 19, 0, currVal_8); var currVal_9 = "Actions"; var currVal_10 = _co.editBtnCellRenderer; var currVal_11 = true; var currVal_12 = 100; _ck(_v, 22, 0, currVal_9, currVal_10, currVal_11, currVal_12); var currVal_13 = "Name"; var currVal_14 = "Name"; var currVal_15 = true; var currVal_16 = true; var currVal_17 = 165; var currVal_18 = true; var currVal_19 = true; _ck(_v, 25, 0, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19); var currVal_20 = "Details"; _ck(_v, 28, 0, currVal_20); var currVal_21 = "Type"; var currVal_22 = "Type"; var currVal_23 = true; var currVal_24 = 150; var currVal_25 = true; var currVal_26 = true; _ck(_v, 31, 0, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26); var currVal_27 = "ISWC"; var currVal_28 = "ISWC"; var currVal_29 = true; var currVal_30 = 100; var currVal_31 = true; var currVal_32 = true; _ck(_v, 34, 0, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32); var currVal_33 = "Composer"; var currVal_34 = "Composer"; var currVal_35 = true; var currVal_36 = 100; var currVal_37 = true; var currVal_38 = true; _ck(_v, 37, 0, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38); var currVal_39 = "Lyricist"; var currVal_40 = "lyricist"; var currVal_41 = true; var currVal_42 = 150; var currVal_43 = true; var currVal_44 = true; _ck(_v, 40, 0, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44); var currVal_45 = "Arranger"; var currVal_46 = "Arranger"; var currVal_47 = true; var currVal_48 = 200; var currVal_49 = true; var currVal_50 = true; _ck(_v, 43, 0, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._toolbarRows.length > 0); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._toolbarRows.length === 0); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).disabled || null); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5)._animationMode === "NoopAnimations"); _ck(_v, 4, 0, currVal_2, currVal_3); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).transform("works.registerNew")); _ck(_v, 6, 0, currVal_4); }); }
function View_WorksComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-index", [], null, null, null, View_WorksComponent_0, RenderType_WorksComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _works_component__WEBPACK_IMPORTED_MODULE_19__["WorksComponent"], [_services_test_data_service__WEBPACK_IMPORTED_MODULE_20__["TestDataService"], _services_page_title_service__WEBPACK_IMPORTED_MODULE_21__["PageTitleService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["ActivatedRoute"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var WorksComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-index", _works_component__WEBPACK_IMPORTED_MODULE_19__["WorksComponent"], View_WorksComponent_Host_0, {}, {}, []);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_page_title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/page-title.service */ "./src/app/services/page-title.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/assets/music-works/edit/edit.component.ts");
/* harmony import */ var src_app_services_test_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/test-data.service */ "./src/app/services/test-data.service.ts");
/* harmony import */ var _add_new_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-new/register.component */ "./src/app/assets/music-works/add-new/register.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









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
        this.entityList$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (type) { return _this.testData.listEntities(type); }));
        this.selectedEntity$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (id) { return _this.testData.getEntity(_this.selectedType, id); }));
        this.listAll$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (type) { return _this.testData.listAll(type); }));
        this.listAll();
    };
    WorksComponent.prototype.countryCellRenderer = function (params) {
        var flag = "<img border='0' width='15' height='10' style='margin-bottom: 2px' src='https://www.ag-grid.com/images/flags/gb.png'>";
        return flag + " " + params.value;
    };
    WorksComponent.prototype.editBtnCellRenderer = function (params) {
        var btn = '<button class="mat-button mat-raised-button"><span class="mat-button-wrapper">Edit</span><div class="mat-button-ripple mat-ripple"></div><div class="mat-button-focus-overlay"></div></button>';
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
        var dialogRef = this.dialog.open(_edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"], {
            data: ev,
            width: '80%',
            panelClass: 'formFieldWidth380'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    WorksComponent.prototype.openAddNewDialog = function (ev) {
        var dialogRef = this.dialog.open(_add_new_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"], {
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
        this.testData.listAll('music-work').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () { return _this.showSpinner = true; }))
            .subscribe(function (res) {
            _this.allItems = res;
            _this.showSpinner = false;
        });
    };
    return WorksComponent;
}());



/***/ })

}]);
//# sourceMappingURL=music-works-music-works-module-ngfactory.js.map