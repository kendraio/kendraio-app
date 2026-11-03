Audiotarky
==========

Retrieve artist, album and track metadata from `Audiotarky <https://www.audiotarky.com>`_
and emit player-ready tracks.  The emitted track objects carry the fields Kendraio
Player expects:

* ``display_artist``
* ``display_title``
* ``url`` (the audio stream played by the Audio player block)
* ``payment_pointer`` / ``paymentPointer`` (used by the Web Money block)
* ``api`` (the Audiotarky metadata URL for the track/artist)

Audiotarky publishes JSON indexes at ``https://www.audiotarky.com/$``.  Because
the API does not always send CORS headers, set ``useProxy`` to ``true`` so the
request goes through the Kendraio CORS proxy using the same ``Target-URL``
convention as the HTTP block.

Example Flow
------------

.. code-block:: json

    [
        {
            "type": "audiotarky",
            "resource": {
                "kind": "tracks"
            },
            "useProxy": true
        },
        {
            "type": "player",
            "mapping": "data[0].url",
            "titleMapping": "data[0].display_title",
            "onPlay": [
                {
                    "type": "web-money"
                }
            ],
            "onPause": [
                {
                    "type": "web-money",
                    "enabled": false
                }
            ]
        }
    ]

Resource descriptors
--------------------

``kind`` may be one of:

* ``artists`` - Audiotarky artist index
* ``albums`` - Audiotarky album index
* ``tracks`` - Audiotarky track index (optionally ``page``)
* ``artist`` - artist details, requires ``artist``
* ``album`` - album details, requires ``artist`` and ``album``
* ``track`` - track details, requires ``artist``, ``album`` and ``track``

Pagination
----------

Index responses include ``pagination.next_page``.  The Audiotarky service
exposes this as ``extractAudiotarkyNextPage()`` (returning ``null`` on the last
page) so a Flow can continue fetching pages without duplicating logic.

The same normalisation helpers are available to Flow and component code in
``src/app/services/audiotarky.service.ts``, including
``normalizeAudiotarkyTracks()`` and ``mergePlayerTracks()`` for playing
Audiotarky tracks alongside DSP1 tracks in one queue.