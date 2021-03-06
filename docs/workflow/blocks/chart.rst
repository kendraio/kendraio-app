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

Examples
--------

The Chart.JS options can be customised.
Callback functions in the configuration are not supported.
Instead, you can use a JMES Path expression
anywhere in the Chart.JS options that expects a callback function.
For example, to use a logarithmic
scale, customise the ``yAxes`` property:

.. code-block:: json


                {
                    "type": "chart",
                    "chartType": "line",
                    "multi": true,
                    "options": {
                        "scales": {
                            "yAxes": [
                                {
                                    "type": "logarithmic",
                                    "ticks": {
                                        "callback": "value",
                                        "maxTicksLimit": 10
                                    }
                                }
                            ]
                        }
                    }
                }


The chart block can be configured to plot multiple sets of data on the same chart.
To enabled this, set ``multi`` to true:

.. code-block:: json

  {
      "type": "chart",
      "chartType": "line",
      "multi": true
  }

Then in the mapping that prepares the data for the chart block, create an
array of data sets. Either using a ``batch`` block to query multiple sources
or a single mapping that produces an array of data sets from a single source.
Each dataset contains a ``data`` key and ``label``.
Here is an example of a query against multiple sources:

.. code-block:: json

  {
      "type": "multi",
      "batches": [
          {
              "blocks": [
                  {
                      "type": "http",
                      "method": "get",
                      "endpoint": "https://trends-api.now.sh/api?keyword=angular"
                  },
                  {
                      "type": "mapping",
                      "mapping": "{ data: data.default.timelineData[].{ value: value[0], label: formattedAxisTime }, label: 'angular'}"
                  }
              ]
          },
          {
              "blocks": [
                  {
                      "type": "http",
                      "method": "get",
                      "endpoint": "https://trends-api.now.sh/api?keyword=react"
                  },
                  {
                      "type": "mapping",
                      "mapping": "{ data: data.default.timelineData[].{ value: value[0], label: formattedAxisTime }, label: 'react'}"
                  }
              ]
          },
          {
              "blocks": [
                  {
                      "type": "http",
                      "method": "get",
                      "endpoint": "https://trends-api.now.sh/api?keyword=vue"
                  },
                  {
                      "type": "mapping",
                      "mapping": "{ data: data.default.timelineData[].{ value: value[0], label: formattedAxisTime }, label: 'vue'}"
                  }
              ]
          }
      ]
  }


