(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["music-releases-music-releases-module"],{

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





/***/ }),

/***/ "./src/app/_shared/components/material/mat-button.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/_shared/components/material/mat-button.component.ts ***!
  \*********************************************************************/
/*! exports provided: MatButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatButtonComponent", function() { return MatButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MatButtonComponent = /** @class */ (function () {
    function MatButtonComponent(
    //   private columnAlignmentService: ColumnAlignmentService
    ) {
    }
    MatButtonComponent.prototype.agInit = function (params) {
        this.params = params;
    };
    MatButtonComponent.prototype.refresh = function (params) {
        this.params = params;
        return true;
    };
    MatButtonComponent.prototype.groupChanged = function ($event) {
        //  this.columnAlignmentService.changeColumnAlignment($event.value);
    };
    MatButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'button-component',
            template: "\n        <div class=\"container\">\n        <button mat-raised-button mat-button>Edit</button>\n        </div>\n    ",
            styles: ["\n        .container {\n            width: 100%;\n        }\n\n        /deep/\n        .ag-header-cell {\n            text-align: left;\n        }\n    "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MatButtonComponent);
    return MatButtonComponent;
}());



/***/ }),

/***/ "./src/app/_shared/components/material/mat-input.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/_shared/components/material/mat-input.component.ts ***!
  \********************************************************************/
/*! exports provided: MatInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatInputComponent", function() { return MatInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MatInputComponent = /** @class */ (function () {
    function MatInputComponent() {
        this.focusedInput = 0;
    }
    MatInputComponent.prototype.agInit = function (params) {
        this.params = params;
        this.Title = this.params.value;
        // .split(" ")[0];
        // this.lastName = this.params.value.split(" ")[1];
    };
    // dont use afterGuiAttached for post gui events - hook into ngAfterViewInit instead for this
    MatInputComponent.prototype.ngAfterViewInit = function () {
        this.focusOnInputNextTick(this.inputs.first);
    };
    MatInputComponent.prototype.focusOnInputNextTick = function (input) {
        window.setTimeout(function () {
            input.element.nativeElement.focus();
        }, 0);
    };
    MatInputComponent.prototype.getValue = function () {
        return "" + this.Title;
    };
    MatInputComponent.prototype.isPopup = function () {
        return true;
    };
    /*
     * A little over complicated for what it is, but the idea is to illustrate how you might tab between multiple inputs
     * say for example in full row editing
     */
    MatInputComponent.prototype.onKeyDown = function (event) {
        var _this = this;
        var key = event.which || event.keyCode;
        if (key == 9) {
            // tab
            this.preventDefaultAndPropagation(event);
            // either move one input along, or cycle back to 0
            this.focusedInput = this.focusedInput === this.inputs.length - 1 ? 0 : this.focusedInput + 1;
            var focusedInput_1 = this.focusedInput;
            var inputToFocusOn = this.inputs.find(function (item, index) {
                return index === focusedInput_1;
            });
            this.focusOnInputNextTick(inputToFocusOn);
        }
        else if (key == 13) {
            // enter
            // perform some validation on enter - in this example we assume all inputs are mandatory
            // in a proper application you'd probably want to inform the user that an input is blank
            this.inputs.forEach(function (input) {
                if (!input.element.nativeElement.value) {
                    _this.preventDefaultAndPropagation(event);
                    _this.focusOnInputNextTick(input);
                }
            });
        }
    };
    MatInputComponent.prototype.preventDefaultAndPropagation = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('input', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], MatInputComponent.prototype, "inputs", void 0);
    MatInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "input-cell",
            template: "\n        <mat-card>\n        <form class=\"container\" tabindex=\"0\" (keydown)=\"onKeyDown($event)\">\n            <mat-form-field class=\"example-full-width\">            \n                <input #input matInput [(ngModel)]=\"Title\" placeholder=\"Title\"\n                       [ngModelOptions]=\"{standalone: true}\">\n            </mat-form-field>\n        </form>\n        </mat-card>\n    ",
            styles: ["\n            .container {\n                width: 350px;\n            }\n        "]
        })
    ], MatInputComponent);
    return MatInputComponent;
}());



/***/ }),

