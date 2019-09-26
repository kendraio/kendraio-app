HTTP Request
============

Get, put or post data to an external HTTP endpoint.

Default config
--------------

.. code-block:: json

    {
      "type": "http",
      "method": "get",
      "endpoint": {
        "protocol": "https:",
        "host": "jsonplaceholder.typicode.com",
        "pathname": "/posts",
        "query": {
          "userId": 1
        }
      }
    }

Supported properties
--------------------

- **method** - REQUIRED - allowed values are get, put, post, and delete.
- **notify** (boolean) (default = true): Show a notification message if the request is successful. This message is not
  sent when the HTTP method is GET, but can be turned on and off for POST, PUT, and DELETE requests by using this
  property.
