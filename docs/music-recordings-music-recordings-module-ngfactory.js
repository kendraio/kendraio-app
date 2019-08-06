(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["music-recordings-music-recordings-module-ngfactory"],{

/***/ "./src/app/assets/music-recordings/_shared/forms/formModel.ts":
/*!********************************************************************!*\
  !*** ./src/app/assets/music-recordings/_shared/forms/formModel.ts ***!
  \********************************************************************/
/*! exports provided: STATES_AUTOCOMPLETE_LIST, MY_FORM_MODEL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATES_AUTOCOMPLETE_LIST", function() { return STATES_AUTOCOMPLETE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORM_MODEL", function() { return MY_FORM_MODEL; });
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm5/core.js");

var STATES_AUTOCOMPLETE_LIST = [
    'Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
    'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
    'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
    'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
    'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];
var MY_FORM_MODEL = [
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
        id: 'ISRC',
        placeholder: 'ISRC',
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is Required'
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
        id: 'Country',
        placeholder: 'Country',
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        }
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'Owner',
        placeholder: 'Owner',
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        }
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'Collective',
        placeholder: 'Collective',
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        }
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'Submitted to',
        placeholder: 'Submitted to...',
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        }
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicFormGroupModel"]({
        id: 'signoff',
        group: [
        // new DynamicSwitchModel({
        //
        //     id: 'reminder',
        //     offLabel: 'Send me a reminder',
        //     onLabel: 'Send me a reminder',
        //     value: false
        //
        // }),
        //
        // new DynamicSwitchModel({
        //
        //     id: 'updates',
        //     offLabel: 'Subscribe to Updates',
        //     onLabel: 'Subscribe to Updates',
        //     value: false
        // }),
        //
        // new DynamicCheckboxModel({
        //     id: 'confirm',
        //     label: 'I confirm the information given above',
        //     value: false,
        //     validators: {
        //         requiredTrue: null
        //     },
        //     errorMessages: {
        //         required: 'You must confirm your data is correct'
        //     }
        // })
        ]
    })
];


/***/ }),

/***/ "./src/app/assets/music-recordings/_shared/forms/registerRecordings.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/assets/music-recordings/_shared/forms/registerRecordings.ts ***!
  \*****************************************************************************/
/*! exports provided: RECORDING_REGISTER_FORM_MODEL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECORDING_REGISTER_FORM_MODEL", function() { return RECORDING_REGISTER_FORM_MODEL; });
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm5/core.js");

var RECORDING_REGISTER_FORM_MODEL = [
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'ISRC',
        maxLength: 50,
        placeholder: 'ISRC',
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'recordingTitle',
        maxLength: 25,
        placeholder: 'Recording Title',
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
        id: 'bandArtistName',
        maxLength: 50,
        placeholder: 'Band/Artist Name',
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'genere',
        placeholder: 'Genere',
        hint: 'if a classical or dramatic work',
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        }
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'date',
        placeholder: 'Date',
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'Name',
        maxLength: 50,
        placeholder: 'Name',
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'Line',
        maxLength: 50,
        placeholder: 'Line',
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'countryOfRecording',
        maxLength: 50,
        placeholder: 'Country of recording',
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'countryOfComposition',
        maxLength: 50,
        placeholder: 'Country of composition',
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'duration',
        maxLength: 50,
        placeholder: 'Duration',
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'recordingDate',
        maxLength: 50,
        placeholder: 'Recording date',
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicFormGroupModel"]({
        id: 'cmo',
        group: [
            new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicCheckboxGroupModel"]({
                id: 'cmo',
                label: 'Who would you like to register with?',
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

/***/ "./src/app/assets/music-recordings/index.ts":
/*!**************************************************!*\
  !*** ./src/app/assets/music-recordings/index.ts ***!
  \**************************************************/
/*! exports provided: IndexComponent, MusicRecordingsEditComponent, MusicRecordingsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _music_recordings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./music-recordings.component */ "./src/app/assets/music-recordings/music-recordings.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return _music_recordings_component__WEBPACK_IMPORTED_MODULE_0__["IndexComponent"]; });

/* harmony import */ var _music_recordings_detail_music_recordings_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./music-recordings-detail/music-recordings-detail.component */ "./src/app/assets/music-recordings/music-recordings-detail/music-recordings-detail.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MusicRecordingsDetailComponent", function() { return _music_recordings_detail_music_recordings_detail_component__WEBPACK_IMPORTED_MODULE_1__["MusicRecordingsDetailComponent"]; });

/* harmony import */ var _music_recordings_edit_music_recordings_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./music-recordings-edit/music-recordings-edit.component */ "./src/app/assets/music-recordings/music-recordings-edit/music-recordings-edit.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MusicRecordingsEditComponent", function() { return _music_recordings_edit_music_recordings_edit_component__WEBPACK_IMPORTED_MODULE_2__["MusicRecordingsEditComponent"]; });






/***/ }),

/***/ "./src/app/assets/music-recordings/music-recordings-detail/music-recordings-detail.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/assets/music-recordings/music-recordings-detail/music-recordings-detail.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: MusicRecordingsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicRecordingsDetailComponent", function() { return MusicRecordingsDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var MusicRecordingsDetailComponent = /** @class */ (function () {
    function MusicRecordingsDetailComponent() {
    }
    MusicRecordingsDetailComponent.prototype.ngOnInit = function () {
    };
    return MusicRecordingsDetailComponent;
}());



/***/ }),

/***/ "./src/app/assets/music-recordings/music-recordings-edit/form.layout.ts":
/*!******************************************************************************!*\
  !*** ./src/app/assets/music-recordings/music-recordings-edit/form.layout.ts ***!
  \******************************************************************************/
/*! exports provided: FORM_LAYOUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM_LAYOUT", function() { return FORM_LAYOUT; });
var FORM_LAYOUT = {
    'addressStreet': {
        element: {
            host: 'material-form-group'
        }
    }
};


/***/ }),

/***/ "./src/app/assets/music-recordings/music-recordings-edit/music-recordings-edit.component.ngfactory.js":
/*!************************************************************************************************************!*\
  !*** ./src/app/assets/music-recordings/music-recordings-edit/music-recordings-edit.component.ngfactory.js ***!
  \************************************************************************************************************/
/*! exports provided: RenderType_MusicRecordingsEditComponent, View_MusicRecordingsEditComponent_0, View_MusicRecordingsEditComponent_Host_0, MusicRecordingsEditComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_MusicRecordingsEditComponent", function() { return RenderType_MusicRecordingsEditComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MusicRecordingsEditComponent_0", function() { return View_MusicRecordingsEditComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MusicRecordingsEditComponent_Host_0", function() { return View_MusicRecordingsEditComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicRecordingsEditComponentNgFactory", function() { return MusicRecordingsEditComponentNgFactory; });
/* harmony import */ var _music_recordings_edit_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./music-recordings-edit.component.scss.shim.ngstyle */ "./src/app/assets/music-recordings/music-recordings-edit/music-recordings-edit.component.scss.shim.ngstyle.js");
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
/* harmony import */ var _music_recordings_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./music-recordings-edit.component */ "./src/app/assets/music-recordings/music-recordings-edit/music-recordings-edit.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

















var styles_MusicRecordingsEditComponent = [_music_recordings_edit_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_MusicRecordingsEditComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_MusicRecordingsEditComponent, data: {} });

function View_MusicRecordingsEditComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 23, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 12, "mat-card", [["class", "mat-card"]], [[2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 10, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
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
function View_MusicRecordingsEditComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-music-recordings-edit", [], null, null, null, View_MusicRecordingsEditComponent_0, RenderType_MusicRecordingsEditComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _music_recordings_edit_component__WEBPACK_IMPORTED_MODULE_16__["MusicRecordingsEditComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MAT_DIALOG_DATA"], _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_8__["DynamicFormService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var MusicRecordingsEditComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-music-recordings-edit", _music_recordings_edit_component__WEBPACK_IMPORTED_MODULE_16__["MusicRecordingsEditComponent"], View_MusicRecordingsEditComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/assets/music-recordings/music-recordings-edit/music-recordings-edit.component.scss.shim.ngstyle.js":
/*!********************************************************************************************************************!*\
  !*** ./src/app/assets/music-recordings/music-recordings-edit/music-recordings-edit.component.scss.shim.ngstyle.js ***!
  \********************************************************************************************************************/
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
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2V0cy9tdXNpYy1yZWNvcmRpbmdzL211c2ljLXJlY29yZGluZ3MtZWRpdC9tdXNpYy1yZWNvcmRpbmdzLWVkaXQuY29tcG9uZW50LnNjc3MifQ== */"];



/***/ }),

/***/ "./src/app/assets/music-recordings/music-recordings-edit/music-recordings-edit.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/assets/music-recordings/music-recordings-edit/music-recordings-edit.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: MusicRecordingsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicRecordingsEditComponent", function() { return MusicRecordingsEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_forms_formModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_shared/forms/formModel */ "./src/app/assets/music-recordings/_shared/forms/formModel.ts");
/* harmony import */ var _form_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form.layout */ "./src/app/assets/music-recordings/music-recordings-edit/form.layout.ts");





var MusicRecordingsEditComponent = /** @class */ (function () {
    function MusicRecordingsEditComponent(data, formService) {
        this.data = data;
        this.formService = formService;
        this.formModel = _shared_forms_formModel__WEBPACK_IMPORTED_MODULE_3__["MY_FORM_MODEL"];
        this.formLayout = _form_layout__WEBPACK_IMPORTED_MODULE_4__["FORM_LAYOUT"];
    }
    MusicRecordingsEditComponent.prototype.ngOnInit = function () {
        this.formGroup = this.formService.createFormGroup(this.formModel);
        this.formGroup.patchValue(this.data);
    };
    MusicRecordingsEditComponent.prototype.onBlur = function ($event) {
        console.log("Material blur event on: " + $event.model.id + ": ", $event);
    };
    MusicRecordingsEditComponent.prototype.onChange = function ($event) {
        console.log("Material change event on: " + $event.model.id + ": ", $event);
    };
    MusicRecordingsEditComponent.prototype.onFocus = function ($event) {
        console.log("Material focus event on: " + $event.model.id + ": ", $event);
    };
    MusicRecordingsEditComponent.prototype.onMatEvent = function ($event) {
        console.log("Material " + $event.type + " event on: " + $event.model.id + ": ", $event);
    };
    return MusicRecordingsEditComponent;
}());



