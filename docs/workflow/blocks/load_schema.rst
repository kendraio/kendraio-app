load-schema
===========

This block generates JSON schemas from at least one schema objects, created by the schema builder.
It can import compose schemas from a base schema object, that can reference other schema objects, and this block will produce a data output that combines them together.
Our schema editor outputs a format that can be converted to a JSON schema format, which our Form block can then load, using this load-schema block.


You can go to https://app.kendra.io/schemas/list and click "Create" to use the schema editor.
The schema editor is found at https://app.kendra.io/schemas/edit


This block is used by the item / record editing flow at https://app.kendra.io/schemas/editItem?schemaId=[schema UUID]&id=[record UUID]

To get to a record editor, find the schema for the record at https://app.kendra.io/schemas/list - and then select the "Items" operation button, which will take you to https://app.kendra.io/schemas/itemsFromSchemaId?schemaId=[schema UUID] and from there you can select the "Edit" operation button for existing saved schema item / records, or create a new one by clicking "Add Item".


Usage within Form block:
------------------------

.. code-block:: json

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

In the above example, the schemaGetter is a mapping used to get the schema object that was saved to a context block.


Simple input data example
-------------------------

This example input is JSON created by the schema creator but it is not yet a JSON schema format.
(This example could be loaded into the local browser database by saving to disk as a JSON file and loading by clicking the import button on https://app.kendra.io/schemas/list )

.. code-block:: json

    [
        {
            "uuid":"126825f2-2e87-4ef2-8c5e-c7f287ca8dfd",
            "name":"person",
            "description":"Person",
            "properties":[
                {
                    "title":"Name",
                    "key":"name",
                    "type":"Text"
                }
            ],
            "label":"name"
            }
    ]


If the above is loaded in (using a database / DB block, like the "editItem" flow does), the load-schema block can take it as input, and output a JSON schema compatible object like this (which may be used by the Form block):

.. code-block:: json

    {
      "jsonSchema": {
          "definitions": {
          "person": {
              "title": "person",
              "description": "Person",
              "type": "object",
              "properties": {
              "name": {
                  "type": "string",
                  "title": "Name",
                  "description": ""
              }
              }
          }
          },
          "$ref": "#/definitions/person"
      },
      "uiSchema": {}
    }


Allowing input of list objects using existing schemas (in List / Object config)
---------------------------------------------------------------------
If you already have a schema you want to use for a form field, or list of fields, you can reference the schema name in the "config" property of an "Array" or "Object".
E.g: a "team" schema could have a people list specified with a property like this:  

.. code-block:: json

    {
        "type": "List",
        "key": "people",
        "title": "People",
        "config": "person"
    }
This would transclude the "person" schema and allow a form to capture a list of people without having to redefine what properties a "person" list may be composed of. This is especially helpful given that the schema editor does not supported nested items.

Similarly, a "rental agreement" schema could define a owner field and a leaseholder field, both using a person object.

.. code-block:: json

    [
        {
            "type": "Object",
            "key": "owner",
            "title": "Owner",
            "config": "person"
        },
        {
            "type": "Object",
            "key": "leaseholder",
            "title": "Leaseholder",
            "config": "person"
        }
    ]

Selecting existing records (ObjectReference)
-----------------------------------------------------------
List records from a schema, and allow the user to select one of them.
E.g: If a list of person records were stored in the database, a ObjectReference
can be used to select a single selected person record, transcluded from "person" records.

ObjectReference accepts a schema config name, and populates a list of records from the database for selection by the user.

.. code-block:: json

    [
        {
            "type": "ObjectReference",
            "key": "owner",
            "title": "Owner",
            "config": "person"
        },
        {
            "type": "ObjectReference",
            "key": "leaseholder",
            "title": "Leaseholder",
            "config": "person"
        }
    ]

Allowing selection of multiple record objects (ListReference)
------------------------------------------------------------------
To select a list of multiple record objects, use the ListReference type.
E.g: A list of multiple team members could be selected from the "person" records (see below).
Note that the UUID of the object is also stored to uniquely identify the object.

.. code-block:: json

    [
        {
            "type": "ListReference",
            "title": "Team Members",
            "config": "person"
        },{
            "type": "text",
            "key": "name",
            "title": "Team name"
        }
    ]


Supported block properties
---------------------------

A schema must be supplied via the schema property, or via the schemaGetter.

- **type** - Blocks must always specify what kind of block type they are.
- **adapterName** - Optional, defaults to "schemas" if not specified.
- **schema** - Optional, a schema can be directly specified.
- **schemaGetter** - Optional, a JMESPath mapping can be specified. It is evaluated to get the schema.


Related blocks
--------------
- :ref:`db` - the local database block
- :ref:`form` - to populate a form entry interface using JSON schema generated by this load-schema block.
- :ref:`mapping` - used to specify an input data source