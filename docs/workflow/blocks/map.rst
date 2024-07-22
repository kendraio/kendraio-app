Map
===

The Map block allows embedding a map for displaying geocoded data.
The Leaflet.js library is used to display the map, and some customisation options are supported.

The ``height`` in pixels of the block (default height 500px),
and the initial ``zoom`` level (default zoom = 8)
are provided as configuration options to the block. You can also optionally
provide a ``latlng`` config option for the default map centre point.

The map defaults to centring at [51.505, -0.09].

Data input
----------

The Map block expects incoming data to be an array of objects.
Each object represents a marker, and/or a country area. Each object can include the following properties:

- **Location-based Pin:** Provide both ``lat`` and ``long`` properties to display a pin at the specified coordinates.
- **Country-based Area:** Provide the ``country`` property with a 3-letter ISO country code (e.g., "GBR") to display the country area.

You can include both location and country properties in the same object to display both a pin and a country area.

Optionally, include a ``label`` property for the popup label and a ``customPin`` property for custom icons (see below).

**Example: Displaying location pins**

This example shows a mapping that produces an array of objects, each representing a location with a pin:

.. code-block:: json

    {
        "type": "mapping",
        "mapping": "[{ lat: `51.5074`, long: `-0.1278`, label: 'London' }, { lat: `48.8566`, long: `2.3522`, label: 'Paris' }]"
    },
    {
        "type": "map",
        "height": 500,
        "zoom": 2
    }

Displaying country areas
------------------------

To display a country area on the map, provide the ``country`` property in the data object 
with the 3-letter ISO code for the country. For example, to display the United Kingdom, you would use ``"GBR"``.

You can configure the appearance of country areas using the ``countryStyle`` object in the block config. 
The properties and their defaults are as follows:

.. code-block:: json

        {
            "color": "gray",
            "weight": 2,
            "opacity": 0.3,
            "fillColor": "gray",
            "fillOpacity": 0.5
        }

**Example: Displaying country areas**

This example shows a mapping that produces an array of objects, each representing a country area. The map block configures the appearance of the country areas:

.. code-block:: json

  {
    "type": "mapping",
    "mapping": "[{ country: 'GBR', label: 'United Kingdom' }, { country: 'FRA', label: 'France' }]"
  },
  {
    "type": "map",
    "height": 500,
    "zoom": 2,
    "countryStyle": {
      "color": "red",
      "fillColor": "pink"
    }
  }

**Example: Displaying both pins and country areas**

This example demonstrates displaying both a pin and a country area in the same object:

.. code-block:: json

  {
    "type": "mapping",
    "mapping": "[{ country: 'GBR', lat: `51.5074`, long: `-0.1278`, label: 'London, United Kingdom', customPin: '🇬🇧' }]"
  },
  {
    "type": "map",
    "height": 500,
    "zoom": 6,
    "countryStyle": {
      "color": "blue",
      "fillColor": "lightblue"
    }
  }

Custom pin icons
----------------

In addition to the default pin icon, the block allows setting custom pin 
icons using the ``customPin`` property in the data object. The ``customPin`` property 
accepts a string value that can be plain text, HTML, or even emojis.
The input is sanitised with DOMPurify to prevent XSS attacks.

**Example: Custom pin icons with emojis**

This example uses emojis as custom pin icons for specific locations:

.. code-block:: json

  {
    "type": "mapping",
    "mapping": "[{ lat: `51.5074`, long: `-0.1278`, label: 'London', customPin: '🇬🇧' }, { lat: `48.8566`, long: `2.3522`, label: 'Paris', customPin: '🇫🇷' }]"
  },
  {
    "type": "map",
    "height": 500,
    "zoom": 2
  }