/***/ "./src/app/_shared/shared.module.ts":
/*!******************************************!*\
  !*** ./src/app/_shared/shared.module.ts ***!
  \******************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_shared/components */ "./src/app/_shared/components/index.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__);









var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__["AgGridModule"].withComponents([
                    _shared_components__WEBPACK_IMPORTED_MODULE_7__["MatInputComponent"],
                    _shared_components__WEBPACK_IMPORTED_MODULE_7__["MatButtonComponent"]
                ])
            ],
            declarations: [
                _shared_components__WEBPACK_IMPORTED_MODULE_7__["MatInputComponent"],
                _shared_components__WEBPACK_IMPORTED_MODULE_7__["MatButtonComponent"]
            ],
            exports: [
                //  matComponents.MatInputComponent,
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
            ],
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["LowerCasePipe"],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/music-releases/_shared/forms/form.layout.ts":
/*!*************************************************************!*\
  !*** ./src/app/music-releases/_shared/forms/form.layout.ts ***!
  \*************************************************************/
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

/***/ "./src/app/music-releases/_shared/forms/formModel.ts":
/*!***********************************************************!*\
  !*** ./src/app/music-releases/_shared/forms/formModel.ts ***!
  \***********************************************************/
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

/***/ "./src/app/music-releases/index.ts":
/*!*****************************************!*\
  !*** ./src/app/music-releases/index.ts ***!
  \*****************************************/
/*! exports provided: IndexComponent, MusicReleasesDetailComponent, MusicReleasesEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index/index.component */ "./src/app/music-releases/index/index.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return _index_index_component__WEBPACK_IMPORTED_MODULE_0__["IndexComponent"]; });

/* harmony import */ var _music_releases_detail_music_releases_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./music-releases-detail/music-releases-detail.component */ "./src/app/music-releases/music-releases-detail/music-releases-detail.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MusicReleasesDetailComponent", function() { return _music_releases_detail_music_releases_detail_component__WEBPACK_IMPORTED_MODULE_1__["MusicReleasesDetailComponent"]; });

/* harmony import */ var _music_releases_edit_music_releases_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./music-releases-edit/music-releases-edit.component */ "./src/app/music-releases/music-releases-edit/music-releases-edit.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MusicReleasesEditComponent", function() { return _music_releases_edit_music_releases_edit_component__WEBPACK_IMPORTED_MODULE_2__["MusicReleasesEditComponent"]; });






/***/ }),

