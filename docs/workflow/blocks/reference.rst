Reference
=========

This block presents a select widget that takes it's options from the data input.
It expects to receive an array of options, and shows a drop-down select list where
one of the options can be selected. The selected option is output as the data from
this block.

Default config
--------------

.. code-block:: json

    {
        "type": "reference"
    }

Supported properties
--------------------

- **fieldLabel**: The label displayed above the select widget.
- **labelGetter**: A property used to specify the field in the data for display as labels in the select options.
- **valueField**: Specifies the field in the data that holds the value for each option.
- **outputGetter**: Defines how the selected option’s value is output.


Examples
--------

Here is an example showing most of the possible configuration values:

.. code-block:: json

    {
        "type": "reference",
        "fieldLabel": "Select artist",
        "labelGetter": "name",
        "valueField": "id",
        "outputGetter": "@"
    }

Instead of ``labelGetter`` the label can be taken from a field of the input
data using ``labelField``. The label field defaults to ``label`` so if the
input data items have a field called ``label`` you can omit these options.

You can also set the ``required`` status of the input select list. This defaults
to ``false``.

At the moment, it does not seem possible to prefill the field with a selected value simply using the block property.
There is a property called `defaultValue` which currently doesn't seems to work.

To prefill the select value, embed the reference block within a form block. 
The form's incoming data must contain the selected value, while the form’s configuration takes the options list from a predefined list in the context. 
The list must follow a specific data structure, as shown below.

.. code-block:: json

    {
        "type": "debug",
        "open": 1,
        "showData": true,
        "showContext": true,
        "showState": false
    }

    // Output of the debug

    {
        "data": {
            "managerSelected": "John Smith"
        }

        "context": {
            "managers": {
                "anyOf": [
                    {
                        "title":"Will Teather"
                        "const":1
                    },
                    {
                        "title":"John Smith"
                        "const":2
                    },
                    {
                        "title":"Ross Sullivan"
                        "const":3
                    }
                ]
            }
        }
    }

    {
        "type": "form",
        "hasSubmit": false,
        "jsonSchema": {
            "type": "object",
            "properties": {
                "managerSelected": {
                    "title": "Select an Asset Manager",
                    "$ref": "#/definitions/context/managers"
                }
            }
        },
        "uiSchema": {}
    }

TIP: Use this formula in a mapping block to transform an array into the "anyOf" data structure needed by the reference block: 



.. code-block:: json

    // Example of incoming data

    [
        {
            "name":"Will Teather"
            "asset_manager_id":1
        },
        {
            "name":"John Smith"
            "asset_manager_id":2
        },
        {
            "name":"Ross Sullivan"
            "asset_manager_id":3
        }
    ]


    {
        "anyOf": data[*].{
            "title": name,
            "const": asset_manager_id
        }
    }