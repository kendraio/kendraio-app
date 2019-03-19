(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/ngx-tagger/fesm5/ngx-tagger.js":
/*!*********************************************!*\
  !*** ./dist/ngx-tagger/fesm5/ngx-tagger.js ***!
  \*********************************************/
/*! exports provided: NgxTaggerService, NgxTaggerComponent, NgxTaggerModule, ɵa, ɵc, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxTaggerService", function() { return NgxTaggerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxTaggerComponent", function() { return NgxTaggerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxTaggerModule", function() { return NgxTaggerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return TagBaseDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return TagPreviewDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return TagDirective; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var interactjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! interactjs */ "./node_modules/interactjs/dist/interact.js");
/* harmony import */ var interactjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(interactjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxTaggerService = /** @class */ (function () {
    function NgxTaggerService() {
    }
    NgxTaggerService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgxTaggerService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgxTaggerService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function NgxTaggerService_Factory() { return new NgxTaggerService(); }, token: NgxTaggerService, providedIn: "root" });
    return NgxTaggerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var limit = function (min, max, value) { return Math.max(min, Math.min(max, value)); };
var TagBaseDirective = /** @class */ (function () {
    function TagBaseDirective(el) {
        this.el = el;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    TagBaseDirective.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var offsetX = event.offsetX, offsetY = event.offsetY;
        /** @type {?} */
        var tag = this.getTagPosition(offsetX, offsetY, this.tagger.defaultTagSize);
        if (this.tagger) {
            this.tagger.addTag(tag);
        }
    };
    // noinspection JSSuspiciousNameCombination
    // noinspection JSSuspiciousNameCombination
    /**
     * @param {?} x
     * @param {?} y
     * @param {?} width
     * @param {?=} height
     * @return {?}
     */
    TagBaseDirective.prototype.getTagPosition = 
    // noinspection JSSuspiciousNameCombination
    /**
     * @param {?} x
     * @param {?} y
     * @param {?} width
     * @param {?=} height
     * @return {?}
     */
    function (x, y, width, height) {
        if (height === void 0) { height = width; }
        var _a = (/** @type {?} */ (this.el.nativeElement)), clientWidth = _a.clientWidth, clientHeight = _a.clientHeight;
        /** @type {?} */
        var halfWidth = width / 2.0;
        /** @type {?} */
        var halfHeight = height / 2.0;
        // Restrain the click position within the bounds of the target
        /** @type {?} */
        var xPos = limit(halfWidth, clientWidth - halfWidth, x);
        /** @type {?} */
        var yPos = limit(halfHeight, clientHeight - halfHeight, y);
        // Calculate top left and bottom right corners of tag region
        /** @type {?} */
        var topLeft = {
            x: clientWidth === 0 ? 0 : (xPos - halfWidth) / clientWidth,
            y: clientHeight === 0 ? 0 : (yPos - halfHeight) / clientHeight
        };
        /** @type {?} */
        var bottomRight = {
            x: clientWidth === 0 ? 0 : (xPos + halfWidth) / clientWidth,
            y: clientHeight === 0 ? 0 : (yPos + halfHeight) / clientHeight
        };
        return { topLeft: topLeft, bottomRight: bottomRight };
    };
    TagBaseDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: '[ngxTagBase]'
                },] }
    ];
    /** @nocollapse */
    TagBaseDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }
    ]; };
    TagBaseDirective.propDecorators = {
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"], args: ['click', ['$event'],] }]
    };
    return TagBaseDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxTaggerComponent = /** @class */ (function () {
    function NgxTaggerComponent() {
        this.defaultTagSize = 90;
        this._config = {
            tagBorder: '3px solid blue'
        };
        this._changed = function (v) { };
        this._touched = function () { };
    }
    Object.defineProperty(NgxTaggerComponent.prototype, "config", {
        set: /**
         * @param {?} c
         * @return {?}
         */
        function (c) {
            this._config = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, this._config, c);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgxTaggerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.tags = [];
    };
    /**
     * @return {?}
     */
    NgxTaggerComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.tagBase.tagger = this;
    };
    /**
     * @param {?} tag
     * @return {?}
     */
    NgxTaggerComponent.prototype.addTag = /**
     * @param {?} tag
     * @return {?}
     */
    function (tag) {
        this.tags.push(tag);
        this._changed(this.tags);
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    NgxTaggerComponent.prototype.updateTag = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var i = _a.i, tag = _a.tag;
        this.tags[i] = tag;
        this._changed(this.tags);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgxTaggerComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._changed = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgxTaggerComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._touched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NgxTaggerComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    NgxTaggerComponent.prototype.writeValue = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        this.tags = obj;
    };
    NgxTaggerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ngx-tagger',
                    template: "\n    <ng-content></ng-content>\n    <div class=\"tags\">\n      <span class=\"tag\" [ngxTag]=\"tag\"\n            [style.border]=\"_config.tagBorder\"\n            (updateTag)=\"updateTag({ i: i, tag: $event })\"\n            *ngFor=\"let tag of tags; index as i\"></span>\n    </div>\n  ",
                    providers: [{
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                            useExisting: NgxTaggerComponent,
                            multi: true
                        }],
                    styles: ["\n      :host {\n          display: block;\n          position: relative;\n          user-select: none;\n      }\n      .tags {\n          position: absolute;\n          top: 0;\n          left: 0;\n      }\n      .tag {\n          display: block;\n          position: absolute;\n          box-sizing: border-box;\n      }\n  "]
                }] }
    ];
    /** @nocollapse */
    NgxTaggerComponent.ctorParameters = function () { return []; };
    NgxTaggerComponent.propDecorators = {
        defaultTagSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        tagBase: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"], args: [TagBaseDirective,] }]
    };
    return NgxTaggerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var interact = interactjs__WEBPACK_IMPORTED_MODULE_2__;
var TagDirective = /** @class */ (function () {
    function TagDirective(el, parent) {
        this.el = el;
        this.parent = parent;
        this.updateTag = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this._w = 0;
        this._h = 0;
        this._x = 0;
        this._y = 0;
        this._xy = '';
    }
    /**
     * @return {?}
     */
    TagDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        interact(this.el.nativeElement)
            .draggable({
            restrict: {
                restriction: function () { return _this.parent.tagBase.el.nativeElement; },
                elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
            },
            onmove: function (event) {
                var dx = event.dx, dy = event.dy;
                _this._x += dx;
                _this._y += dy;
                _this._xy = "translate(" + _this._x + "px, " + _this._y + "px)";
            },
            onend: function () { return _this.tagUpdated(); }
        })
            .resizable((/** @type {?} */ ({
            // resize from all edges and corners
            edges: { left: true, right: true, bottom: true, top: true },
            // minimum size
            restrictSize: {
                min: { width: 50, height: 50 },
            },
            // keep the edges inside the parent
            restrictEdges: {
                outer: this.parent.tagBase.el.nativeElement,
                endOnly: false,
            },
            onmove: function (event) {
                _this._w = ((/** @type {?} */ (event))).rect.width;
                _this._h = ((/** @type {?} */ (event))).rect.height;
                _this._x += ((/** @type {?} */ (event))).deltaRect.left;
                _this._y += ((/** @type {?} */ (event))).deltaRect.top;
                _this._xy = "translate(" + _this._x + "px, " + _this._y + "px)";
            },
            onend: function () { return _this.tagUpdated(); }
        })));
    };
    /**
     * @return {?}
     */
    TagDirective.prototype.tagUpdated = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var tag = this.parent.tagBase.getTagPosition(this._x + this._w / 2.0, this._y + this._h / 2.0, this._w, this._h);
        this.updateTag.emit(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, tag, { data: this.tag.data }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    TagDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var w = this.tag.bottomRight.x - this.tag.topLeft.x;
        /** @type {?} */
        var h = this.tag.bottomRight.y - this.tag.topLeft.y;
        this._w = w * this.parent.tagBase.el.nativeElement.clientWidth;
        this._h = h * this.parent.tagBase.el.nativeElement.clientHeight;
        this._x = this.tag.topLeft.x * this.parent.tagBase.el.nativeElement.clientWidth;
        this._y = this.tag.topLeft.y * this.parent.tagBase.el.nativeElement.clientHeight;
        this._xy = "translate(" + this._x + "px, " + this._y + "px)";
    };
    TagDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: '[ngxTag]'
                },] }
    ];
    /** @nocollapse */
    TagDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
        { type: NgxTaggerComponent }
    ]; };
    TagDirective.propDecorators = {
        tag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['ngxTag',] }],
        updateTag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
        _w: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"], args: ['style.width.px',] }],
        _h: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"], args: ['style.height.px',] }],
        _xy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"], args: ['style.transform',] }]
    };
    return TagDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TagPreviewDirective = /** @class */ (function () {
    function TagPreviewDirective(el, sanitizer) {
        this.el = el;
        this.sanitizer = sanitizer;
        this.origin = 'top left';
    }
    Object.defineProperty(TagPreviewDirective.prototype, "tag", {
        set: /**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var topLeft = _a.topLeft, bottomRight = _a.bottomRight;
            /** @type {?} */
            var tl = topLeft.x * 100 + "% " + topLeft.y * 100 + "%";
            /** @type {?} */
            var tr = bottomRight.x * 100 + "% " + topLeft.y * 100 + "%";
            /** @type {?} */
            var bl = topLeft.x * 100 + "% " + bottomRight.y * 100 + "%";
            /** @type {?} */
            var br = bottomRight.x * 100 + "% " + bottomRight.y * 100 + "%";
            /** @type {?} */
            var clip = "polygon(" + tl + ", " + tr + ", " + br + ", " + bl + ")";
            this.clipPath = this.sanitizer.bypassSecurityTrustStyle(clip);
            /** @type {?} */
            var r = 1 / (bottomRight.y - topLeft.y);
            /** @type {?} */
            var t = "scale(" + r + ") translate3d(-" + topLeft.x * 100 + "%, -" + topLeft.y * 100 + "% , 0)";
            this.transform = this.sanitizer.bypassSecurityTrustStyle(t);
        },
        enumerable: true,
        configurable: true
    });
    TagPreviewDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: '[ngxTagPreview]'
                },] }
    ];
    /** @nocollapse */
    TagPreviewDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }
    ]; };
    TagPreviewDirective.propDecorators = {
        tag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['ngxTagPreview',] }],
        clipPath: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"], args: ['style.clip-path',] }],
        origin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"], args: ['style.transform-origin',] }],
        transform: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"], args: ['style.transform',] }]
    };
    return TagPreviewDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxTaggerModule = /** @class */ (function () {
    function NgxTaggerModule() {
    }
    NgxTaggerModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    declarations: [
                        NgxTaggerComponent,
                        TagBaseDirective,
                        TagDirective,
                        TagPreviewDirective
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
                    ],
                    exports: [
                        NgxTaggerComponent,
                        TagPreviewDirective,
                        TagBaseDirective
                    ]
                },] }
    ];
    return NgxTaggerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-tagger.js.map

/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

var K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function () { return 42 } }
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  var buf = new Uint8Array(length)
  buf.__proto__ = Buffer.prototype
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
if (typeof Symbol !== 'undefined' && Symbol.species != null &&
    Buffer[Symbol.species] === Buffer) {
  Object.defineProperty(Buffer, Symbol.species, {
    value: null,
    configurable: true,
    enumerable: false,
    writable: false
  })
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayLike(value)
  }

  if (value == null) {
    throw TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  var valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  var b = fromObject(value)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(
      value[Symbol.toPrimitive]('string'), encodingOrOffset, length
    )
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Buffer.prototype.__proto__ = Uint8Array.prototype
Buffer.__proto__ = Uint8Array

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  var length = byteLength(string, encoding) | 0
  var buf = createBuffer(length)

  var actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  buf.__proto__ = Buffer.prototype
  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      buf = Buffer.from(buf)
    }
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  var len = string.length
  var mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  var strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
        : (firstByte > 0xBF) ? 2
          : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  newBuf.__proto__ = Buffer.prototype
  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (var i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    var len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}


/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./claims/claims.module": [
		"./src/app/claims/claims.module.ts",
		"claims-claims-module"
	],
	"./contacts/contacts.module": [
		"./src/app/contacts/contacts.module.ts"
	],
	"./files/files.module": [
		"./src/app/files/files.module.ts",
		"files-files-module"
	],
	"./music-recordings/music-recordings.module": [
		"./src/app/music-recordings/music-recordings.module.ts",
		"music-recordings-music-recordings-module"
	],
	"./music-releases/music-releases.module": [
		"./src/app/music-releases/music-releases.module.ts",
		"music-releases-music-releases-module"
	],
	"./music-works/music-works.module": [
		"./src/app/music-works/music-works.module.ts",
		"music-works-music-works-module"
	],
	"./settings/settings.module": [
		"./src/app/settings/settings.module.ts",
		"settings-settings-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

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

/***/ "./src/app/app-material/app-material.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/app-material/app-material.module.ts ***!
  \*****************************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");





var MATERIAL = [
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"]
];
var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ].concat(MATERIAL),
            exports: MATERIAL.slice()
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/app/components/layout/layout.component.ts");
/* harmony import */ var _pages_docs_list_page_docs_list_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/docs-list-page/docs-list-page.component */ "./src/app/pages/docs-list-page/docs-list-page.component.ts");
/* harmony import */ var _pages_doc_edit_page_doc_edit_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/doc-edit-page/doc-edit-page.component */ "./src/app/pages/doc-edit-page/doc-edit-page.component.ts");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages */ "./src/app/pages/index.ts");
/* harmony import */ var _pages_upload_page_upload_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/upload-page/upload-page.component */ "./src/app/pages/upload-page/upload-page.component.ts");
/* harmony import */ var _pages_visualise_page_visualise_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/visualise-page/visualise-page.component */ "./src/app/pages/visualise-page/visualise-page.component.ts");
/* harmony import */ var _pages_adapters_page_adapters_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/adapters-page/adapters-page.component */ "./src/app/pages/adapters-page/adapters-page.component.ts");
/* harmony import */ var _pages_settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/settings-page/settings-page.component */ "./src/app/pages/settings-page/settings-page.component.ts");
/* harmony import */ var _pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/user-page/user-page.component */ "./src/app/pages/user-page/user-page.component.ts");
/* harmony import */ var _pages_auth_callback_auth_callback_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/auth-callback/auth-callback.component */ "./src/app/pages/auth-callback/auth-callback.component.ts");
/* harmony import */ var _pages_dropbox_page_dropbox_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/dropbox-page/dropbox-page.component */ "./src/app/pages/dropbox-page/dropbox-page.component.ts");
/* harmony import */ var _pages_swagger_page_swagger_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/swagger-page/swagger-page.component */ "./src/app/pages/swagger-page/swagger-page.component.ts");
/* harmony import */ var _pages_test_api_page_test_api_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/test-api-page/test-api-page.component */ "./src/app/pages/test-api-page/test-api-page.component.ts");
/* harmony import */ var _pages_diagram_page_diagram_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/diagram-page/diagram-page.component */ "./src/app/pages/diagram-page/diagram-page.component.ts");

















var routes = [
    {
        path: 'callback',
        component: _pages_auth_callback_auth_callback_component__WEBPACK_IMPORTED_MODULE_12__["AuthCallbackComponent"]
    },
    {
        path: '',
        component: _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        children: [
            {
                path: 'dashboard',
                component: _pages__WEBPACK_IMPORTED_MODULE_6__["DashboardPageComponent"]
            },
            {
                path: 'assets',
                component: _pages__WEBPACK_IMPORTED_MODULE_6__["AssetsPageComponent"],
                data: {
                    pageTitle: 'My Assets',
                    subTitle: ''
                }
            },
            // {
            //   path: 'contacts',
            //   component: Pages.ContactsComponent,
            //   data: {
            //     pageTitle: 'Contacts',
            //     subTitle: ''
            //   }
            // },
            {
                path: 'import',
                component: _pages__WEBPACK_IMPORTED_MODULE_6__["ImportPageComponent"]
            },
            {
                path: 'upload',
                component: _pages_upload_page_upload_page_component__WEBPACK_IMPORTED_MODULE_7__["UploadPageComponent"]
            },
            {
                path: 'visualise',
                component: _pages_visualise_page_visualise_page_component__WEBPACK_IMPORTED_MODULE_8__["VisualisePageComponent"]
            },
            {
                path: 'diagram/:adapter/:id',
                component: _pages_diagram_page_diagram_page_component__WEBPACK_IMPORTED_MODULE_16__["DiagramPageComponent"]
            },
            {
                path: 'adapters',
                component: _pages_adapters_page_adapters_page_component__WEBPACK_IMPORTED_MODULE_9__["AdaptersPageComponent"]
            },
            {
                path: 'settings',
                component: _pages_settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_10__["SettingsPageComponent"]
            },
            {
                path: 'user',
                component: _pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_11__["UserPageComponent"]
            },
            {
                path: 'docs',
                component: _pages_docs_list_page_docs_list_page_component__WEBPACK_IMPORTED_MODULE_4__["DocsListPageComponent"]
            },
            {
                path: 'docs/:id',
                component: _pages_doc_edit_page_doc_edit_page_component__WEBPACK_IMPORTED_MODULE_5__["DocEditPageComponent"]
            },
            {
                path: 'dropbox',
                component: _pages_dropbox_page_dropbox_page_component__WEBPACK_IMPORTED_MODULE_13__["DropboxPageComponent"]
            },
            {
                path: 'api-client/:id',
                component: _pages_swagger_page_swagger_page_component__WEBPACK_IMPORTED_MODULE_14__["SwaggerPageComponent"]
            },
            {
                path: 'test-api',
                component: _pages_test_api_page_test_api_page_component__WEBPACK_IMPORTED_MODULE_15__["TestApiPageComponent"]
            },
            {
                path: 'files',
                loadChildren: './files/files.module#FilesModule'
            },
            {
                path: 'recordings',
                loadChildren: './music-recordings/music-recordings.module#MusicRecordingsModule'
            },
            {
                path: 'releases',
                loadChildren: './music-releases/music-releases.module#MusicReleasesModule'
            },
            {
                path: 'works',
                loadChildren: './music-works/music-works.module#MusicWorksModule'
            },
            {
                path: 'claims',
                loadChildren: './claims/claims.module#ClaimsModule'
            },
            { path: 'contacts',
                loadChildren: './contacts/contacts.module#ContactsModule' },
            {
                path: 'settings',
                loadChildren: './settings/settings.module'
            },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
        auth.handleAuthentication();
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: "<router-outlet></router-outlet>"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/app/components/layout/layout.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pages_dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/dashboard-page/dashboard-page.component */ "./src/app/pages/dashboard-page/dashboard-page.component.ts");
/* harmony import */ var _pages_import_page_import_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/import-page/import-page.component */ "./src/app/pages/import-page/import-page.component.ts");
/* harmony import */ var _pages_upload_page_upload_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/upload-page/upload-page.component */ "./src/app/pages/upload-page/upload-page.component.ts");
/* harmony import */ var _pages_visualise_page_visualise_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/visualise-page/visualise-page.component */ "./src/app/pages/visualise-page/visualise-page.component.ts");
/* harmony import */ var _pages_adapters_page_adapters_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/adapters-page/adapters-page.component */ "./src/app/pages/adapters-page/adapters-page.component.ts");
/* harmony import */ var _pages_settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/settings-page/settings-page.component */ "./src/app/pages/settings-page/settings-page.component.ts");
/* harmony import */ var _pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/user-page/user-page.component */ "./src/app/pages/user-page/user-page.component.ts");
/* harmony import */ var _dialogs_confirm_app_reset_dialog_confirm_app_reset_dialog_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dialogs/confirm-app-reset-dialog/confirm-app-reset-dialog.component */ "./src/app/dialogs/confirm-app-reset-dialog/confirm-app-reset-dialog.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pipes_object_keys_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pipes/object-keys.pipe */ "./src/app/pipes/object-keys.pipe.ts");
/* harmony import */ var _dialogs_import_progress_dialog_import_progress_dialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dialogs/import-progress-dialog/import-progress-dialog.component */ "./src/app/dialogs/import-progress-dialog/import-progress-dialog.component.ts");
/* harmony import */ var _dialogs_add_new_node_dialog_add_new_node_dialog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dialogs/add-new-node-dialog/add-new-node-dialog.component */ "./src/app/dialogs/add-new-node-dialog/add-new-node-dialog.component.ts");
/* harmony import */ var _dialogs_confirm_delete_dialog_confirm_delete_dialog_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./dialogs/confirm-delete-dialog/confirm-delete-dialog.component */ "./src/app/dialogs/confirm-delete-dialog/confirm-delete-dialog.component.ts");
/* harmony import */ var _dialogs_replace_image_url_dialog_replace_image_url_dialog_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./dialogs/replace-image-url-dialog/replace-image-url-dialog.component */ "./src/app/dialogs/replace-image-url-dialog/replace-image-url-dialog.component.ts");
/* harmony import */ var _pages_auth_callback_auth_callback_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/auth-callback/auth-callback.component */ "./src/app/pages/auth-callback/auth-callback.component.ts");
/* harmony import */ var _components_waveform_waveform_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/waveform/waveform.component */ "./src/app/components/waveform/waveform.component.ts");
/* harmony import */ var _pages_docs_list_page_docs_list_page_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/docs-list-page/docs-list-page.component */ "./src/app/pages/docs-list-page/docs-list-page.component.ts");
/* harmony import */ var _dialogs_add_doc_dialog_add_doc_dialog_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./dialogs/add-doc-dialog/add-doc-dialog.component */ "./src/app/dialogs/add-doc-dialog/add-doc-dialog.component.ts");
/* harmony import */ var _pages_doc_edit_page_doc_edit_page_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/doc-edit-page/doc-edit-page.component */ "./src/app/pages/doc-edit-page/doc-edit-page.component.ts");
/* harmony import */ var _forms_doc_edit_form_doc_edit_form_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./forms/doc-edit-form/doc-edit-form.component */ "./src/app/forms/doc-edit-form/doc-edit-form.component.ts");
/* harmony import */ var _form_controls_image_input_control_image_input_control_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./form-controls/image-input-control/image-input-control.component */ "./src/app/form-controls/image-input-control/image-input-control.component.ts");
/* harmony import */ var _form_controls_text_input_form_control_text_input_form_control_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./form-controls/text-input-form-control/text-input-form-control.component */ "./src/app/form-controls/text-input-form-control/text-input-form-control.component.ts");
/* harmony import */ var _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./app-material/app-material.module */ "./src/app/app-material/app-material.module.ts");
/* harmony import */ var ngx_tagger__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ngx-tagger */ "./dist/ngx-tagger/fesm5/ngx-tagger.js");
/* harmony import */ var _services_schema_repository_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./services/schema-repository.service */ "./src/app/services/schema-repository.service.ts");
/* harmony import */ var _services_document_repository_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./services/document-repository.service */ "./src/app/services/document-repository.service.ts");
/* harmony import */ var _pages_dropbox_page_dropbox_page_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./pages/dropbox-page/dropbox-page.component */ "./src/app/pages/dropbox-page/dropbox-page.component.ts");
/* harmony import */ var _form_controls_legacy_data_form_control_legacy_data_form_control_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./form-controls/legacy-data-form-control/legacy-data-form-control.component */ "./src/app/form-controls/legacy-data-form-control/legacy-data-form-control.component.ts");
/* harmony import */ var _form_controls_audio_input_control_audio_input_control_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./form-controls/audio-input-control/audio-input-control.component */ "./src/app/form-controls/audio-input-control/audio-input-control.component.ts");
/* harmony import */ var _directives_track_clip_directive__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./directives/track-clip.directive */ "./src/app/directives/track-clip.directive.ts");
/* harmony import */ var _dialogs_edit_clip_dialog_edit_clip_dialog_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./dialogs/edit-clip-dialog/edit-clip-dialog.component */ "./src/app/dialogs/edit-clip-dialog/edit-clip-dialog.component.ts");
/* harmony import */ var _directives_doughnut_chart_directive__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./directives/doughnut-chart.directive */ "./src/app/directives/doughnut-chart.directive.ts");
/* harmony import */ var _pages_swagger_page_swagger_page_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./pages/swagger-page/swagger-page.component */ "./src/app/pages/swagger-page/swagger-page.component.ts");
/* harmony import */ var _directives_swagger_ui_directive__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./directives/swagger-ui.directive */ "./src/app/directives/swagger-ui.directive.ts");
/* harmony import */ var _pages_test_api_page_test_api_page_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./pages/test-api-page/test-api-page.component */ "./src/app/pages/test-api-page/test-api-page.component.ts");
/* harmony import */ var _dialogs_test_import_dialog_test_import_dialog_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./dialogs/test-import-dialog/test-import-dialog.component */ "./src/app/dialogs/test-import-dialog/test-import-dialog.component.ts");
/* harmony import */ var _pages_assets_page_assets_page_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./pages/assets-page/assets-page.component */ "./src/app/pages/assets-page/assets-page.component.ts");
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm5/core.js");
/* harmony import */ var _ng_dynamic_forms_ui_material__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @ng-dynamic-forms/ui-material */ "./node_modules/@ng-dynamic-forms/ui-material/fesm5/ui-material.js");
/* harmony import */ var _pages_diagram_page_diagram_page_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./pages/diagram-page/diagram-page.component */ "./src/app/pages/diagram-page/diagram-page.component.ts");
/* harmony import */ var _contacts_contacts_module__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./contacts/contacts.module */ "./src/app/contacts/contacts.module.ts");


















































