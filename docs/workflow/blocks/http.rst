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

- **method** - REQUIRED - allowed values are get, put, post, delete, patch, and "bput" (for binary PUT requests like file uploads).
- **useProxy** (boolean) (default = false) - Set to true to use a proxy. Useful for CORS. Proxy setting are set at https://app.kendra.io/core/settings
- **proxyUrl** (string) - Custom proxy URL to use instead of the default proxy
- **notify** (boolean) (default = true) -  Show a notification message if the request is successful. This message is not
  sent when the HTTP method is GET, but can be turned on and off for POST, PUT, and DELETE requests by using this
  property.
- **headers** - A set of headers with header name as object key. Values are processed by JMESpath
- **endpoint** - The request endpoint. Can take multiple forms. See below. 
- **payload** - The request payload. Can be a JMESPath expression to transform data
- **requestType** (string) (default = 'application/json') - Set to 'application/x-www-form-urlencoded' for form-encoded requests
- **responseType** (string) (default = 'json') - The expected response type from the server
- **authentication** - Optional authentication configuration. Currently supports AWS SigV4 for S3-compatible storage.
- **onError** - Define an array of blocks to show when there is an error processing the HTTP request. 
- **useOldBucketDataFormat** (boolean) (default = false) - Force the legacy wrapped output format for backwards compatibility
- **oldBucketUseWarning** (boolean) (default = true) - Show deprecation warnings when using legacy output format 
- **debug** (boolean) (default = false) - Force debug mode for this block, showing HTTP status, response size, and hash
- **debugContext** (boolean) (default = false) - Show context data in debug output  
- **debugConfig** (boolean) (default = false) - Show block configuration in debug output
- **contextErrorKey** (string) - JMESPath expression to extract error messages from context
- **skipInit** (boolean) (default = true) - Skip making HTTP request on initial load
- **followPaginationLinksMerged** (boolean) (default = false) - Automatically follow pagination links and merge results 


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


**Headers** 
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


Additional Configuration
------------------------

**Custom Request Types**

For form-encoded requests:

.. code-block:: json

    {
      "type": "http",
      "method": "POST",
      "endpoint": "https://api.example.com/form",
      "requestType": "application/x-www-form-urlencoded",
      "payload": "{ username: data.user, password: data.pass }"
    }

**Response Type Configuration**

.. code-block:: json

    {
      "type": "http",
      "method": "GET",
      "endpoint": "https://api.example.com/data.xml",
      "responseType": "text"
    }

**Custom Proxy Configuration**

.. code-block:: json

    {
      "type": "http",
      "method": "GET",
      "endpoint": "https://api.example.com/data",
      "useProxy": true,
      "proxyUrl": "https://my-custom-proxy.com/"
    }

**Skip Initial Request**

.. code-block:: json

    {
      "type": "http",
      "method": "POST",
      "endpoint": "https://api.example.com/submit",
      "skipInit": false
    }

By default, HTTP blocks skip making requests on initial load (``skipInit: true``). Set to ``false`` to make the request immediately when the block loads.


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

Debug Options
-------------

The HTTP block provides several debug options to help with troubleshooting and development:

**Block-level Debug**

.. code-block:: json

    {
      "type": "http",
      "method": "GET",
      "endpoint": "https://api.example.com/data",
      "debug": true,
      "debugContext": true,
      "debugConfig": false
    }

- ``debug: true`` - Shows HTTP status code, response size, and SHA-1 hash for this block
- ``debugContext: true`` - Additionally shows the current context data  
- ``debugConfig: true`` - Additionally shows the block configuration

**Global Debug Mode**

When global debug mode is enabled in app settings, all HTTP blocks will show status information. Block-level debug flags work independently and can provide additional detail.

**Error Context**

.. code-block:: json

    {
      "type": "http",
      "method": "POST",
      "endpoint": "https://api.example.com/submit",
      "contextErrorKey": "errors.apiError"
    }

The ``contextErrorKey`` allows you to extract and display error messages from the context using JMESPath expressions.

Authentication
--------------

The HTTP block provides several authentication methods for accessing protected APIs and S3 compatible storage buckets.

Authentication
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The following authentication types are implemented:

- ``aws-sigv4`` - AWS Signature Version 4 for S3-compatible storage (examples below)
- ``basic-auth`` - HTTP Basic Authentication using username and password
- ``bearer`` - Bearer token authentication (including JWT tokens)

AWS SigV4 Authentication
~~~~~~~~~~~~~~~~~~~~~~~

AWS Signature Version 4 authentication is available for requests to S3-compatible storage providers such as AWS S3 and Backblaze B2.

**GET-to-PUT Flow Example**

