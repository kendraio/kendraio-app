Context
=======

Use the context block to save data into the global context to make it available for all
subsequent tasks.

Default config
--------------

.. code-block:: json

    {
      "type": "context-save",
      "contextKey": "savedValue"
    }


Supported properties
--------------------

- **contextKey** (string) - the key of the value that will be saved into context.
For example, if you use a key of "savedData" then the value will be available in the
context as "context.savedData".


Usage patterns
--------------

The most common usage pattern with this block is to use it with the
variable get block, to fetch a value from the adapter storage and save it
into the context.

