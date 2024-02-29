Batch Process
=============

Run the specified Flow for every item in a list. This block expects an array (list) of items to be passed in as data.
It will run the embedded Flow for every item in the list, collect the results, and then output the list of results once all the tasks have completed.

Default config
--------------

.. code-block:: json

    {
      "type": "batch",
      "blocks": []
    }

Supported properties
--------------------

- **blocks** (array) - the Flow (list of blocks) to run for each item in the input data list.
- **flex** (boolean) (default = false) - apply a flex layout to the batch Flow outputs.