// import {MusicRecordingsEditComponent} from './music-recordings/index';



// import { ContactsComponent } from './pages';

// import { AgGridModule } from 'ag-grid-angular';
// import { MatInputComponent } from './_shared/components';
// import {DialogDataExampleDialog} from './music-recordings';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_11__["LayoutComponent"],
                _pages_docs_list_page_docs_list_page_component__WEBPACK_IMPORTED_MODULE_29__["DocsListPageComponent"],
                _dialogs_add_doc_dialog_add_doc_dialog_component__WEBPACK_IMPORTED_MODULE_30__["AddDocDialogComponent"],
                _pages_doc_edit_page_doc_edit_page_component__WEBPACK_IMPORTED_MODULE_31__["DocEditPageComponent"],
                _forms_doc_edit_form_doc_edit_form_component__WEBPACK_IMPORTED_MODULE_32__["DocEditFormComponent"],
                _form_controls_image_input_control_image_input_control_component__WEBPACK_IMPORTED_MODULE_33__["ImageInputControlComponent"],
                _form_controls_text_input_form_control_text_input_form_control_component__WEBPACK_IMPORTED_MODULE_34__["TextInputFormControlComponent"],
                _pages_dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_13__["DashboardPageComponent"],
                _pages_import_page_import_page_component__WEBPACK_IMPORTED_MODULE_14__["ImportPageComponent"],
                _pages_upload_page_upload_page_component__WEBPACK_IMPORTED_MODULE_15__["UploadPageComponent"],
                _pages_visualise_page_visualise_page_component__WEBPACK_IMPORTED_MODULE_16__["VisualisePageComponent"],
                _pages_adapters_page_adapters_page_component__WEBPACK_IMPORTED_MODULE_17__["AdaptersPageComponent"],
                _pages_settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_18__["SettingsPageComponent"],
                _pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_19__["UserPageComponent"],
                _dialogs_confirm_app_reset_dialog_confirm_app_reset_dialog_component__WEBPACK_IMPORTED_MODULE_20__["ConfirmAppResetDialogComponent"],
                _pipes_object_keys_pipe__WEBPACK_IMPORTED_MODULE_22__["ObjectKeysPipe"],
                _dialogs_import_progress_dialog_import_progress_dialog_component__WEBPACK_IMPORTED_MODULE_23__["ImportProgressDialogComponent"],
                _dialogs_add_new_node_dialog_add_new_node_dialog_component__WEBPACK_IMPORTED_MODULE_24__["AddNewNodeDialogComponent"],
                _dialogs_confirm_delete_dialog_confirm_delete_dialog_component__WEBPACK_IMPORTED_MODULE_25__["ConfirmDeleteDialogComponent"],
                _dialogs_replace_image_url_dialog_replace_image_url_dialog_component__WEBPACK_IMPORTED_MODULE_26__["ReplaceImageUrlDialogComponent"],
                _pages_auth_callback_auth_callback_component__WEBPACK_IMPORTED_MODULE_27__["AuthCallbackComponent"],
                _components_waveform_waveform_component__WEBPACK_IMPORTED_MODULE_28__["WaveformComponent"],
                _pages_dropbox_page_dropbox_page_component__WEBPACK_IMPORTED_MODULE_39__["DropboxPageComponent"],
                _form_controls_legacy_data_form_control_legacy_data_form_control_component__WEBPACK_IMPORTED_MODULE_40__["LegacyDataFormControlComponent"],
                _form_controls_audio_input_control_audio_input_control_component__WEBPACK_IMPORTED_MODULE_41__["AudioInputControlComponent"],
                _directives_track_clip_directive__WEBPACK_IMPORTED_MODULE_42__["TrackClipDirective"],
                _dialogs_edit_clip_dialog_edit_clip_dialog_component__WEBPACK_IMPORTED_MODULE_43__["EditClipDialogComponent"],
                _directives_doughnut_chart_directive__WEBPACK_IMPORTED_MODULE_44__["DoughnutChartDirective"],
                _pages_swagger_page_swagger_page_component__WEBPACK_IMPORTED_MODULE_45__["SwaggerPageComponent"],
                _directives_swagger_ui_directive__WEBPACK_IMPORTED_MODULE_46__["SwaggerUiDirective"],
                _pages_test_api_page_test_api_page_component__WEBPACK_IMPORTED_MODULE_47__["TestApiPageComponent"],
                _dialogs_test_import_dialog_test_import_dialog_component__WEBPACK_IMPORTED_MODULE_48__["TestImportDialogComponent"],
                _pages_assets_page_assets_page_component__WEBPACK_IMPORTED_MODULE_49__["AssetsPageComponent"],
                _pages_diagram_page_diagram_page_component__WEBPACK_IMPORTED_MODULE_52__["DiagramPageComponent"],
            ],
            imports: [
                // AgGridModule.withComponents([ 
                //   // MatInputComponent
                // ]),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_35__["AppMaterialModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production }),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot({}),
                !_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"].instrument() : [],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forRoot([]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                ngx_tagger__WEBPACK_IMPORTED_MODULE_36__["NgxTaggerModule"],
                _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_50__["DynamicFormsCoreModule"],
                _ng_dynamic_forms_ui_material__WEBPACK_IMPORTED_MODULE_51__["DynamicFormsMaterialUIModule"],
                _contacts_contacts_module__WEBPACK_IMPORTED_MODULE_53__["ContactsModule"]
            ],
            entryComponents: [
                _dialogs_add_doc_dialog_add_doc_dialog_component__WEBPACK_IMPORTED_MODULE_30__["AddDocDialogComponent"],
                _dialogs_confirm_app_reset_dialog_confirm_app_reset_dialog_component__WEBPACK_IMPORTED_MODULE_20__["ConfirmAppResetDialogComponent"],
                _dialogs_import_progress_dialog_import_progress_dialog_component__WEBPACK_IMPORTED_MODULE_23__["ImportProgressDialogComponent"],
                _dialogs_add_new_node_dialog_add_new_node_dialog_component__WEBPACK_IMPORTED_MODULE_24__["AddNewNodeDialogComponent"],
                _dialogs_confirm_delete_dialog_confirm_delete_dialog_component__WEBPACK_IMPORTED_MODULE_25__["ConfirmDeleteDialogComponent"],
                _dialogs_replace_image_url_dialog_replace_image_url_dialog_component__WEBPACK_IMPORTED_MODULE_26__["ReplaceImageUrlDialogComponent"],
                _dialogs_edit_clip_dialog_edit_clip_dialog_component__WEBPACK_IMPORTED_MODULE_43__["EditClipDialogComponent"],
                _dialogs_test_import_dialog_test_import_dialog_component__WEBPACK_IMPORTED_MODULE_48__["TestImportDialogComponent"]
            ],
            providers: [
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
                    multi: true,
                    useFactory: function (schemaRepo) { return function () { return schemaRepo.init(); }; },
                    deps: [_services_schema_repository_service__WEBPACK_IMPORTED_MODULE_37__["SchemaRepositoryService"]]
                },
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
                    multi: true,
                    useFactory: function (docsRepo) { return function () { return docsRepo.init(); }; },
                    deps: [_services_document_repository_service__WEBPACK_IMPORTED_MODULE_38__["DocumentRepositoryService"]]
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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
    //     // ]Claiming authorship for a work
    // A Claim based on a disagreement over the Authorship of that Work.
    // Claiming author share for a work.
    // A Claim where there is agreement between the Claimants about the Authorship of the Musical Work but disagreement about the Share attributable to each Author. Link?
    // Claiming ownership for a work
    // }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicRadioGroupModel"]({
        id: 'claimType',
        label: 'Type of Claim',
        options: [
            { value: 'authorship', label: 'Authorship for a work' },
            { value: 'authorshare', label: 'Author share for a work' },
            { value: 'ownership', label: 'Ownership for a work' }
        ]
    }),
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

module.exports = "<!-- <pre> {{ data | json }}</pre>  -->\r\n\r\n\r\n<h1>Claim Sheet</h1>\r\nPlease be sure all info is correct before posting to your Claims Folder.\r\n\r\n<section *ngIf=\"!nextStep\" mat-dialog-content >\r\n  <div class=\"mt-4\" fxLayout=\"row wrap\" fxLayoutGap=\"20px\" fxLayoutAlign=\"start stretch\" mat-dialog-content >\r\n\r\n    <mat-card *ngFor=\"let item of data.data; let i = index;\">\r\n      <mat-card-header>\r\n\r\n        <mat-card-title>Claim {{i+1}} / {{data.length}}</mat-card-title>\r\n        <mat-card-subtitle>{{item.name}}</mat-card-subtitle>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        Artist: {{item.artist}}<br>\r\n        Collective: {{item.collective}}<br>\r\n        Owner: {{item.owner}}<br>\r\n      </mat-card-content>\r\n      <mat-card-actions>\r\n        <button mat-mini-fab matTooltip=\"Remove from Claim\" (click)=\"removeClaim(i)\">\r\n          <mat-icon>delete</mat-icon>\r\n        </button>\r\n        <button mat-mini-fab matTooltip=\"Edit\" (click)=\"removeClaim(i)\">\r\n          <mat-icon>edit</mat-icon>\r\n        </button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n\r\n  </div>\r\n\r\n  <div mat-dialog-actions>\r\n    <button mat-button mat-dialog-close=\"Edit Cancelled\">Cancel</button>\r\n    <button mat-button mat-raised-button (click)=\"nextClaimStep()\">Send to my Claims Organiser</button>\r\n  </div>\r\n\r\n</section>\r\n\r\n<section *ngIf=\"nextStep\" class=\"mt-4\"  mat-dialog-content>\r\n\r\n  The folowing claims have been sent to your Claims Folder.\r\n\r\n  <div [@enterLeaveInOut-2]=\"data\" fxLayout=\"row wrap\" fxLayoutGap=\"20px\" fxLayoutAlign=\"start stretch\">\r\n    <mat-card *ngFor=\"let item of data.data; let i = index;\">\r\n      <mat-icon mat-list-icon>library_music</mat-icon>\r\n      <h6 mat-line>{{item.name}}</h6>\r\n      <p mat-line> {{item.artist}} </p>\r\n    </mat-card>\r\n  </div>\r\n\r\n\r\n\r\n  <div mat-dialog-actions>\r\n    <button mat-button mat-dialog-close=\"Edit Cancelled\">Close</button>\r\n    <button mat-button mat-raised-button mat-dialog-close=\"next\" (click)=\"nextClaimStep3(data.section)\">View my Claims\r\n      Organiser</button>\r\n  </div>\r\n\r\n</section>"

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
    SendClaimsComponent.prototype.nextClaimStep3 = function (section) {
        localStorage.setItem(section, JSON.stringify(this.data.data));
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



/***/ }),

/***/ "./src/app/components/layout/layout.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/layout/layout.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container  class=\"app-container\">\r\n\r\n  <mat-sidenav #sidenav mode=\"side\" opened (keydown.escape)=\"sidenav.close()\">\r\n    <mat-nav-list>\r\n\r\n        <mat-list-item (click)=\"gotoPage('/assets', sidenav)\"  >\r\n            <mat-icon mat-list-icon [matMenuTriggerFor]=\"menu\">favorite</mat-icon>\r\n            <a matLine [matMenuTriggerFor]=\"menu\">Assets</a>\r\n            <mat-menu #menu=\"matMenu\">\r\n              <button  (click)=\"gotoPage('/files', sidenav)\"  mat-menu-item>Files</button>\r\n              <button mat-menu-item (click)=\"gotoPage('/recordings', sidenav)\" >Recordings</button>\r\n              <button mat-menu-item (click)=\"gotoPage('/releases', sidenav)\">Releases</button>\r\n              <button mat-menu-item (click)=\"gotoPage('/works', sidenav)\" >Works</button>\r\n            </mat-menu>      \r\n          </mat-list-item>\r\n\r\n\r\n      <mat-list-item *ngFor=\"let link of links\" (click)=\"gotoPage(link.href, sidenav)\">\r\n        <mat-icon mat-list-icon>{{ link.icon }}</mat-icon>\r\n        <a matLine>{{ link.title }}</a>\r\n      </mat-list-item>\r\n\r\n\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n\r\n  <mat-sidenav-content>\r\n\r\n    <mat-toolbar>\r\n      <button mat-icon-button (click)=\"sidenav.toggle()\">\r\n        <mat-icon>menu</mat-icon>\r\n      </button>\r\n\r\n      <span>{{ pageTitle$ | async }}</span>\r\n      <span class=\"spacer\"></span>\r\n\r\n      <button mat-icon-button (click)=\"gotoPage('/settings', sidenav)\" >Settings</button>\r\n      <span class=\"spacer\"></span>\r\n\r\n\r\n      <button mat-icon-button (click)=\"gotoPage('/user', sidenav)\">\r\n        <mat-icon>person</mat-icon>\r\n      </button>\r\n    </mat-toolbar>\r\n\r\n  \r\n\r\n    <div class=\"page-content\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/components/layout/layout.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/layout/layout.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spacer {\n  flex: 1 1 auto; }\n\n.page-content {\n  margin: 1em; }\n\n.app-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvQzpcXFVzZXJzXFxUaW1cXGtlbmRyYWlvLWFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbGF5b3V0XFxsYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFjLEVBQ2Y7O0FBQ0Q7RUFDRSxZQUFXLEVBQ1o7O0FBRUQ7RUFDRyxtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFVBQVM7RUFDVCxRQUFPO0VBQ1AsU0FBUSxFQUNUIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuLnBhZ2UtY29udGVudCB7XHJcbiAgbWFyZ2luOiAxZW07XHJcbn1cclxuXHJcbi5hcHAtY29udGFpbmVyIHtcclxuICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICB0b3A6IDA7XHJcbiAgIGJvdHRvbTogMDtcclxuICAgbGVmdDogMDtcclxuICAgcmlnaHQ6IDA7XHJcbiB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/layout/layout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/layout/layout.component.ts ***!
  \*******************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_page_title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/page-title.service */ "./src/app/services/page-title.service.ts");




var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(router, title) {
        this.router = router;
        this.title = title;
        this.links = [
            {
                href: '/',
                title: 'Dashboard',
                icon: 'dashboard'
            },
            {
                href: '/claims',
                title: 'Claims',
                icon: 'attach_money'
            },
            {
                href: '/contacts',
                title: 'Contacts',
                icon: 'contacts'
            },
            {
                href: '/import',
                title: 'Import',
                icon: 'import_export'
            },
            {
                href: '/upload',
                title: 'Upload',
                icon: 'cloud_upload'
            },
            // {
            //   href: '/diagram',
            //   title: 'Processes',
            //   icon: 'bubble_chart'
            // },
            {
                href: '/adapters',
                title: 'Adapters',
                icon: 'extension'
            },
            {
                href: '/settings',
                title: 'Settings',
                icon: 'settings'
            },
            {
                href: '/docs',
                title: 'Database',
                icon: 'storage'
            },
            {
                href: '/user',
                title: 'Identities',
                icon: 'person'
            }
        ];
    }
    LayoutComponent.prototype.ngOnInit = function () {
        this.pageTitle$ = this.title.pageTitle$;
        //  this.sidenav.open();
    };
    LayoutComponent.prototype.gotoPage = function (href, sidenav) {
        this.router.navigate([href]);
        // sidenav.open();
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/components/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/components/layout/layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_page_title_service__WEBPACK_IMPORTED_MODULE_3__["PageTitleService"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/components/waveform/waveform.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/waveform/waveform.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #waveform></div>\r\n"

/***/ }),

/***/ "./src/app/components/waveform/waveform.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/waveform/waveform.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2F2ZWZvcm0vd2F2ZWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/waveform/waveform.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/waveform/waveform.component.ts ***!
  \***********************************************************/
/*! exports provided: WaveformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaveformComponent", function() { return WaveformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var wavesurfer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wavesurfer.js */ "./node_modules/wavesurfer.js/dist/wavesurfer.min.js");
/* harmony import */ var wavesurfer_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wavesurfer_js__WEBPACK_IMPORTED_MODULE_2__);



