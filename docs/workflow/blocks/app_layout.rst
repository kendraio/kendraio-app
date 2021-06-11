App Layout
============

A flow can be set to use a simplified layout for display on mobile devices.
To access this functionality a flow is tagged with the keyword: "app".

The app-layout block provides a fixed navigation bar at the bottom of the
display that works well on mobile devices. The navigation items are specified
with an icon, title, and list of blocks.

It is recommended that the screens should be created as separate flows
and them embedded using the gosub block. Unless they are very simple flows,
in which case they can be inserted directly into the app-layout block config.

The icon field accepts any valid Material Icon. The full list of possible icons can be
searched here: https://fonts.google.com/icons

.. code-block:: json

    {
        "type": "app-layout",
        "tabs": [
            {
                "icon": "face",
                "title": "Account",
                "blocks": [
                    {
                        "type": "message",
                        "message": "Account Tab"
                    }
                ]
            },
            {
                "icon": "stacked_bar_chart",
                "title": "Chart",
                "blocks": [
                    {
                        "type": "gosub",
                        "adapterName": "kendraio",
                        "workflowId": "coronavirusByCountry"
                    }
                ]
            },
            {
                "icon": "settings",
                "title": "Settings",
                "blocks": [
                    {
                        "type": "message",
                        "message": "Settings Tab"
                    }
                ]
            }
        ]
    }
