(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"],{

/***/ "./src/app/bloomen/_shared/bloomen-users.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/bloomen/_shared/bloomen-users.service.ts ***!
  \**********************************************************/
/*! exports provided: BloomenUsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BloomenUsersService", function() { return BloomenUsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var BloomenUsersService = /** @class */ (function () {
    function BloomenUsersService(http) {
        this.http = http;
    }
    // {
    //   "username": "string",
    //   "password": "string",
    //   "email": "string",
    //   "invitation": "string"
    // }
    BloomenUsersService.prototype.create = function (bloomenUser) {
        bloomenUser = this.userMapper(bloomenUser);
        localStorage.setItem('currentuser', JSON.stringify(bloomenUser));
        //  return this.http.post<IUser>(`${environment.appApi.baseUrl}/accounts/register`, contact)
        return this.http.post('https://bloomen.herokuapp.com/auth/register', bloomenUser);
    };
    BloomenUsersService.prototype.userMapper = function (user) {
        var mappedUser = {
            'username': user.logonDetails.username,
            'password': user.logonDetails.password,
            'email': user.accountDetails.email,
            'invitation': 'tim@test.com'
        };
        return mappedUser;
    };
    BloomenUsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BloomenUsersService);
    return BloomenUsersService;
}());



/***/ }),

/***/ "./src/app/bloomen/_shared/form-models/login-form.layout.ts":
/*!******************************************************************!*\
  !*** ./src/app/bloomen/_shared/form-models/login-form.layout.ts ***!
  \******************************************************************/
/*! exports provided: LOGIN_FORM_LAYOUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FORM_LAYOUT", function() { return LOGIN_FORM_LAYOUT; });
var LOGIN_FORM_LAYOUT = {
    'passwordSetterGroup': {
        element: {
            control: 'form-container mat-form-field-flex',
        },
        grid: {}
    },
    'password': {
        element: {
            host: ''
        }
    }
};


/***/ }),

/***/ "./src/app/bloomen/_shared/form-models/login-form.modal.ts":
/*!*****************************************************************!*\
  !*** ./src/app/bloomen/_shared/form-models/login-form.modal.ts ***!
  \*****************************************************************/
/*! exports provided: LOGIN_FORM_MODEL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FORM_MODEL", function() { return LOGIN_FORM_MODEL; });
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm5/core.js");

// import { PasswordStrength } from 'src/app/_shared/directives/passwordValidation';
// import { PasswordStrength } from 'src/app/_shared/directives/passwordValidation';
//  export const passwordStrength: string = '222'
//    let passwordField: DynamicInputModel;
//  this.passwordField =  new DynamicInputModel({
//     id: 'password',
//     maxLength: 25,
//     minLength: 8,   
//     placeholder: 'Password',
//     validators: {
//         required: null,                
//         PasswordStrength2: null
//     },
//     errorMessages: {
//         required: '{{ id }} baddy',
//         PasswordStrength2: '{{ id }} is too weak'
//     }
// });
// this.confirmPasswordField =   new DynamicInputModel({
//     id: 'confirmPassword',
//     maxLength: 50,
//     placeholder: 'Confirm Password',
//     validators: {
//         required: null
//     },
//     errorMessages: {
//         required: 'Field is required'
//     },
//     additional: {
//         color: 'accent'
//     }
// });
//     export class BillyBongo  {
//         dangerousUrl: any;
//         trustedUrl: any;
//     constructor(private sanitizer: DomSanitizer) {
//         // javascript: URLs are dangerous if attacker controlled.
//         // Angular sanitizes them in data binding, but you can
//         // explicitly tell Angular to trust this value:
//         this.dangerousUrl = 'javascript:alert("Hi there")';
//         this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
// const boo =  '<mat-icon>visibility</mat-icon>';
//     }
//     export const this.trustedUrl;
// }
var LOGIN_FORM_MODEL = [
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'username',
        label: 'Email/Username',
        maxLength: 25,
        minLength: 5,
        placeholder: 'Enter Email/Username',
        suffix: 'booboo',
        validators: {
            required: null,
        },
        errorMessages: {
            required: '{{ label }} is required',
        }
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicFormGroupModel"]({
        id: 'passwordSetterGroup',
        legend: 'Set your password',
        group: [
            new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
                id: 'password',
                maxLength: 25,
                minLength: 8,
                placeholder: 'Password',
                validators: {
                    required: null,
                    PasswordStrength2: null
                },
                errorMessages: {
                    required: '{{ id }} is required',
                    PasswordStrong: 'Your {{ placeholder }} {{PasswordStrength2.PasswordStrong}} is too weak {{msg}}'
                }
            }),
            new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
                id: 'confirmPassword',
                maxLength: 50,
                placeholder: 'Confirm Password',
                disabled: true,
                validators: {
                    required: null
                },
                errorMessages: {
                    required: 'Field is required'
                },
                additional: {
                    color: 'accent'
                }
            })
        ],
        validators: {
            matchPasswords: null,
        },
        errorMessages: {
            noMatchingPasswords: 'Passwords do not match',
        }
    })
];


/***/ }),

