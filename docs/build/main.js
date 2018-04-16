webpackJsonp([0],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAdaptersState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getNodesState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return metaReducers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngrx_store_localstorage__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngrx_store_localstorage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ngrx_store_localstorage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adapters_reducer__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nodes_reducer__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_immutable__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_immutable__);





var reducers = {
    adapters: __WEBPACK_IMPORTED_MODULE_2__adapters_reducer__["a" /* adaptersReducer */],
    nodes: __WEBPACK_IMPORTED_MODULE_3__nodes_reducer__["a" /* nodesReducer */]
};
var getAdaptersState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["n" /* createFeatureSelector */])('adapters');
var getNodesState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["n" /* createFeatureSelector */])('nodes');
function localStorageSyncReducer(reducer) {
    return Object(__WEBPACK_IMPORTED_MODULE_1_ngrx_store_localstorage__["localStorageSync"])({
        keys: [
            'nodes',
            {
                adapters: {
                    serialize: function (_a) {
                        var enabled = _a.enabled;
                        return enabled;
                    },
                    deserialize: function (enabled) {
                        // console.log(enabled);
                        return { enabled: Object(__WEBPACK_IMPORTED_MODULE_4_immutable__["Map"])(enabled), adapters: Object(__WEBPACK_IMPORTED_MODULE_4_immutable__["Map"])() };
                    }
                }
            }
        ],
        rehydrate: true
    })(reducer);
}
var metaReducers = [
    localStorageSyncReducer
];
//# sourceMappingURL=reducers.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAdapterEnabledList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getSelectedAdapter; });
/* unused harmony export getSelectedAdapterProp */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getSelectedAdapterNodeTypes; });
/* unused harmony export getSelectedAdapterLinkTypes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers__ = __webpack_require__(110);


var getAdapterEnabledList = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(__WEBPACK_IMPORTED_MODULE_1__reducers__["a" /* getAdaptersState */], function (_a) {
    var adapters = _a.adapters, enabled = _a.enabled;
    return enabled.map(function (v, k) { return ({ enabled: v, config: adapters.get(k) }); });
});
var getAdapter = function (name) { return Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(__WEBPACK_IMPORTED_MODULE_1__reducers__["a" /* getAdaptersState */], function (_a) {
    var adapters = _a.adapters;
    return adapters.get(name);
}); };
var getSelectedAdapter = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(__WEBPACK_IMPORTED_MODULE_1__reducers__["a" /* getAdaptersState */], function (_a) {
    var selectedAdapter = _a.selectedAdapter;
    return selectedAdapter;
});
var getSelectedAdapterProp = function (prop) { return Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(__WEBPACK_IMPORTED_MODULE_1__reducers__["a" /* getAdaptersState */], function (_a) {
    var adapters = _a.adapters, selectedAdapter = _a.selectedAdapter;
    if (selectedAdapter) {
        var adapter = adapters.get(selectedAdapter);
        return adapter[prop];
    }
    return [];
}); };
var getSelectedAdapterNodeTypes = getSelectedAdapterProp('nodeTypes');
var getSelectedAdapterLinkTypes = getSelectedAdapterProp('linkTypes');
//# sourceMappingURL=selectors.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppActions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_unionize__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_unionize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_unionize__);