/***/ "./src/app/music-releases/index/index.component.html":
/*!***********************************************************!*\
  !*** ./src/app/music-releases/index/index.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar *ngIf=\"showSpinner\" mode=\"indeterminate\"></mat-progress-bar>\r\n\r\n\r\n\r\n<div class=\"table-responsive-lg\">\r\n  <ag-grid-angular #agGrid style=\"width: 100%; height: 700px;\" class=\"ag-theme-material\" \r\n  [gridOptions]=\"gridOptions\"\r\n  [frameworkComponents]=\"gridOptions.frameworkComponents\"\r\n  [rowData]=\"allItems\"\r\n  \r\n    (cellClicked)=\"onCellClicked($event)\" rowSelection=\"multiple\">\r\n\r\n    <ag-grid-column headerName=\"Releases\">\r\n      <ag-grid-column headerName=\"#\" [width]=\"80\" [checkboxSelection]=\"true\" [suppressMenu]=\"false\" [pinned]=\"true\"\r\n        [resizable]=\"true\" [filter]=\"true\"></ag-grid-column>\r\n      <ag-grid-column headerName=\"Actions\" [width]=\"100\" [pinned]=\"true\" [cellRenderer]=\"editBtnCellRenderer\">\r\n      </ag-grid-column>\r\n\r\n      <ag-grid-column headerName=\"Title\" field=\"Title\" [width]=\"175\" [pinned]=\"true\" [sortable]=\"true\"\r\n        [resizable]=\"true\" [filter]=\"true\"\r\n        [cellEditorFramework]=\"gridOptions.frameworkComponents.inputRenderer\"\r\n        [editable]=\"true\"\r\n        ></ag-grid-column>\r\n        \r\n      <ag-grid-column headerName=\"Artist\" field=\"Artist\" [width]=\"120\" [pinned]=\"true\" [sortable]=\"true\"\r\n        [resizable]=\"true\" [filter]=\"true\"  [editable]=\"false\"></ag-grid-column>\r\n    </ag-grid-column>\r\n\r\n    <ag-grid-column headerName=\"Details\">\r\n\r\n      <ag-grid-column \r\n      headerName=\"Date\" field=\"Date\" [width]=\"100\" [sortable]=\"true\" [resizable]=\"true\" [filter]=\"true\">\r\n      </ag-grid-column>\r\n      <ag-grid-column headerName=\"Owner\" field=\"Owner\" [width]=\"100\" [sortable]=\"true\" [resizable]=\"true\"\r\n        [filter]=\"true\"></ag-grid-column>\r\n      <ag-grid-column headerName=\"Date\" field=\"Date\" [width]=\"100\" [sortable]=\"true\" [resizable]=\"true\" [filter]=\"true\">\r\n      </ag-grid-column>\r\n      <ag-grid-column headerName=\"Territory\" field=\"Territory\" [width]=\"100\" [cellRenderer]=\"countryCellRenderer\"\r\n        [sortable]=\"true\" [resizable]=\"true\" [filter]=\"true\"></ag-grid-column>\r\n      <ag-grid-column headerName=\"Type\" field=\"Type\" [width]=\"150\" [sortable]=\"true\" [resizable]=\"true\" [filter]=\"true\">\r\n      </ag-grid-column>\r\n      <ag-grid-column headerName=\"Format\" field=\"Format\" [width]=\"150\" [sortable]=\"true\" [resizable]=\"true\"\r\n        [filter]=\"true\"></ag-grid-column>\r\n      <ag-grid-column headerName=\"Catalogue Number\" field=\"Catalogue Number\" [width]=\"150\" [pinned]=\"false\"\r\n        [sortable]=\"true\" [resizable]=\"true\" [filter]=\"true\"></ag-grid-column>\r\n      <ag-grid-column headerName=\"Barcode\" field=\"Barcode\" [width]=\"150\" [pinned]=\"false\" [sortable]=\"true\"\r\n        [resizable]=\"true\" [filter]=\"true\"></ag-grid-column>\r\n      <ag-grid-column headerName=\"#tracks\" field=\"Number of tracks\" [width]=\"50\" [pinned]=\"false\" [sortable]=\"true\"\r\n        [resizable]=\"true\" [filter]=\"true\"></ag-grid-column>\r\n      <ag-grid-column headerName=\"Distribution\" field=\"Distribution\" [width]=\"150\" [pinned]=\"false\" [sortable]=\"true\"\r\n        [resizable]=\"true\" [filter]=\"true\"></ag-grid-column>\r\n      <ag-grid-column headerName=\"Collective\" field=\"Collective\" [width]=\"150\" [pinned]=\"false\" [sortable]=\"true\"\r\n        [resizable]=\"true\" [filter]=\"true\"></ag-grid-column>\r\n      <ag-grid-column headerName=\"Submitted to\" field=\"Submitted to\" [width]=\"150\" [pinned]=\"false\" [sortable]=\"true\"\r\n        [resizable]=\"true\" [filter]=\"true\"></ag-grid-column>\r\n\r\n    </ag-grid-column>\r\n  </ag-grid-angular>\r\n\r\n<mat-action-list>  <button mat-raised-button mat-button>Claim Selected</button>\r\n</mat-action-list>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/music-releases/index/index.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/music-releases/index/index.component.ts ***!
  \*********************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_page_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/page-title.service */ "./src/app/services/page-title.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _music_releases_edit_music_releases_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../music-releases-edit/music-releases-edit.component */ "./src/app/music-releases/music-releases-edit/music-releases-edit.component.ts");
/* harmony import */ var _services_test_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/test-data.service */ "./src/app/services/test-data.service.ts");
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_shared/components */ "./src/app/_shared/components/index.ts");