/***/ "./src/app/bloomen/users/_shared/account-form.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/bloomen/users/_shared/account-form.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- [formGroup]=\"userForm\" -->\r\n<form (submit)=\"submit()\" novalidate autocomplete=\"on\" \r\n[formGroup]=\"userForm\">\r\n\r\n\r\n  <section>\r\n\r\n\r\n      <section class=\"form-container\" fxLayout=\"row\"  fxLayoutGap=\"40px\" fxFlexFill>\r\n      <mat-form-field appearance=\"standard\">\r\n        <mat-label>First Names</mat-label>\r\n        <input matInput placeholder=\"Enter First Names\" formControlName=\"firstname\">\r\n        <mat-error *ngIf=\"firstname.invalid\">{{getErrorMessage()}}</mat-error>\r\n      </mat-form-field>\r\n\r\n\r\n\r\n      <mat-form-field appearance=\"standard\">\r\n        <mat-label>Last Name</mat-label>\r\n        <input matInput placeholder=\"Enter Last Name\" [formControl]=\"lastname\" >\r\n        <mat-error *ngIf=\"lastname.invalid\">{{getErrorMessage()}}</mat-error>\r\n      </mat-form-field>\r\n    </section>\r\n\r\n\r\n\r\n\r\n    <section  class=\"form-container\" fxLayout=\"row\"  fxLayoutGap=\"40px\" fxFlexFill>\r\n\r\n      <mat-form-field appearance=\"standard\">\r\n        <mat-label>Email</mat-label>\r\n        <!-- (keyup)=\"onEmailChange()\"  -->\r\n        <input matInput type=\"email\" placeholder=\"Enter Email\" email\r\n        [ngClass]=\"{'isLoading' : isLoading}\"\r\n        [formControl]=\"email\">\r\n        <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\r\n        <mat-hint align=\"end\" *ngIf=\"isLoading\">Checking Email.... please wait</mat-hint>\r\n      </mat-form-field>\r\n\r\n\r\n      <mat-form-field appearance=\"standard\">\r\n        <mat-label>Telephone</mat-label>\r\n        <input matInput placeholder=\"Enter Telephone/Mobile\" [formControl]=\"telephone\">\r\n      </mat-form-field>\r\n\r\n    </section>\r\n\r\n    | {{ userForm.valid | json }}\r\n\r\n  </section>\r\n\r\n  <div>\r\n    <div class=\"card\">\r\n      <div class=\"card-body small\">\r\n        <i class=\"fa fa-exclamation-triangle \" aria-hidden=\"true\" style=\"color:orange\"> </i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <!-- <div class=\"form-group clear\">\r\n\r\n\r\n\r\n    <button type=\"submit\" [disabled]=\"!userForm.valid\" class=\"button button--action button--lg float-right\">\r\n      Submit\r\n    </button>\r\n    <div *ngIf=\"(iAccept.value === '' || iAccept.value === false) && userForm.valid\" class=\"float-right small \"\r\n      style=\"clear: both\">\r\n      <p><i class=\"fa fa-exclamation-triangle \" aria-hidden=\"true\" style=\"color:orange\"> </i> You must accept the\r\n        <b>Personal Data Statement</b> to continue</p>\r\n    </div>\r\n \r\n\r\n\r\n  </div> -->\r\n\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/bloomen/users/_shared/account-form.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/bloomen/users/_shared/account-form.component.ts ***!
  \*****************************************************************/
