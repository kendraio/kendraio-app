Wallet
============

The Wallet block allows Uphold users to:
- list all their Uphold XRP cards
- checking balances of an Uphold XRP 'Card', and 
- make new XRP cards for use with ILP as used by Coil.

Example of retrieving an Uphold XRP card balance for a given ILP address:
-------------------------------------------------------------------------

.. code-block:: json

    {
      "type": "wallet",
        "service": "uphold",
        "get_balance": {
            "ILP": "$ilp-sandbox.uphold.com/Y9UDQn8UFKw6"
        }
    }

The card balance is returned as the amount of XRP (from the native format of the asset), with data output to the flow as, which you can see using the debug block.



Example of a user retrieving all their Uphold XRP card balances:
----------------------------------------------------------------

.. code-block:: json

    {
        "type": "wallet",
        "service": "uphold",
        "list_all_balances": true,
        "make_card_button": true
    }

The card balances are returned as a data object, with card ID's as the keys, like this:

.. code-block:: json

    {
        "aa4eb91212a34dde89bfaf7ecaba6bd0": {
            "balance": 0.025001,
            "ILP_URL": "$ilp-sandbox.uphold.com/Y9UDQn8UFKw6"
        }, 
        "efac641428c44e6ca981c73264beafc6": {
            "balance": 0,
            "ILP_URL": "$ilp-sandbox.uphold.com/7rmLpyGAYBrq"
        }
    }


To show the XRP card creation button:
-------------------------------------

.. code-block:: json

    {
        "type": "wallet",
        "service": "uphold",
        "make_card_button": true
    }

See also:
--------------------

:ref:`web-money` used by Coil users to stream XRP payments over the Interledger Protocol to an ILP address of a wallet.