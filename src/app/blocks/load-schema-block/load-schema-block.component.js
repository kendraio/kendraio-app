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
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                    ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                    : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
exports.__esModule = true;
exports.LoadSchemaBlockComponent = void 0;
var core_1 = require('@angular/core');
var base_block_component_1 = require('../base-block/base-block.component');
var lodash_es_1 = require('lodash-es');
var mapping_util_1 = require('../mapping-block/mapping-util');
var uuid_1 = require('uuid');
var convertTemplateToSchema_1 = require('./convertTemplateToSchema');
var LoadSchemaBlockComponent = /** @class */ (function (_super) {
  __extends(LoadSchemaBlockComponent, _super);
  function LoadSchemaBlockComponent(localDatabase) {
    var _this = _super.call(this) || this;
    _this.localDatabase = localDatabase;
    _this.isLoading = false;
    _this.adapterName = 'schemas';
    _this.schema = '';
    _this.schemaGetter = '';
    _this.lastOutput = {};
    _this.templateToSchema = {};
    return _this;
  }
  LoadSchemaBlockComponent.prototype.onConfigUpdate = function (config) {
    window['localDatabase'] = this.localDatabase;
    this.adapterName = (0, lodash_es_1.get)(config, 'adapterName', 'schemas');
    this.schema = (0, lodash_es_1.get)(config, 'schema', '');
    this.schemaGetter = (0, lodash_es_1.get)(config, 'schemaGetter', '');
    this.templateToSchema = (0, lodash_es_1.get)(
      config,
      'templateToSchema',
      ''
    );
  };
  LoadSchemaBlockComponent.prototype.onData = function (data, firstChange) {
    return __awaiter(this, void 0, void 0, function () {
      var jsonSchema, baseSchema, schemaDefinitions, _a, _b, jsonSchema;
      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            if (this.templateToSchema) {
              jsonSchema = (0,
              convertTemplateToSchema_1.convertTemplateToSchema)(
                data,
                this.templateToSchema
              );
              //this.lastOutput = jsonSchema;
              this.lastOutput = {
                jsonSchema: jsonSchema,
                uiSchema: {},
              };
              this.output.emit(this.lastOutput);
              console.log(
                'Emitting new templateToSchema schema:',
                JSON.stringify(this.lastOutput, null, 2)
              );
              return [2 /*return*/];
            }
            baseSchema = !!this.schemaGetter
              ? (0, mapping_util_1.mappingUtility)(
                  { context: this.context, data: this.model },
                  this.schemaGetter
                )
              : this.schema;
            if (!(typeof baseSchema === 'string' && baseSchema.length > 0))
              return [3 /*break*/, 2];
            schemaDefinitions = {};
            _a = schemaDefinitions;
            _b = baseSchema;
            return [
              4 /*yield*/,
              this.resolveSchema(schemaDefinitions, baseSchema, 0),
            ];
          case 1:
            _a[_b] = _c.sent();
            jsonSchema = {
              definitions: schemaDefinitions,
              $ref: '#/definitions/'.concat(baseSchema),
            };
            // TODO: some fields may need uiSchema (eg widget overrides)
            this.lastOutput = { jsonSchema: jsonSchema, uiSchema: {} };
            this.output.emit(this.lastOutput);
            _c.label = 2;
          case 2:
            return [2 /*return*/];
        }
      });
    });
  };
  /**
   * Returns a schemaDefinitions object for the given embedded schema
   * @param schemaDefinitions
   * @param schemaName
   * @returns
   */
  LoadSchemaBlockComponent.prototype.resolveSchema = function (
    schemaDefinitions,
    schemaName,
    depth
  ) {
    return __awaiter(this, void 0, void 0, function () {
      var result, _a, _b, e_1;
      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            if (!!(0, lodash_es_1.has)(schemaDefinitions, schemaName))
              return [3 /*break*/, 6];
            _c.label = 1;
          case 1:
            _c.trys.push([1, 4, 5, 6]);
            return [4 /*yield*/, this.loadSchemaFromDatabase(schemaName)];
          case 2:
            result = _c.sent();
            _a = schemaDefinitions;
            _b = schemaName;
            return [
              4 /*yield*/,
              this.mapSchema(
                schemaDefinitions,
                (0, lodash_es_1.get)(result, '[0].data', {}),
                schemaName,
                depth
              ),
            ];
          case 3:
            _a[_b] = _c.sent();
            return [3 /*break*/, 6];
          case 4:
            e_1 = _c.sent();
            // TODO: handle error
            console.log('error loading schema:', e_1);
            return [3 /*break*/, 6];
          case 5:
            this.isLoading = false;
            return [7 /*endfinally*/];
          case 6:
            return [2 /*return*/, schemaDefinitions[schemaName]];
        }
      });
    });
  };
  LoadSchemaBlockComponent.prototype.loadSchemaFromDatabase = function (
    schemaName
  ) {
    return __awaiter(this, void 0, void 0, function () {
      var schema;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [
              4 /*yield*/,
              this.localDatabase['metadata']
                .where({ label: schemaName })
                .toArray(),
            ];
          case 1:
            schema = _a.sent();
            return [2 /*return*/, schema];
        }
      });
    });
  };
  LoadSchemaBlockComponent.prototype.loadRecords = function (embedSchemaName) {
    return __awaiter(this, void 0, void 0, function () {
      var records;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [
              4 /*yield*/,
              this.localDatabase['metadata']
                .where({ schemaName: embedSchemaName })
                .toArray(),
            ];
          case 1:
            records = _a.sent();
            return [2 /*return*/, records];
        }
      });
    });
  };
  /**
   * Converts a schema dataset to a JSON schema. Recursively calls itself to resolve embedded schemas.
   *
   * The schemaDefinitions object is used to store the embedded schemas.
   * List or Object items that have schemas specified are resolved as needed,
   * they are added to the definitions, and are then referenced
   *
   * @param schemaDefinitions
   * @param inputSchema
   * @param inputSchemaName
   * @returns {object} Json schema
   */
  LoadSchemaBlockComponent.prototype.mapSchema = function (
    schemaDefinitions,
    inputSchema,
    inputSchemaName,
    depth
  ) {
    return __awaiter(this, void 0, void 0, function () {
      var outputSchema, _i, _a, p, _b;
      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            outputSchema = {
              title: (0, lodash_es_1.get)(inputSchema, 'name', ''),
              description: (0, lodash_es_1.get)(inputSchema, 'description', ''),
              type: 'object',
              properties: {},
            };
            (_i = 0),
              (_a = (0, lodash_es_1.get)(inputSchema, 'properties', []));
            _c.label = 1;
          case 1:
            if (!(_i < _a.length)) return [3 /*break*/, 17];
            p = _a[_i];
            _b = (0, lodash_es_1.get)(p, 'type');
            switch (_b) {
              case 'Number':
                return [3 /*break*/, 2];
              case 'Text':
                return [3 /*break*/, 4];
              case 'Date':
                return [3 /*break*/, 6];
              case 'Object':
                return [3 /*break*/, 8];
              case 'List':
                return [3 /*break*/, 10];
              case 'ObjectReference':
                return [3 /*break*/, 12];
              case 'ListReference':
                return [3 /*break*/, 14];
            }
            return [3 /*break*/, 16];
          case 2:
            return [4 /*yield*/, this.mapSchemaNumber(outputSchema, p)];
          case 3:
            outputSchema = _c.sent();
            return [3 /*break*/, 16];
          case 4:
            return [4 /*yield*/, this.mapSchemaText(outputSchema, p)];
          case 5:
            outputSchema = _c.sent();
            return [3 /*break*/, 16];
          case 6:
            return [4 /*yield*/, this.mapSchemaDate(outputSchema, p)];
          case 7:
            outputSchema = _c.sent();
            return [3 /*break*/, 16];
          case 8:
            return [
              4 /*yield*/,
              this.mapSchemaObject(
                outputSchema,
                p,
                schemaDefinitions,
                inputSchemaName,
                depth
              ),
            ];
          case 9:
            outputSchema = _c.sent();
            return [3 /*break*/, 16];
          case 10:
            return [
              4 /*yield*/,
              this.mapSchemaList(
                outputSchema,
                p,
                schemaDefinitions,
                inputSchemaName,
                depth
              ),
            ];
          case 11:
            outputSchema = _c.sent();
            return [3 /*break*/, 16];
          case 12:
            return [
              4 /*yield*/,
              this.mapSchemaObjectReference(
                outputSchema,
                p,
                schemaDefinitions,
                inputSchemaName,
                depth
              ),
            ];
          case 13:
            outputSchema = _c.sent();
            return [3 /*break*/, 16];
          case 14:
            return [
              4 /*yield*/,
              this.mapSchemaListReference(
                outputSchema,
                p,
                schemaDefinitions,
                inputSchemaName,
                depth
              ),
            ];
          case 15:
            outputSchema = _c.sent();
            return [3 /*break*/, 16];
          case 16:
            _i++;
            return [3 /*break*/, 1];
          case 17:
            return [2 /*return*/, outputSchema];
        }
      });
    });
  };
  LoadSchemaBlockComponent.prototype.mapSchemaNumber = function (
    outputSchema,
    p
  ) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        outputSchema.properties[(0, lodash_es_1.get)(p, 'key', '')] = {
          type: 'number',
          title: (0, lodash_es_1.get)(p, 'title', ''),
          description: (0, lodash_es_1.get)(p, 'description', ''),
        };
        return [2 /*return*/, outputSchema];
      });
    });
  };
  LoadSchemaBlockComponent.prototype.mapSchemaText = function (
    outputSchema,
    p
  ) {
    return __awaiter(this, void 0, void 0, function () {
      var textValue, results;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            textValue = {
              type: 'string',
              title: (0, lodash_es_1.get)(p, 'title', ''),
              description: (0, lodash_es_1.get)(p, 'description', ''),
            };
            if (!(0, lodash_es_1.get)(p, 'config', false))
              return [3 /*break*/, 3];
            if (!!(0, uuid_1.validate)((0, lodash_es_1.get)(p, 'config', '')))
              return [3 /*break*/, 2];
            return [
              4 /*yield*/,
              this.loadSchemaFromDatabase(
                (0, lodash_es_1.get)(p, 'config', '')
              ),
            ];
          case 1:
            results = _a.sent();
            // e.g: [{
            //      "label": "bob"
            //    }, {
            //      "label": "dave"
            //    }]
            // Just make an array of the names from the label property:
            results = results.map(function (r) {
              return (0, lodash_es_1.get)(r, 'label', '');
            });
            // e.g: ["bob", "dave"]
            textValue['enum'] = results;
            return [3 /*break*/, 3];
          case 2:
            console.error('UUID not yet supported for config');
            _a.label = 3;
          case 3:
            outputSchema.properties[(0, lodash_es_1.get)(p, 'key', '')] =
              textValue;
            return [2 /*return*/, outputSchema];
        }
      });
    });
  };
  LoadSchemaBlockComponent.prototype.mapSchemaDate = function (
    outputSchema,
    p
  ) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        // Date type turns into a JSON schema string of type date
        outputSchema.properties[(0, lodash_es_1.get)(p, 'key', '')] = {
          type: 'string',
          format: 'date',
          title: (0, lodash_es_1.get)(p, 'title', ''),
          description: (0, lodash_es_1.get)(p, 'description', ''),
        };
        return [2 /*return*/, outputSchema];
      });
    });
  };
  LoadSchemaBlockComponent.prototype.mapSchemaObject = function (
    outputSchema,
    p,
    schemaDefinitions,
    inputSchemaName,
    depth
  ) {
    return __awaiter(this, void 0, void 0, function () {
      var embedSchemaName, _a, _b;
      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            embedSchemaName = (0, lodash_es_1.get)(p, 'config', '');
            if (
              !(
                !(0, lodash_es_1.has)(schemaDefinitions, embedSchemaName) &&
                embedSchemaName !== inputSchemaName
              )
            )
              return [3 /*break*/, 2];
            _a = schemaDefinitions;
            _b = embedSchemaName;
            return [
              4 /*yield*/,
              this.resolveSchema(schemaDefinitions, embedSchemaName, depth + 1),
            ];
          case 1:
            _a[_b] = _c.sent();
            _c.label = 2;
          case 2:
            outputSchema.properties[(0, lodash_es_1.get)(p, 'key', '')] = {
              $ref: '#/definitions/'.concat(embedSchemaName),
            };
            return [2 /*return*/, outputSchema];
        }
      });
    });
  };
  LoadSchemaBlockComponent.prototype.mapSchemaList = function (
    outputSchema,
    p,
    schemaDefinitions,
    inputSchemaName,
    depth
  ) {
    return __awaiter(this, void 0, void 0, function () {
      var embedSchemaName, _a, _b;
      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            embedSchemaName = (0, lodash_es_1.get)(p, 'config', '');
            if (
              !(
                !(0, lodash_es_1.has)(schemaDefinitions, embedSchemaName) &&
                embedSchemaName !== inputSchemaName
              )
            )
              return [3 /*break*/, 2];
            _a = schemaDefinitions;
            _b = embedSchemaName;
            return [
              4 /*yield*/,
              this.resolveSchema(schemaDefinitions, embedSchemaName, depth + 1),
            ];
          case 1:
            _a[_b] = _c.sent();
            _c.label = 2;
          case 2:
            outputSchema.properties[(0, lodash_es_1.get)(p, 'key', '')] = {
              type: 'array',
              title: (0, lodash_es_1.get)(p, 'title', ''),
              description: (0, lodash_es_1.get)(p, 'description', ''),
              items: {
                $ref: '#/definitions/'.concat(embedSchemaName),
              },
            };
            return [2 /*return*/, outputSchema];
        }
      });
    });
  };
  LoadSchemaBlockComponent.prototype.mapSchemaObjectReference = function (
    outputSchema,
    p,
    schemaDefinitions,
    inputSchemaName,
    depth
  ) {
    return __awaiter(this, void 0, void 0, function () {
      var embedSchemaName, _a, _b, records, injectedRecord;
      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            embedSchemaName = (0, lodash_es_1.get)(p, 'config', '');
            if (
              !(
                !(0, lodash_es_1.has)(schemaDefinitions, embedSchemaName) &&
                embedSchemaName !== inputSchemaName
              )
            )
              return [3 /*break*/, 2];
            _a = schemaDefinitions;
            _b = embedSchemaName;
            return [
              4 /*yield*/,
              this.resolveSchema(schemaDefinitions, embedSchemaName, depth + 1),
            ];
          case 1:
            _a[_b] = _c.sent();
            _c.label = 2;
          case 2:
            return [4 /*yield*/, this.loadRecords(embedSchemaName)];
          case 3:
            records = _c.sent();
            injectedRecord = {
              type: 'object',
              title: (0, lodash_es_1.get)(p, 'title', ''),
              oneOf: records.map(function (record) {
                var item = {
                  title: record.label,
                  properties: {},
                };
                // we add the uuid property to the item properties
                // when editing existing saved data,
                // we use a regex pattern to validate that record matches any provided data object
                // since the uuid is unique, we can use it to identify the record as a match
                item.properties['uuid'] = {
                  type: 'string',
                  readOnly: true,
                  default: record.uuid,
                  pattern: '^' + record.uuid + '$',
                };
                for (var property in record.data) {
                  if (record.data.hasOwnProperty(property)) {
                    var value = record.data[property];
                    item.properties[property] = (0, lodash_es_1.clone)(
                      (0, lodash_es_1.get)(
                        schemaDefinitions[embedSchemaName],
                        'properties.'.concat(property),
                        {}
                      )
                    );
                    item.properties[property].readOnly = true;
                    item.properties[property]['default'] = (0,
                    lodash_es_1.clone)(value);
                    // we get the type property from the schema at schemaDefinitions[embedSchemaName]
                  }
                }
                return item;
              }),
            };
            outputSchema.properties[(0, lodash_es_1.get)(p, 'key', '')] =
              injectedRecord;
            return [2 /*return*/, outputSchema];
        }
      });
    });
  };
  LoadSchemaBlockComponent.prototype.mapSchemaListReference = function (
    outputSchema,
    p,
    schemaDefinitions,
    inputSchemaName,
    depth
  ) {
    return __awaiter(this, void 0, void 0, function () {
      var embedSchemaName,
        _a,
        _b,
        records,
        rawSchema,
        labelKey,
        injectedRecordSelectionList,
        plain_schema,
        schema_with_uuid;
      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            embedSchemaName = (0, lodash_es_1.get)(p, 'config', '');
            if (
              !(
                !(0, lodash_es_1.has)(schemaDefinitions, embedSchemaName) &&
                embedSchemaName !== inputSchemaName
              )
            )
              return [3 /*break*/, 2];
            _a = schemaDefinitions;
            _b = embedSchemaName;
            return [
              4 /*yield*/,
              this.resolveSchema(schemaDefinitions, embedSchemaName, depth + 1),
            ];
          case 1:
            _a[_b] = _c.sent();
            _c.label = 2;
          case 2:
            return [4 /*yield*/, this.loadRecords(embedSchemaName)];
          case 3:
            records = _c.sent();
            return [4 /*yield*/, this.loadSchemaFromDatabase(embedSchemaName)];
          case 4:
            rawSchema = _c.sent();
            // if rawSchema is empty, then the schema has not been loaded yet and we should return
            if (rawSchema.length === 0) {
              return [2 /*return*/, outputSchema];
            }
            labelKey =
              'data.' +
              (0, lodash_es_1.get)(
                rawSchema,
                '[0].data.label',
                'Missing label'
              );
            // Then we get the label property from each record's properties
            if (depth == 0) {
              injectedRecordSelectionList = {
                type: 'object',
                oneOf: records.map(function (record) {
                  var item = {
                    title: (0, lodash_es_1.get)(
                      record,
                      labelKey,
                      'fallback:' + record.label || 'Missing label!'
                    ),
                    properties: {},
                  };
                  var title = item.title;
                  // we add the uuid property to the item properties
                  // when editing an existing and non-nested record,
                  // we use a regex pattern to validate that record matches any provided data object
                  // since the uuid is unique, we can use it to identify the record as a match
                  item.properties['uuid'] = {
                    type: 'string',
                    readOnly: true,
                    default: record.uuid,
                    pattern: '^' + record.uuid + '$',
                  };
                  for (var property in record.data) {
                    if (record.data.hasOwnProperty(property)) {
                      var value = record.data[property];
                      item.properties[property] = (0, lodash_es_1.clone)(
                        (0, lodash_es_1.get)(
                          schemaDefinitions[embedSchemaName],
                          'properties.'.concat(property),
                          {}
                        )
                      );
                      item.properties[property].readOnly = true;
                      item.properties[property]['default'] = (0,
                      lodash_es_1.clone)(value);
                      // If we have an object with a UUID, we add a pattern to validate that the UUID is correct
                      if (property === 'uuid') {
                        item.properties[property].pattern = '^' + value + '$';
                      }
                      // if the property type is string, add a pattern for it:
                      if (item.properties[property].type === 'string') {
                        item.properties[property].pattern = '^' + value + '$';
                      }
                    }
                  }
                  item.properties['uuid']['default'] = record.uuid;
                  return item;
                }),
              };
              outputSchema.properties[(0, lodash_es_1.get)(p, 'key', '')] = {
                type: 'array',
                title: (0, lodash_es_1.get)(p, 'title', ''),
                description: (0, lodash_es_1.get)(p, 'description', ''),
                items: injectedRecordSelectionList,
              };
            } else {
              plain_schema = (0, lodash_es_1.get)(
                schemaDefinitions[embedSchemaName],
                'properties',
                {}
              );
              schema_with_uuid = (0, lodash_es_1.clone)(plain_schema);
              // Since the UUID is part of every schema, it is not a configurable property in our custom
              // schema editor, so we add it here.
              schema_with_uuid['uuid'] = {
                type: 'string',
                readOnly: true,
                title: 'UUID',
              };
              outputSchema.properties[(0, lodash_es_1.get)(p, 'key', '')] = {
                type: 'array',
                title: (0, lodash_es_1.get)(p, 'title', ''),
                description: (0, lodash_es_1.get)(p, 'description', ''),
                items: {
                  type: 'object',
                  properties: schema_with_uuid,
                },
              };
            }
            return [2 /*return*/, outputSchema];
        }
      });
    });
  };
  LoadSchemaBlockComponent = __decorate(
    [
      (0, core_1.Component)({
        selector: 'app-load-schema-block',
        templateUrl: './load-schema-block.component.html',
        styleUrls: ['./load-schema-block.component.scss'],
      }),
    ],
    LoadSchemaBlockComponent
  );
  return LoadSchemaBlockComponent;
})(base_block_component_1.BaseBlockComponent);
exports.LoadSchemaBlockComponent = LoadSchemaBlockComponent;
