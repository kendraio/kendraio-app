Mapping
=======

Map data from one format to another, or query the input data using JMESPath or JSONPath expressions.
http://jmespath.org/tutorial.html

Default config
--------------

.. code-block:: json

    {
      "type": "mapping",
      "mapping": "data"
    }

Supported properties
--------------------

- **mapping** - a JMESPath expression


Handy JMESPath patterns
-----------------------

Default values
^^^^^^^^^^^^^^^

Set default values by using "||" (or) 

- value || '[default]'


Adding a new key to an object
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

If you're wrangling data from one form to another, you may need to add new keys. 

..code-block:: jmespath

  data[*].merge(@, { key: value })


Merging two arrays
^^^^^^^^^^^^^^^^^^^

If you have two arrays, and want to combine them, you can use the flatten operator "[]". 
For example, if you want to combine information from a form with data you've previously saved to context, you can merge the two arrays like this. 

..code-block:: jmespath

  [context.saved, [data]][]



Kendra.io Mapping extensions
----------------------------

Kendra.io is using a version of JMESPath that supports extensions to provide additional functionality. You can find these in our repository: 

https://github.com/kendraio/kendraio-app/blob/develop/src/app/blocks/mapping-block/mapping-util.ts



