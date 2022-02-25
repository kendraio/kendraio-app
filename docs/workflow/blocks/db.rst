Local Database
==============

The local database block implements an indexed database in the browser storage. 
The block implements a version of Dexie.js. 


Default config
--------------

.. code-block:: json

    {
      type: 'db',
      operation: 'add',
      adapterName: 'UNKNOWN',
      schema: 'none',
      skipFirst: true,
    }

Supported properties
--------------------
- **operation** - the database operation to undertake (See below)
- **adapterName**  - the name of the adapter
- **schema** -  the name of the schema
- **schemaGetter** - A JMESPath expression to resolve the schema name
- **skipFirst** - skip the first call (defaults to true)
- **uuidGetter** - A JMESPath expression to resolve the uuid to use (required for fetch operations)



Available operations    
---------------------

* fetch - load a single item from the database
* get - load multiple items from the database
* update - modify a single item in the database
* add - add a new item
* delete - delete an item




LocalDatabaseService
--------------------
The local database block builds on the local database service. Our local database service is a wrapper for Dexie.js.
The LocalDatabaseService defines a set of database tables, but, when we're working with the bd block, all our data
if stored in a single table - "metadata". 

Internally, all data in the "metadata" table uses this format:

.. code-block:: json    
    {
        "uuid": "",
        "schemaName": "",
        "adapterName": "",
        "label": "",
        "data": {
            "key1": "value",
            "key2": "value"
        }
    }


Individual items can be loaded with just a uuid, while collections of items can be loaded by providing schemaName and adapterName.