var AppActions = Object(__WEBPACK_IMPORTED_MODULE_0_unionize__["unionize"])({
    goHome: Object(__WEBPACK_IMPORTED_MODULE_0_unionize__["ofType"])()
}, 'type', 'payload');
//# sourceMappingURL=actions.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_state_nodes_selectors__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_node__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_state_nodes_actions__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_state_adapters_selectors__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_state_adapters_actions__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(navCtrl, store) {
        this.navCtrl = navCtrl;
        this.store = store;
        this.message = '';
    }
    HomePage.prototype.ngOnInit = function () {
        this.hasNodes$ = this.store.select(__WEBPACK_IMPORTED_MODULE_3__app_state_nodes_selectors__["b" /* hasNodes */]);
        this.nodes$ = this.store.select(__WEBPACK_IMPORTED_MODULE_3__app_state_nodes_selectors__["a" /* getNodes */]);
        this.selectedAdapter$ = this.store.select(__WEBPACK_IMPORTED_MODULE_6__app_state_adapters_selectors__["c" /* getSelectedAdapter */]);
        this.selectedAdapterNodeTypes$ = this.store.select(__WEBPACK_IMPORTED_MODULE_6__app_state_adapters_selectors__["d" /* getSelectedAdapterNodeTypes */]);
    };
    HomePage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__node_node__["a" /* NodePage */], {
            item: item,
            adapterId: 'm-rin'
        });
    };
    HomePage.prototype.onAdapterChange = function (id) {
        this.adapterId = id;
        this.store.dispatch(__WEBPACK_IMPORTED_MODULE_7__app_state_adapters_actions__["a" /* AdaptersActions */].selectAdapter({ id: id }));
    };
    HomePage.prototype.onTypeChange = function (type) {
        this.nodeType = type;
    };
    HomePage.prototype.addNode = function () {
        if (this.adapterId && this.nodeType) {
            this.message = '';
            this.store.dispatch(__WEBPACK_IMPORTED_MODULE_5__app_state_nodes_actions__["a" /* NodesActions */].addNode({ adapterId: this.adapterId, type: this.nodeType }));
        }
        else {
            this.message = 'Select adapter and node type';
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/home/darren/kendra/2018-02-26/kendraioApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Dashboard</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div *ngIf="hasNodes$ | async; else storageEmpty">\n\n    <ion-list>\n      <button ion-item *ngFor="let i of nodes$ | async" (click)="itemTapped($event, i)">\n        <ion-avatar item-start>\n          <div class="type-icon">\n            {{ i.type[0] }}\n          </div>\n        </ion-avatar>\n        <h3>{{ i?.FullName }}{{ i?.Title }}{{ i?.name }}{{ i?.SessionType }}</h3>\n        <p>{{ i.type }} {{ i.id }}</p>\n      </button>\n    </ion-list>\n\n    <!--{{ nodes$ | async | json }}-->\n\n  </div>\n\n  <ng-template #storageEmpty>\n    <ion-card>\n      <ion-card-header>Welcome to the Kendraio App</ion-card-header>\n      <ion-card-content>\n        <p>To get started import some data.</p>\n      </ion-card-content>\n    </ion-card>\n  </ng-template>\n\n\n  <ion-card>\n    <ion-card-header>Add node</ion-card-header>\n    <ion-list>\n      <ion-item color="danger" *ngIf="message">{{ message }}</ion-item>\n      <ion-item>\n        <ion-label>Adapter</ion-label>\n        <ion-select (ionChange)="onAdapterChange($event)">\n          <ion-option value="m-rin">m-rin</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Node Type</ion-label>\n        <ion-select (ionChange)="onTypeChange($event)">\n          <ion-option *ngFor="let t of selectedAdapterNodeTypes$ | async" [value]="t">{{ t }}</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n    <div padding>\n      <button ion-button icon-left block (click)="addNode()">\n        <ion-icon name="add"></ion-icon> add new node\n      </button>\n    </div>\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/darren/kendra/2018-02-26/kendraioApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_kendraio_forms_service__ = __webpack_require__(359);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NodePage = (function () {
    function NodePage(navCtrl, navParams, forms) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.forms = forms;
        this.validLinkTypes = [];
        this.message = '';
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        this.adapterId = navParams.get('adapterId');
    }
    NodePage_1 = NodePage;
    NodePage.prototype.ngOnInit = function () {
        this.formModel = this.forms.getNodeForm(this.selectedItem, this.adapterId);
        this.formGroup = this.forms.createFormGroup(this.formModel);
        this.validLinkTypes = this.forms.getValidLinksForNodeType(this.adapterId, this.selectedItem.type);
    };
    NodePage.prototype.gotoNode = function (id) {
        var item = this.forms.getNodeFromId(id);
        this.navCtrl.push(NodePage_1, {
            item: item,
            adapterId: 'm-rin'
        });
    };
    NodePage.prototype.onSelectLinkType = function (l) {
        this.selectedLinkType = l;
    };
    NodePage.prototype.addLink = function () {
        if (this.selectedLinkType) {
        }
        else {
            this.message = 'select link type';
        }
    };
    NodePage = NodePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-node',template:/*ion-inline-start:"/home/darren/kendra/2018-02-26/kendraioApp/src/pages/node/node.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Node</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <form *ngIf="formGroup" [formGroup]="formGroup">\n    <dynamic-ionic-form class="has-pivot-button" [group]="formGroup" [model]="formModel">\n      <ng-template modelId="target" align="START" let-value="value">\n        <ion-icon class="pivot-button" name="link" (click)="gotoNode(value)"></ion-icon>\n      </ng-template>\n    </dynamic-ionic-form>\n  </form>\n\n  <div padding>\n    <button ion-button color="primary" block>Save</button>\n  </div>\n\n  <ion-card *ngIf="validLinkTypes.length > 0">\n    <ion-card-header>Add link to this {{ selectedItem.type }}</ion-card-header>\n    <ion-list>\n      <ion-item color="danger" *ngIf="message">{{ message }}</ion-item>\n      <ion-item>\n        <ion-label>Link type</ion-label>\n        <ion-select (ionChange)="onSelectLinkType($event)">\n          <ion-option *ngFor="let l of validLinkTypes" [value]="l">{{ l }}</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n    <div padding>\n    <button ion-button block icon-left (click)="addLink()">\n      <ion-icon name="add"></ion-icon> add new link\n    </button>\n    </div>\n  </ion-card>\n\n\n\n  <!--{{ selectedItem | json }}-->\n\n</ion-content>\n'/*ion-inline-end:"/home/darren/kendra/2018-02-26/kendraioApp/src/pages/node/node.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_services_kendraio_forms_service__["a" /* KendraioFormsService */]])
    ], NodePage);
    return NodePage;
    var NodePage_1;
}());

//# sourceMappingURL=node.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reducers__ = __webpack_require__(110);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__reducers__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__reducers__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state_module__ = __webpack_require__(535);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__state_module__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetchText; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_observable_fromPromise__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_observable_fromPromise__);

var fetchText = function (file) { return Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_observable_fromPromise__["fromPromise"])(fetch(file).then(function (data) { return data.text(); })); };
//# sourceMappingURL=fetch.js.map

/***/ }),

/***/ 259:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 259;

/***/ }),

