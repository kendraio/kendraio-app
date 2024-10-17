'use strict';
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
exports.__esModule = true;
exports.mappingUtility = void 0;
var jmespath_1 = require('@daz.is/jmespath');
var uuid = require('uuid');
var lodash_es_1 = require('lodash-es');
var luxon_1 = require('luxon');
var qs_1 = require('qs');
var json_stringify_safe_1 = require('json-stringify-safe');
var showdown = require('showdown');
var buffer_1 = require('buffer');
// Type constants used to define functions.
var TYPE_NUMBER = 0;
var TYPE_ANY = 1;
var TYPE_STRING = 2;
var TYPE_ARRAY = 3;
var TYPE_OBJECT = 4;
var TYPE_BOOLEAN = 5;
var TYPE_EXPREF = 6;
var TYPE_NULL = 7;
var TYPE_ARRAY_NUMBER = 8;
var TYPE_ARRAY_STRING = 9;
var search = (0, jmespath_1.decorate)({
  get: {
    _func: function (_a) {
      var o = _a[0],
        s = _a[1],
        d = _a[2];
      return (0, lodash_es_1.get)(o, s, d);
    },
    _signature: [
      { types: [TYPE_OBJECT, TYPE_ARRAY] },
      { types: [TYPE_STRING] },
      { types: [TYPE_ANY], optional: true },
    ],
  },
  set: {
    _func: function (_a) {
      var o = _a[0],
        p = _a[1],
        v = _a[2];
      return (0, lodash_es_1.set)(o, p, v);
    },
    _signature: [
      { types: [TYPE_OBJECT, TYPE_ARRAY] },
      { types: [TYPE_STRING] },
      { types: [TYPE_ANY] },
    ],
  },
  findIndex: {
    _func: function (_a) {
      var o = _a[0],
        v = _a[1];
      return (0, lodash_es_1.findIndex)(o, v);
    },
    _signature: [{ types: [TYPE_ARRAY] }, { types: [TYPE_OBJECT] }],
  },
  uuid: {
    _func: function (_a) {
      var name = _a[0],
        NAMESPACE_STRING = _a[1];
      if (name) {
        var NAMESPACE_UUID = uuid.v5(
          NAMESPACE_STRING || 'https://app.kendra.io',
          uuid.v5.URL
        );
        return uuid.v5(name, NAMESPACE_UUID);
      } else {
        return uuid.v4();
      }
    },
    _signature: [
      { types: [TYPE_STRING], optional: true },
      { types: [TYPE_STRING], optional: true },
    ],
  },
  toLower: {
    _func: function (_a) {
      var s = _a[0];
      return s.toLowerCase();
    },
    _signature: [{ types: [TYPE_STRING] }],
  },
  toUpper: {
    _func: function (_a) {
      var s = _a[0];
      return s.toUpperCase();
    },
    _signature: [{ types: [TYPE_STRING] }],
  },
  replace: {
    _func: function (_a) {
      var s = _a[0],
        a = _a[1],
        b = _a[2];
      return s.replace(a, b);
    },
    _signature: [
      { types: [TYPE_STRING] },
      { types: [TYPE_STRING] },
      { types: [TYPE_STRING] },
    ],
  },
  replaceAll: {
    _func: function (_a) {
      var s = _a[0],
        a = _a[1],
        b = _a[2];
      return s.replaceAll(a, b);
    },
    _signature: [
      { types: [TYPE_STRING] },
      { types: [TYPE_STRING] },
      { types: [TYPE_STRING] },
    ],
  },
  trim: {
    _func: function (_a) {
      var s = _a[0];
      return s.trim();
    },
    _signature: [{ types: [TYPE_STRING] }],
  },
  now: {
    _func: function () {
      return new Date().toUTCString();
    },
    _signature: [],
  },
  formatDate: {
    _func: function (_a) {
      var dateString = _a[0],
        formatString = _a[1];
      return luxon_1.DateTime.fromISO(dateString).toFormat(formatString);
    },
    _signature: [{ types: [TYPE_STRING] }, { types: [TYPE_STRING] }],
  },
  omit: {
    _func: function (_a) {
      var o = _a[0],
        a = _a[1];
      return lodash_es_1.omit.apply(void 0, __spreadArray([o], a, false));
    },
    _signature: [{ types: [TYPE_OBJECT] }, { types: [TYPE_ARRAY_STRING] }],
  },
  pick: {
    _func: function (_a) {
      var o = _a[0],
        a = _a[1];
      return lodash_es_1.pick.apply(void 0, __spreadArray([o], a, false));
    },
    _signature: [{ types: [TYPE_OBJECT] }, { types: [TYPE_ARRAY_STRING] }],
  },
  split: {
    _func: function (_a) {
      var o = _a[0],
        s = _a[1];
      return o.split(s);
    },
    _signature: [{ types: [TYPE_STRING] }, { types: [TYPE_STRING] }],
  },
  find: {
    _func: function (_a) {
      var o = _a[0],
        k = _a[1],
        v = _a[2];
      return (0, lodash_es_1.find)(o, function (o2) {
        return o2[k] === v;
      });
    },
    _signature: [
      { types: [TYPE_ARRAY] },
      { types: [TYPE_STRING] },
      { types: [TYPE_ANY] },
    ],
  },
  compact: {
    _func: function (_a) {
      var o = _a[0];
      return (0, lodash_es_1.pickBy)(o);
    },
    _signature: [{ types: [TYPE_OBJECT] }],
  },
  qs: {
    _func: function (_a) {
      var o = _a[0];
      return (0, qs_1.stringify)(o);
    },
    _signature: [{ types: [TYPE_OBJECT] }],
  },
  parseQs: {
    _func: function (_a) {
      var s = _a[0];
      return (0, qs_1.parse)(s);
    },
    _signature: [{ types: [TYPE_STRING] }],
  },
  zip: {
    _func: function (_a) {
      var a1 = _a[0],
        a2 = _a[1];
      return (0, lodash_es_1.zip)(a1, a2);
    },
    _signature: [{ types: [TYPE_ARRAY] }, { types: [TYPE_ARRAY] }],
  },
  debug: {
    _func: function (_a) {
      var v = _a[0];
      console.log('debug value in mapping', v);
      return v;
    },
    _signature: [{ types: [TYPE_ANY] }],
  },
  json: {
    _func: function (_a) {
      var v = _a[0];
      return (0, json_stringify_safe_1['default'])(v);
    },
    _signature: [{ types: [TYPE_ANY] }],
  },
  markdown: {
    _func: function (_a) {
      var s = _a[0];
      showdown.setFlavor('github');
      var converter = new showdown.Converter();
      return converter.makeHtml(s);
    },
    _signature: [{ types: [TYPE_STRING] }],
  },
  btoa: {
    _func: function (_a) {
      var s = _a[0];
      return btoa(s);
    },
    _signature: [{ types: [TYPE_STRING] }],
  },
  base64encode: {
    // btoa is not compatible with UTF-8, to safely manage the base64encoding
    _func: function (_a) {
      var s = _a[0];
      return buffer_1.Buffer.from(s).toString('base64');
    },
    _signature: [{ types: [TYPE_STRING] }],
  },
  pairwise: {
    _func: function (_a) {
      var inputArray = _a[0];
      return inputArray.reduce(function (a, v, i, src) {
        a.push({ current: v, next: src[i + 1] || null });
        return a;
      }, []);
    },
    _signature: [{ types: [TYPE_ARRAY] }],
  },
  numDiff: {
    _func: function (_a) {
      var a = _a[0],
        b = _a[1];
      return a - b;
    },
    _signature: [{ types: [TYPE_NUMBER] }, { types: [TYPE_NUMBER] }],
  },
  percentChange: {
    _func: function (_a) {
      var oldValue = _a[0],
        newValue = _a[1];
      return ((newValue - oldValue) / oldValue) * 100;
    },
    _signature: [{ types: [TYPE_NUMBER] }, { types: [TYPE_NUMBER] }],
  },
  // Takes an array of objects and returns an object with values are array
  // calculated by grouping values based on keys
  groupByKeys: {
    _func: function (_a) {
      var inputArray = _a[0];
      return inputArray.reduce(function (o, v) {
        Object.keys(v).forEach(function (key) {
          if (o[key]) {
            o[key].push(v[key]);
          } else {
            o[key] = [v[key]];
          }
        });
        return o;
      }, {});
    },
    _signature: [{ types: [TYPE_ARRAY] }],
  },
  toPairs: {
    _func: function (_a) {
      var o = _a[0];
      return (0, lodash_es_1.toPairs)(o);
    },
    _signature: [{ types: [TYPE_OBJECT] }],
  },
  fromPairs: {
    _func: function (_a) {
      var a = _a[0];
      return (0, lodash_es_1.fromPairs)(a);
    },
    _signature: [{ types: [TYPE_ARRAY] }],
  },
  pad: {
    _func: function (_a) {
      var s = _a[0],
        l = _a[1],
        c = _a[2];
      return (0, lodash_es_1.pad)(s, l, c);
    },
    _signature: [
      { types: [TYPE_STRING] },
      { types: [TYPE_NUMBER] },
      { types: [TYPE_STRING] },
    ],
  },
  padStart: {
    _func: function (_a) {
      var s = _a[0],
        l = _a[1],
        c = _a[2];
      return (0, lodash_es_1.padStart)(s, l, c);
    },
    _signature: [
      { types: [TYPE_STRING] },
      { types: [TYPE_NUMBER] },
      { types: [TYPE_STRING] },
    ],
  },
  padEnd: {
    _func: function (_a) {
      var s = _a[0],
        l = _a[1],
        c = _a[2];
      return (0, lodash_es_1.padEnd)(s, l, c);
    },
    _signature: [
      { types: [TYPE_STRING] },
      { types: [TYPE_NUMBER] },
      { types: [TYPE_STRING] },
    ],
  },
  product: {
    _func: function (_a) {
      var a = _a[0],
        b = _a[1];
      return a * b;
    },
    _signature: [{ types: [TYPE_NUMBER] }, { types: [TYPE_NUMBER] }],
  },
  currency: {
    _func: function (_a) {
      var n = _a[0],
        l = _a[1],
        c = _a[2];
      return new Intl.NumberFormat(l, {
        style: 'currency',
        currency: c,
      }).format(n);
    },
    _signature: [
      { types: [TYPE_NUMBER, TYPE_STRING] },
      { types: [TYPE_STRING] },
      { types: [TYPE_STRING] },
    ],
  },
  uniq: {
    _func: function (_a) {
      var a = _a[0];
      return (0, lodash_es_1.uniq)(a);
    },
    _signature: [{ types: [TYPE_ARRAY] }],
  },
  uniqBy: {
    _func: function (_a) {
      var a = _a[0],
        e = _a[1];
      return (0, lodash_es_1.uniqBy)(a, e);
    },
    _signature: [{ types: [TYPE_ARRAY] }, { types: [TYPE_STRING] }],
  },
  includes: {
    _func: function (_a) {
      var a = _a[0],
        i = _a[1];
      return (0, lodash_es_1.includes)(a, i);
    },
    _signature: [
      { types: [TYPE_ARRAY, TYPE_OBJECT, TYPE_STRING] },
      { types: [TYPE_ANY] },
    ],
  },
  all: {
    _func: function (_a) {
      var a = _a[0];
      return (0, lodash_es_1.filter)(a).length === a.length;
    },
    _signature: [{ types: [TYPE_ARRAY] }],
  },
  parseDate: {
    _func: function (_a) {
      var n = _a[0];
      if ((0, lodash_es_1.isNull)(n)) {
        return null;
      }
      if ((0, lodash_es_1.isNumber)(n)) {
        var nn = (n - 25569) * 86400;
        return luxon_1.DateTime.fromSeconds(nn).toISO();
      }
      if ((0, lodash_es_1.isString)(n)) {
        return luxon_1.DateTime.fromISO(n).toISO();
      }
      return null;
    },
    _signature: [{ types: [TYPE_NUMBER, TYPE_STRING, TYPE_NULL] }],
  },
  parseDuration: {
    _func: function (_a) {
      var n = _a[0];
      if ((0, lodash_es_1.isNull)(n)) {
        return null;
      }
      if ((0, lodash_es_1.isString)(n) && n.includes(':')) {
        var _b = n.split(':'),
          m = _b[0],
          s = _b[1];
        return parseInt(m, 10) * 60 + s;
      }
      if ((0, lodash_es_1.isString)(n)) {
        return parseInt(n, 10);
      }
      if ((0, lodash_es_1.isNumber)(n)) {
        return n;
      }
      return null;
    },
    _signature: [{ types: [TYPE_NUMBER, TYPE_STRING, TYPE_NULL] }],
  },
  parseUnixTimestamp: {
    _func: function (_a) {
      var n = _a[0],
        format = _a[1];
      if (format === 'ms' || format === 'milliseconds') {
        n = n / 1000;
      }
      if ((0, lodash_es_1.isNumber)(n)) {
        return luxon_1.DateTime.fromSeconds(n).toISO();
      }
      return null;
    },
    _signature: [
      { types: [TYPE_NUMBER, TYPE_NULL] },
      { types: [TYPE_NUMBER, TYPE_STRING], optional: true },
    ],
  },
});
function mappingUtility(value, expr) {
  return search(expr)(value);
}
exports.mappingUtility = mappingUtility;
