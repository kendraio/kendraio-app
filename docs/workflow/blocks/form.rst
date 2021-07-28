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
- **adapter** and formId: if these two properties are provided they are used to fetch the JSON schema and UI Schema from the adapter config repository.
- **label** (default = “Submit): customise the label displayed on the submit button
- **hasSubmit** (default = true): this allows you to remove the submit button from the form. If this is set to true the submit button is not displayed and the form will output all changes.
- **debounceTime** (default = 400): the number of milliseconds to debounce form output when not using a submit button. Multiple changes within this time will be ignored, and only the last change is emitted. This is a useful option to prevent unnecessary execution of multiple tasks within the workflow, for example if the form feeds into a HTTP block to pull data from an API (such as in an autocomplete) then the debounce will limit the number of requests that are sent while the user is entering input.
- **emitOnInit** (boolean) (default = false): enable this to emit the form values when the block is initialised. This is useful if you need to pass on default values.

Config init
-----------
If can often be beneficial to initialiase the form data by creating an mapping of the default data. 

.. code-block:: json 

  {
    "confirm": false
  }


Examples
---------

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