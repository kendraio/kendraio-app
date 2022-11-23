Comparison
==========

Perform a simple operation, comparing a source value with a set of target values.

The comparison block works through each of a set of operations, and when 
it finds a successful match, returns the specified output. 

Once a match is found, processing stops. If no match is found, a default is returned. 

The output of the block will replace "data". 

Configuration 
-------------

The comparison block is configured by a custom form. 

(General) Value Types 
++++++++++++++++++++++

The comparison block assumes that target, output and default values are strings by default. 
However, it is possible to specify that these are JMESPath values, which means that
they will be passed through the mapper to retrieve data, or perform additional operations. 

Block Setup
+++++++++++

Source
^^^^^^

The source that we will be comparing against. This is a JMESpath expression. 

Default 
^^^^^^^

If no match is set, the default is returned. 


Comparison definitions
++++++++++++++++++++++

Operator
^^^^^^^^

What operation should be performed. '==', '>','<' etc. 
Some operators require a target, to be compared with, others simply work on the source. 

Target
^^^^^^
If the operator requires a second value to compare with, a target needs to be specified. 


Output
^^^^^^
On a successful match, the output for the comparison is returned. 



Default config
--------------
Under the hood, this is the default block config JSON. 

.. code-block:: json

    {
      type: 'comparison',
      valueGetter: 'data',
      default: 'NO',
      defaultType: 'value',
      comparisons: [
        {
          operator: '==',
          target:'OK',
          targetType:'value',
          output:'YES',
          outputType:'value'
        }
      ]
    }