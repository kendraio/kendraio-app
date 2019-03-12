(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~claims-claims-module~music-recordings-music-recordings-module~music-releases-music-releases-~1b7a70b3"],{

/***/ "./src/app/_shared/animations/animations.ts":
/*!**************************************************!*\
  !*** ./src/app/_shared/animations/animations.ts ***!
  \**************************************************/
/*! exports provided: Animations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animations", function() { return Animations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
// import { style, animate, transition, state, trigger, AnimationEntryMetadata, keyframes } from '@angular/core';

var Animations = /** @class */ (function () {
    function Animations() {
    }
    Animations.pageAni = [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('enterLeaveInOut-2', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), { optional: true }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('200ms', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.6s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scale(1)', offset: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: .4, transform: 'scale(1.01)', offset: 0.3 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(1)', offset: 1.0 }),
                    ]))
                ]), { optional: true }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('300ms', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.6s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(.5)', offset: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: .5, transform: 'scale(0)', offset: 0.3 }),
                    ]))
                ]), { optional: true })
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('enterLeaveInOut', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), { optional: true }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('100ms', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.6s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scale(.9)', offset: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: .5, transform: 'scale(1.1)', offset: 0.3 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(1)', offset: 1.0 }),
                    ]))
                ]), { optional: true }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('300ms', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.6s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(.5)', offset: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: .5, transform: 'scale(0)', offset: 0.3 }),
                    ]))
                ]), { optional: true })
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('enterLeaveUpDwn2', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), { optional: true }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('100ms', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.6s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(-1%)', offset: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: .5, transform: 'translateY(15px)', offset: 0.3 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
                    ]))
                ]), { optional: true }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('300ms', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.6s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: .5, transform: 'translateY(15px)', offset: 0.3 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(-5%)', offset: 1.0 }),
                    ]))
                ]), { optional: true })
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('enterLeaveUpDwn', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), { optional: true }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('300ms', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.6s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(-5%)', offset: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
                    ]))
                ]), { optional: true }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('300ms', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.6s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(-75%)', offset: 1.0 }),
                    ]))
                ]), { optional: true })
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('enterAnimateUpDwn', [
            // state('true',
            //     style({ opacity: 1, transform: 'translate(0, 10px)' })
            // ),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translate(0, -10px)' })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(// down
            '* => *', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2s cubic-bezier(0.175, 0.885, 0.32, 1.275)'),
            ]),
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('enterAnimateInOut', [
            // state('true',
            //     style({ opacity: 1, transform: 'translate(0, 10px)' })
            // ),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scale(.3)' })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(// down
            '* => *', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s cubic-bezier(0.175, 0.885, 0.32, 1.275)'),
            ]),
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('validationMsg', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translate(0, 20px)' })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(// down
            '* => *', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s cubic-bezier(0.175, 0.885, 0.32, 1.275)'),
            ]),
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('enterAnimate', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translate(200px , 0)' })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translate(200px , 0)' })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in'),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('800ms 0.3s ease-out'),
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('isSubmitted', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0.4)' })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('1 => 0', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)')
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1.5s cubic-bezier(0.215, 0.610, 0.355, 2.000)'))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('zoomInOut', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('small', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0)', opacity: 1 })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('large', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0.95)', opacity: 0 })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('1 => 0', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1.5s cubic-bezier(0.215, 0.610, 0.355, 2.000)')
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1.5s cubic-bezier(0.215, 0.610, 0.355, 1.600)'))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('dropInOut', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('small', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'scale(0)',
            })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('large', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'scale(1.5)',
            })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('small => large', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1.5s cubic-bezier(0.215, 0.610, 0.355, 2.000)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
                //  style({opacity: 1, transform: 'translateY(35px)',  offset: 0.5}),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0)', offset: 1.0 })
            ]))),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('large => small', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1.5s cubic-bezier(0.215, 0.610, 0.355, 2.000)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                //   style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
                //  style({opacity: 1, transform: 'translateY(35px)',  offset: 0.5}),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(0)', offset: 1.0 })
            ]))),
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('dropInOut2', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('small', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'scale(1)',
            })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('large', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'scale(1.5)',
            })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('small <=> large', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1.5s cubic-bezier(0.215, 0.610, 0.355, 2.000)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(75%)', offset: 0 }),
                //   style({opacity: 1, transform: 'translateY(-35px)',  offset: 0.5}),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0)', offset: 1.0 })
            ]))),
        ])
    ];
    return Animations;
}());



/***/ }),

/***/ "./src/app/_shared/animations/index.ts":
/*!*********************************************!*\
  !*** ./src/app/_shared/animations/index.ts ***!
  \*********************************************/
