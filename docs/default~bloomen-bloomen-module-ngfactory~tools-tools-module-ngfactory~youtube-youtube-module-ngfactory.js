(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~bloomen-bloomen-module-ngfactory~tools-tools-module-ngfactory~youtube-youtube-module-ngfactory"],{

/***/ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core-json-schema.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ngx-formly/core/fesm5/ngx-formly-core-json-schema.js ***!
  \****************************************************************************/
/*! exports provided: FormlyJsonschema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormlyJsonschema", function() { return FormlyJsonschema; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} v
 * @return {?}
 */
function isEmpty(v) {
    return v === '' || v === undefined || v === null;
}
var FormlyJsonschema = /** @class */ (function () {
    function FormlyJsonschema() {
    }
    /**
     * @param {?} schema
     * @param {?=} options
     * @return {?}
     */
    FormlyJsonschema.prototype.toFieldConfig = /**
     * @param {?} schema
     * @param {?=} options
     * @return {?}
     */
    function (schema, options) {
        return this._toFieldConfig(schema, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ schema: schema }, (options || {})));
    };
    /**
     * @private
     * @param {?} schema
     * @param {?} options
     * @return {?}
     */
    FormlyJsonschema.prototype._toFieldConfig = /**
     * @private
     * @param {?} schema
     * @param {?} options
     * @return {?}
     */
    function (schema, options) {
        var _this = this;
        if (schema.$ref) {
            schema = this.resolveDefinition(schema, options);
        }
        /** @type {?} */
        var field = {
            type: this.guessType(schema),
            defaultValue: schema.default,
            templateOptions: {
                label: schema.title,
                readonly: schema.readOnly,
                description: schema.description,
            },
        };
        switch (field.type) {
            case 'number':
            case 'integer': {
                field.parsers = [(/**
                     * @param {?} v
                     * @return {?}
                     */
                    function (v) { return isEmpty(v) ? null : Number(v); })];
                if (schema.hasOwnProperty('minimum')) {
                    field.templateOptions.min = schema.minimum;
                }
                if (schema.hasOwnProperty('maximum')) {
                    field.templateOptions.max = schema.maximum;
                }
                if (schema.hasOwnProperty('exclusiveMinimum')) {
                    this.addValidator(field, 'exclusiveMinimum', (/**
                     * @param {?} c
                     * @return {?}
                     */
                    function (c) { return isEmpty(c.value) || (c.value > schema.exclusiveMinimum); }));
                }
                if (schema.hasOwnProperty('exclusiveMaximum')) {
                    this.addValidator(field, 'exclusiveMaximum', (/**
                     * @param {?} c
                     * @return {?}
                     */
                    function (c) { return isEmpty(c.value) || (c.value < schema.exclusiveMaximum); }));
                }
                if (schema.hasOwnProperty('multipleOf')) {
                    field.templateOptions.step = schema.multipleOf;
                    this.addValidator(field, 'multipleOf', (/**
                     * @param {?} c
                     * @return {?}
                     */
                    function (c) { return isEmpty(c.value) || (c.value % schema.multipleOf === 0); }));
                }
                break;
            }
            case 'string': {
                ['minLength', 'maxLength', 'pattern'].forEach((/**
                 * @param {?} prop
                 * @return {?}
                 */
                function (prop) {
                    if (schema.hasOwnProperty(prop)) {
                        field.templateOptions[prop] = schema[prop];
                    }
                }));
                break;
            }
            case 'object': {
                field.fieldGroup = [];
                var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(this.resolveDependencies(schema), 2), propDeps_1 = _a[0], schemaDeps_1 = _a[1];
                Object.keys(schema.properties || {}).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) {
                    /** @type {?} */
                    var f = _this._toFieldConfig((/** @type {?} */ (schema.properties[key])), options);
                    field.fieldGroup.push(f);
                    f.key = key;
                    if (Array.isArray(schema.required) && schema.required.indexOf(key) !== -1) {
                        f.templateOptions.required = true;
                    }
                    if (!f.templateOptions.required && propDeps_1[key]) {
                        f.expressionProperties = {
                            'templateOptions.required': (/**
                             * @param {?} m
                             * @return {?}
                             */
                            function (m) { return m && propDeps_1[key].some((/**
                             * @param {?} k
                             * @return {?}
                             */
                            function (k) { return !isEmpty(m[k]); })); }),
                        };
                    }
                    if (schemaDeps_1[key]) {
                        field.fieldGroup.push(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this._toFieldConfig(schemaDeps_1[key], options), { hideExpression: (/**
                             * @param {?} m
                             * @return {?}
                             */
                            function (m) { return !m || isEmpty(m[key]); }) }));
                    }
                }));
                break;
            }
            case 'array': {
                field.fieldGroup = [];
                Object.defineProperty(field, 'fieldArray', {
                    get: (/**
                     * @return {?}
                     */
                    function () {
                        if (!Array.isArray(schema.items)) {
                            // When items is a single schema, the additionalItems keyword is meaningless, and it should not be used.
                            return _this._toFieldConfig((/** @type {?} */ (schema.items)), options);
                        }
                        /** @type {?} */
                        var itemSchema = schema.items[field.fieldGroup.length]
                            ? schema.items[field.fieldGroup.length]
                            : schema.additionalItems;
                        return itemSchema
                            ? _this._toFieldConfig((/** @type {?} */ (itemSchema)), options)
                            : null;
                    }),
                    enumerable: true,
                    configurable: true,
                });
                break;
            }
        }
        if (schema.enum) {
            field.type = 'enum';
            field.templateOptions.options = schema.enum.map((/**
             * @param {?} value
             * @return {?}
             */
            function (value) { return ({ value: value, label: value }); }));
        }
        // map in possible formlyConfig options from the widget property
        if (schema['widget'] && schema['widget'].formlyConfig) {
            field = Object(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__["ɵreverseDeepMerge"])(schema['widget'].formlyConfig, field);
        }
        // if there is a map function passed in, use it to allow the user to
        // further customize how fields are being mapped
        return options.map ? options.map(field, schema) : field;
    };
    /**
     * @private
     * @param {?} schema
     * @param {?} options
     * @return {?}
     */
    FormlyJsonschema.prototype.resolveDefinition = /**
     * @private
     * @param {?} schema
     * @param {?} options
     * @return {?}
     */
    function (schema, options) {
        var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(schema.$ref.split('#/'), 2), uri = _a[0], pointer = _a[1];
        if (uri) {
            throw Error("Remote schemas for " + schema.$ref + " not supported yet.");
        }
        /** @type {?} */
        var definition = !pointer ? null : pointer.split('/').reduce((/**
         * @param {?} def
         * @param {?} path
         * @return {?}
         */
        function (def, path) { return def && def.hasOwnProperty(path) ? def[path] : null; }), options.schema);
        if (!definition) {
            throw Error("Cannot find a definition for " + schema.$ref + ".");
        }
        if (definition.$ref) {
            return this.resolveDefinition(definition, options);
        }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, definition, ['title', 'description', 'default'].reduce((/**
         * @param {?} annotation
         * @param {?} p
         * @return {?}
         */
        function (annotation, p) {
            if (schema.hasOwnProperty(p)) {
                annotation[p] = schema[p];
            }
            return annotation;
        }), {}));
    };
    /**
     * @private
     * @param {?} schema
     * @return {?}
     */
    FormlyJsonschema.prototype.resolveDependencies = /**
     * @private
     * @param {?} schema
     * @return {?}
     */
    function (schema) {
        /** @type {?} */
        var deps = {};
        /** @type {?} */
        var schemaDeps = {};
        Object.keys(schema.dependencies || {}).forEach((/**
         * @param {?} prop
         * @return {?}
         */
        function (prop) {
            /** @type {?} */
            var dependency = (/** @type {?} */ (schema.dependencies[prop]));
            if (Array.isArray(dependency)) {
                // Property dependencies
                dependency.forEach((/**
                 * @param {?} dep
                 * @return {?}
                 */
                function (dep) {
                    if (!deps[dep]) {
                        deps[dep] = [prop];
                    }
                    else {
                        deps[dep].push(prop);
                    }
                }));
            }
            else {
                // schema dependencies
                schemaDeps[prop] = dependency;
            }
        }));
        return [deps, schemaDeps];
    };
    /**
     * @private
     * @param {?} schema
     * @return {?}
     */
    FormlyJsonschema.prototype.guessType = /**
     * @private
     * @param {?} schema
     * @return {?}
     */
    function (schema) {
        /** @type {?} */
        var type = (/** @type {?} */ (schema.type));
        if (!type && schema.properties) {
            return 'object';
        }
        return type;
    };
    /**
     * @private
     * @param {?} field
     * @param {?} name
     * @param {?} validator
     * @return {?}
     */
    FormlyJsonschema.prototype.addValidator = /**
     * @private
     * @param {?} field
     * @param {?} name
     * @param {?} validator
     * @return {?}
     */
    function (field, name, validator) {
        field.validators = field.validators || {};
        field.validators[name] = validator;
    };
    FormlyJsonschema.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ FormlyJsonschema.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function FormlyJsonschema_Factory() { return new FormlyJsonschema(); }, token: FormlyJsonschema, providedIn: "root" });
    return FormlyJsonschema;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-formly-core-json-schema.js.map

