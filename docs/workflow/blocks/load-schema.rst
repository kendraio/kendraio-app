Load schema  
===========

The Load Schema block is used to load a schema from the "metadata" database and 
transform it to a jsonSchema which can be used to define a dynamic form. 

Typical usage
-------------
Used as a sub-block of the "Form" schemaGetter definition. 

.. code-block:: javascript

{
    "type": "form",
    "label": "Save",
    "hasSubmit": false,
    "schemaGetter": {
        "blocks": [
            {
                "type": "load-schema",
                "adapterName": "schemas",
                "schemaGetter": "context.schema && context.schema.name"
            }
        ]
    }
}


Default config
--------------

.. code-block:: javascript

    {
      "type": "load-schema",
      adapterName: 'schemas',
      '//comment': 'use either schema or schemaGetter',
      schema: 'schema',
      schemaGetter: 'data.schema',
    }


Supported properties
--------------------
   **adapterName**  - the name of the adapter to use.
    **schema** - the name of the schema to use
    **schemaGetter** - a JMESPath expression to get the schema from the data

   Use either schema or schemaGetter. schemaGetter will override schema.



Schema data structure (jsonSchema)
-----------------------------------
This block will only work with data conforming to the structure below. 






.. code-block:: json

  {
        "type": "object",
        "properties": {
            "name": {
                "type": "string",
                "title": "Schema name"
            },
            "description": {
                "type": "string",
                "title": "Description"
            },
            "label": {
                "type": "string",
                "title": "Label property",
                "description": "key of propery to use as item label"
            },
            "properties": {
                "type": "array",
                "title": "Properties",
                "items": {
                    "type": "object",
                    "properties": {
                        "key": {
                            "type": "string",
                            "title": "Key"
                        },
                        "title": {
                            "type": "string",
                            "title": "Title"
                        },
                        "type": {
                            "type": "string",
                            "title": "Type",
                            "enum": [
                                "Text",
                                "Number",
                                "Date",
                                "Reference",
                                "Object",
                                "List"
                            ]
                        },
                        "config": {
                            "type": "string",
                            "title": "Config"
                        }
                    }
                }
            }
        }
    }



