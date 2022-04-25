Rename Fields
=============
The rename fields block uses mappings to convert one data format to another.

Default config
--------------

.. code-block:: javascript

   {
      type: 'rename-fields',
      mapping: [
        {
          source: 'SourceField',
          target: 'TargetField'
        }
      ],
      mappingGetter: 'data.something',
      inputGetter: 'data'
    }

Supported properties
--------------------
    - **mapping**  an array of objects defining a mapping of from -> to fields {source: <string>, target: <string>}
    - **mappingGetter**  a JMESPath expression to get the mapping from the input data
    - **inputGetter**  (required) a JMESPath expression to get the source data
   
    mappingGetter overrides mapping. 



JSON Schema
-----------
The rename fields functionality requires data that has been saved according to this schema.

.. code-block:: json

    {
        "type": "object",
            "properties": {
                "inputFile": {
                    "title": "Example source file",
                    "type": "string"
                },
                "targetSchema": {
                    "title": "Target schema",
                    "type": "string"
                },
                "presetName": {
                    "title": "Preset name",
                    "description": "A name for this mapping preset so it can be identified during import operations.",
                    "type": "string"
                },
                "fieldMappings": {
                    "title": "Mapping",
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "target": {
                                "title": "Destination",
                                "type": "string",
                                "enum": [                            ]
                            },
                            "source": {
                                "title": "Source",
                                "type": "string",
                                "enum": [
                                ]
                            }
                            
                        }
                    }
                }
            }
        }