/*! exports provided: AccountFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountFormComponent", function() { return AccountFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





// import { environment } from 'environments/environment';
var AccountFormComponent = /** @class */ (function () {
    function AccountFormComponent(route, router, _fb) {
        this.route = route;
        this.router = router;
        this._fb = _fb;
        this.formData = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        // @Output()
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        // @HostBinding('@routing')
        // routing;
        this.display = 'block';
        this.showNamer = false;
        this.isLoading = false;
        this.isUnique = false;
        this.msg = '';
        // EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.TEL_REGEX = /^[\d\s]+$/i;
        this.createForm();
    }
    // updateOn: 'blur' USE THIS TODO:
    AccountFormComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('pattern') ? 'Not a valid email' :
                '';
    };
    AccountFormComponent.prototype.createForm = function () {
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('test@test.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]);
        this.firstname = this._fb.control('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)
        ]);
        this.lastname = this._fb.control('lastName', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)
        ]);
        this.telephone = this._fb.control('999-999-999', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)
        ]);
        this.userForm = this._fb.group({
            // bloomenRef: this.now,
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            telephone: this.telephone,
        });
    };
    Object.defineProperty(AccountFormComponent.prototype, "address", {
        get: function () {
            return this.userForm.get('address');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountFormComponent.prototype, "iAccept", {
        get: function () {
            return this.userForm.get('iAccept');
        },
        enumerable: true,
        configurable: true
    });
    AccountFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.now = (Math.floor(Math.random() * 9999) + 1).toString(); // Date().toString();
        this.createForm();
        this.emailChanges$ = this.email.valueChanges;
        // this.currentUser$ = this.currentUser;
        this.subTitle = this.route.snapshot.data['subTitle'];
        this.crumb = this.route.snapshot.data['crumbs'];
        this.emailSub = this.emailChanges$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () {
            _this.isUnique = false;
            _this.email.setValidators([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_this.EMAIL_REGEXP)
            ]);
            _this.email.updateValueAndValidity();
            _this.isLoading = true;
            _this.msg = null;
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(400))
            .subscribe(function (val) {
            // this.checkEmailName(this.email.value);
            _this.isLoading = false;
        });
        this.sub = this.userForm.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(600))
            .subscribe(function (newValue) {
            _this.formData.emit(_this.userForm);
        });
    };
    AccountFormComponent.prototype.ngOnChanges = function () {
        console.log('ive changed');
    };
    // checkEmailName(val: string): void {
    //   if (this.email.valid && this.email.value !== this.originalEmail) {
    //     const sub = this.validationService
    //       .checkForDupEmail(val)
    //       .subscribe((res: string) => this.onEmailChecked(res), (error: any) => (this.errorMessage = <any>error));
    //     this.emailSub.add(sub);
    //   }
    // }
    AccountFormComponent.prototype.onEmailChecked = function (res) {
        this.isUnique = !res.result.value;
        if (this.isUnique) {
            this.msg = { msg: null, isValid: true };
        }
        else {
            this.msg = { msg: 'This Email is Already in use! Please try another', isValid: false };
        }
        this.email.setValidators([
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8),
            // isValid(this.isUnique),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.EMAIL_REGEXP)
        ]);
        this.email.updateValueAndValidity();
        this.isLoading = false;
    };
    AccountFormComponent.prototype.onEmailChange = function () { };
    AccountFormComponent.prototype.submit = function () {
        if (this.userForm.valid) {
            this.onSubmit.emit(this.userForm.value);
            // this.originalEmail = this.userForm.value.contactDetails.email;
        }
    };
    AccountFormComponent.prototype.prepareSaveUser = function () {
        var formModel = this.userForm.value;
        var saveUser = {
            id: '',
            fName: '',
            lName: ''
        };
        return saveUser;
    };
    AccountFormComponent.prototype.ngOnDestroy = function () {
        // this.userFormChanges.unsubscribe() // TODO!!
        this.emailSub.unsubscribe();
    };
    AccountFormComponent.prototype.toggleLogin = function () {
        // this.loginService.isDisplayed = !this.loginService.isDisplayed;
        // if (this.loginService.isDisplayed) {
        this.router.navigate([{ outlets: { popup: ['login'] } }]);
        // } else {
        //   this._router.navigate([{ outlets: { popup: null } }]);
        // }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AccountFormComponent.prototype, "pageTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AccountFormComponent.prototype, "mode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AccountFormComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"])
    ], AccountFormComponent.prototype, "formData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"])('style.display'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AccountFormComponent.prototype, "display", void 0);
    AccountFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-account-form',
            template: __webpack_require__(/*! ./account-form.component.html */ "./src/app/bloomen/users/_shared/account-form.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], AccountFormComponent);
    return AccountFormComponent;
}());



/***/ }),