/***/ 305:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 305;

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KendraioFormsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_dynamic_forms_core__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var KendraioFormsService = (function () {
    function KendraioFormsService(forms, store) {
        var _this = this;
        this.forms = forms;
        this.store = store;
        this.nodes = [];
        this.links = [];
        this.store.select(__WEBPACK_IMPORTED_MODULE_2__state__["b" /* getAdaptersState */]).subscribe(function (_a) {
            var adapters = _a.adapters;
            _this.adapters = adapters;
        });
        this.store.select(__WEBPACK_IMPORTED_MODULE_2__state__["c" /* getNodesState */]).subscribe(function (_a) {
            var nodes = _a.nodes, links = _a.links;
            _this.nodes = nodes;
            _this.links = links;
        });
    }
    KendraioFormsService.prototype.getValidLinksForNodeType = function (adapterId, nodeType) {
        var adapter = this.adapters.get(adapterId);
        return Object(__WEBPACK_IMPORTED_MODULE_4_lodash__["get"])(adapter, "schemas." + nodeType + ".links", []);
    };
    KendraioFormsService.prototype.getNodeFromId = function (id) {
        return this.nodes.find(function (n) { return n.id === id; });
    };
    KendraioFormsService.prototype.getNodeForm = function (node, adapterId) {
        var adapter = this.adapters.get(adapterId);
        if (adapter && adapter.schemas && adapter.schemas[node.type]) {
            var schema = adapter.schemas[node.type];
            // console.log(schema);
            return this.forms.fromJSON(this.baseNodeFields(node).concat(this.propertyFields(node, schema.properties), this.linkFields(node, adapter)));
        }
        return this.forms.fromJSON([]);
    };
    KendraioFormsService.prototype.baseNodeFields = function (node) {
        return [
            {
                id: 'id',
                label: 'UUID',
                type: 'INPUT',
                disabled: true,
                value: node.id
            },
            {
                id: 'type',
                label: 'Type',
                type: 'INPUT',
                disabled: true,
                value: node.type
            }
        ];
    };
    KendraioFormsService.prototype.baseLinkFields = function (link) {
        return [
            {
                id: 'target',
                label: 'Target',
                disabled: true,
                type: 'INPUT',
                value: link.target,
            },
            {
                id: 'type',
                label: 'Type',
                disabled: true,
                type: 'INPUT',
                value: link.type,
            }
        ];
    };
    KendraioFormsService.prototype.propertyFields = function (entity, properties) {
        return Object.keys(properties).map(function (id) { return ({
            id: id,
            label: (properties[id].options && properties[id].options.label) ? properties[id].options.label : id,
            type: (properties[id].options && properties[id].options.fieldType) ? properties[id].options.fieldType : 'INPUT',
            value: Object(__WEBPACK_IMPORTED_MODULE_4_lodash__["isString"])(entity[id])
                ? entity[id]
                : entity[id] && entity[id]['_UserDefinedValue'] && Object(__WEBPACK_IMPORTED_MODULE_4_lodash__["isString"])(entity[id]['_UserDefinedValue'])
                    ? entity[id]['_UserDefinedValue']
                    : ''
        }); });
        // return [
        //   {
        //     id: 'properties',
        //     legend: 'properties',
        //     type: 'GROUP',
        //     group: Object.keys(properties).map(id => ({
        //       id,
        //       label: (properties[id].options && properties[id].options.label) ? properties[id].options.label : id,
        //       type: (properties[id].options && properties[id].options.fieldType) ? 'TEXTAREA' : 'INPUT',
        //       value: entity[id]
        //     }))
        //   }
        // ];
    };
    KendraioFormsService.prototype.linkFields = function (node, adapter) {
        var _this = this;
        var links = this.links.filter(function (l) { return l.source === node.id; });
        return [
            {
                type: 'ARRAY',
                id: 'links',
                initialCount: links.length,
                groups: links.map(function (l) {
                    if (adapter.schemas && adapter.schemas[l.type] && adapter.schemas[l.type].properties) {
                        return {
                            group: _this.baseLinkFields(l).concat(_this.propertyFields(l, adapter.schemas[l.type].properties))
                        };
                    }
                    return {
                        group: _this.baseLinkFields(l).slice()
                    };
                }),
                groupPrototype: [
                    {
                        id: 'target',
                        label: 'Target',
                        type: 'INPUT'
                    }
                ]
            }
        ];
    };
    KendraioFormsService.prototype.createFormGroup = function (formModel) {
        return this.forms.createFormGroup(formModel);
    };
    KendraioFormsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ng_dynamic_forms_core__["p" /* DynamicFormService */], __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]])
    ], KendraioFormsService);
    return KendraioFormsService;
}());

//# sourceMappingURL=kendraio-forms.service.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_state_nodes_actions__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_state_app_actions__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImportPage = (function () {
    function ImportPage(navCtrl, store) {
        this.navCtrl = navCtrl;
        this.store = store;
        this.adapter = 'm-rin';
    }
    ImportPage.prototype.pickFile = function () {
        this.fileInput.nativeElement.click();
    };
    ImportPage.prototype.fileChange = function (files) {
        if (files.length > 0) {
            var file = files[0];
            this.store.dispatch(__WEBPACK_IMPORTED_MODULE_2__app_state_nodes_actions__["a" /* NodesActions */].loadFile({ file: file, adapterId: this.adapter }));
            this.store.dispatch(__WEBPACK_IMPORTED_MODULE_4__app_state_app_actions__["a" /* AppActions */].goHome({}));
        }
    };
    ImportPage.prototype.demoData = function () {
        this.store.dispatch(__WEBPACK_IMPORTED_MODULE_2__app_state_nodes_actions__["a" /* NodesActions */].demoData({}));
        this.store.dispatch(__WEBPACK_IMPORTED_MODULE_4__app_state_app_actions__["a" /* AppActions */].goHome({}));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ImportPage.prototype, "fileInput", void 0);
    ImportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-import',template:/*ion-inline-start:"/home/darren/kendra/2018-02-26/kendraioApp/src/pages/import/import.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Import</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-item>\n      <ion-label>Adapter</ion-label>\n      <ion-select [(ngModel)]="adapter">\n        <ion-option value="m-rin">m-rin</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n\n  <div class="import">\n\n    <input #fileInput\n           type="file"\n           accept=".xml"\n           [hidden]="true"\n           (change)="fileChange($event.target.files)" />\n\n    <div class="import-file">\n      <button class="import-button" (click)="pickFile()">\n        <ion-icon name="cloud-upload"></ion-icon>\n      </button>\n      <button ion-button color="light" (click)="pickFile()">Import file</button>\n    </div>\n\n    <button ion-button color="light" (click)="demoData()">Load demo data</button>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/darren/kendra/2018-02-26/kendraioApp/src/pages/import/import.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */]])
    ], ImportPage);
    return ImportPage;
}());