// import RegionPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.regions.min.js';
var WaveformComponent = /** @class */ (function () {
    // @Output() clipUpdate = new EventEmitter<any>();
    function WaveformComponent(zone) {
        this.zone = zone;
    }
    WaveformComponent.prototype.ngOnInit = function () {
    };
    WaveformComponent.prototype.playPause = function () {
        this.wavesurfer.playPause();
    };
    WaveformComponent.prototype.isPlaying = function () {
        return this.wavesurfer.isPlaying();
    };
    WaveformComponent.prototype.ngAfterViewInit = function () {
        this.wavesurfer = wavesurfer_js__WEBPACK_IMPORTED_MODULE_2__["create"]({
            container: this.waveform.nativeElement,
            waveColor: 'violet',
            progressColor: 'purple',
            plugins: [
            // RegionPlugin.create({
            //   regions: Object.keys(this.item['regions'] || {}).map(key => {
            //     return {
            //       id: this.item['regions'][key].id,
            //       start: this.item['regions'][key].start,
            //       end: this.item['regions'][key].end,
            //     };
            //   }),
            //   dragSelection: {
            //     slop: 5
            //   }
            // })
            ]
        });
        // this.wavesurfer.on('region-update-end', ({ id, start, end }, _) => {
        //   this.zone.run(() => {
        //     this.clipUpdate.emit({ id, start, end });
        //   });
        // });
        if (this.file) {
            this.wavesurfer.loadBlob(this.file);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WaveformComponent.prototype, "file", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('waveform'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], WaveformComponent.prototype, "waveform", void 0);
    WaveformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-waveform',
            template: __webpack_require__(/*! ./waveform.component.html */ "./src/app/components/waveform/waveform.component.html"),
            styles: [__webpack_require__(/*! ./waveform.component.scss */ "./src/app/components/waveform/waveform.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], WaveformComponent);
    return WaveformComponent;
}());



/***/ }),

/***/ "./src/app/contacts/contacts-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/contacts/contacts-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ContactsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsRoutingModule", function() { return ContactsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./src/app/contacts/index.ts");




var routes = [
    {
        path: '',
        component: _index__WEBPACK_IMPORTED_MODULE_3__["ContactsComponent"],
        children: [
            { path: 'people', component: _index__WEBPACK_IMPORTED_MODULE_3__["PeopleComponent"] },
            { path: 'organisations', component: _index__WEBPACK_IMPORTED_MODULE_3__["OrganisationsComponent"] },
        ]
    }
];
var ContactsRoutingModule = /** @class */ (function () {
    function ContactsRoutingModule() {
    }
    ContactsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ContactsRoutingModule);
    return ContactsRoutingModule;
}());



/***/ }),

/***/ "./src/app/contacts/contacts.component.html":
/*!**************************************************!*\
  !*** ./src/app/contacts/contacts.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n<mat-grid-list cols=\"4\" rowHeight=\"2:1\">\n    <mat-grid-tile [routerLink]=\"['people']\" ><h2>People</h2>\n      <mat-grid-tile-footer>  We found 35 People\n          <button mat-icon-button>\n              <mat-icon>forward</mat-icon>\n            </button> \n      </mat-grid-tile-footer>\n    </mat-grid-tile>\n    <mat-grid-tile [routerLink]=\"['organisations']\"><h2>Organisations</h2>\n      <mat-grid-tile-footer>  We found 27 Organisations\n          <button mat-icon-button>\n              <mat-icon>forward</mat-icon>\n            </button> \n      </mat-grid-tile-footer>\n    </mat-grid-tile>\n  \n\n  </mat-grid-list>\n\n\n\n\n<!-- <mat-toolbar>\n  <span>\n    <button [routerLink]=\"['people']\" mat-raised-button>People</button>\n  </span>\n  <span>\n    <button mat-raised-button [routerLink]=\"['organisations']\">Organisations</button>\n  </span>\n</mat-toolbar> -->\n\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/contacts/contacts.component.scss":
/*!**************************************************!*\
  !*** ./src/app/contacts/contacts.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-grid-tile {\n  background: lightblue;\n  cursor: pointer; }\n  mat-grid-tile:hover {\n    opacity: .8; }\n  .mat-grid-tile .mat-grid-tile-footer {\n  place-content: space-between; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHMvQzpcXFVzZXJzXFxUaW1cXGtlbmRyYWlvLWFwcC9zcmNcXGFwcFxcY29udGFjdHNcXGNvbnRhY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQXFCO0VBQ3JCLGdCQUFlLEVBSWhCO0VBTkg7SUFJQSxZQUFVLEVBQ0w7RUFHSDtFQUNFLDZCQUE0QixFQUMvQiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RzL2NvbnRhY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWdyaWQtdGlsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAmOmhvdmVyIHtcclxub3BhY2l0eTouODtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYXQtZ3JpZC10aWxlIC5tYXQtZ3JpZC10aWxlLWZvb3RlcntcclxuICAgIHBsYWNlLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/contacts/contacts.component.ts":
/*!************************************************!*\
  !*** ./src/app/contacts/contacts.component.ts ***!
  \************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactsComponent = /** @class */ (function () {
    function ContactsComponent() {
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! ./contacts.component.html */ "./src/app/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.scss */ "./src/app/contacts/contacts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/contacts/contacts.module.ts":
/*!*********************************************!*\
  !*** ./src/app/contacts/contacts.module.ts ***!
  \*********************************************/
/*! exports provided: ContactsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsModule", function() { return ContactsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _contacts_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contacts-routing.module */ "./src/app/contacts/contacts-routing.module.ts");
/* harmony import */ var _people_people_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./people/people.component */ "./src/app/contacts/people/people.component.ts");
/* harmony import */ var _organisations_organisations_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organisations/organisations.component */ "./src/app/contacts/organisations/organisations.component.ts");
/* harmony import */ var _contacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_shared/shared.module */ "./src/app/_shared/shared.module.ts");
/* harmony import */ var _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app-material/app-material.module */ "./src/app/app-material/app-material.module.ts");









var ContactsModule = /** @class */ (function () {
    function ContactsModule() {
    }
    ContactsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_people_people_component__WEBPACK_IMPORTED_MODULE_4__["PeopleComponent"], _organisations_organisations_component__WEBPACK_IMPORTED_MODULE_5__["OrganisationsComponent"], _contacts_component__WEBPACK_IMPORTED_MODULE_6__["ContactsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _contacts_routing_module__WEBPACK_IMPORTED_MODULE_3__["ContactsRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_8__["AppMaterialModule"]
            ],
            exports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
        })
    ], ContactsModule);
    return ContactsModule;
}());



/***/ }),

/***/ "./src/app/contacts/index.ts":
/*!***********************************!*\
  !*** ./src/app/contacts/index.ts ***!
  \***********************************/
/*! exports provided: ContactsComponent, OrganisationsComponent, PeopleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contacts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return _contacts_component__WEBPACK_IMPORTED_MODULE_0__["ContactsComponent"]; });

/* harmony import */ var _organisations_organisations_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./organisations/organisations.component */ "./src/app/contacts/organisations/organisations.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrganisationsComponent", function() { return _organisations_organisations_component__WEBPACK_IMPORTED_MODULE_1__["OrganisationsComponent"]; });

/* harmony import */ var _people_people_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./people/people.component */ "./src/app/contacts/people/people.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PeopleComponent", function() { return _people_people_component__WEBPACK_IMPORTED_MODULE_2__["PeopleComponent"]; });






/***/ }),

/***/ "./src/app/contacts/organisations/organisations.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/contacts/organisations/organisations.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Organisations</h2>\n\n<p>\n  organisations works!\n</p>\n"

/***/ }),

/***/ "./src/app/contacts/organisations/organisations.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/contacts/organisations/organisations.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RzL29yZ2FuaXNhdGlvbnMvb3JnYW5pc2F0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/contacts/organisations/organisations.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/contacts/organisations/organisations.component.ts ***!
  \*******************************************************************/
/*! exports provided: OrganisationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationsComponent", function() { return OrganisationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrganisationsComponent = /** @class */ (function () {
    function OrganisationsComponent() {
    }
    OrganisationsComponent.prototype.ngOnInit = function () {
    };
    OrganisationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-organisations',
            template: __webpack_require__(/*! ./organisations.component.html */ "./src/app/contacts/organisations/organisations.component.html"),
            styles: [__webpack_require__(/*! ./organisations.component.scss */ "./src/app/contacts/organisations/organisations.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OrganisationsComponent);
    return OrganisationsComponent;
}());



/***/ }),

/***/ "./src/app/contacts/people/people.component.html":
/*!*******************************************************!*\
  !*** ./src/app/contacts/people/people.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>People</h2>\n\n<p>\n  people works!\n</p>\n"

/***/ }),

/***/ "./src/app/contacts/people/people.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/contacts/people/people.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RzL3Blb3BsZS9wZW9wbGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/contacts/people/people.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/contacts/people/people.component.ts ***!
  \*****************************************************/
/*! exports provided: PeopleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleComponent", function() { return PeopleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PeopleComponent = /** @class */ (function () {
    function PeopleComponent() {
    }
    PeopleComponent.prototype.ngOnInit = function () {
    };
    PeopleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-people',
            template: __webpack_require__(/*! ./people.component.html */ "./src/app/contacts/people/people.component.html"),
            styles: [__webpack_require__(/*! ./people.component.scss */ "./src/app/contacts/people/people.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PeopleComponent);
    return PeopleComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/add-doc-dialog/add-doc-dialog.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/dialogs/add-doc-dialog/add-doc-dialog.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  add-doc-dialog works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/dialogs/add-doc-dialog/add-doc-dialog.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/dialogs/add-doc-dialog/add-doc-dialog.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3MvYWRkLWRvYy1kaWFsb2cvYWRkLWRvYy1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dialogs/add-doc-dialog/add-doc-dialog.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dialogs/add-doc-dialog/add-doc-dialog.component.ts ***!
  \********************************************************************/
/*! exports provided: AddDocDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDocDialogComponent", function() { return AddDocDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddDocDialogComponent = /** @class */ (function () {
    function AddDocDialogComponent() {
    }
    AddDocDialogComponent.prototype.ngOnInit = function () {
    };
    AddDocDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-doc-dialog',
            template: __webpack_require__(/*! ./add-doc-dialog.component.html */ "./src/app/dialogs/add-doc-dialog/add-doc-dialog.component.html"),
            styles: [__webpack_require__(/*! ./add-doc-dialog.component.scss */ "./src/app/dialogs/add-doc-dialog/add-doc-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddDocDialogComponent);
    return AddDocDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/add-new-node-dialog/add-new-node-dialog.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/dialogs/add-new-node-dialog/add-new-node-dialog.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Add {{ data.type }}</h1>\r\n\r\n<div mat-dialog-content>\r\n  <mat-form-field>\r\n    <input #itemName\r\n           autocomplete=\"off\"\r\n           matInput\r\n           required\r\n           [placeholder]=\"labelField.label\"\r\n           cdkFocusInitial>\r\n  </mat-form-field>\r\n</div>\r\n\r\n<div mat-dialog-actions>\r\n  <button mat-button [mat-dialog-close]=\"false\">Cancel</button>\r\n  <button mat-button [disabled]=\"itemName.value.length == 0\"\r\n          (click)=\"closeDialog(itemName.value)\">Add</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dialogs/add-new-node-dialog/add-new-node-dialog.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/dialogs/add-new-node-dialog/add-new-node-dialog.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3MvYWRkLW5ldy1ub2RlLWRpYWxvZy9hZGQtbmV3LW5vZGUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dialogs/add-new-node-dialog/add-new-node-dialog.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/dialogs/add-new-node-dialog/add-new-node-dialog.component.ts ***!
  \******************************************************************************/
/*! exports provided: AddNewNodeDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewNodeDialogComponent", function() { return AddNewNodeDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_schema_repository_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/schema-repository.service */ "./src/app/services/schema-repository.service.ts");




var AddNewNodeDialogComponent = /** @class */ (function () {
    function AddNewNodeDialogComponent(dialogRef, data, schemaService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.schemaService = schemaService;
    }
    AddNewNodeDialogComponent.prototype.ngOnInit = function () {
        this.labelField = this.schemaService.getLabelFieldForSchema(this.data['type']);
    };
    AddNewNodeDialogComponent.prototype.closeDialog = function (labelValue) {
        var _a;
        this.dialogRef.close((_a = {}, _a[this.labelField['id']] = labelValue, _a));
    };
    AddNewNodeDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-new-node-dialog',
            template: __webpack_require__(/*! ./add-new-node-dialog.component.html */ "./src/app/dialogs/add-new-node-dialog/add-new-node-dialog.component.html"),
            styles: [__webpack_require__(/*! ./add-new-node-dialog.component.scss */ "./src/app/dialogs/add-new-node-dialog/add-new-node-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _services_schema_repository_service__WEBPACK_IMPORTED_MODULE_3__["SchemaRepositoryService"]])
    ], AddNewNodeDialogComponent);
    return AddNewNodeDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/confirm-app-reset-dialog/confirm-app-reset-dialog.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/dialogs/confirm-app-reset-dialog/confirm-app-reset-dialog.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Reset?</h1>\r\n<div mat-dialog-content>\r\n  <p>Are you sure you want to reset the app and delete all data?</p>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button [mat-dialog-close]=\"false\">No thanks</button>\r\n  <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Yes, reset</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dialogs/confirm-app-reset-dialog/confirm-app-reset-dialog.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/dialogs/confirm-app-reset-dialog/confirm-app-reset-dialog.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3MvY29uZmlybS1hcHAtcmVzZXQtZGlhbG9nL2NvbmZpcm0tYXBwLXJlc2V0LWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dialogs/confirm-app-reset-dialog/confirm-app-reset-dialog.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/dialogs/confirm-app-reset-dialog/confirm-app-reset-dialog.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ConfirmAppResetDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmAppResetDialogComponent", function() { return ConfirmAppResetDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfirmAppResetDialogComponent = /** @class */ (function () {
    function ConfirmAppResetDialogComponent() {
    }
    ConfirmAppResetDialogComponent.prototype.ngOnInit = function () {
    };
    ConfirmAppResetDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm-app-reset-dialog',
            template: __webpack_require__(/*! ./confirm-app-reset-dialog.component.html */ "./src/app/dialogs/confirm-app-reset-dialog/confirm-app-reset-dialog.component.html"),
            styles: [__webpack_require__(/*! ./confirm-app-reset-dialog.component.scss */ "./src/app/dialogs/confirm-app-reset-dialog/confirm-app-reset-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfirmAppResetDialogComponent);
    return ConfirmAppResetDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/confirm-delete-dialog/confirm-delete-dialog.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/dialogs/confirm-delete-dialog/confirm-delete-dialog.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Delete {{ item.type }}?</h1>\r\n<div mat-dialog-content>\r\n  <p>Are you sure you want to delete {{ item.name }}?</p>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button [mat-dialog-close]=\"false\">No thanks</button>\r\n  <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Yes, delete</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dialogs/confirm-delete-dialog/confirm-delete-dialog.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/dialogs/confirm-delete-dialog/confirm-delete-dialog.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3MvY29uZmlybS1kZWxldGUtZGlhbG9nL2NvbmZpcm0tZGVsZXRlLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dialogs/confirm-delete-dialog/confirm-delete-dialog.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/dialogs/confirm-delete-dialog/confirm-delete-dialog.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ConfirmDeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDeleteDialogComponent", function() { return ConfirmDeleteDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var ConfirmDeleteDialogComponent = /** @class */ (function () {
    function ConfirmDeleteDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.item = data.item;
    }
    ConfirmDeleteDialogComponent.prototype.ngOnInit = function () {
    };
    ConfirmDeleteDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm-delete-dialog',
            template: __webpack_require__(/*! ./confirm-delete-dialog.component.html */ "./src/app/dialogs/confirm-delete-dialog/confirm-delete-dialog.component.html"),
            styles: [__webpack_require__(/*! ./confirm-delete-dialog.component.scss */ "./src/app/dialogs/confirm-delete-dialog/confirm-delete-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], ConfirmDeleteDialogComponent);
    return ConfirmDeleteDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/edit-clip-dialog/edit-clip-dialog.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/dialogs/edit-clip-dialog/edit-clip-dialog.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Edit Clip</h1>\r\n\r\n<div mat-dialog-content>\r\n<form [formGroup]=\"form\" autocomplete=\"off\">\r\n\r\n<mat-form-field>\r\n  <input matInput placeholder=\"Name\" formControlName=\"name\">\r\n</mat-form-field>\r\n\r\n  <mat-form-field>\r\n    <mat-select placeholder=\"Add rights group\" formControlName=\"right\">\r\n      <mat-option *ngFor=\"let group of rightsGroups\" [value]=\"group\">\r\n        {{group}}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n\r\n<mat-form-field>\r\n  <input matInput placeholder=\"Role\" formControlName=\"role\">\r\n</mat-form-field>\r\n<mat-form-field>\r\n  <input matInput placeholder=\"Contributor\" formControlName=\"contributor\">\r\n</mat-form-field>\r\n\r\n\r\n</form>\r\n</div>\r\n\r\n<div mat-dialog-actions>\r\n  <button mat-button [mat-dialog-close]=\"false\">Cancel</button>\r\n  <button mat-button [disabled]=\"form.invalid\"\r\n          (click)=\"submitDialog()\">Save</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dialogs/edit-clip-dialog/edit-clip-dialog.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/dialogs/edit-clip-dialog/edit-clip-dialog.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9ncy9lZGl0LWNsaXAtZGlhbG9nL0M6XFxVc2Vyc1xcVGltXFxrZW5kcmFpby1hcHAvc3JjXFxhcHBcXGRpYWxvZ3NcXGVkaXQtY2xpcC1kaWFsb2dcXGVkaXQtY2xpcC1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFXLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9kaWFsb2dzL2VkaXQtY2xpcC1kaWFsb2cvZWRpdC1jbGlwLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/dialogs/edit-clip-dialog/edit-clip-dialog.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/dialogs/edit-clip-dialog/edit-clip-dialog.component.ts ***!
  \************************************************************************/
/*! exports provided: EditClipDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditClipDialogComponent", function() { return EditClipDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var EditClipDialogComponent = /** @class */ (function () {
    function EditClipDialogComponent(fb, dialogRef, data) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.data = data;
        this.rightsGroups = [
            'Composition',
            'Recording',
            'Performance',
            'Design'
        ];
    }
    EditClipDialogComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            name: [''],
            right: [''],
            role: [''],
            contributor: [''],
            start: [0],
            end: [100]
        });
        this.form.patchValue(this.data.clip);
    };
    EditClipDialogComponent.prototype.submitDialog = function () {
        this.dialogRef.close(this.form.getRawValue());
    };
    EditClipDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-clip-dialog',
            template: __webpack_require__(/*! ./edit-clip-dialog.component.html */ "./src/app/dialogs/edit-clip-dialog/edit-clip-dialog.component.html"),
            styles: [__webpack_require__(/*! ./edit-clip-dialog.component.scss */ "./src/app/dialogs/edit-clip-dialog/edit-clip-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], EditClipDialogComponent);
    return EditClipDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/import-progress-dialog/import-progress-dialog.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/dialogs/import-progress-dialog/import-progress-dialog.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Importing...</h1>\r\n<mat-progress-bar mode=\"determinate\" [value]=\"progress\"></mat-progress-bar>\r\n"

/***/ }),

/***/ "./src/app/dialogs/import-progress-dialog/import-progress-dialog.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/dialogs/import-progress-dialog/import-progress-dialog.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3MvaW1wb3J0LXByb2dyZXNzLWRpYWxvZy9pbXBvcnQtcHJvZ3Jlc3MtZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dialogs/import-progress-dialog/import-progress-dialog.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/dialogs/import-progress-dialog/import-progress-dialog.component.ts ***!
  \************************************************************************************/
/*! exports provided: ImportProgressDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportProgressDialogComponent", function() { return ImportProgressDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var x2js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! x2js */ "./node_modules/x2js/x2js.js");
/* harmony import */ var x2js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(x2js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_document_repository_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/document-repository.service */ "./src/app/services/document-repository.service.ts");







var ImportProgressDialogComponent = /** @class */ (function () {
    function ImportProgressDialogComponent(dialogRef, data, docsRepo) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.docsRepo = docsRepo;
        this.progress = 0;
    }
    ImportProgressDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        var content = this.data.content;
        var defaultConfig = {
            enableToStringFunc: false
        };
        var config = {};
        var x2js = new x2js__WEBPACK_IMPORTED_MODULE_5__(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, defaultConfig, config));
        var _r = x2js.xml2js(content);
        console.log(_r);
        if (_r['RecordingInformationNotification'].ProjectList.Project.ProjectName) {
            var data = {
                name: _r['RecordingInformationNotification'].ProjectList.Project.ProjectName,
                json_data: _r
            };
            this.docsRepo.addNew('Project', data).subscribe(function () {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(10).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(100)).subscribe(function () { return _this.progress += 1; }, function (err) { return console.log(err); }, function () { return _this.dialogRef.close(); });
            });
        }
        else {
            this.dialogRef.close();
        }
    };
    ImportProgressDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-import-progress-dialog',
            template: __webpack_require__(/*! ./import-progress-dialog.component.html */ "./src/app/dialogs/import-progress-dialog/import-progress-dialog.component.html"),
            styles: [__webpack_require__(/*! ./import-progress-dialog.component.scss */ "./src/app/dialogs/import-progress-dialog/import-progress-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _services_document_repository_service__WEBPACK_IMPORTED_MODULE_6__["DocumentRepositoryService"]])
    ], ImportProgressDialogComponent);
    return ImportProgressDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/replace-image-url-dialog/replace-image-url-dialog.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/dialogs/replace-image-url-dialog/replace-image-url-dialog.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Enter image URL...</h1>\r\n\r\n<div mat-dialog-content>\r\n  <mat-form-field>\r\n    <input #itemName autocomplete=\"off\" matInput required placeholder=\"URL\" cdkFocusInitial>\r\n  </mat-form-field>\r\n</div>\r\n\r\n<div mat-dialog-actions>\r\n  <button mat-button [mat-dialog-close]=\"false\">Cancel</button>\r\n  <button mat-button [disabled]=\"itemName.value.length == 0\"\r\n          [mat-dialog-close]=\"itemName.value\">Add</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dialogs/replace-image-url-dialog/replace-image-url-dialog.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/dialogs/replace-image-url-dialog/replace-image-url-dialog.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3MvcmVwbGFjZS1pbWFnZS11cmwtZGlhbG9nL3JlcGxhY2UtaW1hZ2UtdXJsLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dialogs/replace-image-url-dialog/replace-image-url-dialog.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/dialogs/replace-image-url-dialog/replace-image-url-dialog.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ReplaceImageUrlDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaceImageUrlDialogComponent", function() { return ReplaceImageUrlDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReplaceImageUrlDialogComponent = /** @class */ (function () {
    function ReplaceImageUrlDialogComponent() {
    }
    ReplaceImageUrlDialogComponent.prototype.ngOnInit = function () {
    };
    ReplaceImageUrlDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-replace-image-url-dialog',
            template: __webpack_require__(/*! ./replace-image-url-dialog.component.html */ "./src/app/dialogs/replace-image-url-dialog/replace-image-url-dialog.component.html"),
            styles: [__webpack_require__(/*! ./replace-image-url-dialog.component.scss */ "./src/app/dialogs/replace-image-url-dialog/replace-image-url-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReplaceImageUrlDialogComponent);
    return ReplaceImageUrlDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/test-import-dialog/test-import-dialog.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/dialogs/test-import-dialog/test-import-dialog.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Importing {{ importType }}...</h1>\r\n<mat-progress-bar mode=\"determinate\" [value]=\"progress\"></mat-progress-bar>\r\n"

/***/ }),

/***/ "./src/app/dialogs/test-import-dialog/test-import-dialog.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/dialogs/test-import-dialog/test-import-dialog.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3MvdGVzdC1pbXBvcnQtZGlhbG9nL3Rlc3QtaW1wb3J0LWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dialogs/test-import-dialog/test-import-dialog.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/dialogs/test-import-dialog/test-import-dialog.component.ts ***!
  \****************************************************************************/
/*! exports provided: TestImportDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestImportDialogComponent", function() { return TestImportDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_document_repository_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/document-repository.service */ "./src/app/services/document-repository.service.ts");






var TestImportDialogComponent = /** @class */ (function () {
    function TestImportDialogComponent(dialogRef, data, docsRepo) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.docsRepo = docsRepo;
        this.progress = 0;
        this.importType = '';
    }
    TestImportDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _a = this.data.content, type = _a.type, records = _a.records;
        this.importType = type;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(records.map(function (item) { return _this.docsRepo.addNew(type, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ type: type }, item)); }))
            .subscribe(function () {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(10).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(100)).subscribe(function () { return _this.progress += 1; }, function (err) { return console.log(err); }, function () { return _this.dialogRef.close(); });
        });
    };
    TestImportDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test-import-dialog',
            template: __webpack_require__(/*! ./test-import-dialog.component.html */ "./src/app/dialogs/test-import-dialog/test-import-dialog.component.html"),
            styles: [__webpack_require__(/*! ./test-import-dialog.component.scss */ "./src/app/dialogs/test-import-dialog/test-import-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _services_document_repository_service__WEBPACK_IMPORTED_MODULE_5__["DocumentRepositoryService"]])
    ], TestImportDialogComponent);
    return TestImportDialogComponent;
}());



/***/ }),

/***/ "./src/app/directives/doughnut-chart.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/directives/doughnut-chart.directive.ts ***!
  \********************************************************/
/*! exports provided: DoughnutChartDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoughnutChartDirective", function() { return DoughnutChartDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/src/chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var DoughnutChartDirective = /** @class */ (function () {
    function DoughnutChartDirective(el) {
        this.el = el;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    DoughnutChartDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.chart = new chart_js__WEBPACK_IMPORTED_MODULE_2__(this.el.nativeElement, {
            type: 'doughnut',
            data: {
                datasets: [{
                        data: [],
                        backgroundColor: ['#a2708c', '#d5e26c', '#b95ea9', '#adcbe8', 'green', 'purple']
                    }],
                labels: []
            },
            options: {
                animation: {
                    animateRotate: false
                }
            }
        });
        this.data$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe(function (d) {
            _this.chart.data.datasets[0].data = d.datasets[0].data;
            _this.chart.data.labels = d.labels;
            _this.chart.update();
        });
    };
    DoughnutChartDirective.prototype.ngOnChanges = function (changes) {
    };
    DoughnutChartDirective.prototype.chartData = function (clips) {
        return {
            datasets: [{
                    data: clips.map(function (_a) {
                        var start = _a.start, end = _a.end;
                        return end - start;
                    }),
                    backgroundColor: ['red', 'yellow', 'pink', 'blue', 'green', 'purple']
                }],
            labels: clips.map(function (_a) {
                var name = _a.name;
                return name;
            })
        };
    };
    DoughnutChartDirective.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appDoughnutChart'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DoughnutChartDirective.prototype, "data$", void 0);
    DoughnutChartDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appDoughnutChart]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], DoughnutChartDirective);
    return DoughnutChartDirective;
}());



/***/ }),

