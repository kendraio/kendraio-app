'use strict';
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
exports.__esModule = true;
exports.installCoreWorkflows = void 0;
var adapterRepos_json_1 = require('./adapterRepos.json');
var adapters_json_1 = require('./adapters.json');
var example_json_1 = require('./example.json');
var settings_json_1 = require('./settings.json');
var updateAdapterList_json_1 = require('./updateAdapterList.json');
var searchAdapters_json_1 = require('./searchAdapters.json');
var newAdapter_json_1 = require('./newAdapter.json');
var adapterDetails_json_1 = require('./adapterDetails.json');
var newWorkflow_json_1 = require('./newWorkflow.json');
var importAdapter_json_1 = require('./importAdapter.json');
var cloneWorkflow_json_1 = require('./cloneWorkflow.json');
function installCoreWorkflows(db) {
  var coreWorkflowConfigs = {
    adapterRepos: adapterRepos_json_1['default'],
    adapters: adapters_json_1['default'],
    example: example_json_1['default'],
    settings: settings_json_1['default'],
    updateAdapterList: updateAdapterList_json_1['default'],
    searchAdapters: searchAdapters_json_1['default'],
    newAdapter: newAdapter_json_1['default'],
    adapterDetails: adapterDetails_json_1['default'],
    newWorkflow: newWorkflow_json_1['default'],
    importAdapter: importAdapter_json_1['default'],
    cloneWorkflow: cloneWorkflow_json_1['default'],
  };
  Object.keys(coreWorkflowConfigs).forEach(function (workflowId) {
    console.log('Install '.concat(workflowId, ' workflow in core'));
    db['workflows'].add(
      __assign(__assign({}, coreWorkflowConfigs[workflowId]), {
        workflowId: workflowId,
        adapterName: 'core',
      })
    );
  });
}
exports.installCoreWorkflows = installCoreWorkflows;
