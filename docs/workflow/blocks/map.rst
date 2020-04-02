Map
===

The map block allows embedding a map for display of geocoded data.
Leaflet.JS is used to display the map, and some Leaflet.JS customisation
options are supported.

The ``height`` in pixels of the block (default height 500px),
and the initial ``zoom`` level (default zoom = 8)
are provided as configuration options to the block. You can also optionally
provide a ``latlng`` config option for the default map center point.
The map defaults to centering at [51.505, -0.09].

Examples
--------

The map block expects incoming data to be an array of objects that
have ``lat``, ``long``, and ``label`` properties. Here is an example
of a mapping that produces appropriate data:

.. code-block:: json

                {
                    "type": "mapping",
                    "mapping": "data[?recovered > `20`].{ lat: lat, long: long, label: join(' ', [to_string(recovered), 'recovered in', combinedKey][? @ != null]) }"
                }

Example map block configuration:

.. code-block:: json

                {
                    "type": "map",
                    "height": 500,
                    "zoom": 2
                }