/***/ }),

/***/ "./src/app/_shared/ui-form/api-config.ts":
/*!***********************************************!*\
  !*** ./src/app/_shared/ui-form/api-config.ts ***!
  \***********************************************/
/*! exports provided: FORM_APIS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM_APIS", function() { return FORM_APIS; });
var FORM_APIS = {
    youtube: {
        basic: {
            jsonSchema: 'assets/YouTube/youtube-edit-video-basic.json',
            uiSchema: 'assets/YouTube/youtube-edit-video-basic-ui.json',
        },
        advanced: {
            jsonSchema: 'assets/YouTube/youtube-edit-video-advanced.schema.json',
            uiSchema: 'assets/YouTube/youtube-edit-video-advanced.ui.json',
        },
        arrays: {
            jsonSchema: 'assets/YouTube/arrays.json',
            uiSchema: 'assets/YouTube/youtube-edit-video-advanced.ui.json',
        }
    },
};


/***/ }),

/***/ "./src/app/_shared/ui-form/services/kendraio.form.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/_shared/ui-form/services/kendraio.form.service.ts ***!
  \*******************************************************************/
/*! exports provided: KendraioFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KendraioFormService", function() { return KendraioFormService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _api_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-config */ "./src/app/_shared/ui-form/api-config.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// import { Field } from '../helpers/fields';
// import { DEFAULT_FORM } from '../schemas/default.form';
// import { LOGIN_FORM } from '../schemas/login.form';
// import { FORMS_VALUES } from '../schemas';






