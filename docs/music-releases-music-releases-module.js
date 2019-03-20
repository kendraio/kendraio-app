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

/***/ "./src/app/music-releases/_shared/forms/registerNewRelease.ts":
/*!********************************************************************!*\
  !*** ./src/app/music-releases/_shared/forms/registerNewRelease.ts ***!
  \********************************************************************/
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

module.exports = "<mat-toolbar>\r\n  <span>\r\n    <button mat-button mat-raised-button (click)=\"openAddNewDialog()\">Create Release</button>\r\n  </span>\r\n</mat-toolbar>\r\n\r\n\r\n<mat-progress-bar *ngIf=\"showSpinner\" mode=\"indeterminate\"></mat-progress-bar>\r\n\r\n<!-- <pre> {{ allItems | json }}</pre> -->\r\n\r\n<div class=\"table-responsive-lg\" @enterAnimateUpDwn>\r\n  <ag-grid-angular #agGrid style=\"width: 100%; height: 700px;\" class=\"ag-theme-material\" [gridOptions]=\"gridOptions\"\r\n    [frameworkComponents]=\"gridOptions.frameworkComponents\" [rowData]=\"allItems\" animateRows=\"true\"\r\n    (cellClicked)=\"onCellClicked($event)\" rowSelection=\"multiple\" (selectionChanged)=\"onSelectionChanged($event)\"\r\n    animateRows=\"true\">\r\n\r\n    <ag-grid-column headerName=\"Releases\">\r\n      <ag-grid-column headerName=\"#\" [width]=\"80\" [checkboxSelection]=\"true\" [suppressMenu]=\"false\" [pinned]=\"true\"\r\n        [resizable]=\"true\" [filter]=\"true\"></ag-grid-column>\r\n\r\n      <ag-grid-column headerName=\"Actions\" [width]=\"100\" [pinned]=\"true\" [cellRenderer]=\"editBtnCellRenderer\">\r\n      </ag-grid-column>\r\n\r\n      <ag-grid-column headerName=\"Title\" field=\"Title\" [width]=\"175\" [pinned]=\"true\" [sortable]=\"true\"\r\n        [resizable]=\"true\" [filter]=\"true\" [cellEditorFramework]=\"gridOptions.frameworkComponents.inputRenderer\"\r\n        [editable]=\"true\"></ag-grid-column>\r\n\r\n      <ag-grid-column headerName=\"Artist\" field=\"Artist\" [width]=\"120\" [pinned]=\"true\" [sortable]=\"true\"\r\n        [resizable]=\"true\" [filter]=\"true\" [editable]=\"false\"></ag-grid-column>\r\n    </ag-grid-column>\r\n\r\n    <ag-grid-column headerName=\"Details\">\r\n\r\n      <ag-grid-column headerName=\"Date\" field=\"Date\" [width]=\"100\" [sortable]=\"true\" [resizable]=\"true\" [filter]=\"true\">\r\n      </ag-grid-column>\r\n      <ag-grid-column headerName=\"Owner\" field=\"Owner\" [width]=\"100\" [sortable]=\"true\" [resizable]=\"true\"\r\n        [filter]=\"true\"></ag-grid-column>\r\n      <ag-grid-column headerName=\"Date\" field=\"Date\" [width]=\"100\" [sortable]=\"true\" [resizable]=\"true\" [filter]=\"true\">\r\n      </ag-grid-column>\r\n      <ag-grid-column headerName=\"Territory\" field=\"Territory\" [width]=\"100\" [cellRenderer]=\"countryCellRenderer\"\r\n        [sortable]=\"true\" [resizable]=\"true\" [filter]=\"true\"></ag-grid-column>\r\n      <ag-grid-column headerName=\"Type\" field=\"Type\" [width]=\"150\" [sortable]=\"true\" [resizable]=\"true\" [filter]=\"true\">\r\n      </ag-grid-column>\r\n      <ag-grid-column headerName=\"Format\" field=\"Format\" [width]=\"150\" [sortable]=\"true\" [resizable]=\"true\"\r\n        [filter]=\"true\"></ag-grid-column>\r\n      <ag-grid-column headerName=\"Catalogue Number\" field=\"Catalogue Number\" [width]=\"150\" [pinned]=\"false\"\r\n        [sortable]=\"true\" [resizable]=\"true\" [filter]=\"true\"></ag-grid-column>\r\n      <ag-grid-column headerName=\"Barcode\" field=\"Barcode\" [width]=\"150\" [pinned]=\"false\" [sortable]=\"true\"\r\n        [resizable]=\"true\" [filter]=\"true\"></ag-grid-column>\r\n      <ag-grid-column headerName=\"#tracks\" field=\"Number of tracks\" [width]=\"50\" [pinned]=\"false\" [sortable]=\"true\"\r\n        [resizable]=\"true\" [filter]=\"true\"></ag-grid-column>\r\n      <ag-grid-column headerName=\"Distribution\" field=\"Distribution\" [width]=\"150\" [pinned]=\"false\" [sortable]=\"true\"\r\n        [resizable]=\"true\" [filter]=\"true\"></ag-grid-column>\r\n      <ag-grid-column headerName=\"Collective\" field=\"Collective\" [width]=\"150\" [pinned]=\"false\" [sortable]=\"true\"\r\n        [resizable]=\"true\" [filter]=\"true\"></ag-grid-column>\r\n      <ag-grid-column headerName=\"Submitted to\" field=\"Submitted to\" [width]=\"150\" [pinned]=\"false\" [sortable]=\"true\"\r\n        [resizable]=\"true\" [filter]=\"true\"></ag-grid-column>\r\n\r\n    </ag-grid-column>\r\n  </ag-grid-angular>\r\n\r\n  <mat-action-list *ngIf=\"claimsToSend.length > 0\">\r\n    <button mat-raised-button mat-button (click)=\"sendToClaim($event)\">Claim Selected</button>\r\n    <button mat-raised-button mat-button (click)=\"sendToRegister($event)\">Register Selected</button>\r\n    <button mat-raised-button mat-button (click)=\"sendToPublish($event)\">Distribute/Publish Selected</button>\r\n  </mat-action-list>\r\n  <div>Selection: <span id=\"selectedRows\">...</span></div>\r\n\r\n</div>"

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
/* harmony import */ var _shared_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../_shared/animations */ "./src/app/_shared/animations/index.ts");
/* harmony import */ var src_app_claims_send_claims_send_claims_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/claims/send-claims/send-claims.component */ "./src/app/claims/send-claims/send-claims.component.ts");
/* harmony import */ var _register_new_release_register_new_release_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../register-new-release/register-new-release.component */ "./src/app/music-releases/register-new-release/register-new-release.component.ts");
/* harmony import */ var _publish_publish_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../publish/publish.component */ "./src/app/music-releases/publish/publish.component.ts");













