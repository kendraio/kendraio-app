Documentation
=============

This documentation is built using Sphinx and hosted on Read the Docs.
The source code for the documentation is available within the ``docs``
folder within the main app repository.

You will find the latest version of the documentation online `here <https://kendraio-app.readthedocs.io/en/latest/>`_.
The docs are also available in `PDF <https://readthedocs.org/projects/kendraio-app/downloads/pdf/latest/>`_
and `ePUB <https://readthedocs.org/projects/kendraio-app/downloads/epub/latest/>`_ formats.

Building the docs
-----------------

In order to build the documentation yourself, you will first need to install some dependencies.
These instructions are for bash, and should work on Linux and macOS. Assuming you have Python
(and therefore, also pip) installed, the following commands will install sphinx, fetch the
code, and build the docs:

.. prompt:: bash $

    pip install sphinx
    git clone https://github.com/kendraio/kendraio-app.git
    cd docs
    make html

Auto-building
-------------

Use the `sphinx-autobuild <https://pypi.org/project/sphinx-autobuild/>`_ command to
rebuild the documentation when a change is detected, and auto-reload the browser to display
the changes.

Run the following commands (from the root of the repository, or change the paths):

.. prompt:: bash $

  pip install sphinx-autobuild
  sphinx-autobuild docs/ docs/_build/html

Then go to http://127.0.0.1:8000 in the browser.

Investigating Block usage in saved Flows
-----------------------------------------
To help improve the documentation, developers can research block usage in existing 
Flows that are saved to Flow Cloud, by configuring and using a Node.js script in the 
source repository.
This script is designed to explore the configuration used for  particular blocks in 
flows saved to Flow Cloud. It can filter by a specific config property, allowing for 
more targeted analysis. Modify the script to specify what property is of interest.

The script helps identify patterns or common configurations for specific block types, and 
assists in auditing and understanding how a particular property is being used across 
multiple flows. The results are output to JSON files on disk for further analysis.

The script is located at `docs/extract-example-block-usage-from-flows.js` in the git 
repository.

Usage:

.. prompt:: bash $

    cd docs
    node extract-example-block-usage-from-flows.js

This will run the script and output the results to a JSON file located at 
'flow-analysis/flow-block-config-analysis.json'.