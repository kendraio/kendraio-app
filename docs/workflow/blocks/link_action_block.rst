Link Action block
===========
The Link Action block provides a user-friendly button that links to other Flows.

The block is implemented as a link and not a real button, and benefits from the usual behaviour of browser links, for example, the user can choose how Flows are opened, such as the same in the same tab, or a new tab, based on their browser configuration, and users may notice the destination Flow is shown when hovering over the link, this allows the user to directly see where the button would navigate to (which is an improvement over the Launch block, see below).


Default configuration
--------------

.. code-block:: json

    {
      "type": "link-action",
      "label": "Open Flow",
      "adapterName": "adapterName",
      "workflowId": "workflowId"
    }

Supported Properties
--------------------

- **label** (string): The text displayed on the button-like link. Defaults to "Open Flow".
- **adapterName** (string): The adapter name of the target workflow. This property is ignored if a value is specified by `adapterNameGetter` instead.
- **adapterNameGetter** (string): A JMESPath expression that resolves to the adapter name of the target workflow. This allows for dynamic resolution of the adapter name from the data and context. If not set, will use the `adapterName` property instead.
- **workflowId** (string): The workflow ID of the target workflow. This property is ignored if a value is specified by `workflowIdGetter` instead.
- **workflowIdGetter** (string): A JMESPath expression that resolves to the workflow ID of the target workflow. This allows for dynamic resolution of the workflow ID from the data and context. If not set, will use the `workflowId` property instead.

Usage
-----

The block can be configured for use in a *static* or *dynamic* way.

**Static Flow links:**

Uses hardcoded values for `adapterName` and `workflowId` to create a static link to a specific Flow. For example:

.. code-block:: json

    {
        "type": "link-action",
        "label": "View Details",
        "adapterName": "myAdapter",
        "workflowId": "myWorkflow"
    }

In this example, it will create a link with the label "View Details" that points to the `/myAdapter/myWorkflow` route.

**Dynamic Flow links within a grid:**

This example demonstrates using the `LinkActionComponent` within a grid cell to link to individual Flows.

- Use JMESPath expressions in `adapterNameGetter` and `workflowIdGetter` to dynamically generate the link URL based on the data provided to the block (in this case the data from the Grid).
- Embed the block within the `cellRendererParams` of a grid column definition to provide a clickable link for each row.

.. code-block:: json

    {
        "headerName": "Operations",
        "cellRenderer": "workflowRenderer",
        "cellRendererParams": {
            "blocks": [
                {
                    "type": "link-action",
                    "label": "Launch",
                    "adapterNameGetter": "data.adapterName",
                    "workflowIdGetter": "data.id"
                }
            ]
        }
    }

In this configuration:
- `data.adapterName` and `data.id` are JMESPath expressions that retrieve the adapter name and workflow ID from the current row's data.
- The generated link for each row will point to the corresponding Flow.


**Dynamic Flow links using context:**

.. code-block:: json

    {
        "type": "link-action",
        "label": "Login",
        "adapterNameGetter": "context.app.adapterName",
        "workflowId": "login"
    }


In this example, `context.app.adapterName` is a JMESPath expression that retrieves the adapter name from the Flow context, allowing for dynamic resolution of the adapter name, so this common pattern could be used in multiple Flows.  The `workflowId` is statically set to "login".


Refactoring note
----------------
Existing Flows that use a combination of an :doc:`Actions block <actions>` and a :doc:`Launch Block <launch_block>` to open a Flow, can be replaced by the Link Action block to provide the user with more control, allowing the user to be aware of where the link will go to, and avoiding forcing navigation away from the current tab - the Link Action block allows users to open Flows in new tabs or windows, based on their browser configuration.