/***/ "./src/app/directives/swagger-ui.directive.ts":
/*!****************************************************!*\
  !*** ./src/app/directives/swagger-ui.directive.ts ***!
  \****************************************************/
/*! exports provided: SwaggerUiDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwaggerUiDirective", function() { return SwaggerUiDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var swagger_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swagger-ui */ "./node_modules/swagger-ui/dist/swagger-ui.js");
/* harmony import */ var swagger_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swagger_ui__WEBPACK_IMPORTED_MODULE_2__);



var SwaggerUiDirective = /** @class */ (function () {
    function SwaggerUiDirective(el) {
        this.el = el;
    }
    SwaggerUiDirective.prototype.ngAfterViewInit = function () {
        swagger_ui__WEBPACK_IMPORTED_MODULE_2___default()({
            domNode: this.el.nativeElement,
            url: this.url
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appSwaggerUi'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SwaggerUiDirective.prototype, "url", void 0);
    SwaggerUiDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appSwaggerUi]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SwaggerUiDirective);
    return SwaggerUiDirective;
}());



/***/ }),

/***/ "./src/app/directives/track-clip.directive.ts":
/*!****************************************************!*\
  !*** ./src/app/directives/track-clip.directive.ts ***!
  \****************************************************/
/*! exports provided: TrackClipDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackClipDirective", function() { return TrackClipDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var interactjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! interactjs */ "./node_modules/interactjs/dist/interact.js");
/* harmony import */ var interactjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(interactjs__WEBPACK_IMPORTED_MODULE_2__);



var TrackClipDirective = /** @class */ (function () {
    function TrackClipDirective(el) {
        this.el = el;
        this._start = 0;
        this._end = 0;
        this.clipUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    TrackClipDirective.prototype.ngOnChanges = function (changes) {
        // console.log({ changes });
        var _a = changes.clip.currentValue, start = _a.start, end = _a.end;
        this.setStart(start);
        this.setEnd(end);
    };
    TrackClipDirective.prototype.setStart = function (startPercent) {
        this._start = startPercent;
    };
    TrackClipDirective.prototype.setEnd = function (endPercent) {
        this._end = (100 - endPercent);
    };
    TrackClipDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        interactjs__WEBPACK_IMPORTED_MODULE_2__(this.el.nativeElement)
            .draggable({
            axis: 'x',
            restrict: {
                restriction: 'parent',
                elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
            },
            onmove: function (event) {
                var dx = event.dx;
                var node = _this.el.nativeElement;
                var clientWidth = node.parentElement.clientWidth;
                _this._start += (dx / clientWidth) * 100;
                _this._end -= (dx / clientWidth) * 100;
            },
            onend: function (event) {
                _this.sendValue(event);
            }
        })
            .resizable({
            edges: { top: false, bottom: false, left: true, right: true },
            restrictEdges: { outer: 'parent' },
            restrictSize: {
                min: { width: 50, height: 19 },
            },
            onmove: function (event) {
                var w = event.rect.width;
                var dx = event.deltaRect.left;
                var node = _this.el.nativeElement;
                var clientWidth = node.parentElement.clientWidth;
                _this._start += (dx / clientWidth) * 100;
                _this.setEnd(_this._start + (w / clientWidth) * 100);
            },
            onend: function (event) {
                _this.sendValue(event);
            }
        });
    };
    TrackClipDirective.prototype.sendValue = function (event) {
        this.clipUpdate.emit({
            start: Math.max(this._start, 0),
            end: 100 - this._end
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appTrackClip'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TrackClipDirective.prototype, "clip", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.margin-left.%'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TrackClipDirective.prototype, "_start", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.margin-right.%'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TrackClipDirective.prototype, "_end", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TrackClipDirective.prototype, "clipUpdate", void 0);
    TrackClipDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appTrackClip]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], TrackClipDirective);
    return TrackClipDirective;
}());



/***/ }),

/***/ "./src/app/form-controls/audio-input-control/audio-input-control.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/form-controls/audio-input-control/audio-input-control.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"file\" #filePicker (change)=\"onFileChange($event)\">\r\n<button class=\"mb-1\" type=\"button\" mat-stroked-button (click)=\"filePicker.click()\">\r\n  {{ file ? 'Replace' : 'Add' }} file\r\n</button>\r\n\r\n<button type=\"button\" mat-icon-button (click)=\"playPause()\">\r\n  <mat-icon>{{ isPlaying ? 'pause' : 'play_arrow' }}</mat-icon>\r\n</button>\r\n\r\n<div class=\"audio-wrapper\" *ngIf=\"!!file\">\r\n  <app-waveform #player [file]=\"file\"></app-waveform>\r\n</div>\r\n\r\n<ul>\r\n  <li *ngFor=\"let d of clipControl.value; index as i\">\r\n    <div class=\"dragging-container\" [appTrackClip]=\"d\" (clipUpdate)=\"onClipUpdate(i, $event)\">\r\n      {{ d.name }}\r\n      <div class=\"clip-buttons\">\r\n        <button (click)=\"editClip(i)\" type=\"button\" mat-icon-button>\r\n          <mat-icon aria-label=\"Edit clip\">settings</mat-icon>\r\n        </button>\r\n        <button (click)=\"removeClip(i)\" type=\"button\" mat-icon-button>\r\n          <mat-icon aria-label=\"Remove clip\">delete</mat-icon>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </li>\r\n</ul>\r\n\r\n<br>\r\n<mat-form-field>\r\n<input matInput type=\"text\" (keydown.enter)=\"add(name.value); name.value = ''\" #name placeholder=\"Add clip\">\r\n<mat-icon matSuffix (click)=\"add(name.value); name.value = ''\">add_box</mat-icon>\r\n</mat-form-field>\r\n\r\n<div style=\"display: block;\">\r\n  <canvas [appDoughnutChart]=\"clipValues\"></canvas>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/form-controls/audio-input-control/audio-input-control.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/form-controls/audio-input-control/audio-input-control.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type='file'] {\n  display: none; }\n\nul {\n  list-style: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  margin: 0;\n  padding: 0; }\n\n.audio-wrapper {\n  margin-bottom: 0.3rem; }\n\nli {\n  background-color: #efefef;\n  margin-bottom: 0.3em; }\n\n.clip-buttons {\n  background-color: #ccf;\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding-right: 12px; }\n\n.dragging-container {\n  position: relative;\n  display: block;\n  background-color: #ccf;\n  padding-left: 12px;\n  overflow: hidden;\n  height: 2.5em;\n  line-height: 2.5em;\n  touch-action: none; }\n\n.dragging-container button {\n    width: 20px;\n    height: 20px; }\n\n.dragging-container button mat-icon {\n      font-size: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS1jb250cm9scy9hdWRpby1pbnB1dC1jb250cm9sL0M6XFxVc2Vyc1xcVGltXFxrZW5kcmFpby1hcHAvc3JjXFxhcHBcXGZvcm0tY29udHJvbHNcXGF1ZGlvLWlucHV0LWNvbnRyb2xcXGF1ZGlvLWlucHV0LWNvbnRyb2wuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFhLEVBQ2Q7O0FBRUQ7RUFDRyxpQkFBZ0I7RUFDaEIsMEJBQWlCO0tBQWpCLHVCQUFpQjtNQUFqQixzQkFBaUI7VUFBakIsa0JBQWlCO0VBQ2pCLFVBQVM7RUFDVCxXQUFVLEVBQ1o7O0FBRUQ7RUFDRSxzQkFBcUIsRUFDdEI7O0FBRUQ7RUFDRSwwQkFBeUI7RUFDekIscUJBQW9CLEVBQ3JCOztBQUVEO0VBQ0UsdUJBQXNCO0VBQ3RCLG1CQUFrQjtFQUNsQixTQUFRO0VBQ1IsT0FBTTtFQUNOLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsdUJBQXNCO0VBQ3RCLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsY0FBYTtFQUNiLG1CQUFrQjtFQUdsQixtQkFBa0IsRUFVbkI7O0FBcEJEO0lBYUksWUFBVztJQUNYLGFBQVksRUFLYjs7QUFuQkg7TUFpQk0sZ0JBQWUsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9mb3JtLWNvbnRyb2xzL2F1ZGlvLWlucHV0LWNvbnRyb2wvYXVkaW8taW5wdXQtY29udHJvbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9J2ZpbGUnXSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxudWwge1xyXG4gICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgbWFyZ2luOiAwO1xyXG4gICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uYXVkaW8td3JhcHBlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC4zcmVtO1xyXG59XHJcblxyXG5saSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcclxuICBtYXJnaW4tYm90dG9tOiAwLjNlbTtcclxufVxyXG5cclxuLmNsaXAtYnV0dG9ucyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjZjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbn1cclxuXHJcbi5kcmFnZ2luZy1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NmO1xyXG4gIHBhZGRpbmctbGVmdDogMTJweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGhlaWdodDogMi41ZW07XHJcbiAgbGluZS1oZWlnaHQ6IDIuNWVtO1xyXG5cclxuICAtbXMtdG91Y2gtYWN0aW9uOiBub25lO1xyXG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG5cclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/form-controls/audio-input-control/audio-input-control.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/form-controls/audio-input-control/audio-input-control.component.ts ***!
  \************************************************************************************/
/*! exports provided: AudioInputControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioInputControlComponent", function() { return AudioInputControlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var blob_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! blob-util */ "./node_modules/blob-util/dist/blob-util.es.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialogs_edit_clip_dialog_edit_clip_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialogs/edit-clip-dialog/edit-clip-dialog.component */ "./src/app/dialogs/edit-clip-dialog/edit-clip-dialog.component.ts");
/* harmony import */ var _dialogs_confirm_delete_dialog_confirm_delete_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dialogs/confirm-delete-dialog/confirm-delete-dialog.component */ "./src/app/dialogs/confirm-delete-dialog/confirm-delete-dialog.component.ts");
/* harmony import */ var _components_waveform_waveform_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/waveform/waveform.component */ "./src/app/components/waveform/waveform.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");










var AudioInputControlComponent = /** @class */ (function () {
    function AudioInputControlComponent(dialog) {
        this.dialog = dialog;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.data = [];
        this.isPlaying = false;
        this._onValueChanged = function (v) { };
    }
    AudioInputControlComponent_1 = AudioInputControlComponent;
    AudioInputControlComponent.prototype.ngOnInit = function () {
        this.clipValues = this.clipControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(this.clipControl.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(this.chartData));
    };
    AudioInputControlComponent.prototype.chartData = function (clips) {
        return {
            datasets: [{
                    data: clips.map(function (_a) {
                        var start = _a.start, end = _a.end;
                        return end - start;
                    }),
                    backgroundColor: ['red', 'yellow', 'pink', 'blue', 'green', 'purple']
                }],
            labels: clips.map(function (_a) {
                var name = _a.name;
                return name;
            })
        };
    };
    AudioInputControlComponent.prototype.playPause = function () {
        if (this.player) {
            this.player.playPause();
            this.isPlaying = this.player.isPlaying();
        }
    };
    AudioInputControlComponent.prototype.valueChanged = function (file) {
        var _this = this;
        this.file = file;
        Object(blob_util__WEBPACK_IMPORTED_MODULE_4__["blobToDataURL"])(file).then(function (dataUrl) { return _this.src = dataUrl; });
        this._onValueChanged(file);
    };
    AudioInputControlComponent.prototype.onFileChange = function (event) {
        var file = event.target.files[0];
        if (file) {
            this.valueChanged(file);
        }
    };
    AudioInputControlComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
    };
    AudioInputControlComponent.prototype.registerOnChange = function (fn) {
        this._onValueChanged = fn;
    };
    AudioInputControlComponent.prototype.registerOnTouched = function (fn) {
    };
    AudioInputControlComponent.prototype.setDisabledState = function (isDisabled) {
    };
    AudioInputControlComponent.prototype.writeValue = function (file) {
        var _this = this;
        this.file = file;
        if (file) {
            Object(blob_util__WEBPACK_IMPORTED_MODULE_4__["blobToDataURL"])(file).then(function (dataUrl) { return _this.src = dataUrl; });
        }
    };
    AudioInputControlComponent.prototype.add = function (name) {
        if (name.trim() !== '') {
            this.data.push({ name: name, start: 0, end: 100 });
            var clips = this.clipControl.value;
            clips.push({ name: name, start: 0, end: 100 });
            this.clipControl.setValue(clips);
        }
    };
    AudioInputControlComponent.prototype.onClipUpdate = function (i, _a) {
        var start = _a.start, end = _a.end;
        var clips = this.clipControl.value;
        clips[i] = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, clips[i], { start: start, end: end });
        this.clipControl.setValue(clips);
    };
    AudioInputControlComponent.prototype.removeClip = function (i) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_confirm_delete_dialog_confirm_delete_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmDeleteDialogComponent"], {
            data: {
                item: {
                    type: 'Clip',
                    name: this.clipControl.value[i].name
                }
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                var clips = _this.clipControl.value;
                clips.splice(i, 1);
                _this.clipControl.setValue(clips);
            }
        });
    };
    AudioInputControlComponent.prototype.editClip = function (i) {
        var _this = this;
        var clip = this.clipControl.value[i];
        var dialogRef = this.dialog.open(_dialogs_edit_clip_dialog_edit_clip_dialog_component__WEBPACK_IMPORTED_MODULE_6__["EditClipDialogComponent"], {
            data: {
                clip: clip
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                var clips = _this.clipControl.value;
                clips[i] = result;
                _this.clipControl.setValue(clips);
            }
        });
    };
    var AudioInputControlComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AudioInputControlComponent.prototype, "placeholder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"])
    ], AudioInputControlComponent.prototype, "clipControl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('player'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _components_waveform_waveform_component__WEBPACK_IMPORTED_MODULE_8__["WaveformComponent"])
    ], AudioInputControlComponent.prototype, "player", void 0);
    AudioInputControlComponent = AudioInputControlComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-audio-input-control',
            template: __webpack_require__(/*! ./audio-input-control.component.html */ "./src/app/form-controls/audio-input-control/audio-input-control.component.html"),
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: AudioInputControlComponent_1,
                    multi: true
                }
            ],
            styles: [__webpack_require__(/*! ./audio-input-control.component.scss */ "./src/app/form-controls/audio-input-control/audio-input-control.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], AudioInputControlComponent);
    return AudioInputControlComponent;
}());



/***/ }),

