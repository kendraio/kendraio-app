'use strict';
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== 'function' && b !== null)
        throw new TypeError(
          'Class extends value ' + String(b) + ' is not a constructor or null'
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
exports.__esModule = true;
exports.LocalDatabaseService = void 0;
var core_1 = require('@angular/core');
var dexie_1 = require('dexie');
var uuid_1 = require('uuid');
var lodash_es_1 = require('lodash-es');
var install_core_1 = require('./core-workflows/install-core');
var LocalDatabaseService = /** @class */ (function (_super) {
  __extends(LocalDatabaseService, _super);
  function LocalDatabaseService() {
    var _this = _super.call(this, 'kendraio-db') || this;
    _this.initDatabase();
    _this.on('populate', function () {
      console.log('Populate database');
      (0, install_core_1.installCoreWorkflows)(_this);
      _this.configureDefaultSettings();
    });
    window['databaseInit'] = true;
    return _this;
  }
  LocalDatabaseService.prototype.configureDefaultSettings = function () {
    localStorage.setItem(
      'core.variables.adapterRepos',
      JSON.stringify({
        repos: ['https://kendraio-adapter.kendraio.vercel.app/'],
      })
    );
  };
  LocalDatabaseService.prototype.initDatabase = function () {
    this.version(1).stores({
      metadata:
        'uuid, schemaName, adapterName, label, [adapterName+schemaName]',
      adapters: 'adapterName',
      dashboards: 'adapterName',
      services: 'adapterName',
      schemas: '++, *adapterName, [adapterName+schemaName]',
      forms: '++, *adapterName, [adapterName+formId]',
      workflows: '++, *adapterName, [adapterName+workflowId]',
      apis: '++, *adapterName, [adapterName+apiPath]',
    });
  };
  LocalDatabaseService.prototype.resetApp = function () {
    var _this = this;
    // Delete, initialise, then re-open database
    this['delete']().then(function (_) {
      _this.initDatabase();
      _this.open();
    });
  };
  /**
   * Add a single item to the database.
   * If a uuid is provided, the add will fail if the uuid already exists.
   * @param itemObject {object} - the item to add, including the adapterName and schemaName.  T
   *
   * @returns a promise that resolves to the uuid of the item
   */
  LocalDatabaseService.prototype.add = function (_a) {
    var adapterName = _a.adapterName,
      schemaName = _a.schema,
      data = _a.data;
    var uuid = (0, lodash_es_1.get)(data, 'uuid', (0, uuid_1.v4)());
    var label = (0, lodash_es_1.get)(
      data,
      '_label',
      (0, lodash_es_1.get)(data, 'name')
    );
    return this['metadata'].add({
      uuid: uuid,
      adapterName: adapterName,
      schemaName: schemaName,
      data: data,
      label: label,
    });
  };
  /**
   * Load the content of a local datset (schema+adapter).
   *
   * @param dataset {object} - the dataset to load, including the adapterName and schemaName.
   * @returns dataset content as an array of objects
   */
  LocalDatabaseService.prototype.get = function (_a) {
    var adapterName = _a.adapterName,
      schemaName = _a.schema;
    return this['metadata']
      .where({ adapterName: adapterName, schemaName: schemaName })
      .toArray()
      .then(function (items) {
        return items.map(function (_a) {
          var uuid = _a.uuid,
            data = _a.data;
          return __assign({ uuid: uuid }, data);
        });
      });
  };
  /**
   * Update an item in the database.
   * @param item {object} - the item to update, including the uuid
   * @returns a promise that resolves to the number of updated items (0 or 1)
   */
  LocalDatabaseService.prototype.update = function (_a) {
    var data = _a.data,
      uuid = _a.uuid;
    var label = (0, lodash_es_1.get)(
      data,
      '_label',
      (0, lodash_es_1.get)(data, 'name')
    );
    return this['metadata'].update(uuid, { data: data, label: label });
  };
  /**
   * Load a specific item from the database.
   * @param uuid {string} - the uuid of the item to load
   * @returns A promise that resolves to the item
   */
  LocalDatabaseService.prototype.fetch = function (_a) {
    var uuid = _a.uuid;
    return this['metadata']
      .where({ uuid: uuid })
      .toArray()
      .then(function (items) {
        return items.map(function (_a) {
          var data = _a.data;
          return __assign({ uuid: uuid }, data);
        });
      });
  };
  /**
   * Delete an item from the database.
   * @param uuid {string} - the uuid of the item to delete
   * @returns an undefined promise
   */
  LocalDatabaseService.prototype.deleteItem = function (_a) {
    var uuid = _a.uuid;
    console.log('delete', uuid);
    return this['metadata']['delete'](uuid);
  };
  /**
   * Export the entire metadata table as JSON
   * @returns a promise that resolves to the JSON string
   */
  LocalDatabaseService.prototype.exportMetadataTable = function () {
    return this['metadata'].toArray().then(function (items) {
      return JSON.stringify(items);
    });
  };
  /**
   * Imports the entire metadata table from a JSON object array, overwriting the existing table
   * @param items {string} - the JSON object array to import
   * @returns a promise that resolves to the number of items imported
   */
  LocalDatabaseService.prototype.importMetadataTable = function (items) {
    var _this = this;
    return this['metadata'].clear().then(function (_) {
      return _this['metadata'].bulkAdd(items);
    });
  };
  LocalDatabaseService = __decorate(
    [
      (0, core_1.Injectable)({
        providedIn: 'root',
      }),
    ],
    LocalDatabaseService
  );
  return LocalDatabaseService;
})(dexie_1['default']);
exports.LocalDatabaseService = LocalDatabaseService;
