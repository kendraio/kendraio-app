(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["music-releases-music-releases-module-ngfactory"],{

/***/ "./src/app/assets/music-releases/_shared/forms/form.layout.ts":
/*!********************************************************************!*\
  !*** ./src/app/assets/music-releases/_shared/forms/form.layout.ts ***!
  \********************************************************************/
/*! exports provided: FORM_LAYOUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM_LAYOUT", function() { return FORM_LAYOUT; });
var FORM_LAYOUT = {
    'Ownerx': {
        element: {
            host: 'col-sm-4'
        }
    }
};


/***/ }),

/***/ "./src/app/assets/music-releases/_shared/forms/formModel.ts":
/*!******************************************************************!*\
  !*** ./src/app/assets/music-releases/_shared/forms/formModel.ts ***!
  \******************************************************************/
/*! exports provided: MUSIC_RELEASES_FORM_MODEL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MUSIC_RELEASES_FORM_MODEL", function() { return MUSIC_RELEASES_FORM_MODEL; });
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm5/core.js");

var MUSIC_RELEASES_FORM_MODEL = [
    // new DynamicFormGroupModel({
    //     id: 'stay',
    //     group: [
    //         new DynamicDatePickerModel({
    //             id: 'arrivalDate',
    //             inline: false,
    //             placeholder: 'Date of Arrival'
    //         }),
    //         new DynamicDatePickerModel({
    //             id: 'departureDate',
    //             inline: false,
    //             placeholder: 'Date of Departure'
    //         })
    //     ],
    //     // validators: {
    //     //     customDateRangeValidator: null
    //     // },
    //     // errorMessages: {
    //     //     customDateRangeValidator: 'Invalid period of time selected'
    //     // }
    // }),
    // new DynamicFormGroupModel({
    //     id: 'room',
    //     group: [
    //         new DynamicSelectModel<string>({
    //             id: 'roomSize',
    //             placeholder: 'Room Size',
    //             hint: 'Choose a room type',
    //             options: [
    //                 {
    //                     label: 'Single Room',
    //                     value: 'single-room'
    //                 },
    //                 {
    //                     label: 'Double Room',
    //                     value: 'double-room'
    //                 },
    //                 {
    //                     label: 'Business Suite',
    //                     value: 'business-suite'
    //                 },
    //                 {
    //                     label: 'Presidential Suite',
    //                     value: 'presidential-suite'
    //                 },
    //                 {
    //                     label: 'Storeroom',
    //                     value: 'storeroom'
    //                 }
    //             ]
    //         }),
    //         new DynamicInputModel({
    //             id: 'roomQuantity',
    //             inputType: 'number',
    //             placeholder: 'Room Quantity',
    //             hint: 'Maximum: 5',
    //             max: 5,
    //             min: 0
    //         })
    //     ]
    // }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'Title',
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
        id: 'Artist',
        maxLength: 50,
        placeholder: 'Name of Artist',
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
        id: 'Barcode',
        maxLength: 150,
        placeholder: 'Barcode'
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'Catalogue Number',
        maxLength: 50,
        placeholder: 'Catalogue Number'
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'Collective',
        maxLength: 50,
        placeholder: 'Collective'
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'Date',
        placeholder: 'Date'
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'Distribution',
        maxLength: 50,
        placeholder: 'Distribution'
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'Format',
        maxLength: 10,
        placeholder: 'Format'
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'Number of tracks',
        maxLength: 3,
        placeholder: 'Number of tracks'
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'Owner',
        maxLength: 50,
        placeholder: 'Owner',
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        }
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'Territory',
        maxLength: 50,
        placeholder: 'Territory'
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'Type',
        maxLength: 50,
        placeholder: 'Type'
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'Submitted to',
        placeholder: 'Submitted to'
    }),
];


/***/ }),

/***/ "./src/app/assets/music-releases/_shared/forms/registerNewRelease.ts":
/*!***************************************************************************!*\
  !*** ./src/app/assets/music-releases/_shared/forms/registerNewRelease.ts ***!
  \***************************************************************************/
/*! exports provided: RELEASE_REGISTER_FORM_MODEL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RELEASE_REGISTER_FORM_MODEL", function() { return RELEASE_REGISTER_FORM_MODEL; });
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm5/core.js");

// Band/Artist Name
// Release Type(Single/EP/LP ..)
// (P)Date
// (P)Name
// (C) Line
// Format(Digital/CD/Vinyl/cassette): 1+ values. for each:
// * Title, barcode, catalogue number, release date
var RELEASE_REGISTER_FORM_MODEL = [
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'ISRC',
        maxLength: 50,
        placeholder: 'ISRC',
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'recordingTitle',
        maxLength: 25,
        placeholder: 'Recording Title',
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'bandArtistName',
        maxLength: 50,
        placeholder: 'Band/Artist Name',
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'genere',
        placeholder: 'Genere',
        hint: 'if a classical or dramatic work',
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'date',
        placeholder: 'Date',
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'name',
        maxLength: 50,
        placeholder: 'Name',
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'line',
        maxLength: 50,
        placeholder: 'Line',
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicCheckboxGroupModel"]({
        id: 'releaseType',
        label: 'Release Type',
        group: [
            new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicCheckboxModel"]({
                id: 'single',
                label: 'single',
                value: true
            }),
            new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicCheckboxModel"]({
                id: 'LP',
                label: 'LP',
                value: false
            }),
            new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicCheckboxModel"]({
                id: 'EP',
                label: 'EP',
                value: false
            })
        ]
    }),
    /// Format(Digital/CD/Vinyl/cassette): 1+ values. for each:
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicCheckboxGroupModel"]({
        id: 'format',
        label: 'Format',
        group: [
            new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicCheckboxModel"]({
                id: 'Digital',
                label: 'Digital',
                value: true
            }),
            new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicCheckboxModel"]({
                id: 'cd',
                label: 'CD',
                value: false
            }),
            new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicCheckboxModel"]({
                id: 'vinyl',
                label: 'Vinyl',
                value: false
            }), new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicCheckboxModel"]({
                id: 'cassette',
                label: 'Cassette',
                value: false
            })
        ]
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicFormGroupModel"]({
        id: 'signoff',
        group: [
            new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicSwitchModel"]({
                id: 'reminder',
                offLabel: 'Send me a reminder',
                onLabel: 'Send me a reminder',
                value: false
            }),
            new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicSwitchModel"]({
                id: 'updates',
                offLabel: 'Subscribe to Updates',
                onLabel: 'Subscribe to Updates',
                value: false
            }),
            new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicCheckboxModel"]({
                id: 'confirm',
                label: 'I confirm the information given above',
                value: false,
                validators: {
                    requiredTrue: null
                },
                errorMessages: {
                    required: 'You must confirm your data is correct'
                }
            })
        ]
    })
];


/***/ }),

/***/ "./src/app/assets/music-releases/index.ts":
/*!************************************************!*\
  !*** ./src/app/assets/music-releases/index.ts ***!
  \************************************************/
/*! exports provided: ReleasesComponent, MusicReleasesEditComponent, TasksComponent, ListComponent, RegisterNewReleaseComponent, PublishComponent, RegisterComponent, MusicReleasesDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _music_releases_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./music-releases.component */ "./src/app/assets/music-releases/music-releases.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReleasesComponent", function() { return _music_releases_component__WEBPACK_IMPORTED_MODULE_0__["ReleasesComponent"]; });

/* harmony import */ var _music_releases_detail_music_releases_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./music-releases-detail/music-releases-detail.component */ "./src/app/assets/music-releases/music-releases-detail/music-releases-detail.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MusicReleasesDetailComponent", function() { return _music_releases_detail_music_releases_detail_component__WEBPACK_IMPORTED_MODULE_1__["MusicReleasesDetailComponent"]; });

/* harmony import */ var _music_releases_edit_music_releases_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./music-releases-edit/music-releases-edit.component */ "./src/app/assets/music-releases/music-releases-edit/music-releases-edit.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MusicReleasesEditComponent", function() { return _music_releases_edit_music_releases_edit_component__WEBPACK_IMPORTED_MODULE_2__["MusicReleasesEditComponent"]; });

/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/assets/music-releases/tasks/tasks.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_3__["TasksComponent"]; });

/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/assets/music-releases/list/list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]; });

/* harmony import */ var _register_new_release_register_new_release_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-new-release/register-new-release.component */ "./src/app/assets/music-releases/register-new-release/register-new-release.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterNewReleaseComponent", function() { return _register_new_release_register_new_release_component__WEBPACK_IMPORTED_MODULE_5__["RegisterNewReleaseComponent"]; });

/* harmony import */ var _publish_publish_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./publish/publish.component */ "./src/app/assets/music-releases/publish/publish.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PublishComponent", function() { return _publish_publish_component__WEBPACK_IMPORTED_MODULE_6__["PublishComponent"]; });

/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/assets/music-releases/register/register.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]; });











/***/ }),

/***/ "./src/app/assets/music-releases/list/list.component.ngfactory.js":
/*!************************************************************************!*\
  !*** ./src/app/assets/music-releases/list/list.component.ngfactory.js ***!
  \************************************************************************/
/*! exports provided: RenderType_ListComponent, View_ListComponent_0, View_ListComponent_Host_0, ListComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ListComponent", function() { return RenderType_ListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ListComponent_0", function() { return View_ListComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ListComponent_Host_0", function() { return View_ListComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponentNgFactory", function() { return ListComponentNgFactory; });
/* harmony import */ var _list_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.component.scss.shim.ngstyle */ "./src/app/assets/music-releases/list/list.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material_progress_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/progress-bar/typings/index.ngfactory */ "./node_modules/@angular/material/progress-bar/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/list/typings/index.ngfactory */ "./node_modules/@angular/material/list/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/toolbar/typings/index.ngfactory */ "./node_modules/@angular/material/toolbar/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_ag_grid_angular_dist_agGridAngular_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../node_modules/ag-grid-angular/dist/agGridAngular.ngfactory */ "./node_modules/ag-grid-angular/dist/agGridAngular.ngfactory.js");
/* harmony import */ var ag_grid_angular_dist_angularFrameworkOverrides__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ag-grid-angular/dist/angularFrameworkOverrides */ "./node_modules/ag-grid-angular/dist/angularFrameworkOverrides.js");
/* harmony import */ var ag_grid_angular_dist_angularFrameworkOverrides__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular_dist_angularFrameworkOverrides__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var ag_grid_angular_dist_angularFrameworkComponentWrapper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ag-grid-angular/dist/angularFrameworkComponentWrapper */ "./node_modules/ag-grid-angular/dist/angularFrameworkComponentWrapper.js");
/* harmony import */ var ag_grid_angular_dist_angularFrameworkComponentWrapper__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular_dist_angularFrameworkComponentWrapper__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var ag_grid_angular_dist_agGridAngular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ag-grid-angular/dist/agGridAngular */ "./node_modules/ag-grid-angular/dist/agGridAngular.js");
/* harmony import */ var ag_grid_angular_dist_agGridAngular__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular_dist_agGridAngular__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../node_modules/ag-grid-angular/dist/agGridColumn.ngfactory */ "./node_modules/ag-grid-angular/dist/agGridColumn.ngfactory.js");
/* harmony import */ var ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ag-grid-angular/dist/agGridColumn */ "./node_modules/ag-grid-angular/dist/agGridColumn.js");
/* harmony import */ var ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./list.component */ "./src/app/assets/music-releases/list/list.component.ts");
/* harmony import */ var _services_test_data_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../services/test-data.service */ "./src/app/services/test-data.service.ts");
/* harmony import */ var _services_page_title_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../services/page-title.service */ "./src/app/services/page-title.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

























var styles_ListComponent = [_list_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ListComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ListComponent, data: {} });

