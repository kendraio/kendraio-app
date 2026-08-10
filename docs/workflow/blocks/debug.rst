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
      "showState": false,
      "consoleLog": false,
      "consoleLabel": "debug block"
    }

Supported properties
--------------------

- open (number) (default = 1): how many levels of debug output to show by default.
- showData (default = true): Set this to false to hide the display of the primary data
- showContext (default = false): This defaults to false, in which case only output the input data into the debug
  block is shown. Set this to true to enable debugging of context values too.
- showState (default = false): Set this to true to enable to display of state.
- consoleLog (default = false): Set this to true to display the debug data in the console.
- consoleLabel (default = "debug block"): Set this to any literal value to identify the debug data in the console.
- enabledGetter : When set the enabledGetter should contain a JMESPath expression that returns true/false to enable or disable the debug block. 


Debug in nested blocks or Flows
--------------------------------

It is possible to use the Debug block in nested Flows or nested blocks. 
For example while working with the :doc:`uiSchema <uiSchema>`, it is possible to use the debugger within the list of items as seen in the following example.

.. code-block:: json

              [...]
                  "ui:widget": "blocks",
                    "blocksConfig": {
                        "blocks": [
                            {
                                "type": "context-save",
                                "contextKey": "defaultValue"
                            },
                            {
                                "type": "db",
                                "skipFirst": false,
                                "operation": "get",
                                "adapterName": "culturebanked",
                                "schema": "party"
                            },
                            {
                                "type": "debug",
                                "consoleLog": true,
                                "showData": true,
                                "showState": true,
                                "showContext": true
                            },
                            {
                                "type": "reference",
                                "fieldLabel": "Select beneficiary",
                                "labelGetter": "name",
                                "valueField": "uuid",
                                "outputGetter": "uuid"
                            }
                        ]
                    }
                [...]

