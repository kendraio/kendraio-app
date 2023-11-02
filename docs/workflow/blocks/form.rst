Form
====

Display a form for data entry or editing.

Forms are displayed based on the UI Schema and JSON Schema provided. These can be provided inline within the block configuration, or loaded from an adapter.

Default config
--------------

.. code-block:: json

    {
      "type": "form",
      "jsonSchema": {},
      "uiSchema": {}
    }

Supported properties
--------------------

- **jsonSchema**: the data model for which to generate the form
- **uiSchema**: the UI Schema for customisation of the form. This is used to add further options to the form that are beyond what is allowed in JSON schema, such as customising widget types, labels, and widget options.
- **adapter** and **formId**: if these two properties are provided they are used to fetch the JSON schema and UI Schema from the adapter config repository.
- **label** (default = “Submit): customise the label displayed on the submit button
- **hasSubmit** (default = true): this allows you to remove the submit button from the form. If this is set to true the submit button is not displayed and the form will output all changes.
- **debounceTime** (default = 400): the number of milliseconds to debounce form output when not using a submit button. Multiple changes within this time will be ignored, and only the last change is emitted. This is a useful option to prevent unnecessary execution of multiple tasks within the workflow, for example if the form feeds into a HTTP block to pull data from an API (such as in an autocomplete) then the debounce will limit the number of requests that are sent while the user is entering input.
- **emitOnInit** (boolean) (default = false): enable this to emit the form values when the block is initialised. This is useful if you need to pass on default values.
- **schemaGetter**: Form schemas can be made dynamic by providing a set of blocks that will generate a schema. 
- **contextErrorKey** (default = null): the key used to store the error message in the context. This is useful if you want to display the error message in a different block.

Important notes on creating flows with forms
--------------------------------------------

When a form is submitted, it will trigger the execution of the next block in the flow, passing through any new data.
Blocks will continue to pass processing through the flow, until a block emits the same data as it did previously - 
at which point the change detection will stop the flow. 

If you are creating flows that need to respond to new data from the forms, you will need to pay attention to the blocks
that follow the form, making sure that every block emits changes to that processing continues. If you have blocks that are 
not dependent on the form, then it is best to place them before the form in the flow. 



Config init
-----------
The initial configuration will result in an empty form.
The fields of the form can be populated in two ways: manually writing fields or dynamically generating fields from given data.

Here's an example of creating a form by manually writing fields and configuring it:

.. code-block:: json
  {
    "type": "form",
    "hasSubmit": "true", 
    "label": "Click to submit",
    "jsonSchema": {
        "type": "object",
        "properties": {
            "name": {
                "type": "string",
                "title": "Name",
                "default": ""
            },
            "lastname": {
                "type": "string",
                "title": "Last name",
                "default": ""
            }
        }
    },
    "uiSchema": {}
}

Dynamic data and field titles
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
To generate fields form given data, the data needs to be in a format readable by the form block.
It is possible to transform the data into the format that the form expects with the help of a mapping block.
Is also possible to use generated data to dynamically display the title of a field

.. code-block:: json
  

  // generated data
  {
    "name": `John`,
    "surname": `Doe`
  }

  // Form config
  {
    "type": "form",
    "jsonSchema": {
        "type": "object",
        "properties": {
            "title": {
                "type": "string",
                "title": "I am harcoded text"
            },
            "user_name": {
                "type": "string",
                "title": "name",
                "default": "The title of this field comes from dynamic data"
            },
            "user_surname": {
                "type": "string",
                "title": "surname",
                "default": "The title of this field comes from dynamic data"
            }
        }
    },
    "uiSchema": {}
}


Read-only
^^^^^^^^^
Display a field in read-only mode (not editable)

.. code-block:: json

  {
    "type": "form",
    "label": "Search",
    "jsonSchema": {
        "type": "object",
        "properties": {
            "name": {
                "type": "string",
                "title": "Artist name",
                "readOnly": true
            }
        }
    },
    "uiSchema": {}
  }


No submit button
^^^^^^^^^^^^^^^^
A simple search form without a submit button. 

.. code-block:: json

  {
    "type": "form",
    "hasSubmit": false,
    "emitOnInit": true,
    "jsonSchema": {
        "type": "object",
        "properties": {
            "term": {
                "type": "string",
                "title": "Search term",
                "default": ""
            },
            "displayHidden": {
                "type": "boolean",
                "title": "Show hidden",
                "default": false
            }
        }
    },
    "uiSchema": {}
  }



Using a schemaGetter
^^^^^^^^^^^^^^^^^^^^
The simplest way to use a schemaGetter is the load-schema block.
:ref:`load_schema`
The load-schema block can turn an object generated by the schema builder into a JSON schema, and can combine multiple existing schemas. 

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

If a schema has already been loaded, then a mapping block could be used to grab from data.

.. code-block:: javascript
    
  {
      "type": "form",
      "label": "Save Preset",
      "schemaGetter": {
          "blocks": [
              {
                  "type": "mapping",
                  "mapping": "data.form"
              }
          ]
      }
  }

Using data saved from context blocks
------------------------------------

JSON Schema supports references to transclude content.
Context is injected into a definitions section, that references can use.
In the example below, a mapping has a default value, which is saved using the context block, and the default value is set to "injected". 

.. code-block:: javascript

  [
      {
        "type": "mapping",
        "mapping": "`{ \"type\": \"string\",\n    \"default\":\"injected\"\n}`"
      },
      {
        "type": "context-save",
        "key": "saved"
      },
      {
        "type": "form",
        "jsonSchema": {
          "type": "object",
          "properties": {
            "test_property": {
              "$ref": "#/definitions/context/saved"
            }
          }
        },
        "uiSchema": {}
      }
  ]