//# sourceMappingURL=import.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualisePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_selection__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_force__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_state__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_d3_scale__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_d3_scale_chromatic__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_d3_drag__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_d3__ = __webpack_require__(834);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__node_node__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var VisualisePage = (function () {
    function VisualisePage(navCtrl, store, zone) {
        this.navCtrl = navCtrl;
        this.store = store;
        this.zone = zone;
        this.width = 0;
        this.height = 0;
        this.color = Object(__WEBPACK_IMPORTED_MODULE_6_d3_scale__["a" /* scaleOrdinal */])(__WEBPACK_IMPORTED_MODULE_7_d3_scale_chromatic__["a" /* schemeCategory10 */]);
        this.isLoaded = false;
    }
    VisualisePage.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.store.select(__WEBPACK_IMPORTED_MODULE_5__app_state__["c" /* getNodesState */]).subscribe(function (_a) {
            var nodes = _a.nodes, links = _a.links;
            _this.nodes = nodes;
            _this.links = JSON.parse(JSON.stringify(links));
            // console.log({ nodes, links });
        });
    };
    VisualisePage.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    VisualisePage.prototype.itemTapped = function (item) {
        // console.log(item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__node_node__["a" /* NodePage */], {
            item: item,
            adapterId: 'm-rin'
        });
    };
    VisualisePage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.svg = Object(__WEBPACK_IMPORTED_MODULE_2_d3_selection__["f" /* select */])(this.svgEl.nativeElement);
        this.width = +this.svgEl.nativeElement.clientWidth;
        this.height = +this.svgEl.nativeElement.clientHeight;
        this.zone.runOutsideAngular(function () {
            _this.initSimulation();
        });
    };
    VisualisePage.prototype.initSimulation = function () {
        var _this = this;
        // console.log({ n: this.nodes, l: this.links });
        this.simulation = Object(__WEBPACK_IMPORTED_MODULE_3_d3_force__["d" /* forceSimulation */])()
            .force('link', Object(__WEBPACK_IMPORTED_MODULE_3_d3_force__["c" /* forceLink */])().id(function (n) { return n.id; }).strength(function (l) { return 0.0025; }))
            .force('collide', Object(__WEBPACK_IMPORTED_MODULE_3_d3_force__["b" /* forceCollide */])(60))
            .force('center', Object(__WEBPACK_IMPORTED_MODULE_3_d3_force__["a" /* forceCenter */])(this.width / 2, this.height / 2))
            .alphaDecay(0.05);
        var link = this.svg.append("g")
            .attr("class", "links")
            .selectAll("line")
            .data(this.links)
            .enter().append("line")
            .attr('stroke', '#ccc')
            .attr("stroke-width", 1);
        var node = this.svg.append("g")
            .attr("class", "nodes")
            .selectAll("circle")
            .data(this.nodes)
            .enter()
            .append('g')
            .call(Object(__WEBPACK_IMPORTED_MODULE_8_d3_drag__["a" /* drag */])()
            .on("start", function (d) {
            if (!__WEBPACK_IMPORTED_MODULE_9_d3__["a" /* event */].active)
                _this.simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        })
            .on("drag", function (d) {
            d.fx = __WEBPACK_IMPORTED_MODULE_9_d3__["a" /* event */].x;
            d.fy = __WEBPACK_IMPORTED_MODULE_9_d3__["a" /* event */].y;
        })
            .on("end", function (d) {
            if (!__WEBPACK_IMPORTED_MODULE_9_d3__["a" /* event */].active)
                _this.simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }));
        node
            .append("circle")
            .attr("r", 10)
            .attr("fill", function (d) { return _this.color(d.type); });
        node
            .append('text')
            .attr('dx', 12)
            .attr('dy', '0.35em')
            .text(function (d) {
            //
            return d['FullName'] || d['Title'] || d['name'] || d['Comment'] || d.id;
        })
            .on('click', function (e) { return _this.itemTapped(e); });
        node.append('title')
            .text(function (d) { return d.id; });
        this.simulation.nodes(this.nodes).on('tick', function () {
            link
                .attr("x1", function (d) { return d.source.x; })
                .attr("y1", function (d) { return d.source.y; })
                .attr("x2", function (d) { return d.target.x; })
                .attr("y2", function (d) { return d.target.y; });
            node
                .attr('transform', function (d) { return "translate(" + d.x + "," + d.y + ")"; });
        });
        this.simulation.force('link').links(this.links);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('svg'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], VisualisePage.prototype, "svgEl", void 0);
    VisualisePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-visualise',template:/*ion-inline-start:"/home/darren/kendra/2018-02-26/kendraioApp/src/pages/visualise/visualise.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Visualise</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <svg #svg style="width: 100%; height: 100%"></svg>\n\n</ion-content>\n'/*ion-inline-end:"/home/darren/kendra/2018-02-26/kendraioApp/src/pages/visualise/visualise.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["h" /* Store */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], VisualisePage);
    return VisualisePage;
}());

//# sourceMappingURL=visualise.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdaptersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_state_adapters_selectors__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_state_adapters_actions__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdaptersPage = (function () {
    function AdaptersPage(navCtrl, store) {
        this.navCtrl = navCtrl;
        this.store = store;
    }
    AdaptersPage.prototype.ngOnInit = function () {
        this.adapters$ = this.store.select(__WEBPACK_IMPORTED_MODULE_3__app_state_adapters_selectors__["b" /* getAdapterEnabledList */]).pipe();
    };
    AdaptersPage.prototype.onEnable = function (id) {
        this.store.dispatch(__WEBPACK_IMPORTED_MODULE_4__app_state_adapters_actions__["a" /* AdaptersActions */].enableAdapter({ id: id }));
    };
    AdaptersPage.prototype.onDisable = function (id) {
        this.store.dispatch(__WEBPACK_IMPORTED_MODULE_4__app_state_adapters_actions__["a" /* AdaptersActions */].disableAdapter({ id: id }));
    };
    AdaptersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-adapters',template:/*ion-inline-start:"/home/darren/kendra/2018-02-26/kendraioApp/src/pages/adapters/adapters.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Adapters</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <app-adapter-component *ngFor="let adapter of adapters$ | async"\n                         [id]="adapter[0]"\n                         (enable)="onEnable($event)"\n                         (disable)="onDisable($event)"\n                         [adapter]="adapter[1]"></app-adapter-component>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/darren/kendra/2018-02-26/kendraioApp/src/pages/adapters/adapters.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]])
    ], AdaptersPage);
    return AdaptersPage;
}());