/***/ "./src/app/bloomen/users/_shared/account-login-form.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/bloomen/users/_shared/account-login-form.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoading\">\r\n  <span class=\"sr-only\">Loading...</span>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- [formGroup]=\"loginForm\" -->\r\n<!-- <form (submit)=\"submit()\" novalidate [formGroup]=\"loginForm\">\r\n\r\n  <div *ngIf=\"mode != 'edit'\" class=\"form-container\" fxLayout=\"row\" fxLayoutGap=\"40px\" fxFlexFill>\r\n\r\n    <mat-form-field appearance=\"standard\">\r\n      <mat-label>Email/Username</mat-label>\r\n      <input matInput placeholder=\"Enter Email/Username\" autofocus [readonly]=\"mode === 'create'\" value=\"{{email}}\"\r\n        formControlName=\"username\">\r\n    </mat-form-field>\r\n\r\n  </div>\r\n\r\n\r\n\r\n  <section class=\"form-container\" fxLayout=\"row\" fxLayoutGap=\"40px\" fxFlexFill>\r\n\r\n    <mat-form-field appearance=\"standard\" *ngIf=\"mode === 'edit'\">\r\n      <mat-label>Current Password</mat-label>\r\n      <input matInput placeholder=\"Enter current password\" [type]=\"hide ? 'password' : 'text'\">\r\n      <mat-icon (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field appearance=\"standard\">\r\n      <mat-label>Password</mat-label>\r\n      <input formControlName=\"password\" matInput placeholder=\"Enter new password\"\r\n        [type]=\"hidePassword ? 'password' : 'text'\">\r\n      <mat-icon matSuffix (click)=\"hidePassword = !hidePassword\">{{hidePassword ? 'visibility_off' : 'visibility'}}\r\n\r\n      </mat-icon>\r\n\r\n      <mat-error *ngIf=\"password.invalid\">Password is too weak</mat-error>\r\n\r\n    </mat-form-field>\r\n\r\n\r\n    <mat-form-field appearance=\"standard\">\r\n      <mat-label>Confirm Password</mat-label>\r\n      <input formControlName=\"confirmPassword\" matInput placeholder=\"Enter your password again\"\r\n        [type]=\"hidePassword ? 'password' : 'text'\">\r\n      <mat-icon matSuffix (click)=\"hidePassword = !hidePassword\">{{hidePassword ? 'visibility_off' : 'visibility'}}\r\n      </mat-icon>\r\n      <mat-error *ngIf=\"confirmPassword.invalid\">oops</mat-error>\r\n    </mat-form-field>\r\n\r\n  </section>\r\n  <mat-hint *ngIf=\"password.invalid && password.value.length > 2\">Password must contain at least one upper case\r\n    character, at least one number and at least 8 characters\r\n    in length.</mat-hint>\r\n\r\n \r\n  <div class=\"alert alert-danger\"\r\n    *ngIf=\"confirmPassword.errors?.MatchPassword && password.valid && confirmPassword.value.length > 2\">Passwords do not\r\n    match</div>\r\n\r\n\r\n</form>\r\n<hr> -->\r\n\r\n<form [formGroup]=\"formGroupNew\">\r\n\r\n  <!-- <dynamic-material-form [group]=\"formGroupNew\" [layout]=\"formLayout\" [model]=\"formModel\" (blur)=\"onBlur($event)\"\r\n    (change)=\"onChange($event)\" (focus)=\"onFocus($event)\" (matEvent)=\"onMatEvent($event)\">\r\n\r\n    <ng-template modelId=\"password\" >\r\n      <div class=\"mat-form-field-suffix\">\r\n        <mat-icon matSuffix (click)=\"hidePassword = !hidePassword\">{{hidePassword ? 'visibility_off' : 'visibility'}}\r\n        </mat-icon>\r\n      </div>\r\n    </ng-template>\r\n\r\n\r\n\r\n  </dynamic-material-form> -->\r\n\r\n  <!-- <mat-error *ngIf=\"formGroupNew.get('password').invalid\">Password is too weak</mat-error> -->\r\n\r\n\r\n  <!-- {{formGroupNew.get('passwordSetterGroup.password').value | json}} -->\r\n</form>\r\n\r\n<!-- {{ formGroupNew.value | json }} -->\r\n\r\n<form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\r\n  <formly-form [model]=\"model\" [fields]=\"fields\" [options]=\"options\" [form]=\"form\"></formly-form>\r\n  <button type=\"submit\" class=\"btn btn-primary submit-button\">Submit</button>\r\n</form>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/bloomen/users/_shared/account-login-form.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/bloomen/users/_shared/account-login-form.component.ts ***!
  \***********************************************************************/
