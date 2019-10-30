import adapterRepos from './adapterRepos.json';
import adapters from './adapters.json';
import example from './example.json';
import settings from './settings.json';
import updateAdapterList from './updateAdapterList.json';

export function installCoreWorkflows(db) {

  const coreWorkflowConfigs = {
    adapterRepos,
    adapters,
    example,
    settings,
    updateAdapterList
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
