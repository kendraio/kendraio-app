File Export
===========

Export data to a file.

Expected input data
-------------------

This block expects the input data to contain the following keys. These match the output of the serialize block, so the two blocks can be easily combined to output data:

- **format**: the format of the data
- **data**: the data serialized as a text string

If the input data is a string then it will be exported as a plain text file. If the input data is an object, but does not contain the “type” and “data” keys then it will be exported as JSON data.

Default config
--------------

.. code-block:: json

    {
      "type": "file-export",
      "label": "Export",
      "fileName": "exported"
    }

Supported properties
--------------------

- **label** (default = “Export”) the label to use for the export button
- **fileName** (default = “export”) the name of the downloaded file, the file extension will be added automatically based on the input data format.