//# sourceMappingURL=adapters.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_state_nodes_actions__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsPage = (function () {
    function SettingsPage(store) {
        this.store = store;
    }
    SettingsPage.prototype.resetApp = function () {
        this.store.dispatch(__WEBPACK_IMPORTED_MODULE_1__app_state_nodes_actions__["a" /* NodesActions */].clearNodes({}));
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-settings',template:/*ion-inline-start:"/home/darren/kendra/2018-02-26/kendraioApp/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <p>Delete all data...</p>\n\n  <button ion-button (click)="resetApp()">Reset App</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/darren/kendra/2018-02-26/kendraioApp/src/pages/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_state_app_actions__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_forkJoin__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_interval__ = __webpack_require__(990);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_interval__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_state_adapters_selectors__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UploadPage = (function () {
    function UploadPage(navCtrl, store, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.store = store;
        this.toastCtrl = toastCtrl;
        this.uploadServices = [];
        this.uploading = false;
        this.store.select(__WEBPACK_IMPORTED_MODULE_7__app_state_adapters_selectors__["b" /* getAdapterEnabledList */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["concatAll"])(), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["filter"])(function (x) { return x[1].enabled; }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["filter"])(function (x) { return x[1].config.uploads; }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function (x) { return x[1].config.title; }))
            .subscribe(function (name) {
            _this.uploadServices.push({ name: name, enabled: true, progress: 0 });
        });
    }
    UploadPage.prototype.pickFile = function () {
        this.fileInput.nativeElement.click();
    };
    UploadPage.prototype.fileChange = function (files) {
        if (files.length > 0) {
            var file = files[0];
            // this.store.dispatch(NodesActions.loadFile({ file, adapterId: this.adapter }));
            this.store.dispatch(__WEBPACK_IMPORTED_MODULE_3__app_state_app_actions__["a" /* AppActions */].goHome({}));
        }
    };
    UploadPage.prototype.doUpload = function () {
        var _this = this;
        this.uploadServices.forEach(function (_, i) { return _this.uploadServices[i].progress = 0; });
        this.uploading = true;
        Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_forkJoin__["forkJoin"])(this.uploadServices.map(function (service, i) {
            return Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_interval__["interval"])((Math.random() * 30)).pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["tap"])(function () { return _this.uploadServices[i].progress += 0.01; }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["take"])(100));
        })).subscribe(function () {
            var toast = _this.toastCtrl.create({
                message: 'Upload was completed successfully',
                duration: 4000,
                position: "middle"
            });
            toast.present();
        });
    };
    UploadPage.prototype.toggleChange = function (i) {
        this.uploadServices[i].enabled = !this.uploadServices[i].enabled;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], UploadPage.prototype, "fileInput", void 0);
    UploadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-upload',template:/*ion-inline-start:"/home/darren/kendra/2018-02-26/kendraioApp/src/pages/upload/upload.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Upload</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div class="upload">\n\n    <input #fileInput\n           type="file"\n           [hidden]="true"\n           (change)="fileChange($event.target.files)" />\n\n    <div class="upload-file">\n      <button class="upload-button" (click)="pickFile()">\n        <ion-icon name="cloud-upload"></ion-icon>\n      </button>\n      <button ion-button color="light" (click)="pickFile()">Select track</button>\n    </div>\n  </div>\n  <ion-list>\n    <ion-item>\n      <ion-label>Add metadata...</ion-label>\n      <ion-checkbox color="dark" checked="true"></ion-checkbox>\n    </ion-item>\n    <ion-item *ngFor="let service of uploadServices; let i = index">\n      <ion-label>{{ service.name }}</ion-label>\n      <ion-toggle *ngIf="(!uploading) || (!service.enabled); else progressDisplay" (ionChange)="toggleChange(i)" [checked]="uploadServices[i].enabled"></ion-toggle>\n      <ng-template #progressDisplay>\n        <progress [value]="service.progress"></progress>\n      </ng-template>\n    </ion-item>\n  </ion-list>\n\n  <div padding>\n    <button ion-button icon-left block (click)="doUpload()">\n      <ion-icon name="cloud-upload"></ion-icon> Upload\n    </button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/darren/kendra/2018-02-26/kendraioApp/src/pages/upload/upload.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], UploadPage);
    return UploadPage;
}());

//# sourceMappingURL=upload.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(477);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages__ = __webpack_require__(992);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_app_init__ = __webpack_require__(993);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_store__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__state__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components__ = __webpack_require__(994);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_kendraio_forms_service__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__(996);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ng_dynamic_forms_core__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ng_dynamic_forms_ui_ionic__ = __webpack_require__(998);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ].concat(__WEBPACK_IMPORTED_MODULE_6__pages__["a" /* ALL_PAGES */], __WEBPACK_IMPORTED_MODULE_10__components__["a" /* ALL_COMPONENTS */]),
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_9__state__["a" /* AppStateModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_14__ng_dynamic_forms_core__["r" /* DynamicFormsCoreModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_15__ng_dynamic_forms_ui_ionic__["a" /* DynamicFormsIonicUIModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ].concat(__WEBPACK_IMPORTED_MODULE_6__pages__["a" /* ALL_PAGES */]),
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["APP_INITIALIZER"], useFactory: __WEBPACK_IMPORTED_MODULE_7__utils_app_init__["a" /* initApp */], deps: [__WEBPACK_IMPORTED_MODULE_8__ngrx_store__["h" /* Store */]], multi: true },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__services_kendraio_forms_service__["a" /* KendraioFormsService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_import_import__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_visualise_visualise__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_adapters_adapters__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_upload_upload__ = __webpack_require__(468);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Dashboard', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Import data', component: __WEBPACK_IMPORTED_MODULE_5__pages_import_import__["a" /* ImportPage */] },
            { title: 'Upload', component: __WEBPACK_IMPORTED_MODULE_9__pages_upload_upload__["a" /* UploadPage */] },
            { title: 'Visualise', component: __WEBPACK_IMPORTED_MODULE_6__pages_visualise_visualise__["a" /* VisualisePage */] },
            { title: 'Adapters', component: __WEBPACK_IMPORTED_MODULE_7__pages_adapters_adapters__["a" /* AdaptersPage */] },
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__["a" /* SettingsPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/darren/kendra/2018-02-26/kendraioApp/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/darren/kendra/2018-02-26/kendraioApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hasNodes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers__ = __webpack_require__(110);


var getNodes = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(__WEBPACK_IMPORTED_MODULE_1__reducers__["b" /* getNodesState */], function (_a) {
    var nodes = _a.nodes;
    return nodes;
});
var hasNodes = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(__WEBPACK_IMPORTED_MODULE_1__reducers__["b" /* getNodesState */], function (_a) {
    var nodes = _a.nodes;
    return nodes.length > 0;
});
//# sourceMappingURL=selectors.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = adaptersReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutable__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var init = {
    adapters: Object(__WEBPACK_IMPORTED_MODULE_1_immutable__["Map"])(),
    enabled: Object(__WEBPACK_IMPORTED_MODULE_1_immutable__["Map"])(),
    selectedAdapter: undefined
};
function adaptersReducer(state, action) {
    if (state === void 0) { state = init; }
    return __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* AdaptersActions */].match({
        setAdapterConfig: function (_a) {
            var id = _a.id, config = _a.config;
            return __assign({}, state, { enabled: state.enabled.has(id) ? state.enabled : state.enabled.set(id, false), adapters: state.adapters.set(id, config) });
        },
        enableAdapter: function (_a) {
            var id = _a.id;
            return __assign({}, state, { enabled: state.enabled.set(id, true) });
        },
        disableAdapter: function (_a) {
            var id = _a.id;
            return __assign({}, state, { enabled: state.enabled.set(id, false) });
        },
        selectAdapter: function (_a) {
            var selectedAdapter = _a.id;
            return __assign({}, state, { selectedAdapter: selectedAdapter });
        }
    }, function () { return state; })(action);
}
//# sourceMappingURL=reducer.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = nodesReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uuid__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(83);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



