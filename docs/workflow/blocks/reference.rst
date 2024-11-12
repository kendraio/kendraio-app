Reference
=========

This block presents a select widget that takes it's options from the data input.
It expects to receive an array of options, and shows a drop-down select list where
one of the options can be selected. The selected option is output as the data from
this block.

Examples
--------

Here is an example showing most of the possible configuration values:

.. code-block:: json

    {
        "type": "reference",
        "fieldLabel": "Select artist",
        "labelGetter": "name",
        "valueField": "id",
        "outputGetter": "@"
    }

Instead of ``labelGetter`` the label can be taken from a field of the input
data using ``labelField``. The label field defaults to ``label`` so if the
input data items have a field called ``label`` you can omit these options.

You can also set the ``required`` status of the input select list. This defaults
to ``false``.

At the moment, it does not seem possible to prefill the field with a selected value.
There is a property called `defaultValue` which currently doesn't seems to work.
