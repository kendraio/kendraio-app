(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~claims-claims-module~music-recordings-music-recordings-module~music-releases-music-releases-~1b7a70b3"],{

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
/* harmony import */ var src_app_claims_send_claims_send_claims_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/claims/send-claims/send-claims.component */ "./src/app/claims/send-claims/send-claims.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");











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
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__["AgGridModule"].withComponents([
                    _shared_components__WEBPACK_IMPORTED_MODULE_7__["MatInputComponent"],
                    _shared_components__WEBPACK_IMPORTED_MODULE_7__["MatButtonComponent"]
                ]),
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexModule"]
            ],
            declarations: [
                _shared_components__WEBPACK_IMPORTED_MODULE_7__["MatInputComponent"],
                _shared_components__WEBPACK_IMPORTED_MODULE_7__["MatButtonComponent"],
                src_app_claims_send_claims_send_claims_component__WEBPACK_IMPORTED_MODULE_9__["SendClaimsComponent"]
            ],
            exports: [
                //  matComponents.MatInputComponent,
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                src_app_claims_send_claims_send_claims_component__WEBPACK_IMPORTED_MODULE_9__["SendClaimsComponent"]
            ],
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["LowerCasePipe"],
            ],
            entryComponents: [
                src_app_claims_send_claims_send_claims_component__WEBPACK_IMPORTED_MODULE_9__["SendClaimsComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/claims/send-claims/send-claims.component.html":
/*!***************************************************************!*\
  !*** ./src/app/claims/send-claims/send-claims.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <pre> {{ data | json }}</pre>  -->\n\n\n<h1>Claim Sheet</h1>\nLorem ipsum dolor sit amet consectetur adipisicing elit. Placeat consectetur incidunt facere esse vero minus, voluptates voluptatem autem at ratione non! Alias hic temporibus rerum nisi odit quisquam dolorum fugiat!\n\n<section *ngIf=\"!nextStep\">\n<div class=\"mt-4\" fxLayout=\"row wrap\" fxLayoutGap=\"20px\"   fxLayoutAlign=\"start stretch\">\n\n<mat-card *ngFor=\"let item of data; let i = index;\"  >\n    <mat-card-header>\n      \n        <mat-card-title>Claim {{i+1}} / {{data.length}}</mat-card-title>\n        <mat-card-subtitle>{{item.name}}</mat-card-subtitle>\n      </mat-card-header>\n\n    <mat-card-content>\n\n Artist: {{item.artist}}<br>\n Collective: {{item.collective}}<br>\n Owner: {{item.owner}}<br>\n</mat-card-content>\n\n      <mat-card-actions>\n        <button mat-mini-fab matTooltip=\"Remove from Claim\" (click)=\"removeClaim(i)\"><mat-icon>delete</mat-icon></button> \n        <button mat-mini-fab matTooltip=\"Edit\" (click)=\"removeClaim(i)\"><mat-icon>edit</mat-icon></button>\n      </mat-card-actions>\n\n</mat-card>\n\n</div>\n\n<div mat-dialog-actions>\n  <button mat-button mat-dialog-close=\"Edit Cancelled\">Cancel</button>\n  <button mat-button mat-raised-button (click)=\"nextClaimStep()\">Send to my Claims Organiser</button>\n</div>\n\n</section>\n\n<section *ngIf=\"nextStep\" class=\"mt-4\" fxLayout=\"row wrap\" fxLayoutGap=\"20px\"   fxLayoutAlign=\"start stretch\">\n\nThe folowing claims have been sent to your Claims Folder.\n\n{{data | json}}\n\n<div mat-dialog-actions>\n    <button mat-button mat-dialog-close=\"Edit Cancelled\">Close</button>\n    <button mat-button mat-raised-button (click)=\"nextClaimStep3()\">View my Claims Organiser</button>\n  </div>\n\n  </section>  "

/***/ }),

/***/ "./src/app/claims/send-claims/send-claims.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/claims/send-claims/send-claims.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  padding: 30px;\n  margin-bottom: 20px; }\n\n.mat-dialog-actions {\n  place-content: flex-end;\n  padding: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xhaW1zL3NlbmQtY2xhaW1zL0M6XFxVc2Vyc1xcVGltXFxrZW5kcmFpby1hcHAvc3JjXFxhcHBcXGNsYWltc1xcc2VuZC1jbGFpbXNcXHNlbmQtY2xhaW1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVcsY0FBWTtFQUFFLG9CQUFtQixFQUFFOztBQUM5QztFQUNJLHdCQUF1QjtFQUN2QixlQUFhLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY2xhaW1zL3NlbmQtY2xhaW1zL3NlbmQtY2xhaW1zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQgeyBwYWRkaW5nOjMwcHg7IG1hcmdpbi1ib3R0b206IDIwcHh9XHJcbi5tYXQtZGlhbG9nLWFjdGlvbnMge1xyXG4gICAgcGxhY2UtY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBwYWRkaW5nOjEwMHB4O1xyXG59XHJcbiJdfQ== */"

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
        this.nextStep = false;
    }
    SendClaimsComponent.prototype.ngOnInit = function () {
    };
    SendClaimsComponent.prototype.nextClaimStep = function () {
        console.log(this.data);
        this.nextStep = true;
    };
    SendClaimsComponent.prototype.nextClaimStep3 = function () {
        // todo
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
//# sourceMappingURL=default~claims-claims-module~music-recordings-music-recordings-module~music-releases-music-releases-~1b7a70b3.js.map