A common pattern involves retrieving data, modifying it, then uploading the updated content but in this example we will just upload the data without modifying it. This is useful for workflows that need to fetch a report, modify it, and then upload it back to the storage:

.. code-block:: json

    [
      {
        "type": "http",
        "method": "GET",
        "endpoint": "https://s3.eu-central-003.backblazeb2.com/file.json",
        "authentication": {
          "type": "aws-sigv4",
          "accessKeyId": "your_access_key",
          "secretKey": "your_secret_key"
        }
      },
      {
        "type": "mapping",
        "mapping": "data.data"
        "blockComment": "Warning: the data.data mapping is legacy"
      },
      {
        "type": "http",
        "method": "PUT",
        "endpoint": "https://s3.eu-central-003.backblazeb2.com/file.json",
        "authentication": {
          "type": "aws-sigv4",
          "accessKeyId": "access_key",
          "secretKey": "secret_key"
        },
        "headers": {
          "Content-Type": "'application/json'"
        }
      }
    ]


**Legacy AWS SigV4 Output Format**

.. note::
   
   **Deprecated:** HTTP blocks using AWS SigV4 authentication currently emit a wrapped response format for backwards compatibility:
   
   .. code-block:: json
   
       { 
         "data": "<actual_response>",
         "statusCode": 200,
         "responseSizeFormatted": "1.2 KB", 
         "responseHash": "abc123...",
         "responseSizeBytes": 1234
       }
   
   This behavior is deprecated. Access metadata via ``context.httpMetadata`` instead.
   A deprecation warning will be shown when using AWS SigV4.

**HTTP Response Metadata**

The HTTP block will automatically save response metadata to context, accessible via:

- ``context.httpMetadata.statusCode`` - HTTP status code (200, 404, etc.)
- ``context.httpMetadata.responseSizeFormatted`` - Human readable size (e.g., "1.2 KB")
- ``context.httpMetadata.responseSizeBytes`` - Raw byte count (e.g., 1234)
- ``context.httpMetadata.responseHash`` - SHA-1 hash of response content
- ``context.httpMetadata.timestamp`` - ISO timestamp when response was received
- ``context.httpMetadata.endpoint`` - The actual endpoint URL that was called

**Backwards Compatibility Options**

For existing workflows that depend on the legacy wrapped output format, you can use:

.. code-block:: json

    {
      "type": "http",
      "method": "GET", 
      "endpoint": "https://api.example.com/data",
      "useOldBucketDataFormat": true,
      "oldBucketUseWarning": false
    }

- ``useOldBucketDataFormat: true`` - Forces the legacy wrapped output format ``{ data: <response>, statusCode, responseSizeFormatted, responseHash, responseSizeBytes }``
- ``oldBucketUseWarning: false`` - Suppresses deprecation warnings (optional, defaults to true)

**Payload Configuration Example**

For uploading different types of data, configure payloads appropriately:

.. code-block:: json

    {
      "type": "http",
      "method": "PUT",
      "endpoint": "https://s3.eu-central-003.backblazeb2.com/file.csv",
      "authentication": {
        "type": "aws-sigv4",
        "accessKeyIdGetter": "context.aws.accessKeyId",
        "secretKeyGetter": "context.aws.secretKey"
      },
      "payload": "data.csvContent",
      "headers": {
        "Content-Type": "'text/csv'",
        "x-amz-meta-survey-id": "data.surveyId",
        "x-amz-meta-collection-date": "data.collectionDate"
      }
    }

**Binary File Upload (BPUT)**

Binary file uploads use the ``BPUT`` method:

.. code-block:: json

    {
      "type": "http",
      "method": "BPUT",
      "endpoint": "https://s3.eu-central-003.backblazeb2.com/document.pdf",
      "authentication": {
        "type": "aws-sigv4",
        "accessKeyIdGetter": "context.storage.applicationKeyId",
        "secretKeyGetter": "context.storage.applicationKey"
      },
      "headers": {
        "Content-Type": "'application/pdf'"
      }
    }

**Automatic Metadata Headers**

When using AWS SigV4 authentication with PUT or BPUT methods, the system automatically adds file integrity metadata headers:

- ``x-amz-meta-sha1``: SHA-1 hash of the uploaded content
- ``x-amz-meta-sha256``: SHA-256 hash of the uploaded content

These headers provide file verification and are particularly useful for ensuring data integrity and identification in S3-compatible storage systems.

**Security Considerations**

- Load credentials securely from storage or Form input, and use ``accessKeyIdGetter`` with ``secretKeyGetter`` to access them.
- Do not hardcode credentials in Flows you save or share!
- The signature includes request method, headers, and payload to ensure request integrity