function View_ListComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "mat-progress-bar", [["aria-valuemax", "100"], ["aria-valuemin", "0"], ["class", "mat-progress-bar"], ["mode", "indeterminate"], ["role", "progressbar"]], [[1, "aria-valuenow", 0], [1, "mode", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_progress_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatProgressBar_0"], _node_modules_angular_material_progress_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatProgressBar"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4374528, null, 0, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__["MatProgressBar"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]], [2, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__["MAT_PROGRESS_BAR_LOCATION"]]], { mode: [0, "mode"] }, null)], function (_ck, _v) { var currVal_3 = "indeterminate"; _ck(_v, 1, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mode === "indeterminate") || (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mode === "query")) ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).value); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mode; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._isNoopAnimation; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
function View_ListComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "mat-action-list", [["class", "mat-list mat-list-base"]], null, null, null, _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatList_0"], _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatList"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 704512, null, 0, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatList"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 2, "button", [["mat-button", ""], ["mat-raised-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.sendToClaim($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Claim Selected"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 2, "button", [["mat-button", ""], ["mat-raised-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.sendToRegister($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Register Selected"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 2, "button", [["mat-button", ""], ["mat-raised-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.sendToPublish($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Distribute/Publish Selected"]))], null, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).disabled || null); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._animationMode === "NoopAnimations"); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).disabled || null); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._animationMode === "NoopAnimations"); _ck(_v, 5, 0, currVal_2, currVal_3); var currVal_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).disabled || null); var currVal_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._animationMode === "NoopAnimations"); _ck(_v, 8, 0, currVal_4, currVal_5); }); }
function View_ListComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "mat-toolbar", [["class", "mat-toolbar"]], [[2, "mat-toolbar-multiple-rows", null], [2, "mat-toolbar-single-row", null]], null, null, _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatToolbar_0"], _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 1, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { _toolbarRows: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 3, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "button", [["mat-button", ""], ["mat-raised-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openAddNewDialog() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Create Release"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ListComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 65, "div", [["class", "table-responsive-lg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 16777216, null, null, 58, "ag-grid-angular", [["animateRows", "true"], ["class", "ag-theme-material"], ["rowSelection", "multiple"], ["style", "width: 100%; height: 700px;"]], null, [[null, "cellClicked"], [null, "selectionChanged"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("cellClicked" === en)) {
        var pd_0 = (_co.onCellClicked($event) !== false);
        ad = (pd_0 && ad);
    } if (("selectionChanged" === en)) {
        var pd_1 = (_co.onSelectionChanged($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_ag_grid_angular_dist_agGridAngular_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_AgGridAngular_0"], _node_modules_ag_grid_angular_dist_agGridAngular_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_AgGridAngular"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, ag_grid_angular_dist_angularFrameworkOverrides__WEBPACK_IMPORTED_MODULE_16__["AngularFrameworkOverrides"], ag_grid_angular_dist_angularFrameworkOverrides__WEBPACK_IMPORTED_MODULE_16__["AngularFrameworkOverrides"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, ag_grid_angular_dist_angularFrameworkComponentWrapper__WEBPACK_IMPORTED_MODULE_17__["AngularFrameworkComponentWrapper"], ag_grid_angular_dist_angularFrameworkComponentWrapper__WEBPACK_IMPORTED_MODULE_17__["AngularFrameworkComponentWrapper"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 4898816, [["agGrid", 4]], 1, ag_grid_angular_dist_agGridAngular__WEBPACK_IMPORTED_MODULE_18__["AgGridAngular"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], ag_grid_angular_dist_angularFrameworkOverrides__WEBPACK_IMPORTED_MODULE_16__["AngularFrameworkOverrides"], ag_grid_angular_dist_angularFrameworkComponentWrapper__WEBPACK_IMPORTED_MODULE_17__["AngularFrameworkComponentWrapper"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]], { gridOptions: [0, "gridOptions"], rowData: [1, "rowData"], frameworkComponents: [2, "frameworkComponents"], rowSelection: [3, "rowSelection"], animateRows: [4, "animateRows"] }, { cellClicked: "cellClicked", selectionChanged: "selectionChanged" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { columns: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 14, "ag-grid-column", [["headerName", "Releases"]], null, null, null, _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_AgGridColumn_0"], _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_AgGridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 49152, [[3, 4], [2, 4]], 1, ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_20__["AgGridColumn"], [], { headerName: [0, "headerName"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { childColumns: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 2, "ag-grid-column", [["headerName", "#"]], null, null, null, _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_AgGridColumn_0"], _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_AgGridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 49152, [[4, 4], [3, 4]], 1, ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_20__["AgGridColumn"], [], { headerName: [0, "headerName"], filter: [1, "filter"], pinned: [2, "pinned"], width: [3, "width"], checkboxSelection: [4, "checkboxSelection"], suppressMenu: [5, "suppressMenu"], resizable: [6, "resizable"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { childColumns: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 2, "ag-grid-column", [["headerName", "Actions"]], null, null, null, _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_AgGridColumn_0"], _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_AgGridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 49152, [[5, 4], [3, 4]], 1, ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_20__["AgGridColumn"], [], { headerName: [0, "headerName"], cellRenderer: [1, "cellRenderer"], pinned: [2, "pinned"], width: [3, "width"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { childColumns: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 2, "ag-grid-column", [["field", "Title"], ["headerName", "Title"]], null, null, null, _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_AgGridColumn_0"], _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_AgGridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 49152, [[6, 4], [3, 4]], 1, ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_20__["AgGridColumn"], [], { cellEditorFramework: [0, "cellEditorFramework"], headerName: [1, "headerName"], field: [2, "field"], filter: [3, "filter"], pinned: [4, "pinned"], width: [5, "width"], editable: [6, "editable"], sortable: [7, "sortable"], resizable: [8, "resizable"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, { childColumns: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 2, "ag-grid-column", [["field", "Artist"], ["headerName", "Artist"]], null, null, null, _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_AgGridColumn_0"], _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_AgGridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 49152, [[7, 4], [3, 4]], 1, ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_20__["AgGridColumn"], [], { headerName: [0, "headerName"], field: [1, "field"], filter: [2, "filter"], pinned: [3, "pinned"], width: [4, "width"], editable: [5, "editable"], sortable: [6, "sortable"], resizable: [7, "resizable"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, { childColumns: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 38, "ag-grid-column", [["headerName", "Details"]], null, null, null, _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_AgGridColumn_0"], _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_AgGridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 49152, [[8, 4], [2, 4]], 1, ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_20__["AgGridColumn"], [], { headerName: [0, "headerName"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, { childColumns: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 2, "ag-grid-column", [["field", "Date"], ["headerName", "Date"]], null, null, null, _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_AgGridColumn_0"], _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_AgGridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 49152, [[9, 4], [8, 4]], 1, ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_20__["AgGridColumn"], [], { headerName: [0, "headerName"], field: [1, "field"], filter: [2, "filter"], width: [3, "width"], sortable: [4, "sortable"], resizable: [5, "resizable"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, { childColumns: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 2, "ag-grid-column", [["field", "Owner"], ["headerName", "Owner"]], null, null, null, _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_AgGridColumn_0"], _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_AgGridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 49152, [[10, 4], [8, 4]], 1, ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_20__["AgGridColumn"], [], { headerName: [0, "headerName"], field: [1, "field"], filter: [2, "filter"], width: [3, "width"], sortable: [4, "sortable"], resizable: [5, "resizable"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, { childColumns: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 2, "ag-grid-column", [["field", "Date"], ["headerName", "Date"]], null, null, null, _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_AgGridColumn_0"], _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_AgGridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 49152, [[11, 4], [8, 4]], 1, ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_20__["AgGridColumn"], [], { headerName: [0, "headerName"], field: [1, "field"], filter: [2, "filter"], width: [3, "width"], sortable: [4, "sortable"], resizable: [5, "resizable"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, { childColumns: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 2, "ag-grid-column", [["field", "Territory"], ["headerName", "Territory"]], null, null, null, _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_AgGridColumn_0"], _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_AgGridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 49152, [[12, 4], [8, 4]], 1, ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_20__["AgGridColumn"], [], { headerName: [0, "headerName"], field: [1, "field"], filter: [2, "filter"], cellRenderer: [3, "cellRenderer"], width: [4, "width"], sortable: [5, "sortable"], resizable: [6, "resizable"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, { childColumns: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 2, "ag-grid-column", [["field", "Type"], ["headerName", "Type"]], null, null, null, _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_AgGridColumn_0"], _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_AgGridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 49152, [[13, 4], [8, 4]], 1, ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_20__["AgGridColumn"], [], { headerName: [0, "headerName"], field: [1, "field"], filter: [2, "filter"], width: [3, "width"], sortable: [4, "sortable"], resizable: [5, "resizable"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, { childColumns: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 2, "ag-grid-column", [["field", "Format"], ["headerName", "Format"]], null, null, null, _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_AgGridColumn_0"], _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_AgGridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](51, 49152, [[14, 4], [8, 4]], 1, ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_20__["AgGridColumn"], [], { headerName: [0, "headerName"], field: [1, "field"], filter: [2, "filter"], width: [3, "width"], sortable: [4, "sortable"], resizable: [5, "resizable"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, { childColumns: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 2, "ag-grid-column", [["field", "Catalogue Number"], ["headerName", "Catalogue Number"]], null, null, null, _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_AgGridColumn_0"], _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_AgGridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 49152, [[15, 4], [8, 4]], 1, ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_20__["AgGridColumn"], [], { headerName: [0, "headerName"], field: [1, "field"], filter: [2, "filter"], pinned: [3, "pinned"], width: [4, "width"], sortable: [5, "sortable"], resizable: [6, "resizable"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, { childColumns: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 2, "ag-grid-column", [["field", "Barcode"], ["headerName", "Barcode"]], null, null, null, _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_AgGridColumn_0"], _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_AgGridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](57, 49152, [[16, 4], [8, 4]], 1, ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_20__["AgGridColumn"], [], { headerName: [0, "headerName"], field: [1, "field"], filter: [2, "filter"], pinned: [3, "pinned"], width: [4, "width"], sortable: [5, "sortable"], resizable: [6, "resizable"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, { childColumns: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 2, "ag-grid-column", [["field", "Number of tracks"], ["headerName", "#tracks"]], null, null, null, _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_AgGridColumn_0"], _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_AgGridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 49152, [[17, 4], [8, 4]], 1, ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_20__["AgGridColumn"], [], { headerName: [0, "headerName"], field: [1, "field"], filter: [2, "filter"], pinned: [3, "pinned"], width: [4, "width"], sortable: [5, "sortable"], resizable: [6, "resizable"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 17, { childColumns: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 2, "ag-grid-column", [["field", "Distribution"], ["headerName", "Distribution"]], null, null, null, _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_AgGridColumn_0"], _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_AgGridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](63, 49152, [[18, 4], [8, 4]], 1, ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_20__["AgGridColumn"], [], { headerName: [0, "headerName"], field: [1, "field"], filter: [2, "filter"], pinned: [3, "pinned"], width: [4, "width"], sortable: [5, "sortable"], resizable: [6, "resizable"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 18, { childColumns: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 2, "ag-grid-column", [["field", "Collective"], ["headerName", "Collective"]], null, null, null, _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_AgGridColumn_0"], _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_AgGridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](66, 49152, [[19, 4], [8, 4]], 1, ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_20__["AgGridColumn"], [], { headerName: [0, "headerName"], field: [1, "field"], filter: [2, "filter"], pinned: [3, "pinned"], width: [4, "width"], sortable: [5, "sortable"], resizable: [6, "resizable"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 19, { childColumns: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, null, 2, "ag-grid-column", [["field", "Submitted to"], ["headerName", "Submitted to"]], null, null, null, _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_AgGridColumn_0"], _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_AgGridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](69, 49152, [[20, 4], [8, 4]], 1, ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_20__["AgGridColumn"], [], { headerName: [0, "headerName"], field: [1, "field"], filter: [2, "filter"], pinned: [3, "pinned"], width: [4, "width"], sortable: [5, "sortable"], resizable: [6, "resizable"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 20, { childColumns: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ListComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](72, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](73, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Selection: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](75, 0, null, null, 1, "span", [["id", "selectedRows"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["..."]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 8, 0); var currVal_4 = _co.showSpinner; _ck(_v, 10, 0, currVal_4); var currVal_5 = _co.gridOptions; var currVal_6 = _co.allItems; var currVal_7 = _co.gridOptions.frameworkComponents; var currVal_8 = "multiple"; var currVal_9 = "true"; _ck(_v, 15, 0, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_10 = "Releases"; _ck(_v, 18, 0, currVal_10); var currVal_11 = "#"; var currVal_12 = true; var currVal_13 = true; var currVal_14 = 80; var currVal_15 = true; var currVal_16 = false; var currVal_17 = true; _ck(_v, 21, 0, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17); var currVal_18 = "Actions"; var currVal_19 = _co.editBtnCellRenderer; var currVal_20 = true; var currVal_21 = 100; _ck(_v, 24, 0, currVal_18, currVal_19, currVal_20, currVal_21); var currVal_22 = _co.gridOptions.frameworkComponents.inputRenderer; var currVal_23 = "Title"; var currVal_24 = "Title"; var currVal_25 = true; var currVal_26 = true; var currVal_27 = 175; var currVal_28 = true; var currVal_29 = true; var currVal_30 = true; _ck(_v, 27, 0, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30); var currVal_31 = "Artist"; var currVal_32 = "Artist"; var currVal_33 = true; var currVal_34 = true; var currVal_35 = 120; var currVal_36 = false; var currVal_37 = true; var currVal_38 = true; _ck(_v, 30, 0, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38); var currVal_39 = "Details"; _ck(_v, 33, 0, currVal_39); var currVal_40 = "Date"; var currVal_41 = "Date"; var currVal_42 = true; var currVal_43 = 100; var currVal_44 = true; var currVal_45 = true; _ck(_v, 36, 0, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45); var currVal_46 = "Owner"; var currVal_47 = "Owner"; var currVal_48 = true; var currVal_49 = 100; var currVal_50 = true; var currVal_51 = true; _ck(_v, 39, 0, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51); var currVal_52 = "Date"; var currVal_53 = "Date"; var currVal_54 = true; var currVal_55 = 100; var currVal_56 = true; var currVal_57 = true; _ck(_v, 42, 0, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57); var currVal_58 = "Territory"; var currVal_59 = "Territory"; var currVal_60 = true; var currVal_61 = _co.countryCellRenderer; var currVal_62 = 100; var currVal_63 = true; var currVal_64 = true; _ck(_v, 45, 0, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63, currVal_64); var currVal_65 = "Type"; var currVal_66 = "Type"; var currVal_67 = true; var currVal_68 = 150; var currVal_69 = true; var currVal_70 = true; _ck(_v, 48, 0, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70); var currVal_71 = "Format"; var currVal_72 = "Format"; var currVal_73 = true; var currVal_74 = 150; var currVal_75 = true; var currVal_76 = true; _ck(_v, 51, 0, currVal_71, currVal_72, currVal_73, currVal_74, currVal_75, currVal_76); var currVal_77 = "Catalogue Number"; var currVal_78 = "Catalogue Number"; var currVal_79 = true; var currVal_80 = false; var currVal_81 = 150; var currVal_82 = true; var currVal_83 = true; _ck(_v, 54, 0, currVal_77, currVal_78, currVal_79, currVal_80, currVal_81, currVal_82, currVal_83); var currVal_84 = "Barcode"; var currVal_85 = "Barcode"; var currVal_86 = true; var currVal_87 = false; var currVal_88 = 150; var currVal_89 = true; var currVal_90 = true; _ck(_v, 57, 0, currVal_84, currVal_85, currVal_86, currVal_87, currVal_88, currVal_89, currVal_90); var currVal_91 = "#tracks"; var currVal_92 = "Number of tracks"; var currVal_93 = true; var currVal_94 = false; var currVal_95 = 50; var currVal_96 = true; var currVal_97 = true; _ck(_v, 60, 0, currVal_91, currVal_92, currVal_93, currVal_94, currVal_95, currVal_96, currVal_97); var currVal_98 = "Distribution"; var currVal_99 = "Distribution"; var currVal_100 = true; var currVal_101 = false; var currVal_102 = 150; var currVal_103 = true; var currVal_104 = true; _ck(_v, 63, 0, currVal_98, currVal_99, currVal_100, currVal_101, currVal_102, currVal_103, currVal_104); var currVal_105 = "Collective"; var currVal_106 = "Collective"; var currVal_107 = true; var currVal_108 = false; var currVal_109 = 150; var currVal_110 = true; var currVal_111 = true; _ck(_v, 66, 0, currVal_105, currVal_106, currVal_107, currVal_108, currVal_109, currVal_110, currVal_111); var currVal_112 = "Submitted to"; var currVal_113 = "Submitted to"; var currVal_114 = true; var currVal_115 = false; var currVal_116 = 150; var currVal_117 = true; var currVal_118 = true; _ck(_v, 69, 0, currVal_112, currVal_113, currVal_114, currVal_115, currVal_116, currVal_117, currVal_118); var currVal_119 = (_co.claimsToSend.length > 0); _ck(_v, 72, 0, currVal_119); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._toolbarRows.length > 0); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._toolbarRows.length === 0); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).disabled || null); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._animationMode === "NoopAnimations"); _ck(_v, 4, 0, currVal_2, currVal_3); }); }
function View_ListComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-list", [], null, null, null, View_ListComponent_0, RenderType_ListComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _list_component__WEBPACK_IMPORTED_MODULE_21__["ListComponent"], [_services_test_data_service__WEBPACK_IMPORTED_MODULE_22__["TestDataService"], _services_page_title_service__WEBPACK_IMPORTED_MODULE_23__["PageTitleService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialog"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ListComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-list", _list_component__WEBPACK_IMPORTED_MODULE_21__["ListComponent"], View_ListComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/assets/music-releases/list/list.component.scss.shim.ngstyle.js":
/*!********************************************************************************!*\
  !*** ./src/app/assets/music-releases/list/list.component.scss.shim.ngstyle.js ***!
  \********************************************************************************/
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
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2V0cy9tdXNpYy1yZWxlYXNlcy9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MifQ== */"];



/***/ }),

/***/ "./src/app/assets/music-releases/list/list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/assets/music-releases/list/list.component.ts ***!
  \**************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_page_title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/page-title.service */ "./src/app/services/page-title.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _music_releases_edit_music_releases_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../music-releases-edit/music-releases-edit.component */ "./src/app/assets/music-releases/music-releases-edit/music-releases-edit.component.ts");
/* harmony import */ var src_app_services_test_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/test-data.service */ "./src/app/services/test-data.service.ts");
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_shared/components */ "./src/app/_shared/components/index.ts");
/* harmony import */ var src_app_claims_send_claims_send_claims_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/claims/send-claims/send-claims.component */ "./src/app/claims/send-claims/send-claims.component.ts");
/* harmony import */ var _register_new_release_register_new_release_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../register-new-release/register-new-release.component */ "./src/app/assets/music-releases/register-new-release/register-new-release.component.ts");
/* harmony import */ var _publish_publish_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../publish/publish.component */ "./src/app/assets/music-releases/publish/publish.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../register/register.component */ "./src/app/assets/music-releases/register/register.component.ts");








// import { Animations } from 'src/app/_shared/animations';




var ListComponent = /** @class */ (function () {
    function ListComponent(testData, pageTitle, dialog) {
        this.testData = testData;
        this.pageTitle = pageTitle;
        this.dialog = dialog;
        this.newReleases = [];
        this.gridOptions = {
            onGridReady: function () {
                //   this.gridOptions.api.sizeColumnsToFit();
            },
            rowHeight: 48,
            frameworkComponents: {
                inputRenderer: src_app_shared_components__WEBPACK_IMPORTED_MODULE_7__["MatInputComponent"],
                thing: src_app_shared_components__WEBPACK_IMPORTED_MODULE_7__["MatButtonComponent"]
            }
        };
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.claimsToSend = [];
        this.pageTitle.setTitle('Releases');
        this.entityTypes$ = this.testData.listEntityTypes();
        this.entityList$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (type) { return _this.testData.listEntities(type); }));
        this.selectedEntity$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (id) { return _this.testData.getEntity(_this.selectedType, id); }));
        this.listAll$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (type) { return _this.testData.listAll(type); }));
        this.listAll();
    };
    ListComponent.prototype.countryCellRenderer = function (params) {
        var flag = '<img border=\'0\' width=\'15\' height=\'10\' style=\'margin-bottom: 2px\' src=\'https://www.ag-grid.com/images/flags/gb.png\'>';
        return flag + ' ' + params.value;
        // return this.thing;
    };
    ListComponent.prototype.editBtnCellRenderer = function (params) {
        var btn = '<button class="mat-button mat-raised-button"><span class="mat-button-wrapper">Edit</span><div class="mat-button-ripple mat-ripple"></div><div class="mat-button-focus-overlay"></div></button>';
        return btn;
    };
    ListComponent.prototype.changeEntityType = function (type) {
        this.selectedType = type;
        this.entityList$.next(type);
    };
    ListComponent.prototype.changeEntity = function (id) {
        this.selectedEntity$.next(id);
    };
    ListComponent.prototype.onCellClicked = function (ev) {
        if (ev.colDef.headerName === 'Actions') {
            this.openDialog(ev.data);
        }
    };
    ListComponent.prototype.openDialog = function (ev) {
        var dialogRef = this.dialog.open(_music_releases_edit_music_releases_edit_component__WEBPACK_IMPORTED_MODULE_5__["MusicReleasesEditComponent"], {
            data: ev,
            width: '80%',
            panelClass: 'formFieldWidth380'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    ListComponent.prototype.openAddNewDialog = function (ev) {
        var _this = this;
        var dialogRef = this.dialog.open(_register_new_release_register_new_release_component__WEBPACK_IMPORTED_MODULE_9__["RegisterNewReleaseComponent"], {
            data: 'ev',
            width: '80%',
            panelClass: 'formFieldWidth380'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result !== 'cancel') {
                _this.addItemToGrid(result);
            }
        });
    };
    ListComponent.prototype.addItemToGrid = function (result) {
        var r = { 'type': 'music-release',
            'Title': result.recordingTitle,
            'Artist': result.bandArtistName,
            'Date': result.date,
            'Owner': 'owner',
            'Territory': 'Europe',
            'Type': result.genere,
            'Format': result.format,
            'Catalogue Number': '',
            'Barcode': '',
            'Number of tracks': '1',
            'Distribution': '',
            'Collective': '',
            'Submitted to': '' };
        // this.allItems.push(r);
        // this.gridOptions.api.updateRowData({add: [r]});
        this.gridOptions.api.updateRowData({ add: [r], addIndex: 0 });
        // printResult(res);
    };
    ListComponent.prototype.onSelectionChanged = function (ev) {
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
            selectedRowsString += selectedRow.Title;
            theRow = selectedRow;
        });
        this.claimsToSend = [];
        selectedRows.forEach(function (i) {
            _this.claimsToSend.push({
                'name': i.Title,
                'artist': i.Artist,
                'collective': i.Collective,
                'owner': i.Owner,
                'date': i.Date,
                'status': 'Not Sent'
            });
        });
        if (selectedRows.length >= 6) {
            selectedRowsString += ' - and ' + (selectedRows.length - 6) + ' others';
        }
        document.querySelector('#selectedRows').innerHTML = selectedRowsString;
    };
    ListComponent.prototype.sendToClaim = function (ev) {
        var data = { section: 'releases', data: this.claimsToSend };
        var dialogRef = this.dialog.open(src_app_claims_send_claims_send_claims_component__WEBPACK_IMPORTED_MODULE_8__["SendClaimsComponent"], {
            data: data,
            width: '80%',
            panelClass: 'formFieldWidth380',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    ListComponent.prototype.sendToPublish = function (ev) {
        var data = { section: 'releases', data: this.claimsToSend };
        var dialogRef = this.dialog.open(_publish_publish_component__WEBPACK_IMPORTED_MODULE_10__["PublishComponent"], {
            data: data,
            width: '80%',
            panelClass: 'formFieldWidth380',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    ListComponent.prototype.sendToRegister = function (ev) {
        var data = { section: 'releases', data: this.claimsToSend };
        var dialogRef = this.dialog.open(_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"], {
            data: data,
            width: '80%',
            panelClass: 'formFieldWidth380',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    ListComponent.prototype.listAll = function () {
        var _this = this;
        this.testData.listAll('music-release').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () { return _this.showSpinner = true; }))
            .subscribe(function (res) {
            _this.allItems = res;
            _this.showSpinner = false;
        });
    };
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/assets/music-releases/music-releases-detail/music-releases-detail.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/assets/music-releases/music-releases-detail/music-releases-detail.component.ts ***!
  \************************************************************************************************/
/*! exports provided: MusicReleasesDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicReleasesDetailComponent", function() { return MusicReleasesDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var MusicReleasesDetailComponent = /** @class */ (function () {
    function MusicReleasesDetailComponent() {
    }
    MusicReleasesDetailComponent.prototype.ngOnInit = function () {
    };
    return MusicReleasesDetailComponent;
}());



/***/ }),

/***/ "./src/app/assets/music-releases/music-releases-edit/music-releases-edit.component.ngfactory.js":
/*!******************************************************************************************************!*\
  !*** ./src/app/assets/music-releases/music-releases-edit/music-releases-edit.component.ngfactory.js ***!
  \******************************************************************************************************/
/*! exports provided: RenderType_MusicReleasesEditComponent, View_MusicReleasesEditComponent_0, View_MusicReleasesEditComponent_Host_0, MusicReleasesEditComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_MusicReleasesEditComponent", function() { return RenderType_MusicReleasesEditComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MusicReleasesEditComponent_0", function() { return View_MusicReleasesEditComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MusicReleasesEditComponent_Host_0", function() { return View_MusicReleasesEditComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicReleasesEditComponentNgFactory", function() { return MusicReleasesEditComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/card/typings/index.ngfactory */ "./node_modules/@angular/material/card/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _node_modules_ng_dynamic_forms_ui_material_ui_material_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../node_modules/@ng-dynamic-forms/ui-material/ui-material.ngfactory */ "./node_modules/@ng-dynamic-forms/ui-material/ui-material.ngfactory.js");
/* harmony import */ var _ng_dynamic_forms_ui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-dynamic-forms/ui-material */ "./node_modules/@ng-dynamic-forms/ui-material/fesm5/ui-material.js");
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _music_releases_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./music-releases-edit.component */ "./src/app/assets/music-releases/music-releases-edit/music-releases-edit.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

















var styles_MusicReleasesEditComponent = ["dynamic-material-form[fxLayoutAlign][_ngcontent-%COMP%] { padding:10px; padding-left: 25px;}"];
var RenderType_MusicReleasesEditComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_MusicReleasesEditComponent, data: {} });

function View_MusicReleasesEditComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 26, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 12, "mat-card", [["class", "mat-card"]], [[2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, 0, 10, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 5, "dynamic-material-form", [["fxLayout", "row wrap"], ["fxLayoutAlign", "start start"], ["fxLayoutGap", "40px"]], null, [[null, "blur"], [null, "change"], [null, "focus"], [null, "matEvent"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("blur" === en)) {
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
    } return ad; }, _node_modules_ng_dynamic_forms_ui_material_ui_material_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_DynamicMaterialFormComponent_0"], _node_modules_ng_dynamic_forms_ui_material_ui_material_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_DynamicMaterialFormComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 49152, null, 1, _ng_dynamic_forms_ui_material__WEBPACK_IMPORTED_MODULE_6__["DynamicMaterialFormComponent"], [_ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_7__["DynamicFormService"], _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_7__["DynamicFormLayoutService"]], { formGroup: [0, "formGroup"], formModel: [1, "formModel"], formLayout: [2, "formLayout"] }, { blur: "blur", change: "change", focus: "focus", customEvent: "matEvent" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, { templates: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 1720320, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutGapDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["LayoutGapStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["MediaMarshaller"]], { fxLayoutGap: [0, "fxLayoutGap"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 9, "div", [["class", "align-right mat-dialog-actions"], ["mat-dialog-actions", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 3, "button", [["mat-button", ""], ["mat-dialog-close", "cancel"], ["type", "button"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).dialogRef.close(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).dialogResult) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_14__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 606208, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogClose"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"]], { dialogResult: [0, "dialogResult"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Cancel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 3, "button", [["cdkFocusInitial", ""], ["mat-button", ""], ["type", "button"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).dialogRef.close(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).dialogResult) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](21, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_14__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"]]], { disabled: [0, "disabled"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 606208, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogClose"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"]], { dialogResult: [0, "dialogResult"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Save"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 2, "pre", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](25, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_15__["JsonPipe"], [])], function (_ck, _v) { var _co = _v.component; var currVal_8 = _co.formGroup; _ck(_v, 5, 0, currVal_8); var currVal_9 = _co.formGroup; var currVal_10 = _co.formModel; var currVal_11 = _co.formLayout; _ck(_v, 9, 0, currVal_9, currVal_10, currVal_11); var currVal_12 = "row wrap"; _ck(_v, 11, 0, currVal_12); var currVal_13 = "40px"; _ck(_v, 12, 0, currVal_13); var currVal_14 = "start start"; _ck(_v, 13, 0, currVal_14); var currVal_18 = "cancel"; _ck(_v, 18, 0, currVal_18); var currVal_22 = _co.formGroup.invalid; _ck(_v, 21, 0, currVal_22); var currVal_23 = _co.data.Name; _ck(_v, 22, 0, currVal_23); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._animationMode === "NoopAnimations"); _ck(_v, 1, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).ngClassUntouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).ngClassTouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).ngClassPristine; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).ngClassDirty; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).ngClassValid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).ngClassInvalid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).ngClassPending; _ck(_v, 3, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_15 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).disabled || null); var currVal_16 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17)._animationMode === "NoopAnimations"); var currVal_17 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).ariaLabel || null); _ck(_v, 16, 0, currVal_15, currVal_16, currVal_17); var currVal_19 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 21).disabled || null); var currVal_20 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 21)._animationMode === "NoopAnimations"); var currVal_21 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).ariaLabel || null); _ck(_v, 20, 0, currVal_19, currVal_20, currVal_21); var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 25, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 26).transform(_co.formGroup.value)); _ck(_v, 25, 0, currVal_24); }); }
