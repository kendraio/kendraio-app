Set Variable
============

Save a value to local storage.


Supported properties
--------------------
- **name**: The name of the variable 
- **showNotify** (boolean) (default=true): Display a notification that the variable has been set
- **nameGetter** : Provide a location for the variable name
- **valueGetter**: Provide a location for the variable value


Default config
--------------

.. code-block:: json

    {
      "type": "variable-set",
      "name": "[VARIABLE_NAME]"
    }
