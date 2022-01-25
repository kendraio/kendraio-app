Workflow Blocks
===============

Overview
--------

Workflows are created by plugging together various reusable blocks of functionality.
A workflow is a list of workflow items (or blocks). A task is a running instance of a workflow.
Workflow definitions can be nested, as some workflow item blocks contain embedded workflows.
Thus, tasks are nested too, and a running task may contain multiple tasks within it.

The available “blocks” of reusable functionality are documented below.
The workflow builder within the app lets you create and customise workflows,
load existing workflows from adapters, and generate links to share workflows you have created.

Block Metadata & Comments
+++++++++++++++++++++++++

Additional information can be provided about each block to help flows be better understood. 
These are general configuration properties available to all block types.

- **blockTitle** : A unique display title for this block. Appended to the generic type name in the block editor.
- **blockComment**: A descriptive comment that will be displayed above the main block editor content.

Online Demonstrator
-------------------

- Master branch, stable: https://app.kendra.io
- Development branch, unstable: https://dev.app.kendra.io

