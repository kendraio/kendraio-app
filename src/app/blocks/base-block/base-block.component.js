'use strict';
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
exports.BaseBlockComponent = void 0;
var core_1 = require('@angular/core');
var lodash_es_1 = require('lodash-es');
var BaseBlockComponent = /** @class */ (function () {
  function BaseBlockComponent() {
    this.model = {};
    this.output = new core_1.EventEmitter();
  }
  BaseBlockComponent.prototype.ngOnInit = function () {};
  BaseBlockComponent.prototype.ngOnChanges = function (changes) {
    var keyChanges = Object.keys(changes);
    if (keyChanges.includes('context')) {
      this.onContextUpdate(
        this.context,
        (0, lodash_es_1.get)(changes, 'context.firstChange', false)
      );
    }
    if (keyChanges.includes('config')) {
      this.onConfigUpdate(this.config);
    }
    if (keyChanges.includes('model')) {
      this.onData(
        this.model,
        (0, lodash_es_1.get)(changes, 'model.firstChange', false)
      );
    }
  };
  BaseBlockComponent.prototype.onConfigUpdate = function (config) {};
  BaseBlockComponent.prototype.onContextUpdate = function (
    context,
    firstChange
  ) {};
  BaseBlockComponent.prototype.onData = function (data, firstChange) {};
  __decorate([(0, core_1.Input)()], BaseBlockComponent.prototype, 'config');
  __decorate([(0, core_1.Input)()], BaseBlockComponent.prototype, 'context');
  __decorate([(0, core_1.Input)()], BaseBlockComponent.prototype, 'model');
  __decorate([(0, core_1.Output)()], BaseBlockComponent.prototype, 'output');
  BaseBlockComponent = __decorate(
    [
      (0, core_1.Component)({
        selector: 'app-base-block',
        templateUrl: './base-block.component.html',
        styleUrls: ['./base-block.component.scss'],
      }),
    ],
    BaseBlockComponent
  );
  return BaseBlockComponent;
})();
exports.BaseBlockComponent = BaseBlockComponent;
