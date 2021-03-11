Audio player
============

Play audio and with a waveform visual.
Can be used with web-money - the Web Monetization block that allows streaming micropayments.

Web Monetization example config:
--------------

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

Required property
--------------------

Requires a ``url`` parameter string to an audio resource URL.