var IndexComponent = /** @class */ (function () {
    function IndexComponent(testData, pageTitle, dialog) {
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
                inputRenderer: src_app_shared_components__WEBPACK_IMPORTED_MODULE_8__["MatInputComponent"],
                thing: src_app_shared_components__WEBPACK_IMPORTED_MODULE_8__["MatButtonComponent"]
            }
        };
    }
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.claimsToSend = [];
        this.pageTitle.setTitle('Releases');
        this.entityTypes$ = this.testData.listEntityTypes();
        this.entityList$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (type) { return _this.testData.listEntities(type); }));
        this.selectedEntity$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (id) { return _this.testData.getEntity(_this.selectedType, id); }));
        this.listAll$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (type) { return _this.testData.listAll(type); }));
        this.listAll();
    };
    IndexComponent.prototype.countryCellRenderer = function (params) {
        var flag = '<img border=\'0\' width=\'15\' height=\'10\' style=\'margin-bottom: 2px\' src=\'https://www.ag-grid.com/images/flags/gb.png\'>';
        return flag + ' ' + params.value;
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
    IndexComponent.prototype.openAddNewDialog = function (ev) {
        var _this = this;
        var dialogRef = this.dialog.open(_register_new_release_register_new_release_component__WEBPACK_IMPORTED_MODULE_11__["RegisterNewReleaseComponent"], {
            data: 'ev',
            width: '80%',
            panelClass: 'formFieldWidth380'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.addItemToGrid(result);
        });
    };
    IndexComponent.prototype.addItemToGrid = function (result) {
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
    IndexComponent.prototype.sendToClaim = function (ev) {
        var data = { section: 'releases', data: this.claimsToSend };
        var dialogRef = this.dialog.open(src_app_claims_send_claims_send_claims_component__WEBPACK_IMPORTED_MODULE_10__["SendClaimsComponent"], {
            data: data,
            width: '80%',
            panelClass: 'formFieldWidth380',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    IndexComponent.prototype.sendToPublish = function (ev) {
        var data = { section: 'releases', data: this.claimsToSend };
        var dialogRef = this.dialog.open(_publish_publish_component__WEBPACK_IMPORTED_MODULE_12__["PublishComponent"], {
            data: data,
            width: '80%',
            panelClass: 'formFieldWidth380',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    IndexComponent.prototype.listAll = function () {
        var _this = this;
        this.testData.listAll('music-release').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return _this.showSpinner = true; }))
            .subscribe(function (res) {
            _this.allItems = res;
            _this.showSpinner = false;
        });
    };
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/music-releases/index/index.component.html"),
            animations: [_shared_animations__WEBPACK_IMPORTED_MODULE_9__["Animations"].pageAni],
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

module.exports = "<p>\n  music-releases-detail works!\n</p>\n"

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
/* harmony import */ var _register_new_release_register_new_release_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./register-new-release/register-new-release.component */ "./src/app/music-releases/register-new-release/register-new-release.component.ts");
/* harmony import */ var _publish_publish_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./publish/publish.component */ "./src/app/music-releases/publish/publish.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./register/register.component */ "./src/app/music-releases/register/register.component.ts");
















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
                _music_releases_detail_music_releases_detail_component__WEBPACK_IMPORTED_MODULE_9__["MusicReleasesDetailComponent"],
                _register_new_release_register_new_release_component__WEBPACK_IMPORTED_MODULE_13__["RegisterNewReleaseComponent"], _publish_publish_component__WEBPACK_IMPORTED_MODULE_14__["PublishComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"]
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
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
                _publish_publish_component__WEBPACK_IMPORTED_MODULE_14__["PublishComponent"]
            ],
            entryComponents: [
                _register_new_release_register_new_release_component__WEBPACK_IMPORTED_MODULE_13__["RegisterNewReleaseComponent"],
                _publish_publish_component__WEBPACK_IMPORTED_MODULE_14__["PublishComponent"]
            ]
        })
    ], MusicReleasesModule);
    return MusicReleasesModule;
}());