/***/ "./src/app/form-controls/image-input-control/image-input-control.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/form-controls/image-input-control/image-input-control.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"file\" #filePicker (change)=\"onFileChange($event)\">\r\n<button class=\"mb-1\" type=\"button\" mat-stroked-button (click)=\"filePicker.click()\">Replace file</button>\r\n\r\n<ngx-tagger class=\"mt-1\" *ngIf=\"src\" [formControl]=\"tagControl\">\r\n  <img class=\"image-preview\" ngxTagBase [src]=\"src\" alt=\"tag image\">\r\n</ngx-tagger>\r\n\r\n<div *ngIf=\"src\">\r\n  <div *ngFor=\"let tag of tagControl.value; index as i\" class=\"tag-editor-text\">\r\n    <div class=\"tag-preview-wrapper\">\r\n      <img class=\"tag-preview\" [ngxTagPreview]=\"tag\" [src]=\"src\" alt=\"Tag preview\">\r\n    </div>\r\n\r\n    <mat-form-field class=\"text-input\">\r\n      <input matInput [placeholder]=\"'Name'\" [(ngModel)]=\"tagControl.value[i].data\">\r\n    </mat-form-field>\r\n\r\n    <div>\r\n      <a mat-icon-button (click)=\"deleteTag(i)\">\r\n        <mat-icon>cancel</mat-icon>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/form-controls/image-input-control/image-input-control.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/form-controls/image-input-control/image-input-control.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type='file'] {\n  display: none; }\n\n.image-preview {\n  max-width: 100%; }\n\n.tag-preview {\n  max-width: 200px;\n  background-color: #eeeeee; }\n\n.tag-editor-text {\n  display: flex;\n  align-items: center; }\n\n.text-input {\n  flex: 1; }\n\n.tag-preview-wrapper {\n  overflow: hidden;\n  background: #f5f5f5;\n  margin-right: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS1jb250cm9scy9pbWFnZS1pbnB1dC1jb250cm9sL0M6XFxVc2Vyc1xcVGltXFxrZW5kcmFpby1hcHAvc3JjXFxhcHBcXGZvcm0tY29udHJvbHNcXGltYWdlLWlucHV0LWNvbnRyb2xcXGltYWdlLWlucHV0LWNvbnRyb2wuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFhLEVBQ2Q7O0FBQ0Q7RUFDRSxnQkFBZSxFQUNoQjs7QUFFRDtFQUNFLGlCQUFnQjtFQUNoQiwwQkFBeUIsRUFDMUI7O0FBRUQ7RUFDRSxjQUFhO0VBQ2Isb0JBQW1CLEVBQ3BCOztBQUNEO0VBQ0UsUUFBTyxFQUNSOztBQUNEO0VBQ0UsaUJBQWdCO0VBQ2hCLG9CQUFtQjtFQUNuQixrQkFBaUIsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9mb3JtLWNvbnRyb2xzL2ltYWdlLWlucHV0LWNvbnRyb2wvaW1hZ2UtaW5wdXQtY29udHJvbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9J2ZpbGUnXSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uaW1hZ2UtcHJldmlldyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udGFnLXByZXZpZXcge1xyXG4gIG1heC13aWR0aDogMjAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcclxufVxyXG5cclxuLnRhZy1lZGl0b3ItdGV4dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi50ZXh0LWlucHV0IHtcclxuICBmbGV4OiAxO1xyXG59XHJcbi50YWctcHJldmlldy13cmFwcGVyIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/form-controls/image-input-control/image-input-control.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/form-controls/image-input-control/image-input-control.component.ts ***!
  \************************************************************************************/
/*! exports provided: ImageInputControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageInputControlComponent", function() { return ImageInputControlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var blob_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! blob-util */ "./node_modules/blob-util/dist/blob-util.es.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var ImageInputControlComponent = /** @class */ (function () {
    function ImageInputControlComponent() {
        var _this = this;
        this.updateTags = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.tags = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([]);
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._onValueChanged = function (v) { };
        this.valueChanged = function (file) {
            Object(blob_util__WEBPACK_IMPORTED_MODULE_3__["blobToDataURL"])(file).then(function (dataUrl) { return _this.src = dataUrl; });
            _this._onValueChanged(file);
        };
        this.tags.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
            .subscribe(function (tags) { return _this.updateTags.emit(tags); });
    }
    ImageInputControlComponent_1 = ImageInputControlComponent;
    ImageInputControlComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
    };
    ImageInputControlComponent.prototype.deleteTag = function (i) {
        var newTags = this.tagControl.value.splice(0, i).concat(this.tagControl.value.splice(i + 1));
        this.tagControl.setValue(newTags);
    };
    ImageInputControlComponent.prototype.onFileChange = function (event) {
        var file = event.target.files[0];
        if (file) {
            this.valueChanged(file);
        }
    };
    ImageInputControlComponent.prototype.ngOnInit = function () {
    };
    ImageInputControlComponent.prototype.registerOnChange = function (fn) {
        this._onValueChanged = fn;
    };
    ImageInputControlComponent.prototype.registerOnTouched = function (fn) {
    };
    ImageInputControlComponent.prototype.setDisabledState = function (isDisabled) {
    };
    ImageInputControlComponent.prototype.writeValue = function (file) {
        var _this = this;
        this.file = file;
        if (file) {
            Object(blob_util__WEBPACK_IMPORTED_MODULE_3__["blobToDataURL"])(file).then(function (dataUrl) { return _this.src = dataUrl; });
        }
    };
    var ImageInputControlComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ImageInputControlComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ImageInputControlComponent.prototype, "placeholder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ImageInputControlComponent.prototype, "updateTags", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"])
    ], ImageInputControlComponent.prototype, "tagControl", void 0);
    ImageInputControlComponent = ImageInputControlComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image-input-control',
            template: __webpack_require__(/*! ./image-input-control.component.html */ "./src/app/form-controls/image-input-control/image-input-control.component.html"),
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: ImageInputControlComponent_1,
                    multi: true
                }
            ],
            styles: [__webpack_require__(/*! ./image-input-control.component.scss */ "./src/app/form-controls/image-input-control/image-input-control.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ImageInputControlComponent);
    return ImageInputControlComponent;
}());



/***/ }),

/***/ "./src/app/form-controls/legacy-data-form-control/legacy-data-form-control.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/form-controls/legacy-data-form-control/legacy-data-form-control.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<pre>{{ doc | json }}</pre>\r\n"

/***/ }),

/***/ "./src/app/form-controls/legacy-data-form-control/legacy-data-form-control.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/form-controls/legacy-data-form-control/legacy-data-form-control.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tY29udHJvbHMvbGVnYWN5LWRhdGEtZm9ybS1jb250cm9sL2xlZ2FjeS1kYXRhLWZvcm0tY29udHJvbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/form-controls/legacy-data-form-control/legacy-data-form-control.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/form-controls/legacy-data-form-control/legacy-data-form-control.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: LegacyDataFormControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegacyDataFormControlComponent", function() { return LegacyDataFormControlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var LegacyDataFormControlComponent = /** @class */ (function () {
    function LegacyDataFormControlComponent() {
    }
    LegacyDataFormControlComponent_1 = LegacyDataFormControlComponent;
    LegacyDataFormControlComponent.prototype.ngOnInit = function () {
    };
    LegacyDataFormControlComponent.prototype.registerOnChange = function (fn) {
    };
    LegacyDataFormControlComponent.prototype.registerOnTouched = function (fn) {
    };
    LegacyDataFormControlComponent.prototype.setDisabledState = function (isDisabled) {
    };
    LegacyDataFormControlComponent.prototype.writeValue = function (obj) {
        this.value = obj;
    };
    var LegacyDataFormControlComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LegacyDataFormControlComponent.prototype, "doc", void 0);
    LegacyDataFormControlComponent = LegacyDataFormControlComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-legacy-data-form-control',
            template: __webpack_require__(/*! ./legacy-data-form-control.component.html */ "./src/app/form-controls/legacy-data-form-control/legacy-data-form-control.component.html"),
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: LegacyDataFormControlComponent_1,
                    multi: true
                }
            ],
            styles: [__webpack_require__(/*! ./legacy-data-form-control.component.scss */ "./src/app/form-controls/legacy-data-form-control/legacy-data-form-control.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LegacyDataFormControlComponent);
    return LegacyDataFormControlComponent;
}());



/***/ }),

/***/ "./src/app/form-controls/text-input-form-control/text-input-form-control.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/form-controls/text-input-form-control/text-input-form-control.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\r\n  <input matInput [placeholder]=\"placeholder\" [formControl]=\"formControl\">\r\n</mat-form-field>\r\n"

/***/ }),

/***/ "./src/app/form-controls/text-input-form-control/text-input-form-control.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/form-controls/text-input-form-control/text-input-form-control.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS1jb250cm9scy90ZXh0LWlucHV0LWZvcm0tY29udHJvbC9DOlxcVXNlcnNcXFRpbVxca2VuZHJhaW8tYXBwL3NyY1xcYXBwXFxmb3JtLWNvbnRyb2xzXFx0ZXh0LWlucHV0LWZvcm0tY29udHJvbFxcdGV4dC1pbnB1dC1mb3JtLWNvbnRyb2wuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFXLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9mb3JtLWNvbnRyb2xzL3RleHQtaW5wdXQtZm9ybS1jb250cm9sL3RleHQtaW5wdXQtZm9ybS1jb250cm9sLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/form-controls/text-input-form-control/text-input-form-control.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/form-controls/text-input-form-control/text-input-form-control.component.ts ***!
  \********************************************************************************************/
/*! exports provided: TextInputFormControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextInputFormControlComponent", function() { return TextInputFormControlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var TextInputFormControlComponent = /** @class */ (function () {
    function TextInputFormControlComponent() {
        var _this = this;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this._changed = function (v) { };
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.formControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
            .subscribe(function (x) { return _this._changed(x); });
    }
    TextInputFormControlComponent_1 = TextInputFormControlComponent;
    TextInputFormControlComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
    };
    TextInputFormControlComponent.prototype.registerOnChange = function (fn) {
        this._changed = fn;
    };
    TextInputFormControlComponent.prototype.registerOnTouched = function (fn) {
    };
    TextInputFormControlComponent.prototype.setDisabledState = function (isDisabled) {
    };
    TextInputFormControlComponent.prototype.writeValue = function (obj) {
        this.formControl.patchValue(obj);
    };
    var TextInputFormControlComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TextInputFormControlComponent.prototype, "placeholder", void 0);
    TextInputFormControlComponent = TextInputFormControlComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-text-input-form-control',
            template: __webpack_require__(/*! ./text-input-form-control.component.html */ "./src/app/form-controls/text-input-form-control/text-input-form-control.component.html"),
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: TextInputFormControlComponent_1,
                    multi: true
                }
            ],
            styles: [__webpack_require__(/*! ./text-input-form-control.component.scss */ "./src/app/form-controls/text-input-form-control/text-input-form-control.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TextInputFormControlComponent);
    return TextInputFormControlComponent;
}());



/***/ }),

/***/ "./src/app/forms/doc-edit-form/doc-edit-form.component.html":
/*!******************************************************************!*\
  !*** ./src/app/forms/doc-edit-form/doc-edit-form.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #ngForm=\"ngForm\" *ngIf=\"formGroup\" [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmit()\" autocomplete=\"off\">\r\n\r\n  <div class=\"mb-1\" *ngFor=\"let field of _schema.fields\" [ngSwitch]=\"field.type\">\r\n    <app-text-input-form-control *ngSwitchCase=\"'TEXT'\"\r\n                                 [placeholder]=\"field.label\"\r\n                                 [formControlName]=\"field.id\"></app-text-input-form-control>\r\n    <app-image-input-control *ngSwitchCase=\"'IMAGE'\"\r\n                             [placeholder]=\"field.label\"\r\n                             [tagControl]=\"formGroup.get('tags')\"\r\n                             [formControlName]=\"field.id\"></app-image-input-control>\r\n\r\n    <app-audio-input-control *ngSwitchCase=\"'AUDIO'\"\r\n                             [placeholder]=\"field.label\"\r\n                             [clipControl]=\"formGroup.get('clips')\"\r\n                             [formControlName]=\"field.id\"></app-audio-input-control>\r\n\r\n    <!-- The Legacy Form Control is used as a temporary display of JSON data -->\r\n    <!-- TODO: Convert legacy data to use appropriate schemas -->\r\n    <app-legacy-data-form-control *ngSwitchCase=\"'JSON'\"\r\n                                  [doc]=\"_doc\"\r\n                                  [formControlName]=\"field.id\"></app-legacy-data-form-control>\r\n\r\n  </div>\r\n\r\n\r\n  <button type=\"button\" (click)=\"ngForm.onSubmit($event)\" [disabled]=\"formGroup.invalid\" mat-stroked-button color=\"primary\">Save</button>\r\n  <button type=\"button\" color=\"warn\" mat-flat-button (click)=\"resetForm()\">Reset</button>\r\n  <button type=\"button\" mat-flat-button (click)=\"cancelled.emit()\">Cancel</button>\r\n  <!--<pre>{{ formGroup.value | json }}</pre>-->\r\n</form>\r\n<div *ngIf=\"errorMessage\" class=\"message\">{{ errorMessage }}</div>\r\n<!--<pre>{{ _doc | json }}</pre>-->\r\n"

/***/ }),

/***/ "./src/app/forms/doc-edit-form/doc-edit-form.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/forms/doc-edit-form/doc-edit-form.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message {\n  padding: 0.5em;\n  margin: 1em;\n  background-color: #fdedec; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMvZG9jLWVkaXQtZm9ybS9DOlxcVXNlcnNcXFRpbVxca2VuZHJhaW8tYXBwL3NyY1xcYXBwXFxmb3Jtc1xcZG9jLWVkaXQtZm9ybVxcZG9jLWVkaXQtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWM7RUFDZCxZQUFXO0VBQ1gsMEJBQXlCLEVBQzFCIiwiZmlsZSI6InNyYy9hcHAvZm9ybXMvZG9jLWVkaXQtZm9ybS9kb2MtZWRpdC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2Uge1xyXG4gIHBhZGRpbmc6IDAuNWVtO1xyXG4gIG1hcmdpbjogMWVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGVkZWM7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/forms/doc-edit-form/doc-edit-form.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/forms/doc-edit-form/doc-edit-form.component.ts ***!
  \****************************************************************/
/*! exports provided: DocEditFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocEditFormComponent", function() { return DocEditFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_schema_repository_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/schema-repository.service */ "./src/app/services/schema-repository.service.ts");
/* harmony import */ var _services_document_repository_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/document-repository.service */ "./src/app/services/document-repository.service.ts");





var DocEditFormComponent = /** @class */ (function () {
    function DocEditFormComponent(fb, docsRepo, schemaRepo) {
        this.fb = fb;
        this.docsRepo = docsRepo;
        this.schemaRepo = schemaRepo;
        this.docSaved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cancelled = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(DocEditFormComponent.prototype, "doc", {
        set: function (doc) {
            this._doc = doc;
            if (doc) {
                this._schema = this.schemaRepo.getSchema(this._doc['@schema']);
                this.initForm();
            }
        },
        enumerable: true,
        configurable: true
    });
    DocEditFormComponent.prototype.initForm = function () {
        var _this = this;
        var getDefaultValue = function (key) {
            var field = _this._schema.fields.find(function (f) { return f.id === key; });
            return field.defaultValue || undefined;
        };
        this.formGroup = this.fb.group(this._schema.fields.reduce(function (fg, f) {
            fg[f.id] = [_this._doc[f.id] || getDefaultValue(f.id), []]; // todo: validators
            return fg;
        }, {}));
    };
    DocEditFormComponent.prototype.resetForm = function () {
        this.formGroup.reset();
        this.formGroup.patchValue(this._doc);
    };
    DocEditFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.formGroup.disable();
        this.docsRepo
            .putDoc(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this._doc, this.formGroup.getRawValue()))
            .subscribe(function (_a) {
            var ok = _a.ok, rev = _a.rev;
            if (ok) {
                _this.errorMessage = null;
                _this._doc['_rev'] = rev;
            }
            _this.formGroup.enable();
            _this.docSaved.emit();
        }, function (_a) {
            var message = _a.message;
            return _this.errorMessage = message;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DocEditFormComponent.prototype, "docSaved", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DocEditFormComponent.prototype, "cancelled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], DocEditFormComponent.prototype, "doc", null);
    DocEditFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-doc-edit-form',
            template: __webpack_require__(/*! ./doc-edit-form.component.html */ "./src/app/forms/doc-edit-form/doc-edit-form.component.html"),
            styles: [__webpack_require__(/*! ./doc-edit-form.component.scss */ "./src/app/forms/doc-edit-form/doc-edit-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_document_repository_service__WEBPACK_IMPORTED_MODULE_4__["DocumentRepositoryService"],
            _services_schema_repository_service__WEBPACK_IMPORTED_MODULE_3__["SchemaRepositoryService"]])
    ], DocEditFormComponent);
    return DocEditFormComponent;
}());



/***/ }),

/***/ "./src/app/pages/adapters-page/adapters-page.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/adapters-page/adapters-page.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-bottom: 1em;\">\r\n  <button mat-raised-button (click)=\"enableAll()\">Enable all</button>\r\n</div>\r\n\r\n\r\n<section class=\"row\" *ngIf=\"adapters$ | async as adapters\">\r\n\r\n  <div *ngFor=\"let adapter of adapters | objectKeys\" class=\"col-sm-12 col-md-6 col-lg-4\">\r\n    <mat-card *ngIf=\"adapters[adapter] as config\">\r\n      <mat-card-title>\r\n        {{ config.adapter.title }} [{{ config.adapter.name }}]\r\n      </mat-card-title>\r\n\r\n      <mat-card-content>\r\n        <p>\r\n          {{ config.adapter.description }}\r\n        </p>\r\n\r\n        <div>\r\n          <p mat-line><b>More info:</b> {{ config.adapter.infoUrl }}</p>\r\n          <p mat-line><b>Maintainer:</b> {{ config.adapter.maintainer }}</p>\r\n          <p mat-line><b>Support:</b> {{ config.adapter.supportUrl }}</p>\r\n        </div>\r\n\r\n        <ng-container *ngIf=\"config.schemas | objectKeys as schemas\">\r\n          <div *ngIf=\"schemas.length > 0\">\r\n            <p>\r\n              <b>Supported schemas:</b>\r\n              {{ schemas.join(', ') }}\r\n            </p>\r\n          </div>\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf=\"config.adapter.actions | objectKeys as actions\">\r\n          <div *ngIf=\"actions.length > 0\">\r\n            <p>\r\n              <b>Processes:</b>\r\n            </p>\r\n            <ul>\r\n              <li *ngFor=\"let a of actions\">\r\n                <a [routerLink]=\"['/diagram', config.adapter.name, a]\">\r\n                  {{ config.adapter.actions[a].title }}\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </ng-container>\r\n\r\n        <div *ngIf=\"enabled[adapter]; else notEnabled\" class=\"adapter-buttons\">\r\n          <button mat-flat-button color=\"warn\" (click)=\"disableAdapter(adapter)\">Disable</button>\r\n          <button mat-stroked-button>Register</button>\r\n          <button mat-stroked-button>Login</button>\r\n          <a mat-stroked-button *ngIf=\"config?.adapter.swagger\" [routerLink]=\"['/api-client', adapter]\">API Client</a>\r\n        </div>\r\n        <ng-template #notEnabled>\r\n          <button mat-flat-button color=\"primary\" (click)=\"enableAdapter(adapter)\">Enable</button>\r\n        </ng-template>\r\n\r\n      </mat-card-content>\r\n\r\n      <!--<pre>{{ adapters[adapter] | json }}</pre>-->\r\n\r\n    </mat-card>\r\n  </div>\r\n\r\n</section>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/adapters-page/adapters-page.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/adapters-page/adapters-page.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  margin-bottom: 1em; }\n\n.adapter-buttons button {\n  margin-right: 0.5em;\n  margin-bottom: 0.5em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRhcHRlcnMtcGFnZS9DOlxcVXNlcnNcXFRpbVxca2VuZHJhaW8tYXBwL3NyY1xcYXBwXFxwYWdlc1xcYWRhcHRlcnMtcGFnZVxcYWRhcHRlcnMtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFrQixFQUNuQjs7QUFDRDtFQUVJLG9CQUFtQjtFQUNuQixxQkFBb0IsRUFDckIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZGFwdGVycy1wYWdlL2FkYXB0ZXJzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG59XHJcbi5hZGFwdGVyLWJ1dHRvbnMge1xyXG4gIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/adapters-page/adapters-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/adapters-page/adapters-page.component.ts ***!
  \****************************************************************/
/*! exports provided: AdaptersPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdaptersPageComponent", function() { return AdaptersPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_page_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/page-title.service */ "./src/app/services/page-title.service.ts");
/* harmony import */ var _services_adapters_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/adapters.service */ "./src/app/services/adapters.service.ts");




var AdaptersPageComponent = /** @class */ (function () {
    function AdaptersPageComponent(pageTitle, adapters) {
        this.pageTitle = pageTitle;
        this.adapters = adapters;
    }
    Object.defineProperty(AdaptersPageComponent.prototype, "enabled", {
        get: function () { return this.adapters.enabledAdapters; },
        enumerable: true,
        configurable: true
    });
    AdaptersPageComponent.prototype.ngOnInit = function () {
        this.pageTitle.setTitle('Adapters');
        this.adapters$ = this.adapters.adapters$;
    };
    AdaptersPageComponent.prototype.enableAdapter = function (name) {
        this.adapters.enableAdapter(name);
    };
    AdaptersPageComponent.prototype.disableAdapter = function (name) {
        this.adapters.disableAdapter(name);
    };
    AdaptersPageComponent.prototype.enableAll = function () {
        this.adapters.enableAll();
    };
    AdaptersPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adapters-page',
            template: __webpack_require__(/*! ./adapters-page.component.html */ "./src/app/pages/adapters-page/adapters-page.component.html"),
            styles: [__webpack_require__(/*! ./adapters-page.component.scss */ "./src/app/pages/adapters-page/adapters-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_title_service__WEBPACK_IMPORTED_MODULE_2__["PageTitleService"],
            _services_adapters_service__WEBPACK_IMPORTED_MODULE_3__["AdaptersService"]])
    ], AdaptersPageComponent);
    return AdaptersPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/assets-page/assets-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/assets-page/assets-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n     \r\n\r\n\r\n<mat-grid-list cols=\"4\" rowHeight=\"1:1\">\r\n    <mat-grid-tile [routerLink]=\"['/files']\" ><h2>Files</h2>\r\n      <mat-grid-tile-footer>  We found 35 files\r\n          <button mat-icon-button>\r\n              <mat-icon>forward</mat-icon>\r\n            </button> \r\n      </mat-grid-tile-footer>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile [routerLink]=\"['/recordings']\"><h2>Recordings</h2>\r\n      <mat-grid-tile-footer>  We found 27 Recordings\r\n          <button mat-icon-button>\r\n              <mat-icon>forward</mat-icon>\r\n            </button> \r\n      </mat-grid-tile-footer>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile [routerLink]=\"['/releases']\"><h2>Releases</h2>\r\n      <mat-grid-tile-footer>  We found 32 Releases\r\n          <button mat-icon-button>\r\n              <mat-icon>forward</mat-icon>\r\n            </button> \r\n      </mat-grid-tile-footer>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile [routerLink]=\"['/works']\" ><h2>Works</h2><br>\r\n<mat-grid-tile-footer>  <div>We found 32 Works</div>    \r\n  <button mat-icon-button>\r\n  <mat-icon>forward</mat-icon>\r\n</button> \r\n</mat-grid-tile-footer>\r\n\r\n   \r\n    </mat-grid-tile>\r\n  </mat-grid-list>\r\n\r\n\r\n   "