/*! exports provided: AccountLoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountLoginFormComponent", function() { return AccountLoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_directives_passwordValidation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_shared/directives/passwordValidation */ "./src/app/_shared/directives/passwordValidation.ts");
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm5/core.js");
/* harmony import */ var _shared_form_models_login_form_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_shared/form-models/login-form.modal */ "./src/app/bloomen/_shared/form-models/login-form.modal.ts");
/* harmony import */ var _shared_form_models_login_form_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../_shared/form-models/login-form.layout */ "./src/app/bloomen/_shared/form-models/login-form.layout.ts");


// import { UserService } from '../../_shared/services';







var AccountLoginFormComponent = /** @class */ (function () {
    function AccountLoginFormComponent(route, router, fb, formService) {
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.formService = formService;
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.formData = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.display = 'block';
        this.showPassword = false;
        this.hidePassword = true;
        // passwordPattern: RegExp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!+_#\-&$£*])(?=.*[0-9]).{8,24}?$/g;
        this.passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{8,30}$/g;
        this.formLayout = _shared_form_models_login_form_layout__WEBPACK_IMPORTED_MODULE_8__["LOGIN_FORM_LAYOUT"];
        this.formModel = _shared_form_models_login_form_modal__WEBPACK_IMPORTED_MODULE_7__["LOGIN_FORM_MODEL"];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.model = {};
        this.options = {};
        this.fields = [{
                key: 'password',
                validators: {
                    fieldMatch: {
                        expression: function (control) {
                            var value = control.value;
                            return value.passwordConfirm === value.password
                                // avoid displaying the message error when values are empty
                                || (!value.passwordConfirm || !value.password);
                        },
                        message: 'Password Not Matching',
                        errorPath: 'passwordConfirm',
                    },
                },
                fieldGroup: [
                    {
                        key: 'password',
                        type: 'input',
                        templateOptions: {
                            type: 'password',
                            label: 'Password',
                            placeholder: "Must be at least 8 characters",
                            required: true,
                            minLength: 8,
                        },
                    },
                    {
                        key: 'passwordConfirm',
                        type: 'input',
                        hideExpression: function (model) { return !model.password; },
                        templateOptions: {
                            type: 'password',
                            label: 'Confirm Password',
                            placeholder: 'Please re-enter your password',
                            required: true,
                        },
                    },
                ],
            }];
        // this.passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!+_#\-&$£*])(?=.*[0-9])$/g
        this.formGroupNew = this.formService.createFormGroup(this.formModel);
    }
    AccountLoginFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginForm = this.fb.group({
            currentPassword: 'Whollop-99',
            password: ['Whollop99', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    src_app_shared_directives_passwordValidation__WEBPACK_IMPORTED_MODULE_5__["PasswordStrength"].strong,
                ]],
            confirmPassword: [{ value: 'Whollop99', disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            username: [{ value: 'Whollop99' }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4)]]
        }, {
            validator: src_app_shared_directives_passwordValidation__WEBPACK_IMPORTED_MODULE_5__["PasswordValidation"].MatchPassword
        });
        this.currentPasswordCtrl = this.loginForm.controls.currentPassword;
        this.passwordCtrl = this.loginForm.controls.password;
        this.confirmPasswordCtrl = this.loginForm.controls.confirmPassword; //TODO is this nessesary?
        if (this.mode === 'create' || this.mode === 'reset') {
            this.currentPasswordCtrl.setValidators(null);
            this.currentPasswordCtrl.updateValueAndValidity();
        }
        this.showPassword = false;
        var passwordStatusChange$ = this.password2.statusChanges;
        passwordStatusChange$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])()).subscribe(function (status) {
            if (status === 'INVALID') {
                _this.confirmPassword2.disable();
            }
            else if (status === 'VALID') {
                _this.confirmPassword2.enable();
            }
        });
        this.sub = this.loginForm.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(600))
            .subscribe(function (newValue) {
            _this.formData.emit(_this.loginForm);
        });
        //        this.sub.add(
        // this.password2.statusChanges.subscribe(
        //   (val) => {
        //     this.confirmPassword2.enable();
        // })
        //        );
        // this.formGroupNew = this.formService.createFormGroup(this.formModel);
        // this.formGroupNew.get('password').setValidators(
        //   PasswordStrength.strong
        // );
    };
    Object.defineProperty(AccountLoginFormComponent.prototype, "password2", {
        get: function () {
            return this.formGroupNew.get('passwordSetterGroup.password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountLoginFormComponent.prototype, "confirmPassword2", {
        get: function () {
            return this.formGroupNew.get('passwordSetterGroup.confirmPassword');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountLoginFormComponent.prototype, "password", {
        get: function () {
            return this.loginForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountLoginFormComponent.prototype, "confirmPassword", {
        get: function () {
            return this.loginForm.get('confirmPassword');
        },
        enumerable: true,
        configurable: true
    });
    AccountLoginFormComponent.prototype.ngOnDestroy = function () {
        //   this.userFormChanges.unsubscribe() //TODO!!!
    };
    AccountLoginFormComponent.prototype.toggleShowPassword = function () {
        this.showPassword = !this.showPassword;
    };
    AccountLoginFormComponent.prototype.submit = function () {
        if (this.loginForm.valid) {
            this.onSubmit.emit(this.loginForm.value);
        }
    };
    AccountLoginFormComponent.prototype.onBlur = function ($event) {
        console.log("Material blur event on: " + $event.model.id + ": ", $event);
    };
    AccountLoginFormComponent.prototype.onChange = function ($event) {
        console.log("Material change event on: " + $event.model.id + ": ", $event);
    };
    AccountLoginFormComponent.prototype.onFocus = function ($event) {
        console.log("Material focus event on: " + $event.model.id + ": ", $event);
    };
    AccountLoginFormComponent.prototype.onMatEvent = function ($event) {
        console.log("Material " + $event.type + " event on: " + $event.model.id + ": ", $event);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AccountLoginFormComponent.prototype, "userId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AccountLoginFormComponent.prototype, "pageTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AccountLoginFormComponent.prototype, "email", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AccountLoginFormComponent.prototype, "mode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AccountLoginFormComponent.prototype, "onSubmit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AccountLoginFormComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"])
    ], AccountLoginFormComponent.prototype, "formData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"])('style.display'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AccountLoginFormComponent.prototype, "display", void 0);
    AccountLoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-account-login-form',
            template: __webpack_require__(/*! ./account-login-form.component.html */ "./src/app/bloomen/users/_shared/account-login-form.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_6__["DynamicFormService"]])
    ], AccountLoginFormComponent);
    return AccountLoginFormComponent;
}());



/***/ }),

