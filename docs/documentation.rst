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

    pip install sphinx sphinx-prompt sphinx_rtd_theme
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

  pip install sphinx-autobuild==2021.3.14
  sphinx-autobuild docs/ docs/_build/html

Then go to http://127.0.0.1:8000 in the browser.
