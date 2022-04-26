Local Database
==============

The local database block implements an indexed database in the browser storage. 
The block implements a version of Dexie.js. 

All data stored using this block is written to the same local database. 
To manage subsets of the database, we segment data based on the combination
of "adapterName" and "schemaName".  Individual items can be loaded with just a 
uuid, while dataset of items can be loaded by providing schemaName and adapterName.

For more information about how data is stored in the local database, see the section at the end of this document. 


Default config
--------------

.. code-block:: javascript

    {
      type: 'db',
      operation: 'add',
      adapterName: 'UNKNOWN',
      schema: 'none',
      skipFirst: true,
    }


Available operations    
---------------------

- **fetch** - load a single item from the database
- **get** - load multiple items from the database
- **update** - modify a single item in the database
- **add** - add a new item
- **delete** - delete an item

Supported properties  
---------------------
- **operation** -  the database operation to undertake (required)
  
  - for **fetch** or **delete**
    **uuidGetter**  A JMESPath expression to resolve the uuid of the item.
  
  - for **add** or **get**
    **adapterName**  - The name of the adapter to use (required)
    **schema** -  the name of the schema 
    **schemaGetter** - A JMESPath expression to resolve the schema name 
  
  - for **update** there are no properties required, simply the data
   
- **skipFirst** - (defaults = true) don't act during the block's initialisation phase



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



