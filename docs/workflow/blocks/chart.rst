Chart
=====

Display values in a configurable chart.

Default config
--------------

.. code-block:: json

    {
      "type": "chart"
    }

Supported properties
--------------------

- **chartType** (default = “doughnut”): Set this to any of the chart.js chart types to switch the type of chart output.
- **options** (default = {}): Options to pass along to chart.js - the allowed options are different depending on the chart type. More details can be found in the Chart.js documentation: https://www.chartjs.org/docs/latest/charts/

In order to successfully render charts, the input data to this block must match the format of the data expected by the chart type. The mapping block is useful to get data into the correct format for display. Support for all chart types is in progress.

Pie and Doughnut chart types require a list of objects, where each object has a “label” and a “value”.

A chart block is usually preceded by a mapping block to get the data into the correct format. Useful examples are given here for each chart type that is supported:

Pie and Doughnut charts
-----------------------

.. code-block:: json

  {
    "type": "mapping",
    "mapping": "data[].{ label: originalTitle, value: length(associatedISRCs) }"
  }

(NB: more mapping examples will be added here as support for more chart types is added)