/***/ }),

/***/ "./src/app/pages/assets-page/assets-page.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/assets-page/assets-page.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-grid-tile {\n  background: lightblue;\n  cursor: pointer; }\n  mat-grid-tile:hover {\n    opacity: .8; }\n  .mat-grid-tile .mat-grid-tile-footer {\n  place-content: space-between; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXNzZXRzLXBhZ2UvQzpcXFVzZXJzXFxUaW1cXGtlbmRyYWlvLWFwcC9zcmNcXGFwcFxccGFnZXNcXGFzc2V0cy1wYWdlXFxhc3NldHMtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFxQjtFQUNyQixnQkFBZSxFQUloQjtFQU5IO0lBSUEsWUFBVSxFQUNMO0VBR0g7RUFDRSw2QkFBNEIsRUFDL0IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hc3NldHMtcGFnZS9hc3NldHMtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1ncmlkLXRpbGUge1xyXG4gICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgJjpob3ZlciB7XHJcbm9wYWNpdHk6Ljg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWF0LWdyaWQtdGlsZSAubWF0LWdyaWQtdGlsZS1mb290ZXJ7XHJcbiAgICBwbGFjZS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/assets-page/assets-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/assets-page/assets-page.component.ts ***!
  \************************************************************/
/*! exports provided: AssetsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsPageComponent", function() { return AssetsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_page_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/page-title.service */ "./src/app/services/page-title.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var AssetsPageComponent = /** @class */ (function () {
    function AssetsPageComponent(pageTitle) {
        this.pageTitle = pageTitle;
    }
    AssetsPageComponent.prototype.ngOnInit = function () {
        this.pageTitle.setTitle('Assets');
        this.dummyData = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])([{
                datasets: [{
                        data: [20, 40, 30, 10]
                    }],
                labels: [
                    'CDs',
                    'MP3s',
                    'Vynyl',
                    'Cassette'
                ]
            }]);
        this.dummyData2 = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])([{
                datasets: [{
                        data: [40, 10, 30, 20]
                    }],
                labels: [
                    'PPL',
                    'PRS',
                    'MCPR',
                    'PRS India'
                ]
            }]);
    };
    AssetsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-assets-page',
            template: __webpack_require__(/*! ./assets-page.component.html */ "./src/app/pages/assets-page/assets-page.component.html"),
            styles: [__webpack_require__(/*! ./assets-page.component.scss */ "./src/app/pages/assets-page/assets-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_title_service__WEBPACK_IMPORTED_MODULE_2__["PageTitleService"]])
    ], AssetsPageComponent);
    return AssetsPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/auth-callback/auth-callback.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/auth-callback/auth-callback.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loading\">\r\n  <mat-spinner></mat-spinner>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/auth-callback/auth-callback.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/auth-callback/auth-callback.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loading {\n  margin: 2em auto;\n  text-align: center;\n  width: 120px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC1jYWxsYmFjay9DOlxcVXNlcnNcXFRpbVxca2VuZHJhaW8tYXBwL3NyY1xcYXBwXFxwYWdlc1xcYXV0aC1jYWxsYmFja1xcYXV0aC1jYWxsYmFjay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsYUFBWSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXV0aC1jYWxsYmFjay9hdXRoLWNhbGxiYWNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRpbmcge1xyXG4gIG1hcmdpbjogMmVtIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMjBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/auth-callback/auth-callback.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/auth-callback/auth-callback.component.ts ***!
  \****************************************************************/
/*! exports provided: AuthCallbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthCallbackComponent", function() { return AuthCallbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthCallbackComponent = /** @class */ (function () {
    function AuthCallbackComponent() {
    }
    AuthCallbackComponent.prototype.ngOnInit = function () {
    };
    AuthCallbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth-callback',
            template: __webpack_require__(/*! ./auth-callback.component.html */ "./src/app/pages/auth-callback/auth-callback.component.html"),
            styles: [__webpack_require__(/*! ./auth-callback.component.scss */ "./src/app/pages/auth-callback/auth-callback.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthCallbackComponent);
    return AuthCallbackComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard-page/dashboard-page.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/dashboard-page/dashboard-page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"mat-typography\">\r\n  <h3>Welcome to the Kendraio App</h3>\r\n  <a routerLink=\"/docs\" mat-flat-button color=\"primary\">Documents</a>\r\n</div>\r\n\r\n<div class=\"mat-typography\">\r\n  <br>\r\n  <a routerLink=\"/test-api\" mat-flat-button color=\"primary\">Test API</a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard-page/dashboard-page.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/dashboard-page/dashboard-page.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-content-button {\n  position: fixed;\n  bottom: 1em;\n  right: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkLXBhZ2UvQzpcXFVzZXJzXFxUaW1cXGtlbmRyYWlvLWFwcC9zcmNcXGFwcFxccGFnZXNcXGRhc2hib2FyZC1wYWdlXFxkYXNoYm9hcmQtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFlO0VBQ2YsWUFBVztFQUNYLFdBQVUsRUFDWCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC1wYWdlL2Rhc2hib2FyZC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZC1jb250ZW50LWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMWVtO1xyXG4gIHJpZ2h0OiAxZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/dashboard-page/dashboard-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/dashboard-page/dashboard-page.component.ts ***!
  \******************************************************************/
/*! exports provided: DashboardPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageComponent", function() { return DashboardPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_page_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/page-title.service */ "./src/app/services/page-title.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var DashboardPageComponent = /** @class */ (function () {
    function DashboardPageComponent(pageTitle, router) {
        this.pageTitle = pageTitle;
        this.router = router;
        this.data = [];
    }
    DashboardPageComponent.prototype.ngOnInit = function () {
        this.pageTitle.setTitle('Dashboard');
        // this.database.listKeys().pipe(take(1)).subscribe(keys => this.data = keys as any);
    };
    DashboardPageComponent.prototype.addContent = function () {
        this.router.navigate(['/import']);
    };
    DashboardPageComponent.prototype.onDeleted = function () {
        // this.data = this.database.listKeys();
        // this.database.listKeys().pipe(take(1)).subscribe(keys => this.data = keys as any);
    };
    DashboardPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-page',
            template: __webpack_require__(/*! ./dashboard-page.component.html */ "./src/app/pages/dashboard-page/dashboard-page.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-page.component.scss */ "./src/app/pages/dashboard-page/dashboard-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_title_service__WEBPACK_IMPORTED_MODULE_2__["PageTitleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DashboardPageComponent);
    return DashboardPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/diagram-page/diagram-page.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/diagram-page/diagram-page.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/adapters\" mat-flat-button>&laquo; Back</a>\r\n<div class=\"mat-typography\">\r\n  <h2>{{ title }}</h2>\r\n  <div #diagram></div>\r\n</div>\r\n<mat-accordion>\r\n  <mat-expansion-panel>\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        Process Definition\r\n      </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n    <div class=\"mat-typography\">\r\n      <p>\r\n        <a target=\"_blank\"\r\n           href=\"https://github.com/kendraio/kendraio-adapter/tree/master/{{ definitionPath }}\">\r\n          EDIT\r\n        </a>\r\n        the process definition on GitHub\r\n      </p>\r\n    </div>\r\n    <pre>{{ graphDef }}</pre>\r\n  </mat-expansion-panel>\r\n</mat-accordion>\r\n"

/***/ }),

/***/ "./src/app/pages/diagram-page/diagram-page.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/diagram-page/diagram-page.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RpYWdyYW0tcGFnZS9kaWFncmFtLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/diagram-page/diagram-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/diagram-page/diagram-page.component.ts ***!
  \**************************************************************/
/*! exports provided: DiagramPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagramPageComponent", function() { return DiagramPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var mermaid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mermaid */ "./node_modules/mermaid/dist/mermaid.core.js");
/* harmony import */ var mermaid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mermaid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_adapters_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/adapters.service */ "./src/app/services/adapters.service.ts");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");








var BASE_PATH = 'https://kendraio.github.io/kendraio-adapter/';
var DiagramPageComponent = /** @class */ (function () {
    function DiagramPageComponent(route, adapters, http) {
        this.route = route;
        this.adapters = adapters;
        this.http = http;
        this.title = '';
        this.graphDef = '';
        this.definitionPath = '';
    }
    DiagramPageComponent.prototype.ngOnInit = function () {
    };
    DiagramPageComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (params) { return ({
            adapter: params.get('adapter'),
            id: params.get('id')
        }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
            var adapter = _a.adapter, id = _a.id;
            return _this.adapters.getAdapter(adapter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (allAdapters) { return Object(lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"])(allAdapters, adapter + ".adapter.actions[" + id + "]"); }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(Boolean), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
            var title = _a.title, path = _a.path;
            _this.definitionPath = path;
            return _this.http.get("" + BASE_PATH + path, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (text) { return ({ title: title, graphDef: text }); }));
        })).subscribe(function (_a) {
            var title = _a.title, graphDef = _a.graphDef;
            _this.title = title;
            _this.graphDef = graphDef;
            _this.graph = mermaid__WEBPACK_IMPORTED_MODULE_2__["render"]('graphDiv', graphDef, function (svgCode) {
                _this.diagram.nativeElement.innerHTML = svgCode;
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('diagram'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DiagramPageComponent.prototype, "diagram", void 0);
    DiagramPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-diagram-page',
            template: __webpack_require__(/*! ./diagram-page.component.html */ "./src/app/pages/diagram-page/diagram-page.component.html"),
            styles: [__webpack_require__(/*! ./diagram-page.component.scss */ "./src/app/pages/diagram-page/diagram-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_adapters_service__WEBPACK_IMPORTED_MODULE_5__["AdaptersService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]])
    ], DiagramPageComponent);
    return DiagramPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/doc-edit-page/doc-edit-page.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/doc-edit-page/doc-edit-page.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-doc-edit-form [doc]=\"doc$ | async\"\r\n                   (cancelled)=\"onCancelled()\"\r\n                   (docSaved)=\"onDocSaved()\"></app-doc-edit-form>\r\n"

/***/ }),

/***/ "./src/app/pages/doc-edit-page/doc-edit-page.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/doc-edit-page/doc-edit-page.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RvYy1lZGl0LXBhZ2UvZG9jLWVkaXQtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/doc-edit-page/doc-edit-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/doc-edit-page/doc-edit-page.component.ts ***!
  \****************************************************************/
/*! exports provided: DocEditPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocEditPageComponent", function() { return DocEditPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_document_repository_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/document-repository.service */ "./src/app/services/document-repository.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var DocEditPageComponent = /** @class */ (function () {
    function DocEditPageComponent(docsRepo, route, router) {
        this.docsRepo = docsRepo;
        this.route = route;
        this.router = router;
    }
    DocEditPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.doc$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (params) { return params.get('id'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (id) { return _this.docsRepo.getDoc(id); }));
    };
    DocEditPageComponent.prototype.onDocSaved = function () {
        this.router.navigate(['/docs']);
    };
    DocEditPageComponent.prototype.onCancelled = function () {
        this.router.navigate(['/docs']);
    };
    DocEditPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-doc-edit-page',
            template: __webpack_require__(/*! ./doc-edit-page.component.html */ "./src/app/pages/doc-edit-page/doc-edit-page.component.html"),
            styles: [__webpack_require__(/*! ./doc-edit-page.component.scss */ "./src/app/pages/doc-edit-page/doc-edit-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_document_repository_service__WEBPACK_IMPORTED_MODULE_2__["DocumentRepositoryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DocEditPageComponent);
    return DocEditPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/docs-list-page/docs-list-page.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/docs-list-page/docs-list-page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list *ngIf=\"docs$ | async as docs\">\r\n  <cdk-virtual-scroll-viewport itemSize=\"50\" class=\"docs-viewport\" *ngIf=\"docs.rows.length > 0; else noContent\">\r\n    <div *cdkVirtualFor=\"let doc of docs.rows\" class=\"doc-item\">\r\n      <span class=\"doc-schema\">{{ doc.id.split(':')[0] }}</span>\r\n      <span class=\"doc-label\"><a [routerLink]=\"['/docs', doc.id]\">{{ doc.key }}</a></span>\r\n      <span class=\"doc-operations\">\r\n        <a mat-icon-button [routerLink]=\"['/docs', doc.id]\">\r\n          <mat-icon>edit</mat-icon>\r\n        </a>\r\n        <a mat-icon-button (click)=\"deleteDoc(doc)\">\r\n          <mat-icon>delete</mat-icon>\r\n        </a>\r\n      </span>\r\n    </div>\r\n  </cdk-virtual-scroll-viewport>\r\n</mat-list>\r\n\r\n<ng-template #noContent>\r\n  <div class=\"mat-typography\">\r\n    <p>No documents found in database.</p>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n<div class=\"add-content-button\">\r\n  <button mat-fab (click)=\"addContent()\">\r\n    <mat-icon>add</mat-icon>\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/docs-list-page/docs-list-page.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/docs-list-page/docs-list-page.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".docs-viewport {\n  width: 100%;\n  height: 75vh; }\n\n.doc-item {\n  height: 50px;\n  max-height: 50px;\n  display: flex; }\n\n.doc-label {\n  flex: 1; }\n\n.doc-schema {\n  margin-right: 1em; }\n\n.add-content-button {\n  position: fixed;\n  bottom: 1em;\n  right: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZG9jcy1saXN0LXBhZ2UvQzpcXFVzZXJzXFxUaW1cXGtlbmRyYWlvLWFwcC9zcmNcXGFwcFxccGFnZXNcXGRvY3MtbGlzdC1wYWdlXFxkb2NzLWxpc3QtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVc7RUFDWCxhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSxhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLGNBQWEsRUFDZDs7QUFDRDtFQUNFLFFBQU8sRUFDUjs7QUFDRDtFQUNFLGtCQUFpQixFQUNsQjs7QUFHRDtFQUNFLGdCQUFlO0VBQ2YsWUFBVztFQUNYLFdBQVUsRUFDWCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RvY3MtbGlzdC1wYWdlL2RvY3MtbGlzdC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRvY3Mtdmlld3BvcnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNzV2aDtcclxufVxyXG4uZG9jLWl0ZW0ge1xyXG4gIGhlaWdodDogNTBweDtcclxuICBtYXgtaGVpZ2h0OiA1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmRvYy1sYWJlbCB7XHJcbiAgZmxleDogMTtcclxufVxyXG4uZG9jLXNjaGVtYSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbn1cclxuXHJcblxyXG4uYWRkLWNvbnRlbnQtYnV0dG9uIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAxZW07XHJcbiAgcmlnaHQ6IDFlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/docs-list-page/docs-list-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/docs-list-page/docs-list-page.component.ts ***!
  \******************************************************************/
/*! exports provided: DocsListPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsListPageComponent", function() { return DocsListPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_document_repository_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/document-repository.service */ "./src/app/services/document-repository.service.ts");
/* harmony import */ var _services_page_title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/page-title.service */ "./src/app/services/page-title.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialogs_confirm_delete_dialog_confirm_delete_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialogs/confirm-delete-dialog/confirm-delete-dialog.component */ "./src/app/dialogs/confirm-delete-dialog/confirm-delete-dialog.component.ts");







var DocsListPageComponent = /** @class */ (function () {
    function DocsListPageComponent(pageTitle, router, docsRepo, dialog) {
        this.pageTitle = pageTitle;
        this.router = router;
        this.docsRepo = docsRepo;
        this.dialog = dialog;
    }
    DocsListPageComponent.prototype.ngOnInit = function () {
        this.pageTitle.setTitle('Dashboard');
        this.docs$ = this.docsRepo.listAll();
    };
    DocsListPageComponent.prototype.deleteDoc = function (doc) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_confirm_delete_dialog_confirm_delete_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDeleteDialogComponent"], {
            data: {
                item: {
                    type: doc.id.split(':')[0],
                    name: doc.key
                }
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.docsRepo.deleteDoc(doc.id).subscribe(function (_a) {
                    var ok = _a.ok;
                    console.log("Deleted: " + ok);
                    _this.docs$ = _this.docsRepo.listAll();
                });
            }
        });
    };
    DocsListPageComponent.prototype.addContent = function () {
        this.router.navigate(['/import']);
    };
    DocsListPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-docs-list-page',
            template: __webpack_require__(/*! ./docs-list-page.component.html */ "./src/app/pages/docs-list-page/docs-list-page.component.html"),
            styles: [__webpack_require__(/*! ./docs-list-page.component.scss */ "./src/app/pages/docs-list-page/docs-list-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_title_service__WEBPACK_IMPORTED_MODULE_3__["PageTitleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_document_repository_service__WEBPACK_IMPORTED_MODULE_2__["DocumentRepositoryService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], DocsListPageComponent);
    return DocsListPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/dropbox-page/dropbox-page.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/dropbox-page/dropbox-page.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"files$ | async as files; else noAuth\">\r\n\r\n  <div class=\"upload-file\">\r\n    <mat-icon (click)=\"filePicker.click()\" color=\"primary\"\r\n              style=\"cursor: pointer; margin-left: -8rem; font-size: 10rem\">cloud_upload\r\n    </mat-icon>\r\n    <br>\r\n    <input type=\"file\" style=\"display: none;\" #filePicker (change)=\"onFilePick($event)\">\r\n    <button (click)=\"filePicker.click()\" mat-flat-button>Select file</button>\r\n  </div>\r\n\r\n  <!--<pre>{{ files | json }}</pre>-->\r\n  <ul>\r\n    <li *ngFor=\"let f of files.entries\">\r\n      {{ f.name }} <a mat-button (click)=\"onDownload(f)\">Download</a> <a mat-button (click)=\"onDelete(f)\" color=\"warn\">Delete</a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n\r\n<ng-template #noAuth>\r\n  <a *ngIf=\"showSync\" mat-flat-button (click)=\"onSyncRequest()\">Sync</a>\r\n  <span *ngIf=\"!showSync\">Loading...</span>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/pages/dropbox-page/dropbox-page.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/dropbox-page/dropbox-page.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".upload-file,\n.upload-button {\n  margin-top: 1em;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZHJvcGJveC1wYWdlL0M6XFxVc2Vyc1xcVGltXFxrZW5kcmFpby1hcHAvc3JjXFxhcHBcXHBhZ2VzXFxkcm9wYm94LXBhZ2VcXGRyb3Bib3gtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7RUFFRSxnQkFBZTtFQUNmLG1CQUFrQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Ryb3Bib3gtcGFnZS9kcm9wYm94LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnVwbG9hZC1maWxlLFxyXG4udXBsb2FkLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMWVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/dropbox-page/dropbox-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/dropbox-page/dropbox-page.component.ts ***!
  \**************************************************************/
/*! exports provided: DropboxPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropboxPageComponent", function() { return DropboxPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var DropboxPageComponent = /** @class */ (function () {
    function DropboxPageComponent(auth, http, zone) {
        this.auth = auth;
        this.http = http;
        this.zone = zone;
        this.showSync = false;
    }
    DropboxPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showSync = false;
        var idp = this.auth.getIdentity('dropbox');
        if (!!idp && idp.access_token) {
            var access_token = idp.access_token;
            this.accessToken = access_token;
            var headers = { authorization: "Bearer " + access_token };
            var url = "https://api.dropboxapi.com/2/files/list_folder";
            var body = {
                path: '/uploads'
            };
            this.files$ = this.http.post(url, body, { headers: headers });
        }
        setTimeout(function () {
            _this.zone.run(function () {
                _this.showSync = true;
            });
        }, 1000);
    };
    DropboxPageComponent.prototype.onDownload = function (f) {
        var path = f.id;
        var headers = {
            Authorization: "Bearer " + this.accessToken
        };
        var url = 'https://api.dropboxapi.com/2/files/get_temporary_link';
        this.http.post(url, { path: path }, { headers: headers }).subscribe(function (_a) {
            var link = _a.link;
            window.open(link);
        });
    };
    DropboxPageComponent.prototype.onDelete = function (f) {
        var _this = this;
        var url = 'https://api.dropboxapi.com/2/files/delete_v2';
        var path = f.id;
        var headers = {
            Authorization: "Bearer " + this.accessToken
        };
        this.http.post(url, { path: path }, { headers: headers }).subscribe(function () {
            _this.ngOnInit();
        });
    };
    DropboxPageComponent.prototype.onFilePick = function (event) {
        var _this = this;
        var file = event.target.files[0];
        if (file) {
            var path = "/uploads/" + file.name;
            var headers = {
                'Dropbox-API-Arg': JSON.stringify({ path: path }),
                Authorization: "Bearer " + this.accessToken,
                'Content-Type': 'application/octet-stream'
            };
            var url = 'https://content.dropboxapi.com/2/files/upload';
            this.http.post(url, file, { headers: headers }).subscribe(function () {
                _this.ngOnInit();
            });
        }
    };
    DropboxPageComponent.prototype.onSyncRequest = function () {
        var _this = this;
        this.auth.getProfile(function () {
            _this.ngOnInit();
        });
    };
    DropboxPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dropbox-page',
            template: __webpack_require__(/*! ./dropbox-page.component.html */ "./src/app/pages/dropbox-page/dropbox-page.component.html"),
            styles: [__webpack_require__(/*! ./dropbox-page.component.scss */ "./src/app/pages/dropbox-page/dropbox-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], DropboxPageComponent);
    return DropboxPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/import-page/import-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/import-page/import-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"row\">\r\n\r\n  <div class=\"col-sm-12 col-md-6 col-lg-4\">\r\n    <mat-card>\r\n      <mat-card-title>Add new node</mat-card-title>\r\n      <mat-card-content>\r\n        <mat-form-field>\r\n          <mat-select [(ngModel)]=\"addNodeType\" required placeholder=\"Node type\">\r\n            <mat-option value=\"Project\">Project (DDEX RIN)</mat-option>\r\n            <mat-option value=\"Audio\">Audio (Kendraio)</mat-option>\r\n            <mat-option value=\"Photo\">Photo (Kendraio)</mat-option>\r\n            <!--<mat-option value=\"ImageObject\">ImageObject (Schema.org)</mat-option>-->\r\n            <mat-option value=\"Person\">Person (Schema.org)</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <br>\r\n        <button (click)=\"doAddNode()\" [disabled]=\"!addNodeType\" mat-flat-button color=\"accent\">\r\n          Add {{ addNodeType ? addNodeType : 'new' }}\r\n        </button>\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n  </div>\r\n\r\n  <div class=\"col-sm-12 col-md-6 col-lg-4\">\r\n\r\n    <mat-card>\r\n      <mat-card-title>Import from file</mat-card-title>\r\n      <mat-card-content>\r\n        <mat-form-field>\r\n          <mat-select required placeholder=\"Adapter\">\r\n            <mat-option value=\"rin\">m-rin</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <br>\r\n        <p>\r\n          <button mat-fab color=\"primary\" (click)=\"filePicker.click()\">\r\n            <mat-icon>cloud_upload</mat-icon>\r\n          </button>\r\n          <input type=\"file\" accept=\"text/xml\" (change)=\"fileSelected($event)\" style=\"display: none;\" #filePicker>\r\n          <span>\r\n            {{ file ? file.name : 'Select file...' }}\r\n          </span>\r\n        </p>\r\n        <br>\r\n        <button (click)=\"importFile()\" [disabled]=\"!fileImportReady\" mat-flat-button color=\"accent\">Import</button>\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n  </div>\r\n  <div class=\"col-sm-12 col-md-6 col-lg-4\">\r\n    <mat-card>\r\n      <mat-card-title>Load demo data</mat-card-title>\r\n      <mat-card-content>\r\n        <p>Some example data is provided to demo App functionality...</p>\r\n        <button (click)=\"importSampleData()\" mat-flat-button color=\"accent\">Load demo data</button>\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n  </div>\r\n  <div class=\"col-sm-12 col-md-6 col-lg-4\">\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <p>\r\n          Import via browser extension:\r\n        </p>\r\n        <mat-chip-list>\r\n          <mat-chip>Disconnected</mat-chip>\r\n        </mat-chip-list>\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n  </div>\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/pages/import-page/import-page.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/import-page/import-page.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  margin-bottom: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW1wb3J0LXBhZ2UvQzpcXFVzZXJzXFxUaW1cXGtlbmRyYWlvLWFwcC9zcmNcXGFwcFxccGFnZXNcXGltcG9ydC1wYWdlXFxpbXBvcnQtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFrQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ltcG9ydC1wYWdlL2ltcG9ydC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xyXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/import-page/import-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/import-page/import-page.component.ts ***!
  \************************************************************/
/*! exports provided: ImportPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportPageComponent", function() { return ImportPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_page_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/page-title.service */ "./src/app/services/page-title.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialogs_import_progress_dialog_import_progress_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dialogs/import-progress-dialog/import-progress-dialog.component */ "./src/app/dialogs/import-progress-dialog/import-progress-dialog.component.ts");
/* harmony import */ var _dialogs_add_new_node_dialog_add_new_node_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialogs/add-new-node-dialog/add-new-node-dialog.component */ "./src/app/dialogs/add-new-node-dialog/add-new-node-dialog.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_document_repository_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/document-repository.service */ "./src/app/services/document-repository.service.ts");









var ImportPageComponent = /** @class */ (function () {
    function ImportPageComponent(docsRepo, router, pageTitle, dialog, http) {
        this.docsRepo = docsRepo;
        this.router = router;
        this.pageTitle = pageTitle;
        this.dialog = dialog;
        this.http = http;
        this.fileImportReady = false;
    }
    ImportPageComponent.prototype.ngOnInit = function () {
        this.pageTitle.setTitle('Import data');
    };
    ImportPageComponent.prototype.fileSelected = function (event) {
        if (event.target.files && event.target.files.length > 0) {
            this.file = event.target.files[0];
            this.fileImportReady = true;
        }
    };
    ImportPageComponent.prototype.doAddNode = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_add_new_node_dialog_add_new_node_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AddNewNodeDialogComponent"], {
            data: {
                type: this.addNodeType
            }
        });
        dialogRef.afterClosed().subscribe(function (data) {
            if (data) {
                _this.docsRepo.addNew(_this.addNodeType, data).subscribe(function (_a) {
                    var id = _a.id;
                    _this.router.navigate(['/docs', id]);
                });
            }
        });
    };
    ImportPageComponent.prototype.importFile = function () {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (e) {
            var result = e.target.result;
            _this.doImport(result);
        };
        reader.readAsText(this.file);
    };
    ImportPageComponent.prototype.importSampleData = function () {
        var _this = this;
        this.http.get('assets/data/rin-sample-01.xml', { responseType: 'text' }).subscribe(function (content) {
            _this.doImport(content);
        });
    };
    ImportPageComponent.prototype.doImport = function (content) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_import_progress_dialog_import_progress_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ImportProgressDialogComponent"], {
            disableClose: true,
            data: { content: content }
        });
        dialogRef.afterClosed().subscribe(function () {
            _this.router.navigate(['/docs']);
        });
    };
    ImportPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-import-page',
            template: __webpack_require__(/*! ./import-page.component.html */ "./src/app/pages/import-page/import-page.component.html"),
            styles: [__webpack_require__(/*! ./import-page.component.scss */ "./src/app/pages/import-page/import-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_document_repository_service__WEBPACK_IMPORTED_MODULE_8__["DocumentRepositoryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_page_title_service__WEBPACK_IMPORTED_MODULE_2__["PageTitleService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]])
    ], ImportPageComponent);
    return ImportPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/index.ts":
/*!********************************!*\
  !*** ./src/app/pages/index.ts ***!
  \********************************/
/*! exports provided: AssetsPageComponent, DashboardPageComponent, ImportPageComponent, ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_page_assets_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets-page/assets-page.component */ "./src/app/pages/assets-page/assets-page.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AssetsPageComponent", function() { return _assets_page_assets_page_component__WEBPACK_IMPORTED_MODULE_0__["AssetsPageComponent"]; });

/* harmony import */ var _dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-page/dashboard-page.component */ "./src/app/pages/dashboard-page/dashboard-page.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardPageComponent", function() { return _dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_1__["DashboardPageComponent"]; });

/* harmony import */ var _import_page_import_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import-page/import-page.component */ "./src/app/pages/import-page/import-page.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImportPageComponent", function() { return _import_page_import_page_component__WEBPACK_IMPORTED_MODULE_2__["ImportPageComponent"]; });

/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_3__["ContactsComponent"]; });







/***/ }),

