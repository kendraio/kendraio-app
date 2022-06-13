Mermaid
=======

Create diagrams and visualisations from text using Mermaid. 
https://mermaid-js.github.io/



Default config
--------------

.. code-block:: javascript

    {   
      type: 'mermaid',      
      graphGetter: 'data',
      type: 'graph',
      direction:'TB'    
    }



Supported properties
--------------------

- **graphGetter** - a JMESPath expression specifying where to look for graph data
- **diagramType** - the type of diagram to create, one of `graph`, `flow`, `class`, `sequence`
- **diagramDirection** - the direction of the diagram, one of `TB`, `LR`, `BT`, `RL`
- **svgId** - the ID of the SVG element to render to, required if there are multiple diagrams in the same page


Graph definition format
-----------------------

Mermaid graph data can be provided as strings, arrays or objects. If the renderer finds an array, it will 
join all values into a newline separated string. If the renderer finds an object, it will join all the object values, 
and ignore any keys. 

The following are equivalent: 
* "A --> B;  B --> C ; B --> D"
* ["A --> B", "B --> C","B --> D"]
* {"one": "A --> B", "two": "B --> C","three": "B --> D"}