var init = {
    nodes: [],
    links: []
};
var uuidsForProject = function (_a) {
    var nodes = _a.nodes, links = _a.links;
    var ids = nodes.reduce(function (acc, v) { return acc.set(v.id, Object(__WEBPACK_IMPORTED_MODULE_1_uuid__["v4"])()); }, Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])());
    return {
        nodes: nodes.map(function (n) { return (__assign({}, n, { id: ids.get(n.id) })); }),
        links: links.map(function (l) { return (__assign({}, l, { source: ids.get(l.source), target: ids.get(l.target) })); })
    };
};
function nodesReducer(state, action) {
    if (state === void 0) { state = init; }
    return __WEBPACK_IMPORTED_MODULE_2__actions__["a" /* NodesActions */].match({
        importNodes: function (project) {
            var _a = uuidsForProject(project), nodes = _a.nodes, links = _a.links;
            // console.log({nodes, links});
            return ({ nodes: state.nodes.concat(nodes), links: state.links.concat(links) });
        },
        addNode: function (_a) {
            var adapterId = _a.adapterId, type = _a.type;
            return __assign({}, state, { nodes: state.nodes.concat([{ type: type, id: Object(__WEBPACK_IMPORTED_MODULE_1_uuid__["v4"])() }]) });
        },
        clearNodes: function () {
            return init;
        }
    }, function () { return state; })(action);
}
//# sourceMappingURL=reducer.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppStateModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store_devtools__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__adapters_effects__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nodes_effects__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_effects__ = __webpack_require__(659);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var AppStateModule = (function () {
    function AppStateModule(
        // check module is only imported once
        parentModule) {
        if (parentModule) {
            throw new Error('AppStateModule is already loaded. Import only in AppModule.');
        }
    }
    AppStateModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                // The single global state of the app
                __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["j" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__reducers__["d" /* reducers */], { metaReducers: __WEBPACK_IMPORTED_MODULE_2__reducers__["c" /* metaReducers */] }),
                // Only enable this next line in dev environments
                // Is allows use of Redux dev tools in the browser
                __WEBPACK_IMPORTED_MODULE_3__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument(),
                // All side effects are contained within effects classes
                __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["c" /* EffectsModule */].forRoot([
                    __WEBPACK_IMPORTED_MODULE_5__adapters_effects__["a" /* AdaptersEffects */],
                    __WEBPACK_IMPORTED_MODULE_6__nodes_effects__["a" /* NodesEffects */],
                    __WEBPACK_IMPORTED_MODULE_7__app_effects__["a" /* AppEffects */]
                ])
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"])()),
        __metadata("design:paramtypes", [AppStateModule])
    ], AppStateModule);
    return AppStateModule;
}());

//# sourceMappingURL=state.module.js.map

/***/ }),

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdaptersEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_fetch__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_js_yaml__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_js_yaml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_js_yaml__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_process_adapter__ = __webpack_require__(655);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var adapterList = 'assets/adapters/adapters.yml';
var adapterBasePath = function (name) { return "assets/adapters/" + name; };
var AdaptersEffects = (function () {
    function AdaptersEffects(actions$) {
        this.actions$ = actions$;
        this.init$ = this.actions$.pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["filter"])(__WEBPACK_IMPORTED_MODULE_2__actions__["a" /* AdaptersActions */].is.initAdapters), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["concatMap"])(function () { return Object(__WEBPACK_IMPORTED_MODULE_4__utils_fetch__["a" /* fetchText */])(adapterList); }, function (_, text) { return Object(__WEBPACK_IMPORTED_MODULE_6_lodash__["keys"])(Object(__WEBPACK_IMPORTED_MODULE_5_js_yaml__["load"])(text)); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["concatMap"])(function (keys) {
            return keys.map(function (id) { return __WEBPACK_IMPORTED_MODULE_2__actions__["a" /* AdaptersActions */].loadAdapter({ id: id }); });
        }));
        this.load$ = this.actions$.pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["filter"])(__WEBPACK_IMPORTED_MODULE_2__actions__["a" /* AdaptersActions */].is.loadAdapter), 
        // tap(console.log),
        Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (_a) {
            var id = _a.payload.id;
            return ({ id: id, file: adapterBasePath(id) + "/adapter.yaml" });
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["concatMap"])(function (_a) {
            var file = _a.file;
            return Object(__WEBPACK_IMPORTED_MODULE_4__utils_fetch__["a" /* fetchText */])(file);
        }, function (_a, data) {
            var id = _a.id;
            return ({ id: id, config: Object(__WEBPACK_IMPORTED_MODULE_5_js_yaml__["load"])(data) });
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["concatMap"])(function (_a) {
            var id = _a.id, config = _a.config;
            return Object(__WEBPACK_IMPORTED_MODULE_7__utils_process_adapter__["a" /* processAdapterConfig$ */])(adapterBasePath(id), config);
        }, function (_a, config) {
            var id = _a.id;
            return ({ id: id, config: config });
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (config) { return __WEBPACK_IMPORTED_MODULE_2__actions__["a" /* AdaptersActions */].setAdapterConfig(config); }));
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], AdaptersEffects.prototype, "init$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], AdaptersEffects.prototype, "load$", void 0);
    AdaptersEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */]])
    ], AdaptersEffects);
    return AdaptersEffects;
}());

