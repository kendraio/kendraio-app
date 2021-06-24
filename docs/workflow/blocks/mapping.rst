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


Filtering data
^^^^^^^^^^^^^^

Filter by the existence of a flag

.. code-block:: jmespath

  data[?tags[?@ == 'deleted']]

This will keep any item that has a "deleted" flag in the "tags" array. More useful in this instance would be it's inverse. 

.. code-block:: jmespath

  data[?!(tags[?@ == 'deleted'])]

  


Adding a new key to an object
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

If you're wrangling data from one form to another, you may need to add new keys. 

.. code-block:: jmespath

  data[*].merge(@, { key: value })

Setting a value based on a flag
"""""""""""""""""""""""""""""""

If you want to add a new value to your object based on whether or not another flag is set in an array, you can do something like this. 

.. code-block:: jmespath

   data[*].merge(@,{deleted: @.tags[?@ == `deleted`] && `true` || `false` })

This will look through the tags attribute to see whether or not a "deleted" tag is set, and set the new attribute accordingly.


Finding a specific key in an array
"""""""""""""""""""""""""""""""""""

A more advanced version of the object merge can involve looking up a specific entry in an existing array of objects. 

In this example, we merge two object arrays, and look up a unique key from a list, and then add that key so that we can create a reference. 

.. code-block:: jmespath

  data && merge(data, {track: uniqBy(data.track, 'key')})

.. code-block:: jmespath

find($.data.licensor, 'name', "LICENSOR NAME").id,   



Merging two arrays
^^^^^^^^^^^^^^^^^^^

If you have two arrays, and want to combine them, you can use the flatten operator "[]". 
For example, if you want to combine information from a form with data you've previously saved to context, you can merge the two arrays like this. 

.. code-block:: jmespath

  [context.saved, [data]][]



Kendra.io Mapping extensions
----------------------------

Kendra.io is using a version of JMESPath that supports extensions to provide additional functionality. You can find these in our repository: 

https://github.com/kendraio/kendraio-app/blob/develop/src/app/blocks/mapping-block/mapping-util.ts



