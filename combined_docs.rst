<file path="docs/intro.rst">
Kendraio App is an open source dashboard application for rights owners, music makers, managers and record labels,
enabling users to manage and track their digital media assets, collaborations
and associated rights.

- Online demo: https://app.kendra.io
- Read the Docs: https://kendraio-app.readthedocs.io
- More information: https://www.kendra.io/kendraio-app

</file>
<file path="docs/index.rst">
Kendraio App
============

.. include:: intro.rst

.. toctree::
   :maxdepth: 2
   :caption: Overview

   getting_started
   documentation

.. toctree::
   :maxdepth: 2
   :caption: Adapters

   adapters/intro
   adapters/installing
   adapters/creating

.. toctree::
   :maxdepth: 2
   :caption: Form Builder

   forms/intro

.. toctree::
   :maxdepth: 2
   :caption: Flow Builder (previously Workflow Builder)

   workflow/intro
   workflow/sharing
   workflow/cloud
   workflow/implementation

.. toctree::
   :maxdepth: 1
   :caption: Flow Blocks Reference (previously Workflow Blocks Reference)

   workflow/blocks/actions
   workflow/blocks/adapter_info
   workflow/blocks/app_layout
   workflow/blocks/batch
   workflow/blocks/card
   workflow/blocks/chart
   workflow/blocks/context_block
   workflow/blocks/context_runner_block
   workflow/blocks/csv_export
   workflow/blocks/csv_import
   workflow/blocks/db
   workflow/blocks/debug
   workflow/blocks/dialog
   workflow/blocks/dispatch
   workflow/blocks/faker
   workflow/blocks/file_export
   workflow/blocks/file_input
   workflow/blocks/form
   workflow/blocks/gosub
   workflow/blocks/grid
   workflow/blocks/gsheet
   workflow/blocks/http
   workflow/blocks/init
   workflow/blocks/launch_block
   workflow/blocks/load_schema
   workflow/blocks/load_schema_template
   workflow/blocks/map
   workflow/blocks/mapping
   workflow/blocks/message
   workflow/blocks/multi
   workflow/blocks/parse_data
   workflow/blocks/player
   workflow/blocks/query
   workflow/blocks/reference
   workflow/blocks/serialize
   workflow/blocks/switch
   workflow/blocks/template
   workflow/blocks/variable_get
   workflow/blocks/variable_set
   workflow/blocks/web_money
   workflow/blocks/wallet

.. toctree::
   :maxdepth: 2
   :caption: Automated testing
   
   testing/tips
</file>
<file path="docs/getting_started.rst">
Getting Started
===============

.. include:: intro.rst

Installation
------------

- checkout from git
- ``npm install``
- run dev server: ``npm run start:dev``


Contribute
----------

- For help and support, join the conversation on Slack: https://kendraio.slack.com/
- To report bugs, suggest improvements, or request features, use the issue tracker: https://github.com/kendraio/kendraio-app/issues
- To download the source code, visit the repo: https://github.com/kendraio/kendraio-app


Versioning
----------

Kendraio uses `semantic versioning <https://semver.org/>`_.
Please note `spec item 4 <https://semver.org/#spec-item-4>`_:

    Major version zero (0.y.z) is for initial development.
    Anything MAY change at any time.
    The public API SHOULD NOT be considered stable.


</file>
<file path="docs/documentation.rst">
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

This will run the script and output the results to a JSON file located in 
'/docs/flow-analysis' (or where you set it to save to).
</file>
