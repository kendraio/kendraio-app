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
- **diagrmType** - the type of diagram to create, one of `graph`, `flow`, `class`, `sequence`
- **diagrmDirection** - the direction of the diagram, one of `TB`, `LR`, `BT`, `RL`
- **svgId** - the ID of the SVG element to render to, required if there are multiple diagrams in the same page
