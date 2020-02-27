Parse Data
==========

Process incoming data as JSON, CSV, or XML.

This block expects the incoming data to contain at least the following keys. These match the output of the File Input block so the two can be easily chained together:

- **type**  - the MIME type of the incoming data, must match one of the supported parse formats.
- **content** - the text content to parse and extract data from.

The correct format for parsing is selected based on the incoming type. If the incoming data does not contain a “type” attribute, AND it is of string type, then it may be parsed with automatic detection of the type. The automatic detection works like this:

- Is the input data a string? No - do nothing and stop parsing
- Does the string start with a “{“ character? Yes - attempt to parse as JSON data
- Does the string start with a “<” character? Yes - attempt to parse as XML data
- Otherwise - attempt to parse as CSV.

Default config
--------------

.. code-block:: json

    {
      "type": "parse-data",
      "csvOptions": {
        "header": true,
        "skipEmptyLines": true
      },
      "xmlOptions": {

      }
    }

Supported properties
--------------------

- **csvOptions** - configuration options to pass along to the CSV parser. This can include:

  - **header** (default = false): Set this to true and then the first row of parsed data will be interpreted as field names
  - **skipEmptyLines** (default = false): If true, lines that are completely empty (those which evaluate to an empty string) will be skipped. If set to 'greedy', lines that don't have any content (those which have only whitespace after parsing) will also be skipped.

  Most of the other config properties can be omitted, as the default values will automatically detect the correct settings to use from the imported CSV file. Other supported properties:

  - **delimiter** (default = ""): Leave blank to auto-detect from a list of most common delimiters, or any values passed in through delimitersToGuess
  - **newline** (default = ""): Leave blank to auto-detect. Must be one of \r, \n, or \r\n.
  - **quoteChar** (default = '"')  The character used to quote fields. The quoting of all fields is not mandatory. Any field which is not quoted will correctly read.
  - **escapeChar**: '"',
  - **dynamicTyping** (default = false): If true, numeric and boolean data will be converted to their type instead of remaining strings.
  - **preview**: 0 - if greater than 0 then only this many lines will be read
  - **delimitersToGuess**: [',', '\t', '|', ';']
  - **xmlOptions** - options to pass along to the XML parser

