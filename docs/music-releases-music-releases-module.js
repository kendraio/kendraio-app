(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["music-releases-music-releases-module"],{

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
    'addressStreet': {
        element: {
            host: 'material-form-group'
        }
    }
};


/***/ }),

/***/ "./src/app/music-releases/_shared/forms/formModel.ts":
/*!***********************************************************!*\
  !*** ./src/app/music-releases/_shared/forms/formModel.ts ***!
  \***********************************************************/
/*! exports provided: STATES_AUTOCOMPLETE_LIST, MUSIC_RELEASES_FORM_MODEL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATES_AUTOCOMPLETE_LIST", function() { return STATES_AUTOCOMPLETE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MUSIC_RELEASES_FORM_MODEL", function() { return MUSIC_RELEASES_FORM_MODEL; });
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
        id: 'title',
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
        id: 'artist',
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
        id: 'isrc',
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
        prefix: '<span>X</span>',
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        }
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'country',
        placeholder: 'Country',
        prefix: '<span>X</span>',
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        }
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'owner',
        placeholder: 'Owner',
        prefix: '<span>X</span>',
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        }
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'collective',
        placeholder: 'Collective',
        prefix: '<span>X</span>',
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        }
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'submittedTo',
        placeholder: 'Submitted to...',
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        }
    }),
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
        validators: {
            required: null
        },
        errorMessages: {
            required: 'You must confirm....'
        }
    })
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

module.exports = "<mat-progress-bar *ngIf=\"showSpinner\" mode=\"indeterminate\"></mat-progress-bar>\r\n\r\n\r\n<div style=\"display: none\">\r\n    {{gridOptions.rowData}}\r\n    </div>\r\n    \r\n    <div  class=\"table-responsive-lg\">\r\n        <ag-grid-angular #agGrid style=\"width: 100%; height: 700px;\" class=\"ag-theme-balham\"\r\n                     [gridOptions]=\"gridOptions\">\r\n    \r\n                     <ag-grid-column headerName=\"Recordings\">\r\n    \r\n                     <ag-grid-column headerName=\"#\" [width]=\"30\" [checkboxSelection]=\"true\"\r\n                     [suppressMenu]=\"true\" [pinned]=\"true\" [resizable]=\"true\" [filter]=\"true\"></ag-grid-column>\r\n                     <ag-grid-column \r\n                              headerName=\"Title\" \r\n                              field=\"Title\" [width]=\"125\" \r\n                              [pinned]=\"true\"  \r\n                              [sortable]=\"true\" \r\n                              [resizable]=\"true\" \r\n                              [filter]=\"true\"></ag-grid-column>\r\n                              <ag-grid-column headerName=\"Artist\"  field=\"Artist\" [width]=\"120\"  [pinned]=\"true\"  [sortable]=\"true\" [resizable]=\"true\" [filter]=\"true\"></ag-grid-column>\r\n                            </ag-grid-column>\r\n    \r\n                              <ag-grid-column headerName=\"Details\">\r\n                             \r\n                             \r\n    \r\n                              <ag-grid-column headerName=\"Date\"  field=\"Date\" [width]=\"100\"    [sortable]=\"true\" [resizable]=\"true\" [filter]=\"true\"></ag-grid-column>\r\n                              <ag-grid-column headerName=\"Owner\"  field=\"Owner\" [width]=\"100\"    [sortable]=\"true\" [resizable]=\"true\" [filter]=\"true\"></ag-grid-column>\r\n                              <ag-grid-column headerName=\"Date\"  field=\"Date\" [width]=\"100\"    [sortable]=\"true\" [resizable]=\"true\" [filter]=\"true\"></ag-grid-column>\r\n                              <ag-grid-column headerName=\"Territory\"  field=\"Territory\" [width]=\"100\" [cellRenderer]=\"countryCellRenderer\"    [sortable]=\"true\" [resizable]=\"true\" [filter]=\"true\"></ag-grid-column>\r\n                              <ag-grid-column headerName=\"Type\"  field=\"Type\" [width]=\"150\"   [sortable]=\"true\" [resizable]=\"true\" [filter]=\"true\"></ag-grid-column>\r\n                              <ag-grid-column headerName=\"Format\"  field=\"Format\" [width]=\"150\"    [sortable]=\"true\" [resizable]=\"true\" [filter]=\"true\"></ag-grid-column>\r\n                              <ag-grid-column headerName=\"Catalogue Number\"  field=\"Catalogue Number\" [width]=\"150\"  [pinned]=\"false\"  [sortable]=\"true\" [resizable]=\"true\" [filter]=\"true\"></ag-grid-column>\r\n                              <ag-grid-column headerName=\"Barcode\"  field=\"Barcode\" [width]=\"150\"  [pinned]=\"false\"  [sortable]=\"true\" [resizable]=\"true\" [filter]=\"true\"></ag-grid-column> \r\n                              <ag-grid-column headerName=\"Number of tracks\"  field=\"Number of tracks\" [width]=\"50\"  [pinned]=\"false\"  [sortable]=\"true\" [resizable]=\"true\" [filter]=\"true\"></ag-grid-column>\r\n                              <ag-grid-column headerName=\"Distribution\"  field=\"Distribution\" [width]=\"150\"  [pinned]=\"false\"  [sortable]=\"true\" [resizable]=\"true\" [filter]=\"true\"></ag-grid-column>\r\n                              <ag-grid-column headerName=\"Collective\"  field=\"Collective\" [width]=\"150\"  [pinned]=\"false\"  [sortable]=\"true\" [resizable]=\"true\" [filter]=\"true\"></ag-grid-column>\r\n                              <ag-grid-column headerName=\"Submitted to\"  field=\"Submitted to\" [width]=\"150\"  [pinned]=\"false\"  [sortable]=\"true\" [resizable]=\"true\" [filter]=\"true\"></ag-grid-column>\r\n                              <ag-grid-column headerName=\"Actions\"   [width]=\"150\"  [pinned]=\"false\"  [sortable]=\"true\" [resizable]=\"true\" [filter]=\"true\"></ag-grid-column>\r\n                              \r\n                            </ag-grid-column>\r\n        </ag-grid-angular>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n<mat-card *ngIf=\"allItems\">\r\n\r\n  <div class=\"table-responsive-lg\">\r\n\r\n    <table class=\"table table-striped table-hover table-sm small\">\r\n\r\n      <thead class=\"thead-dark\">\r\n        <tr>\r\n          <th>Title</th>\r\n          <th>Artist</th>\r\n          <th>Date</th>\r\n          <th>Owner</th>\r\n          <th>Territory</th>\r\n          <th>Type</th>\r\n          <th>Format</th>\r\n          <th>Catalogue Number</th>\r\n          <th>Barcode</th>\r\n          <th>Number of tracks</th>\r\n          <th>Distribution</th>\r\n          <th>Collective</th>\r\n          <th>Submitted to</th>\r\n          <th>Actions</th>\r\n        </tr>\r\n      </thead>\r\n\r\n      <tbody>\r\n\r\n        <tr *ngFor=\"let item of allItems\">\r\n\r\n            <td>{{item.Title}}</td>\r\n            <td>{{item.Artist}}</td>\r\n            <td>{{item.Date}}</td>\r\n            <td>{{item.Owner}}</td>\r\n            <td>{{item.Territory}}</td>\r\n            <td>{{item.Type}}</td>\r\n            <td>{{item.Format}}</td>\r\n            <td>{{item['Catalogue Number']}}</td>\r\n            <td>{{item.Barcode}}</td>\r\n            <td>{{item['Number of tracks']}}</td>\r\n            <td>{{item.Distribution}}</td>\r\n            <td>{{item.Collective}}</td>\r\n            <td>{{item['Submitted to']}}</td>\r\n\r\n         \r\n          <td>\r\n            <button [routerLink]=\"['edit', 555]\">Edit</button>\r\n            <a mat-stroked-button [routerLink]=\"['detail', 555]\">view</a>\r\n          </td>\r\n        </tr>\r\n\r\n\r\n      </tbody>\r\n    </table>\r\n\r\n  </div>\r\n\r\n\r\n</mat-card>"

/***/ }),

