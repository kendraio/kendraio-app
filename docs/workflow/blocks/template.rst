Template
========

Render templated output based on current model values. Rendered HTML also will be added to the data model to be accessible in the flow. 

All data is passed through a template block unmodified, with the rendered content available at "data.renderedHtml". 

Default config
--------------

.. code-block:: json

    {
      "type": "template",
      "template": ""       
    }

Supported properties
--------------------

- **renderToScreen** - (default: true) Display rendered HTML in the browser. Set to false to hide rendered html
- **key** - (default: "renderedHtml") Name of the data model property to store rendered HTML in.
  


More information
----------------

See the Handlebars documentation for full list of supported templating features.

https://handlebarsjs.com/

