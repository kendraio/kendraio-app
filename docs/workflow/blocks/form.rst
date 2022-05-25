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
If can often be beneficial to initialiase the form data by creating an mapping of the default data. 

.. code-block:: json 

  {
    "confirm": false
  }


Examples
---------

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