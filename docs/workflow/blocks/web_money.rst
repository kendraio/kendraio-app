.. _web-money:

Web Money
============

Web Monetization block that allows streaming micropayments.
Can be used with the Player block.

Web Monetization example config:
--------------------------------

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

showPaymentPointer - a boolean to show the Interledger payment pointer, currently true by default but could change.

showPaymentTotal - a boolean to show payment total infomation. currently true by default but could change.

fiatCurrency - used convert an estimated value of the total payment amount to a fiat currency (e.g: USD, EUR)

payTotalTitle - a heading for the payment total

Customisable messaging config:
    - paymentActiveMessage
    - paymentPausedMessage
    - supportFoundMessage
    - supportMissingMessage
    - paymentActiveMessage
    - paymentPausedMessage
    - supportFoundMessage
    - supportMissingMessage