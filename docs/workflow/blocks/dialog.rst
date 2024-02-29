Dialog
======

Launch a modal dialog in which to run an embedded Flow.

Default config
--------------

.. code-block:: json

    {
      "type": "dialog",
      "blocks": []
    }

**NB:** The modal dialog will close as soon as the inner Flow completes.
Therefore you probably want to include at least one Flow item that requires interaction
from the user, for example, ``actions`` buttons or a ``form``.

Example
-------

The following example is used within the blocks of a button to launch a confirmation
dialog with two options, OK, and Cancel.

.. code-block:: json

                    {
                      "type": "dialog",
                      "blocks": [
                        {
                          "type": "message",
                          "title": "Are you sure you want to reset the app?",
                          "message": "This action will remove all data and settings."
                        },
                        {
                          "type": "actions",
                          "buttons": [
                            {
                              "label": "OK",
                              "color": "primary",
                              "blocks": [
                                {
                                  "type": "dispatch",
                                  "action": "resetApp"
                                }
                              ]
                            },
                            {
                              "label": "Cancel",
                              "blocks": [
                                {
                                  "type": "init"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }

