Google Sheet
============

Use a Google Spreadsheet as a data source.

First, publishing your Google Sheet: In the File menu pick Share and then Publish to the web.
Select the sheet you want to access, choose CSV as the format, and then click "Publish" 

Copy the published doc link. 

Enter the URL from above as the key option in the block config:

.. code-block:: json

  {
      "type": "gsheet",
      "shareUrl": "https://docs.google.com/spreadsheets/d/e/2PACX-1vTk4ki2qQI9vuhPEH_QLZS-SYktDZke7dJkt_x7qTxicoPlepm94cCrRPP5Bi2r9oyMEtFFXKUQLtpV/pub?gid=0&single=true&output=csv"
  }

