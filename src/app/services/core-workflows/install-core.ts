import adapterRepos from './adapterRepos.json';
import adapters from './adapters.json';
import example from './example.json';
import settings from './settings.json';
import updateAdapterList from './updateAdapterList.json';
import searchAdapters from './searchAdapters.json';
import newAdapter from './newAdapter.json';
import adapterDetails from './adapterDetails.json';

export function installCoreWorkflows(db) {

  const coreWorkflowConfigs = {
    adapterRepos,
    adapters,
    example,
    settings,
    updateAdapterList,
    searchAdapters,
    newAdapter,
    adapterDetails
  };

  Object.keys(coreWorkflowConfigs).forEach(workflowId => {
    console.log(`Install ${workflowId} workflow in core`);
    db['workflows'].add({
      ...coreWorkflowConfigs[workflowId],
      workflowId,
      adapterName: 'core'
    });
  });
}
