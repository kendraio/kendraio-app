Switch
======

The switch block is used to conditionally run workflows based on evaluation of input value.

Default config
--------------

.. code-block:: json

    {
      "type": "switch",
      "valueGetter": "data",      
      "cases": []
    }

Supported properties
--------------------

- **valueGetter** - JMESPath to evaluate against incoming data to get value for comparison
- **cases** (default = []) - an array of cases, each case contains:

  - **value** - the value that must match for this case to run
  - **blocks** - the workflow items that are run when this case matches
  - **valueGetter** (optional) - a JMESPath expression to evaluate which is used to compare and select the appropriate case. Only the specified case that matches the evaluated expression will be run. If a valueGetter expression is not provided then the input data is used as the value to match against.  
  - **default** - object contains one key:

    - **blocks** - the array of workflow items to run if no cases match
  

Notes
-----

The comparison made to select the branch is that it’s the first branch where value === matchValue - where value is the value defined in the branch, and matchValue is the result of valueGetter , and === is the JavaScript “strict equality”.
    
If you are looking to perform a test against a more variable value, you will need to use a more complex expression in the initial valueGetter. 

  .. code-block:: JMESPath

    (test && value) || (otherTest && someOtherValue)