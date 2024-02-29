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

- **blocks** (array) - the workflow (list of blocks) to run for each item in the input data list.
- **flex** (boolean) (default = false) - apply a flex layout to the batch workflow outputs.


Examples
---------

Cards Gallery Layout
^^^^^^^^^^^^^^^^^^^^
One helpful application of the Batch Block is to act as a container, allowing the child items to have distinct layouts.
A common way to use the Batch Block is in conjunction with the Cards Block. When providing the Batch Block with an array of Card Block and configuring `flex: true`, it will produce a gallery-style layout.

.. code-block:: json
  
  // Data
  [
    {
      "title": `"iPhone Charger fast charging"`,
      "imageUrl": `"https://img.fruugo.com/product/4/36/728056364_max.jpg"`
    },
    {
      "title": `"Wireless On-Ear Headphones"`,
      "imageUrl": `"https://m.media-amazon.com/images/I/61WQ0mBtBYL._AC_SL1500_.jpg"`
    },
    {
      "title": `"Magnetic Wireless Charger Fast"`,
      "imageUrl": `"https://m.media-amazon.com/images/I/51ZTUXXpT1L._AC_SL1500_.jpg"`
    }
  ]

  {
    "type": "batch",
    "flex": true,
    "blocks": [
        {
            "type": "card",
            "blocks": [
                {
                    "type": "template",
                    "template": "<h3>{{data.title}}</h3>"
                },
                {
                    "type": "template",
                    "template": "<img width='200' height='300' src='{{data.imageUrl}}' />"
                }
            ]
        }
    ]
  }