function View_MusicReleasesEditComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-music-releases-edit", [], null, null, null, View_MusicReleasesEditComponent_0, RenderType_MusicReleasesEditComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _music_releases_edit_component__WEBPACK_IMPORTED_MODULE_16__["MusicReleasesEditComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MAT_DIALOG_DATA"], _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_7__["DynamicFormService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var MusicReleasesEditComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-music-releases-edit", _music_releases_edit_component__WEBPACK_IMPORTED_MODULE_16__["MusicReleasesEditComponent"], View_MusicReleasesEditComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/assets/music-releases/music-releases-edit/music-releases-edit.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/assets/music-releases/music-releases-edit/music-releases-edit.component.ts ***!
  \********************************************************************************************/
/*! exports provided: MusicReleasesEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicReleasesEditComponent", function() { return MusicReleasesEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_forms_formModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_shared/forms/formModel */ "./src/app/assets/music-releases/_shared/forms/formModel.ts");
/* harmony import */ var _shared_forms_form_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_shared/forms/form.layout */ "./src/app/assets/music-releases/_shared/forms/form.layout.ts");





var MusicReleasesEditComponent = /** @class */ (function () {
    function MusicReleasesEditComponent(data, formService) {
        this.data = data;
        this.formService = formService;
        this.formModel = _shared_forms_formModel__WEBPACK_IMPORTED_MODULE_3__["MUSIC_RELEASES_FORM_MODEL"];
        this.formLayout = _shared_forms_form_layout__WEBPACK_IMPORTED_MODULE_4__["FORM_LAYOUT"];
    }
    MusicReleasesEditComponent.prototype.ngOnInit = function () {
        this.formGroup = this.formService.createFormGroup(this.formModel);
        this.formGroup.patchValue(this.data);
    };
    MusicReleasesEditComponent.prototype.onBlur = function ($event) {
        console.log("Material blur event on: " + $event.model.id + ": ", $event);
    };
    MusicReleasesEditComponent.prototype.onChange = function ($event) {
        console.log("Material change event on: " + $event.model.id + ": ", $event);
    };
    MusicReleasesEditComponent.prototype.onFocus = function ($event) {
        console.log("Material focus event on: " + $event.model.id + ": ", $event);
    };
    MusicReleasesEditComponent.prototype.onMatEvent = function ($event) {
        console.log("Material " + $event.type + " event on: " + $event.model.id + ": ", $event);
    };
    return MusicReleasesEditComponent;
}());



/***/ }),

/***/ "./src/app/assets/music-releases/music-releases-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/assets/music-releases/music-releases-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: MusicReleasesRoutingModule, ɵ0, ɵ1, ɵ2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicReleasesRoutingModule", function() { return MusicReleasesRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ2", function() { return ɵ2; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/app/assets/music-releases/index.ts");


var ɵ0 = {
    breadcrumb: ''
}, ɵ1 = {
    breadcrumb: 'Tasks'
}, ɵ2 = {
    breadcrumb: 'List'
};
var routes = [
    { path: '',
        component: _index__WEBPACK_IMPORTED_MODULE_1__["ReleasesComponent"],
        data: ɵ0,
        children: [
            { path: 'tasks', component: _index__WEBPACK_IMPORTED_MODULE_1__["TasksComponent"],
                data: ɵ1
            },
            { path: 'list', component: _index__WEBPACK_IMPORTED_MODULE_1__["ListComponent"],
                data: ɵ2
            },
        ]
    }
];
var MusicReleasesRoutingModule = /** @class */ (function () {
    function MusicReleasesRoutingModule() {
    }
    return MusicReleasesRoutingModule;
}());




/***/ }),

/***/ "./src/app/assets/music-releases/music-releases.component.ngfactory.js":
/*!*****************************************************************************!*\
  !*** ./src/app/assets/music-releases/music-releases.component.ngfactory.js ***!
  \*****************************************************************************/
/*! exports provided: RenderType_ReleasesComponent, View_ReleasesComponent_0, View_ReleasesComponent_Host_0, ReleasesComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ReleasesComponent", function() { return RenderType_ReleasesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ReleasesComponent_0", function() { return View_ReleasesComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ReleasesComponent_Host_0", function() { return View_ReleasesComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleasesComponentNgFactory", function() { return ReleasesComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _music_releases_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./music-releases.component */ "./src/app/assets/music-releases/music-releases.component.ts");
/* harmony import */ var _services_test_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/test-data.service */ "./src/app/services/test-data.service.ts");
/* harmony import */ var _services_page_title_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/page-title.service */ "./src/app/services/page-title.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 















var styles_ReleasesComponent = ["dynamic-material-form[fxLayoutAlign][_ngcontent-%COMP%] { padding:10px; padding-left: 25px;}"];
var RenderType_ReleasesComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_ReleasesComponent, data: { "animation": [{ type: 7, name: "openClose", definitions: [{ type: 0, name: "open", styles: { type: 6, styles: { display: "block", opacity: 1 }, offset: null }, options: undefined }, { type: 0, name: "closed", styles: { type: 6, styles: { height: "0px", opacity: 0.5 }, offset: null }, options: undefined }, { type: 1, expr: "open => closed", animation: [{ type: 4, styles: null, timings: "1s 500ms ease-out" }], options: null }, { type: 1, expr: "closed => open", animation: [{ type: 4, styles: null, timings: "500ms  ease-out" }], options: null }], options: {} }, { type: 7, name: "enterLeaveInOut-2", definitions: [{ type: 1, expr: "* => *", animation: [{ type: 11, selector: ":enter", animation: { type: 6, styles: { opacity: 0 }, offset: null }, options: { optional: true } }, { type: 11, selector: ":enter", animation: { type: 12, timings: "200ms", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 0, transform: "scale(1)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 0.4, transform: "scale(1.01)", offset: 0.3 }, offset: null }, { type: 6, styles: { opacity: 1, transform: "scale(1)", offset: 1 }, offset: null }] }, timings: ".6s ease-in" }] }, options: { optional: true } }, { type: 11, selector: ":leave", animation: { type: 12, timings: "300ms", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 1, transform: "scale(.5)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 0.5, transform: "scale(0)", offset: 0.3 }, offset: null }] }, timings: ".6s ease-out" }] }, options: { optional: true } }], options: null }], options: {} }, { type: 7, name: "enterLeaveInOut-3", definitions: [{ type: 1, expr: "* => *", animation: [{ type: 11, selector: ":enter", animation: { type: 6, styles: { opacity: 0 }, offset: null }, options: { optional: true } }, { type: 11, selector: ":enter", animation: { type: 12, timings: "700ms", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 0, transform: "scale(1)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 0.4, transform: "scale(1.01)", offset: 0.3 }, offset: null }, { type: 6, styles: { opacity: 1, transform: "scale(1)", offset: 1 }, offset: null }] }, timings: ".6s ease-in" }] }, options: { optional: true } }, { type: 11, selector: ":leave", animation: { type: 12, timings: "300ms", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 1, transform: "scale(.5)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 0.5, transform: "scale(0)", offset: 0.3 }, offset: null }] }, timings: ".6s ease-out" }] }, options: { optional: true } }], options: null }], options: {} }, { type: 7, name: "enterLeaveInOut", definitions: [{ type: 1, expr: "* => *", animation: [{ type: 11, selector: ":enter", animation: { type: 6, styles: { opacity: 0 }, offset: null }, options: { optional: true } }, { type: 11, selector: ":enter", animation: { type: 12, timings: "100ms", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 0, transform: "scale(.9)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 0.5, transform: "scale(1.1)", offset: 0.3 }, offset: null }, { type: 6, styles: { opacity: 1, transform: "scale(1)", offset: 1 }, offset: null }] }, timings: ".6s ease-in" }] }, options: { optional: true } }, { type: 11, selector: ":leave", animation: { type: 12, timings: "300ms", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 1, transform: "scale(.5)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 0.5, transform: "scale(0)", offset: 0.3 }, offset: null }] }, timings: ".6s ease-out" }] }, options: { optional: true } }], options: null }], options: {} }, { type: 7, name: "enterLeaveUpDwn2", definitions: [{ type: 1, expr: "* => *", animation: [{ type: 11, selector: ":enter", animation: { type: 6, styles: { opacity: 0 }, offset: null }, options: { optional: true } }, { type: 11, selector: ":enter", animation: { type: 12, timings: "100ms", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 0, transform: "translateY(-1%)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 0.5, transform: "translateY(15px)", offset: 0.3 }, offset: null }, { type: 6, styles: { opacity: 1, transform: "translateY(0)", offset: 1 }, offset: null }] }, timings: ".6s ease-in" }] }, options: { optional: true } }, { type: 11, selector: ":leave", animation: { type: 12, timings: "300ms", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 1, transform: "translateY(0)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 0.5, transform: "translateY(15px)", offset: 0.3 }, offset: null }, { type: 6, styles: { opacity: 0, transform: "translateY(-5%)", offset: 1 }, offset: null }] }, timings: ".6s ease-out" }] }, options: { optional: true } }], options: null }], options: {} }, { type: 7, name: "enterLeaveUpDwn", definitions: [{ type: 1, expr: "* => *", animation: [{ type: 11, selector: ":enter", animation: { type: 6, styles: { opacity: 0 }, offset: null }, options: { optional: true } }, { type: 11, selector: ":enter", animation: { type: 12, timings: "300ms", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 0, transform: "translateY(-5%)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 0.5, transform: "translateY(35px)", offset: 0.3 }, offset: null }, { type: 6, styles: { opacity: 1, transform: "translateY(0)", offset: 1 }, offset: null }] }, timings: ".6s ease-in" }] }, options: { optional: true } }, { type: 11, selector: ":leave", animation: { type: 12, timings: "300ms", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 1, transform: "translateY(0)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 0.5, transform: "translateY(35px)", offset: 0.3 }, offset: null }, { type: 6, styles: { opacity: 0, transform: "translateY(-75%)", offset: 1 }, offset: null }] }, timings: ".6s ease-out" }] }, options: { optional: true } }], options: null }], options: {} }, { type: 7, name: "enterAnimateUpDwn", definitions: [{ type: 0, name: "void", styles: { type: 6, styles: { opacity: 0, transform: "translate(0, -10px)" }, offset: null }, options: undefined }, { type: 1, expr: "* => *", animation: [{ type: 4, styles: null, timings: ".8s cubic-bezier(0.175, 0.885, 0.32, 1.275)" }], options: null }], options: {} }, { type: 7, name: "enterAnimateInOut", definitions: [{ type: 0, name: "void", styles: { type: 6, styles: { opacity: 0, transform: "scale(.3)" }, offset: null }, options: undefined }, { type: 1, expr: "* => *", animation: [{ type: 4, styles: null, timings: "1s cubic-bezier(0.175, 0.885, 0.32, 1.275)" }], options: null }], options: {} }, { type: 7, name: "validationMsg", definitions: [{ type: 0, name: "void", styles: { type: 6, styles: { opacity: 0, transform: "translate(0, 20px)" }, offset: null }, options: undefined }, { type: 1, expr: "* => *", animation: [{ type: 4, styles: null, timings: "1s cubic-bezier(0.175, 0.885, 0.32, 1.275)" }], options: null }], options: {} }, { type: 7, name: "enterAnimate", definitions: [{ type: 0, name: "true", styles: { type: 6, styles: { opacity: 1, transform: "translate(200px , 0)" }, offset: null }, options: undefined }, { type: 0, name: "void", styles: { type: 6, styles: { opacity: 0, transform: "translate(200px , 0)" }, offset: null }, options: undefined }, { type: 1, expr: "* => void", animation: [{ type: 4, styles: null, timings: "300ms ease-in" }], options: null }, { type: 1, expr: "void => *", animation: [{ type: 4, styles: null, timings: "800ms 0.3s ease-out" }], options: null }], options: {} }, { type: 7, name: "isSubmitted", definitions: [{ type: 0, name: "true", styles: { type: 6, styles: { transform: "scale(0.4)" }, offset: null }, options: undefined }, { type: 1, expr: "1 => 0", animation: [{ type: 4, styles: null, timings: "1.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)" }], options: null }, { type: 1, expr: "0 => 1", animation: { type: 4, styles: null, timings: "1.5s cubic-bezier(0.215, 0.610, 0.355, 2.000)" }, options: null }], options: {} }, { type: 7, name: "zoomInOut", definitions: [{ type: 0, name: "small", styles: { type: 6, styles: { transform: "translateY(0)", opacity: 1 }, offset: null }, options: undefined }, { type: 0, name: "large", styles: { type: 6, styles: { transform: "scale(0.95)", opacity: 0 }, offset: null }, options: undefined }, { type: 1, expr: "1 => 0", animation: [{ type: 4, styles: null, timings: "1.5s cubic-bezier(0.215, 0.610, 0.355, 2.000)" }], options: null }, { type: 1, expr: "0 => 1", animation: { type: 4, styles: null, timings: "1.5s cubic-bezier(0.215, 0.610, 0.355, 1.600)" }, options: null }], options: {} }, { type: 7, name: "dropInOut", definitions: [{ type: 0, name: "small", styles: { type: 6, styles: { transform: "scale(0)" }, offset: null }, options: undefined }, { type: 0, name: "large", styles: { type: 6, styles: { transform: "scale(1.5)" }, offset: null }, options: undefined }, { type: 1, expr: "small => large", animation: { type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 0, transform: "translateY(-75%)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 1, transform: "translateY(0)", offset: 1 }, offset: null }] }, timings: "1.5s cubic-bezier(0.215, 0.610, 0.355, 2.000)" }, options: null }, { type: 1, expr: "large => small", animation: { type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 0, transform: "translateY(0)", offset: 1 }, offset: null }] }, timings: "1.5s cubic-bezier(0.215, 0.610, 0.355, 2.000)" }, options: null }], options: {} }, { type: 7, name: "dropInOut2", definitions: [{ type: 0, name: "small", styles: { type: 6, styles: { transform: "scale(1)" }, offset: null }, options: undefined }, { type: 0, name: "large", styles: { type: 6, styles: { transform: "scale(1.5)" }, offset: null }, options: undefined }, { type: 1, expr: "small <=> large", animation: { type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 0, transform: "translateY(75%)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 1, transform: "translateY(0)", offset: 1 }, offset: null }] }, timings: "1.5s cubic-bezier(0.215, 0.610, 0.355, 2.000)" }, options: null }], options: {} }] } });

function View_ReleasesComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 26, "section", [["class", "mt-3"], ["fxFlexFill", ""], ["fxLayout", "row wrap"], ["fxLayoutAlign", "start start"], ["fxLayoutGap", "40px"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 1720320, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutGapDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutGapStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutGap: [0, "fxLayoutGap"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexFillDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexFillStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 10, "button", [["mat-button", ""], ["mat-raised-button", ""], ["routerLinkActive", "active"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 16384, [[1, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](8, 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"]]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MAT_ICON_LOCATION"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["forward"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" List "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 10, "button", [["mat-button", ""], ["mat-raised-button", ""], ["routerLinkActive", "active"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 16384, [[3, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](19, 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](20, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"]]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 3, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 4, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](24, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MAT_ICON_LOCATION"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["forward"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" Tasks "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](28, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_8__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { var currVal_0 = "row wrap"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "40px"; _ck(_v, 2, 0, currVal_1); var currVal_2 = "start start"; _ck(_v, 3, 0, currVal_2); var currVal_5 = _ck(_v, 8, 0, "list"); _ck(_v, 7, 0, currVal_5); var currVal_6 = "active"; _ck(_v, 9, 0, currVal_6); _ck(_v, 13, 0); var currVal_11 = _ck(_v, 19, 0, "tasks"); _ck(_v, 18, 0, currVal_11); var currVal_12 = "active"; _ck(_v, 20, 0, currVal_12); _ck(_v, 24, 0); _ck(_v, 28, 0); }, function (_ck, _v) { var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).disabled || null); var currVal_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6)._animationMode === "NoopAnimations"); _ck(_v, 5, 0, currVal_3, currVal_4); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).inline; var currVal_8 = (((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).color !== "warn")); _ck(_v, 12, 0, currVal_7, currVal_8); var currVal_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).disabled || null); var currVal_10 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17)._animationMode === "NoopAnimations"); _ck(_v, 16, 0, currVal_9, currVal_10); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).inline; var currVal_14 = (((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).color !== "warn")); _ck(_v, 23, 0, currVal_13, currVal_14); }); }
function View_ReleasesComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-index", [], null, null, null, View_ReleasesComponent_0, RenderType_ReleasesComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _music_releases_component__WEBPACK_IMPORTED_MODULE_11__["ReleasesComponent"], [_services_test_data_service__WEBPACK_IMPORTED_MODULE_12__["TestDataService"], _services_page_title_service__WEBPACK_IMPORTED_MODULE_13__["PageTitleService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ReleasesComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-index", _music_releases_component__WEBPACK_IMPORTED_MODULE_11__["ReleasesComponent"], View_ReleasesComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/assets/music-releases/music-releases.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/assets/music-releases/music-releases.component.ts ***!
  \*******************************************************************/
/*! exports provided: ReleasesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleasesComponent", function() { return ReleasesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_page_title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/page-title.service */ "./src/app/services/page-title.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _music_releases_edit_music_releases_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./music-releases-edit/music-releases-edit.component */ "./src/app/assets/music-releases/music-releases-edit/music-releases-edit.component.ts");
/* harmony import */ var src_app_services_test_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/test-data.service */ "./src/app/services/test-data.service.ts");
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_shared/components */ "./src/app/_shared/components/index.ts");
/* harmony import */ var src_app_claims_send_claims_send_claims_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/claims/send-claims/send-claims.component */ "./src/app/claims/send-claims/send-claims.component.ts");
/* harmony import */ var _register_new_release_register_new_release_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register-new-release/register-new-release.component */ "./src/app/assets/music-releases/register-new-release/register-new-release.component.ts");
/* harmony import */ var _publish_publish_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./publish/publish.component */ "./src/app/assets/music-releases/publish/publish.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register/register.component */ "./src/app/assets/music-releases/register/register.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");