/*! exports provided: Animations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animations */ "./src/app/_shared/animations/animations.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Animations", function() { return _animations__WEBPACK_IMPORTED_MODULE_0__["Animations"]; });


//export * from './slide-in-out.animation';


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
/* harmony import */ var _ng_dynamic_forms_ui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-dynamic-forms/ui-material */ "./node_modules/@ng-dynamic-forms/ui-material/fesm5/ui-material.js");
/* harmony import */ var _claims_claims_edit_claims_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../claims/claims-edit/claims-edit.component */ "./src/app/claims/claims-edit/claims-edit.component.ts");













// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ClaimsEditSendComponent } from '../claims/claims-edit-send/claims-edit-send.component';
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
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__["AgGridModule"].withComponents([
                    _shared_components__WEBPACK_IMPORTED_MODULE_7__["MatInputComponent"],
                    _shared_components__WEBPACK_IMPORTED_MODULE_7__["MatButtonComponent"]
                ]),
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
                _ng_dynamic_forms_ui_material__WEBPACK_IMPORTED_MODULE_11__["DynamicFormsMaterialUIModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ],
            declarations: [
                _shared_components__WEBPACK_IMPORTED_MODULE_7__["MatInputComponent"],
                _shared_components__WEBPACK_IMPORTED_MODULE_7__["MatButtonComponent"],
                src_app_claims_send_claims_send_claims_component__WEBPACK_IMPORTED_MODULE_9__["SendClaimsComponent"],
                _claims_claims_edit_claims_edit_component__WEBPACK_IMPORTED_MODULE_12__["ClaimsEditComponent"],
            ],
            exports: [
                //  matComponents.MatInputComponent,
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                src_app_claims_send_claims_send_claims_component__WEBPACK_IMPORTED_MODULE_9__["SendClaimsComponent"],
                _ng_dynamic_forms_ui_material__WEBPACK_IMPORTED_MODULE_11__["DynamicFormsMaterialUIModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
                _claims_claims_edit_claims_edit_component__WEBPACK_IMPORTED_MODULE_12__["ClaimsEditComponent"],
                // ClaimsEditSendComponent,
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
            ],
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["LowerCasePipe"],
            ],
            entryComponents: [
                src_app_claims_send_claims_send_claims_component__WEBPACK_IMPORTED_MODULE_9__["SendClaimsComponent"],
                _claims_claims_edit_claims_edit_component__WEBPACK_IMPORTED_MODULE_12__["ClaimsEditComponent"],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/claims/_shared/forms/formModel.ts":
/*!***************************************************!*\
  !*** ./src/app/claims/_shared/forms/formModel.ts ***!
  \***************************************************/
/*! exports provided: MY_CLAIMS_FORM_MODEL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_CLAIMS_FORM_MODEL", function() { return MY_CLAIMS_FORM_MODEL; });
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm5/core.js");

var MY_CLAIMS_FORM_MODEL = [
    // new DynamicFormGroupModel({
    //     id: 'claim',
    //     legend: 'Form Group Level 1',
    //     group: [
    //     new DynamicInputModel  ({
    //         id: 'details', 
    //         hidden: true
    //     })
    // ]
    // }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicTextAreaModel"]({
        id: 'comments',
        placeholder: 'Notes and Comments',
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicTextAreaModel"]({
        id: 'corroborators',
        placeholder: 'Names of Corroborators'
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicFormGroupModel"]({
        id: 'signoff',
        group: [
            new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicSwitchModel"]({
                id: 'reminder',
                offLabel: 'Send me a receipt',
                onLabel: 'Send me a receipt',
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

/***/ "./src/app/claims/claims-edit/claims-edit.component.html":
/*!***************************************************************!*\
  !*** ./src/app/claims/claims-edit/claims-edit.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<section\r\nfxLayout=\"row wrap\"\r\nfxLayoutAlign=\"start start\" \r\nfxLayoutGap=\"20px\"\r\n>\r\n\r\n<mat-card>\r\n\r\n  <mat-card-header>\r\n    <b>Claim Details</b>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n\r\n\r\n    <mat-list>\r\n        <mat-list-item>Name:   {{data.name}} </mat-list-item>\r\n        <mat-list-item>Artist:   {{data.artist}} </mat-list-item>\r\n        <mat-list-item>Collective:  {{data.collective}} </mat-list-item>\r\n        <mat-list-item>Collective:  {{data.owner}} </mat-list-item>\r\n       </mat-list>\r\n\r\n  </mat-card-content>\r\n\r\n\r\n</mat-card>\r\n\r\n\r\n    <mat-card>\r\n        <mat-card-header>\r\n            <b>Extra Information</b>\r\n            <button mat-button ><mat-icon>file_copy</mat-icon> copy from previous</button>\r\n          </mat-card-header>\r\n  \r\n      <form [formGroup]=\"formGroup\">\r\n\r\n        <dynamic-material-form \r\n                      [group]=\"formGroup\" [layout]=\"formLayout\" [model]=\"formModel\" (blur)=\"onBlur($event)\"\r\n                      (change)=\"onChange($event)\" (focus)=\"onFocus($event)\" (matEvent)=\"onMatEvent($event)\" \r\n                 \r\n                           ></dynamic-material-form>\r\n  \r\n      </form>\r\n    </mat-card>\r\n  \r\n    <div mat-dialog-actions class=\"align-right\">\r\n      <button mat-button mat-dialog-close=\"Edit Cancelled\">Cancel</button>\r\n      <button mat-raised-button mat-button [mat-dialog-close]=\"data.Name\" cdkFocusInitial [disabled]=\"formGroup.invalid\">Send</button>\r\n    </div>\r\n  \r\n  </section>\r\n\r\n\r\n  \r\n\r\n"

/***/ }),

