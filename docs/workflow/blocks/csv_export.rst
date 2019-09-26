CSV Export
==========

**Deprecated, use the separate serialize and file output blocks**

Export data to a CSV file. Input data can be one of:

- An array of arrays
- An array of objects
- An object explicitly defining fields and data

Default config
--------------

.. code-block:: json

    {
      "type": "csv-export",
      "header": true,
      "skipEmptyLines": true
    }

Supported properties
--------------------

quotes: false, //or array of booleans
quoteChar: '"',
escapeChar: '"'
delimiter: ","
header: true
newline: "\r\n"
skipEmptyLines: false, //or 'greedy'
columns: null //or array of strings

