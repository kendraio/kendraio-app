(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["files-files-module"],{

/***/ "./src/app/files/file-details/file-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/files/file-details/file-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  file-details works!\r\n</p>\r\n\r\n\r\n\r\nFile\r\nThe name of the uploaded file.\r\nTitle\r\nUser can give an uploaded file a title.\r\nType\r\nThe type of file. It may be useful to have this as two parts “Audio - wave” , “Audio - mp3” and allow filtering by both.\r\nAudio\r\nPhoto\r\nVideo\r\nUploaded date\r\nDate the file was uploaded.\r\nUploaded by\r\nOnly needed if we are supporting more then one user in the app.\r\nCreated date\r\nmetadata that can be entered about the date the resource was created.\r\nCreated by\r\nor should it be “Copyright owner” - Not sure if we need this as we will likely manage in other screens. This may be derived from other linked information \r\nEDIT \r\nLink to edit page\r\nUsed by\r\nIt can be useful to see a list of releases using an audio file. We may need a “...” after if more then we have room for as a file can be used in more than one place. Use a popup or other way to expand on click.\r\n"

/***/ }),

/***/ "./src/app/files/file-details/file-details.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/files/file-details/file-details.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbGVzL2ZpbGUtZGV0YWlscy9maWxlLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/files/file-details/file-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/files/file-details/file-details.component.ts ***!
  \**************************************************************/
/*! exports provided: FileDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileDetailsComponent", function() { return FileDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FileDetailsComponent = /** @class */ (function () {
    function FileDetailsComponent() {
    }
    FileDetailsComponent.prototype.ngOnInit = function () {
    };
    FileDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-file-details',
            template: __webpack_require__(/*! ./file-details.component.html */ "./src/app/files/file-details/file-details.component.html"),
            styles: [__webpack_require__(/*! ./file-details.component.scss */ "./src/app/files/file-details/file-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FileDetailsComponent);
    return FileDetailsComponent;
}());



/***/ }),

/***/ "./src/app/files/file-edit/file-edit.component.html":
/*!**********************************************************!*\
  !*** ./src/app/files/file-edit/file-edit.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  file-edit works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/files/file-edit/file-edit.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/files/file-edit/file-edit.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbGVzL2ZpbGUtZWRpdC9maWxlLWVkaXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/files/file-edit/file-edit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/files/file-edit/file-edit.component.ts ***!
  \********************************************************/
/*! exports provided: FileEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileEditComponent", function() { return FileEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FileEditComponent = /** @class */ (function () {
    function FileEditComponent() {
    }
    FileEditComponent.prototype.ngOnInit = function () {
    };
    FileEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-file-edit',
            template: __webpack_require__(/*! ./file-edit.component.html */ "./src/app/files/file-edit/file-edit.component.html"),
            styles: [__webpack_require__(/*! ./file-edit.component.scss */ "./src/app/files/file-edit/file-edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FileEditComponent);
    return FileEditComponent;
}());



/***/ }),

/***/ "./src/app/files/files-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/files/files-routing.module.ts ***!
  \***********************************************/
/*! exports provided: FilesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesRoutingModule", function() { return FilesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./src/app/files/index.ts");




// import { SharedModule } from '../_shared/shared.module';
var routes = [
    { path: '', component: _index__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"] },
    { path: 'file-detail/:id', component: _index__WEBPACK_IMPORTED_MODULE_3__["FileDetailsComponent"] },
    { path: 'file-edit/:id', component: _index__WEBPACK_IMPORTED_MODULE_3__["FileEditComponent"] },
];
var FilesRoutingModule = /** @class */ (function () {
    function FilesRoutingModule() {
    }
    FilesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], FilesRoutingModule);
    return FilesRoutingModule;
}());



/***/ }),

/***/ "./src/app/files/files.module.ts":
/*!***************************************!*\
  !*** ./src/app/files/files.module.ts ***!
  \***************************************/
/*! exports provided: FilesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesModule", function() { return FilesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _files_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./files-routing.module */ "./src/app/files/files-routing.module.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index */ "./src/app/files/index.ts");
/* harmony import */ var _file_edit_file_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./file-edit/file-edit.component */ "./src/app/files/file-edit/file-edit.component.ts");