/***/ "./src/app/claims/claims-edit/claims-edit.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/claims/claims-edit/claims-edit.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsYWltcy9jbGFpbXMtZWRpdC9jbGFpbXMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/claims/claims-edit/claims-edit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/claims/claims-edit/claims-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: ClaimsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimsEditComponent", function() { return ClaimsEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm5/core.js");
/* harmony import */ var _shared_forms_formModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_shared/forms/formModel */ "./src/app/claims/_shared/forms/formModel.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _form_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form.layout */ "./src/app/claims/claims-edit/form.layout.ts");






var ClaimsEditComponent = /** @class */ (function () {
    function ClaimsEditComponent(data, formService) {
        this.data = data;
        this.formService = formService;
        this.formModel = _shared_forms_formModel__WEBPACK_IMPORTED_MODULE_3__["MY_CLAIMS_FORM_MODEL"];
        this.formLayout = _form_layout__WEBPACK_IMPORTED_MODULE_5__["CLAIMS_FORM_LAYOUT"];
    }
    ClaimsEditComponent.prototype.ngOnInit = function () {
        this.formGroup = this.formService.createFormGroup(this.formModel);
        this.formGroup.patchValue(this.data);
    };
    ClaimsEditComponent.prototype.onBlur = function ($event) {
        console.log("Material blur event on: " + $event.model.id + ": ", $event);
    };
    ClaimsEditComponent.prototype.onChange = function ($event) {
        console.log("Material change event on: " + $event.model.id + ": ", $event);
    };
    ClaimsEditComponent.prototype.onFocus = function ($event) {
        console.log("Material focus event on: " + $event.model.id + ": ", $event);
    };
    ClaimsEditComponent.prototype.onMatEvent = function ($event) {
        console.log("Material " + $event.type + " event on: " + $event.model.id + ": ", $event);
    };
    ClaimsEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-claims-edit',
            template: __webpack_require__(/*! ./claims-edit.component.html */ "./src/app/claims/claims-edit/claims-edit.component.html"),
            styles: [__webpack_require__(/*! ./claims-edit.component.scss */ "./src/app/claims/claims-edit/claims-edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_2__["DynamicFormService"]])
    ], ClaimsEditComponent);
    return ClaimsEditComponent;
}());



/***/ }),

/***/ "./src/app/claims/claims-edit/form.layout.ts":
/*!***************************************************!*\
  !*** ./src/app/claims/claims-edit/form.layout.ts ***!
  \***************************************************/
/*! exports provided: CLAIMS_FORM_LAYOUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLAIMS_FORM_LAYOUT", function() { return CLAIMS_FORM_LAYOUT; });
var CLAIMS_FORM_LAYOUT = {
    'stuff': {
        element: {
            host: 'material-form-group'
        }
    }
};


/***/ }),

