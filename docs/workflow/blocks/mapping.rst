Mapping
=======

Map data from one format to another, or query the input data using JMESPath or JSONPath expressions.
http://jmespath.org/tutorial.html. 


The mapping object has three top level keys 
- data : The core data being processed and passed from block to block
- context : Metadata about the data being processed, also passed from block to block 
- state : General metadata about the general state of processing, shared by all blocks


Default config
--------------

.. code-block:: json

    {
      "type": "mapping",
      "mapping": "data"
    }

Supported properties
--------------------

- **mapping** - a JMESPath expression. 


Working with State
------------------

State is a shared, realtime storage. It is also available between flows but will not persist beyond a single user session. 
Not all blocks are able to access state, but it is particularly useful for user interface components that want to keep updating 
their display to show the user live values - rather than the value that was passed into the block when it was run.

The mapping block cannot write to state, it can only read from state. Writes are managed with the :doc:`context_block` block. 


Local and global State
++++++++++++++++++++++

It is assumed that the state storage will mirror the site structure. Flows should generally read from *state.local*. 
Internally *state.local* will be translated to a path to mirror the current url. 

When on a the path */workflowCloud/listWorkflows*, reading from *state.local.filter* will be translated rad from  *workflowCloud.listWorkflows.filter*. 
This internal, translated path is the global state path, and it can also be accessed directly via *state.global*. 

When a path is prefixed with *state.global*, it will allow values to be read from to any part of the tree. Reading from *state.global.filter* will be translated to
read from *filter*. Reading from  *state.global.workflowCloud.listWorkflows.filter* will access *workflowCloud.listWorkflows.filter*.


Handy JMESPath patterns
-----------------------

Not
^^^

When your data structuture holds the value that you wish to negate, you need to enclose the 
path of your data in parentheses before you NOT it. 

**This statement will fail**

.. code-block:: text

  !state.import.status 

**Use this instead**

.. code-block:: text

  !(state.import.status) 

If you want to combine a NOT statement like this with aditional logic, you need to wrap it in parentheses again. 

.. code-block:: text

  (!(state.import.status)) && (length(state.import.data)>`0`)




Default values
^^^^^^^^^^^^^^^

Set default values by using "||" (or) 

- value || '[default]'


Filtering data
^^^^^^^^^^^^^^

Filter by the existence of a flag

.. code-block:: text

  data[?tags[?@ == 'deleted']]

This will keep any item that has a "deleted" flag in the "tags" array. More useful in this instance would be it's inverse. 

.. code-block:: text

  data[?!(tags[?@ == 'deleted'])]

  


Adding a new key to an object
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

If you're wrangling data from one form to another, you may need to add new keys. 

.. code-block:: text

  data[*].merge(@, { key: value })

Setting a value based on a flag
"""""""""""""""""""""""""""""""

If you want to add a new value to your object based on whether or not another flag is set in an array, you can do something like this. 

.. code-block:: text

   data[*].merge(@,{deleted: @.tags[?@ == `deleted`]})

This will look through the tags attribute to see whether or not a "deleted" tag is set, and set the new attribute accordingly.

Accessing context from within a merge
"""""""""""""""""""""""""""""""""""""
When using a merge, or similar function, paths become relative to your current item. 
If you need to access a value from beyond this context, you need to use the "$" operator to access the root of the data. 

.. code-block:: text

  data[*].merge(@,{      
      exists:contains($.context.flowsExisting || [''], join('-',[@.adapterName,@.workflowId]))
      })
   


Finding a specific key in an array
"""""""""""""""""""""""""""""""""""

A more advanced version of the object merge can involve looking up a specific entry in an existing array of objects. 

In this example, we merge two object arrays, and look up a unique key from a list, and then add that key so that we can create a reference. 

.. code-block:: text

  data && merge(data, {track: uniqBy(data.track, 'key')})

.. code-block:: text

find($.data.licensor, 'name', "LICENSOR NAME").id,   



Merging two arrays
^^^^^^^^^^^^^^^^^^^

If you have two arrays, and want to combine them, you can use the flatten operator "[]". 
For example, if you want to combine information from a form with data you've previously saved to context, you can merge the two arrays like this. 

.. code-block:: text

  [context.saved, [data]][]



Kendraio Mapping extensions
----------------------------

Kendraio is using a version of JMESPath that supports extensions to provide additional functionality. You can find these in our repository: 

https://github.com/kendraio/kendraio-app/blob/develop/src/app/blocks/mapping-block/mapping-util.ts



