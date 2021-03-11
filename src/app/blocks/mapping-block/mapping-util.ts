import { decorate } from '@daz.is/jmespath';
import uuid from 'uuid';
import {
  isString, find, get, omit, pick, pickBy, zip, toPairs, fromPairs, pad, padStart, padEnd, uniqBy,
  uniq, includes, filter, isNull, isNumber, set
} from 'lodash-es';
import {DateTime} from 'luxon';
import {parse as parseQueryString, stringify as asQueryString} from 'qs';
import stringify from 'json-stringify-safe';
import * as showdown from 'showdown';

// Type constants used to define functions.
const TYPE_NUMBER = 0;
const TYPE_ANY = 1;
const TYPE_STRING = 2;
const TYPE_ARRAY = 3;
const TYPE_OBJECT = 4;
const TYPE_BOOLEAN = 5;
const TYPE_EXPREF = 6;
const TYPE_NULL = 7;
const TYPE_ARRAY_NUMBER = 8;
const TYPE_ARRAY_STRING = 9;

const search = decorate({
  get: {
    _func: ([o, s, d]) => get(o, s, d),
    _signature: [{types: [TYPE_OBJECT, TYPE_ARRAY]}, {types: [TYPE_STRING]}, { types: [TYPE_ANY], optional: true}]
  },
  set: {
    _func: ([o, p, v]) => set(o, p, v),
    _signature: [{types: [TYPE_OBJECT, TYPE_ARRAY]}, {types: [TYPE_STRING]}, { types: [TYPE_ANY] }]
  },
  uuid: {
    _func: uuid.v4,
    _signature: []
  },
  toLower: {
    _func: ([s]) => s.toLowerCase(),
    _signature: [{types: [TYPE_STRING]}]
  },
  replace: {
    _func: ([s, a, b]) => s.replace(a, b),
    _signature: [{types: [TYPE_STRING]}, {types: [TYPE_STRING]}, {types: [TYPE_STRING]}]
  },
  trim: {
    _func: ([s]) => s.trim(),
    _signature: [{types: [TYPE_STRING]}]
  },
  now: {
    _func: () => new Date().toUTCString(),
    _signature: []
  },
  formatDate: {
    _func: ([dateString, formatString]) => DateTime.fromISO(dateString).toFormat(formatString),
    _signature: [{types: [TYPE_STRING]}, {types: [TYPE_STRING]}]
  },
  omit: {
    _func: ([o, a]) => omit(o, ...a),
    _signature: [{types: [TYPE_OBJECT]}, {types: [TYPE_ARRAY_STRING]}]
  },
  pick: {
    _func: ([o, a]) => pick(o, ...a),
    _signature: [{types: [TYPE_OBJECT]}, {types: [TYPE_ARRAY_STRING]}]
  },
  split: {
    _func: ([o, s]) => o.split(s),
    _signature: [{types: [TYPE_STRING]}, {types: [TYPE_STRING]}]
  },
  find: {
    _func: ([o, k, v]) => find(o, o2 => o2[k] === v),
    _signature: [{types: [TYPE_ARRAY]}, {types: [TYPE_STRING]}, {types: [TYPE_ANY]}]
  },
  compact: {
    _func: ([o]) => pickBy(o),
    _signature: [{types: [TYPE_OBJECT]}]
  },
  qs: {
    _func: ([o]) => asQueryString(o),
    _signature: [{types: [TYPE_OBJECT]}]
  },
  parseQs: {
    _func: ([s]) => parseQueryString(s),
    _signature: [{types: [TYPE_STRING]}]
  },
  zip: {
    _func: ([a1, a2]) => zip(a1, a2),
    _signature: [{types: [TYPE_ARRAY]}, {types: [TYPE_ARRAY]}]
  },
  debug: {
    _func: ([v]) => {
      console.log('debug value in mapping', v);
      return v;
    },
    _signature: [{types: [TYPE_ANY]}]
  },
  json: {
    _func: ([v]) => stringify(v),
    _signature: [{types: [TYPE_ANY]}]
  },
  markdown: {
    _func: ([s]) => {
      showdown.setFlavor('github');
      const converter = new showdown.Converter();
      return converter.makeHtml(s);
    },
    _signature: [{types: [TYPE_STRING]}]
  },
  btoa: {
    _func: ([s]) => btoa(s),
    _signature: [{types: [TYPE_STRING]}]
  },
  pairwise: {
    _func: ([inputArray]) => {
      return inputArray.reduce((a, v, i, src) => {
        a.push({ current: v, next: src[i + 1] || null });
        return a;
      }, []);
    },
    _signature: [{types: [TYPE_ARRAY]}]
  },
  numDiff: {
    _func: ([a, b]) => {
      return a - b;
    },
    _signature: [{ types: [TYPE_NUMBER] }, { types: [TYPE_NUMBER] }]
  },
  percentChange: {
    _func: ([oldValue, newValue]) => {
      return ((newValue - oldValue) / oldValue) * 100;
    },
    _signature: [{ types: [TYPE_NUMBER] }, { types: [TYPE_NUMBER] }]
  },
  // Takes an array of objects and returns an object with values are array
  // calculated by grouping values based on keys
  groupByKeys: {
    _func: ([inputArray]) => {
      return inputArray.reduce((o, v) => {
        Object.keys(v).forEach(key => {
          if (o[key]) {
            o[key].push(v[key]);
          } else {
            o[key] = [v[key]];
          }
        });
        return o;
      }, {});
    },
    _signature: [{types: [TYPE_ARRAY]}]
  },
  toPairs: {
    _func: ([o]) => toPairs(o),
    _signature: [{types: [TYPE_OBJECT]}]
  },
  fromPairs: {
    _func: ([a]) => fromPairs(a),
    _signature: [{types: [TYPE_ARRAY]}]
  },
  pad: {
    _func: ([s, l, c]) => pad(s, l, c),
    _signature: [{types: [TYPE_STRING]}, {types: [TYPE_NUMBER]}, {types: [TYPE_STRING]}]
  },
  padStart: {
    _func: ([s, l, c]) => padStart(s, l, c),
    _signature: [{types: [TYPE_STRING]}, {types: [TYPE_NUMBER]}, {types: [TYPE_STRING]}]
  },
  padEnd: {
    _func: ([s, l, c]) => padEnd(s, l, c),
    _signature: [{types: [TYPE_STRING]}, {types: [TYPE_NUMBER]}, {types: [TYPE_STRING]}]
  },
  product: {
    _func: ([a, b]) => a * b,
    _signature: [{types: [TYPE_NUMBER]}, {types: [TYPE_NUMBER]}]
  },
  currency: {
    _func: ([n, l, c]) => new Intl.NumberFormat(l, { style: 'currency', currency: c }).format(n),
    _signature: [{types: [TYPE_NUMBER, TYPE_STRING]}, {types: [TYPE_STRING]}, {types: [TYPE_STRING]}]
  },
  uniq: {
    _func: ([a]) => uniq(a),
    _signature: [{types: [TYPE_ARRAY]}]
  },
  uniqBy: {
    _func: ([a, e]) => uniqBy(a, e),
    _signature: [{types: [TYPE_ARRAY]}, {types: [TYPE_STRING]}]
  },
  includes: {
    _func: ([a, i]) => includes(a, i),
    _signature: [{types: [TYPE_ARRAY, TYPE_OBJECT, TYPE_STRING]}, {types: [TYPE_ANY]}]
  },
  all: {
    _func: ([a]) => filter(a).length === a.length,
    _signature: [{types: [TYPE_ARRAY]}]
  },
  parseDate: {
    _func: ([n]) => {
      if (isNull(n)) {
        return null;
      }
      if (isNumber(n)) {
        const nn = (n - 25569) * 86400;
        return DateTime.fromSeconds(nn).toISO();
      }
      if (isString(n)) {
        return DateTime.fromISO(n).toISO();
      }
      return null;
    },
    _signature: [{types: [TYPE_NUMBER, TYPE_STRING, TYPE_NULL]}]
  },
  parseDuration: {
    _func: ([n]) => {
      if (isNull(n)) {
        return null;
      }
      if (isString(n) && n.includes(':')) {
        const [m, s] = n.split(':');
        return (parseInt(m, 10) * 60) + s;
      }
      if (isString(n)) {
        return parseInt(n, 10);
      }
      if (isNumber(n)) {
        return n;
      }
      return null;
    },
    _signature: [{types: [TYPE_NUMBER, TYPE_STRING, TYPE_NULL]}]
  }
});


export function mappingUtility(value, expr) {
  return search(expr)(value);
}
