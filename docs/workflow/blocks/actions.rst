Actions
=======

Use the actions block to add a row of buttons for one or more sub-tasks.

Default config
--------------

.. code-block:: json

    {
      "type": "actions",
      "buttons": [
        {
          "label": "Action",
          "color": "default",
          "blocks": []
        }
      ]
    }


Supported properties
--------------------

- **buttons** (array) - the list of buttons. Each button in the list has the following properties:

  - **label** (string) - the text for the button label
  - **color** (string) - passed as the “color” attribute to the material button. Use one of the supported
    Material color values, such as “primary”, “warn”, “accent”. Leave as “default” to use the default button styling for a plain button.
  - **blocks** (array) - the list of workflow items to run when this button is pressed.

Example
-------

This example shows two buttons. The first one dispatches an asynchronous command using the
:doc:`Event Dispatch <dispatch>` bloc, the second one does nothing, but includes an ``init``
block in order to start the inner workflow so that it runs and signals completion to the outer workflow.

.. code-block:: json

                        {
                          "type": "actions",
                          "buttons": [
                            {
                              "label": "OK",
                              "color": "primary",
                              "blocks": [
                                {
                                  "type": "dispatch",
                                  "action": "resetApp"
                                }
                              ]
                            },
                            {
                              "label": "Cancel",
                              "blocks": [
                                {
                                  "type": "init"
                                }
                              ]
                            }
                          ]
                        }