/***/ "./src/app/music-releases/index/index.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/music-releases/index/index.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL211c2ljLXJlbGVhc2VzL2luZGV4L2luZGV4LmNvbXBvbmVudC5zY3NzIn0= */"

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
/* harmony import */ var src_app_shared_services_test_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_shared/services/test-api.service */ "./src/app/_shared/services/test-api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var IndexComponent = /** @class */ (function () {
    function IndexComponent(testData) {
        this.testData = testData;
        this.listAll();
    }
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.entityTypes$ = this.testData.listEntityTypes();
        this.entityList$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (type) { return _this.testData.listEntities(type); }));
        this.selectedEntity$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (id) { return _this.testData.getEntity(_this.selectedType, id); }));
        this.listAll$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (type) { return _this.testData.listAll(type); }));
        this.listAll();
    };
    IndexComponent.prototype.countryCellRenderer = function (params) {
        var flag = "<img border='0' width='15' height='10' style='margin-bottom: 2px' src='https://www.ag-grid.com/images/flags/gb.png'>";
        return flag + " " + params.value;
    };
    IndexComponent.prototype.changeEntityType = function (type) {
        this.selectedType = type;
        this.entityList$.next(type);
    };
    IndexComponent.prototype.changeEntity = function (id) {
        this.selectedEntity$.next(id);
    };
    IndexComponent.prototype.listAll = function () {
        var _this = this;
        this.listAll$ = this.testData.listAll('music-release').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.showSpinner = true; }))
            .subscribe(function (res) {
            // this.allItems = res;
            _this.gridOptions = {};
            _this.gridOptions.columnDefs = [
                {
                    headerName: 'Title',
                    field: 'Title'
                },
                {
                    headerName: 'Artist',
                    field: 'Artist'
                },
                {
                    headerName: 'Date',
                    field: 'Date'
                },
                {
                    headerName: 'Owner',
                    field: 'Owner'
                },
                {
                    headerName: 'Type',
                    field: 'Type'
                },
                {
                    headerName: 'Format',
                    field: 'Format'
                },
                {
                    headerName: 'Catalogue Number',
                    field: 'Catalogue Number'
                },
                {
                    headerName: 'Barcode',
                    field: 'Barcode'
                },
                {
                    headerName: 'Number of tracks',
                    field: 'Number of tracks'
                },
                {
                    headerName: 'Distribution',
                    field: 'Distribution'
                },
                {
                    headerName: 'Collective',
                    field: 'Collective'
                },
                {
                    headerName: 'Submitted to',
                    field: 'Submitted to'
                },
                {
                    headerName: 'Actions',
                    field: 'Actions'
                }
            ];
            _this.gridOptions.rowData = res;
            _this.showSpinner = false;
        });
        // this.listAll$.next('music-recording');
    };
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/music-releases/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/music-releases/index/index.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_test_api_service__WEBPACK_IMPORTED_MODULE_2__["TestDataService"]])
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