var IndexComponent = /** @class */ (function () {
    function IndexComponent(testData, pageTitle, dialog) {
        this.testData = testData;
        this.pageTitle = pageTitle;
        this.dialog = dialog;
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
    }
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageTitle.setTitle('Releases');
        this.entityTypes$ = this.testData.listEntityTypes();
        this.entityList$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (type) { return _this.testData.listEntities(type); }));
        this.selectedEntity$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (id) { return _this.testData.getEntity(_this.selectedType, id); }));
        this.listAll$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (type) { return _this.testData.listAll(type); }));
        this.listAll();
    };
    IndexComponent.prototype.countryCellRenderer = function (params) {
        var flag = "<img border='0' width='15' height='10' style='margin-bottom: 2px' src='https://www.ag-grid.com/images/flags/gb.png'>";
        return flag + " " + params.value;
        // return this.thing;
    };
    IndexComponent.prototype.editBtnCellRenderer = function (params) {
        var btn = '<button class="mat-button mat-raised-button"><span class="mat-button-wrapper">Edit</span><div class="mat-button-ripple mat-ripple"></div><div class="mat-button-focus-overlay"></div></button>';
        return btn;
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
        var dialogRef = this.dialog.open(_music_releases_edit_music_releases_edit_component__WEBPACK_IMPORTED_MODULE_6__["MusicReleasesEditComponent"], {
            data: ev,
            width: '80%',
            panelClass: 'formFieldWidth380'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    IndexComponent.prototype.listAll = function () {
        var _this = this;
        this.testData.listAll('music-release').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return _this.showSpinner = true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(500))
            .subscribe(function (res) {
            _this.allItems = res;
            _this.showSpinner = false;
        });
    };
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/music-releases/index/index.component.html"),
            styles: [" \n  dynamic-material-form[fxLayoutAlign] { padding:10px; padding-left: 25px;}\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_test_data_service__WEBPACK_IMPORTED_MODULE_7__["TestDataService"],
            src_app_services_page_title_service__WEBPACK_IMPORTED_MODULE_4__["PageTitleService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/music-releases/music-releases-detail/music-releases-detail.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/music-releases/music-releases-detail/music-releases-detail.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  music-releases-detail works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/music-releases/music-releases-detail/music-releases-detail.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/music-releases/music-releases-detail/music-releases-detail.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL211c2ljLXJlbGVhc2VzL211c2ljLXJlbGVhc2VzLWRldGFpbC9tdXNpYy1yZWxlYXNlcy1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/music-releases/music-releases-detail/music-releases-detail.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/music-releases/music-releases-detail/music-releases-detail.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: MusicReleasesDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicReleasesDetailComponent", function() { return MusicReleasesDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MusicReleasesDetailComponent = /** @class */ (function () {
    function MusicReleasesDetailComponent() {
    }
    MusicReleasesDetailComponent.prototype.ngOnInit = function () {
    };
    MusicReleasesDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-music-releases-detail',
            template: __webpack_require__(/*! ./music-releases-detail.component.html */ "./src/app/music-releases/music-releases-detail/music-releases-detail.component.html"),
            styles: [__webpack_require__(/*! ./music-releases-detail.component.scss */ "./src/app/music-releases/music-releases-detail/music-releases-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MusicReleasesDetailComponent);
    return MusicReleasesDetailComponent;
}());



/***/ }),

/***/ "./src/app/music-releases/music-releases-edit/music-releases-edit.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/music-releases/music-releases-edit/music-releases-edit.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n <div>\r\n\r\n  <mat-card>\r\n\r\n      <form [formGroup]=\"formGroup\">\r\n    \r\n          <dynamic-material-form [group]=\"formGroup\"\r\n                                 [layout]=\"formLayout\"\r\n                                 [model]=\"formModel\"\r\n                                 (blur)=\"onBlur($event)\"\r\n                                 (change)=\"onChange($event)\"\r\n                                 (focus)=\"onFocus($event)\"\r\n                                 (matEvent)=\"onMatEvent($event)\" \r\n                                 fxLayout=\"row wrap\" fxLayoutAlign=\"start start\" fxLayoutGap=\"40px\"\r\n                                 ></dynamic-material-form>\r\n        \r\n\r\n      </form>\r\n\r\n  </mat-card>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <div mat-dialog-actions class=\"align-right\">\r\n      <button mat-button  mat-dialog-close=\"Edit Cancelled\">Cancel</button>\r\n      <button mat-button [mat-dialog-close]=\"data.Name\" cdkFocusInitial [disabled]=\"formGroup.invalid\">Save</button>\r\n    </div>\r\n\r\n\r\n  <pre>{{formGroup.value | json}}</pre>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/music-releases/music-releases-edit/music-releases-edit.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/music-releases/music-releases-edit/music-releases-edit.component.ts ***!
  \*************************************************************************************/
/*! exports provided: MusicReleasesEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicReleasesEditComponent", function() { return MusicReleasesEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm5/core.js");
/* harmony import */ var _shared_forms_formModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_shared/forms/formModel */ "./src/app/music-releases/_shared/forms/formModel.ts");
/* harmony import */ var _shared_forms_form_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_shared/forms/form.layout */ "./src/app/music-releases/_shared/forms/form.layout.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






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
    MusicReleasesEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-music-releases-edit',
            template: __webpack_require__(/*! ./music-releases-edit.component.html */ "./src/app/music-releases/music-releases-edit/music-releases-edit.component.html"),
            styles: [" \n  dynamic-material-form[fxLayoutAlign] { padding:10px; padding-left: 25px;}\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_2__["DynamicFormService"]])
    ], MusicReleasesEditComponent);
    return MusicReleasesEditComponent;
}());



/***/ }),

