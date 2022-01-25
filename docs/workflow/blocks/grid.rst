Data Grid
=========

This block displays the data passed in as a rich data table using the flexible grid library ag-grid.

Default config
--------------

.. code-block:: json

    {
      "type": "grid",
      "gridOptions": "{}",
      "passThrough": "false",
      "firstRowHeaders": "false"      
    }

Supported properties
--------------------

- **sizeColumnsToFit** (boolean) (default = true) - set this to false to disable the auto-size algorithm from running that will resize the columns after display to best fit the available space.
- **gridOptions** (object) - Add supported options for the grid, based on the grid properties listed here: https://www.ag-grid.com/javascript-grid-properties/
- **columnDefs** (array) - A list of columns to display in the grid. The supported options are based on the grid column properties documented here: https://www.ag-grid.com/javascript-grid-column-properties/
- **passThrough** (boolean) - always pass through changes to data model, rather than emiting new changes based on selected rows
- **firstRowHeaders** (boolean) - Use the first row as column headers
- **enabledGetter** (string) - A JMESpath string that returns true or false. When false, the grid will be disabled. 
- **valueGetter** (string) - A JMESpath expression that will define the source of the data to use for the grid. This will allow the grid to display data at any data location, including state. 
  
 

Using valueGetter
-----------------
The valueGetter property changes the behaviour of the datagrid. Instead of simply rendering data, 
the grid will render the result of a JMESpath expression capable of addressing data, context and state. 

**Caution:** using a valueGetter this property will trigger an update on every state change. This may have performance implications. 
Using this property in conjunction with *passThrough* could also potentially cause execution loops or unexpected behaviour. 


Example
+++++++

.. code-block:: json

  {
    "type": "grid",
    "gridOptions": {},
    "passThrough": false,
    "firstRowHeaders": false,
    "valueGetter": "state.global._.flags",
    "enabledGetter": "state.global._.flags.devel",
    "columnDefs": [
        {
            "field": "0",
            "headerName": "Flag"
        },
        {
            "field": "1",
            "headerName": "Value"
        }
    ]
  }

Advanced features
-----------------

Adding ``"cellRenderer": "workflowRenderer"`` to a column allows to embed workflow within a cell of the table.
The ``cellRendererParams`` should include ``blocks`` as an array of workflow tasks to be added to the cell. Examples of
use include adding an "Operations" column, using the "actions" task within the cell to add a list of buttons to operate
on the data from that row. The cell will be passed in data from that row of the grid only.

Examples
++++++++

This example shows some advanced grid features, such as customisation of the
pagination, multiple row selection, the addition of a selectable checkbox column,
and the use of the "workflow renderer" to embed another workflow within
the grid cells. For example, the workflow renderer is useful for adding edit buttons
to a content administration table.

.. code-block:: json

    {
      "type": "grid",
      "gridOptions": {
        "pagination": true,
        "paginationPageSize": 10,
        "rowSelection": "multiple"
      },
      "columnDefs": [
        {
          "width": 50,
          "resizable": false,
          "checkboxSelection": true
        },
        {
          "headerName": "ID",
          "field": "id"
        },
        {
          "headerName": "Name",
          "field": "name"
        },
        {
          "headerName": "Operations",
          "cellRenderer": "workflowRenderer",
          "cellRendererParams": {
            "blocks": [
              {
                "type": "actions",
                "buttons": [
                  {
                    "label": "View",
                    "blocks": [
                      {
                        "type": "dialog",
                        "blocks": [
                          {
                            "type": "debug"
                          },
                          {
                            "type": "actions",
                            "buttons": [
                              {
                                "label": "OK",
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
                    ]
                  },
                  {
                    "label": "Edit",
                    "blocks": [
                      {
                        "type": "launch",
                        "adapter": "example",
                        "workflowId": "editTheThing",
                        "context": {
                          "id": "data.id"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        }
      }
    }

This example shows filters, checkbox selection, pagination, and valueFormatter
options in use:

.. code-block:: json

    {
        "type": "grid",
        "gridOptions": {
            "pagination": true,
            "paginationPageSize": 20,
            "rowSelection": "multiple"
        },
        "columnDefs": [
            {
                "headerCheckboxSelection": true,
                "width": 50,
                "resizable": false,
                "checkboxSelection": true
            },
            {
                "headerName": "Description",
                "field": "Description",
                "filter": "agTextColumnFilter",
                "filterParams": {
                    "applyButton": true,
                    "resetButton": true
                }
            },
            {
                "headerName": "Department",
                "field": "Department",
                "filter": "agTextColumnFilter",
                "filterParams": {
                    "applyButton": true,
                    "resetButton": true
                }
            },
            {
                "headerName": "Size / Weight",
                "field": "Size / Weight",
                "filter": "agTextColumnFilter",
                "filterParams": {
                    "applyButton": true,
                    "resetButton": true
                }
            },
            {
                "headerName": "Price",
                "field": "Price",
                "width": 150,
                "filter": "agNumberColumnFilter",
                "valueFormatter": "join('', ['£', value])",
                "filterParams": {
                    "applyButton": true,
                    "resetButton": true
                },
                "cellClass": "text-right"
            }
        ]
    }
