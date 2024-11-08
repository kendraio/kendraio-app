Gosub
=====

A Flow embedded within a Flow.

This allows composition of larger building blocks to create Flows that
are easier to manage, and DRY (don't repeat yourself).

Default config
--------------

.. code-block:: json

    {
        "type": "gosub",
        "adapterName": "",
        "workflowId": ""
    }

Supported properties
--------------------

- **adapterName**: the name of the Flow's adapter that will be embedded.
- **workflowId**: the id of the Flow's adapter that will be embedded.

Typical use-cases for this are creating custom form widgets that can
be referenced from a form's ``uiSchema``. 
The form property's name must match the data property name. 
In this way the data will be passed down to the embedded Flow.




.. code-block:: json

    // Parent Flow data
    {
        "asset_name": "Gioconda",
        "location": "https://someimages.com",
        "asset_manager_id": "1"

    }

    {
    "type": "form",
    "jsonSchema": {
        "type": "object",
        "properties": {
            "asset_title": {
                "title": "Asset",
                "type": "string"
            },
            "location": {
                "title": "Location",
                "type": "string"
            },
            "asset_manager_id": {
                "type": "string",
                "title": "Asset Manager"
            }
        }
    },
    "uiSchema": {
        "location": {
            "ui:widget": "remote-image"
        },
        "asset_manager_id": {
            "ui:widget": "blocks",
            "blocksConfig": {
                "blocks": [
                    {
                        "type": "gosub",
                        "adapterName": "culturebanked",
                        "workflowId": "artist2-select-asset-manager"
                    }
                ]
            }
        }
    }
}

In the example above, there are two Flows: the primary Flow, where the above configuration is written, and a secondary Flow with the Adapter "culturebanked" and Workflow ID "artist2-select-asset-manager".
The "artist2-select-asset-manager" Flow is rendered as part of the parent Flow and is initiated with the data { "asset_manager_id": "1" }.
If the property is modified in the uiSchema, the property name must be the same as the original data both in 
the jsonSchema and in the uiSchema.

Or, creating dashboards that are made up of multiple other Flows combined with a ``multi``
multiplex Flow block.

All data saved in a gosub is stored in the context or state of the parent Flow.
Therefore it is vital to avoid duplicating keys between the parent Flow and any of its gosubs, 
in order to prevent conflicts and unexpected behaviour.


