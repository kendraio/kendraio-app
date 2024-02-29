Event Dispatch
==============

Dispatch an event to trigger asynchronous processing.

Default config
--------------

.. code-block:: json

    {
      "type": "dispatch",
      "action": "[TASK_NAME]"
    }

Usage
-----

This block is only really useful by core Flows, as adapter Flows
are not yet able to register asynchronous Flows to run in response to events.

To track development of this feature, see this issue:
https://github.com/kendraio/kendraio-app/issues/53
