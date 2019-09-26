CSV Import
==========

**Deprecated, use separate file input and parse data blocks**

Load in data from a CSV or Excel file.

Default config
--------------

.. code-block:: json

    {
      "type": "csv-import",
      "header": true,
      "skipEmptyLines": true
    }

Supported properties
--------------------

- header (default = false): Set this to true and then the first row of parsed data will be interpreted as field names
- skipEmptyLines (default = false): If true, lines that are completely empty (those which evaluate to an empty string) will be skipped. If set to 'greedy', lines that don't have any content (those which have only whitespace after parsing) will also be skipped.

Most of the other config properties can be omitted, as the default values will automatically detect the correct settings to use from the imported CSV file. Other supported properties:

- delimiter (default = ""): Leave blank to auto-detect from a list of most common delimiters, or any values passed in through delimitersToGuess
- newline (default = ""): Leave blank to auto-detect. Must be one of \r, \n, or \r\n.
- quoteChar (default = '"')  The character used to quote fields. The quoting of all fields is not mandatory. Any field which is not quoted will correctly read.
- escapeChar: '"',
- dynamicTyping (default = false): If true, numeric and boolean data will be converted to their type instead of remaining strings.
- preview: 0 - if greater than 0 then only this many lines will be read
- delimitersToGuess: [',', '\t', '|', ';']
