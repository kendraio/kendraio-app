Gosub
=====

A Flow embedded within a Flow.

This allows composition of larger building blocks to create Flows that
are easier to manage, and DRY (don't repeat yourself).

Typical use-cases for this are creating custom form widgets that can
be referenced from a form's ``uiSchema``. Or, creating dashboards
that are made up of multiple other Flows combined with a ``multi``
multiplex Flow block.

All data saved in a gosub is stored in the context or state of the parent Flow.
Therefore it is vital to avoid duplicating keys between the parent Flow and any of its gosubs, 
in order to prevent conflicts and unexpected behaviour.