/***/ "./src/app/pages/settings-page/settings-page.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/settings-page/settings-page.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <p>\r\n    Delete all data...\r\n  </p>\r\n\r\n  \r\n  <button (click)=\"resetApp()\" mat-raised-button color=\"warn\">Reset App</button>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/pages/settings-page/settings-page.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/settings-page/settings-page.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmdzLXBhZ2Uvc2V0dGluZ3MtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/settings-page/settings-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/settings-page/settings-page.component.ts ***!
  \****************************************************************/
/*! exports provided: SettingsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageComponent", function() { return SettingsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialogs_confirm_app_reset_dialog_confirm_app_reset_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dialogs/confirm-app-reset-dialog/confirm-app-reset-dialog.component */ "./src/app/dialogs/confirm-app-reset-dialog/confirm-app-reset-dialog.component.ts");
/* harmony import */ var _services_page_title_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/page-title.service */ "./src/app/services/page-title.service.ts");
/* harmony import */ var _services_adapters_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/adapters.service */ "./src/app/services/adapters.service.ts");
/* harmony import */ var _services_document_repository_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/document-repository.service */ "./src/app/services/document-repository.service.ts");








var SettingsPageComponent = /** @class */ (function () {
    function SettingsPageComponent(router, dialog, pageTitle, adapters, database) {
        this.router = router;
        this.dialog = dialog;
        this.pageTitle = pageTitle;
        this.adapters = adapters;
        this.database = database;
    }
    SettingsPageComponent.prototype.ngOnInit = function () {
        this.pageTitle.setTitle('App settings');
    };
    SettingsPageComponent.prototype.resetApp = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_confirm_app_reset_dialog_confirm_app_reset_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmAppResetDialogComponent"], {
            width: '300px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.adapters.resetApp();
                _this.database.resetApp();
                _this.router.navigate(['/']);
            }
        });
    };
    SettingsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings-page',
            template: __webpack_require__(/*! ./settings-page.component.html */ "./src/app/pages/settings-page/settings-page.component.html"),
            styles: [__webpack_require__(/*! ./settings-page.component.scss */ "./src/app/pages/settings-page/settings-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _services_page_title_service__WEBPACK_IMPORTED_MODULE_5__["PageTitleService"],
            _services_adapters_service__WEBPACK_IMPORTED_MODULE_6__["AdaptersService"],
            _services_document_repository_service__WEBPACK_IMPORTED_MODULE_7__["DocumentRepositoryService"]])
    ], SettingsPageComponent);
    return SettingsPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/swagger-page/swagger-page.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/swagger-page/swagger-page.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [appSwaggerUi]=\"url$ | async\"></div>\r\n"

/***/ }),

/***/ "./src/app/pages/swagger-page/swagger-page.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/swagger-page/swagger-page.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N3YWdnZXItcGFnZS9zd2FnZ2VyLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/swagger-page/swagger-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/swagger-page/swagger-page.component.ts ***!
  \**************************************************************/
/*! exports provided: SwaggerPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwaggerPageComponent", function() { return SwaggerPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_page_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/page-title.service */ "./src/app/services/page-title.service.ts");





var SwaggerPageComponent = /** @class */ (function () {
    function SwaggerPageComponent(pageTitle, route) {
        this.pageTitle = pageTitle;
        this.route = route;
    }
    SwaggerPageComponent.prototype.ngOnInit = function () {
        this.pageTitle.setTitle('API Client');
        this.url$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (params) { return params.get('id'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (id) { return "/assets/swagger/" + id + ".json"; }));
    };
    SwaggerPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-swagger-page',
            template: __webpack_require__(/*! ./swagger-page.component.html */ "./src/app/pages/swagger-page/swagger-page.component.html"),
            styles: [__webpack_require__(/*! ./swagger-page.component.scss */ "./src/app/pages/swagger-page/swagger-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_title_service__WEBPACK_IMPORTED_MODULE_4__["PageTitleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SwaggerPageComponent);
    return SwaggerPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/test-api-page/test-api-page.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/test-api-page/test-api-page.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-typography\" style=\"margin-bottom: 1em;\">\r\n  <h2>Temporary page to test API</h2>\r\n</div>\r\n\r\n<mat-card *ngIf=\"entityTypes$ | async as entityTypeList\">\r\n  <mat-form-field style=\"margin-right: 1em;\">\r\n    <mat-select placeholder=\"Entity type\" (valueChange)=\"changeEntityType($event)\">\r\n      <mat-option *ngFor=\"let type of entityTypeList\" [value]=\"type\">\r\n        {{ type }}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <button mat-flat-button [disabled]=\"isLoadingAll\" (click)=\"importEverything()\" color=\"primary\" type=\"button\">Import all</button>\r\n</mat-card>\r\n\r\n<mat-card *ngIf=\"entityList$ | async as entityList\">\r\n  <mat-form-field style=\"margin-right: 0.5em;\">\r\n    <mat-select placeholder=\"Entity ID\" (valueChange)=\"changeEntity($event)\">\r\n      <mat-option *ngFor=\"let entity of entityList\" [value]=\"entity.id\">\r\n        {{ entity['id'] }}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n\r\n  <button style=\"margin-right: 0.5em;\" type=\"button\" mat-stroked-button (click)=\"listAll()\">Fetch all</button>\r\n  <button mat-flat-button (click)=\"importAll()\" color=\"primary\" type=\"button\">Import all {{ selectedType }}</button>\r\n</mat-card>\r\n\r\n<mat-card *ngIf=\"selectedEntity$ | async as entity\">\r\n  <pre>{{ entity | json }}</pre>\r\n</mat-card>\r\n\r\n<mat-card *ngIf=\"listAll$ | async as allItems\">\r\n  <pre>{{ allItems | json }}</pre>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/pages/test-api-page/test-api-page.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/test-api-page/test-api-page.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  margin-bottom: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVzdC1hcGktcGFnZS9DOlxcVXNlcnNcXFRpbVxca2VuZHJhaW8tYXBwL3NyY1xcYXBwXFxwYWdlc1xcdGVzdC1hcGktcGFnZVxcdGVzdC1hcGktcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFrQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlc3QtYXBpLXBhZ2UvdGVzdC1hcGktcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcclxuICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/test-api-page/test-api-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/test-api-page/test-api-page.component.ts ***!
  \****************************************************************/
/*! exports provided: TestApiPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestApiPageComponent", function() { return TestApiPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_test_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/test-data.service */ "./src/app/services/test-data.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_page_title_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/page-title.service */ "./src/app/services/page-title.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialogs_test_import_dialog_test_import_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../dialogs/test-import-dialog/test-import-dialog.component */ "./src/app/dialogs/test-import-dialog/test-import-dialog.component.ts");









var TestApiPageComponent = /** @class */ (function () {
    function TestApiPageComponent(testData, router, pageTitle, dialog) {
        this.testData = testData;
        this.router = router;
        this.pageTitle = pageTitle;
        this.dialog = dialog;
        this.isLoadingAll = false;
    }
    TestApiPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.entityTypes$ = this.testData.listEntityTypes({ live: true });
        this.entityList$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (type) { return _this.testData.listEntities(type, { live: true }); }));
        this.selectedEntity$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (id) { return _this.testData.getEntity(_this.selectedType, id, { live: true }); }));
        this.listAll$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (type) { return _this.testData.listAll(type, { live: true }); }));
    };
    TestApiPageComponent.prototype.changeEntityType = function (type) {
        this.selectedType = type;
        this.entityList$.next(type);
    };
    TestApiPageComponent.prototype.changeEntity = function (id) {
        this.selectedEntity$.next(id);
    };
    TestApiPageComponent.prototype.listAll = function () {
        this.listAll$.next(this.selectedType);
    };
    TestApiPageComponent.prototype.importEverything = function () {
        var _this = this;
        this.isLoadingAll = true;
        this.testData.listEntityTypes({ live: true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (types) { return types.filter(function (type) { return type !== 'video' && type !== 'photo'; }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (types) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(types.map(function (type) {
            return _this.testData.listAll(type, { live: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (records) { return ({ type: type, records: records }); }));
        })); }))
            .subscribe(function (allItems) {
            _this.isLoadingAll = false;
            allItems.map(function (content) {
                _this.doImport(content);
            });
        });
    };
    TestApiPageComponent.prototype.importAll = function () {
        var _this = this;
        var type = this.selectedType;
        this.testData.listAll(type, { live: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function (records) {
            if (records) {
                _this.doImport({ type: type, records: records });
            }
        });
    };
    TestApiPageComponent.prototype.doImport = function (content) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_test_import_dialog_test_import_dialog_component__WEBPACK_IMPORTED_MODULE_8__["TestImportDialogComponent"], {
            disableClose: true,
            data: { content: content }
        });
        dialogRef.afterClosed().subscribe(function () {
            _this.router.navigate(['/docs']);
        });
    };
    TestApiPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test-api-page',
            template: __webpack_require__(/*! ./test-api-page.component.html */ "./src/app/pages/test-api-page/test-api-page.component.html"),
            styles: [__webpack_require__(/*! ./test-api-page.component.scss */ "./src/app/pages/test-api-page/test-api-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_test_data_service__WEBPACK_IMPORTED_MODULE_2__["TestDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_page_title_service__WEBPACK_IMPORTED_MODULE_6__["PageTitleService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])
    ], TestApiPageComponent);
    return TestApiPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/upload-page/upload-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/upload-page/upload-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"upload-file\">\r\n  <mat-icon (click)=\"filePicker.click()\" color=\"primary\"\r\n            style=\"cursor: pointer; margin-left: -8rem; font-size: 10rem\">cloud_upload</mat-icon>\r\n  <br>\r\n  <input type=\"file\" style=\"display: none;\" #filePicker>\r\n  <button (click)=\"filePicker.click()\" mat-flat-button>Select file</button>\r\n</div>\r\n\r\n<mat-list *ngIf=\"adapters$ | async as adapters\">\r\n  <span *ngFor=\"let adapter of adapters | objectKeys\">\r\n    <span *ngIf=\"adapters[adapter] as config\">\r\n      <mat-list-item *ngIf=\"config.adapter.uploads && enabled[adapter]\">\r\n\r\n        <span [style.color]=\"enabled[adapter] ? '' : '#ccc'\">\r\n          {{ config.adapter.title }}\r\n        </span>\r\n\r\n        <span class=\"spacer\"></span>\r\n\r\n        <mat-slide-toggle *ngIf=\"!isUploading; else uploadProgress\"\r\n                          [(ngModel)]=\"uploadEnabled[adapter]\"></mat-slide-toggle>\r\n\r\n        <ng-template #uploadProgress>\r\n          <mat-progress-bar *ngIf=\"uploadEnabled[adapter]\"\r\n                            mode=\"determinate\" [value]=\"uploadStatus[adapter]\"></mat-progress-bar>\r\n        </ng-template>\r\n      </mat-list-item>\r\n    </span>\r\n\r\n  <!--<pre>{{ adapters[adapter] | json }}</pre>-->\r\n\r\n  </span>\r\n  <mat-list-item>\r\n    <mat-checkbox [checked]=\"true\">Add metadata</mat-checkbox>\r\n  </mat-list-item>\r\n</mat-list>\r\n\r\n<!--<pre>{{ uploadEnabled | json }}</pre>-->\r\n\r\n<div class=\"upload-button\">\r\n  <button mat-raised-button (click)=\"doUpload()\">Upload</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/upload-page/upload-page.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/upload-page/upload-page.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spacer {\n  flex: 1 1 auto;\n  min-width: 2rem; }\n\n.upload-file,\n.upload-button {\n  margin-top: 1em;\n  text-align: center; }\n\nmat-progress-bar {\n  max-width: 70%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXBsb2FkLXBhZ2UvQzpcXFVzZXJzXFxUaW1cXGtlbmRyYWlvLWFwcC9zcmNcXGFwcFxccGFnZXNcXHVwbG9hZC1wYWdlXFx1cGxvYWQtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWM7RUFDZCxnQkFBZSxFQUNoQjs7QUFDRDs7RUFFRSxnQkFBZTtFQUNmLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLGVBQWMsRUFDZiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VwbG9hZC1wYWdlL3VwbG9hZC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbiAgbWluLXdpZHRoOiAycmVtO1xyXG59XHJcbi51cGxvYWQtZmlsZSxcclxuLnVwbG9hZC1idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDFlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbm1hdC1wcm9ncmVzcy1iYXIge1xyXG4gIG1heC13aWR0aDogNzAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/upload-page/upload-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/upload-page/upload-page.component.ts ***!
  \************************************************************/
/*! exports provided: UploadPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadPageComponent", function() { return UploadPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_page_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/page-title.service */ "./src/app/services/page-title.service.ts");
/* harmony import */ var _services_adapters_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/adapters.service */ "./src/app/services/adapters.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var UploadPageComponent = /** @class */ (function () {
    function UploadPageComponent(pageTitle, adapters, snackBar) {
        this.pageTitle = pageTitle;
        this.adapters = adapters;
        this.snackBar = snackBar;
        this.uploadStatus = {};
        this.uploadEnabled = {};
        this.isUploading = false;
    }
    Object.defineProperty(UploadPageComponent.prototype, "enabled", {
        get: function () { return this.adapters.enabledAdapters; },
        enumerable: true,
        configurable: true
    });
    UploadPageComponent.prototype.ngOnInit = function () {
        this.pageTitle.setTitle('Upload');
        this.adapters$ = this.adapters.adapters$;
        this.uploadEnabled = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.adapters.enabledAdapters);
    };
    UploadPageComponent.prototype.doUpload = function () {
        var _this = this;
        if (Object.keys(this.uploadEnabled).filter(function (key) { return _this.uploadEnabled[key]; }).length === 0) {
            return;
        }
        Object.keys(this.uploadEnabled).forEach(function (key) {
            _this.uploadStatus[key] = 0;
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(Object.keys(this.uploadEnabled)
            .filter(function (key) { return _this.uploadEnabled[key]; })
            .map(function (key) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(Math.random() * 30).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this.uploadStatus[key] += 1; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(100)); })).subscribe(function () {
            var message = 'Upload complete';
            _this.snackBar.open(message, 'OK', {
                duration: 5000,
                horizontalPosition: 'center',
                verticalPosition: 'top'
            });
            _this.isUploading = false;
        });
        this.isUploading = true;
    };
    UploadPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload-page',
            template: __webpack_require__(/*! ./upload-page.component.html */ "./src/app/pages/upload-page/upload-page.component.html"),
            styles: [__webpack_require__(/*! ./upload-page.component.scss */ "./src/app/pages/upload-page/upload-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_title_service__WEBPACK_IMPORTED_MODULE_2__["PageTitleService"],
            _services_adapters_service__WEBPACK_IMPORTED_MODULE_3__["AdaptersService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], UploadPageComponent);
    return UploadPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/user-page/user-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/user-page/user-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isAuthenticated; else notLoggedIn\">\r\n  <p>You are logged in as <em>{{ profile?.nickname }}</em></p>\r\n\r\n  <br>\r\n  <img *ngIf=\"profile?.picture\" alt=\"User profile pic\" [src]=\"profile.picture\">\r\n\r\n  <br><br>\r\n  <p>Last updated: <em>{{ profile?.updated_at }}</em></p>\r\n  <p>Name: <em>{{ profile?.name }}</em></p>\r\n  <p>Connected accounts:\r\n  </p>\r\n  <ul *ngIf=\"!!profile?.identities\">\r\n    <li *ngFor=\"let a of profile.identities\">\r\n      <b>{{ a.provider }}</b>\r\n      <!--({{ a.user_id }})-->\r\n      <ng-container *ngIf=\"a.provider === 'dropbox'\">\r\n        - <a routerLink=\"/dropbox\">Files</a>\r\n      </ng-container>\r\n    </li>\r\n  </ul>\r\n  <!--<pre>{{ profile | json }}</pre>-->\r\n  <button mat-raised-button (click)=\"onLogout()\">Logout</button>\r\n\r\n  <br><br>\r\n  <button mat-raised-button (click)=\"linkAccount()\">Link Account</button>\r\n</div>\r\n\r\n<ng-template #notLoggedIn>\r\n  <p>No profiles are saved on this device\r\n  </p>\r\n  <button mat-raised-button (click)=\"onLogin()\">Login</button>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/pages/user-page/user-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/user-page/user-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItcGFnZS91c2VyLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/user-page/user-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/user-page/user-page.component.ts ***!
  \********************************************************/
/*! exports provided: UserPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageComponent", function() { return UserPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_page_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/page-title.service */ "./src/app/services/page-title.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");




var UserPageComponent = /** @class */ (function () {
    function UserPageComponent(pageTitle, auth) {
        this.pageTitle = pageTitle;
        this.auth = auth;
    }
    Object.defineProperty(UserPageComponent.prototype, "isAuthenticated", {
        get: function () {
            return this.auth.isAuthenticated();
        },
        enumerable: true,
        configurable: true
    });
    UserPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageTitle.setTitle('User settings');
        if (this.auth.userProfile) {
            this.profile = this.auth.userProfile;
        }
        else {
            try {
                this.auth.getProfile(function (err, profile) {
                    _this.profile = profile;
                });
            }
            catch (e) {
                // There was an error fetching profile
                this.profile = {};
            }
        }
    };
    UserPageComponent.prototype.linkAccount = function () {
        this.auth.linkAccount();
    };
    UserPageComponent.prototype.onLogin = function () {
        this.auth.login();
    };
    UserPageComponent.prototype.onLogout = function () {
        this.auth.logout();
    };
    UserPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-page',
            template: __webpack_require__(/*! ./user-page.component.html */ "./src/app/pages/user-page/user-page.component.html"),
            styles: [__webpack_require__(/*! ./user-page.component.scss */ "./src/app/pages/user-page/user-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_title_service__WEBPACK_IMPORTED_MODULE_2__["PageTitleService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], UserPageComponent);
    return UserPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/visualise-page/visualise-page.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/visualise-page/visualise-page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/visualise-page/visualise-page.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/visualise-page/visualise-page.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Zpc3VhbGlzZS1wYWdlL3Zpc3VhbGlzZS1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/visualise-page/visualise-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/visualise-page/visualise-page.component.ts ***!
  \******************************************************************/
/*! exports provided: VisualisePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualisePageComponent", function() { return VisualisePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_page_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/page-title.service */ "./src/app/services/page-title.service.ts");



var VisualisePageComponent = /** @class */ (function () {
    function VisualisePageComponent(pageTitle) {
        this.pageTitle = pageTitle;
    }
    VisualisePageComponent.prototype.ngOnInit = function () {
        this.pageTitle.setTitle('Visualise');
    };
    VisualisePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-visualise-page',
            template: __webpack_require__(/*! ./visualise-page.component.html */ "./src/app/pages/visualise-page/visualise-page.component.html"),
            styles: [__webpack_require__(/*! ./visualise-page.component.scss */ "./src/app/pages/visualise-page/visualise-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_title_service__WEBPACK_IMPORTED_MODULE_2__["PageTitleService"]])
    ], VisualisePageComponent);
    return VisualisePageComponent;
}());



/***/ }),

