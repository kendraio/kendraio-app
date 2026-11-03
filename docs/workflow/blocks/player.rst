Audio player
============

Play audio and with a waveform visual.
Can be used with web-money - the Web Monetization block that allows streaming micropayments.

Web Monetization example config:
---------------------------------

.. code-block:: json

    {
        "type": "player",
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

Audiotarky example config:
--------------------------

The :doc:`Audiotarky <audiotarky>` block emits tracks with ``display_artist``,
``display_title``, ``url``, ``api`` and a ``payment_pointer`` /
``paymentPointer`` pair.  Map the stream URL into the player and the payment
pointer is available to the Web Money block:

.. code-block:: json

    {
        "type": "player",
        "mapping": "data.url",
        "titleMapping": "data.display_title",
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

Required property
--------------------

Requires a ``url`` parameter string to an audio resource URL.