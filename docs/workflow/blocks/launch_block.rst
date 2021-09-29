Launch
======

Jump to a new workflow. This block is not available to be added to a flow directly, but is instead for use from within other blocks. 

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
- **workflowId** - The workflow to launch
- **valueGetters** - An onbject containing JMESPath to evaluate for adapter and workflowId.

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


  