/***/ }),

/***/ "./src/app/music-releases/publish/publish.component.html":
/*!***************************************************************!*\
  !*** ./src/app/music-releases/publish/publish.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <pre> {{ data | json }}</pre>  -->\n\n\n<h1>Publish Distribute Your Release</h1>\nPlease be sure all info is correct before starting the distribution process.\n\n<section *ngIf=\"!nextStep\" mat-dialog-content >\n  <div class=\"mt-4\" fxLayout=\"row wrap\" fxLayoutGap=\"20px\" fxLayoutAlign=\"start stretch\" mat-dialog-content >\n\n    <mat-card *ngFor=\"let item of data.data; let i = index;\">\n      <mat-card-header>\n\n        <mat-card-title>Release {{i+1}} / {{data.length}}</mat-card-title>\n        <mat-card-subtitle>{{item.name}}</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        Artist: {{item.artist}}<br>\n        Collective: {{item.collective}}<br>\n        Owner: {{item.owner}}<br>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-mini-fab matTooltip=\"Remove from Claim\" (click)=\"removeClaim(i)\">\n          <mat-icon>delete</mat-icon>\n        </button>\n        <button mat-mini-fab matTooltip=\"Edit\" (click)=\"removeClaim(i)\">\n          <mat-icon>edit</mat-icon>\n        </button>\n      </mat-card-actions>\n    </mat-card>\n\n  </div>\n</section>\n  <div mat-dialog-actions>\n    <button mat-button mat-dialog-close=\"Edit Cancelled\">Cancel</button>\n    <button mat-button mat-raised-button (click)=\"nextClaimStep()\">Distribute</button>\n  </div>\n\n\n\n<section *ngIf=\"nextStep\" class=\"my-5\"  mat-dialog-content>\n\n  The folowing claims have been sent to your Claims Folder.\n\n  <div [@enterLeaveInOut-2]=\"data\" fxLayout=\"row wrap\" fxLayoutGap=\"20px\" fxLayoutAlign=\"start stretch\">\n    <mat-card *ngFor=\"let item of data.data; let i = index;\">\n      <mat-icon mat-list-icon>library_music</mat-icon>\n      <h6 mat-line>{{item.name}}</h6>\n      <p mat-line> {{item.artist}} </p>\n    </mat-card>\n  </div>\n\n</section>\n\n  <div mat-dialog-actions>\n    <button mat-button mat-dialog-close=\"Edit Cancelled\">Close</button>\n    <button mat-button mat-raised-button mat-dialog-close=\"next\" (click)=\"nextClaimStep3(data.section)\">View my Claims\n      Organiser</button>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/music-releases/publish/publish.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/music-releases/publish/publish.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL211c2ljLXJlbGVhc2VzL3B1Ymxpc2gvcHVibGlzaC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/music-releases/publish/publish.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/music-releases/publish/publish.component.ts ***!
  \*************************************************************/