/***/ "./src/app/pipes/object-keys.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/pipes/object-keys.pipe.ts ***!
  \*******************************************/
/*! exports provided: ObjectKeysPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectKeysPipe", function() { return ObjectKeysPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ObjectKeysPipe = /** @class */ (function () {
    function ObjectKeysPipe() {
    }
    ObjectKeysPipe.prototype.transform = function (value, args) {
        // console.log(Object.keys(value));
        return value ? Object.keys(value) : [];
    };
    ObjectKeysPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'objectKeys'
        })
    ], ObjectKeysPipe);
    return ObjectKeysPipe;
}());



/***/ }),

/***/ "./src/app/services/adapters.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/adapters.service.ts ***!
  \**********************************************/
/*! exports provided: AdaptersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdaptersService", function() { return AdaptersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var AdaptersService = /** @class */ (function () {
    function AdaptersService(http) {
        var _this = this;
        this.http = http;
        this.adapterKeys = [];
        this.adapters$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this.enabledAdapters = {};
        var savedState = localStorage.getItem('kendraio-adapter-state');
        if (savedState) {
            this.enabledAdapters = JSON.parse(savedState);
        }
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].adapterConfig)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (adapters) {
            _this.adapterKeys = Object.keys(adapters);
        }))
            .subscribe(function (adapters) {
            // console.log(adapters);
            _this.adapters$.next(adapters);
        });
    }
    AdaptersService.prototype.getAdapter = function (id) {
        return this.adapters$.pipe(
        // tap(console.log)
        );
    };
    AdaptersService.prototype.resetApp = function () {
        this.enabledAdapters = {};
        this.saveState();
    };
    AdaptersService.prototype.enableAll = function () {
        var _this = this;
        this.adapterKeys.forEach(function (key) {
            _this.enableAdapter(key);
        });
    };
    AdaptersService.prototype.saveState = function () {
        localStorage.setItem('kendraio-adapter-state', JSON.stringify(this.enabledAdapters));
    };
    AdaptersService.prototype.enableAdapter = function (adapter) {
        this.enabledAdapters[adapter] = true;
        this.saveState();
    };
    AdaptersService.prototype.disableAdapter = function (adapter) {
        this.enabledAdapters[adapter] = false;
        this.saveState();
    };
    AdaptersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AdaptersService);
    return AdaptersService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! auth0-js */ "./node_modules/auth0-js/dist/auth0.min.esm.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var AuthService = /** @class */ (function () {
    function AuthService(router, http) {
        this.router = router;
        this.http = http;
        var authConfig = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].auth0, { redirectUri: window.location.origin + "/callback", responseType: 'token id_token', scope: 'openid email profile read:current_user read:user_idp_tokens update:current_user_identities' });
        this.auth0 = new auth0_js__WEBPACK_IMPORTED_MODULE_2__["WebAuth"](authConfig);
    }
    AuthService.prototype.login = function () {
        this.auth0.authorize();
    };
    AuthService.prototype.linkAccount = function () {
        localStorage.setItem('auth-linking', 'linking');
        this.auth0.authorize();
    };
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            console.log({ authResult: authResult });
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                var isLinking = localStorage.getItem('auth-linking');
                if (isLinking) {
                    localStorage.removeItem('auth-linking');
                    _this.linkAccountResult(authResult);
                }
                else {
                    _this.setSession(authResult);
                }
                _this.router.navigate(['/user']);
            }
            else if (err) {
                console.log(err);
                _this.router.navigate(['/user']);
            }
        });
    };
    AuthService.prototype.linkAccountResult = function (authResult) {
        var idToken = authResult.idToken;
        var firstIdToken = localStorage.getItem('id_token');
        var accessToken = localStorage.getItem('access_token');
        var auth0Manage = new auth0_js__WEBPACK_IMPORTED_MODULE_2__["Management"](tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].auth0, { token: firstIdToken }));
        this.auth0.client.userInfo(accessToken, function (err, profile) {
            if (profile) {
                var sub = profile.sub;
                auth0Manage.linkUser(sub, idToken, console.log);
            }
        });
    };
    AuthService.prototype.setSession = function (authResult) {
        // Set the time that the Access Token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // Go back to the home route
        this.router.navigate(['/']);
    };
    AuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // Access Token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
        return new Date().getTime() < expiresAt;
    };
    AuthService.prototype.getProfile = function (cb) {
        var _this = this;
        if (!!this.userProfile && this.userProfile.identities) {
            cb(null, this.userProfile);
            return;
        }
        var accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            throw new Error('Access Token must exist to fetch profile');
        }
        var self = this;
        this.auth0.client.userInfo(accessToken, function (err, profile) {
            if (profile) {
                var sub = profile.sub;
                // const idToken = localStorage.getItem('id_token');
                var url = 'https://kendraio-auth0-proxy-qq0te0iza.now.sh/';
                var body = {
                    userId: sub
                };
                var headers = {
                    'authorization': "Bearer " + accessToken
                };
                _this.http.post(url, body, { headers: headers }).subscribe(function (userProfile) {
                    _this.userProfile = userProfile;
                    cb(null, userProfile);
                });
            }
        });
    };
    AuthService.prototype.getIdentity = function (provider) {
        if (!this.userProfile || !this.userProfile.identities) {
            return null;
        }
        return this.userProfile.identities.find(function (idp) { return idp.provider === provider; });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/document-repository.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/document-repository.service.ts ***!
  \*********************************************************/
/*! exports provided: DocumentRepositoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentRepositoryService", function() { return DocumentRepositoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var pouchdb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pouchdb */ "./node_modules/pouchdb/lib/index-browser.es.js");
/* harmony import */ var pouchdb_find__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pouchdb-find */ "./node_modules/pouchdb-find/lib/index-browser.es.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _schema_repository_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./schema-repository.service */ "./src/app/services/schema-repository.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");





pouchdb__WEBPACK_IMPORTED_MODULE_3__["default"].plugin(pouchdb_find__WEBPACK_IMPORTED_MODULE_4__["default"]);




var DocumentRepositoryService = /** @class */ (function () {
    function DocumentRepositoryService(schemaRepo) {
        this.schemaRepo = schemaRepo;
    }
    DocumentRepositoryService.prototype.resetApp = function () {
        var _this = this;
        this.db.destroy();
        // Defer execution of this to ensure database deleted before re-init
        setTimeout(function () { return _this.init(); }, 0);
    };
    // Initialise the database
    // and create the `by_label` index if it doesn't exist
    DocumentRepositoryService.prototype.init = function () {
        var _this = this;
        this.db = new pouchdb__WEBPACK_IMPORTED_MODULE_3__["default"]('kendraio');
        return this.db.createIndex({ index: { fields: ['@label'] } })
            .then(function () { return _this.db.get('_design/kendraio_docs').catch(function () { return ({ _rev: null }); }); })
            .then(function (_a) {
            var _rev = _a._rev;
            return !_rev ? _this.db.put({
                _id: '_design/kendraio_docs',
                _rev: _rev,
                views: {
                    by_label: {
                        map: function (doc) { emit(doc['@label']); }.toString()
                    }
                }
            }) : {};
        });
    };
    DocumentRepositoryService.prototype.listAll = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.db.query('kendraio_docs/by_label'));
    };
    DocumentRepositoryService.prototype.listAllOfType = function (type) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.db.allDocs({
            include_docs: true,
            attachments: true,
            startkey: type,
            endkey: type + "\uFFF0"
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (_a) {
            var rows = _a.rows;
            return rows.map(function (_a) {
                var doc = _a.doc;
                return doc;
            });
        }));
    };
    DocumentRepositoryService.prototype.addNew = function (schemaName, initialValues) {
        if (initialValues === void 0) { initialValues = {}; }
        var _id = schemaName + ":" + Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])();
        return this.putDoc(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ _id: _id, '@schema': schemaName }, initialValues));
    };
    // When fetching document, also fetch attachments and add to doc as per schema
    DocumentRepositoryService.prototype.getDoc = function (id) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.db.get(id, { attachments: true, binary: true }).then(function (doc) {
            var attachments = _this.schemaRepo.getSchema(doc['@schema']).attachments;
            return (attachments || []).reduce(function (a, v) {
                if (doc['_attachments'] && doc['_attachments'][v]) {
                    a[v] = doc['_attachments'][v]['data'];
                }
                return a;
            }, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, Object(lodash_es__WEBPACK_IMPORTED_MODULE_8__["omit"])(doc, ['_attachments'])));
        }));
    };
    // When saving a document, remove attachments (as per schema) and store separately
    DocumentRepositoryService.prototype.putDoc = function (doc) {
        var _this = this;
        var _a = this.schemaRepo.getSchema(doc['@schema']), labelField = _a.labelField, attachments = _a.attachments;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.db.put(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, Object(lodash_es__WEBPACK_IMPORTED_MODULE_8__["omit"])(doc, attachments), { '@label': doc[labelField] })).then(function (r) {
            return Promise.all((attachments || []).map(function (key) {
                if (doc && doc[key]) {
                    var docId = doc._id;
                    var attachmentId = key;
                    var attachmentData = doc[key];
                    var type = attachmentData.type;
                    return _this.db.putAttachment(docId, attachmentId, r.rev, attachmentData, type);
                }
            })).then(function () { return r; });
        }));
    };
    DocumentRepositoryService.prototype.deleteDoc = function (id) {
        var _this = this;
        return this.getDoc(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (doc) { return _this.putDoc(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, doc, { _deleted: true })); }));
    };
    DocumentRepositoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_schema_repository_service__WEBPACK_IMPORTED_MODULE_6__["SchemaRepositoryService"]])
    ], DocumentRepositoryService);
    return DocumentRepositoryService;
}());



/***/ }),

/***/ "./src/app/services/page-title.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/page-title.service.ts ***!
  \************************************************/
/*! exports provided: PageTitleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTitleService", function() { return PageTitleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var PageTitleService = /** @class */ (function () {
    function PageTitleService() {
        this.pageTitle$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('Kendraio App');
    }
    PageTitleService.prototype.setTitle = function (title) {
        this.pageTitle$.next(title);
    };
    PageTitleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageTitleService);
    return PageTitleService;
}());



/***/ }),

/***/ "./src/app/services/schema-repository.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/schema-repository.service.ts ***!
  \*******************************************************/
/*! exports provided: SchemaRepositoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemaRepositoryService", function() { return SchemaRepositoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var SchemaRepositoryService = /** @class */ (function () {
    function SchemaRepositoryService(http) {
        this.http = http;
        this.schemas = {};
    }
    SchemaRepositoryService.prototype.init = function () {
        var _this = this;
        var enabledSchemas = [
            // 'Person',
            'Photo', 'Project', 'Audio', 'Clip',
            'file', 'music-recording', 'music-release', 'music-work', 'payment',
            'claim', 'video', 'person'
        ];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])(enabledSchemas.map(function (schemaName) { return _this.http
            .get("/assets/schemas/" + schemaName + ".yaml", { responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (text) { return Object(js_yaml__WEBPACK_IMPORTED_MODULE_4__["safeLoad"])(text); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (schema) { return _this.schemas[schemaName] = schema; })); }))
            .toPromise();
    };
    SchemaRepositoryService.prototype.getSchemaList = function () {
        var _this = this;
        return Object.keys(this.schemas).filter(function (key) { return !_this.schemas[key].hidden; });
    };
    SchemaRepositoryService.prototype.getSchema = function (name) {
        return this.schemas[name];
    };
    SchemaRepositoryService.prototype.getLabelFieldForSchema = function (schemaName) {
        var schema = this.getSchema(schemaName);
        var labelField = this.getSchema(schemaName).labelField;
        return schema.fields.find(function (_a) {
            var id = _a.id;
            return id === labelField;
        });
    };
    SchemaRepositoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SchemaRepositoryService);
    return SchemaRepositoryService;
}());



/***/ }),

/***/ "./src/app/services/test-data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/test-data.service.ts ***!
  \***********************************************/
/*! exports provided: TestDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestDataService", function() { return TestDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _document_repository_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./document-repository.service */ "./src/app/services/document-repository.service.ts");
/* harmony import */ var _schema_repository_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schema-repository.service */ "./src/app/services/schema-repository.service.ts");






// Service for communicating with the Kendraio Test API
// The data is pulled from a Google Spreadsheet via an API proxy.
// For more details see this repo:
// https://github.com/kendraio/google-sheets-api-proxy
var KENDRAIO_API = 'https://google-sheets-api-proxy.now.sh/';
var TestDataService = /** @class */ (function () {
    function TestDataService(http, docs, schemas) {
        this.http = http;
        this.docs = docs;
        this.schemas = schemas;
    }
    // Get the list of valid entity types
    TestDataService.prototype.listEntityTypes = function ($config) {
        if ($config === void 0) { $config = { live: false }; }
        if ($config.live) {
            return this.http.get(KENDRAIO_API);
        }
        return this.schemas.getSchemaList();
    };
    TestDataService.prototype.listEntities = function (type, $config) {
        if ($config === void 0) { $config = { live: false }; }
        if ($config.live) {
            return this.http.get("" + KENDRAIO_API + type);
        }
        return this.docs.listAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
            var rows = _a.rows;
            return rows.filter(function (_a) {
                var id = _a.id;
                return id.startsWith(type);
            });
        }));
    };
    TestDataService.prototype.listAll = function (type, $config) {
        if ($config === void 0) { $config = { live: false }; }
        if ($config.live) {
            return this.http.get("" + KENDRAIO_API + type + "/all").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
                var header = _a.header, data = _a.data;
                return data.map(function (row) {
                    return header.reduce(function (obj, key, i) {
                        obj[key] = row[i];
                        return obj;
                    }, {});
                });
            }));
        }
        return this.docs.listAllOfType(type);
    };
    TestDataService.prototype.getEntity = function (type, id, $config) {
        if ($config === void 0) { $config = { live: false }; }
        if ($config.live) {
            return this.http.get("" + KENDRAIO_API + type + "/" + id);
        }
        return this.docs.getDoc(id);
    };
    TestDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _document_repository_service__WEBPACK_IMPORTED_MODULE_4__["DocumentRepositoryService"],
            _schema_repository_service__WEBPACK_IMPORTED_MODULE_5__["SchemaRepositoryService"]])
    ], TestDataService);
    return TestDataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    adapterConfig: 'https://kendraio.github.io/kendraio-adapter/config.json',
    auth0: {
        clientID: 'BpSIsaDagBnDpAZyfJOVoAqG1r041Nj7',
        domain: 'kendraio.eu.auth0.com',
        responseType: 'token id_token',
        audience: 'https://kendraio.eu.auth0.com/api/v2/',
        redirectUri: 'http://localhost:4200/callback',
        scope: 'openid profile'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Tim\kendraio-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map