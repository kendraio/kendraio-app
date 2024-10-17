Launch
======

Useful to jump to a different Flow. This block is not available to be added to a flow directly, but is instead for use from within other blocks.

If you want to jump to a different Flow from a button the :doc:`Link Action Block <link_action_block>`, allows opening Flows in a new tab or window as an alternative to an :doc:`Actions block button <actions>` being used with a Launch block.

Default config
--------------

.. code-block:: json

    {
      "type": "launch",
      "adapter": "", 
      "workflowId": "",      
    }

Supported properties
--------------------

- **adapter** - The adapter of the flow to launch
- **workflowId** - The flow to launch
- **valueGetters** - An onbject containing JMESPath to evaluate for adapter and workflowId.
- **context** - Data that will be passed to the flow to launch

Dynamic config
--------------

.. code-block:: json

    {
      "type": "launch",
      "valueGetters": {
         "adapter": "data.adapterName",
         "workflowId": "data.id"
      }   
    }

With context
------------

.. code-block:: json

  {
      "type": "launch",
      "adapter": "schemas",
      "workflowId": "edit",
      "context": {
          "id": "data.uuid"
      }
  }


  

