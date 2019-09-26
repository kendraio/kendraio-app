Data Grid
=========

This block displays the data passed in as a rich data table using the flexible grid library ag-grid.

Default config
--------------

.. code-block:: json

    {
      "type": "grid",
      "gridOptions": {}
    }

Supported properties
--------------------

- **sizeColumnsToFit** (boolean) (default = true) - set this to false to disable the auto-size algorithm from running that will resize the columns after display to best fit the available space.
- **gridOptions** (object) - Add supported options for the grid, based on the grid properties listed here: https://www.ag-grid.com/javascript-grid-properties/
- **columnDefs** (array) - A list of columns to display in the grid. The supported options are based on the grid column properties documented here: https://www.ag-grid.com/javascript-grid-column-properties/

Advanced features
-----------------

Adding ``"cellRenderer": "workflowRenderer"`` to a column allows to embed workflow within a cell of the table.
The ``cellRendererParams`` should include ``blocks`` as an array of workflow tasks to be added to the cell. Examples of
use include adding an "Operations" column, using the "actions" task within the cell to add a list of buttons to operate
on the data from that row. The cell will be passed in data from that row of the grid only.