/***/ }),

/***/ "./src/app/assets/music-recordings/music-recordings-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/assets/music-recordings/music-recordings-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: MusicRecordingsRoutingModule, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicRecordingsRoutingModule", function() { return MusicRecordingsRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/app/assets/music-recordings/index.ts");


var ɵ0 = {
    breadcrumb: ''
};
var routes = [
    { path: '', component: _index__WEBPACK_IMPORTED_MODULE_1__["IndexComponent"],
        data: ɵ0 }
    // { path: 'edit/:id', component: pages.MusicRecordingsEditComponent },
    // { path: 'detail/:id', component: pages.MusicRecordingsDetailComponent },
];
var MusicRecordingsRoutingModule = /** @class */ (function () {
    function MusicRecordingsRoutingModule() {
    }
    return MusicRecordingsRoutingModule;
}());




/***/ }),

/***/ "./src/app/assets/music-recordings/music-recordings.component.ngfactory.js":
/*!*********************************************************************************!*\
  !*** ./src/app/assets/music-recordings/music-recordings.component.ngfactory.js ***!
  \*********************************************************************************/
/*! exports provided: RenderType_IndexComponent, View_IndexComponent_0, View_IndexComponent_Host_0, IndexComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_IndexComponent", function() { return RenderType_IndexComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_IndexComponent_0", function() { return View_IndexComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_IndexComponent_Host_0", function() { return View_IndexComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponentNgFactory", function() { return IndexComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _node_modules_angular_material_progress_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/progress-bar/typings/index.ngfactory */ "./node_modules/@angular/material/progress-bar/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/list/typings/index.ngfactory */ "./node_modules/@angular/material/list/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/toolbar/typings/index.ngfactory */ "./node_modules/@angular/material/toolbar/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_directives_help_text_btn_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../_shared/directives/help-text-btn.directive */ "./src/app/_shared/directives/help-text-btn.directive.ts");
/* harmony import */ var _shared_services_help_text_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../_shared/services/help-text.service */ "./src/app/_shared/services/help-text.service.ts");
/* harmony import */ var _services_app_settings_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/app-settings.service */ "./src/app/services/app-settings.service.ts");
/* harmony import */ var _node_modules_ag_grid_angular_dist_agGridAngular_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../node_modules/ag-grid-angular/dist/agGridAngular.ngfactory */ "./node_modules/ag-grid-angular/dist/agGridAngular.ngfactory.js");
/* harmony import */ var ag_grid_angular_dist_angularFrameworkOverrides__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ag-grid-angular/dist/angularFrameworkOverrides */ "./node_modules/ag-grid-angular/dist/angularFrameworkOverrides.js");
/* harmony import */ var ag_grid_angular_dist_angularFrameworkOverrides__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular_dist_angularFrameworkOverrides__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var ag_grid_angular_dist_angularFrameworkComponentWrapper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ag-grid-angular/dist/angularFrameworkComponentWrapper */ "./node_modules/ag-grid-angular/dist/angularFrameworkComponentWrapper.js");
/* harmony import */ var ag_grid_angular_dist_angularFrameworkComponentWrapper__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular_dist_angularFrameworkComponentWrapper__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var ag_grid_angular_dist_agGridAngular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ag-grid-angular/dist/agGridAngular */ "./node_modules/ag-grid-angular/dist/agGridAngular.js");
/* harmony import */ var ag_grid_angular_dist_agGridAngular__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular_dist_agGridAngular__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../node_modules/ag-grid-angular/dist/agGridColumn.ngfactory */ "./node_modules/ag-grid-angular/dist/agGridColumn.ngfactory.js");
/* harmony import */ var ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ag-grid-angular/dist/agGridColumn */ "./node_modules/ag-grid-angular/dist/agGridColumn.js");
/* harmony import */ var ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _music_recordings_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./music-recordings.component */ "./src/app/assets/music-recordings/music-recordings.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_page_title_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../services/page-title.service */ "./src/app/services/page-title.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _services_test_data_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../services/test-data.service */ "./src/app/services/test-data.service.ts");
/* harmony import */ var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../_shared/services/config.service */ "./src/app/_shared/services/config.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





























var styles_IndexComponent = ["dynamic-material-form[fxLayoutAlign][_ngcontent-%COMP%] { padding:10px; padding-left: 25px;}"];
var RenderType_IndexComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_IndexComponent, data: { "animation": [{ type: 7, name: "openClose", definitions: [{ type: 0, name: "open", styles: { type: 6, styles: { display: "block", opacity: 1 }, offset: null }, options: undefined }, { type: 0, name: "closed", styles: { type: 6, styles: { height: "0px", opacity: 0.5 }, offset: null }, options: undefined }, { type: 1, expr: "open => closed", animation: [{ type: 4, styles: null, timings: "1s 500ms ease-out" }], options: null }, { type: 1, expr: "closed => open", animation: [{ type: 4, styles: null, timings: "500ms  ease-out" }], options: null }], options: {} }, { type: 7, name: "enterLeaveInOut-2", definitions: [{ type: 1, expr: "* => *", animation: [{ type: 11, selector: ":enter", animation: { type: 6, styles: { opacity: 0 }, offset: null }, options: { optional: true } }, { type: 11, selector: ":enter", animation: { type: 12, timings: "200ms", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 0, transform: "scale(1)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 0.4, transform: "scale(1.01)", offset: 0.3 }, offset: null }, { type: 6, styles: { opacity: 1, transform: "scale(1)", offset: 1 }, offset: null }] }, timings: ".6s ease-in" }] }, options: { optional: true } }, { type: 11, selector: ":leave", animation: { type: 12, timings: "300ms", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 1, transform: "scale(.5)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 0.5, transform: "scale(0)", offset: 0.3 }, offset: null }] }, timings: ".6s ease-out" }] }, options: { optional: true } }], options: null }], options: {} }, { type: 7, name: "enterLeaveInOut-3", definitions: [{ type: 1, expr: "* => *", animation: [{ type: 11, selector: ":enter", animation: { type: 6, styles: { opacity: 0 }, offset: null }, options: { optional: true } }, { type: 11, selector: ":enter", animation: { type: 12, timings: "700ms", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 0, transform: "scale(1)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 0.4, transform: "scale(1.01)", offset: 0.3 }, offset: null }, { type: 6, styles: { opacity: 1, transform: "scale(1)", offset: 1 }, offset: null }] }, timings: ".6s ease-in" }] }, options: { optional: true } }, { type: 11, selector: ":leave", animation: { type: 12, timings: "300ms", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 1, transform: "scale(.5)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 0.5, transform: "scale(0)", offset: 0.3 }, offset: null }] }, timings: ".6s ease-out" }] }, options: { optional: true } }], options: null }], options: {} }, { type: 7, name: "enterLeaveInOut", definitions: [{ type: 1, expr: "* => *", animation: [{ type: 11, selector: ":enter", animation: { type: 6, styles: { opacity: 0 }, offset: null }, options: { optional: true } }, { type: 11, selector: ":enter", animation: { type: 12, timings: "100ms", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 0, transform: "scale(.9)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 0.5, transform: "scale(1.1)", offset: 0.3 }, offset: null }, { type: 6, styles: { opacity: 1, transform: "scale(1)", offset: 1 }, offset: null }] }, timings: ".6s ease-in" }] }, options: { optional: true } }, { type: 11, selector: ":leave", animation: { type: 12, timings: "300ms", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 1, transform: "scale(.5)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 0.5, transform: "scale(0)", offset: 0.3 }, offset: null }] }, timings: ".6s ease-out" }] }, options: { optional: true } }], options: null }], options: {} }, { type: 7, name: "enterLeaveUpDwn2", definitions: [{ type: 1, expr: "* => *", animation: [{ type: 11, selector: ":enter", animation: { type: 6, styles: { opacity: 0 }, offset: null }, options: { optional: true } }, { type: 11, selector: ":enter", animation: { type: 12, timings: "100ms", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 0, transform: "translateY(-1%)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 0.5, transform: "translateY(15px)", offset: 0.3 }, offset: null }, { type: 6, styles: { opacity: 1, transform: "translateY(0)", offset: 1 }, offset: null }] }, timings: ".6s ease-in" }] }, options: { optional: true } }, { type: 11, selector: ":leave", animation: { type: 12, timings: "300ms", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 1, transform: "translateY(0)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 0.5, transform: "translateY(15px)", offset: 0.3 }, offset: null }, { type: 6, styles: { opacity: 0, transform: "translateY(-5%)", offset: 1 }, offset: null }] }, timings: ".6s ease-out" }] }, options: { optional: true } }], options: null }], options: {} }, { type: 7, name: "enterLeaveUpDwn", definitions: [{ type: 1, expr: "* => *", animation: [{ type: 11, selector: ":enter", animation: { type: 6, styles: { opacity: 0 }, offset: null }, options: { optional: true } }, { type: 11, selector: ":enter", animation: { type: 12, timings: "300ms", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 0, transform: "translateY(-5%)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 0.5, transform: "translateY(35px)", offset: 0.3 }, offset: null }, { type: 6, styles: { opacity: 1, transform: "translateY(0)", offset: 1 }, offset: null }] }, timings: ".6s ease-in" }] }, options: { optional: true } }, { type: 11, selector: ":leave", animation: { type: 12, timings: "300ms", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 1, transform: "translateY(0)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 0.5, transform: "translateY(35px)", offset: 0.3 }, offset: null }, { type: 6, styles: { opacity: 0, transform: "translateY(-75%)", offset: 1 }, offset: null }] }, timings: ".6s ease-out" }] }, options: { optional: true } }], options: null }], options: {} }, { type: 7, name: "enterAnimateUpDwn", definitions: [{ type: 0, name: "void", styles: { type: 6, styles: { opacity: 0, transform: "translate(0, -10px)" }, offset: null }, options: undefined }, { type: 1, expr: "* => *", animation: [{ type: 4, styles: null, timings: ".8s cubic-bezier(0.175, 0.885, 0.32, 1.275)" }], options: null }], options: {} }, { type: 7, name: "enterAnimateInOut", definitions: [{ type: 0, name: "void", styles: { type: 6, styles: { opacity: 0, transform: "scale(.3)" }, offset: null }, options: undefined }, { type: 1, expr: "* => *", animation: [{ type: 4, styles: null, timings: "1s cubic-bezier(0.175, 0.885, 0.32, 1.275)" }], options: null }], options: {} }, { type: 7, name: "validationMsg", definitions: [{ type: 0, name: "void", styles: { type: 6, styles: { opacity: 0, transform: "translate(0, 20px)" }, offset: null }, options: undefined }, { type: 1, expr: "* => *", animation: [{ type: 4, styles: null, timings: "1s cubic-bezier(0.175, 0.885, 0.32, 1.275)" }], options: null }], options: {} }, { type: 7, name: "enterAnimate", definitions: [{ type: 0, name: "true", styles: { type: 6, styles: { opacity: 1, transform: "translate(200px , 0)" }, offset: null }, options: undefined }, { type: 0, name: "void", styles: { type: 6, styles: { opacity: 0, transform: "translate(200px , 0)" }, offset: null }, options: undefined }, { type: 1, expr: "* => void", animation: [{ type: 4, styles: null, timings: "300ms ease-in" }], options: null }, { type: 1, expr: "void => *", animation: [{ type: 4, styles: null, timings: "800ms 0.3s ease-out" }], options: null }], options: {} }, { type: 7, name: "isSubmitted", definitions: [{ type: 0, name: "true", styles: { type: 6, styles: { transform: "scale(0.4)" }, offset: null }, options: undefined }, { type: 1, expr: "1 => 0", animation: [{ type: 4, styles: null, timings: "1.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)" }], options: null }, { type: 1, expr: "0 => 1", animation: { type: 4, styles: null, timings: "1.5s cubic-bezier(0.215, 0.610, 0.355, 2.000)" }, options: null }], options: {} }, { type: 7, name: "zoomInOut", definitions: [{ type: 0, name: "small", styles: { type: 6, styles: { transform: "translateY(0)", opacity: 1 }, offset: null }, options: undefined }, { type: 0, name: "large", styles: { type: 6, styles: { transform: "scale(0.95)", opacity: 0 }, offset: null }, options: undefined }, { type: 1, expr: "1 => 0", animation: [{ type: 4, styles: null, timings: "1.5s cubic-bezier(0.215, 0.610, 0.355, 2.000)" }], options: null }, { type: 1, expr: "0 => 1", animation: { type: 4, styles: null, timings: "1.5s cubic-bezier(0.215, 0.610, 0.355, 1.600)" }, options: null }], options: {} }, { type: 7, name: "dropInOut", definitions: [{ type: 0, name: "small", styles: { type: 6, styles: { transform: "scale(0)" }, offset: null }, options: undefined }, { type: 0, name: "large", styles: { type: 6, styles: { transform: "scale(1.5)" }, offset: null }, options: undefined }, { type: 1, expr: "small => large", animation: { type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 0, transform: "translateY(-75%)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 1, transform: "translateY(0)", offset: 1 }, offset: null }] }, timings: "1.5s cubic-bezier(0.215, 0.610, 0.355, 2.000)" }, options: null }, { type: 1, expr: "large => small", animation: { type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 0, transform: "translateY(0)", offset: 1 }, offset: null }] }, timings: "1.5s cubic-bezier(0.215, 0.610, 0.355, 2.000)" }, options: null }], options: {} }, { type: 7, name: "dropInOut2", definitions: [{ type: 0, name: "small", styles: { type: 6, styles: { transform: "scale(1)" }, offset: null }, options: undefined }, { type: 0, name: "large", styles: { type: 6, styles: { transform: "scale(1.5)" }, offset: null }, options: undefined }, { type: 1, expr: "small <=> large", animation: { type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 0, transform: "translateY(75%)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 1, transform: "translateY(0)", offset: 1 }, offset: null }] }, timings: "1.5s cubic-bezier(0.215, 0.610, 0.355, 2.000)" }, options: null }], options: {} }] } });