/***/ "./src/app/claims/send-claims/send-claims.component.html":
/*!***************************************************************!*\
  !*** ./src/app/claims/send-claims/send-claims.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <pre> {{ data | json }}</pre>  -->\n\n\n<h1>Claim Sheet</h1>\nPlease be sure all info is correct before posting to your Claims Folder.\n\n<section *ngIf=\"!nextStep\" mat-dialog-content >\n  <div class=\"mt-4\" fxLayout=\"row wrap\" fxLayoutGap=\"20px\" fxLayoutAlign=\"start stretch\" mat-dialog-content >\n\n    <mat-card *ngFor=\"let item of data; let i = index;\">\n      <mat-card-header>\n\n        <mat-card-title>Claim {{i+1}} / {{data.length}}</mat-card-title>\n        <mat-card-subtitle>{{item.name}}</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        Artist: {{item.artist}}<br>\n        Collective: {{item.collective}}<br>\n        Owner: {{item.owner}}<br>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-mini-fab matTooltip=\"Remove from Claim\" (click)=\"removeClaim(i)\">\n          <mat-icon>delete</mat-icon>\n        </button>\n        <button mat-mini-fab matTooltip=\"Edit\" (click)=\"removeClaim(i)\">\n          <mat-icon>edit</mat-icon>\n        </button>\n      </mat-card-actions>\n    </mat-card>\n\n  </div>\n\n  <div mat-dialog-actions>\n    <button mat-button mat-dialog-close=\"Edit Cancelled\">Cancel</button>\n    <button mat-button mat-raised-button (click)=\"nextClaimStep()\">Send to my Claims Organiser</button>\n  </div>\n\n</section>\n\n<section *ngIf=\"nextStep\" class=\"mt-4\"  mat-dialog-content>\n\n  The folowing claims have been sent to your Claims Folder.\n\n  <div [@enterLeaveInOut-2]=\"data\" fxLayout=\"row wrap\" fxLayoutGap=\"20px\" fxLayoutAlign=\"start stretch\">\n    <mat-card *ngFor=\"let item of data; let i = index;\">\n      <mat-icon mat-list-icon>library_music</mat-icon>\n      <h6 mat-line>{{item.name}}</h6>\n      <p mat-line> {{item.artist}} </p>\n    </mat-card>\n  </div>\n\n\n\n  <div mat-dialog-actions>\n    <button mat-button mat-dialog-close=\"Edit Cancelled\">Close</button>\n    <button mat-button mat-raised-button mat-dialog-close=\"next\" (click)=\"nextClaimStep3()\">View my Claims\n      Organiser</button>\n  </div>\n\n</section>"

/***/ }),

/***/ "./src/app/claims/send-claims/send-claims.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/claims/send-claims/send-claims.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  padding: 30px;\n  margin-bottom: 20px; }\n\n.mat-dialog-actions {\n  place-content: flex-end; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xhaW1zL3NlbmQtY2xhaW1zL0M6XFxVc2Vyc1xcVGltXFxrZW5kcmFpby1hcHAvc3JjXFxhcHBcXGNsYWltc1xcc2VuZC1jbGFpbXNcXHNlbmQtY2xhaW1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVcsY0FBWTtFQUFFLG9CQUFtQixFQUFFOztBQUM5QztFQUNJLHdCQUF1QixFQUMxQiIsImZpbGUiOiJzcmMvYXBwL2NsYWltcy9zZW5kLWNsYWltcy9zZW5kLWNsYWltcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHsgcGFkZGluZzozMHB4OyBtYXJnaW4tYm90dG9tOiAyMHB4fVxyXG4ubWF0LWRpYWxvZy1hY3Rpb25zIHtcclxuICAgIHBsYWNlLWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_shared/animations */ "./src/app/_shared/animations/index.ts");





var SendClaimsComponent = /** @class */ (function () {
    function SendClaimsComponent(data, router) {
        this.data = data;
        this.router = router;
        this.nextStep = false;
    }
    SendClaimsComponent.prototype.ngOnInit = function () {
    };
    SendClaimsComponent.prototype.nextClaimStep = function () {
        console.log(this.data);
        this.nextStep = true;
    };
    SendClaimsComponent.prototype.nextClaimStep3 = function () {
        localStorage.setItem('myClaims', JSON.stringify(this.data));
        this.router.navigate(['/claims']);
        // sidenav.open();
    };
    SendClaimsComponent.prototype.removeClaim = function (i) {
        this.data.splice(i, 1);
    };
    SendClaimsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-send-claims',
            template: __webpack_require__(/*! ./send-claims.component.html */ "./src/app/claims/send-claims/send-claims.component.html"),
            animations: [src_app_shared_animations__WEBPACK_IMPORTED_MODULE_4__["Animations"].pageAni],
            styles: [__webpack_require__(/*! ./send-claims.component.scss */ "./src/app/claims/send-claims/send-claims.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SendClaimsComponent);
    return SendClaimsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~claims-claims-module~music-recordings-music-recordings-module~music-releases-music-releases-~1b7a70b3.js.map