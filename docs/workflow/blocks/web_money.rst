Web Money
============

Web Monetization block that allows streaming micropayments.
Can be used with the Player block.

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

Data input
--------------------

To setup Web Monetization with a payment pointer, a ``paymentPointer`` property should be provided in data input.
A non existant paymentPointer will remove any existing Web Monetization stream.

Config
--------------------

showPaymentPointer
showPaymentTotal
fiatCurrency
payTotalTitle
paymentActiveMessage
paymentPausedMessage
supportFoundMessage
supportMissingMessage
paymentActiveMessage
paymentPausedMessage
supportFoundMessage
supportMissingMessage