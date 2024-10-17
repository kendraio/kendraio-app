Actions
=======

Use the Actions block to add a row of buttons for one or more sub-tasks.

Default config
--------------

.. code-block:: json

    {
      "type": "actions",
      "buttons": [
        {
          "label": "Action",
          "color": "default",
          "enabledGetter": true,
          "enabled": true,
          "blocks": []
        }
      ]
    }


Supported properties
--------------------

- **buttons** (array) - the list of buttons. Each button in the list has the following properties:

  - **label** (string) - the text for the button label
  - **id** (string) - the unique identifier for the button
  - **color** (string) - passed as the “color” attribute to the material button. Use one of the supported
    Material color values, such as “primary”, “warn”, “accent”. Leave as “default” to use the default button styling for a plain button.
  - **enabledGetter** (string) - A value from the state or context. Based on this value, it generates an "enabled" property on the button.
  The button will be shown as disabled (greyed out) or enabled accordingly. The default value of this property is `true`. After 
  the block is loaded, it will automatically add a property to the block json: `"enabled": true`.
  If `enabledGetter` is set to `false` the automatic property will be then shown as `"enabled": false`.
  - **valueGetters** (string) - A value that will be pass as context to whichever action is being executed. 
  This is a JMESPath mapping.
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

valueGetters
++++++++++++++++++++++
In this example, we are specifying which flow to load when the button is clicked. We do so using the `valueGetters` property and specifying an `adapter` and a `workflowId`.
You can find this example on the `Flow Cloud <https://app.kendra.io/workflowCloud/listWorkflows>`, in the list of workflows.

.. code-block:: json
  {
    "type": "actions",
    "buttons": [
        {
            "label": "Launch",
            "blocks": [
                {
                    "type": "launch",
                    "valueGetters": {
                        "adapter": "data.adapterName",
                        "workflowId": "data.id"
                    }
                }
            ],
            "enabled": true
        }
    ]
}


enabledGetter
++++++++++++++++++++++
`enabledGetter` determines if the button is enabled or disabled. This is mostly referring to the UI of the button. 
If the button is disabled, it will be displayed as greyed out and it will not be clickable.
`enabledGetter` requires a JMESPath mapping value that should return `true` or `false`.
The value can be added manually or taken from the state or the context.
In this example we want to display two different buttons, one enabled and another disabled.
To do so we take values we have saved in the state and assign them to the `enabledGetter` property.


.. code-block:: json

  {
      "type": "actions",
      "buttons": [
        {
          "label": "Visible",
          "color": "default",
          "blocks": [],
          "enabledGetter": "state.global.enabled"
        },
        {
          "label": "Disabled",
          "color": "default",
          "blocks": [],
          "enabledGetter": "state.global.disabled",
          "enabled": false
        }
      ]
    }


After the block as loaded, the `enabled` property will be set on the button:
.. code-block:: json

  {
      "type": "actions",
      "buttons": [
        {
          "label": "Visible",
          "color": "default",
          "blocks": [],
          "enabledGetter": "state.global.enabled",
          "enabled": true
        },
        {
          "label": "Disabled",
          "color": "default",
          "blocks": [],
          "enabledGetter": "state.global.disabled",
          "enabled": false
        }
      ]
    }

Alternative blocks
++++++++++++++++++++++
For external links, the :doc:`Template Block <template>` can be used to create links using a subset of HTML, though it is not styled as a button by default.

For links to other Flows, the :doc:`Link Action Block <link_action_block>` allows opening links in another window or tab, with only one block needed, which is styled as a button (just like an Actions block).