//# sourceMappingURL=effects.js.map

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return processAdapterConfig$; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fetch__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



// TODO: this should not be hard-coded to RIN adapters
var loadString$ = function (file) { return Object(__WEBPACK_IMPORTED_MODULE_0__fetch__["a" /* fetchText */])(file); };
var projectResult = function (adapter, extractor) { return (__assign({}, adapter, { source: __assign({}, adapter.source, { parserConfig: (adapter.source && adapter.source.parserConfig) ? __assign({}, adapter.source.parserConfig, { arrayAccessFormPaths: adapter.source.parserConfig.arrayAccessFormPaths.map(function (e) { return new RegExp(e); }) }) : undefined, extractor: extractor }) })); };
var processAdapterConfig$ = function (basePath, adapter) {
    return (adapter.source && adapter.source.extractor)
        ? Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(basePath + "/" + adapter.source.extractor).pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["concatMap"])(loadString$, function (_, extractor) { return projectResult(adapter, extractor); }))
        : Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(projectResult(adapter, {}));
};
//# sourceMappingURL=process-adapter.js.map

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodesEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_file_reader__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jmespath__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jmespath___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jmespath__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__adapters_selectors__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_actions__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_fetch__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_x2js__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_x2js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_x2js__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var reduceTargets = function (_a) {
    var source = _a.source, target = _a.target;
    return target.map(function (t) { return (__assign({ source: source }, t)); });
};
var readUsingConfig$ = function (_a) {
    var file = _a.file, adapter = _a.adapter;
    return Object(__WEBPACK_IMPORTED_MODULE_6__utils_file_reader__["a" /* readXml */])(adapter.source.parserConfig)(file);
};
var NodesEffects = (function () {
    function NodesEffects(actions$, store, app) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.app = app;
        this.loadFile$ = this.actions$.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["filter"])(__WEBPACK_IMPORTED_MODULE_5__actions__["a" /* NodesActions */].is.loadFile), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["switchMap"])(function (_a) {
            var adapterId = _a.payload.adapterId;
            return _this.store.select(Object(__WEBPACK_IMPORTED_MODULE_8__adapters_selectors__["a" /* getAdapter */])(adapterId));
        }, function (_a, adapter) {
            var file = _a.payload.file;
            return ({ file: file, adapter: adapter });
        }), 
        // tap(console.log),
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["switchMap"])(readUsingConfig$, function (_a, data) {
            var adapter = _a.adapter;
            return ({ adapter: adapter, data: data });
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (_a) {
            var extractor = _a.adapter.source.extractor, data = _a.data;
            return Object(__WEBPACK_IMPORTED_MODULE_7_jmespath__["search"])(data, extractor);
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (_a) {
            var nodes = _a.nodes, links = _a.links;
            return ({ nodes: nodes, links: [].concat.apply([], links.filter(function (l) { return l.target; }).map(function (t) { return reduceTargets(t); })) });
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (_a) {
            var nodes = _a.nodes, links = _a.links;
            return __WEBPACK_IMPORTED_MODULE_5__actions__["a" /* NodesActions */].importNodes({ nodes: nodes, links: links });
        }));
        this.demo$ = this.actions$.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["filter"])(__WEBPACK_IMPORTED_MODULE_5__actions__["a" /* NodesActions */].is.demoData), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["switchMap"])(function () { return Object(__WEBPACK_IMPORTED_MODULE_10__utils_fetch__["a" /* fetchText */])('assets/data/rin-sample-01.xml'); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["switchMap"])(function () { return _this.store.select(Object(__WEBPACK_IMPORTED_MODULE_8__adapters_selectors__["a" /* getAdapter */])('m-rin')); }, function (demoData, adapter) { return ({ demoData: demoData, adapter: adapter }); }), 
        // tap(console.log),
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (_a) {
            var demoData = _a.demoData, adapter = _a.adapter;
            var defaultConfig = {
                enableToStringFunc: false
            };
            var x2js = new __WEBPACK_IMPORTED_MODULE_11_x2js__(__assign({}, defaultConfig, adapter.source.parserConfig));
            var _b = Object(__WEBPACK_IMPORTED_MODULE_7_jmespath__["search"])(x2js.xml2js(demoData), adapter.source.extractor), nodes = _b.nodes, links = _b.links;
            return __WEBPACK_IMPORTED_MODULE_5__actions__["a" /* NodesActions */].importNodes({
                nodes: nodes,
                links: [].concat.apply([], links.filter(function (l) { return l.target; }).map(function (t) { return reduceTargets(t); }))
            });
        }));
        this.reset$ = this.actions$.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["filter"])(__WEBPACK_IMPORTED_MODULE_5__actions__["a" /* NodesActions */].is.clearNodes), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function () { return __WEBPACK_IMPORTED_MODULE_9__app_actions__["a" /* AppActions */].goHome({}); }));
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], NodesEffects.prototype, "loadFile$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], NodesEffects.prototype, "demo$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], NodesEffects.prototype, "reset$", void 0);
    NodesEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */], __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* App */]])
    ], NodesEffects);
    return NodesEffects;
}());

//# sourceMappingURL=effects.js.map

/***/ }),

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fileReader */
/* harmony export (immutable) */ __webpack_exports__["a"] = readXml;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_x2js__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_x2js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_x2js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



function fileReader(file) {
    return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].create(function (observer) {
        var reader = new FileReader();
        reader.onload = function (e) { return observer.next(e.target.result); };
        reader.onerror = function (e) { return observer.error(e); };
        reader.readAsText(file);
    });
}
function readXml(config) {
    if (config === void 0) { config = {}; }
    var defaultConfig = {
        enableToStringFunc: false
    };
    var x2js = new __WEBPACK_IMPORTED_MODULE_1_x2js__(__assign({}, defaultConfig, config));
    return function (file) { return fileReader(file).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (xmlString) { return x2js.xml2js(xmlString); })); };
}
//# sourceMappingURL=file-reader.js.map