/***/ "./src/app/bloomen/users/_shared/index.ts":
/*!************************************************!*\
  !*** ./src/app/bloomen/users/_shared/index.ts ***!
  \************************************************/
/*! exports provided: AccountFormComponent, AccountLoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _account_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-form.component */ "./src/app/bloomen/users/_shared/account-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountFormComponent", function() { return _account_form_component__WEBPACK_IMPORTED_MODULE_0__["AccountFormComponent"]; });

/* harmony import */ var _account_login_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-login-form.component */ "./src/app/bloomen/users/_shared/account-login-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountLoginFormComponent", function() { return _account_login_form_component__WEBPACK_IMPORTED_MODULE_1__["AccountLoginFormComponent"]; });





/***/ }),

/***/ "./src/app/bloomen/users/list/list.component.html":
/*!********************************************************!*\
  !*** ./src/app/bloomen/users/list/list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"mat-typography mb-3\">\r\n  <h2>Current Users</h2>\r\n</div>\r\n\r\nhere we will see a list of current users"

/***/ }),

/***/ "./src/app/bloomen/users/list/list.component.scss":
/*!********************************************************!*\
  !*** ./src/app/bloomen/users/list/list.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb29tZW4vdXNlcnMvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/bloomen/users/list/list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/bloomen/users/list/list.component.ts ***!
  \******************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListComponent = /** @class */ (function () {
    function ListComponent() {
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/bloomen/users/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/bloomen/users/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/bloomen/users/register-user/register-user.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/bloomen/users/register-user/register-user.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-typography mb-3\">\r\n  <h2>Register New User</h2>\r\n</div>\r\n\r\n<mat-progress-bar *ngIf=\"isLoading\" mode=\"buffer\"></mat-progress-bar>\r\n\r\n\r\n<form [formGroup]=\"registerUser\" autocomplete=\"off\">\r\n  <mat-card class=\"mb-3\">\r\n    <mat-card-header>\r\n      <mat-card-title>User Details</mat-card-title>\r\n      <mat-card-subtitle></mat-card-subtitle>\r\n    </mat-card-header>\r\n    <mat-card-content formGroupName=\"accountDetails\">\r\n\r\n      <app-account-form  (formData)=\"eventHandler($event, 'accountDetails')\"></app-account-form>\r\n<!-- [data]=\"value\" -->\r\n    </mat-card-content>\r\n  </mat-card>\r\n\r\n  <mat-card class=\"mb-2\">\r\n    <mat-card-header>\r\n      <mat-card-title>User Login</mat-card-title>\r\n      <mat-card-subtitle></mat-card-subtitle>\r\n    </mat-card-header>\r\n    <mat-card-content formGroupName=\"logonDetails\">\r\n\r\n      <app-account-login-form mode=\"new\" (formData)=\"eventHandler($event, 'logonDetails')\">\r\n<!-- [data]=\"value\"  -->\r\n      </app-account-login-form>\r\n\r\n    </mat-card-content>\r\n  </mat-card>\r\n  <button mat-flat-button color=\"primary\" (click)=\"submit()\" \r\n  [disabled]=\"!allFormsVaild\">Submit</button>\r\n</form>\r\n\r\n{{allFormsVaild}}===!!\r\n<!-- \r\n{{accountDetails.invalid}} || {{logonDetails.invalid}} -->\r\n\r\n<!-- \r\n{{ registerUser.value | json }}\r\n{{ accountDetails.valid}} \r\n-->\r\n"

/***/ }),

/***/ "./src/app/bloomen/users/register-user/register-user.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/bloomen/users/register-user/register-user.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb29tZW4vdXNlcnMvcmVnaXN0ZXItdXNlci9yZWdpc3Rlci11c2VyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/bloomen/users/register-user/register-user.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/bloomen/users/register-user/register-user.component.ts ***!
  \************************************************************************/
/*! exports provided: RegisterUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterUserComponent", function() { return RegisterUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_bloomen_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_shared/bloomen-users.service */ "./src/app/bloomen/_shared/bloomen-users.service.ts");
/* harmony import */ var src_app_shared_services_help_text_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_shared/services/help-text.service */ "./src/app/_shared/services/help-text.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var RegisterUserComponent = /** @class */ (function () {
    function RegisterUserComponent(fb, userService, help, router) {
        this.fb = fb;
        this.userService = userService;
        this.help = help;
        this.router = router;
        this.regFormIsVaild = false;
        this.logonFormIsVaild = false;
        this.allFormsVaild = false;
    }
    RegisterUserComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    Object.defineProperty(RegisterUserComponent.prototype, "accountDetails", {
        get: function () {
            return this.registerUser.get('accountDetails');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterUserComponent.prototype, "logonDetails", {
        get: function () {
            return this.registerUser.get('logonDetails');
        },
        enumerable: true,
        configurable: true
    });
    RegisterUserComponent.prototype.createForm = function () {
        this.registerUser = this.fb.group({
            accountDetails: [''],
            logonDetails: ['']
        });
    };
    RegisterUserComponent.prototype.eventHandler = function (event, form) {
        switch (form) {
            case 'accountDetails':
                this.regFormIsVaild = event.valid && event.dirty;
                break;
            case 'logonDetails':
                this.logonFormIsVaild = event.valid && event.dirty;
                console.log(event);
                break;
            default:
                break;
        }
        this.allFormsVaild = this.logonFormIsVaild && this.regFormIsVaild;
        // setTimeout(() => {
        // if (event.valid) {
        //   this[form].patchValue(event.value);        
        // }
        // this.name.setErrors({ invalid: true, valid: false, badword: true })
        // this[form].setErrors({ invalid: false});
        console.log(this.accountDetails.valid);
        console.log(this.logonDetails.valid);
        console.log(event);
        // });
    };
    RegisterUserComponent.prototype.submit = function () {
        this.isLoading = true;
        this.handleResponse('val');
        // this.userService.create(this.registerUser.value)
        //   .subscribe(val => {
        //     this.handleResponse(val);
        //   },
        //     error => {
        //    //   console.log(error.error.error);
        //   //    alert(error.error.error);
        //       // this.isValid = false;
        //       // this.showForm = true
        //       this.help.askHelp('', 'bloomen.registerFail' );
        //    //    this.msgHeader = 'Oops a Daisy! ' + this.handleError(error.error.errorMessage) + ' Please check and try again';
        //     });
    };
    RegisterUserComponent.prototype.handleResponse = function (str) {
        var _this = this;
        setTimeout(function () {
            _this.help.askHelp('', 'bloomen.registerSuccess');
            _this.isLoading = false;
            _this.router.navigate([{ outlets: { primary: 'bloomen/users', popup: ['messages'] } }]);
            // this.name.setErrors({ invalid: true, valid: false, badword: true })
            // this[form].setErrors({ invalid: false});
        }, 3000);
        //   setTimeout(() => {
        //  this.router.navigate(['bloomen/users', { outlets: { popup: ['messages']} }]);
        //   }, 5000);
        //   setTimeout(() => {
        //   //  this.router.navigate([{ outlets: { popup: null } }]);
        //   }, 7000);
    };
    RegisterUserComponent.prototype.handleError = function (str) {
        var errMsg = str || 'The info you sent is not valid.';
        if (errMsg.indexOf('expired') > -1) {
            // this.showForm = false;
        }
        else {
            // this.showForm = true;
        }
        return errMsg;
    };
    RegisterUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-user',
            template: __webpack_require__(/*! ./register-user.component.html */ "./src/app/bloomen/users/register-user/register-user.component.html"),
            styles: [__webpack_require__(/*! ./register-user.component.scss */ "./src/app/bloomen/users/register-user/register-user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _shared_bloomen_users_service__WEBPACK_IMPORTED_MODULE_3__["BloomenUsersService"],
            src_app_shared_services_help_text_service__WEBPACK_IMPORTED_MODULE_4__["HelpTextService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RegisterUserComponent);
    return RegisterUserComponent;
}());



/***/ }),

/***/ "./src/app/bloomen/users/users-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/bloomen/users/users-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: UsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register-user/register-user.component */ "./src/app/bloomen/users/register-user/register-user.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/bloomen/users/list/list.component.ts");





var routes = [
    {
        path: '',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"],
        data: {
            pageTitle: { 'de': 'Dateien', 'fr': '', 'en-US': 'List User' },
            breadcrumb: { 'de': 'Dateien', 'fr': '', 'en-US': 'list.title' },
            menuLabel: 'List'
        }
    },
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"],
        data: {
            pageTitle: { 'de': 'Dateien', 'fr': '', 'en-US': 'List User' },
            breadcrumb: { 'de': 'Dateien', 'fr': '', 'en-US': 'list.title' },
            menuLabel: 'List'
        }
    },
    {
        path: 'register',
        component: _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_3__["RegisterUserComponent"],
        data: {
            pageTitle: { 'de': 'Dateien', 'fr': '', 'en-US': 'Register' },
            breadcrumb: { 'de': 'Dateien', 'fr': '', 'en-US': 'register.title' },
            menuLabel: 'Register'
        }
    },
];
var UsersRoutingModule = /** @class */ (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());