var ReleasesComponent = /** @class */ (function () {
    function ReleasesComponent(testData, pageTitle, dialog, route) {
        this.testData = testData;
        this.pageTitle = pageTitle;
        this.dialog = dialog;
        this.route = route;
        this.newReleases = []; // TODO  Type Me
        this.routeData = this.route.snapshot.data;
        this.gridOptions = {
            onGridReady: function () {
                //   this.gridOptions.api.sizeColumnsToFit();
            },
            rowHeight: 48,
            frameworkComponents: {
                inputRenderer: src_app_shared_components__WEBPACK_IMPORTED_MODULE_7__["MatInputComponent"],
                thing: src_app_shared_components__WEBPACK_IMPORTED_MODULE_7__["MatButtonComponent"]
            }
        };
    }
    ReleasesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.claimsToSend = [];
        this.pageTitle.setTitle(this.routeData.pageTitle);
        this.entityTypes$ = this.testData.listEntityTypes();
        this.entityList$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (type) { return _this.testData.listEntities(type); }));
        this.selectedEntity$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (id) { return _this.testData.getEntity(_this.selectedType, id); }));
        this.listAll$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (type) { return _this.testData.listAll(type); }));
        this.listAll();
    };
    ReleasesComponent.prototype.countryCellRenderer = function (params) {
        var flag = '<img border=\'0\' width=\'15\' height=\'10\' style=\'margin-bottom: 2px\' src=\'https://www.ag-grid.com/images/flags/gb.png\'>';
        return flag + ' ' + params.value;
        // return this.thing;
    };
    ReleasesComponent.prototype.editBtnCellRenderer = function (params) {
        var btn = '<button class="mat-button mat-raised-button"><span class="mat-button-wrapper">Edit</span><div class="mat-button-ripple mat-ripple"></div><div class="mat-button-focus-overlay"></div></button>';
        return btn;
    };
    ReleasesComponent.prototype.changeEntityType = function (type) {
        this.selectedType = type;
        this.entityList$.next(type);
    };
    ReleasesComponent.prototype.changeEntity = function (id) {
        this.selectedEntity$.next(id);
    };
    ReleasesComponent.prototype.onCellClicked = function (ev) {
        if (ev.colDef.headerName === 'Actions') {
            this.openDialog(ev.data);
        }
    };
    ReleasesComponent.prototype.openDialog = function (ev) {
        var dialogRef = this.dialog.open(_music_releases_edit_music_releases_edit_component__WEBPACK_IMPORTED_MODULE_5__["MusicReleasesEditComponent"], {
            data: ev,
            width: '80%',
            panelClass: 'formFieldWidth380'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    ReleasesComponent.prototype.openAddNewDialog = function (ev) {
        var _this = this;
        var dialogRef = this.dialog.open(_register_new_release_register_new_release_component__WEBPACK_IMPORTED_MODULE_9__["RegisterNewReleaseComponent"], {
            data: 'ev',
            width: '80%',
            panelClass: 'formFieldWidth380'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result !== 'cancel') {
                _this.addItemToGrid(result);
            }
        });
    };
    ReleasesComponent.prototype.addItemToGrid = function (result) {
        var r = {
            'type': 'music-release',
            'Title': result.recordingTitle,
            'Artist': result.bandArtistName,
            'Date': result.date,
            'Owner': 'owner',
            'Territory': 'Europe',
            'Type': result.genere,
            'Format': result.format,
            'Catalogue Number': '',
            'Barcode': '',
            'Number of tracks': '1',
            'Distribution': '',
            'Collective': '',
            'Submitted to': ''
        };
        // this.allItems.push(r);
        // this.gridOptions.api.updateRowData({add: [r]});
        this.gridOptions.api.updateRowData({ add: [r], addIndex: 0 });
        // printResult(res);
    };
    ReleasesComponent.prototype.onSelectionChanged = function (ev) {
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
            selectedRowsString += selectedRow.Title;
            theRow = selectedRow;
        });
        this.claimsToSend = [];
        selectedRows.forEach(function (i) {
            _this.claimsToSend.push({
                'name': i.Title,
                'artist': i.Artist,
                'collective': i.Collective,
                'owner': i.Owner,
                'date': i.Date,
                'status': 'Not Sent'
            });
        });
        if (selectedRows.length >= 6) {
            selectedRowsString += ' - and ' + (selectedRows.length - 6) + ' others';
        }
        document.querySelector('#selectedRows').innerHTML = selectedRowsString;
    };
    ReleasesComponent.prototype.sendToClaim = function (ev) {
        var data = { section: 'releases', data: this.claimsToSend };
        var dialogRef = this.dialog.open(src_app_claims_send_claims_send_claims_component__WEBPACK_IMPORTED_MODULE_8__["SendClaimsComponent"], {
            data: data,
            width: '80%',
            panelClass: 'formFieldWidth380',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    ReleasesComponent.prototype.sendToPublish = function (ev) {
        var data = { section: 'releases', data: this.claimsToSend };
        var dialogRef = this.dialog.open(_publish_publish_component__WEBPACK_IMPORTED_MODULE_10__["PublishComponent"], {
            data: data,
            width: '80%',
            panelClass: 'formFieldWidth380',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    ReleasesComponent.prototype.sendToRegister = function (ev) {
        var data = { section: 'releases', data: this.claimsToSend };
        var dialogRef = this.dialog.open(_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"], {
            data: data,
            width: '80%',
            panelClass: 'formFieldWidth380',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    ReleasesComponent.prototype.listAll = function () {
        var _this = this;
        this.testData.listAll('music-release').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () { return _this.showSpinner = true; }))
            .subscribe(function (res) {
            _this.allItems = res;
            _this.showSpinner = false;
        });
    };
    return ReleasesComponent;
}());



/***/ }),

/***/ "./src/app/assets/music-releases/music-releases.module.ngfactory.js":
/*!**************************************************************************!*\
  !*** ./src/app/assets/music-releases/music-releases.module.ngfactory.js ***!
  \**************************************************************************/
/*! exports provided: MusicReleasesModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicReleasesModuleNgFactory", function() { return MusicReleasesModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _music_releases_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./music-releases.module */ "./src/app/assets/music-releases/music-releases.module.ts");
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
/* harmony import */ var _music_releases_component_ngfactory__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./music-releases.component.ngfactory */ "./src/app/assets/music-releases/music-releases.component.ngfactory.js");
/* harmony import */ var _tasks_tasks_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./tasks/tasks.component.ngfactory */ "./src/app/assets/music-releases/tasks/tasks.component.ngfactory.js");
/* harmony import */ var _list_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./list/list.component.ngfactory */ "./src/app/assets/music-releases/list/list.component.ngfactory.js");
/* harmony import */ var _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/snack-bar/typings/index.ngfactory */ "./node_modules/@angular/material/snack-bar/typings/index.ngfactory.js");
/* harmony import */ var _register_new_release_register_new_release_component_ngfactory__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./register-new-release/register-new-release.component.ngfactory */ "./src/app/assets/music-releases/register-new-release/register-new-release.component.ngfactory.js");
/* harmony import */ var _publish_publish_component_ngfactory__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./publish/publish.component.ngfactory */ "./src/app/assets/music-releases/publish/publish.component.ngfactory.js");
/* harmony import */ var _register_register_component_ngfactory__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./register/register.component.ngfactory */ "./src/app/assets/music-releases/register/register.component.ngfactory.js");
/* harmony import */ var _music_releases_edit_music_releases_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./music-releases-edit/music-releases-edit.component.ngfactory */ "./src/app/assets/music-releases/music-releases-edit/music-releases-edit.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm5/observers.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");
/* harmony import */ var _shared_services_help_text_service__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../../_shared/services/help-text.service */ "./src/app/_shared/services/help-text.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../../_shared/services/message.service */ "./src/app/_shared/services/message.service.ts");
/* harmony import */ var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../../_shared/services/config.service */ "./src/app/_shared/services/config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm5/text-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var ag_grid_angular_dist_aggrid_module__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ag-grid-angular/dist/aggrid.module */ "./node_modules/ag-grid-angular/dist/aggrid.module.js");
/* harmony import */ var ag_grid_angular_dist_aggrid_module__WEBPACK_IMPORTED_MODULE_73___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular_dist_aggrid_module__WEBPACK_IMPORTED_MODULE_73__);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/esm5/extended.es5.js");
/* harmony import */ var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! @angular/flex-layout/grid */ "./node_modules/@angular/flex-layout/esm5/grid.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_80___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_80__);
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm5/core.js");
/* harmony import */ var _ng_dynamic_forms_ui_material__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! @ng-dynamic-forms/ui-material */ "./node_modules/@ng-dynamic-forms/ui-material/fesm5/ui-material.js");
/* harmony import */ var _ngx_formly_material_form_field__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! @ngx-formly/material/form-field */ "./node_modules/@ngx-formly/material/fesm5/ngx-formly-material-form-field.js");
/* harmony import */ var _ngx_formly_material_datepicker__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! @ngx-formly/material/datepicker */ "./node_modules/@ngx-formly/material/fesm5/ngx-formly-material-datepicker.js");
/* harmony import */ var _shared_ui_form_helpers_validations_messages__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ../../_shared/ui-form/helpers/validations-messages */ "./src/app/_shared/ui-form/helpers/validations-messages.ts");
/* harmony import */ var _shared_ui_form_wrappers_panel_wrapper_component__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ../../_shared/ui-form/wrappers/panel-wrapper.component */ "./src/app/_shared/ui-form/wrappers/panel-wrapper.component.ts");
/* harmony import */ var _shared_ui_form_types_video_viewer_component__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ../../_shared/ui-form/types/video-viewer.component */ "./src/app/_shared/ui-form/types/video-viewer.component.ts");
/* harmony import */ var _shared_ui_form_types_visibility_component__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ../../_shared/ui-form/types/visibility.component */ "./src/app/_shared/ui-form/types/visibility.component.ts");
/* harmony import */ var _shared_ui_form_types_playlists_component__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ../../_shared/ui-form/types/playlists.component */ "./src/app/_shared/ui-form/types/playlists.component.ts");
/* harmony import */ var _shared_ui_form_types_tags_component__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ../../_shared/ui-form/types/tags.component */ "./src/app/_shared/ui-form/types/tags.component.ts");
/* harmony import */ var _shared_ui_form_types_countries_component__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ../../_shared/ui-form/types/countries.component */ "./src/app/_shared/ui-form/types/countries.component.ts");
/* harmony import */ var _shared_ui_form_types_money_component__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ../../_shared/ui-form/types/money.component */ "./src/app/_shared/ui-form/types/money.component.ts");
/* harmony import */ var _shared_ui_form_types_percentage_component__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ../../_shared/ui-form/types/percentage.component */ "./src/app/_shared/ui-form/types/percentage.component.ts");
/* harmony import */ var _shared_ui_form_types_typeahead_component__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ../../_shared/ui-form/types/typeahead.component */ "./src/app/_shared/ui-form/types/typeahead.component.ts");
/* harmony import */ var _shared_ui_form_helpers_validators__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ../../_shared/ui-form/helpers/validators */ "./src/app/_shared/ui-form/helpers/validators.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select-ng-select.js");
/* harmony import */ var _shared_ui_form_ui_form_module__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ../../_shared/ui-form/ui-form.module */ "./src/app/_shared/ui-form/ui-form.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ../../_shared/shared.module */ "./src/app/_shared/shared.module.ts");
/* harmony import */ var _music_releases_routing_module__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./music-releases-routing.module */ "./src/app/assets/music-releases/music-releases-routing.module.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! @angular/cdk/accordion */ "./node_modules/@angular/cdk/esm5/accordion.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! ../../app-material/app-material.module */ "./src/app/app-material/app-material.module.ts");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _music_releases_component__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(/*! ./music-releases.component */ "./src/app/assets/music-releases/music-releases.component.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/assets/music-releases/tasks/tasks.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(/*! ./list/list.component */ "./src/app/assets/music-releases/list/list.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




















































































































var MusicReleasesModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_music_releases_module__WEBPACK_IMPORTED_MODULE_1__["MusicReleasesModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["MatDialogContainerNgFactory"], _node_modules_angular_material_tooltip_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["TooltipComponentNgFactory"], _node_modules_angular_material_datepicker_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerContentNgFactory"], _node_modules_angular_material_datepicker_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MatCalendarHeaderNgFactory"], _node_modules_ng_dynamic_forms_ui_material_ui_material_ngfactory__WEBPACK_IMPORTED_MODULE_6__["DynamicMaterialCheckboxComponentNgFactory"], _node_modules_ng_dynamic_forms_ui_material_ui_material_ngfactory__WEBPACK_IMPORTED_MODULE_6__["DynamicMaterialChipsComponentNgFactory"], _node_modules_ng_dynamic_forms_ui_material_ui_material_ngfactory__WEBPACK_IMPORTED_MODULE_6__["DynamicMaterialDatePickerComponentNgFactory"], _node_modules_ng_dynamic_forms_ui_material_ui_material_ngfactory__WEBPACK_IMPORTED_MODULE_6__["DynamicMaterialFormArrayComponentNgFactory"], _node_modules_ng_dynamic_forms_ui_material_ui_material_ngfactory__WEBPACK_IMPORTED_MODULE_6__["DynamicMaterialFormGroupComponentNgFactory"], _node_modules_ng_dynamic_forms_ui_material_ui_material_ngfactory__WEBPACK_IMPORTED_MODULE_6__["DynamicMaterialInputComponentNgFactory"], _node_modules_ng_dynamic_forms_ui_material_ui_material_ngfactory__WEBPACK_IMPORTED_MODULE_6__["DynamicMaterialRadioGroupComponentNgFactory"], _node_modules_ng_dynamic_forms_ui_material_ui_material_ngfactory__WEBPACK_IMPORTED_MODULE_6__["DynamicMaterialSelectComponentNgFactory"], _node_modules_ng_dynamic_forms_ui_material_ui_material_ngfactory__WEBPACK_IMPORTED_MODULE_6__["DynamicMaterialSlideToggleComponentNgFactory"], _node_modules_ng_dynamic_forms_ui_material_ui_material_ngfactory__WEBPACK_IMPORTED_MODULE_6__["DynamicMaterialSliderComponentNgFactory"], _node_modules_ng_dynamic_forms_ui_material_ui_material_ngfactory__WEBPACK_IMPORTED_MODULE_6__["DynamicMaterialTextAreaComponentNgFactory"], _node_modules_ngx_formly_core_ngx_formly_core_ngfactory__WEBPACK_IMPORTED_MODULE_7__["ɵbNgFactory"], _node_modules_ngx_formly_core_ngx_formly_core_ngfactory__WEBPACK_IMPORTED_MODULE_7__["ɵdNgFactory"], _node_modules_ngx_formly_material_form_field_ngx_formly_material_form_field_ngfactory__WEBPACK_IMPORTED_MODULE_8__["ɵaNgFactory"], _node_modules_ngx_formly_material_datepicker_ngx_formly_material_datepicker_ngfactory__WEBPACK_IMPORTED_MODULE_9__["ɵaNgFactory"], _shared_ui_form_wrappers_panel_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["PanelWrapperComponentNgFactory"], _shared_ui_form_types_video_viewer_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["FormlyFieldVideoViewerNgFactory"], _shared_ui_form_types_visibility_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["FieldInputVisibilityComponentNgFactory"], _shared_ui_form_types_playlists_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["FieldInputPlaylistComponentNgFactory"], _shared_ui_form_types_tags_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["SelectTagsComponentNgFactory"], _shared_ui_form_types_countries_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["FieldCountriesComponentNgFactory"], _shared_ui_form_types_money_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["FormlyFieldInputMoneyNgFactory"], _shared_ui_form_types_percentage_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["FormlyFieldInputPercentageNgFactory"], _shared_ui_form_types_typeahead_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__["FormlyFieldTypeaheadNgFactory"], _shared_components_material_mat_input_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["MatInputComponentNgFactory"], _shared_components_material_mat_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__["MatButtonComponentNgFactory"], _claims_send_claims_send_claims_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__["SendClaimsComponentNgFactory"], _claims_claims_edit_claims_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__["ClaimsEditComponentNgFactory"], _shared_form_controls_password_input_dynamic_dynamic_password_input_dynamic_password_input_component_ngfactory__WEBPACK_IMPORTED_MODULE_23__["DynamicPasswordInputComponentNgFactory"], _music_releases_component_ngfactory__WEBPACK_IMPORTED_MODULE_24__["ReleasesComponentNgFactory"], _tasks_tasks_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__["TasksComponentNgFactory"], _list_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_26__["ListComponentNgFactory"], _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarContainerNgFactory"], _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_27__["SimpleSnackBarNgFactory"], _register_new_release_register_new_release_component_ngfactory__WEBPACK_IMPORTED_MODULE_28__["RegisterNewReleaseComponentNgFactory"], _publish_publish_component_ngfactory__WEBPACK_IMPORTED_MODULE_29__["PublishComponentNgFactory"], _register_register_component_ngfactory__WEBPACK_IMPORTED_MODULE_30__["RegisterComponentNgFactory"], _music_releases_edit_music_releases_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_31__["MusicReleasesEditComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_32__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_32__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_33__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_33__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_32__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_33__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_33__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_33__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_33__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_33__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_33__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_33__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_33__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_33__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_33__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_33__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_33__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_33__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_33__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_33__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_33__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_33__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_33__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_33__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_33__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_33__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_33__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_34__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_34__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_34__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_34__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_36__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_32__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__["ɵc"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__["ɵd"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_menu__WEBPACK_IMPORTED_MODULE_37__["MAT_MENU_SCROLL_STRATEGY"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_37__["ɵb23"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_38__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_38__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_39__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_39__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_select__WEBPACK_IMPORTED_MODULE_40__["MAT_SELECT_SCROLL_STRATEGY"], _angular_material_select__WEBPACK_IMPORTED_MODULE_40__["MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_41__["HAMMER_GESTURE_CONFIG"], _angular_material_core__WEBPACK_IMPORTED_MODULE_39__["GestureConfig"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_39__["MAT_HAMMER_OPTIONS"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_39__["MatCommonModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_42__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_42__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_42__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_42__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_32__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_42__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_42__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_42__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_43__["MAT_TOOLTIP_SCROLL_STRATEGY"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_43__["MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_44__["FocusMonitor"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_44__["FocusMonitor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_45__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_46__["CdkTreeNodeDef"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_46__["CdkTreeNodeDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p0_1) { return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_47__["removeStyles"](p0_0, p0_1)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_32__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_48__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_48__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_49__["MatDatepickerIntl"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_49__["MatDatepickerIntl"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_49__["MAT_DATEPICKER_SCROLL_STRATEGY"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_49__["MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_50__["FormlyFormBuilder"], _ngx_formly_core__WEBPACK_IMPORTED_MODULE_50__["FormlyFormBuilder"], [_ngx_formly_core__WEBPACK_IMPORTED_MODULE_50__["FormlyConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_39__["DateAdapter"], _angular_material_core__WEBPACK_IMPORTED_MODULE_39__["NativeDateAdapter"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_39__["MAT_DATE_LOCALE"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_45__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_32__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_32__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["LowerCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_services_help_text_service__WEBPACK_IMPORTED_MODULE_51__["HelpTextService"], _shared_services_help_text_service__WEBPACK_IMPORTED_MODULE_51__["HelpTextService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_33__["HttpClient"], _shared_services_message_service__WEBPACK_IMPORTED_MODULE_52__["MessageService"], _shared_services_config_service__WEBPACK_IMPORTED_MODULE_53__["AppConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_54__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_55__["TranslateService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_56__["MatStepperIntl"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_56__["MAT_STEPPER_INTL_PROVIDER_FACTORY"], [[3, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_56__["MatStepperIntl"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_32__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_33__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_33__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_33__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_33__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_34__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_34__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_34__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_34__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_34__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_34__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_54__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_54__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_54__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_54__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_36__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_36__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_39__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_39__["MatCommonModule"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_39__["MATERIAL_SANITY_CHECKS"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_41__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_card__WEBPACK_IMPORTED_MODULE_57__["MatCardModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_57__["MatCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_45__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_45__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_39__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_39__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_58__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_58__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_59__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_59__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_37__["_MatMenuDirectivesModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_37__["_MatMenuDirectivesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_37__["MatMenuModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_37__["MatMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_60__["MatButtonToggleModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_60__["MatButtonToggleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_61__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_61__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_38__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_38__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_62__["_MatCheckboxRequiredValidatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_62__["_MatCheckboxRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_62__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_62__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_63__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_63__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_64__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_64__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_65__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_65__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_66__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_66__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_67__["MatProgressSpinnerModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_67__["MatProgressSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_radio__WEBPACK_IMPORTED_MODULE_68__["MatRadioModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_68__["MatRadioModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_39__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_39__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_39__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_39__["MatOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_select__WEBPACK_IMPORTED_MODULE_40__["MatSelectModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_40__["MatSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slider__WEBPACK_IMPORTED_MODULE_69__["MatSliderModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_69__["MatSliderModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_42__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_42__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_44__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_44__["A11yModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_43__["MatTooltipModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_43__["MatTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_39__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_39__["MatLineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_divider__WEBPACK_IMPORTED_MODULE_70__["MatDividerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_70__["MatDividerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_list__WEBPACK_IMPORTED_MODULE_71__["MatListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_71__["MatListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_46__["CdkTreeModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_46__["CdkTreeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tree__WEBPACK_IMPORTED_MODULE_72__["MatTreeModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_72__["MatTreeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ag_grid_angular_dist_aggrid_module__WEBPACK_IMPORTED_MODULE_73__["AgGridModule"], ag_grid_angular_dist_aggrid_module__WEBPACK_IMPORTED_MODULE_73__["AgGridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_47__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_47__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_74__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_74__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_75__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_75__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_76__["GridModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_76__["GridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_77__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_77__["FlexLayoutModule"], [[2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_47__["SERVER_TOKEN"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_48__["MatAutocompleteModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_48__["MatAutocompleteModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_chips__WEBPACK_IMPORTED_MODULE_78__["MatChipsModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_78__["MatChipsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_49__["MatDatepickerModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_49__["MatDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_79__["_MatSlideToggleRequiredValidatorModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_79__["_MatSlideToggleRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_79__["MatSlideToggleModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_79__["MatSlideToggleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular2_text_mask__WEBPACK_IMPORTED_MODULE_80__["TextMaskModule"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_80__["TextMaskModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_81__["DynamicFormsCoreModule"], _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_81__["DynamicFormsCoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_dynamic_forms_ui_material__WEBPACK_IMPORTED_MODULE_82__["DynamicFormsMaterialUIModule"], _ng_dynamic_forms_ui_material__WEBPACK_IMPORTED_MODULE_82__["DynamicFormsMaterialUIModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_50__["FormlyConfig"], _ngx_formly_core__WEBPACK_IMPORTED_MODULE_50__["FormlyConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_50__["FORMLY_CONFIG"], function (p2_0, p4_0) { return [{ wrappers: [{ name: "form-field", component: _ngx_formly_material_form_field__WEBPACK_IMPORTED_MODULE_83__["ɵa"] }] }, { types: [{ name: "datepicker", component: _ngx_formly_material_datepicker__WEBPACK_IMPORTED_MODULE_84__["ɵa"], wrappers: ["form-field"] }] }, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_50__["ɵa"](p2_0), { validationMessages: [{ name: "required", message: "err 12: This field is required" }, { name: "minlength", message: _shared_ui_form_helpers_validations_messages__WEBPACK_IMPORTED_MODULE_85__["minlengthValidationMessage"] }, { name: "maxlength", message: _shared_ui_form_helpers_validations_messages__WEBPACK_IMPORTED_MODULE_85__["maxlengthValidationMessage"] }, { name: "min", message: _shared_ui_form_helpers_validations_messages__WEBPACK_IMPORTED_MODULE_85__["minValidationMessage"] }, { name: "max", message: _shared_ui_form_helpers_validations_messages__WEBPACK_IMPORTED_MODULE_85__["maxValidationMessage"] }, { name: "passwordMatchValidation", message: _shared_ui_form_helpers_validations_messages__WEBPACK_IMPORTED_MODULE_85__["passwordMatchValidationMessage"] }, { name: "maximumNumValidation", message: _shared_ui_form_helpers_validations_messages__WEBPACK_IMPORTED_MODULE_85__["maximumNumValidationMessage"] }, { name: "PasswordStrengthValidation", message: _shared_ui_form_helpers_validations_messages__WEBPACK_IMPORTED_MODULE_85__["PasswordStrengthValidationMessage"] }], wrappers: [{ name: "panel", component: _shared_ui_form_wrappers_panel_wrapper_component__WEBPACK_IMPORTED_MODULE_86__["PanelWrapperComponent"] }], types: [{ name: "videoviewer", component: _shared_ui_form_types_video_viewer_component__WEBPACK_IMPORTED_MODULE_87__["FormlyFieldVideoViewer"] }, { name: "visibility", component: _shared_ui_form_types_visibility_component__WEBPACK_IMPORTED_MODULE_88__["FieldInputVisibilityComponent"] }, { name: "playlist", component: _shared_ui_form_types_playlists_component__WEBPACK_IMPORTED_MODULE_89__["FieldInputPlaylistComponent"] }, { name: "tags", component: _shared_ui_form_types_tags_component__WEBPACK_IMPORTED_MODULE_90__["SelectTagsComponent"] }, { name: "countries", component: _shared_ui_form_types_countries_component__WEBPACK_IMPORTED_MODULE_91__["FieldCountriesComponent"] }, { name: "money", component: _shared_ui_form_types_money_component__WEBPACK_IMPORTED_MODULE_92__["FormlyFieldInputMoney"], defaultOptions: { expressionProperties: {}, defaultValue: 5903, templateOptions: { placeholder: "hello", disabled: false } } }, { name: "percentage", component: _shared_ui_form_types_percentage_component__WEBPACK_IMPORTED_MODULE_93__["FormlyFieldInputPercentage"], defaultOptions: { expressionProperties: {}, defaultValue: 0, templateOptions: { placeholder: "hello", disabled: false } } }, { name: "typeahead", component: _shared_ui_form_types_typeahead_component__WEBPACK_IMPORTED_MODULE_94__["FormlyFieldTypeahead"] }, { name: "number", extends: "input", defaultOptions: { templateOptions: { type: "number" } } }, { name: "date", extends: "input", defaultOptions: { templateOptions: { type: "date" } } }, { name: "integer", extends: "input" }, { name: "string", extends: "input" }, { name: "object", extends: "formly-group" }, { name: "boolean", extends: "checkbox" }, { name: "enum", extends: "select" }], validators: [{ name: "maximumNumValidation", validation: _shared_ui_form_helpers_validators__WEBPACK_IMPORTED_MODULE_95__["maximumNumValidation"] }, { name: "passwordMatchValidation", validation: _shared_ui_form_helpers_validators__WEBPACK_IMPORTED_MODULE_95__["passwordMatchValidation"] }, { name: "PasswordStrengthValidation", validation: _shared_ui_form_helpers_validators__WEBPACK_IMPORTED_MODULE_95__["PasswordStrengthValidation"] }] }, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_50__["ɵa"](p4_0), {}]; }, [_ngx_formly_core__WEBPACK_IMPORTED_MODULE_50__["FormlyConfig"], _ngx_formly_core__WEBPACK_IMPORTED_MODULE_50__["FormlyConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_50__["FormlyModule"], _ngx_formly_core__WEBPACK_IMPORTED_MODULE_50__["FormlyModule"], [_ngx_formly_core__WEBPACK_IMPORTED_MODULE_50__["FormlyConfig"], [2, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_50__["FORMLY_CONFIG"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_96__["NgSelectModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_96__["NgSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngx_formly_material_form_field__WEBPACK_IMPORTED_MODULE_83__["FormlyMatFormFieldModule"], _ngx_formly_material_form_field__WEBPACK_IMPORTED_MODULE_83__["FormlyMatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngx_formly_material_datepicker__WEBPACK_IMPORTED_MODULE_84__["FormlyMatDatepickerModule"], _ngx_formly_material_datepicker__WEBPACK_IMPORTED_MODULE_84__["FormlyMatDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_39__["NativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_39__["NativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_39__["MatNativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_39__["MatNativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_ui_form_ui_form_module__WEBPACK_IMPORTED_MODULE_97__["UiFormModule"], _shared_ui_form_ui_form_module__WEBPACK_IMPORTED_MODULE_97__["UiFormModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_55__["TranslateModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_55__["TranslateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_98__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_98__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _music_releases_routing_module__WEBPACK_IMPORTED_MODULE_99__["MusicReleasesRoutingModule"], _music_releases_routing_module__WEBPACK_IMPORTED_MODULE_99__["MusicReleasesRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_100__["MatGridListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_100__["MatGridListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_101__["MatSidenavModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_101__["MatSidenavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_102__["CdkTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_102__["CdkTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_table__WEBPACK_IMPORTED_MODULE_103__["MatTableModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_103__["MatTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_104__["MatToolbarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_104__["MatToolbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_105__["MatProgressBarModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_105__["MatProgressBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_106__["MatSnackBarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_106__["MatSnackBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_107__["CdkAccordionModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_107__["CdkAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_108__["MatExpansionModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_108__["MatExpansionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_109__["CdkStepperModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_109__["CdkStepperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_56__["MatStepperModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_56__["MatStepperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_badge__WEBPACK_IMPORTED_MODULE_110__["MatBadgeModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_110__["MatBadgeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_111__["AppMaterialModule"], _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_111__["AppMaterialModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _music_releases_module__WEBPACK_IMPORTED_MODULE_1__["MusicReleasesModule"], _music_releases_module__WEBPACK_IMPORTED_MODULE_1__["MusicReleasesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_33__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_33__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_chips__WEBPACK_IMPORTED_MODULE_78__["MAT_CHIPS_DEFAULT_OPTIONS"], { separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_112__["ENTER"]] }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_96__["SELECTION_MODEL_FACTORY"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_96__["ɵb"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_core__WEBPACK_IMPORTED_MODULE_39__["MAT_DATE_FORMATS"], _angular_material_core__WEBPACK_IMPORTED_MODULE_39__["MAT_NATIVE_DATE_FORMATS"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_forms__WEBPACK_IMPORTED_MODULE_34__["NG_VALIDATORS"], function () { return [_shared_shared_module__WEBPACK_IMPORTED_MODULE_98__["ɵ0"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_98__["ɵ1"]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_81__["DYNAMIC_FORM_CONTROL_MAP_FN"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_98__["ɵ2"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_54__["ROUTES"], function () { return [[{ path: "", component: _music_releases_component__WEBPACK_IMPORTED_MODULE_113__["ReleasesComponent"], data: _music_releases_routing_module__WEBPACK_IMPORTED_MODULE_99__["ɵ0"], children: [{ path: "tasks", component: _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_114__["TasksComponent"], data: _music_releases_routing_module__WEBPACK_IMPORTED_MODULE_99__["ɵ1"] }, { path: "list", component: _list_list_component__WEBPACK_IMPORTED_MODULE_115__["ListComponent"], data: _music_releases_routing_module__WEBPACK_IMPORTED_MODULE_99__["ɵ2"] }] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/assets/music-releases/music-releases.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/assets/music-releases/music-releases.module.ts ***!
  \****************************************************************/
/*! exports provided: MusicReleasesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicReleasesModule", function() { return MusicReleasesModule; });
var MusicReleasesModule = /** @class */ (function () {
    function MusicReleasesModule() {
    }
    return MusicReleasesModule;
}());



/***/ }),

/***/ "./src/app/assets/music-releases/publish/publish.component.ngfactory.js":
/*!******************************************************************************!*\
  !*** ./src/app/assets/music-releases/publish/publish.component.ngfactory.js ***!
  \******************************************************************************/
/*! exports provided: RenderType_PublishComponent, View_PublishComponent_0, View_PublishComponent_Host_0, PublishComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_PublishComponent", function() { return RenderType_PublishComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PublishComponent_0", function() { return View_PublishComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PublishComponent_Host_0", function() { return View_PublishComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublishComponentNgFactory", function() { return PublishComponentNgFactory; });
/* harmony import */ var _publish_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./publish.component.scss.shim.ngstyle */ "./src/app/assets/music-releases/publish/publish.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/card/typings/index.ngfactory */ "./node_modules/@angular/material/card/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/list/typings/index.ngfactory */ "./node_modules/@angular/material/list/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _node_modules_angular_material_progress_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/progress-bar/typings/index.ngfactory */ "./node_modules/@angular/material/progress-bar/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _publish_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./publish.component */ "./src/app/assets/music-releases/publish/publish.component.ts");
/* harmony import */ var _services_adapters_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../services/adapters.service */ "./src/app/services/adapters.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

























var styles_PublishComponent = [_publish_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_PublishComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_PublishComponent, data: { "animation": [{ type: 7, name: "openClose", definitions: [{ type: 0, name: "open", styles: { type: 6, styles: { display: "block", opacity: 1 }, offset: null }, options: undefined }, { type: 0, name: "closed", styles: { type: 6, styles: { height: "0px", opacity: 0.5 }, offset: null }, options: undefined }, { type: 1, expr: "open => closed", animation: [{ type: 4, styles: null, timings: "1s 500ms ease-out" }], options: null }, { type: 1, expr: "closed => open", animation: [{ type: 4, styles: null, timings: "500ms  ease-out" }], options: null }], options: {} }, { type: 7, name: "enterLeaveInOut-2", definitions: [{ type: 1, expr: "* => *", animation: [{ type: 11, selector: ":enter", animation: { type: 6, styles: { opacity: 0 }, offset: null }, options: { optional: true } }, { type: 11, selector: ":enter", animation: { type: 12, timings: "200ms", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 0, transform: "scale(1)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 0.4, transform: "scale(1.01)", offset: 0.3 }, offset: null }, { type: 6, styles: { opacity: 1, transform: "scale(1)", offset: 1 }, offset: null }] }, timings: ".6s ease-in" }] }, options: { optional: true } }, { type: 11, selector: ":leave", animation: { type: 12, timings: "300ms", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 1, transform: "scale(.5)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 0.5, transform: "scale(0)", offset: 0.3 }, offset: null }] }, timings: ".6s ease-out" }] }, options: { optional: true } }], options: null }], options: {} }, { type: 7, name: "enterLeaveInOut-3", definitions: [{ type: 1, expr: "* => *", animation: [{ type: 11, selector: ":enter", animation: { type: 6, styles: { opacity: 0 }, offset: null }, options: { optional: true } }, { type: 11, selector: ":enter", animation: { type: 12, timings: "700ms", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 0, transform: "scale(1)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 0.4, transform: "scale(1.01)", offset: 0.3 }, offset: null }, { type: 6, styles: { opacity: 1, transform: "scale(1)", offset: 1 }, offset: null }] }, timings: ".6s ease-in" }] }, options: { optional: true } }, { type: 11, selector: ":leave", animation: { type: 12, timings: "300ms", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 1, transform: "scale(.5)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 0.5, transform: "scale(0)", offset: 0.3 }, offset: null }] }, timings: ".6s ease-out" }] }, options: { optional: true } }], options: null }], options: {} }, { type: 7, name: "enterLeaveInOut", definitions: [{ type: 1, expr: "* => *", animation: [{ type: 11, selector: ":enter", animation: { type: 6, styles: { opacity: 0 }, offset: null }, options: { optional: true } }, { type: 11, selector: ":enter", animation: { type: 12, timings: "100ms", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 0, transform: "scale(.9)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 0.5, transform: "scale(1.1)", offset: 0.3 }, offset: null }, { type: 6, styles: { opacity: 1, transform: "scale(1)", offset: 1 }, offset: null }] }, timings: ".6s ease-in" }] }, options: { optional: true } }, { type: 11, selector: ":leave", animation: { type: 12, timings: "300ms", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 1, transform: "scale(.5)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 0.5, transform: "scale(0)", offset: 0.3 }, offset: null }] }, timings: ".6s ease-out" }] }, options: { optional: true } }], options: null }], options: {} }, { type: 7, name: "enterLeaveUpDwn2", definitions: [{ type: 1, expr: "* => *", animation: [{ type: 11, selector: ":enter", animation: { type: 6, styles: { opacity: 0 }, offset: null }, options: { optional: true } }, { type: 11, selector: ":enter", animation: { type: 12, timings: "100ms", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 0, transform: "translateY(-1%)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 0.5, transform: "translateY(15px)", offset: 0.3 }, offset: null }, { type: 6, styles: { opacity: 1, transform: "translateY(0)", offset: 1 }, offset: null }] }, timings: ".6s ease-in" }] }, options: { optional: true } }, { type: 11, selector: ":leave", animation: { type: 12, timings: "300ms", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 1, transform: "translateY(0)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 0.5, transform: "translateY(15px)", offset: 0.3 }, offset: null }, { type: 6, styles: { opacity: 0, transform: "translateY(-5%)", offset: 1 }, offset: null }] }, timings: ".6s ease-out" }] }, options: { optional: true } }], options: null }], options: {} }, { type: 7, name: "enterLeaveUpDwn", definitions: [{ type: 1, expr: "* => *", animation: [{ type: 11, selector: ":enter", animation: { type: 6, styles: { opacity: 0 }, offset: null }, options: { optional: true } }, { type: 11, selector: ":enter", animation: { type: 12, timings: "300ms", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 0, transform: "translateY(-5%)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 0.5, transform: "translateY(35px)", offset: 0.3 }, offset: null }, { type: 6, styles: { opacity: 1, transform: "translateY(0)", offset: 1 }, offset: null }] }, timings: ".6s ease-in" }] }, options: { optional: true } }, { type: 11, selector: ":leave", animation: { type: 12, timings: "300ms", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 1, transform: "translateY(0)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 0.5, transform: "translateY(35px)", offset: 0.3 }, offset: null }, { type: 6, styles: { opacity: 0, transform: "translateY(-75%)", offset: 1 }, offset: null }] }, timings: ".6s ease-out" }] }, options: { optional: true } }], options: null }], options: {} }, { type: 7, name: "enterAnimateUpDwn", definitions: [{ type: 0, name: "void", styles: { type: 6, styles: { opacity: 0, transform: "translate(0, -10px)" }, offset: null }, options: undefined }, { type: 1, expr: "* => *", animation: [{ type: 4, styles: null, timings: ".8s cubic-bezier(0.175, 0.885, 0.32, 1.275)" }], options: null }], options: {} }, { type: 7, name: "enterAnimateInOut", definitions: [{ type: 0, name: "void", styles: { type: 6, styles: { opacity: 0, transform: "scale(.3)" }, offset: null }, options: undefined }, { type: 1, expr: "* => *", animation: [{ type: 4, styles: null, timings: "1s cubic-bezier(0.175, 0.885, 0.32, 1.275)" }], options: null }], options: {} }, { type: 7, name: "validationMsg", definitions: [{ type: 0, name: "void", styles: { type: 6, styles: { opacity: 0, transform: "translate(0, 20px)" }, offset: null }, options: undefined }, { type: 1, expr: "* => *", animation: [{ type: 4, styles: null, timings: "1s cubic-bezier(0.175, 0.885, 0.32, 1.275)" }], options: null }], options: {} }, { type: 7, name: "enterAnimate", definitions: [{ type: 0, name: "true", styles: { type: 6, styles: { opacity: 1, transform: "translate(200px , 0)" }, offset: null }, options: undefined }, { type: 0, name: "void", styles: { type: 6, styles: { opacity: 0, transform: "translate(200px , 0)" }, offset: null }, options: undefined }, { type: 1, expr: "* => void", animation: [{ type: 4, styles: null, timings: "300ms ease-in" }], options: null }, { type: 1, expr: "void => *", animation: [{ type: 4, styles: null, timings: "800ms 0.3s ease-out" }], options: null }], options: {} }, { type: 7, name: "isSubmitted", definitions: [{ type: 0, name: "true", styles: { type: 6, styles: { transform: "scale(0.4)" }, offset: null }, options: undefined }, { type: 1, expr: "1 => 0", animation: [{ type: 4, styles: null, timings: "1.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)" }], options: null }, { type: 1, expr: "0 => 1", animation: { type: 4, styles: null, timings: "1.5s cubic-bezier(0.215, 0.610, 0.355, 2.000)" }, options: null }], options: {} }, { type: 7, name: "zoomInOut", definitions: [{ type: 0, name: "small", styles: { type: 6, styles: { transform: "translateY(0)", opacity: 1 }, offset: null }, options: undefined }, { type: 0, name: "large", styles: { type: 6, styles: { transform: "scale(0.95)", opacity: 0 }, offset: null }, options: undefined }, { type: 1, expr: "1 => 0", animation: [{ type: 4, styles: null, timings: "1.5s cubic-bezier(0.215, 0.610, 0.355, 2.000)" }], options: null }, { type: 1, expr: "0 => 1", animation: { type: 4, styles: null, timings: "1.5s cubic-bezier(0.215, 0.610, 0.355, 1.600)" }, options: null }], options: {} }, { type: 7, name: "dropInOut", definitions: [{ type: 0, name: "small", styles: { type: 6, styles: { transform: "scale(0)" }, offset: null }, options: undefined }, { type: 0, name: "large", styles: { type: 6, styles: { transform: "scale(1.5)" }, offset: null }, options: undefined }, { type: 1, expr: "small => large", animation: { type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 0, transform: "translateY(-75%)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 1, transform: "translateY(0)", offset: 1 }, offset: null }] }, timings: "1.5s cubic-bezier(0.215, 0.610, 0.355, 2.000)" }, options: null }, { type: 1, expr: "large => small", animation: { type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 0, transform: "translateY(0)", offset: 1 }, offset: null }] }, timings: "1.5s cubic-bezier(0.215, 0.610, 0.355, 2.000)" }, options: null }], options: {} }, { type: 7, name: "dropInOut2", definitions: [{ type: 0, name: "small", styles: { type: 6, styles: { transform: "scale(1)" }, offset: null }, options: undefined }, { type: 0, name: "large", styles: { type: 6, styles: { transform: "scale(1.5)" }, offset: null }, options: undefined }, { type: 1, expr: "small <=> large", animation: { type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 0, transform: "translateY(75%)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 1, transform: "translateY(0)", offset: 1 }, offset: null }] }, timings: "1.5s cubic-bezier(0.215, 0.610, 0.355, 2.000)" }, options: null }], options: {} }] } });

function View_PublishComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 29, "mat-card", [["class", "mat-card"]], [[2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 7, "mat-card-header", [["class", "mat-card-header"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCardHeader_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 1, 2, "mat-card-title", [["class", "mat-card-title"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["Release ", " / ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 1, 2, "mat-card-subtitle", [["class", "mat-card-subtitle"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 0, 7, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](12, null, [" Artist: ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, [" Collective: ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](16, null, [" Owner: ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, 0, 11, "mat-card-actions", [["class", "mat-card-actions"]], [[2, "mat-card-actions-align-end", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 4, "button", [["mat-mini-fab", ""], ["matTooltip", "Remove from Claim"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.removeClaim(_v.context.index) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MAT_ICON_LOCATION"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["delete"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 4, "button", [["mat-mini-fab", ""], ["matTooltip", "Edit"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.removeClaim(_v.context.index) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MAT_ICON_LOCATION"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["edit"]))], function (_ck, _v) { _ck(_v, 23, 0); _ck(_v, 28, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0); var currVal_1 = (_v.context.index + 1); var currVal_2 = _co.data.length; _ck(_v, 6, 0, currVal_1, currVal_2); var currVal_3 = _v.context.$implicit.name; _ck(_v, 9, 0, currVal_3); var currVal_4 = _v.context.$implicit.artist; _ck(_v, 12, 0, currVal_4); var currVal_5 = _v.context.$implicit.collective; _ck(_v, 14, 0, currVal_5); var currVal_6 = _v.context.$implicit.owner; _ck(_v, 16, 0, currVal_6); var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).align === "end"); _ck(_v, 18, 0, currVal_7); var currVal_8 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).disabled || null); var currVal_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._animationMode === "NoopAnimations"); _ck(_v, 20, 0, currVal_8, currVal_9); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).inline; var currVal_11 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).color !== "warn")); _ck(_v, 22, 0, currVal_10, currVal_11); var currVal_12 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).disabled || null); var currVal_13 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._animationMode === "NoopAnimations"); _ck(_v, 25, 0, currVal_12, currVal_13); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).inline; var currVal_15 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).color !== "warn")); _ck(_v, 27, 0, currVal_14, currVal_15); }); }
function View_PublishComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 18, "div", [["class", "mat-dialog-content"], ["mat-dialog-content", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 7, "section", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 6, "div", [["class", "mt-3 mat-dialog-content"], ["fxLayout", "row wrap"], ["fxLayoutAlign", "start stretch"], ["fxLayoutGap", "20px"], ["mat-dialog-content", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 1720320, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutGapDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["Directionality"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutGapStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], { fxLayoutGap: [0, "fxLayoutGap"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PublishComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 8, "div", [["class", "mat-dialog-actions"], ["mat-dialog-actions", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 3, "button", [["mat-button", ""], ["mat-dialog-close", "cancel"], ["type", "button"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).dialogRef.close(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).dialogResult) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 606208, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogClose"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]], { dialogResult: [0, "dialogResult"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Cancel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 2, "button", [["mat-button", ""], ["mat-raised-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onNextStep() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Distribute"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "row wrap"; _ck(_v, 4, 0, currVal_0); var currVal_1 = "20px"; _ck(_v, 5, 0, currVal_1); var currVal_2 = "start stretch"; _ck(_v, 6, 0, currVal_2); var currVal_3 = _co.data.data; _ck(_v, 9, 0, currVal_3); var currVal_7 = "cancel"; _ck(_v, 14, 0, currVal_7); }, function (_ck, _v) { var currVal_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).disabled || null); var currVal_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)._animationMode === "NoopAnimations"); var currVal_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ariaLabel || null); _ck(_v, 12, 0, currVal_4, currVal_5, currVal_6); var currVal_8 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).disabled || null); var currVal_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._animationMode === "NoopAnimations"); _ck(_v, 16, 0, currVal_8, currVal_9); }); }
function View_PublishComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "mat-list-item", [["class", "mat-list-item"]], [[2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null]], null, null, _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_MatListItem_0"], _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_MatListItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 1228800, null, 3, _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatNavList"]], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatList"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { _lines: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { _avatar: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { _icon: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 2, 2, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](7, 1)], null, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._icon); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._icon); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 6, 0, _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit)); _ck(_v, 6, 0, currVal_2); }); }
function View_PublishComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 11, "mat-card", [["class", "mat-card"]], [[2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 3, "mat-icon", [["class", "mat-list-icon mat-icon notranslate"], ["mat-list-icon", ""], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListIconCssMatStyler"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MAT_ICON_LOCATION"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["library_music"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 0, 2, "h6", [["class", "mat-line"], ["mat-line", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatLine"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, 0, 2, "p", [["class", "mat-line"], ["mat-line", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatLine"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, [" ", " "]))], function (_ck, _v) { _ck(_v, 4, 0); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).inline; var currVal_2 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).color !== "warn")); _ck(_v, 2, 0, currVal_1, currVal_2); var currVal_3 = _v.context.$implicit.name; _ck(_v, 8, 0, currVal_3); var currVal_4 = _v.context.$implicit.artist; _ck(_v, 11, 0, currVal_4); }); }
function View_PublishComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 35, "div", [["fxLayout", "row wrap"], ["fxLayoutAlign", "start end"], ["fxLayoutGap", "20px"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 1720320, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutGapDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["Directionality"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutGapStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], { fxLayoutGap: [0, "fxLayoutGap"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 21, "section", [["class", "my-5 mat-dialog-content"], ["fxLayout", "row wrap"], ["fxLayoutAlign", "start start"], ["fxLayoutGap", "20px"], ["mat-dialog-content", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 1720320, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutGapDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["Directionality"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutGapStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], { fxLayoutGap: [0, "fxLayoutGap"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 10, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" You are about to post your Releases to the following platforms: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 3, "mat-list", [["class", "mat-list mat-list-base"]], null, null, null, _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_MatList_0"], _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_MatList"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 704512, null, 0, _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatList"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_PublishComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" To add more Platforms please enable more "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 3, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](18, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Adapters"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 5, "div", [["fxLayout", "row wrap"], ["fxLayoutAlign", "start stretch"], ["fxLayoutGap", "20px"]], [[24, "@enterLeaveInOut-2", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 1720320, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutGapDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["Directionality"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutGapStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], { fxLayoutGap: [0, "fxLayoutGap"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PublishComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 9, "div", [["class", "mat-dialog-actions"], ["mat-dialog-actions", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 3, "button", [["mat-button", ""], ["mat-dialog-close", "cancel"], ["type", "button"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).dialogRef.close(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).dialogResult) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 606208, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogClose"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]], { dialogResult: [0, "dialogResult"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Close"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 3, "button", [["mat-button", ""], ["mat-dialog-close", "next"], ["mat-raised-button", ""], ["type", "button"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).dialogRef.close(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).dialogResult) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.nextClaimStep3(_co.data.section) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 606208, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogClose"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]], { dialogResult: [0, "dialogResult"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Continue"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "row wrap"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "20px"; _ck(_v, 2, 0, currVal_1); var currVal_2 = "start end"; _ck(_v, 3, 0, currVal_2); var currVal_3 = "row wrap"; _ck(_v, 5, 0, currVal_3); var currVal_4 = "20px"; _ck(_v, 6, 0, currVal_4); var currVal_5 = "start start"; _ck(_v, 7, 0, currVal_5); var currVal_6 = _co.enabled; _ck(_v, 14, 0, currVal_6); var currVal_9 = _ck(_v, 18, 0, "/adapters"); _ck(_v, 17, 0, currVal_9); var currVal_11 = "row wrap"; _ck(_v, 21, 0, currVal_11); var currVal_12 = "20px"; _ck(_v, 22, 0, currVal_12); var currVal_13 = "start stretch"; _ck(_v, 23, 0, currVal_13); var currVal_14 = _co.data.data; _ck(_v, 25, 0, currVal_14); var currVal_18 = "cancel"; _ck(_v, 30, 0, currVal_18); var currVal_22 = "next"; _ck(_v, 34, 0, currVal_22); }, function (_ck, _v) { var _co = _v.component; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).target; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).href; _ck(_v, 16, 0, currVal_7, currVal_8); var currVal_10 = _co.data; _ck(_v, 20, 0, currVal_10); var currVal_15 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).disabled || null); var currVal_16 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._animationMode === "NoopAnimations"); var currVal_17 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ariaLabel || null); _ck(_v, 28, 0, currVal_15, currVal_16, currVal_17); var currVal_19 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).disabled || null); var currVal_20 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._animationMode === "NoopAnimations"); var currVal_21 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ariaLabel || null); _ck(_v, 32, 0, currVal_19, currVal_20, currVal_21); }); }
function View_PublishComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["You need to enable your "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 3, "a", [["mat-dialog-close", "true"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](5, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Adapters"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" before continuing "]))], function (_ck, _v) { var currVal_2 = _ck(_v, 5, 0, "/adapters"); _ck(_v, 4, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).href; _ck(_v, 3, 0, currVal_0, currVal_1); }); }
function View_PublishComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 16, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "td", [["style", "width:80px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 5, "mat-chip", [["class", "mat-chip"], ["role", "option"]], [[1, "tabindex", 0], [2, "mat-chip-selected", null], [2, "mat-chip-with-avatar", null], [2, "mat-chip-with-trailing-icon", null], [2, "mat-chip-disabled", null], [2, "_mat-animation-noopable", null], [1, "disabled", 0], [1, "aria-disabled", 0], [1, "aria-selected", 0]], [[null, "click"], [null, "keydown"], [null, "focus"], [null, "blur"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._handleClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } if (("focus" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).focus() !== false);
        ad = (pd_2 && ad);
    } if (("blur" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._blur() !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 147456, null, 3, _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChip"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__["Platform"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MAT_RIPPLE_GLOBAL_OPTIONS"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { avatar: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { trailingIcon: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, { removeIcon: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 2, "td", [["style", "min-width:200px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "mat-progress-bar", [["aria-valuemax", "100"], ["aria-valuemin", "0"], ["class", "mat-progress-bar"], ["mode", "determinate"], ["role", "progressbar"]], [[1, "aria-valuenow", 0], [1, "mode", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_progress_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_21__["View_MatProgressBar_0"], _node_modules_angular_material_progress_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_21__["RenderType_MatProgressBar"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 4374528, null, 0, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__["MatProgressBar"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]], [2, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__["MAT_PROGRESS_BAR_LOCATION"]]], { value: [0, "value"], mode: [1, "mode"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "i", [["class", "material-icons"], ["matTooltip", "Awaiting response"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](16, null, [" ", " "]))], function (_ck, _v) { var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.percentComplete, ""); var currVal_15 = "determinate"; _ck(_v, 13, 0, currVal_14, currVal_15); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).disabled ? null : (0 - 1)); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).selected; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).avatar; var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).trailingIcon || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).removeIcon); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).disabled; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._animationsDisabled; var currVal_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).disabled || null); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).disabled.toString(); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).ariaSelected; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); var currVal_9 = _v.context.$implicit.step; _ck(_v, 7, 0, currVal_9); var currVal_10 = _v.context.$implicit.name; _ck(_v, 10, 0, currVal_10); var currVal_11 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).mode === "indeterminate") || (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).mode === "query")) ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).value); var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).mode; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)._isNoopAnimation; _ck(_v, 12, 0, currVal_11, currVal_12, currVal_13); var currVal_16 = _v.context.$implicit.icon; _ck(_v, 16, 0, currVal_16); }); }
function View_PublishComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["UpperCasePipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Publish/Distribute Your Release"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\nPlease be sure all info is correct before starting the distribution process.\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PublishComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PublishComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PublishComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 4, "div", [["class", "my-5 mat-dialog-content"], ["mat-dialog-content", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "table", [["class", "table table-sm"]], [[24, "@enterLeaveInOut-3", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PublishComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.nextStep; _ck(_v, 5, 0, currVal_0); var currVal_1 = (_co.nextStep && _co.enabled.length); _ck(_v, 7, 0, currVal_1); var currVal_2 = (_co.enabled.length === 0); _ck(_v, 9, 0, currVal_2); var currVal_4 = _co.dataSource; _ck(_v, 14, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_3 = _co.dataSource; _ck(_v, 12, 0, currVal_3); }); }
function View_PublishComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-publish", [], null, null, null, View_PublishComponent_0, RenderType_PublishComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _publish_component__WEBPACK_IMPORTED_MODULE_23__["PublishComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MAT_DIALOG_DATA"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"], _services_adapters_service__WEBPACK_IMPORTED_MODULE_24__["AdaptersService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PublishComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-publish", _publish_component__WEBPACK_IMPORTED_MODULE_23__["PublishComponent"], View_PublishComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/assets/music-releases/publish/publish.component.scss.shim.ngstyle.js":
/*!**************************************************************************************!*\
  !*** ./src/app/assets/music-releases/publish/publish.component.scss.shim.ngstyle.js ***!
  \**************************************************************************************/
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
var styles = [".mat-chip.mat-standard-chip[_ngcontent-%COMP%] {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.87);\n  border-radius: 16px;\n  padding: 2px;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  display: inline-flex;\n  padding: 7px 12px;\n  border-radius: 16px;\n  align-items: center;\n  cursor: default;\n  min-height: 32px;\n  height: 1px;\n}\n\n.mat-cell[_ngcontent-%COMP%] {\n  padding: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNzZXRzL211c2ljLXJlbGVhc2VzL3B1Ymxpc2gvQzpcXFVzZXJzXFxUaW1cXGtlbmRyYWlvLWFwcC9zcmNcXGFwcFxcYXNzZXRzXFxtdXNpYy1yZWxlYXNlc1xccHVibGlzaFxccHVibGlzaC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXNzZXRzL211c2ljLXJlbGVhc2VzL3B1Ymxpc2gvcHVibGlzaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5REFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBRENBO0VBQ0EsWUFBQTtBQ0VBIiwiZmlsZSI6InNyYy9hcHAvYXNzZXRzL211c2ljLXJlbGVhc2VzL3B1Ymxpc2gvcHVibGlzaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyODBtcyBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgcGFkZGluZzogN3B4IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIG1pbi1oZWlnaHQ6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxufVxyXG4ubWF0LWNlbGwge1xyXG5wYWRkaW5nOiA2cHg7XHJcbn0iLCIubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgcGFkZGluZzogMnB4O1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBwYWRkaW5nOiA3cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBtaW4taGVpZ2h0OiAzMnB4O1xuICBoZWlnaHQ6IDFweDtcbn1cblxuLm1hdC1jZWxsIHtcbiAgcGFkZGluZzogNnB4O1xufSJdfQ== */"];



/***/ }),

/***/ "./src/app/assets/music-releases/publish/publish.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/assets/music-releases/publish/publish.component.ts ***!
  \********************************************************************/
/*! exports provided: PublishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublishComponent", function() { return PublishComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_adapters_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/adapters.service */ "./src/app/services/adapters.service.ts");



var PROGRESS_DATA = [
    { step: 1, name: 'Releases Selected', percentComplete: 100, icon: 'done' },
    { step: 2, name: 'Data confirmed', percentComplete: 100, icon: 'done' },
];
var PublishComponent = /** @class */ (function () {
    function PublishComponent(data, router, adapters) {
        this.data = data;
        this.router = router;
        this.adapters = adapters;
        this.nextStep = false;
        this.displayedColumns = ['step', 'name', 'percentComplete', 'icon'];
        this.dataSource = [];
        this.nextDataSource = [];
    }
    PublishComponent.prototype.ngOnInit = function () {
        PROGRESS_DATA = [
            { step: 1, name: 'Releases Selected', percentComplete: 100, icon: 'done' },
            { step: 2, name: 'Data confirmed', percentComplete: 100, icon: 'done' },
        ];
        this.dataSource = [];
        this.nextDataSource = [];
        this.dataSource = PROGRESS_DATA;
    };
    Object.defineProperty(PublishComponent.prototype, "enabled", {
        // Object.keys(adapters);
        get: function () { return Object.keys(this.adapters.enabledAdapters); },
        enumerable: true,
        configurable: true
    });
    PublishComponent.prototype.onNextStep = function () {
        var _this = this;
        this.nextDataSource = [];
        this.nextDataSource = PROGRESS_DATA;
        this.enabled.forEach(function (input) {
            _this.nextDataSource.push({
                step: _this.nextDataSource.length + 1,
                name: 'Sent to: ' + input,
                percentComplete: _this.nextDataSource.length * 3,
                icon: 'schedule'
            });
        });
        this.nextStep = true;
        this.dataSource = [];
        this.dataSource = this.nextDataSource;
    };
    PublishComponent.prototype.nextClaimStep3 = function (section) {
        //  localStorage.setItem(section, JSON.stringify(this.data.data));
        // this.router.navigate(['/claims']);
    };
    PublishComponent.prototype.removeClaim = function (i) {
        this.data.splice(i, 1);
    };
    return PublishComponent;
}());



/***/ }),

/***/ "./src/app/assets/music-releases/register-new-release/register-new-release.component.ngfactory.js":
/*!********************************************************************************************************!*\
  !*** ./src/app/assets/music-releases/register-new-release/register-new-release.component.ngfactory.js ***!
  \********************************************************************************************************/
/*! exports provided: RenderType_RegisterNewReleaseComponent, View_RegisterNewReleaseComponent_0, View_RegisterNewReleaseComponent_Host_0, RegisterNewReleaseComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_RegisterNewReleaseComponent", function() { return RenderType_RegisterNewReleaseComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RegisterNewReleaseComponent_0", function() { return View_RegisterNewReleaseComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RegisterNewReleaseComponent_Host_0", function() { return View_RegisterNewReleaseComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterNewReleaseComponentNgFactory", function() { return RegisterNewReleaseComponentNgFactory; });
/* harmony import */ var _register_new_release_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-new-release.component.scss.shim.ngstyle */ "./src/app/assets/music-releases/register-new-release/register-new-release.component.scss.shim.ngstyle.js");
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
/* harmony import */ var _register_new_release_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./register-new-release.component */ "./src/app/assets/music-releases/register-new-release/register-new-release.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

















var styles_RegisterNewReleaseComponent = [_register_new_release_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_RegisterNewReleaseComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_RegisterNewReleaseComponent, data: {} });

function View_RegisterNewReleaseComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 33, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" introduction about registering a new Release here"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 12, "mat-card", [["class", "mat-card"]], [[2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 10, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
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
    } return ad; }, _node_modules_ng_dynamic_forms_ui_material_ui_material_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_DynamicMaterialFormComponent_0"], _node_modules_ng_dynamic_forms_ui_material_ui_material_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_DynamicMaterialFormComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 49152, null, 1, _ng_dynamic_forms_ui_material__WEBPACK_IMPORTED_MODULE_7__["DynamicMaterialFormComponent"], [_ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_8__["DynamicFormService"], _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_8__["DynamicFormLayoutService"]], { formGroup: [0, "formGroup"], formModel: [1, "formModel"], formLayout: [2, "formLayout"] }, { blur: "blur", change: "change", focus: "focus", customEvent: "matEvent" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { templates: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 1720320, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutGapDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["LayoutGapStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["MediaMarshaller"]], { fxLayoutGap: [0, "fxLayoutGap"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 17, "div", [["class", "align-right mat-dialog-actions"], ["mat-dialog-actions", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 3, "button", [["mat-button", ""], ["mat-dialog-close", "cancel"], ["type", "button"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).dialogRef.close(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).dialogResult) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 606208, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogClose"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"]], { dialogResult: [0, "dialogResult"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Cancel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 3, "button", [["cdkFocusInitial", ""], ["mat-raised-button", ""], ["type", "button"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).dialogRef.close(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).dialogResult) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], { disabled: [0, "disabled"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 606208, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogClose"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"]], { dialogResult: [0, "dialogResult"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Register"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 3, "button", [["cdkFocusInitial", ""], ["mat-raised-button", ""], ["type", "button"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).dialogRef.close(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).dialogResult) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], { disabled: [0, "disabled"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 606208, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogClose"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"]], { dialogResult: [0, "dialogResult"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Distribute"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 3, "button", [["cdkFocusInitial", ""], ["mat-raised-button", ""], ["type", "button"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).dialogRef.close(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).dialogResult) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], { disabled: [0, "disabled"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 606208, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogClose"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"]], { dialogResult: [0, "dialogResult"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Save"]))], function (_ck, _v) { var _co = _v.component; var currVal_8 = _co.formGroup; _ck(_v, 7, 0, currVal_8); var currVal_9 = _co.formGroup; var currVal_10 = _co.formModel; var currVal_11 = _co.formLayout; _ck(_v, 11, 0, currVal_9, currVal_10, currVal_11); var currVal_12 = "row wrap"; _ck(_v, 13, 0, currVal_12); var currVal_13 = "40px"; _ck(_v, 14, 0, currVal_13); var currVal_14 = "start start"; _ck(_v, 15, 0, currVal_14); var currVal_18 = "cancel"; _ck(_v, 20, 0, currVal_18); var currVal_22 = _co.formGroup.invalid; _ck(_v, 23, 0, currVal_22); var currVal_23 = _co.formGroup.value; _ck(_v, 24, 0, currVal_23); var currVal_27 = _co.formGroup.invalid; _ck(_v, 27, 0, currVal_27); var currVal_28 = _co.formGroup.value; _ck(_v, 28, 0, currVal_28); var currVal_32 = _co.formGroup.invalid; _ck(_v, 31, 0, currVal_32); var currVal_33 = _co.formGroup.value; _ck(_v, 32, 0, currVal_33); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._animationMode === "NoopAnimations"); _ck(_v, 3, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassUntouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassTouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassPristine; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassDirty; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassValid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassInvalid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassPending; _ck(_v, 5, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_15 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).disabled || null); var currVal_16 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._animationMode === "NoopAnimations"); var currVal_17 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ariaLabel || null); _ck(_v, 18, 0, currVal_15, currVal_16, currVal_17); var currVal_19 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).disabled || null); var currVal_20 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._animationMode === "NoopAnimations"); var currVal_21 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ariaLabel || null); _ck(_v, 22, 0, currVal_19, currVal_20, currVal_21); var currVal_24 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).disabled || null); var currVal_25 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._animationMode === "NoopAnimations"); var currVal_26 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ariaLabel || null); _ck(_v, 26, 0, currVal_24, currVal_25, currVal_26); var currVal_29 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).disabled || null); var currVal_30 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31)._animationMode === "NoopAnimations"); var currVal_31 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ariaLabel || null); _ck(_v, 30, 0, currVal_29, currVal_30, currVal_31); }); }
function View_RegisterNewReleaseComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-register-new-release", [], null, null, null, View_RegisterNewReleaseComponent_0, RenderType_RegisterNewReleaseComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _register_new_release_component__WEBPACK_IMPORTED_MODULE_16__["RegisterNewReleaseComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MAT_DIALOG_DATA"], _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_8__["DynamicFormService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var RegisterNewReleaseComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-register-new-release", _register_new_release_component__WEBPACK_IMPORTED_MODULE_16__["RegisterNewReleaseComponent"], View_RegisterNewReleaseComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/assets/music-releases/register-new-release/register-new-release.component.scss.shim.ngstyle.js":
/*!****************************************************************************************************************!*\
  !*** ./src/app/assets/music-releases/register-new-release/register-new-release.component.scss.shim.ngstyle.js ***!
  \****************************************************************************************************************/
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
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2V0cy9tdXNpYy1yZWxlYXNlcy9yZWdpc3Rlci1uZXctcmVsZWFzZS9yZWdpc3Rlci1uZXctcmVsZWFzZS5jb21wb25lbnQuc2NzcyJ9 */"];



/***/ }),

/***/ "./src/app/assets/music-releases/register-new-release/register-new-release.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/assets/music-releases/register-new-release/register-new-release.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: RegisterNewReleaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterNewReleaseComponent", function() { return RegisterNewReleaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm5/core.js");
/* harmony import */ var _shared_forms_registerNewRelease__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_shared/forms/registerNewRelease */ "./src/app/assets/music-releases/_shared/forms/registerNewRelease.ts");



var RegisterNewReleaseComponent = /** @class */ (function () {
    function RegisterNewReleaseComponent(data, formService) {
        this.data = data;
        this.formService = formService;
        this.formModel = _shared_forms_registerNewRelease__WEBPACK_IMPORTED_MODULE_2__["RELEASE_REGISTER_FORM_MODEL"];
        //formLayout: DynamicFormLayout = WORKS_FORM_LAYOUT;
        this.formLayout = {};
    }
    RegisterNewReleaseComponent.prototype.ngOnInit = function () {
        this.formGroup = this.formService.createFormGroup(this.formModel);
        this.formGroup.patchValue(this.data);
    };
    RegisterNewReleaseComponent.prototype.onBlur = function ($event) {
        console.log("Material blur event on: " + $event.model.id + ": ", $event);
    };
    RegisterNewReleaseComponent.prototype.onChange = function ($event) {
        console.log("Material change event on: " + $event.model.id + ": ", $event);
    };
    RegisterNewReleaseComponent.prototype.onFocus = function ($event) {
        console.log("Material focus event on: " + $event.model.id + ": ", $event);
    };
    RegisterNewReleaseComponent.prototype.onMatEvent = function ($event) {
        console.log("Material " + $event.type + " event on: " + $event.model.id + ": ", $event);
    };
    return RegisterNewReleaseComponent;
}());



/***/ }),

/***/ "./src/app/assets/music-releases/register/register.component.ngfactory.js":
/*!********************************************************************************!*\
  !*** ./src/app/assets/music-releases/register/register.component.ngfactory.js ***!
  \********************************************************************************/
/*! exports provided: RenderType_RegisterComponent, View_RegisterComponent_0, View_RegisterComponent_Host_0, RegisterComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_RegisterComponent", function() { return RenderType_RegisterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RegisterComponent_0", function() { return View_RegisterComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RegisterComponent_Host_0", function() { return View_RegisterComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponentNgFactory", function() { return RegisterComponentNgFactory; });
/* harmony import */ var _register_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component.scss.shim.ngstyle */ "./src/app/assets/music-releases/register/register.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/card/typings/index.ngfactory */ "./node_modules/@angular/material/card/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/list/typings/index.ngfactory */ "./node_modules/@angular/material/list/typings/index.ngfactory.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./register.component */ "./src/app/assets/music-releases/register/register.component.ts");
/* harmony import */ var _services_adapters_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../services/adapters.service */ "./src/app/services/adapters.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





















var styles_RegisterComponent = [_register_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_RegisterComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_RegisterComponent, data: { "animation": [{ type: 7, name: "openClose", definitions: [{ type: 0, name: "open", styles: { type: 6, styles: { display: "block", opacity: 1 }, offset: null }, options: undefined }, { type: 0, name: "closed", styles: { type: 6, styles: { height: "0px", opacity: 0.5 }, offset: null }, options: undefined }, { type: 1, expr: "open => closed", animation: [{ type: 4, styles: null, timings: "1s 500ms ease-out" }], options: null }, { type: 1, expr: "closed => open", animation: [{ type: 4, styles: null, timings: "500ms  ease-out" }], options: null }], options: {} }, { type: 7, name: "enterLeaveInOut-2", definitions: [{ type: 1, expr: "* => *", animation: [{ type: 11, selector: ":enter", animation: { type: 6, styles: { opacity: 0 }, offset: null }, options: { optional: true } }, { type: 11, selector: ":enter", animation: { type: 12, timings: "200ms", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 0, transform: "scale(1)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 0.4, transform: "scale(1.01)", offset: 0.3 }, offset: null }, { type: 6, styles: { opacity: 1, transform: "scale(1)", offset: 1 }, offset: null }] }, timings: ".6s ease-in" }] }, options: { optional: true } }, { type: 11, selector: ":leave", animation: { type: 12, timings: "300ms", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 1, transform: "scale(.5)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 0.5, transform: "scale(0)", offset: 0.3 }, offset: null }] }, timings: ".6s ease-out" }] }, options: { optional: true } }], options: null }], options: {} }, { type: 7, name: "enterLeaveInOut-3", definitions: [{ type: 1, expr: "* => *", animation: [{ type: 11, selector: ":enter", animation: { type: 6, styles: { opacity: 0 }, offset: null }, options: { optional: true } }, { type: 11, selector: ":enter", animation: { type: 12, timings: "700ms", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 0, transform: "scale(1)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 0.4, transform: "scale(1.01)", offset: 0.3 }, offset: null }, { type: 6, styles: { opacity: 1, transform: "scale(1)", offset: 1 }, offset: null }] }, timings: ".6s ease-in" }] }, options: { optional: true } }, { type: 11, selector: ":leave", animation: { type: 12, timings: "300ms", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 1, transform: "scale(.5)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 0.5, transform: "scale(0)", offset: 0.3 }, offset: null }] }, timings: ".6s ease-out" }] }, options: { optional: true } }], options: null }], options: {} }, { type: 7, name: "enterLeaveInOut", definitions: [{ type: 1, expr: "* => *", animation: [{ type: 11, selector: ":enter", animation: { type: 6, styles: { opacity: 0 }, offset: null }, options: { optional: true } }, { type: 11, selector: ":enter", animation: { type: 12, timings: "100ms", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 0, transform: "scale(.9)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 0.5, transform: "scale(1.1)", offset: 0.3 }, offset: null }, { type: 6, styles: { opacity: 1, transform: "scale(1)", offset: 1 }, offset: null }] }, timings: ".6s ease-in" }] }, options: { optional: true } }, { type: 11, selector: ":leave", animation: { type: 12, timings: "300ms", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 1, transform: "scale(.5)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 0.5, transform: "scale(0)", offset: 0.3 }, offset: null }] }, timings: ".6s ease-out" }] }, options: { optional: true } }], options: null }], options: {} }, { type: 7, name: "enterLeaveUpDwn2", definitions: [{ type: 1, expr: "* => *", animation: [{ type: 11, selector: ":enter", animation: { type: 6, styles: { opacity: 0 }, offset: null }, options: { optional: true } }, { type: 11, selector: ":enter", animation: { type: 12, timings: "100ms", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 0, transform: "translateY(-1%)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 0.5, transform: "translateY(15px)", offset: 0.3 }, offset: null }, { type: 6, styles: { opacity: 1, transform: "translateY(0)", offset: 1 }, offset: null }] }, timings: ".6s ease-in" }] }, options: { optional: true } }, { type: 11, selector: ":leave", animation: { type: 12, timings: "300ms", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 1, transform: "translateY(0)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 0.5, transform: "translateY(15px)", offset: 0.3 }, offset: null }, { type: 6, styles: { opacity: 0, transform: "translateY(-5%)", offset: 1 }, offset: null }] }, timings: ".6s ease-out" }] }, options: { optional: true } }], options: null }], options: {} }, { type: 7, name: "enterLeaveUpDwn", definitions: [{ type: 1, expr: "* => *", animation: [{ type: 11, selector: ":enter", animation: { type: 6, styles: { opacity: 0 }, offset: null }, options: { optional: true } }, { type: 11, selector: ":enter", animation: { type: 12, timings: "300ms", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 0, transform: "translateY(-5%)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 0.5, transform: "translateY(35px)", offset: 0.3 }, offset: null }, { type: 6, styles: { opacity: 1, transform: "translateY(0)", offset: 1 }, offset: null }] }, timings: ".6s ease-in" }] }, options: { optional: true } }, { type: 11, selector: ":leave", animation: { type: 12, timings: "300ms", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 1, transform: "translateY(0)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 0.5, transform: "translateY(35px)", offset: 0.3 }, offset: null }, { type: 6, styles: { opacity: 0, transform: "translateY(-75%)", offset: 1 }, offset: null }] }, timings: ".6s ease-out" }] }, options: { optional: true } }], options: null }], options: {} }, { type: 7, name: "enterAnimateUpDwn", definitions: [{ type: 0, name: "void", styles: { type: 6, styles: { opacity: 0, transform: "translate(0, -10px)" }, offset: null }, options: undefined }, { type: 1, expr: "* => *", animation: [{ type: 4, styles: null, timings: ".8s cubic-bezier(0.175, 0.885, 0.32, 1.275)" }], options: null }], options: {} }, { type: 7, name: "enterAnimateInOut", definitions: [{ type: 0, name: "void", styles: { type: 6, styles: { opacity: 0, transform: "scale(.3)" }, offset: null }, options: undefined }, { type: 1, expr: "* => *", animation: [{ type: 4, styles: null, timings: "1s cubic-bezier(0.175, 0.885, 0.32, 1.275)" }], options: null }], options: {} }, { type: 7, name: "validationMsg", definitions: [{ type: 0, name: "void", styles: { type: 6, styles: { opacity: 0, transform: "translate(0, 20px)" }, offset: null }, options: undefined }, { type: 1, expr: "* => *", animation: [{ type: 4, styles: null, timings: "1s cubic-bezier(0.175, 0.885, 0.32, 1.275)" }], options: null }], options: {} }, { type: 7, name: "enterAnimate", definitions: [{ type: 0, name: "true", styles: { type: 6, styles: { opacity: 1, transform: "translate(200px , 0)" }, offset: null }, options: undefined }, { type: 0, name: "void", styles: { type: 6, styles: { opacity: 0, transform: "translate(200px , 0)" }, offset: null }, options: undefined }, { type: 1, expr: "* => void", animation: [{ type: 4, styles: null, timings: "300ms ease-in" }], options: null }, { type: 1, expr: "void => *", animation: [{ type: 4, styles: null, timings: "800ms 0.3s ease-out" }], options: null }], options: {} }, { type: 7, name: "isSubmitted", definitions: [{ type: 0, name: "true", styles: { type: 6, styles: { transform: "scale(0.4)" }, offset: null }, options: undefined }, { type: 1, expr: "1 => 0", animation: [{ type: 4, styles: null, timings: "1.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)" }], options: null }, { type: 1, expr: "0 => 1", animation: { type: 4, styles: null, timings: "1.5s cubic-bezier(0.215, 0.610, 0.355, 2.000)" }, options: null }], options: {} }, { type: 7, name: "zoomInOut", definitions: [{ type: 0, name: "small", styles: { type: 6, styles: { transform: "translateY(0)", opacity: 1 }, offset: null }, options: undefined }, { type: 0, name: "large", styles: { type: 6, styles: { transform: "scale(0.95)", opacity: 0 }, offset: null }, options: undefined }, { type: 1, expr: "1 => 0", animation: [{ type: 4, styles: null, timings: "1.5s cubic-bezier(0.215, 0.610, 0.355, 2.000)" }], options: null }, { type: 1, expr: "0 => 1", animation: { type: 4, styles: null, timings: "1.5s cubic-bezier(0.215, 0.610, 0.355, 1.600)" }, options: null }], options: {} }, { type: 7, name: "dropInOut", definitions: [{ type: 0, name: "small", styles: { type: 6, styles: { transform: "scale(0)" }, offset: null }, options: undefined }, { type: 0, name: "large", styles: { type: 6, styles: { transform: "scale(1.5)" }, offset: null }, options: undefined }, { type: 1, expr: "small => large", animation: { type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 0, transform: "translateY(-75%)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 1, transform: "translateY(0)", offset: 1 }, offset: null }] }, timings: "1.5s cubic-bezier(0.215, 0.610, 0.355, 2.000)" }, options: null }, { type: 1, expr: "large => small", animation: { type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 0, transform: "translateY(0)", offset: 1 }, offset: null }] }, timings: "1.5s cubic-bezier(0.215, 0.610, 0.355, 2.000)" }, options: null }], options: {} }, { type: 7, name: "dropInOut2", definitions: [{ type: 0, name: "small", styles: { type: 6, styles: { transform: "scale(1)" }, offset: null }, options: undefined }, { type: 0, name: "large", styles: { type: 6, styles: { transform: "scale(1.5)" }, offset: null }, options: undefined }, { type: 1, expr: "small <=> large", animation: { type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 0, transform: "translateY(75%)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 1, transform: "translateY(0)", offset: 1 }, offset: null }] }, timings: "1.5s cubic-bezier(0.215, 0.610, 0.355, 2.000)" }, options: null }], options: {} }] } });

function View_RegisterComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 29, "mat-card", [["class", "mat-card"]], [[2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 7, "mat-card-header", [["class", "mat-card-header"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCardHeader_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 1, 2, "mat-card-title", [["class", "mat-card-title"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["Release ", " / ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 1, 2, "mat-card-subtitle", [["class", "mat-card-subtitle"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 0, 7, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](12, null, [" Artist: ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, [" Collective: ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](16, null, [" Owner: ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, 0, 11, "mat-card-actions", [["class", "mat-card-actions"]], [[2, "mat-card-actions-align-end", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 4, "button", [["mat-mini-fab", ""], ["matTooltip", "Remove from Claim"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.removeClaim(_v.context.index) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MAT_ICON_LOCATION"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["delete"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 4, "button", [["mat-mini-fab", ""], ["matTooltip", "Edit"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.removeClaim(_v.context.index) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MAT_ICON_LOCATION"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["edit"]))], function (_ck, _v) { _ck(_v, 23, 0); _ck(_v, 28, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0); var currVal_1 = (_v.context.index + 1); var currVal_2 = _co.data.length; _ck(_v, 6, 0, currVal_1, currVal_2); var currVal_3 = _v.context.$implicit.name; _ck(_v, 9, 0, currVal_3); var currVal_4 = _v.context.$implicit.artist; _ck(_v, 12, 0, currVal_4); var currVal_5 = _v.context.$implicit.collective; _ck(_v, 14, 0, currVal_5); var currVal_6 = _v.context.$implicit.owner; _ck(_v, 16, 0, currVal_6); var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).align === "end"); _ck(_v, 18, 0, currVal_7); var currVal_8 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).disabled || null); var currVal_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._animationMode === "NoopAnimations"); _ck(_v, 20, 0, currVal_8, currVal_9); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).inline; var currVal_11 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).color !== "warn")); _ck(_v, 22, 0, currVal_10, currVal_11); var currVal_12 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).disabled || null); var currVal_13 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._animationMode === "NoopAnimations"); _ck(_v, 25, 0, currVal_12, currVal_13); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).inline; var currVal_15 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).color !== "warn")); _ck(_v, 27, 0, currVal_14, currVal_15); }); }
function View_RegisterComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 18, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 8, "section", [["class", "mat-dialog-content"], ["mat-dialog-content", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 6, "div", [["class", "mt-4 mat-dialog-content"], ["fxLayout", "row wrap"], ["fxLayoutAlign", "start stretch"], ["fxLayoutGap", "20px"], ["mat-dialog-content", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 1720320, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutGapDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["Directionality"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutGapStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], { fxLayoutGap: [0, "fxLayoutGap"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_RegisterComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 8, "div", [["class", "mat-dialog-actions"], ["mat-dialog-actions", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 3, "button", [["mat-button", ""], ["mat-dialog-close", "cancel"], ["type", "button"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).dialogRef.close(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).dialogResult) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 606208, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogClose"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]], { dialogResult: [0, "dialogResult"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Cancel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 2, "button", [["mat-button", ""], ["mat-raised-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onNextStep() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Register"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "row wrap"; _ck(_v, 4, 0, currVal_0); var currVal_1 = "20px"; _ck(_v, 5, 0, currVal_1); var currVal_2 = "start stretch"; _ck(_v, 6, 0, currVal_2); var currVal_3 = _co.data.data; _ck(_v, 9, 0, currVal_3); var currVal_7 = "cancel"; _ck(_v, 14, 0, currVal_7); }, function (_ck, _v) { var currVal_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).disabled || null); var currVal_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)._animationMode === "NoopAnimations"); var currVal_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ariaLabel || null); _ck(_v, 12, 0, currVal_4, currVal_5, currVal_6); var currVal_8 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).disabled || null); var currVal_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._animationMode === "NoopAnimations"); _ck(_v, 16, 0, currVal_8, currVal_9); }); }
function View_RegisterComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 11, "mat-card", [["class", "mat-card"]], [[2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 3, "mat-icon", [["class", "mat-list-icon mat-icon notranslate"], ["mat-list-icon", ""], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListIconCssMatStyler"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MAT_ICON_LOCATION"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["library_music"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 0, 2, "h6", [["class", "mat-line"], ["mat-line", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatLine"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, 0, 2, "p", [["class", "mat-line"], ["mat-line", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatLine"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, [" ", " "]))], function (_ck, _v) { _ck(_v, 4, 0); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).inline; var currVal_2 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).color !== "warn")); _ck(_v, 2, 0, currVal_1, currVal_2); var currVal_3 = _v.context.$implicit.name; _ck(_v, 8, 0, currVal_3); var currVal_4 = _v.context.$implicit.artist; _ck(_v, 11, 0, currVal_4); }); }
function View_RegisterComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 47, "div", [["fxLayout", "row wrap"], ["fxLayoutAlign", "start end"], ["fxLayoutGap", "20px"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 1720320, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutGapDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["Directionality"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutGapStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], { fxLayoutGap: [0, "fxLayoutGap"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 33, "section", [["class", "my-5 mat-dialog-content"], ["fxLayout", "row wrap"], ["fxLayoutAlign", "start start"], ["fxLayoutGap", "20px"], ["mat-dialog-content", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 1720320, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutGapDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["Directionality"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutGapStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], { fxLayoutGap: [0, "fxLayoutGap"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 22, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" You are about to post your Releases to the following CMOs: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 15, "mat-list", [["class", "mat-list mat-list-base"]], null, null, null, _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_MatList_0"], _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_MatList"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 704512, null, 0, _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatList"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, 0, 6, "mat-list-item", [["class", "mat-list-item"]], [[2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null]], null, null, _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_MatListItem_0"], _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_MatListItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 1228800, null, 3, _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatNavList"]], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatList"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { _lines: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { _avatar: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { _icon: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, 2, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["PRS"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, 0, 6, "mat-list-item", [["class", "mat-list-item"]], [[2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null]], null, null, _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_MatListItem_0"], _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_MatListItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 1228800, null, 3, _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatNavList"]], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatList"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { _lines: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { _avatar: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, { _icon: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, 2, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["PPL"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" To add more CMOs please enable more "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 3, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](30, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Adapters"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 5, "div", [["fxLayout", "row wrap"], ["fxLayoutAlign", "start stretch"], ["fxLayoutGap", "20px"]], [[24, "@enterLeaveInOut-2", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 1720320, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutGapDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["Directionality"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutGapStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], { fxLayoutGap: [0, "fxLayoutGap"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_RegisterComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 9, "div", [["class", "mat-dialog-actions"], ["mat-dialog-actions", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 3, "button", [["mat-button", ""], ["mat-dialog-close", "cancel"], ["type", "button"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).dialogRef.close(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).dialogResult) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 606208, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogClose"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]], { dialogResult: [0, "dialogResult"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Close"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 3, "button", [["mat-button", ""], ["mat-dialog-close", "next"], ["mat-raised-button", ""], ["type", "button"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).dialogRef.close(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).dialogResult) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.nextClaimStep3(_co.data.section) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 606208, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogClose"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]], { dialogResult: [0, "dialogResult"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Continue"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "row wrap"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "20px"; _ck(_v, 2, 0, currVal_1); var currVal_2 = "start end"; _ck(_v, 3, 0, currVal_2); var currVal_3 = "row wrap"; _ck(_v, 5, 0, currVal_3); var currVal_4 = "20px"; _ck(_v, 6, 0, currVal_4); var currVal_5 = "start start"; _ck(_v, 7, 0, currVal_5); var currVal_12 = _ck(_v, 30, 0, "/adapters"); _ck(_v, 29, 0, currVal_12); var currVal_14 = "row wrap"; _ck(_v, 33, 0, currVal_14); var currVal_15 = "20px"; _ck(_v, 34, 0, currVal_15); var currVal_16 = "start stretch"; _ck(_v, 35, 0, currVal_16); var currVal_17 = _co.data.data; _ck(_v, 37, 0, currVal_17); var currVal_21 = "cancel"; _ck(_v, 42, 0, currVal_21); var currVal_25 = "next"; _ck(_v, 46, 0, currVal_25); }, function (_ck, _v) { var _co = _v.component; var currVal_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._icon); var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._icon); _ck(_v, 13, 0, currVal_6, currVal_7); var currVal_8 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._icon); var currVal_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._icon); _ck(_v, 20, 0, currVal_8, currVal_9); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).target; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).href; _ck(_v, 28, 0, currVal_10, currVal_11); var currVal_13 = _co.data; _ck(_v, 32, 0, currVal_13); var currVal_18 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).disabled || null); var currVal_19 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._animationMode === "NoopAnimations"); var currVal_20 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).ariaLabel || null); _ck(_v, 40, 0, currVal_18, currVal_19, currVal_20); var currVal_22 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).disabled || null); var currVal_23 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45)._animationMode === "NoopAnimations"); var currVal_24 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).ariaLabel || null); _ck(_v, 44, 0, currVal_22, currVal_23, currVal_24); }); }
function View_RegisterComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["You need to enable your "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 3, "a", [["mat-dialog-close", "true"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](5, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CMO Adapters"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" before continuing "]))], function (_ck, _v) { var currVal_2 = _ck(_v, 5, 0, "/adapters"); _ck(_v, 4, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).href; _ck(_v, 3, 0, currVal_0, currVal_1); }); }
function View_RegisterComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Register Your Release"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\nPlease be sure all info is correct before starting the distribution process.\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_RegisterComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_RegisterComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_RegisterComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.nextStep; _ck(_v, 4, 0, currVal_0); var currVal_1 = (_co.nextStep && _co.enabled.length); _ck(_v, 6, 0, currVal_1); var currVal_2 = (_co.enabled.length === 0); _ck(_v, 8, 0, currVal_2); }, null); }
function View_RegisterComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-register", [], null, null, null, View_RegisterComponent_0, RenderType_RegisterComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MAT_DIALOG_DATA"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"], _services_adapters_service__WEBPACK_IMPORTED_MODULE_20__["AdaptersService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var RegisterComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-register", _register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"], View_RegisterComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/assets/music-releases/register/register.component.scss.shim.ngstyle.js":
/*!****************************************************************************************!*\
  !*** ./src/app/assets/music-releases/register/register.component.scss.shim.ngstyle.js ***!
  \****************************************************************************************/
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
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2V0cy9tdXNpYy1yZWxlYXNlcy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"];



/***/ }),

/***/ "./src/app/assets/music-releases/register/register.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/assets/music-releases/register/register.component.ts ***!
  \**********************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_adapters_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/adapters.service */ "./src/app/services/adapters.service.ts");



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(data, router, adapters) {
        this.data = data;
        this.router = router;
        this.adapters = adapters;
        this.nextStep = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(RegisterComponent.prototype, "enabled", {
        // Object.keys(adapters);
        get: function () { return Object.keys(this.adapters.enabledAdapters); },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onNextStep = function () {
        console.log(this.data);
        this.nextStep = true;
    };
    RegisterComponent.prototype.nextClaimStep3 = function (section) {
        //  localStorage.setItem(section, JSON.stringify(this.data.data));
        // this.router.navigate(['/claims']);
    };
    RegisterComponent.prototype.removeClaim = function (i) {
        this.data.splice(i, 1);
    };
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/assets/music-releases/tasks/tasks.component.ngfactory.js":
/*!**************************************************************************!*\
  !*** ./src/app/assets/music-releases/tasks/tasks.component.ngfactory.js ***!
  \**************************************************************************/
/*! exports provided: RenderType_TasksComponent, View_TasksComponent_0, View_TasksComponent_Host_0, TasksComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TasksComponent", function() { return RenderType_TasksComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TasksComponent_0", function() { return View_TasksComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TasksComponent_Host_0", function() { return View_TasksComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponentNgFactory", function() { return TasksComponentNgFactory; });
/* harmony import */ var _tasks_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.component.scss.shim.ngstyle */ "./src/app/assets/music-releases/tasks/tasks.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _node_modules_angular_material_progress_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/progress-bar/typings/index.ngfactory */ "./node_modules/@angular/material/progress-bar/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tasks_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tasks.component */ "./src/app/assets/music-releases/tasks/tasks.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_adapters_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/adapters.service */ "./src/app/services/adapters.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 












var styles_TasksComponent = [_tasks_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_TasksComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_TasksComponent, data: {} });

function View_TasksComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 16, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "td", [["style", "width:80px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 5, "mat-chip", [["class", "mat-chip"], ["role", "option"]], [[1, "tabindex", 0], [2, "mat-chip-selected", null], [2, "mat-chip-with-avatar", null], [2, "mat-chip-with-trailing-icon", null], [2, "mat-chip-disabled", null], [2, "_mat-animation-noopable", null], [1, "disabled", 0], [1, "aria-disabled", 0], [1, "aria-selected", 0]], [[null, "click"], [null, "keydown"], [null, "focus"], [null, "blur"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._handleClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } if (("focus" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).focus() !== false);
        ad = (pd_2 && ad);
    } if (("blur" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._blur() !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 147456, null, 3, _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__["MatChip"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_RIPPLE_GLOBAL_OPTIONS"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { avatar: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { trailingIcon: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { removeIcon: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 2, "td", [["style", "min-width:200px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "mat-progress-bar", [["aria-valuemax", "100"], ["aria-valuemin", "0"], ["class", "mat-progress-bar"], ["mode", "determinate"], ["role", "progressbar"]], [[1, "aria-valuenow", 0], [1, "mode", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_progress_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatProgressBar_0"], _node_modules_angular_material_progress_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatProgressBar"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 4374528, null, 0, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBar"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]], [2, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MAT_PROGRESS_BAR_LOCATION"]]], { value: [0, "value"], mode: [1, "mode"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "i", [["class", "material-icons"], ["matTooltip", "Awaiting response"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](16, null, [" ", " "]))], function (_ck, _v) { var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.percentComplete, ""); var currVal_15 = "determinate"; _ck(_v, 13, 0, currVal_14, currVal_15); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).disabled ? null : (0 - 1)); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).selected; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).avatar; var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).trailingIcon || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).removeIcon); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).disabled; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._animationsDisabled; var currVal_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).disabled || null); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).disabled.toString(); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).ariaSelected; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); var currVal_9 = _v.context.$implicit.step; _ck(_v, 7, 0, currVal_9); var currVal_10 = _v.context.$implicit.name; _ck(_v, 10, 0, currVal_10); var currVal_11 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).mode === "indeterminate") || (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).mode === "query")) ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).value); var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).mode; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)._isNoopAnimation; _ck(_v, 12, 0, currVal_11, currVal_12, currVal_13); var currVal_16 = _v.context.$implicit.icon; _ck(_v, 16, 0, currVal_16); }); }
