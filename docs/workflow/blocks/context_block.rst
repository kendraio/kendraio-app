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

- **contextKey** (string) The key of the value that will be saved into context.
  For example, if you use a key of "savedData" then the value will be available in the context as "context.savedData".

- **valueGetter** (string) [OPTIONAL]  The JMESPath of the value to store into context. 
  This defaults to "data" so if it is omitted it stores the whole incoming value into context.

- **keyGetter** (string) [OPTIONAL] - the JMESPath of the key to use within context. 
  JMESPath does not allow for variable keys, so this makes it possible for batch code to
  write to different context locations. 


Usage patterns
--------------

The most common usage pattern with this block is to use it with the
variable get block, to fetch a value from the adapter storage and save it
into the context.