/***/ "./src/app/music-releases/music-releases-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/music-releases/music-releases-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: MusicReleasesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicReleasesRoutingModule", function() { return MusicReleasesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./src/app/music-releases/index.ts");




var routes = [
    { path: '', component: _index__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"] },
    { path: 'edit/:id', component: _index__WEBPACK_IMPORTED_MODULE_3__["MusicReleasesEditComponent"] },
    { path: 'detail/:id', component: _index__WEBPACK_IMPORTED_MODULE_3__["MusicReleasesDetailComponent"] },
];
var MusicReleasesRoutingModule = /** @class */ (function () {
    function MusicReleasesRoutingModule() {
    }
    MusicReleasesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MusicReleasesRoutingModule);
    return MusicReleasesRoutingModule;
}());



/***/ }),

/***/ "./src/app/music-releases/music-releases.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/music-releases/music-releases.module.ts ***!
  \*********************************************************/
/*! exports provided: MusicReleasesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicReleasesModule", function() { return MusicReleasesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_dynamic_forms_ui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-dynamic-forms/ui-material */ "./node_modules/@ng-dynamic-forms/ui-material/fesm5/ui-material.js");
/* harmony import */ var _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-material/app-material.module */ "./src/app/app-material/app-material.module.ts");
/* harmony import */ var _music_releases_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./music-releases-routing.module */ "./src/app/music-releases/music-releases-routing.module.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index/index.component */ "./src/app/music-releases/index/index.component.ts");
/* harmony import */ var _music_releases_edit_music_releases_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./music-releases-edit/music-releases-edit.component */ "./src/app/music-releases/music-releases-edit/music-releases-edit.component.ts");
/* harmony import */ var _music_releases_detail_music_releases_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./music-releases-detail/music-releases-detail.component */ "./src/app/music-releases/music-releases-detail/music-releases-detail.component.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../_shared/shared.module */ "./src/app/_shared/shared.module.ts");













// import { MatInputComponent } from '../_shared/components';
//  import { MatInputComponent } from "./mat-input.component";
var MusicReleasesModule = /** @class */ (function () {
    function MusicReleasesModule() {
    }
    MusicReleasesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _index_index_component__WEBPACK_IMPORTED_MODULE_7__["IndexComponent"],
                _music_releases_edit_music_releases_edit_component__WEBPACK_IMPORTED_MODULE_8__["MusicReleasesEditComponent"],
                _music_releases_detail_music_releases_detail_component__WEBPACK_IMPORTED_MODULE_9__["MusicReleasesDetailComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
                _music_releases_routing_module__WEBPACK_IMPORTED_MODULE_6__["MusicReleasesRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ng_dynamic_forms_ui_material__WEBPACK_IMPORTED_MODULE_4__["DynamicFormsMaterialUIModule"],
                _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_5__["AppMaterialModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__["AgGridModule"].withComponents([
                // MatInputComponent
                ]),
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
            ],
            exports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"]
            ]
        })
    ], MusicReleasesModule);
    return MusicReleasesModule;
}());



/***/ })

}]);
//# sourceMappingURL=music-releases-music-releases-module.js.map