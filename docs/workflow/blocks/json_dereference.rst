JSON Dereference
======================

The JSON Dereference Block resolves external references ($ref) within a JSON Schema, creating a single, self-contained schema document. 
It fetches the schema from a specified URL, dereferences any external references, and outputs the fully resolved schema. 
This is particularly useful for working with modular JSON Schemas that are split across multiple files or URLs.
Currently, the block only supports JSON Schemas.

What It Does
------------

*   **Fetches JSON Schema:** Retrieves a JSON Schema from a given URL.
*   **Resolves `$ref`:** Recursively resolves all `$ref` pointers, including those pointing to external URLs.
*   **Outputs Dereferenced Schema:** Emits a single JSON object representing the fully resolved schema.


How to Use It
-------------

1.  **Add to a Flow:** In the Kendraio App's Flow Builder, add the "JSON Dereference" block to your workflow.

2.  **Provide the URL:** Ensure a previous block in the flow provides the URL of the JSON Schema as the data. 

4.  **Connect Output:** Connect the output of the JSON Dereference block to subsequent blocks that need to work with the fully resolved JSON Schema (e.g., a Form block, a validation block, or a block that transforms the schema). Without this, the dereferenced schema will not be visible.  


Example
-------

In this example, a mapping block provides the URL, and the JSON Dereference block resolves the schema:

.. code-block:: json

    [
      {
        "type": "init"
      },
      {
        "type": "mapping",
        "mapping": "{ \"url\": \"https://example.com/your-schema.json\" }"
      },
      {
        "type": "json-dereference"
      },
      {
        "type": "debug",
        "open": 3,
        "showData": true
      }
    ]

You can also have a look at this Kendraio Flow: `schema-form <https://app.kendra.io/kendraio/schema-form>`

Error Handling
--------------

The JSON Dereference block includes built-in error handling:

*   **Invalid URL:** If the provided URL is invalid or malformed, the block will emit an error message.
*   **Network Errors:** If there are network issues preventing the schema from being fetched (e.g., the server is down, the URL is incorrect), the block will emit an error message.
*   **Invalid JSON:** If the content at the URL is not valid JSON, the block will emit an error message.
*   **CORS Issues:** In some cases, web security policies in browsers will prevent schemas from being loaded across domains.