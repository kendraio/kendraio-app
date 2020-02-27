File Input
==========

Import a file from the local system.

Default config
--------------

.. code-block:: json

    {
      "type": "file-input",
      "label": "Import",
      "accept": ["csv", "json", "xml"]
    }

Supported properties
--------------------

- **accept** (default = [‘json’]) a list of formats to allow for import. The file selection will limit the selectable files to only these types. Supported types include: [‘json’, ‘csv’, ‘xml’]
- **label** (default = “import”) - the label for the button to launch the file picker.

Emitted data
------------

The data emitted from this block has the following format:

- **name** - name of file that was selected
- **type** - the MIME type of the file
- **size** - the size in bytes of the selected file
- **lastModified** - the last modified timestamp
- **content** - a text string containing the full content of the file
