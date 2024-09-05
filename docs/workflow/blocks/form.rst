Form
====

Display a form for data entry or editing.

Forms are displayed based on the UI Schema and JSON Schema provided. These can be provided inline within the block configuration, or loaded from an adapter.
Kendraio Form is built on top of Angular Formly https://formly.dev/. Most of the form properties and functionalities can be found in Formly.

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

uiSchema properties
--------------------

- **items**: Wrapped round a field's properties to denote that it accepts input of more than one value.
- **ui:widget**: The functionality that uiSchema will provide, for example “blocks” for a nested Flow or “password” to hide user input with asterisks.
- **blocksConfig**: A container for a nested block or Flow.
- **adapterName**: The adapter of the Flow to be used as a gosub.
- **workflowId**: The ID of the Flow to be used as a gosub.
- **blocks**: The blocks to nest in the form field. This should be an array, even if it is a single item.
- **type**: The type of block to be used.

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


  // data
  {
    "name": `John`,
    "lastname": `Doe`
  }

  // Form config
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
To generate fields from given data, the data must be in a format that the form block can read.

It is possible to transform the data into the format that the form expects with the help of a mapping block.

Is also possible to use generated data to dynamically display the title of a field

.. code-block:: json
  
  // data
  {
    "user_name": `John`,
    "user_surname": `Doe`
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
                "default": "The value of this field comes from dynamic data"
            },
            "user_surname": {
                "type": "string",
                "title": "surname",
                "default": "The value of this field comes from dynamic data"
            }
        }
    },
    "uiSchema": {}
  }

Select Input
^^^^^^^^^^^^
Display a field that allows the user to select an item from a list of options.

The options have to be listed in a property called `enum` as array.

To have a label, the `default` property can be used. To prefill the select with a specific option, 
a string with the same name property and same value has to be passed in as data.
The `enum` property works just with hardcoded data, as per example.

.. code-block:: json

  // data
  {
    "name": `John`,
    "lastname": `Doe`,
    "age": `+21`
  }

  // Form config
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
            },
            "age": {
              "type": "string",
              "title": "Age",
              "enum": [
                "0-16",
                "16-18",
                "18-21",
                "+21"
              ]
            },
            "status": {
              "type": "string",
              "title": "Civil Status",
              "default": "Pick a status"
              "enum": [
                "single",
                "married",
                "widow",
                "divorced"
              ]
            }
        }
    },
    "uiSchema": {}
  }

Select with Dynamic data
^^^^^^^^^^^^^^^^^^^^^^^^
If the options displayed in the select input come dynamically (maybe from a mapping block or from an API), 
then we will need to use the `$ref` property and the passed data must have a specific structure: with `anyOf`, `title` and `const`.
It is also possible to use the :doc:`reference <reference>`

.. code-block:: json

  // data
  {
    "name": `John`,
    "status": {
        "anyOf": 
        [
            {
                "title": `Single`,
                "const": `1`
            },
            {
                "title": `Divorce`,
                "const": `2`
            }
        ]
    }
  }

  // Save these data to a context, under the name `civilStatusData`

  // Form config
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
            "status": {
              "title": "Civil Status",
              "$ref": "#/definitions/context/civilStatusData"
        }
    },
    "uiSchema": {}
  }

If you want to prefill the field with a specific option, you need to pass the corresponding `const` value 
as data, right before the Form block.


.. code-block:: json

  // data
  {
    "name": `John`,
    "status": {
        "anyOf": 
        [
            {
                "title": `Single`,
                "const": `1`
            },
            {
                "title": `Divorce`,
                "const": `2`
            }
        ]
    }
  }

  // Save these data to a context, under the name `civilStatusData`
  {
      "type": "context-save",
      "key": "civilStatusData"
  }

  // Pass the selected option
  {
    "status": `2`
  }


  // Form config
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
            "status": {
              "title": "Civil Status",
              "$ref": "#/definitions/context/civilStatusData"
        }
    },
    "uiSchema": {}
  }

In the above example, as soon as the Flow is open, it should show a select input with `Divorce` already selected, and the option to change it to `Single`.



Special UI: Card to add and remove items dynamically
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`type: array` display a special UI which allow to add/delete dynamically
the specified field with the specified properties. 

In the below example, the form will allow the user to create a group of 
two fields: A number and a string. 

Clicking on the add button the user will be able to add more of these group of items,
or remove the already created one.

An example of the array type in action is `here <https://app.kendra.io/bandsintown/editEvent>`_

