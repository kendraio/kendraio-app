Context & State
===============

Context and state are in-memory, temporary datastores. Use the context block to save data into the flow context or global state to make it available for all
 tasks. 

There are two top level storage domains that can be accessed with this block. 

**Context** is passed from block to block. When processing data in parrallel - during a batch or multiplex flow - context will be different in each branch.
Blocks will only have access to values written by another block in the same branch. 

**State** is shared by all blocks. The content of state is stored in memory and is available to any subsequent flows - but only on the same tab until that tab is closed or reloaded. There are two possible ways to address the content of state:
**state.global** contains all data stored in the state. 
**state.local** is a dynamic sub-branch of the global state based on the current url. (eg. on path "x/y" state.local is the equivalent of "state.global.x.y")
**state.flags** provides an additional, top level shortcut to state information. Flags is intended to be used to store small units of information
that do not belong inside the standard url hierarchy. 

For more detailed information, see the State section below. 

Default config
--------------

.. code-block:: json

    {
      "type": "context-save",
      "key": "saved"      
    }


Supported properties
--------------------


- **key** (string) The key of the value that will be saved into context.
  For example, if you use a key of "saved" then the value will be available in the context as "context.saved".

  When context key starts with "state", values will be written to the shared state storage. State paths should
  begin with "state.local" or "state.global". If the a key other than "local" or "global" follows "state", local will be assumed. 
  ie. "state.key" is the equivalent of "state.local.key". (See State below)

  A previous version of the key was *contextKey*, which is still accepted as a configuration variable. 
  If both *key* and *contextKey* exist in config, *key* will override. 
  
- **valueGetter** (string) [OPTIONAL]  The JMESPath of the value to store into context. 
  This defaults to "data" so if it is omitted it stores the whole incoming value into context. 
  JMESPath allows for direct manipulation of data in the expression. 
  This allows a **valueGetter** to read, transform and write data in a single statement. 

- **keyGetter** (string) [OPTIONAL] - the JMESPath of the key to use within context. 
  JMESPath does not allow for variable keys, so this makes it possible for batch code to
  write to different context locations. 


Usage patterns
--------------

The most common usage pattern with this block is to use it with the
variable get block, to fetch a value from the adapter storage and save it
into the context.

Working with State
------------------

State is a shared storage. Values written to state will last for a single user session, and are available to any flow. 

Persistence 
+++++++++++

State data is not persistent. It only exists in memory for a specific tab and is lost on a reload. 

Local and global State
++++++++++++++++++++++

It is assumed that the state storage will mirror the site structure. Flows should generally write to and read from *state.local*. 
Internally *state.local* will be translated to a path to mirror the current url. 

When on a the path */workflowCloud/listWorkflows*, writing to *state.local.filter* will be translated to *workflowCloud.listWorkflows.filter*. 
This internal, translated path is the global state path, and it can also be accessed directly via *state.global*. 

When a path is prefixed with *state.global*, it will allow values written to any part of the tree. Writing to *state.global.filter* will be translated to
*filter*. Writing to *state.global.workflowCloud.listWorkflows.filter* will update *workflowCloud.listWorkflows.filter*.

When a value is written to a location other than "local" or "global", "local" will be assumed. 
When on the same url as above, writing to "state.filter" will get translated to *workflowCloud.listWorkflows.filter*. 

Flags
+++++

Flags exist within the global state, but can be accessed directly via this "shortcut". The purpose of the flag address is to create a standard
storage location for fragments of data that can be easily accessed and modified by different components. 

Flags are available at the top level of the state to make it easy to quickly check their values to enable and disable functionality. 

.. code-block:: Json

  {
     "type":"debug",
     "enabledGetter":"flags.devel"
  }


Suggested Standard Flags
^^^^^^^^^^^^^^^^^^^^^^^^
* devel - Set this flag to true to signify that development elements of a flow should be enabled. 






Security and access control
+++++++++++++++++++++++++++

There is currently no access control or protection in state. Any path in the global state is accessible (read and write) to any flow. 
In the future some form of restriction may be implemented. 


See also
--------

- :ref:`context_runner_block` - The block that runs flows in their own context and then runs another seperate flow.