function View_TasksComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "table", [["class", "table table-sm"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TasksComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.dataSource; _ck(_v, 2, 0, currVal_0); }, null); }
function View_TasksComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-tasks", [], null, null, null, View_TasksComponent_0, RenderType_TasksComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _tasks_component__WEBPACK_IMPORTED_MODULE_9__["TasksComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _services_adapters_service__WEBPACK_IMPORTED_MODULE_11__["AdaptersService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var TasksComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-tasks", _tasks_component__WEBPACK_IMPORTED_MODULE_9__["TasksComponent"], View_TasksComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/assets/music-releases/tasks/tasks.component.scss.shim.ngstyle.js":
/*!**********************************************************************************!*\
  !*** ./src/app/assets/music-releases/tasks/tasks.component.scss.shim.ngstyle.js ***!
  \**********************************************************************************/
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
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2V0cy9tdXNpYy1yZWxlYXNlcy90YXNrcy90YXNrcy5jb21wb25lbnQuc2NzcyJ9 */"];



/***/ }),

/***/ "./src/app/assets/music-releases/tasks/tasks.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/assets/music-releases/tasks/tasks.component.ts ***!
  \****************************************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_adapters_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/adapters.service */ "./src/app/services/adapters.service.ts");



var PROGRESS_DATA = [
    { step: 1, name: 'Releases Selected', percentComplete: 100, icon: 'done' },
    { step: 2, name: 'Data confirmed', percentComplete: 100, icon: 'done' },
];
var TasksComponent = /** @class */ (function () {
    function TasksComponent(
    // @Inject(MAT_DIALOG_DATA) public data: any,
    router, adapters) {
        this.router = router;
        this.adapters = adapters;
        this.nextStep = false;
        this.displayedColumns = ['step', 'name', 'percentComplete', 'icon'];
        this.dataSource = [];
        this.nextDataSource = [];
    }
    TasksComponent.prototype.ngOnInit = function () {
        PROGRESS_DATA = [
            { step: 1, name: 'Releases Selected', percentComplete: 100, icon: 'done' },
            { step: 2, name: 'Data confirmed', percentComplete: 100, icon: 'done' },
        ];
        this.dataSource = [];
        this.nextDataSource = [];
        this.dataSource = PROGRESS_DATA;
        this.onNextStep();
    };
    Object.defineProperty(TasksComponent.prototype, "enabled", {
        get: function () { return Object.keys(this.adapters.enabledAdapters); },
        enumerable: true,
        configurable: true
    });
    TasksComponent.prototype.onNextStep = function () {
        var _this = this;
        this.nextDataSource = [];
        this.nextDataSource = PROGRESS_DATA;
        this.enabled.forEach(function (input) {
            _this.nextDataSource.push({
                step: _this.nextDataSource.length + 1,
                name: 'Sent to: ' + input,
                percentComplete: _this.nextDataSource.length * 3,
                icon: 'schedule'
            });
        });
        this.nextStep = true;
        this.dataSource = [];
        this.dataSource = this.nextDataSource;
    };
    return TasksComponent;
}());



/***/ })

}]);
//# sourceMappingURL=music-releases-music-releases-module-ngfactory.js.map