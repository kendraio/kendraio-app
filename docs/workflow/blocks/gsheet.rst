Google Sheet
============

Use a Google Spreadsheet as a data source.

First, publishing your Google Sheet: In the File menu pick Publish to the web.
Click Start publishing. A URL will appear, IGNORE THIS URL!
Now that you've published your sheet, you now need to share it, too.

- Click the Share link in the upper right-hand corner
- Click the very pale Advanced button
- Change... access to "On - Anyone with a link"
- Make sure Access: Anyone says Can view, since you don't want strangers editing your data
- Click Save

Copy the Link to Share. Your URL should look something like
https://docs.google.com/spreadsheets/d/1FNFdfnfQqz81igvokIwxdcOoK59NRSZ00KAm0xyIVE8/edit?usp=sharing.
It should not have a /d/e in it.

Enter the URL from above as the key option in the block config:

.. code-block:: json

  {
      "type": "gsheet",
      "simple": true,
      "key": "https://docs.google.com/spreadsheets/d/1pROEg6WMQNcsR4QFMQJyDuGO67JKscCgacnOi8rivCM/edit?usp=sharing"
  }

Add `simple: true` if the Spreadsheet only includes one sheet/tab.

If you get an error message about JSON parsing issues, or `e is undefined`, or similar,
it is probably the case that the link/key to the file is wrong, and instead of getting
valid JSON the gsheet block is getting an error back from google.

Check that you have shared a Google Spreadsheet - if it is an XLSX or other
format file you need to first go to File menu -> "Save as Google Sheets".

If you are not using simple mode (i.e. you have more than one sheet/tab in the spreadsheet)
then you will probably need a mapping to get the data you want, Eg:

.. code-block:: json

  {
      "type": "mapping",
      "mapping": "data.\"music-recording\".elements"
  }

Where music-recording is the name of the tab, and elements gives you the data
from the rows of the sheet. NB: the \" around \"music-recording\" are only required because the sheet name includes a special character (-). For simple sheet names, this is not required. Eg:

.. code-block:: json

  {
      "type": "mapping",
      "mapping": "data.claim.elements"
  }
