Serialize Data
==============

This block will convert the incoming data into an encoded/serialized string of text data. The encoding of the data depends on the configuration and can be selectable by the user.

The output of this block is an object with two keys:

- **format** (default = ‘json’) - a string representing the type of the serialized data
- **data** - the text string with the encoded data


Default config
--------------

.. code-block:: json

    {
      "type": "serialize",
      "hasFormatSelection": true,
      "formats": [
        "json",
        "csv",
        "xml"
      ],
      "csvOptions": {
        "header": true,
        "skipEmptyLines": true
      },
      "xmlOptions": {

      }
    }

Supported properties
--------------------

- **hasFormatSelection** (default = true) - show a widget to select the output format.
- **formats** (default = [‘json’, ‘csv’, ‘xml’]) - which formats to allow for output
- **showRecordCount** (default = true) set this to false to disable the display of the record counter
- **csvOptions** - configuration options to pass along to CSV serializer
- **xmlOptions** - configuration options to pass along to the XML serializer

For CSV data the input data can be one of:

- An array of arrays
- An array of objects
- An object explicitly defining fields and data

Supported ``csvOptions`` with default values:

- **quotes**: false (or array of booleans
- **quoteChar**: '"'
- **escapeChar**: '"'
- **delimiter**: ","
- **header**: true
- **newline**: "\r\n"
- **skipEmptyLines**: false (or 'greedy')
- **columns**: null (or array of strings)