Default Field Content
---------------------

https://app.kendra.io/workflow-builder?data=NobwRALgngDgpmAXGAlgOxRMBfANOaeJMANwEMAnFMgIwBs4BaAczi1zDTIFsFkBnMmgAmNAPYAPAIIBXCAAsc+SLD5hhcGjOZgOY+GiQAGDv3liA7gGExaCHAlZEAMzJ1+cPAVXFnYity6YHS0cHTENmhocADG7GAAVvy2AMox8nDcZEjeRMhiNAmx8TAU+nAUEChw-DlgMh4UXLx1hGr8EFRoOhxVEAzEAKqNzQh4YDBk-PwW-sKtPgKd6D2QmAPIAApTM3M42OMyKGkZWXWT07MU84jgR4gWKMKsThM7V-MHHPRiMQDWNm4vDsxBwAF0gA

Nested tasks
------------

You can insert or "nest" another task within a form through the use of uiSchema.
First specify your nested task's position in the jsonSchema using the property key of your choice.
Then you can define the schema's content in the form task with your chosen key, 
within the enclosing “uiSchema” property.

The below example inserts an array of blocks into the form. Each block displays a simple message.

You can see this example in action `here`_.
.. _here: https://app.kendra.io/workflow-builder?data=NobwRALgngDgpmAXGAZgewE4FswBowA2AhgEZwFJgDKAriVgJYR5gBWAzmgHZUDGAFnCxEk4GBjTwMEBnHajIRDAHM4EAPrjJcaVAXR4ldhAwMuyljIgEEyAJpoaAAgDu3AOQQn7OHCcR+BnYnAFonJlcGAgInMic0ADcdUwATFLguWKgnGgY+QWEwAF8S-Fz8oRFEcAglVQ0tKWgFXMQXBhT6yhICNF4Aa3l8Hr7BgGFuFAYLarARgflEUEhYWzAsOXYiVUsmG0oAQScN9i2dotwa1coTs4R8K33kA640AJ1jze2EC6vDZFu3121jWdjUTiIr3eGE+pyBRQAuiULnNegMJlgNlxmMhigigA

  {
    "type": "form",
    "label": "Submit",
    "jsonSchema": {
        "properties": {
            "target_property": {
                "type": "string",
                "title": "You won't see this - it will be overridden by uiSchema"
            }
        }
    },
    "uiSchema": {
        "target_property": {
            "ui:widget": "blocks",
            "blocksConfig": {
                "blocks": [
                    {
                        "type": "message",
                        "title": "A message"
                    },
                    {
                        "type": "message",
                        "title": "Another message"
                    },
                    {
                        "type": "message",
                        "title": "Yet another message"
                    }
                ]
            }
        }
    }
}

Nested flows
------------

If you want to vary a field according to user input, you can achieve this with a nested flow.

Any flow can be nested in any other flow. The nested flow has access to the main flow's data object, context and state - it can use any data stored here. 
The nested flow's output is then passed to the main flow's data object, just like the output of a conventional task.

As with the main flow, a nested flow can be edited directly with Kendraio App if opened from the Flow Cloud. Any saved changes will be reflected immediately when the main flow is refreshed.

Supported Properties
^^^^^^^^^^^^^^^^^^^^

- **items**: Allows input of more than 1 item when wrapped around all other properties.
- **ui:widget**: Wrapper for the schema.
- **blocksConfig**: Defines the layout of the dynamic form field.
- **adapterName**: The Flow Cloud group containing the nested flow.
- **workflowId**: The ID of the nested flow. Along with adapterName, this is how the main flow will find the nested flow.
- **blocks**: The content to display in the field. This must be expressed as an array.
- **type**: The type of content being displayed e.g. “message” displays the text defined with the “title” key.

Example
^^^^^^^

This example flow allows the user to search and select from a menu based on returned data. 
The Venue Name field expects a single value and the Lineup field can handle several values.

The nested flow is denoted by the property ``"type": "gosub"``. You can read more about gosubs :doc:`here <gosub>`.

.. code-block:: json
  
  {
    "type": "form",
    "title": "Update Event",
    "label": "Update Event",
    "jsonSchema": {
      "type": "object",
      "properties": {
        "venue_name": {
          "type": "string",
          "title": "Venue Name"
        },
        "lineup": {
          "type": "array",
          "title": "Lineup",
          "items": {
            "type": "object",
            "properties": {
              "id": {
                "type": "number"
              },
              "name": {
                "type": "string"
              },
              "bio": {
                "type": "string"
              }
            }
          }
        }
      }
    },
    "uiSchema": {
      "venue_name": {
        "ui:widget": "blocks",
        "blocksConfig": {
          "adapterName": "bandsintown",
          "blocks": [
            {
              "type": "card",
              "blocks": [
                {
                  "type": "message",
                  "title": "Search and select venue:"
                },
                {
                  "type": "gosub",
                  "adapterName": "bandsintown",
                  "workflowId": "findVenue"
                }
              ]
            }
          ]
        }
      },
      "lineup": {
        "items": {
          "ui:widget": "blocks",
          "blocksConfig": {
            "adapterName": "bandsintown",
            "blocks": [
              {
                "type": "card",
                "blocks": [
                  {
                    "type": "message",
                    "title": "Search and select artist:"
                  },
                  {
                    "type": "gosub",
                    "adapterName": "bandsintown",
                    "workflowId": "findArtist"
                  }
                ]
              }
            ]
          }
        }
      }
    }
  }
