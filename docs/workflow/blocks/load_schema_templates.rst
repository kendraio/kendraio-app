Convert template records into form schemas
==========================================

Makes form schemas from existing JSON data "templates". 
Rather than records being fixed in stone with no way to add new properties, 
we enable making forms dynamically that build upon existing JSON data.

Using existing JSON records as a template, we can create new forms for making records of data.
How? By using transformations that users can configure to, adding new fields, and rename keys.
To make descendants of templates uniquely identifiable, we can also generate new UUIDs.
By transforming existing JSON record objects using user defined templates, data is changed into a form templates using configurable rules.

Background context:
-------------------

Users can make schemas using the schema builder, and make records for the schemas.
The records can themselves be templates for other forms.
Users can make records with the Form block and save them as records for use as templates.
Example use-case: a Content Management System (CMS) can have templates for different blocks of content, text, images, videos etc.
Using this, the CMS can then use the templates to create new content.
The load-schema block can allow adding new JSON properties to these records.
We convert template objects so further information can be added to the form.
We make new JSON schemas for the Form block to use to fill extra details in, 

Terminology:
------------

We use the term "template" to refer to a JSON object that is used as a basis for making a form.
The term "form" is used to refer to a JSON object that is used to make a record using the form block.

Currently focused on the CMS use-case:
--------------------------------------

Currently, the implementation is focused on the CMS (Content Management System) use-case.

Given JSON record, created from an existing form like this:

.. code-block:: json

    {
        "websitemodel": {
            "blockmodel": [
                {
                    "uuid": "c5bfac02-f0b6-4c31-8fdf-18de02667ee9",
                    "src": "https://placekitten.com/200/300"
                }
            ]
        }
    }


The load-schema block can be loaded and configured like this:

.. code-block:: json

    {
      "block": "load-schema",
      "templateToSchema": {
        "blockTypeDefaults": {
          "c5bfac02-f0b6-4c31-8fdf-18de02667ee9": {
            "type": "object",
            "properties": {
              "src": {
                "type": "string",
                "title": "Image URL"
              }
            }
          }
        },
        "convertables": {
          "websitemodel": "website-content",
          "blockmodel": "block-content"
        }
      }
    }

It will use that to produce a new JSON schema for the form block to use, something like this:

.. code-block:: json

    {
        "type": "object",
        "properties": {
            "website-content": {
                "type": "object",
                "properties": {
                    "block-content": {
                        "type": "object",
                        "properties": {
                            "b74e30a7-a052-4331-86eb-ba2eb7a31ce4": {
                                "type": "object",
                                "properties": {
                                    "src": {
                                        "type": "string",
                                        "title": "Image URL"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

It uses the existing loaded JSON record data as context, and output JSON Schema as config for use by the Form block (to allow editing).

It can also be saved as a JSON schema, to later load and make multiple "child" documents.

Note the UUIDs in the JSON Schema are generated automatically for the "block-content" property items.