function View_IndexComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 23, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["ISDN-2345/4321"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](8, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](10, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](12, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](14, null, ["", " ", " ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["JsonPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Submitted.. pending response"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 5, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 1, "button", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Edit"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 2, "a", [["mat-stroked-button", ""]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22)._haltDisabledEvents($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatAnchor_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["view"]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.Title; _ck(_v, 4, 0, currVal_0); var currVal_1 = _v.context.$implicit.altTitle; _ck(_v, 6, 0, currVal_1); var currVal_2 = _v.context.$implicit.Duration; _ck(_v, 8, 0, currVal_2); var currVal_3 = _v.context.$implicit.instrumentation; _ck(_v, 10, 0, currVal_3); var currVal_4 = _v.context.$implicit.CAE; _ck(_v, 12, 0, currVal_4); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 14, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).transform(_v.context.$implicit.cmo)); var currVal_6 = _v.context.$implicit.cmo[1]; var currVal_7 = _v.context.$implicit.cmo[2]; _ck(_v, 14, 0, currVal_5, currVal_6, currVal_7); var currVal_8 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).disabled ? (0 - 1) : (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).tabIndex || 0)); var currVal_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).disabled || null); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).disabled.toString(); var currVal_11 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22)._animationMode === "NoopAnimations"); _ck(_v, 21, 0, currVal_8, currVal_9, currVal_10, currVal_11); }); }
function View_IndexComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 24, "div", [["class", "table-responsive-lg"]], [[24, "@enterAnimateUpDwn", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 23, "table", [["class", "table table-striped table-hover table-sm small"]], [[24, "@enterLeaveInOut-2", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 19, "thead", [["class", "thead-dark"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 18, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Your Ref"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Title"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Alt Title"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Duration"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Instrumentation"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["CAE"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["CMO"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Status"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Actions"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_IndexComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](24, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.newRecordings; _ck(_v, 24, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = undefined; _ck(_v, 0, 0, currVal_0); var currVal_1 = _co.newRecordings; _ck(_v, 1, 0, currVal_1); }); }
function View_IndexComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "mat-progress-bar", [["aria-valuemax", "100"], ["aria-valuemin", "0"], ["class", "mat-progress-bar"], ["mode", "indeterminate"], ["role", "progressbar"]], [[1, "aria-valuenow", 0], [1, "mode", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_progress_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatProgressBar_0"], _node_modules_angular_material_progress_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatProgressBar"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4374528, null, 0, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBar"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]], [2, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MAT_PROGRESS_BAR_LOCATION"]]], { mode: [0, "mode"] }, null)], function (_ck, _v) { var currVal_3 = "indeterminate"; _ck(_v, 1, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = (((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).mode === "indeterminate") || (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).mode === "query")) ? null : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).value); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).mode; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._isNoopAnimation; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
function View_IndexComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "mat-action-list", [["class", "mat-list mat-list-base"]], null, null, null, _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatList_0"], _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatList"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 704512, null, 0, _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatList"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, 0, 2, "button", [["mat-button", ""], ["mat-raised-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.sendToClaim($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Claim Selected"]))], null, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).disabled || null); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3)._animationMode === "NoopAnimations"); _ck(_v, 2, 0, currVal_0, currVal_1); }); }
function View_IndexComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 9, "mat-toolbar", [["class", "mat-toolbar"]], [[2, "mat-toolbar-multiple-rows", null], [2, "mat-toolbar-single-row", null]], null, null, _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatToolbar_0"], _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4243456, null, 1, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, { _toolbarRows: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, 0, 6, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 3, "button", [["mat-button", ""], ["mat-raised-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openAddNewDialog() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](6, 0, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "span", [["appHelp", "help.1"], ["class", "ml-3"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 16384, null, 0, _shared_directives_help_text_btn_directive__WEBPACK_IMPORTED_MODULE_14__["HelpTextBtnDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _shared_services_help_text_service__WEBPACK_IMPORTED_MODULE_15__["HelpTextService"], _services_app_settings_service__WEBPACK_IMPORTED_MODULE_16__["AppSettingsService"]], { helpRef: [0, "helpRef"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_IndexComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](13, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_IndexComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 53, "div", [["class", "table-responsive-lg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 16777216, null, null, 46, "ag-grid-angular", [["animateRows", "true"], ["class", "ag-theme-material"], ["rowSelection", "multiple"], ["style", "width: 100%; height: 700px;"]], [[24, "@enterAnimateUpDwn", 0]], [[null, "cellClicked"], [null, "selectionChanged"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("cellClicked" === en)) {
        var pd_0 = (_co.onCellClicked($event) !== false);
        ad = (pd_0 && ad);
    } if (("selectionChanged" === en)) {
        var pd_1 = (_co.onSelectionChanged($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_ag_grid_angular_dist_agGridAngular_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_AgGridAngular_0"], _node_modules_ag_grid_angular_dist_agGridAngular_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_AgGridAngular"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, ag_grid_angular_dist_angularFrameworkOverrides__WEBPACK_IMPORTED_MODULE_18__["AngularFrameworkOverrides"], ag_grid_angular_dist_angularFrameworkOverrides__WEBPACK_IMPORTED_MODULE_18__["AngularFrameworkOverrides"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, ag_grid_angular_dist_angularFrameworkComponentWrapper__WEBPACK_IMPORTED_MODULE_19__["AngularFrameworkComponentWrapper"], ag_grid_angular_dist_angularFrameworkComponentWrapper__WEBPACK_IMPORTED_MODULE_19__["AngularFrameworkComponentWrapper"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](21, 4898816, [["agGrid", 4]], 1, ag_grid_angular_dist_agGridAngular__WEBPACK_IMPORTED_MODULE_20__["AgGridAngular"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], ag_grid_angular_dist_angularFrameworkOverrides__WEBPACK_IMPORTED_MODULE_18__["AngularFrameworkOverrides"], ag_grid_angular_dist_angularFrameworkComponentWrapper__WEBPACK_IMPORTED_MODULE_19__["AngularFrameworkComponentWrapper"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], { gridOptions: [0, "gridOptions"], rowData: [1, "rowData"], frameworkComponents: [2, "frameworkComponents"], rowSelection: [3, "rowSelection"], animateRows: [4, "animateRows"] }, { cellClicked: "cellClicked", selectionChanged: "selectionChanged" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, { columns: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 14, "ag-grid-column", [["headerName", "Recordings"]], null, null, null, _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_21__["View_AgGridColumn_0"], _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_21__["RenderType_AgGridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](24, 49152, [[3, 4], [2, 4]], 1, ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_22__["AgGridColumn"], [], { headerName: [0, "headerName"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 3, { childColumns: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 2, "ag-grid-column", [["headerName", "Actions"]], null, null, null, _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_21__["View_AgGridColumn_0"], _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_21__["RenderType_AgGridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](27, 49152, [[4, 4], [3, 4]], 1, ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_22__["AgGridColumn"], [], { headerName: [0, "headerName"], cellRenderer: [1, "cellRenderer"], pinned: [2, "pinned"], width: [3, "width"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 4, { childColumns: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 2, "ag-grid-column", [["headerName", "#"]], null, null, null, _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_21__["View_AgGridColumn_0"], _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_21__["RenderType_AgGridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](30, 49152, [[5, 4], [3, 4]], 1, ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_22__["AgGridColumn"], [], { headerName: [0, "headerName"], pinned: [1, "pinned"], width: [2, "width"], checkboxSelection: [3, "checkboxSelection"], suppressMenu: [4, "suppressMenu"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 5, { childColumns: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](32, 0, null, null, 2, "ag-grid-column", [["field", "Name"], ["headerName", "Name"]], null, null, null, _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_21__["View_AgGridColumn_0"], _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_21__["RenderType_AgGridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](33, 49152, [[6, 4], [3, 4]], 1, ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_22__["AgGridColumn"], [], { cellEditorFramework: [0, "cellEditorFramework"], headerName: [1, "headerName"], field: [2, "field"], filter: [3, "filter"], pinned: [4, "pinned"], editable: [5, "editable"], sortable: [6, "sortable"], resizable: [7, "resizable"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 6, { childColumns: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 2, "ag-grid-column", [["field", "Artist"], ["headerName", "Artist"]], null, null, null, _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_21__["View_AgGridColumn_0"], _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_21__["RenderType_AgGridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](36, 49152, [[7, 4], [3, 4]], 1, ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_22__["AgGridColumn"], [], { headerName: [0, "headerName"], field: [1, "field"], filter: [2, "filter"], pinned: [3, "pinned"], width: [4, "width"], sortable: [5, "sortable"], resizable: [6, "resizable"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 7, { childColumns: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](38, 0, null, null, 26, "ag-grid-column", [["headerName", "Details"]], null, null, null, _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_21__["View_AgGridColumn_0"], _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_21__["RenderType_AgGridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](39, 49152, [[8, 4], [2, 4]], 1, ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_22__["AgGridColumn"], [], { headerName: [0, "headerName"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 8, { childColumns: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](41, 0, null, null, 2, "ag-grid-column", [["field", "ISRC"], ["headerName", "ISRC"]], null, null, null, _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_21__["View_AgGridColumn_0"], _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_21__["RenderType_AgGridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](42, 49152, [[9, 4], [8, 4]], 1, ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_22__["AgGridColumn"], [], { headerName: [0, "headerName"], field: [1, "field"], filter: [2, "filter"], width: [3, "width"], sortable: [4, "sortable"], resizable: [5, "resizable"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 9, { childColumns: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](44, 0, null, null, 2, "ag-grid-column", [["field", "ISWC"], ["headerName", "ISWC"]], null, null, null, _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_21__["View_AgGridColumn_0"], _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_21__["RenderType_AgGridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](45, 49152, [[10, 4], [8, 4]], 1, ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_22__["AgGridColumn"], [], { headerName: [0, "headerName"], field: [1, "field"], filter: [2, "filter"], width: [3, "width"], sortable: [4, "sortable"], resizable: [5, "resizable"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 10, { childColumns: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](47, 0, null, null, 2, "ag-grid-column", [["field", "Date"], ["headerName", "Date"]], null, null, null, _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_21__["View_AgGridColumn_0"], _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_21__["RenderType_AgGridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](48, 49152, [[11, 4], [8, 4]], 1, ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_22__["AgGridColumn"], [], { headerName: [0, "headerName"], field: [1, "field"], filter: [2, "filter"], width: [3, "width"], sortable: [4, "sortable"], resizable: [5, "resizable"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 11, { childColumns: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](50, 0, null, null, 2, "ag-grid-column", [["field", "Country"], ["headerName", "Country"]], null, null, null, _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_21__["View_AgGridColumn_0"], _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_21__["RenderType_AgGridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](51, 49152, [[12, 4], [8, 4]], 1, ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_22__["AgGridColumn"], [], { headerName: [0, "headerName"], field: [1, "field"], filter: [2, "filter"], cellRenderer: [3, "cellRenderer"], sortable: [4, "sortable"], resizable: [5, "resizable"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 12, { childColumns: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](53, 0, null, null, 2, "ag-grid-column", [["field", "Owner"], ["headerName", "Owner"]], null, null, null, _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_21__["View_AgGridColumn_0"], _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_21__["RenderType_AgGridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](54, 49152, [[13, 4], [8, 4]], 1, ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_22__["AgGridColumn"], [], { headerName: [0, "headerName"], field: [1, "field"], filter: [2, "filter"], sortable: [3, "sortable"], resizable: [4, "resizable"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 13, { childColumns: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](56, 0, null, null, 2, "ag-grid-column", [["field", "Collective"], ["headerName", "Collective"]], null, null, null, _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_21__["View_AgGridColumn_0"], _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_21__["RenderType_AgGridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](57, 49152, [[14, 4], [8, 4]], 1, ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_22__["AgGridColumn"], [], { headerName: [0, "headerName"], field: [1, "field"], filter: [2, "filter"], width: [3, "width"], sortable: [4, "sortable"], resizable: [5, "resizable"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 14, { childColumns: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](59, 0, null, null, 2, "ag-grid-column", [["field", "Submitted to"], ["headerName", "Submitted to"]], null, null, null, _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_21__["View_AgGridColumn_0"], _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_21__["RenderType_AgGridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](60, 49152, [[15, 4], [8, 4]], 1, ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_22__["AgGridColumn"], [], { headerName: [0, "headerName"], field: [1, "field"], filter: [2, "filter"], pinned: [3, "pinned"], width: [4, "width"], sortable: [5, "sortable"], resizable: [6, "resizable"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 15, { childColumns: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](62, 0, null, null, 2, "ag-grid-column", [["field", "Status"], ["headerName", "Status"]], null, null, null, _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_21__["View_AgGridColumn_0"], _node_modules_ag_grid_angular_dist_agGridColumn_ngfactory__WEBPACK_IMPORTED_MODULE_21__["RenderType_AgGridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](63, 49152, [[16, 4], [8, 4]], 1, ag_grid_angular_dist_agGridColumn__WEBPACK_IMPORTED_MODULE_22__["AgGridColumn"], [], { headerName: [0, "headerName"], field: [1, "field"], filter: [2, "filter"], pinned: [3, "pinned"], width: [4, "width"], sortable: [5, "sortable"], resizable: [6, "resizable"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 16, { childColumns: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_IndexComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](66, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](67, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Selection: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](69, 0, null, null, 1, "span", [["id", "selectedRows"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["..."]))], function (_ck, _v) { var _co = _v.component; var currVal_5 = "help.1"; _ck(_v, 9, 0, currVal_5); var currVal_6 = ((_co.newRecordings == null) ? null : _co.newRecordings.length); _ck(_v, 11, 0, currVal_6); var currVal_8 = _co.showSpinner; _ck(_v, 16, 0, currVal_8); var currVal_10 = _co.gridOptions; var currVal_11 = _co.allItems; var currVal_12 = _co.gridOptions.frameworkComponents; var currVal_13 = "multiple"; var currVal_14 = "true"; _ck(_v, 21, 0, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_15 = "Recordings"; _ck(_v, 24, 0, currVal_15); var currVal_16 = "Actions"; var currVal_17 = _co.editBtnCellRenderer; var currVal_18 = true; var currVal_19 = 100; _ck(_v, 27, 0, currVal_16, currVal_17, currVal_18, currVal_19); var currVal_20 = "#"; var currVal_21 = true; var currVal_22 = 80; var currVal_23 = true; var currVal_24 = false; _ck(_v, 30, 0, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24); var currVal_25 = _co.gridOptions.frameworkComponents.inputRenderer; var currVal_26 = "Name"; var currVal_27 = "Name"; var currVal_28 = true; var currVal_29 = true; var currVal_30 = true; var currVal_31 = true; var currVal_32 = true; _ck(_v, 33, 0, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32); var currVal_33 = "Artist"; var currVal_34 = "Artist"; var currVal_35 = true; var currVal_36 = false; var currVal_37 = 120; var currVal_38 = true; var currVal_39 = true; _ck(_v, 36, 0, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39); var currVal_40 = "Details"; _ck(_v, 39, 0, currVal_40); var currVal_41 = "ISRC"; var currVal_42 = "ISRC"; var currVal_43 = true; var currVal_44 = 150; var currVal_45 = true; var currVal_46 = true; _ck(_v, 42, 0, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46); var currVal_47 = "ISWC"; var currVal_48 = "ISWC"; var currVal_49 = true; var currVal_50 = 100; var currVal_51 = true; var currVal_52 = true; _ck(_v, 45, 0, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52); var currVal_53 = "Date"; var currVal_54 = "Date"; var currVal_55 = true; var currVal_56 = 100; var currVal_57 = true; var currVal_58 = true; _ck(_v, 48, 0, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58); var currVal_59 = "Country"; var currVal_60 = "Country"; var currVal_61 = true; var currVal_62 = _co.countryCellRenderer; var currVal_63 = true; var currVal_64 = true; _ck(_v, 51, 0, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63, currVal_64); var currVal_65 = "Owner"; var currVal_66 = "Owner"; var currVal_67 = true; var currVal_68 = true; var currVal_69 = true; _ck(_v, 54, 0, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69); var currVal_70 = "Collective"; var currVal_71 = "Collective"; var currVal_72 = true; var currVal_73 = 150; var currVal_74 = true; var currVal_75 = true; _ck(_v, 57, 0, currVal_70, currVal_71, currVal_72, currVal_73, currVal_74, currVal_75); var currVal_76 = "Submitted to"; var currVal_77 = "Submitted to"; var currVal_78 = true; var currVal_79 = false; var currVal_80 = 150; var currVal_81 = true; var currVal_82 = true; _ck(_v, 60, 0, currVal_76, currVal_77, currVal_78, currVal_79, currVal_80, currVal_81, currVal_82); var currVal_83 = "Status"; var currVal_84 = "Status"; var currVal_85 = true; var currVal_86 = false; var currVal_87 = 150; var currVal_88 = true; var currVal_89 = true; _ck(_v, 63, 0, currVal_83, currVal_84, currVal_85, currVal_86, currVal_87, currVal_88, currVal_89); var currVal_90 = (_co.claimsToSend.length > 0); _ck(_v, 66, 0, currVal_90); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._toolbarRows.length > 0); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._toolbarRows.length === 0); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).disabled || null); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5)._animationMode === "NoopAnimations"); _ck(_v, 4, 0, currVal_2, currVal_3); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).transform("recordings.btnAddNew")); _ck(_v, 6, 0, currVal_4); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 13, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).transform("recordings.intro")); _ck(_v, 13, 0, currVal_7); var currVal_9 = undefined; _ck(_v, 18, 0, currVal_9); }); }
function View_IndexComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-index", [], null, null, null, View_IndexComponent_0, RenderType_IndexComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _music_recordings_component__WEBPACK_IMPORTED_MODULE_23__["IndexComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_24__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["Router"], _services_page_title_service__WEBPACK_IMPORTED_MODULE_25__["PageTitleService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MatDialog"], _services_test_data_service__WEBPACK_IMPORTED_MODULE_27__["TestDataService"], _shared_services_help_text_service__WEBPACK_IMPORTED_MODULE_15__["HelpTextService"], _shared_services_config_service__WEBPACK_IMPORTED_MODULE_28__["AppConfigService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var IndexComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-index", _music_recordings_component__WEBPACK_IMPORTED_MODULE_23__["IndexComponent"], View_IndexComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/assets/music-recordings/music-recordings.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/assets/music-recordings/music-recordings.component.ts ***!
  \***********************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _music_recordings_edit_music_recordings_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./music-recordings-edit/music-recordings-edit.component */ "./src/app/assets/music-recordings/music-recordings-edit/music-recordings-edit.component.ts");
/* harmony import */ var src_app_claims_send_claims_send_claims_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/claims/send-claims/send-claims.component */ "./src/app/claims/send-claims/send-claims.component.ts");
/* harmony import */ var _register_new_recording_register_recording_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register-new-recording/register-recording.component */ "./src/app/assets/music-recordings/register-new-recording/register-recording.component.ts");
/* harmony import */ var src_app_shared_base_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_shared/base/base.component */ "./src/app/_shared/base/base.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_shared/components */ "./src/app/_shared/components/index.ts");









var IndexComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](IndexComponent, _super);
    function IndexComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.newRecordings = [];
        return _this;
    }
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gridOptions = {
            onGridReady: function () {
                //   this.gridOptions.api.sizeColumnsToFit();
            },
            rowHeight: 48,
            frameworkComponents: {
                inputRenderer: src_app_shared_components__WEBPACK_IMPORTED_MODULE_8__["MatInputComponent"],
                thing: src_app_shared_components__WEBPACK_IMPORTED_MODULE_8__["MatButtonComponent"]
            }
        };
        // this.getHelpText('recordings');
        this.listAll();
        this.claimsToSend = [];
        this.entityTypes$ = this.testData.listEntityTypes();
        this.entityList$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (type) { return _this.testData.listEntities(type); }));
        this.selectedEntity$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (id) { return _this.testData.getEntity(_this.selectedType, id); }));
        this.listAll$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (type) { return _this.testData.listAll(type); }));
    };
    IndexComponent.prototype.countryCellRenderer = function (params) {
        var flag = '<img border=\'0\' width=\'15\' height=\'10\' style=\'margin-bottom: 2px\' src=\'https://www.ag-grid.com/images/flags/gb.png\'>';
        return flag + ' ' + params.value;
    };
    IndexComponent.prototype.editBtnCellRenderer = function (params) {
        var btn = '<button class="mat-button mat-raised-button"><span class="mat-button-wrapper">Edit</span><div class="mat-button-ripple mat-ripple"></div><div class="mat-button-focus-overlay"></div></button>';
        return btn;
    };
    IndexComponent.prototype.editBtnCellRendererParams = function () {
        var clickMe = {
            onClick: this.openDialog.bind(this),
            label: 'Click 1'
        };
        return clickMe;
    };
    IndexComponent.prototype.changeEntityType = function (type) {
        this.selectedType = type;
        this.entityList$.next(type);
    };
    IndexComponent.prototype.changeEntity = function (id) {
        this.selectedEntity$.next(id);
    };
    IndexComponent.prototype.onCellClicked = function (ev) {
        if (ev.colDef.headerName === 'Actions') {
            this.openDialog(ev.data);
        }
    };
    IndexComponent.prototype.openDialog = function (ev) {
        var dialogRef = this.dialog.open(_music_recordings_edit_music_recordings_edit_component__WEBPACK_IMPORTED_MODULE_2__["MusicRecordingsEditComponent"], {
            data: ev,
            width: '80%',
            panelClass: 'formFieldWidth380'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    IndexComponent.prototype.openAddNewDialog = function (ev) {
        var _this = this;
        var dialogRef = this.dialog.open(_register_new_recording_register_recording_component__WEBPACK_IMPORTED_MODULE_4__["RegisterRecordingComponent"], {
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
    IndexComponent.prototype.addItemToGrid = function (result) {
        this.newRecordings.push(result);
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
                'owner': i.Owner,
                'status': 'Not Sent'
            });
        });
        if (selectedRows.length >= 6) {
            selectedRowsString += ' - and ' + (selectedRows.length - 6) + ' others';
        }
        document.querySelector('#selectedRows').innerHTML = selectedRowsString;
    };
    IndexComponent.prototype.sendToClaim = function (ev) {
        var data = { section: 'recordings', data: this.claimsToSend };
        var dialogRef = this.dialog.open(src_app_claims_send_claims_send_claims_component__WEBPACK_IMPORTED_MODULE_3__["SendClaimsComponent"], {
            data: data,
            width: '80%',
            panelClass: 'formFieldWidth380'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    IndexComponent.prototype.listAll = function () {
        var _this = this;
        this.testData.listAll('music-recording').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () { return _this.showSpinner = true; }))
            .subscribe(function (res) {
            _this.allItems = res;
            _this.showSpinner = false;
        });
    };
    return IndexComponent;
}(src_app_shared_base_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"]));

// @Component({
//   selector: 'app-test-import-dialog',
//   template: `
//   <pre> {{ data | json }}</pre> 
//   <div mat-dialog-actions class="align-right">
//     <button mat-button mat-dialog-close="cancel">Cancel</button>
//     <button mat-button [mat-dialog-close]="data.Name">Send All</button>
//   </div>
//   `
// })
// export class TestSendClaimsComponent implements OnInit {
//   constructor(
//     @Inject(MAT_DIALOG_DATA) public data: any,
//    // private formService: DynamicFormService
//   ) { }
//   ngOnInit() {
//   }
// }


/***/ }),

/***/ "./src/app/assets/music-recordings/music-recordings.module.ngfactory.js":
/*!******************************************************************************!*\
  !*** ./src/app/assets/music-recordings/music-recordings.module.ngfactory.js ***!
  \******************************************************************************/
/*! exports provided: MusicRecordingsModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicRecordingsModuleNgFactory", function() { return MusicRecordingsModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _music_recordings_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./music-recordings.module */ "./src/app/assets/music-recordings/music-recordings.module.ts");
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
/* harmony import */ var _music_recordings_component_ngfactory__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./music-recordings.component.ngfactory */ "./src/app/assets/music-recordings/music-recordings.component.ngfactory.js");
/* harmony import */ var _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/snack-bar/typings/index.ngfactory */ "./node_modules/@angular/material/snack-bar/typings/index.ngfactory.js");
/* harmony import */ var _register_new_recording_register_recording_component_ngfactory__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./register-new-recording/register-recording.component.ngfactory */ "./src/app/assets/music-recordings/register-new-recording/register-recording.component.ngfactory.js");
/* harmony import */ var _music_recordings_edit_music_recordings_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./music-recordings-edit/music-recordings-edit.component.ngfactory */ "./src/app/assets/music-recordings/music-recordings-edit/music-recordings-edit.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm5/observers.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");
/* harmony import */ var _shared_services_help_text_service__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../../_shared/services/help-text.service */ "./src/app/_shared/services/help-text.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../../_shared/services/message.service */ "./src/app/_shared/services/message.service.ts");
/* harmony import */ var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../../_shared/services/config.service */ "./src/app/_shared/services/config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm5/text-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var ag_grid_angular_dist_aggrid_module__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ag-grid-angular/dist/aggrid.module */ "./node_modules/ag-grid-angular/dist/aggrid.module.js");
/* harmony import */ var ag_grid_angular_dist_aggrid_module__WEBPACK_IMPORTED_MODULE_69___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular_dist_aggrid_module__WEBPACK_IMPORTED_MODULE_69__);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/esm5/extended.es5.js");
/* harmony import */ var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! @angular/flex-layout/grid */ "./node_modules/@angular/flex-layout/esm5/grid.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_76___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_76__);
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm5/core.js");
/* harmony import */ var _ng_dynamic_forms_ui_material__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! @ng-dynamic-forms/ui-material */ "./node_modules/@ng-dynamic-forms/ui-material/fesm5/ui-material.js");
/* harmony import */ var _ngx_formly_material_form_field__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! @ngx-formly/material/form-field */ "./node_modules/@ngx-formly/material/fesm5/ngx-formly-material-form-field.js");
/* harmony import */ var _ngx_formly_material_datepicker__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! @ngx-formly/material/datepicker */ "./node_modules/@ngx-formly/material/fesm5/ngx-formly-material-datepicker.js");
/* harmony import */ var _shared_ui_form_helpers_validations_messages__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ../../_shared/ui-form/helpers/validations-messages */ "./src/app/_shared/ui-form/helpers/validations-messages.ts");
/* harmony import */ var _shared_ui_form_wrappers_panel_wrapper_component__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ../../_shared/ui-form/wrappers/panel-wrapper.component */ "./src/app/_shared/ui-form/wrappers/panel-wrapper.component.ts");
/* harmony import */ var _shared_ui_form_types_video_viewer_component__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ../../_shared/ui-form/types/video-viewer.component */ "./src/app/_shared/ui-form/types/video-viewer.component.ts");
/* harmony import */ var _shared_ui_form_types_visibility_component__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ../../_shared/ui-form/types/visibility.component */ "./src/app/_shared/ui-form/types/visibility.component.ts");
/* harmony import */ var _shared_ui_form_types_playlists_component__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ../../_shared/ui-form/types/playlists.component */ "./src/app/_shared/ui-form/types/playlists.component.ts");
/* harmony import */ var _shared_ui_form_types_tags_component__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ../../_shared/ui-form/types/tags.component */ "./src/app/_shared/ui-form/types/tags.component.ts");
/* harmony import */ var _shared_ui_form_types_countries_component__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ../../_shared/ui-form/types/countries.component */ "./src/app/_shared/ui-form/types/countries.component.ts");
/* harmony import */ var _shared_ui_form_types_money_component__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ../../_shared/ui-form/types/money.component */ "./src/app/_shared/ui-form/types/money.component.ts");
/* harmony import */ var _shared_ui_form_types_percentage_component__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ../../_shared/ui-form/types/percentage.component */ "./src/app/_shared/ui-form/types/percentage.component.ts");
/* harmony import */ var _shared_ui_form_types_typeahead_component__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ../../_shared/ui-form/types/typeahead.component */ "./src/app/_shared/ui-form/types/typeahead.component.ts");
/* harmony import */ var _shared_ui_form_helpers_validators__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ../../_shared/ui-form/helpers/validators */ "./src/app/_shared/ui-form/helpers/validators.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select-ng-select.js");
/* harmony import */ var _shared_ui_form_ui_form_module__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ../../_shared/ui-form/ui-form.module */ "./src/app/_shared/ui-form/ui-form.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ../../_shared/shared.module */ "./src/app/_shared/shared.module.ts");
/* harmony import */ var _music_recordings_routing_module__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./music-recordings-routing.module */ "./src/app/assets/music-recordings/music-recordings-routing.module.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! @angular/cdk/accordion */ "./node_modules/@angular/cdk/esm5/accordion.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! ../../app-material/app-material.module */ "./src/app/app-material/app-material.module.ts");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _music_recordings_component__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! ./music-recordings.component */ "./src/app/assets/music-recordings/music-recordings.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 














































































































var MusicRecordingsModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_music_recordings_module__WEBPACK_IMPORTED_MODULE_1__["MusicRecordingsModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["MatDialogContainerNgFactory"], _node_modules_angular_material_tooltip_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["TooltipComponentNgFactory"], _node_modules_angular_material_datepicker_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerContentNgFactory"], _node_modules_angular_material_datepicker_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MatCalendarHeaderNgFactory"], _node_modules_ng_dynamic_forms_ui_material_ui_material_ngfactory__WEBPACK_IMPORTED_MODULE_6__["DynamicMaterialCheckboxComponentNgFactory"], _node_modules_ng_dynamic_forms_ui_material_ui_material_ngfactory__WEBPACK_IMPORTED_MODULE_6__["DynamicMaterialChipsComponentNgFactory"], _node_modules_ng_dynamic_forms_ui_material_ui_material_ngfactory__WEBPACK_IMPORTED_MODULE_6__["DynamicMaterialDatePickerComponentNgFactory"], _node_modules_ng_dynamic_forms_ui_material_ui_material_ngfactory__WEBPACK_IMPORTED_MODULE_6__["DynamicMaterialFormArrayComponentNgFactory"], _node_modules_ng_dynamic_forms_ui_material_ui_material_ngfactory__WEBPACK_IMPORTED_MODULE_6__["DynamicMaterialFormGroupComponentNgFactory"], _node_modules_ng_dynamic_forms_ui_material_ui_material_ngfactory__WEBPACK_IMPORTED_MODULE_6__["DynamicMaterialInputComponentNgFactory"], _node_modules_ng_dynamic_forms_ui_material_ui_material_ngfactory__WEBPACK_IMPORTED_MODULE_6__["DynamicMaterialRadioGroupComponentNgFactory"], _node_modules_ng_dynamic_forms_ui_material_ui_material_ngfactory__WEBPACK_IMPORTED_MODULE_6__["DynamicMaterialSelectComponentNgFactory"], _node_modules_ng_dynamic_forms_ui_material_ui_material_ngfactory__WEBPACK_IMPORTED_MODULE_6__["DynamicMaterialSlideToggleComponentNgFactory"], _node_modules_ng_dynamic_forms_ui_material_ui_material_ngfactory__WEBPACK_IMPORTED_MODULE_6__["DynamicMaterialSliderComponentNgFactory"], _node_modules_ng_dynamic_forms_ui_material_ui_material_ngfactory__WEBPACK_IMPORTED_MODULE_6__["DynamicMaterialTextAreaComponentNgFactory"], _node_modules_ngx_formly_core_ngx_formly_core_ngfactory__WEBPACK_IMPORTED_MODULE_7__["ɵbNgFactory"], _node_modules_ngx_formly_core_ngx_formly_core_ngfactory__WEBPACK_IMPORTED_MODULE_7__["ɵdNgFactory"], _node_modules_ngx_formly_material_form_field_ngx_formly_material_form_field_ngfactory__WEBPACK_IMPORTED_MODULE_8__["ɵaNgFactory"], _node_modules_ngx_formly_material_datepicker_ngx_formly_material_datepicker_ngfactory__WEBPACK_IMPORTED_MODULE_9__["ɵaNgFactory"], _shared_ui_form_wrappers_panel_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["PanelWrapperComponentNgFactory"], _shared_ui_form_types_video_viewer_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["FormlyFieldVideoViewerNgFactory"], _shared_ui_form_types_visibility_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["FieldInputVisibilityComponentNgFactory"], _shared_ui_form_types_playlists_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["FieldInputPlaylistComponentNgFactory"], _shared_ui_form_types_tags_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["SelectTagsComponentNgFactory"], _shared_ui_form_types_countries_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["FieldCountriesComponentNgFactory"], _shared_ui_form_types_money_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["FormlyFieldInputMoneyNgFactory"], _shared_ui_form_types_percentage_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["FormlyFieldInputPercentageNgFactory"], _shared_ui_form_types_typeahead_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__["FormlyFieldTypeaheadNgFactory"], _shared_components_material_mat_input_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["MatInputComponentNgFactory"], _shared_components_material_mat_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__["MatButtonComponentNgFactory"], _claims_send_claims_send_claims_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__["SendClaimsComponentNgFactory"], _claims_claims_edit_claims_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__["ClaimsEditComponentNgFactory"], _shared_form_controls_password_input_dynamic_dynamic_password_input_dynamic_password_input_component_ngfactory__WEBPACK_IMPORTED_MODULE_23__["DynamicPasswordInputComponentNgFactory"], _music_recordings_component_ngfactory__WEBPACK_IMPORTED_MODULE_24__["IndexComponentNgFactory"], _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_25__["MatSnackBarContainerNgFactory"], _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_25__["SimpleSnackBarNgFactory"], _register_new_recording_register_recording_component_ngfactory__WEBPACK_IMPORTED_MODULE_26__["RegisterRecordingComponentNgFactory"], _music_recordings_edit_music_recordings_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_27__["MusicRecordingsEditComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_28__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_28__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_28__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_29__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_30__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_30__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_30__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_30__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_31__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_31__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_31__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_31__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_31__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_31__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_28__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_32__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_28__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_31__["ɵc"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_31__["ɵd"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_31__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_menu__WEBPACK_IMPORTED_MODULE_33__["MAT_MENU_SCROLL_STRATEGY"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_33__["ɵb23"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_31__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_34__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_34__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_35__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_35__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_select__WEBPACK_IMPORTED_MODULE_36__["MAT_SELECT_SCROLL_STRATEGY"], _angular_material_select__WEBPACK_IMPORTED_MODULE_36__["MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_31__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_37__["HAMMER_GESTURE_CONFIG"], _angular_material_core__WEBPACK_IMPORTED_MODULE_35__["GestureConfig"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_35__["MAT_HAMMER_OPTIONS"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_35__["MatCommonModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_31__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_31__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_28__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_31__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_39__["MAT_TOOLTIP_SCROLL_STRATEGY"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_39__["MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_31__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_40__["FocusMonitor"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_40__["FocusMonitor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_41__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_42__["CdkTreeNodeDef"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_42__["CdkTreeNodeDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p0_1) { return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_43__["removeStyles"](p0_0, p0_1)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_28__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_44__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_44__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_31__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_45__["MatDatepickerIntl"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_45__["MatDatepickerIntl"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_45__["MAT_DATEPICKER_SCROLL_STRATEGY"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_45__["MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_31__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_46__["FormlyFormBuilder"], _ngx_formly_core__WEBPACK_IMPORTED_MODULE_46__["FormlyFormBuilder"], [_ngx_formly_core__WEBPACK_IMPORTED_MODULE_46__["FormlyConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_35__["DateAdapter"], _angular_material_core__WEBPACK_IMPORTED_MODULE_35__["NativeDateAdapter"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_35__["MAT_DATE_LOCALE"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_41__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_28__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_28__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_28__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_28__["LowerCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_services_help_text_service__WEBPACK_IMPORTED_MODULE_47__["HelpTextService"], _shared_services_help_text_service__WEBPACK_IMPORTED_MODULE_47__["HelpTextService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpClient"], _shared_services_message_service__WEBPACK_IMPORTED_MODULE_48__["MessageService"], _shared_services_config_service__WEBPACK_IMPORTED_MODULE_49__["AppConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_50__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_51__["TranslateService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_52__["MatStepperIntl"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_52__["MAT_STEPPER_INTL_PROVIDER_FACTORY"], [[3, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_52__["MatStepperIntl"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_28__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_28__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_30__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_30__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_30__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_30__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_30__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_30__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_50__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_50__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_50__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_50__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_32__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_32__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_35__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_35__["MatCommonModule"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_35__["MATERIAL_SANITY_CHECKS"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_37__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_card__WEBPACK_IMPORTED_MODULE_53__["MatCardModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_53__["MatCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_41__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_41__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_35__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_35__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_54__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_54__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_55__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_55__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_31__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_31__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_33__["_MatMenuDirectivesModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_33__["_MatMenuDirectivesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_33__["MatMenuModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_33__["MatMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_56__["MatButtonToggleModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_56__["MatButtonToggleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_57__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_57__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_34__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_34__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_58__["_MatCheckboxRequiredValidatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_58__["_MatCheckboxRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_58__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_58__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_59__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_59__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_60__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_60__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_61__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_61__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_62__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_62__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_63__["MatProgressSpinnerModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_63__["MatProgressSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_radio__WEBPACK_IMPORTED_MODULE_64__["MatRadioModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_64__["MatRadioModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_35__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_35__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_35__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_35__["MatOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_select__WEBPACK_IMPORTED_MODULE_36__["MatSelectModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_36__["MatSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slider__WEBPACK_IMPORTED_MODULE_65__["MatSliderModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_65__["MatSliderModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_40__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_40__["A11yModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_39__["MatTooltipModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_39__["MatTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_35__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_35__["MatLineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_divider__WEBPACK_IMPORTED_MODULE_66__["MatDividerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_66__["MatDividerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_list__WEBPACK_IMPORTED_MODULE_67__["MatListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_67__["MatListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_42__["CdkTreeModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_42__["CdkTreeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tree__WEBPACK_IMPORTED_MODULE_68__["MatTreeModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_68__["MatTreeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ag_grid_angular_dist_aggrid_module__WEBPACK_IMPORTED_MODULE_69__["AgGridModule"], ag_grid_angular_dist_aggrid_module__WEBPACK_IMPORTED_MODULE_69__["AgGridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_43__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_43__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_70__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_70__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_71__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_71__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_72__["GridModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_72__["GridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_73__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_73__["FlexLayoutModule"], [[2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_43__["SERVER_TOKEN"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_44__["MatAutocompleteModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_44__["MatAutocompleteModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_chips__WEBPACK_IMPORTED_MODULE_74__["MatChipsModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_74__["MatChipsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_45__["MatDatepickerModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_45__["MatDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_75__["_MatSlideToggleRequiredValidatorModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_75__["_MatSlideToggleRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_75__["MatSlideToggleModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_75__["MatSlideToggleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular2_text_mask__WEBPACK_IMPORTED_MODULE_76__["TextMaskModule"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_76__["TextMaskModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_77__["DynamicFormsCoreModule"], _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_77__["DynamicFormsCoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_dynamic_forms_ui_material__WEBPACK_IMPORTED_MODULE_78__["DynamicFormsMaterialUIModule"], _ng_dynamic_forms_ui_material__WEBPACK_IMPORTED_MODULE_78__["DynamicFormsMaterialUIModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_46__["FormlyConfig"], _ngx_formly_core__WEBPACK_IMPORTED_MODULE_46__["FormlyConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_46__["FORMLY_CONFIG"], function (p2_0, p4_0) { return [{ wrappers: [{ name: "form-field", component: _ngx_formly_material_form_field__WEBPACK_IMPORTED_MODULE_79__["ɵa"] }] }, { types: [{ name: "datepicker", component: _ngx_formly_material_datepicker__WEBPACK_IMPORTED_MODULE_80__["ɵa"], wrappers: ["form-field"] }] }, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_46__["ɵa"](p2_0), { validationMessages: [{ name: "required", message: "err 12: This field is required" }, { name: "minlength", message: _shared_ui_form_helpers_validations_messages__WEBPACK_IMPORTED_MODULE_81__["minlengthValidationMessage"] }, { name: "maxlength", message: _shared_ui_form_helpers_validations_messages__WEBPACK_IMPORTED_MODULE_81__["maxlengthValidationMessage"] }, { name: "min", message: _shared_ui_form_helpers_validations_messages__WEBPACK_IMPORTED_MODULE_81__["minValidationMessage"] }, { name: "max", message: _shared_ui_form_helpers_validations_messages__WEBPACK_IMPORTED_MODULE_81__["maxValidationMessage"] }, { name: "passwordMatchValidation", message: _shared_ui_form_helpers_validations_messages__WEBPACK_IMPORTED_MODULE_81__["passwordMatchValidationMessage"] }, { name: "maximumNumValidation", message: _shared_ui_form_helpers_validations_messages__WEBPACK_IMPORTED_MODULE_81__["maximumNumValidationMessage"] }, { name: "PasswordStrengthValidation", message: _shared_ui_form_helpers_validations_messages__WEBPACK_IMPORTED_MODULE_81__["PasswordStrengthValidationMessage"] }], wrappers: [{ name: "panel", component: _shared_ui_form_wrappers_panel_wrapper_component__WEBPACK_IMPORTED_MODULE_82__["PanelWrapperComponent"] }], types: [{ name: "videoviewer", component: _shared_ui_form_types_video_viewer_component__WEBPACK_IMPORTED_MODULE_83__["FormlyFieldVideoViewer"] }, { name: "visibility", component: _shared_ui_form_types_visibility_component__WEBPACK_IMPORTED_MODULE_84__["FieldInputVisibilityComponent"] }, { name: "playlist", component: _shared_ui_form_types_playlists_component__WEBPACK_IMPORTED_MODULE_85__["FieldInputPlaylistComponent"] }, { name: "tags", component: _shared_ui_form_types_tags_component__WEBPACK_IMPORTED_MODULE_86__["SelectTagsComponent"] }, { name: "countries", component: _shared_ui_form_types_countries_component__WEBPACK_IMPORTED_MODULE_87__["FieldCountriesComponent"] }, { name: "money", component: _shared_ui_form_types_money_component__WEBPACK_IMPORTED_MODULE_88__["FormlyFieldInputMoney"], defaultOptions: { expressionProperties: {}, defaultValue: 5903, templateOptions: { placeholder: "hello", disabled: false } } }, { name: "percentage", component: _shared_ui_form_types_percentage_component__WEBPACK_IMPORTED_MODULE_89__["FormlyFieldInputPercentage"], defaultOptions: { expressionProperties: {}, defaultValue: 0, templateOptions: { placeholder: "hello", disabled: false } } }, { name: "typeahead", component: _shared_ui_form_types_typeahead_component__WEBPACK_IMPORTED_MODULE_90__["FormlyFieldTypeahead"] }, { name: "number", extends: "input", defaultOptions: { templateOptions: { type: "number" } } }, { name: "date", extends: "input", defaultOptions: { templateOptions: { type: "date" } } }, { name: "integer", extends: "input" }, { name: "string", extends: "input" }, { name: "object", extends: "formly-group" }, { name: "boolean", extends: "checkbox" }, { name: "enum", extends: "select" }], validators: [{ name: "maximumNumValidation", validation: _shared_ui_form_helpers_validators__WEBPACK_IMPORTED_MODULE_91__["maximumNumValidation"] }, { name: "passwordMatchValidation", validation: _shared_ui_form_helpers_validators__WEBPACK_IMPORTED_MODULE_91__["passwordMatchValidation"] }, { name: "PasswordStrengthValidation", validation: _shared_ui_form_helpers_validators__WEBPACK_IMPORTED_MODULE_91__["PasswordStrengthValidation"] }] }, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_46__["ɵa"](p4_0), {}]; }, [_ngx_formly_core__WEBPACK_IMPORTED_MODULE_46__["FormlyConfig"], _ngx_formly_core__WEBPACK_IMPORTED_MODULE_46__["FormlyConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_46__["FormlyModule"], _ngx_formly_core__WEBPACK_IMPORTED_MODULE_46__["FormlyModule"], [_ngx_formly_core__WEBPACK_IMPORTED_MODULE_46__["FormlyConfig"], [2, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_46__["FORMLY_CONFIG"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_92__["NgSelectModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_92__["NgSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngx_formly_material_form_field__WEBPACK_IMPORTED_MODULE_79__["FormlyMatFormFieldModule"], _ngx_formly_material_form_field__WEBPACK_IMPORTED_MODULE_79__["FormlyMatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngx_formly_material_datepicker__WEBPACK_IMPORTED_MODULE_80__["FormlyMatDatepickerModule"], _ngx_formly_material_datepicker__WEBPACK_IMPORTED_MODULE_80__["FormlyMatDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_35__["NativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_35__["NativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_35__["MatNativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_35__["MatNativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_ui_form_ui_form_module__WEBPACK_IMPORTED_MODULE_93__["UiFormModule"], _shared_ui_form_ui_form_module__WEBPACK_IMPORTED_MODULE_93__["UiFormModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_51__["TranslateModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_51__["TranslateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_94__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_94__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _music_recordings_routing_module__WEBPACK_IMPORTED_MODULE_95__["MusicRecordingsRoutingModule"], _music_recordings_routing_module__WEBPACK_IMPORTED_MODULE_95__["MusicRecordingsRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_96__["MatGridListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_96__["MatGridListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_97__["MatSidenavModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_97__["MatSidenavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_98__["CdkTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_98__["CdkTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_table__WEBPACK_IMPORTED_MODULE_99__["MatTableModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_99__["MatTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_100__["MatToolbarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_100__["MatToolbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_101__["MatProgressBarModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_101__["MatProgressBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_102__["MatSnackBarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_102__["MatSnackBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_103__["CdkAccordionModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_103__["CdkAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_104__["MatExpansionModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_104__["MatExpansionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_105__["CdkStepperModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_105__["CdkStepperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_52__["MatStepperModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_52__["MatStepperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_badge__WEBPACK_IMPORTED_MODULE_106__["MatBadgeModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_106__["MatBadgeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_107__["AppMaterialModule"], _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_107__["AppMaterialModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _music_recordings_module__WEBPACK_IMPORTED_MODULE_1__["MusicRecordingsModule"], _music_recordings_module__WEBPACK_IMPORTED_MODULE_1__["MusicRecordingsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_chips__WEBPACK_IMPORTED_MODULE_74__["MAT_CHIPS_DEFAULT_OPTIONS"], { separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_108__["ENTER"]] }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_92__["SELECTION_MODEL_FACTORY"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_92__["ɵb"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_core__WEBPACK_IMPORTED_MODULE_35__["MAT_DATE_FORMATS"], _angular_material_core__WEBPACK_IMPORTED_MODULE_35__["MAT_NATIVE_DATE_FORMATS"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_forms__WEBPACK_IMPORTED_MODULE_30__["NG_VALIDATORS"], function () { return [_shared_shared_module__WEBPACK_IMPORTED_MODULE_94__["ɵ0"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_94__["ɵ1"]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_77__["DYNAMIC_FORM_CONTROL_MAP_FN"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_94__["ɵ2"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_50__["ROUTES"], function () { return [[{ path: "", component: _music_recordings_component__WEBPACK_IMPORTED_MODULE_109__["IndexComponent"], data: _music_recordings_routing_module__WEBPACK_IMPORTED_MODULE_95__["ɵ0"] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/assets/music-recordings/music-recordings.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/assets/music-recordings/music-recordings.module.ts ***!
  \********************************************************************/
/*! exports provided: MusicRecordingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicRecordingsModule", function() { return MusicRecordingsModule; });
// import { ButtonRendererComponent } from './button-renderer.component';
var MusicRecordingsModule = /** @class */ (function () {
    function MusicRecordingsModule() {
    }
    return MusicRecordingsModule;
}());



/***/ }),

/***/ "./src/app/assets/music-recordings/register-new-recording/form.layout.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/assets/music-recordings/register-new-recording/form.layout.ts ***!
  \*******************************************************************************/
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

/***/ "./src/app/assets/music-recordings/register-new-recording/register-recording.component.ngfactory.js":
/*!**********************************************************************************************************!*\
  !*** ./src/app/assets/music-recordings/register-new-recording/register-recording.component.ngfactory.js ***!
  \**********************************************************************************************************/
/*! exports provided: RenderType_RegisterRecordingComponent, View_RegisterRecordingComponent_0, View_RegisterRecordingComponent_Host_0, RegisterRecordingComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_RegisterRecordingComponent", function() { return RenderType_RegisterRecordingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RegisterRecordingComponent_0", function() { return View_RegisterRecordingComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RegisterRecordingComponent_Host_0", function() { return View_RegisterRecordingComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterRecordingComponentNgFactory", function() { return RegisterRecordingComponentNgFactory; });
/* harmony import */ var _register_recording_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-recording.component.scss.shim.ngstyle */ "./src/app/assets/music-recordings/register-new-recording/register-recording.component.scss.shim.ngstyle.js");
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
/* harmony import */ var _register_recording_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./register-recording.component */ "./src/app/assets/music-recordings/register-new-recording/register-recording.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

















var styles_RegisterRecordingComponent = [_register_recording_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_RegisterRecordingComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_RegisterRecordingComponent, data: {} });

function View_RegisterRecordingComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 27, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" As a writer or composer, you can register your own works and amend the details at any time. However, if you have a publisher, they will usually manage any registration and amendments on your behalf.\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 12, "mat-card", [["class", "mat-card"]], [[2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 10, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
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
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], { disabled: [0, "disabled"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 606208, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogClose"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"]], { dialogResult: [0, "dialogResult"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Submit"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["You\u2019ll be given a reference when you submit your work details, followed by a unique tune code for each work."]))], function (_ck, _v) { var _co = _v.component; var currVal_8 = _co.formGroup; _ck(_v, 7, 0, currVal_8); var currVal_9 = _co.formGroup; var currVal_10 = _co.formModel; var currVal_11 = _co.formLayout; _ck(_v, 11, 0, currVal_9, currVal_10, currVal_11); var currVal_12 = "row wrap"; _ck(_v, 13, 0, currVal_12); var currVal_13 = "40px"; _ck(_v, 14, 0, currVal_13); var currVal_14 = "start start"; _ck(_v, 15, 0, currVal_14); var currVal_18 = "cancel"; _ck(_v, 20, 0, currVal_18); var currVal_22 = _co.formGroup.invalid; _ck(_v, 23, 0, currVal_22); var currVal_23 = _co.formGroup.value; _ck(_v, 24, 0, currVal_23); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._animationMode === "NoopAnimations"); _ck(_v, 3, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassUntouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassTouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassPristine; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassDirty; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassValid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassInvalid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassPending; _ck(_v, 5, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_15 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).disabled || null); var currVal_16 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._animationMode === "NoopAnimations"); var currVal_17 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ariaLabel || null); _ck(_v, 18, 0, currVal_15, currVal_16, currVal_17); var currVal_19 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).disabled || null); var currVal_20 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._animationMode === "NoopAnimations"); var currVal_21 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ariaLabel || null); _ck(_v, 22, 0, currVal_19, currVal_20, currVal_21); }); }
function View_RegisterRecordingComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-register", [], null, null, null, View_RegisterRecordingComponent_0, RenderType_RegisterRecordingComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _register_recording_component__WEBPACK_IMPORTED_MODULE_16__["RegisterRecordingComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MAT_DIALOG_DATA"], _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_8__["DynamicFormService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var RegisterRecordingComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-register", _register_recording_component__WEBPACK_IMPORTED_MODULE_16__["RegisterRecordingComponent"], View_RegisterRecordingComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/assets/music-recordings/register-new-recording/register-recording.component.scss.shim.ngstyle.js":
/*!******************************************************************************************************************!*\
  !*** ./src/app/assets/music-recordings/register-new-recording/register-recording.component.scss.shim.ngstyle.js ***!
  \******************************************************************************************************************/
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
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2V0cy9tdXNpYy1yZWNvcmRpbmdzL3JlZ2lzdGVyLW5ldy1yZWNvcmRpbmcvcmVnaXN0ZXItcmVjb3JkaW5nLmNvbXBvbmVudC5zY3NzIn0= */"];



/***/ }),

/***/ "./src/app/assets/music-recordings/register-new-recording/register-recording.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/assets/music-recordings/register-new-recording/register-recording.component.ts ***!
  \************************************************************************************************/
/*! exports provided: RegisterRecordingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterRecordingComponent", function() { return RegisterRecordingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm5/core.js");
/* harmony import */ var _shared_forms_registerRecordings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_shared/forms/registerRecordings */ "./src/app/assets/music-recordings/_shared/forms/registerRecordings.ts");
/* harmony import */ var _form_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form.layout */ "./src/app/assets/music-recordings/register-new-recording/form.layout.ts");




var RegisterRecordingComponent = /** @class */ (function () {
    function RegisterRecordingComponent(data, formService) {
        this.data = data;
        this.formService = formService;
        this.formModel = _shared_forms_registerRecordings__WEBPACK_IMPORTED_MODULE_2__["RECORDING_REGISTER_FORM_MODEL"];
        this.formLayout = _form_layout__WEBPACK_IMPORTED_MODULE_3__["WORKS_FORM_LAYOUT"];
    }
    RegisterRecordingComponent.prototype.ngOnInit = function () {
        this.formGroup = this.formService.createFormGroup(this.formModel);
        this.formGroup.patchValue(this.data);
    };
    RegisterRecordingComponent.prototype.onBlur = function ($event) {
        console.log("Material blur event on: " + $event.model.id + ": ", $event);
    };
    RegisterRecordingComponent.prototype.onChange = function ($event) {
        console.log("Material change event on: " + $event.model.id + ": ", $event);
    };
    RegisterRecordingComponent.prototype.onFocus = function ($event) {
        console.log("Material focus event on: " + $event.model.id + ": ", $event);
    };
    RegisterRecordingComponent.prototype.onMatEvent = function ($event) {
        console.log("Material " + $event.type + " event on: " + $event.model.id + ": ", $event);
    };
    return RegisterRecordingComponent;
}());



/***/ })

}]);
//# sourceMappingURL=music-recordings-music-recordings-module-ngfactory.js.map