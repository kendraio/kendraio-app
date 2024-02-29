Launch
======

Jump to a new Flow. This block is not available to be added to a Flow directly, but is instead for use from within other blocks. 

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

- **adapter** - The adapter of the Flow to launch
- **workflowId** - The Flow to launch
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


  