.. code-block:: json

  {
    "type": "form",
      "label": "Search",
      "jsonSchema": {
          "type": "object",
          "properties": {
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
                        }
                    }
                }
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
The simplest way to use a schemaGetter is the :doc:`load_schema` block.

The load-schema block can turn an object generated by the `schema builder <https://app.kendra.io/importer/start>`_ into a JSON schema, and can combine multiple existing schemas. 

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

Password Fields
---------------

You can use uiSchema to designate a password field. 
The below example will render a form that displays only * for each character entered in the "password" field.

You can see this working `here
<https://app.kendra.io/workflow-builder?data=NobwRALgngDgpmAXGAlgOxRMBfANOaeJMANwEMAnFMgIwBs4BaAczi1zDTIFsFkBnMmgAmNAPYAPAIIBXCAAsc+SLD5huZGDHTMwHDVp3FhZCGQAEAH0vmABiGy2lBVcQBmYitz1g6tOHTEAMJiaGhwAMbsYABW-KEAyhHycBpILkTIYjQxkdEwFGLwFBAocPzpYDL8cBRcvJWEavwQVGi6HKUQDMQAqjV1PAgcwnBuZDJ0WMhKYDBk-PwA7p7Cja4CrUadmD3IAAoLy6s+o+OT02A42HhVKEkpaYjg84srFGvPd4hLKMKsl1exw+1zwGTUEVCEDgEggjEEJGGYEhaGhsIA0nAoMQEXA1mCVJkwPIIBAYD5eAoxJ85mIWj40GJSm5sYhxnQahw4CIYGJ0JcSWT+IgAPQigDW3OEFDIKDEjBomEYBUkUAAdIiKBEAmrNDARRMFD55lA6GIyDSQOZqrV6nBEOYTGY1TbBrxcOYge9hA6nWQ1V7Vh6mg6AOQAUQAslIAJIAGVD5mwPnoYgi4pC3F4qOIzkJagM2naFL1RmQvAorAAFH6PSi0RA1bjhABKPNNYjkOh-UyeHzQ+nIRkQAD6aEmdBrpn9EDEkrQbf05UErGIADUyN2nXK0OYAGKyhj45Qd5DkKi0BjwtgMoY4oSiSSyI3YAC6QA>`_.

.. code-block:: json

  {
    "type": "form",
    "label": "Connect",
    "jsonSchema": {
        "type": "object",
        "properties": {
            "username": {
                "type": "string",
                "title": "Username",
                "default": ""
            },
            "password": {
                "type": "string",
                "title": "Password",
                "default": ""
            }
        }
    },
    "uiSchema": {
        "password": {
            "ui:widget": "password"
        }
    }
  }


Nested blocks
------------

You can insert or "nest" another block within a form through the use of uiSchema.
First specify your nested block's position in the jsonSchema using the property key of your choice.
Then you can define the schema's content in the form block with your chosen key, 
within the enclosing “uiSchema” property.

The below example inserts an array of blocks into the form. Each block displays a simple message.

You can see this example working `here
<https://app.kendra.io/workflow-builder?data=NobwRALgngDgpmAXGAZgewE4FswBowA2AhgEZwFJgDKAriVgJYR5gBWAzmgHZUDGAFnCxEk4GBjTwMEBnHajIRDAHM4EAPrjJcaVAXR4ldhAwMuyljIgEEyAJpoaAAgDu3AOQQn7OHCcR+BnYnAFonJlcGAgInMic0ADcdUwATFLguWKgnGgY+QWEwAF8S-Fz8oRFEcAglVQ0tKWgFXMQXBhT6yhICNF4Aa3l8Hr7BgGFuFAYLarARgflEUEhYWzAsOXYiVUsmG0oAQScN9i2dotwa1coTs4R8K33kA640AJ1jze2EC6vDZFu3121jWdjUTiIr3eGE+pyBRQAuiULnNegMJlgNlxmMhigigA>`_.

.. code-block:: json

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

If you want fixedto update a field value according to a user action, you can achieve this with a nested flow.

Any flow can be nested in any other flow. The nested flow has access to the main flow's data object, 
context and state - it can use any data stored here. 
The nested flow's output is then passed to the main flow's data object, just like the output of a conventional block.

The nested flow's configuration does not appear within the main flow. 
Instead, it can be edited directly with Kendraio App if opened from the Flow Cloud, just as you would edit the main flow.
Any saved changes will be reflected immediately when the main flow is refreshed.

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