var FilesModule = /** @class */ (function () {
    function FilesModule() {
    }
    FilesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_index__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"], _index__WEBPACK_IMPORTED_MODULE_4__["FileDetailsComponent"], _file_edit_file_edit_component__WEBPACK_IMPORTED_MODULE_5__["FileEditComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _files_routing_module__WEBPACK_IMPORTED_MODULE_3__["FilesRoutingModule"]
            ],
            bootstrap: [_index__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"]]
        })
    ], FilesModule);
    return FilesModule;
}());



/***/ }),

/***/ "./src/app/files/index.ts":
/*!********************************!*\
  !*** ./src/app/files/index.ts ***!
  \********************************/
/*! exports provided: FileEditComponent, FileDetailsComponent, IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_details_file_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-details/file-details.component */ "./src/app/files/file-details/file-details.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileDetailsComponent", function() { return _file_details_file_details_component__WEBPACK_IMPORTED_MODULE_0__["FileDetailsComponent"]; });

/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index/index.component */ "./src/app/files/index/index.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return _index_index_component__WEBPACK_IMPORTED_MODULE_1__["IndexComponent"]; });

/* harmony import */ var _file_edit_file_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file-edit/file-edit.component */ "./src/app/files/file-edit/file-edit.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileEditComponent", function() { return _file_edit_file_edit_component__WEBPACK_IMPORTED_MODULE_2__["FileEditComponent"]; });






/***/ }),

/***/ "./src/app/files/index/index.component.html":
/*!**************************************************!*\
  !*** ./src/app/files/index/index.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  index works!\r\n</p>\r\n\r\n\r\n\r\n\r\nTitle\r\n\r\n\r\n\r\nUploaded date\r\n\r\n\r\n\r\nCreated date\r\n\r\nCreated by\r\n\r\nEDIT \r\n\r\n\r\n\r\n<div class=\"table-responsive-lg\">\r\n\r\n  <table class=\"table table-striped table-hover table-sm small\">\r\n\r\n    <thead class=\"thead-dark\">\r\n      <tr>\r\n        <th>Ref</th>\r\n        <th>File</th>\r\n        <th>Title</th>\r\n        <th>Type</th>       \r\n        <th >Uploaded by</th>\r\n        <th >Uploaded date</th>\r\n        <th >Created by</th>\r\n        <th >Created date</th>\r\n        <th >Used by</th>\r\n        <th >Status</th>\r\n        <th>Actions</th>\r\n      </tr>\r\n    </thead>\r\n\r\n    <tbody>\r\n      <tr>\r\n        <td>ISDN-2345/4321</td>\r\n        <td>Name of the uploaded</td>\r\n        <td>uploaded file title</td>\r\n        <td>Audio - MP3</td>     \r\n        <td>Mrs Mills</td>\r\n        <td>24 Feb 1961</td>\r\n        <td>Stan</td>\r\n        <td>1967</td>\r\n        <td>Sony, Billy dont be one, Stan Getz, Mission to Mars...</td>\r\n        <th>Complete</th>\r\n        <td><button  [routerLink]=\"['file-edit', 123]\">Edit</button>   \r\n          <a mat-stroked-button  [routerLink]=\"['file-detail', 123]\">view</a>\r\n        </td>\r\n      </tr>\r\n\r\n      <tr>\r\n          <td>ISDN-2345/4321</td>\r\n          <td>Name of the uploaded</td>\r\n          <td>uploaded file title</td>\r\n          <td>Audio - MP3</td>     \r\n          <td>Mrs Mills</td>\r\n          <td>24 Feb 1961</td>\r\n          <td>Stan</td>\r\n          <td>1967</td>\r\n          <td>Sony, Billy dont be one, Stan Getz, Mission to Mars...</td>\r\n          <th>Complete</th>\r\n          <td><button  [routerLink]=\"['file-edit', 124]\">Edit</button>   \r\n            <a mat-stroked-button  [routerLink]=\"['file-detail', 124]\">view</a>\r\n          </td>\r\n        </tr>\r\n   \r\n\r\n      </tbody>  \r\n      </table>  \r\n\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/files/index/index.component.scss":
/*!**************************************************!*\
  !*** ./src/app/files/index/index.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbGVzL2luZGV4L2luZGV4LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/files/index/index.component.ts":
/*!************************************************!*\
  !*** ./src/app/files/index/index.component.ts ***!
  \************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/files/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/files/index/index.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ })

}]);
//# sourceMappingURL=files-files-module.js.map