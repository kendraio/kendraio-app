Debug
=====

Output the current data model values and list available contextual values.


Default config
--------------

.. code-block:: json

    {
      "type": "debug",
      "open": 1,
      "showData": true,
      "showContext": false,
      "showStat": false
      
    }

Supported properties
--------------------

- open (number) (default = 1): how many levels of debug output to show by default.
- showData (default = true): Set this to false to hide the display of the primary data
- showContext (default = false): This defaults to false, in which case only output the input data into the debug
  block is shown. Set this to true to enable debugging of context values too.
- showState (default = false): Set this to true to enable to display of state.
