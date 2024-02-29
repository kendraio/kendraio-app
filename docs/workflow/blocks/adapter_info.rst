Adapter Info
============

The Adapter info block is used to read adapter configurations within Flows
and get information on which adapters are enabled.

There are two versions of this block ``adapter-list`` produces a full list of
adapter metadata, whereas ``adapter-info`` is used to query for information
on a specific adapter. The block config should include ``adapterName`` to
specify which adapter info is loaded, or ``adapterNameGetter`` can be set
using a JMES Path expression to query the name of the adapter to fetch from
either the block input data or Flow context.

Example
-------

This example is taken from one of the core Flows where the adapter
info block is used to create a list of all the enabled adapters:

.. code-block:: json

    {
      "type": "adapter-list"
    }

This example is also from a core Flow, and shows how to load
information about a specific adapter:

.. code-block:: json

    {
      "type": "adapter-info",
      "adapterNameGetter": "context.queryParams.adapterName"
    }


Packaged Adapters
-----------------

To access all flows and config related to an adapter, it is possible to request the entire "packaged adapter". 
With this option set, the adapter will include an "attachments" section, containing the source of all Flows, 
schemas, forms and config.

.. code-block:: json

    {
      "type": "adapter-info",
      "adapterNameGetter": "context.queryParams.adapterName",
      "packagedAdapter": true
    }