module.exports = "<p>\r\n  music-releases-edit works!\r\n</p>\r\n\r\n\r\n<div class=\"content-margin\" style=\"width: 50%;\">\r\n\r\n  <mat-card>\r\n\r\n      <form [formGroup]=\"formGroup\">\r\n\r\n          <dynamic-material-form [group]=\"formGroup\"\r\n                                 [layout]=\"formLayout\"\r\n                                 [model]=\"formModel\"\r\n                                 (blur)=\"onBlur($event)\"\r\n                                 (change)=\"onChange($event)\"\r\n                                 (focus)=\"onFocus($event)\"\r\n                                 (matEvent)=\"onMatEvent($event)\"></dynamic-material-form>\r\n\r\n      </form>\r\n\r\n  </mat-card>\r\n\r\n  <!--button (click)=\"test()\">Update List</button-->\r\n\r\n  <pre>{{formGroup.value | json}}</pre>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/music-releases/music-releases-edit/music-releases-edit.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/music-releases/music-releases-edit/music-releases-edit.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL211c2ljLXJlbGVhc2VzL211c2ljLXJlbGVhc2VzLWVkaXQvbXVzaWMtcmVsZWFzZXMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"

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





var MusicReleasesEditComponent = /** @class */ (function () {
    function MusicReleasesEditComponent(formService) {
        this.formService = formService;
        this.formModel = _shared_forms_formModel__WEBPACK_IMPORTED_MODULE_3__["MUSIC_RELEASES_FORM_MODEL"];
        this.formLayout = _shared_forms_form_layout__WEBPACK_IMPORTED_MODULE_4__["FORM_LAYOUT"];
    }
    MusicReleasesEditComponent.prototype.ngOnInit = function () {
        this.formGroup = this.formService.createFormGroup(this.formModel);
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
            styles: [__webpack_require__(/*! ./music-releases-edit.component.scss */ "./src/app/music-releases/music-releases-edit/music-releases-edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_2__["DynamicFormService"]])
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
                _music_releases_routing_module__WEBPACK_IMPORTED_MODULE_6__["MusicReleasesRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ng_dynamic_forms_ui_material__WEBPACK_IMPORTED_MODULE_4__["DynamicFormsMaterialUIModule"],
                _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_5__["AppMaterialModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__["AgGridModule"].withComponents([])
            ]
        })
    ], MusicReleasesModule);
    return MusicReleasesModule;
}());



/***/ })

}]);
//# sourceMappingURL=music-releases-music-releases-module.js.map