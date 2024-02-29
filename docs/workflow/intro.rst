Flow Blocks
===============

Overview
--------

Flows are created by plugging together various reusable blocks of functionality.
<<<<<<< HEAD
A Flow is made from multiple blocks that connect together. A task is a running instance of a Flow.
Flows can be nested inside other Flows.
Thus, tasks are nested too, and a running task may contain multiple tasks within it.

The available “blocks” of reusable functionality are documented below.
The Flow builder in the app lets you create and customise Flows,
=======
A Flow is a list of Flow items (or blocks). A task is a running instance of a Flow.
Flow definitions can be nested, as some Flow item blocks contain embedded Flows.
Thus, tasks are nested too, and a running task may contain multiple tasks within it.

The available “blocks” of reusable functionality are documented below.
The Flow builder within the app lets you create and customise Flows,
>>>>>>> e5a07579 (Convert "Workflow" text to "Flow" (#451))
load existing Flows from adapters, and generate links to share Flows you have created.

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

