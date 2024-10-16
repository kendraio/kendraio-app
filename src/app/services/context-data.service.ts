import { Injectable } from "@angular/core";
import { TeostoProfileHandlerService } from "../handlers/teosto-profile-handler.service";
import { get, has, isString } from "lodash-es";
import { mappingUtility } from "../blocks/mapping-block/mapping-util";

@Injectable({
  providedIn: "root",
})
export class ContextDataService {
  constructor(private readonly teostoProfile: TeostoProfileHandlerService) {}

  // TODO: Generic handling of profile data from all adapters
  getGlobalContext(valueGetters, blocksContext, data = {}) {
    const context = {
      context: blocksContext,
      user: {
        profile: this.getUserContext(),
        teosto: this.getTeostoContext(),
      },
      data,
    };
    // console.log({ valueGetters, context });
    return Object.keys(valueGetters).reduce((a, v) => {
      a[v] = mappingUtility(context, valueGetters[v]);
      return a;
    }, {});
  }

  /*
  Interpreting error codes from JMESPath requires these type codes:
    0: 'number',
    1: 'any',
    2: 'string',
    3: 'array',
    4: 'object',
    5: 'boolean',
    6: 'expression',
    7: 'null',
    8: 'Array<number>',
    9: 'Array<string>'
   */

  getFromContextWithModel(endpoint, model, context = {}) {
    // console.log({ endpoint, model });
    const _context = {
      context,
      ...context,
      // TODO: Deprecate passing data as model
      model,
      data: model,
      user: {
        profile: this.getUserContext(),
        teosto: this.getTeostoContext(),
      },
    };
    // console.log({ context });
    const valueGetter = get(endpoint, "valueGetter");
    if (isString(valueGetter)) {
      return mappingUtility(_context, valueGetter);
    }
    const valueGetters = has(endpoint, "valueGetters")
      ? Object.keys(endpoint.valueGetters).reduce((a, v) => {
          try {
            a[v] = mappingUtility(_context, endpoint.valueGetters[v]);
          } catch (e) {
            console.log(e.message);
          }
          return a;
        }, {})
      : {};
    return { ...endpoint, ...valueGetters };
  }

  getUserContext() {
    const profile = JSON.parse(localStorage.getItem("kendraio-user-profile"));
    return profile || {};
  }

  getTeostoContext() {
    return this.teostoProfile.getProfile();
  }
}
