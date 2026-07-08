Creating an Adapter
===================

An adapter is a set of configuration files that work with the building blocks
of functionality within the Kendraio App to provide features and integrations
with third-party services. Essentially, an adapter is just a set of JSON configuration
files.

Connect Flows
-------------

The App's Connect page lists Flows tagged with ``connect``. A Connect Flow may
also point to the dashboard or starting Flow for the same integration by adding
a ``start:`` prefixed link, as illustrated below. When the tag is present, the
Connect page shows a Launch button for that Flow; when it is missing, no Launch
button is shown.

Use an adapter and Flow route, not a full external URL:

.. code-block:: json

    {
      "title": "Fireflies Connect",
      "id": "connect",
      "adapterName": "fireflies",
      "tags": [
        "connect",
        "start:fireflies/listMeetings"
      ]
    }

The ``start:fireflies/listMeetings`` tag links the Connect Flow to
``fireflies/listMeetings`` to help users visit after connecting / 
authentication setup.