/*! exports provided: PublishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublishComponent", function() { return PublishComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PublishComponent = /** @class */ (function () {
    function PublishComponent(data, router) {
        this.data = data;
        this.router = router;
        this.nextStep = false;
    }
    PublishComponent.prototype.ngOnInit = function () {
    };
    PublishComponent.prototype.nextClaimStep = function () {
        console.log(this.data);
        this.nextStep = true;
    };
    PublishComponent.prototype.nextClaimStep3 = function (section) {
        localStorage.setItem(section, JSON.stringify(this.data.data));
        this.router.navigate(['/claims']);
        // sidenav.open();
    };
    PublishComponent.prototype.removeClaim = function (i) {
        this.data.splice(i, 1);
    };
    PublishComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-publish',
            template: __webpack_require__(/*! ./publish.component.html */ "./src/app/music-releases/publish/publish.component.html"),
            styles: [__webpack_require__(/*! ./publish.component.scss */ "./src/app/music-releases/publish/publish.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PublishComponent);
    return PublishComponent;
}());



/***/ }),

/***/ "./src/app/music-releases/register-new-release/register-new-release.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/music-releases/register-new-release/register-new-release.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <p>\n introduction about registering a new Release here</p>\n  \n    <mat-card>\n  \n        <form [formGroup]=\"formGroup\">\n      \n            <dynamic-material-form [group]=\"formGroup\"\n                                   [layout]=\"formLayout\"\n                                   [model]=\"formModel\"\n                                   (blur)=\"onBlur($event)\"\n                                   (change)=\"onChange($event)\"\n                                   (focus)=\"onFocus($event)\"\n                                   (matEvent)=\"onMatEvent($event)\" \n                                   fxLayout=\"row wrap\" fxLayoutAlign=\"start start\" fxLayoutGap=\"40px\"\n                                   ></dynamic-material-form>\n  \n        </form>  \n    </mat-card>\n  \n\n    <div mat-dialog-actions class=\"align-right\">\n        <button mat-button  mat-dialog-close=\"Edit Cancelled\">Cancel</button>\n        <button  mat-raised-button [mat-dialog-close]=\"formGroup.value\" cdkFocusInitial [disabled]=\"formGroup.invalid\">Register</button>\n        <button  mat-raised-button [mat-dialog-close]=\"formGroup.value\" cdkFocusInitial [disabled]=\"formGroup.invalid\">Distribute</button>\n        <button  mat-raised-button [mat-dialog-close]=\"formGroup.value\" cdkFocusInitial [disabled]=\"formGroup.invalid\">Save</button>\n      </div>\n  \n  <!-- <p>You’ll be given a reference when you submit your work details, followed by a unique tune code for each work.</p> -->\n  \n  </div>\n\n  "

/***/ }),

/***/ "./src/app/music-releases/register-new-release/register-new-release.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/music-releases/register-new-release/register-new-release.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL211c2ljLXJlbGVhc2VzL3JlZ2lzdGVyLW5ldy1yZWxlYXNlL3JlZ2lzdGVyLW5ldy1yZWxlYXNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/music-releases/register-new-release/register-new-release.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/music-releases/register-new-release/register-new-release.component.ts ***!
  \***************************************************************************************/
/*! exports provided: RegisterNewReleaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterNewReleaseComponent", function() { return RegisterNewReleaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_forms_registerNewRelease__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_shared/forms/registerNewRelease */ "./src/app/music-releases/_shared/forms/registerNewRelease.ts");





var RegisterNewReleaseComponent = /** @class */ (function () {
    //formLayout: DynamicFormLayout = WORKS_FORM_LAYOUT;
    function RegisterNewReleaseComponent(data, formService) {
        this.data = data;
        this.formService = formService;
        this.formModel = _shared_forms_registerNewRelease__WEBPACK_IMPORTED_MODULE_4__["RELEASE_REGISTER_FORM_MODEL"];
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
    RegisterNewReleaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-new-release',
            template: __webpack_require__(/*! ./register-new-release.component.html */ "./src/app/music-releases/register-new-release/register-new-release.component.html"),
            styles: [__webpack_require__(/*! ./register-new-release.component.scss */ "./src/app/music-releases/register-new-release/register-new-release.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_2__["DynamicFormService"]])
    ], RegisterNewReleaseComponent);
    return RegisterNewReleaseComponent;
}());



/***/ }),

/***/ "./src/app/music-releases/register/register.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/music-releases/register/register.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  register works!\n</p>\n"

/***/ }),

/***/ "./src/app/music-releases/register/register.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/music-releases/register/register.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL211c2ljLXJlbGVhc2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/music-releases/register/register.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/music-releases/register/register.component.ts ***!
  \***************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/music-releases/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/music-releases/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ })

}]);
//# sourceMappingURL=music-releases-music-releases-module.js.map