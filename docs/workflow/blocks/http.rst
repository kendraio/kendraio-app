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
      "useProxy": false
    }

Supported properties
--------------------

- **method** - REQUIRED - allowed values are ``GET``, ``PUT``, ``POST``, ``DELETE``, ``PATCH``, and ``BPUT``.
- **endpoint** - The request endpoint. Can take multiple forms. See below. 
- **payload** - The payload for ``POST``, ``PUT``, and ``PATCH`` requests. Can be an object or a JMESPath expression string.
- **requestType** (string) - The content type of the request. Defaults to ``application/json``. Set to ``application/x-www-form-urlencoded`` for form submissions.
- **authentication** (object) - An object defining the authentication method to use. See the "Authentication" section below for details.
- **useProxy** (boolean) (default = false) - Set to true to use a proxy. Useful for CORS. Proxy settings are set at https://app.kendra.io/core/settings
- **notify** (boolean) (default = true) -  Show a notification message if the request is successful. This message is not
  sent when the HTTP method is GET, but can be turned on and off for POST, PUT, and DELETE requests by using this
  property.
- **headers** - A set of headers with header name as object key. Values are processed by JMESPath.
- **onError** - Define an array of blocks to show when there is an error processing the HTTP request. 
- **followPaginationLinksMerged** (boolean) (default = false) - If true, the block will follow ``Link`` headers with ``rel="next"`` to fetch all pages and merge the results. 


Examples
--------

**Default** For simple requests, the ``endpoint`` can just be a simple string:

.. code-block:: json

    {
        "type": "http",
        "method": "get",
        "endpoint": "https://covid19.mathdro.id/api",
        "useProxy" : true
    }


**Dynamic data** If the endpoint needs to be constructed from data, the endpoint can be specified as an object with a "valueGetter" attribute.
"valueGetter" can only get data from the context.

.. code-block:: json

    {
        "type": "http",
        "method": "get",
        "endpoint": {
            "valueGetter": "context.saved"
        }
    }

.. code-block:: json

    {
    "type": "http",
    "method": "get",
    "endpoint": {
        "protocol": "https:",
        "host": "api.harvestapp.com/api/v2",
        "pathname": "/reports/time/tasks",
        "valueGetters": {
            "query": "{ from: context.savedData.from, to: context.savedData.to }"
        }
    }
  }


**Headers and Form Data** 
For advanced use cases, the payload can be constructed using a JMES Path expression.
JMESPath expressions can be used to dynamically set header and payload values.
Caution: if the header value is a string, it must use two types of quotes: double and single quotes, like "payload": "'grant_type=client_credentials'".

.. code-block:: json

  {
      "type": "http",
      "method": "post",
      "endpoint": {
          "protocol": "https:",
          "host": "accounts.spotify.com",
          "pathname": "/api/token"
      },
      "payload": "'grant_type=client_credentials'",
      "headers": {
          "Content-Type": "'application/x-www-form-urlencoded'",
          "Authorization": "join('', ['Basic ', btoa(join('', [data.client_id, ':', data.client_secret]))])"
      }
  }

**Form URL Encoded Data** For form submissions with ``application/x-www-form-urlencoded``:

.. code-block:: json

  {
      "type": "http",
      "method": "post",
      "endpoint": "https://example.com/login",
      "requestType": "application/x-www-form-urlencoded",
      "payload": {
          "grant_type": "'client_credentials'",
          "client_id": "data.client_id",
          "client_secret": "data.client_secret"
      }
  }

**GraphQL** It is possible to query a GraphQL endpoint using the HTTP block.

.. code-block:: json

  {
      "type": "http",
      "method": "post",
      "notify": false,
      "endpoint": {
          "protocol": "https:",
          "host": "valnet.lurker.dev",
          "pathname": "/api/graphql"
      },
      "payload": "{ query: 'query ($token: String) {  viewer(token: $token) {    allCommitments {      id      action      plannedStart      committedOn      due      committedQuantity {        numericValue        unit {          name        }      }      note      resourceClassifiedAs {        name        category      }      involves {        id        resourceClassifiedAs {          name          category        }        trackingIdentifier      }      provider {        id        name      }      receiver {        id        name      }      inputOf {        id        name      }      outputOf {        id        name      }      scope {        id        name      }      plan {        id        name      }      isPlanDeliverable      forPlanDeliverable {        id        action        outputOf {          name        }      }      isDeletable    }  }}', variables: { token: context.vfAuth } }"
  }


**onError** To debug and display an error message

.. code-block:: json

  {
    "type": "http",
    "method": "get",
    "endpoint": {
          "protocol": "https:",
          "host": "accounts.spotify.com",
          "pathname": "/api/token"
    },
    "onError": {
        "blocks": [
            {
                "type": "debug",
                "open": 1,
                "showData": true,
                "showContext": false,
                "showState": false
            },
            {
                "type": "card",
                "blocks": [
                    {
                        "type": "template",
                        "template": "Error with submission:<p>{{data.error.error}} - {{data.error.error_description}}</p>"
                    }
                ]
            }
        ]
    }
  }


Pagination
----------

If a HTTP API returns paginated results with a standard link header, to fetch paginated API results, set the followPaginationLinksMerged option to true. This will fetch all pages of results and return the combined set of results from all the pages.

With a proxy:
```json
{
  "type": "http",
  "method": "GET",
  "endpoint": "https://example.com/paginated",
  "useProxy": true,
  "followPaginationLinksMerged": true
}
```


Authentication
--------------

The ``authentication`` property allows you to configure authenticated requests.

**Basic Auth**

Uses a username and password to generate a ``Basic`` authorization header.

.. code-block:: json

  {
    "type": "http",
    "method": "get",
    "endpoint": "https://my.api.com/data",
    "authentication": {
      "type": "basic-auth",
      "username": "myuser",
      "password": "mypassword"
    }
  }

**Bearer Token**

Uses a JWT to generate a ``Bearer`` authorization header. The token can be retrieved from the context.

.. code-block:: json

  {
    "type": "http",
    "method": "get",
    "endpoint": "https://my.api.com/data",
    "authentication": {
      "type": "bearer",
      "valueGetters": {
        "jwt": "context.myApp.jwt"
      }
    }
  }

**AWS Signature v4**

Signs the request using AWS Signature Version 4. This is required for many AWS services. Credentials can be provided directly or retrieved from the context.

.. code-block:: json

  {
    "type": "http",
    "method": "get",
    "endpoint": "https://s3.eu-west-2.amazonaws.com/my-bucket",
    "authentication": {
      "type": "aws-sigv4",
      "accessKeyId": "YOUR_AWS_ACCESS_KEY_ID",
      "secretKey": "YOUR_AWS_SECRET_KEY"
    }
  }

You can also use valueGetters to retrieve credentials from context:

.. code-block:: json

  {
    "type": "http",
    "method": "put",
    "endpoint": "https://s3.amazonaws.com/my-bucket/file.txt",
    "authentication": {
      "type": "aws-sigv4",
      "accessKeyIdGetter": "context.aws.accessKeyId",
      "secretKeyGetter": "context.aws.secretKey"
    }
  }


Binary Uploads (BPUT)
---------------------

A special method ``BPUT`` is available for uploading binary data, such as files. The data should be an ``ArrayBuffer`` and is expected to be in ``model.content``.

.. code-block:: json

  {
    "type": "http",
    "method": "BPUT",
    "endpoint": "https://my.api.com/upload"
  }

This is particularly useful when combined with file upload blocks that populate the model with binary content.