/***/ }),

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppEffects = (function () {
    function AppEffects(actions$, store, app) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.app = app;
        this.goHome$ = this.actions$.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["filter"])(__WEBPACK_IMPORTED_MODULE_6__actions__["a" /* AppActions */].is.goHome), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["tap"])(function () { return _this.app.getActiveNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]); }));
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
        __metadata("design:type", Object)
    ], AppEffects.prototype, "goHome$", void 0);
    AppEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Actions */], __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
    ], AppEffects);
    return AppEffects;
}());

//# sourceMappingURL=effects.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdaptersActions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_unionize__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_unionize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_unionize__);

var AdaptersActions = Object(__WEBPACK_IMPORTED_MODULE_0_unionize__["unionize"])({
    initAdapters: Object(__WEBPACK_IMPORTED_MODULE_0_unionize__["ofType"])(),
    loadAdapter: Object(__WEBPACK_IMPORTED_MODULE_0_unionize__["ofType"])(),
    setAdapterConfig: Object(__WEBPACK_IMPORTED_MODULE_0_unionize__["ofType"])(),
    enableAdapter: Object(__WEBPACK_IMPORTED_MODULE_0_unionize__["ofType"])(),
    disableAdapter: Object(__WEBPACK_IMPORTED_MODULE_0_unionize__["ofType"])(),
    selectAdapter: Object(__WEBPACK_IMPORTED_MODULE_0_unionize__["ofType"])()
}, 'type', 'payload');
//# sourceMappingURL=actions.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodesActions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_unionize__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_unionize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_unionize__);

var NodesActions = Object(__WEBPACK_IMPORTED_MODULE_0_unionize__["unionize"])({
    loadFile: Object(__WEBPACK_IMPORTED_MODULE_0_unionize__["ofType"])(),
    importRinProject: Object(__WEBPACK_IMPORTED_MODULE_0_unionize__["ofType"])(),
    importNodes: Object(__WEBPACK_IMPORTED_MODULE_0_unionize__["ofType"])(),
    clearNodes: Object(__WEBPACK_IMPORTED_MODULE_0_unionize__["ofType"])(),
    demoData: Object(__WEBPACK_IMPORTED_MODULE_0_unionize__["ofType"])(),
    addNode: Object(__WEBPACK_IMPORTED_MODULE_0_unionize__["ofType"])()
}, 'type', 'payload');
//# sourceMappingURL=actions.js.map

/***/ }),

/***/ 992:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ALL_PAGES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__import_import__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualise_visualise__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__adapters_adapters__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_node__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__upload_upload__ = __webpack_require__(468);







var ALL_PAGES = [
    __WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */],
    __WEBPACK_IMPORTED_MODULE_1__import_import__["a" /* ImportPage */],
    __WEBPACK_IMPORTED_MODULE_2__visualise_visualise__["a" /* VisualisePage */],
    __WEBPACK_IMPORTED_MODULE_3__adapters_adapters__["a" /* AdaptersPage */],
    __WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* SettingsPage */],
    __WEBPACK_IMPORTED_MODULE_5__node_node__["a" /* NodePage */],
    __WEBPACK_IMPORTED_MODULE_6__upload_upload__["a" /* UploadPage */]
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 993:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initApp;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state_adapters_actions__ = __webpack_require__(82);

function initApp(store) {
    return function () {
        store.dispatch(__WEBPACK_IMPORTED_MODULE_0__state_adapters_actions__["a" /* AdaptersActions */].initAdapters({}));
        // TODO: this delay is so that adapter is enabled after import has finished
        setTimeout(function () { return store.dispatch(__WEBPACK_IMPORTED_MODULE_0__state_adapters_actions__["a" /* AdaptersActions */].enableAdapter({ id: 'm-rin' })); }, 1000);
    };
}
//# sourceMappingURL=app-init.js.map

/***/ }),

/***/ 994:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ALL_COMPONENTS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adapter_option_component__ = __webpack_require__(995);

var ALL_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_0__adapter_option_component__["a" /* AdapterOptionComponent */]
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 995:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdapterOptionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdapterOptionComponent = (function () {
    function AdapterOptionComponent() {
        this.enable = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.disable = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AdapterOptionComponent.prototype.onEnable = function () {
        this.enable.emit(this.id);
    };
    AdapterOptionComponent.prototype.onDisable = function () {
        this.disable.emit(this.id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AdapterOptionComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AdapterOptionComponent.prototype, "adapter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], AdapterOptionComponent.prototype, "enable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], AdapterOptionComponent.prototype, "disable", void 0);
    AdapterOptionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-adapter-component',
            template: "\n    <!--{{ id | json }}-->\n    <!--{{ adapter | json }}-->\n    <ion-card>\n      <ion-card-header>\n        {{ adapter.config.title }} [{{ id }}]\n      </ion-card-header>\n      <ion-card-content>\n        <p>{{ adapter.config.description }}</p>\n      </ion-card-content>\n      <ion-list>\n        <ion-item>\n          <h3>More information</h3>\n          <p>{{ adapter.config.infoUrl }}</p>\n        </ion-item>\n        <ion-item>\n          <h3>Maintainer</h3>\n          <p>{{ adapter.config.maintainer }}</p>\n        </ion-item>\n        <ion-item>\n          <h3>Support</h3>\n          <p>{{ adapter.config.supportUrl }}</p>\n        </ion-item>\n        <ion-item>\n          <button ion-button (click)=\"onDisable()\" color=\"danger\" *ngIf=\"adapter.enabled\">Disable</button>\n          <button ion-button (click)=\"onEnable()\" *ngIf=\"!adapter.enabled\">Enable</button>\n          <button ion-button outline *ngIf=\"adapter.enabled\">Backup</button>\n          <button ion-button outline *ngIf=\"adapter.enabled\">Restore</button>\n\n        </ion-item>\n      </ion-list>\n    </ion-card>\n  "
        })
    ], AdapterOptionComponent);
    return AdapterOptionComponent;
}());

//# sourceMappingURL=adapter-option.component.js.map

/***/ })

},[470]);
//# sourceMappingURL=main.js.map