/***/ }),

/***/ "./src/app/bloomen/users/users.module.ts":
/*!***********************************************!*\
  !*** ./src/app/bloomen/users/users.module.ts ***!
  \***********************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/bloomen/users/users-routing.module.ts");
/* harmony import */ var _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register-user/register-user.component */ "./src/app/bloomen/users/register-user/register-user.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_shared */ "./src/app/bloomen/users/_shared/index.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_shared/shared.module */ "./src/app/_shared/shared.module.ts");
/* harmony import */ var src_app_app_material_app_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/app-material/app-material.module */ "./src/app/app-material/app-material.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list/list.component */ "./src/app/bloomen/users/list/list.component.ts");
/* harmony import */ var src_app_shared_directives_passwordValidation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/_shared/directives/passwordValidation */ "./src/app/_shared/directives/passwordValidation.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_formly_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-formly/material */ "./node_modules/@ngx-formly/material/fesm5/ngx-formly-material.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");





// import { ValidationService } from 'src/app/_shared/services/validation.service';








// import { UsersComponent } from './users.component';
var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_register_user_register_user_component__WEBPACK_IMPORTED_MODULE_4__["RegisterUserComponent"], _shared__WEBPACK_IMPORTED_MODULE_5__["AccountFormComponent"], _shared__WEBPACK_IMPORTED_MODULE_5__["AccountLoginFormComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_8__["ListComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _users_routing_module__WEBPACK_IMPORTED_MODULE_3__["UsersRoutingModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                src_app_app_material_app_material_module__WEBPACK_IMPORTED_MODULE_7__["AppMaterialModule"],
                _ngx_formly_material__WEBPACK_IMPORTED_MODULE_11__["FormlyMaterialModule"],
                _ngx_formly_core__WEBPACK_IMPORTED_MODULE_12__["FormlyModule"].forRoot({
                    validationMessages: [
                        { name: 'required', message: 'This field is required' },
                        { name: 'minlength', message: src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["minlengthValidationMessage"] },
                    ],
                }),
            ],
            exports: [
                _shared__WEBPACK_IMPORTED_MODULE_5__["AccountFormComponent"],
                _shared__WEBPACK_IMPORTED_MODULE_5__["AccountLoginFormComponent"]
            ],
            providers: [
                // ValidationService,
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALIDATORS"], useValue: src_app_shared_directives_passwordValidation__WEBPACK_IMPORTED_MODULE_9__["PasswordStrength"], multi: true }
            ]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ })

}]);
//# sourceMappingURL=users-users-module.js.map