var KendraioFormService = /** @class */ (function () {
    function KendraioFormService(http) {
        this.http = http;
    }
    KendraioFormService.prototype.getFormData = function (formId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])([this.getUI(formId), this.getSchema(formId)]);
    };
    KendraioFormService.prototype.getUI = function (formId) {
        var url = _api_config__WEBPACK_IMPORTED_MODULE_2__["FORM_APIS"].youtube[formId].uiSchema;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    };
    KendraioFormService.prototype.getSchema = function (formId) {
        var url = _api_config__WEBPACK_IMPORTED_MODULE_2__["FORM_APIS"].youtube[formId].jsonSchema;
        return this.http.get(url);
    };
    KendraioFormService.prototype.uiMapper = function (formlyConfig, jsonSchema, uiSchema) {
        console.log(jsonSchema);
        var i = 0;
        try {
            if (Object.keys(uiSchema).length) {
                Object.keys(jsonSchema.properties).forEach(function (key) {
                    Object.keys(uiSchema).forEach(function (uiKey) {
                        if (uiKey === key) {
                            //  jsonSchema.properties.bandArtist.type = uiSchema.bandArtist['ui:type'];
                            formlyConfig['fieldGroup'][i]['templateOptions']['disabled'] = uiSchema[key]['ui:disabled'];
                            formlyConfig['fieldGroup'][i]['templateOptions']['placeholder'] = uiSchema[key]['ui:placeholder'];
                            formlyConfig['fieldGroup'][i]['templateOptions']['required'] = uiSchema[key]['ui:required'];
                        }
                    });
                    i++;
                });
            }
            return formlyConfig;
        }
        catch (e) {
        }
    };
    KendraioFormService.prototype.jsonMapper = function (jsonSchema, uiSchema) {
        var i = 0;
        try {
            Object.keys(uiSchema).forEach(function (key) {
                Object.keys(jsonSchema.properties).forEach(function (uiKey) {
                    // jsonSchema.properties.bandArtist.type = 'datepicker';
                    if (uiKey === key) {
                        jsonSchema.properties[i].type = uiSchema.bandArtist['ui:type'];
                    }
                });
                i++;
            });
            return jsonSchema;
        }
        catch (e) {
        }
    };
    KendraioFormService.prototype.errorHandler = function (error) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        }
        else {
            console.error("Backend http returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something naughty happened; please try again later.');
    };
    KendraioFormService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ factory: function KendraioFormService_Factory() { return new KendraioFormService(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); }, token: KendraioFormService, providedIn: "root" });
    return KendraioFormService;
}());



/***/ })

}]);
//# sourceMappingURL=default~bloomen-bloomen-module-ngfactory~tools-tools-module-ngfactory~youtube-youtube-module-ngfactory.js.map