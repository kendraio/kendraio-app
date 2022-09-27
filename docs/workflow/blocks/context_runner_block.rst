Context Runner Block
====================

The Context block is a good way to run more complicated flows that depend on a value from an asynchronous source, like an API call or user input.

The Context block accepts a list of blocks, contextBlocks, a contextPath and a list of blocks, blocks.

The Context block is configured with two flows. The first flow, contextBlocks, is run first. Once the contextBlocks flow yields a result, the Context block runs the blocks flow, and blocks can load the value from the contextPath using a block like the Mapping block.

In the below example, Dropbox uploads are listed. The contextBlocks sub-flow gets a token from a auth0 block, and the blocks sub-flow uses the token to perform an authenticated request to Dropbox's API, in this case, to list the users files from Dropbox.

.. code-block:: json

    [
      {
        "type": "init"
      },
      {
        "type": "mapping",
        "mapping": "{ path: '/uploads' }"
      },
      {
        "type": "context",
        "contextPath": "dropboxAuth",
        "contextBlocks": [
          {
            "type": "auth0",
            "provider": "dropbox"
          }
        ],
        "blocks": [
          {
            "type": "debug",
            "open": 0,
            "showContext": true
          },
          {
            "type": "http",
            "method": "post",
            "notify": false,
            "endpoint": {
              "protocol": "https:",
              "host": "api.dropboxapi.com",
              "pathname": "/2/files/list_folder"
            },
            "authentication": {
              "type": "bearer",
              "valueGetters": {
                "jwt": "context.dropboxAuth.access_token"
              }
            }
          }
        ]
      },
      {
        "type": "debug",
        "open": 0,
        "showContext": false
      },
      {
        "type": "mapping",
        "mapping": "data.entries"
      },
      {
        "type": "grid",
        "gridOptions": {}
      }
    ]


Config properties
-----------------

- **contextBlocks**: A list of blocks to run first.
- **contextPath**: The path to save the contextBlocks output to.
- **blocks**: A list of blocks to run after the contextBlocks.
- **skipFirst**: If true, the contextBlocks are not ran on the first data event.

See also
--------

- :ref:`context_block` - the more simple block for saving data to a context or state path directly.