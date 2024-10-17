# Commit Diffs

## Commit: 0c4bec8036b389eedaeabd69695e4bd3614fb2bd

**Message:** Fix Ag Grid UI and custom component render (#447)

**Author:** designbygio

**Date:** 2024-02-13

### Diff:

```diff
diff --git a/package.json b/package.json
index c77f8f9b..8eda2f6c 100644
--- a/package.json
+++ b/package.json
@@ -50,8 +50,8 @@
     "@ngx-formly/material": "^6.1.8",
     "@ngx-translate/core": "^14.0.0",
     "@ngx-translate/http-loader": "^6.0.0",
-    "ag-grid-angular": "^30.0.6",
-    "ag-grid-community": "^30.0.6",
+    "ag-grid-angular": "^31.0.3",
+    "ag-grid-community": "^31.0.3",
     "ajv": "^8.12.0",
     "ajv-errors": "^3.0.0",
     "ajv-formats": "^2.1.1",
diff --git a/src/app/blocks/grid-block/grid-block.component.html b/src/app/blocks/grid-block/grid-block.component.html
index 42a79dfb..17c60dbe 100644
--- a/src/app/blocks/grid-block/grid-block.component.html
+++ b/src/app/blocks/grid-block/grid-block.component.html
@@ -14,7 +14,7 @@
                  [rowData]="rowData"
                  [defaultColDef]="defaultColDef"
                  [gridOptions]="gridOptions"
-                 [frameworkComponents]="frameworkComponents"
+                 [components]="components"
                  (selectionChanged)="onSelectionChanged($event)"
                  [columnDefs]="columnDefs"></ag-grid-angular>

diff --git a/src/app/blocks/grid-block/grid-block.component.ts b/src/app/blocks/grid-block/grid-block.component.ts
index e7947dd5..3a607478 100644
--- a/src/app/blocks/grid-block/grid-block.component.ts
+++ b/src/app/blocks/grid-block/grid-block.component.ts
@@ -35,7 +35,7 @@ export class GridBlockComponent implements OnInit, OnChanges {
   valueGetter = null;


-  frameworkComponents = {
+  components = {
     workflowRenderer: WorkflowCellRendererComponent,
     connectionStatusRenderer: ConnectionStatusRendererComponent,
   };
diff --git a/src/styles.scss b/src/styles.scss
index d0ed0441..e76dc01e 100644
--- a/src/styles.scss
+++ b/src/styles.scss
@@ -1,6 +1,6 @@
 @use '@angular/material' as mat;
-@import '../node_modules/ag-grid-community/styles/ag-theme-alpine.css';
 @import '../node_modules/ag-grid-community/styles/ag-grid.css';
+@import '../node_modules/ag-grid-community/styles/ag-theme-alpine.css';

 @import "@fortawesome/fontawesome-free/css/all.css";
 // Custom Theming for Angular Material
diff --git a/src/styles/main.scss b/src/styles/main.scss
index 65e3a773..a111a7ff 100644
--- a/src/styles/main.scss
+++ b/src/styles/main.scss
@@ -9,8 +9,6 @@ Global Style Guide:


 @import "~@ng-select/ng-select/themes/material.theme.css";
-// @import '../../app/ng-select-theme';
-

 .formFieldWidth380 .mat-form-field-infix {
   width: 380px;
```

## Commit: 5645a0ac5fab3593bd350552684e3bee3d118f26

**Message:** Convert "Workflow" text to "Flow" (#451)

**Author:** designbygio

**Date:** 2024-02-29

### Diff:

```diff
diff --git a/docs/workflow/blocks/actions.rst b/docs/workflow/blocks/actions.rst
index c6f983da..5b3ccadf 100644
--- a/docs/workflow/blocks/actions.rst
+++ b/docs/workflow/blocks/actions.rst
@@ -37,14 +37,14 @@ Supported properties
   If `enabledGetter` is set to `false` the automatic property will be then shown as `"enabled": false`.
   - **valueGetters** (string) - A value that will be pass as context to whichever action is being executed.
   This is a JMESPath mapping.
-  - **blocks** (array) - the list of workflow items to run when this button is pressed.
+  - **blocks** (array) - the list of Flow items to run when this button is pressed.

 Example
 -------

 This example shows two buttons. The first one dispatches an asynchronous command using the
 :doc:`Event Dispatch <dispatch>` bloc, the second one does nothing, but includes an ``init``
-block in order to start the inner workflow so that it runs and signals completion to the outer workflow.
+block in order to start the inner Flow so that it runs and signals completion to the outer Flow.

 .. code-block:: json
   {
diff --git a/docs/workflow/blocks/adapter_info.rst b/docs/workflow/blocks/adapter_info.rst
index e5c22a93..2cc25150 100644
--- a/docs/workflow/blocks/adapter_info.rst
+++ b/docs/workflow/blocks/adapter_info.rst
@@ -1,7 +1,7 @@
 Adapter Info
 ============

-The Adapter info block is used to read adapter configurations within workflows
+The Adapter info block is used to read adapter configurations within Flows
 and get information on which adapters are enabled.

 There are two versions of this block ``adapter-list`` produces a full list of
@@ -9,12 +9,12 @@ adapter metadata, whereas ``adapter-info`` is used to query for information
 on a specific adapter. The block config should include ``adapterName`` to
 specify which adapter info is loaded, or ``adapterNameGetter`` can be set
 using a JMES Path expression to query the name of the adapter to fetch from
-either the block input data or workflow context.
+either the block input data or Flow context.

 Example
 -------

-This example is taken from one of the core workflows where the adapter
+This example is taken from one of the core Flows where the adapter
 info block is used to create a list of all the enabled adapters:

 .. code-block:: json
@@ -23,7 +23,7 @@ info block is used to create a list of all the enabled adapters:
       "type": "adapter-list"
     }

-This example is also from a core workflow, and shows how to load
+This example is also from a core Flow, and shows how to load
 information about a specific adapter:

 .. code-block:: json
@@ -38,7 +38,7 @@ Packaged Adapters
 -----------------

 To access all flows and config related to an adapter, it is possible to request the entire "packaged adapter".
-With this option set, the adapter will include an "attachments" section, containing the source of all flows,
+With this option set, the adapter will include an "attachments" section, containing the source of all Flows,
 schemas, forms and config.

 .. code-block:: json
diff --git a/docs/workflow/blocks/batch.rst b/docs/workflow/blocks/batch.rst
index 311f4e1a..c21237f8 100644
--- a/docs/workflow/blocks/batch.rst
+++ b/docs/workflow/blocks/batch.rst
@@ -1,8 +1,8 @@
 Batch Process
 =============

-Run the specified workflow for every item in a list. This block expects an array (list) of items to be passed in as data.
-It will run the embedded workflow for every item in the list, collect the results, and then output the list of results once all the tasks have completed.
+Run the specified Flow for every item in a list. This block expects an array (list) of items to be passed in as data.
+It will run the embedded Flow for every item in the list, collect the results, and then output the list of results once all the tasks have completed.

 Default config
 --------------
@@ -17,8 +17,8 @@ Default config
 Supported properties
 --------------------

-- **blocks** (array) - the workflow (list of blocks) to run for each item in the input data list.
-- **flex** (boolean) (default = false) - apply a flex layout to the batch workflow outputs.
+- **blocks** (array) - the Flow (list of blocks) to run for each item in the input data list.
+- **flex** (boolean) (default = false) - apply a flex layout to the batch Flow outputs.


 Examples
@@ -65,4 +65,4 @@ A common way to use the Batch Block is in conjunction with the Cards Block. When
             ]
         }
     ]
-  }
\ No newline at end of file
+  }
diff --git a/docs/workflow/blocks/card.rst b/docs/workflow/blocks/card.rst
index c085a233..a818ef0c 100644
--- a/docs/workflow/blocks/card.rst
+++ b/docs/workflow/blocks/card.rst
@@ -16,4 +16,4 @@ Default config
 Supported properties
 --------------------

-- **blocks** - the list of workflow blocks that make up the display within the card
+- **blocks** - the list of Flow Blocks that make up the display within the card
diff --git a/docs/workflow/blocks/dialog.rst b/docs/workflow/blocks/dialog.rst
index 5a825d92..fd91af7e 100644
--- a/docs/workflow/blocks/dialog.rst
+++ b/docs/workflow/blocks/dialog.rst
@@ -1,7 +1,7 @@
 Dialog
 ======

-Launch a modal dialog in which to run an embedded workflow.
+Launch a modal dialog in which to run an embedded Flow.

 Default config
 --------------
@@ -13,8 +13,8 @@ Default config
       "blocks": []
     }

-**NB:** The modal dialog will close as soon as the inner workflow completes.
-Therefore you probably want to include at least one workflow item that requires interaction
+**NB:** The modal dialog will close as soon as the inner Flow completes.
+Therefore you probably want to include at least one Flow item that requires interaction
 from the user, for example, ``actions`` buttons or a ``form``.

 Example
diff --git a/docs/workflow/blocks/dispatch.rst b/docs/workflow/blocks/dispatch.rst
index 68dc656d..ff1503ce 100644
--- a/docs/workflow/blocks/dispatch.rst
+++ b/docs/workflow/blocks/dispatch.rst
@@ -16,8 +16,8 @@ Default config
 Usage
 -----

-This block is only really useful by core workflows, as adapter workflows
-are not yet able to register asynchronous workflows to run in response to events.
+This block is only really useful by core Flows, as adapter Flows
+are not yet able to register asynchronous Flows to run in response to events.

 To track development of this feature, see this issue:
 https://github.com/kendraio/kendraio-app/issues/53
diff --git a/docs/workflow/blocks/form.rst b/docs/workflow/blocks/form.rst
index 1a481e10..daa899ca 100644
--- a/docs/workflow/blocks/form.rst
+++ b/docs/workflow/blocks/form.rst
@@ -24,7 +24,7 @@ Supported properties
 - **adapter** and **formId**: if these two properties are provided they are used to fetch the JSON schema and UI Schema from the adapter config repository.
 - **label** (default = “Submit): customise the label displayed on the submit button
 - **hasSubmit** (default = true): this allows you to remove the submit button from the form. If this is set to true the submit button is not displayed and the form will output all changes.
-- **debounceTime** (default = 400): the number of milliseconds to debounce form output when not using a submit button. Multiple changes within this time will be ignored, and only the last change is emitted. This is a useful option to prevent unnecessary execution of multiple tasks within the workflow, for example if the form feeds into a HTTP block to pull data from an API (such as in an autocomplete) then the debounce will limit the number of requests that are sent while the user is entering input.
+- **debounceTime** (default = 400): the number of milliseconds to debounce form output when not using a submit button. Multiple changes within this time will be ignored, and only the last change is emitted. This is a useful option to prevent unnecessary execution of multiple tasks within the Flow, for example if the form feeds into a HTTP block to pull data from an API (such as in an autocomplete) then the debounce will limit the number of requests that are sent while the user is entering input.
 - **emitOnInit** (boolean) (default = false): enable this to emit the form values when the block is initialised. This is useful if you need to pass on default values.
 - **schemaGetter**: Form schemas can be made dynamic by providing a set of blocks that will generate a schema.
 - **contextErrorKey** (default = null): the key used to store the error message in the context. This is useful if you want to display the error message in a different block.
@@ -40,16 +40,16 @@ uiSchema properties
 - **blocks**: The blocks to nest in the form field. This should be an array, even if it is a single item.
 - **type**: The type of block to be used.

-Important notes on creating flows with forms
+Important notes on creating Flows with forms
 --------------------------------------------

-When a form is submitted, it will trigger the execution of the next block in the flow, passing through any new data.
-Blocks will continue to pass processing through the flow, until a block emits the same data as it did previously -
-at which point the change detection will stop the flow.
+When a form is submitted, it will trigger the execution of the next block in the Flow, passing through any new data.
+Blocks will continue to pass processing through the Flow, until a block emits the same data as it did previously -
+at which point the change detection will stop the Flow.

-If you are creating flows that need to respond to new data from the forms, you will need to pay attention to the blocks
+If you are creating Flows that need to respond to new data from the forms, you will need to pay attention to the blocks
 that follow the form, making sure that every block emits changes to that processing continues. If you have blocks that are
-not dependent on the form, then it is best to place them before the form in the flow.
+not dependent on the form, then it is best to place them before the form in the Flow.



diff --git a/docs/workflow/blocks/gosub.rst b/docs/workflow/blocks/gosub.rst
index 07550589..de7544da 100644
--- a/docs/workflow/blocks/gosub.rst
+++ b/docs/workflow/blocks/gosub.rst
@@ -1,15 +1,15 @@
 Gosub
 =====

-Embedded a workflow within a workflow.
+Embedded a Flow within a Flow.

-This allows composition of larger building blocks to create workflows that
+This allows composition of larger building blocks to create Flows that
 are easier to manage, and DRY (don't repeat yourself).

 Typical use-cases for this are creating custom form widgets that can
 be referenced from a form's ``uiSchema``. Or, creating dashboards
-that are made up of multiple other workflows combined with a ``multi``
-multiplex workflow block.
+that are made up of multiple other Flows combined with a ``multi``
+multiplex Flow block.



diff --git a/docs/workflow/blocks/grid.rst b/docs/workflow/blocks/grid.rst
index 5950caa0..eb6bfc3c 100644
--- a/docs/workflow/blocks/grid.rst
+++ b/docs/workflow/blocks/grid.rst
@@ -64,8 +64,8 @@ Example
 Advanced features
 -----------------

-Adding ``"cellRenderer": "workflowRenderer"`` to a column allows to embed workflow within a cell of the table.
-The ``cellRendererParams`` should include ``blocks`` as an array of workflow tasks to be added to the cell. Examples of
+Adding ``"cellRenderer": "workflowRenderer"`` to a column allows to embed Flow within a cell of the table.
+The ``cellRendererParams`` should include ``blocks`` as an array of Flow tasks to be added to the cell. Examples of
 use include adding an "Operations" column, using the "actions" task within the cell to add a list of buttons to operate
 on the data from that row. The cell will be passed in data from that row of the grid only.

@@ -74,8 +74,8 @@ Examples

 This example shows some advanced grid features, such as customisation of the
 pagination, multiple row selection, the addition of a selectable checkbox column,
-and the use of the "workflow renderer" to embed another workflow within
-the grid cells. For example, the workflow renderer is useful for adding edit buttons
+and the use of the "workflow renderer" to embed another Flow within
+the grid cells. For example, the Flow renderer is useful for adding edit buttons
 to a content administration table.

 .. code-block:: json
diff --git a/docs/workflow/blocks/init.rst b/docs/workflow/blocks/init.rst
index 4ca82aba..a1552b2e 100644
--- a/docs/workflow/blocks/init.rst
+++ b/docs/workflow/blocks/init.rst
@@ -1,7 +1,7 @@
 Initialisation
 ==============

-Initialise workflow processing on page load.
+Initialise Flow processing on page load.

 Default config
 --------------
diff --git a/docs/workflow/blocks/launch_block.rst b/docs/workflow/blocks/launch_block.rst
index dabc5036..7fcd2357 100644
--- a/docs/workflow/blocks/launch_block.rst
+++ b/docs/workflow/blocks/launch_block.rst
@@ -1,9 +1,13 @@
 Launch
 ======

+<<<<<<< HEAD
 Useful to jump to a different Flow. This block is not available to be added to a flow directly, but is instead for use from within other blocks.

 If you want to jump to a different Flow from a button the :doc:`Link Action Block <link_action_block>`, allows opening Flows in a new tab or window as an alternative to an :doc:`Actions block button <actions>` being used with a Launch block.
+=======
+Jump to a new Flow. This block is not available to be added to a Flow directly, but is instead for use from within other blocks.
+>>>>>>> e5a07579 (Convert "Workflow" text to "Flow" (#451))

 Default config
 --------------
@@ -19,8 +23,8 @@ Default config
 Supported properties
 --------------------

-- **adapter** - The adapter of the flow to launch
-- **workflowId** - The flow to launch
+- **adapter** - The adapter of the Flow to launch
+- **workflowId** - The Flow to launch
 - **valueGetters** - An onbject containing JMESPath to evaluate for adapter and workflowId.
 - **context** - Data that will be passed to the flow to launch

diff --git a/docs/workflow/cloud.rst b/docs/workflow/cloud.rst
index 820e6bba..cd6c40fd 100644
--- a/docs/workflow/cloud.rst
+++ b/docs/workflow/cloud.rst
@@ -1,8 +1,8 @@
-Workflow Cloud
+Flow Cloud
 ==============

-Workflows can be downloaded from the Workflow Cloud.
+Flows can be downloaded from the Flow Cloud.

-These workflows are not specific to any adapter.
+These Flows are not specific to any adapter.

 This section is under active development and likely to change.
diff --git a/docs/workflow/implementation.rst b/docs/workflow/implementation.rst
index a6524f33..5a5c8798 100644
--- a/docs/workflow/implementation.rst
+++ b/docs/workflow/implementation.rst
@@ -1,8 +1,12 @@
-How flows get executed
+How Flows get executed
 ======================

 Flows are implemented using Angular's built-in execution chaining.
+<<<<<<< HEAD
 While this simplifies the whole process of running workflows, it does
+=======
+While this simplifies the whole process of running Flows, it does
+>>>>>>> e5a07579 (Convert "Workflow" text to "Flow" (#451))
 introduce some challenges - many of which can be overcome by understanding
 a little about how flows are run, and in particular, the way change detection
 works.
@@ -11,24 +15,24 @@ works.

 |step1|

-The first time a flow is run, each of the blocks is initialised, but
+The first time a Flow is run, each of the blocks is initialised, but
 does not receive any data. This is the "firstRun", and some blocks will have an option to skip execution on this step.


 |step2|

-Processing then begins a second time,and this time round, the output from
-a block is passed to the next block in the flow.
+Processing then begins a second time, and this time round, the output from
+a block is passed to the next block in the Flow.

 |step3|

 Many blocks are asynchronous. This means that they will have two different outputs to
 pass on to the block that follows them. The first output will essentially be blank. No actual processing
 has happened yet, as the internal work has been "forked" off. This blank output will pass through the
-flow once, triggering every block to run.
+Flow once, triggering every block to run.

 Once the asynchronous block has completed it's work, it will sent it's output to the next block. This will
-then trigger the next processing of the flow.
+then trigger the next processing of the Flow.

 |step4|

@@ -41,7 +45,7 @@ will need to change, and so stops processing the chain.

 |step5|

-When building flows, we need to be aware of this change
+When building Flows, we need to be aware of this change
 detection behaviour. If any of our blocks, mapping blocks
 in particular, emit a result that is unchanged from a
 previous run, processing will stop.
@@ -50,13 +54,13 @@ previous run, processing will stop.
 Implications when working with forms
 ------------------------------------

-This is particularly important if a flow contains a form that
+This is particularly important if a Flow contains a form that
 gathers input from the user. When a form is submitted, the
-next block in the flow is triggered and passed the data from
+next block in the Flow is triggered and passed the data from
 the form. This will then pass on execution to it's child - until
 any block emits the same output as it did before the form
 was submitted. The moment output does not change,
-processing will stop and no more blocks in the flow will run.
+processing will stop and no more blocks in the Flow will run.



diff --git a/docs/workflow/intro.rst b/docs/workflow/intro.rst
index 3dd4979a..bb1f3490 100644
--- a/docs/workflow/intro.rst
+++ b/docs/workflow/intro.rst
@@ -5,12 +5,21 @@ Overview
 --------

 Flows are created by plugging together various reusable blocks of functionality.
+<<<<<<< HEAD
 A Flow is made from multiple blocks that connect together. A task is a running instance of a Flow.
 Flows can be nested inside other Flows.
 Thus, tasks are nested too, and a running task may contain multiple tasks within it.

 The available “blocks” of reusable functionality are documented below.
 The Flow builder in the app lets you create and customise Flows,
+=======
+A Flow is a list of Flow items (or blocks). A task is a running instance of a Flow.
+Flow definitions can be nested, as some Flow item blocks contain embedded Flows.
+Thus, tasks are nested too, and a running task may contain multiple tasks within it.
+
+The available “blocks” of reusable functionality are documented below.
+The Flow builder within the app lets you create and customise Flows,
+>>>>>>> e5a07579 (Convert "Workflow" text to "Flow" (#451))
 load existing Flows from adapters, and generate links to share Flows you have created.

 Block Metadata & Comments
diff --git a/docs/workflow/sharing.rst b/docs/workflow/sharing.rst
index 3f0107a2..f460409f 100644
--- a/docs/workflow/sharing.rst
+++ b/docs/workflow/sharing.rst
@@ -1,22 +1,22 @@
-Sharing workflows
+Sharing Flows
 =================

-Workflows you have created can be shared with others.
+Flows you have created can be shared with others.
 There are several ways to do this.

 Add to an adapter
 -----------------

-If you are working on an adapter, then workflows can be added to the
+If you are working on an adapter, then Flows can be added to the
 adapters ``configs`` folder and they will be accessible by anyone
 who has your adapter installed and activated.

 Use the share link
 ------------------

-Generate a sharable link using the workflow builder share button.
+Generate a sharable link using the Flow builder share button.
 This link includes and encoded version of the config, and will load
-up the app directly and display the included workflow.
+up the app directly and display the included Flow.

 Export the code
 ---------------
@@ -24,5 +24,5 @@ Export the code
 You can export the JSON using the "Copy config" button. This can be
 send over instant messenger, email, or your preferred mode of communication.
 The receiving user then takes the JSON code and uses the "Paste config" button
-within the workflow builder.
+within the Flow builder.

diff --git a/src/app/services/workflow.service.ts b/src/app/services/workflow.service.ts
index 741ee431..9d5fea5b 100644
--- a/src/app/services/workflow.service.ts
+++ b/src/app/services/workflow.service.ts
@@ -262,7 +262,7 @@ export class WorkflowService {
   }

   getAdapterName() {
-    return get(this.context, 'app.adapterName', 'Adapter name');
+    return get(this.context, 'app.adapterName', DEFAULT_ADAPTER_NAME);
   }

   getWorkflowId() {
```

## Commit: 36e31d0d7e51350afb464c210ee13d727d6fe79f

**Message:** Migrate angular MUI to MDC components (#454)

**Author:** designbygio

**Date:** 2024-03-04

### Diff:

```diff
diff --git a/cypress/e2e/context_and_state.ts b/cypress/e2e/context_and_state.ts
index 014c3b6f..4a77f051 100644
--- a/cypress/e2e/context_and_state.ts
+++ b/cypress/e2e/context_and_state.ts
@@ -234,7 +234,7 @@ describe('Kendraio context and state', () => {
     loadFlowCode([
       {
         "type": "context-save",
-        "valueGetter": "`true`",
+        "valueGetter": "`false`",
         "contextKey": "state.global.disabled",
       },
       {
diff --git a/src/app/_shared/components/material/mat-input.component.ts b/src/app/_shared/components/material/mat-input.component.ts
index e1369311..355c203f 100644
--- a/src/app/_shared/components/material/mat-input.component.ts
+++ b/src/app/_shared/components/material/mat-input.component.ts
@@ -5,9 +5,9 @@ import { ICellEditorAngularComp } from 'ag-grid-angular';
 @Component({
     selector: "input-cell",
     template: `
-        <mat-card>
+        <mat-card appearance="outlined">
         <form class="container" tabindex="0" (keydown)="onKeyDown($event)">
-            <mat-form-field class="example-full-width">
+            <mat-form-field class="block-comment-container">
                 <input #input matInput [(ngModel)]="Title" placeholder="Title"
                        [ngModelOptions]="{standalone: true}">
             </mat-form-field>
@@ -16,10 +16,10 @@ import { ICellEditorAngularComp } from 'ag-grid-angular';
     `,
     styles: [
         `
-            .container {
-                width: 350px;
-            }
-        `
+                    .container {
+                        width: 350px;
+                    }
+                `
     ]
 })
 export class MatInputComponent implements ICellEditorAngularComp {
diff --git a/src/app/_shared/ui-form/types/array.type.html b/src/app/_shared/ui-form/types/array.type.html
index 5871bcdf..db2033b3 100644
--- a/src/app/_shared/ui-form/types/array.type.html
+++ b/src/app/_shared/ui-form/types/array.type.html
@@ -1,4 +1,4 @@
-<mat-card>
+<mat-card appearance="outlined">
   <div class="mat-typography">
     <h2 *ngIf="to.label">{{ to.label }}</h2>
     <p *ngIf="to.description">{{ to.description }}</p>
@@ -8,7 +8,7 @@
     <formly-validation-message [field]="field"></formly-validation-message>
   </div>

-  <mat-card *ngFor="let field of field.fieldGroup;let i = index;">
+  <mat-card appearance="outlined" *ngFor="let field of field.fieldGroup;let i = index;">
     <formly-field [field]="field"></formly-field>
     <div>
       <button mat-raised-button color="warn" type="button" (click)="remove(i)">Remove</button>
diff --git a/src/app/_shared/ui-form/types/array.type.scss b/src/app/_shared/ui-form/types/array.type.scss
index 1f9b3354..ac1a6fcf 100644
--- a/src/app/_shared/ui-form/types/array.type.scss
+++ b/src/app/_shared/ui-form/types/array.type.scss
@@ -2,6 +2,3 @@
   display: block;
   margin-bottom: 1em;
 }
-mat-card {
-  margin-bottom: 1em;
-}
diff --git a/src/app/_shared/ui-form/types/image-viewer.type.ts b/src/app/_shared/ui-form/types/image-viewer.type.ts
index f5918c68..fe76018e 100644
--- a/src/app/_shared/ui-form/types/image-viewer.type.ts
+++ b/src/app/_shared/ui-form/types/image-viewer.type.ts
@@ -6,7 +6,7 @@ import { FieldType } from '@ngx-formly/core';
   selector: 'app-thumbnail-viewer',
   template: `

-  <mat-card *ngIf="formControl.value" style="float:left;margin-right:32px" >
+  <mat-card appearance="outlined" *ngIf="formControl.value" style="float:left;margin-right:32px" >
   <mat-card-header>
     <mat-label>{{to.label}}</mat-label>
   </mat-card-header>
diff --git a/src/app/_shared/ui-form/types/money.component.ts b/src/app/_shared/ui-form/types/money.component.ts
index 83a0dafa..dfd0a96c 100644
--- a/src/app/_shared/ui-form/types/money.component.ts
+++ b/src/app/_shared/ui-form/types/money.component.ts
@@ -6,7 +6,7 @@ import createNumberMask from 'text-mask-addons/dist/createNumberMask';
   selector: 'formly-field-input-money',
   template: `

-     <mat-form-field appearance="standard" style="width:100%">
+     <mat-form-field style="width:100%">
      <mat-label>  {{ to.label }} </mat-label>
      <input matInput type="text"
      [maskito]="{mask: numberMask}"
diff --git a/src/app/_shared/ui-form/types/percentage.component.ts b/src/app/_shared/ui-form/types/percentage.component.ts
index f90f32aa..3fabfbbf 100644
--- a/src/app/_shared/ui-form/types/percentage.component.ts
+++ b/src/app/_shared/ui-form/types/percentage.component.ts
@@ -4,7 +4,7 @@ import { FieldType } from '@ngx-formly/core';
 @Component({
   selector: 'formly-field-input-percentage',
   template: `
-  <mat-form-field appearance="standard">
+  <mat-form-field>
   <mat-label>  {{ to.label }} </mat-label>
      <input matInput type="text"  [maskito]="{mask: limitToHundred}" [formControl]="formControl" [formlyAttributes]="field">
      <mat-error></mat-error>
diff --git a/src/app/_shared/ui-form/types/playlists.component.html b/src/app/_shared/ui-form/types/playlists.component.html
index da7b4353..0f1b7124 100644
--- a/src/app/_shared/ui-form/types/playlists.component.html
+++ b/src/app/_shared/ui-form/types/playlists.component.html
@@ -1,7 +1,7 @@
 <div class="popup-container mt-5">


-  <mat-card @enterAnimateUpDwn style="max-width: 50%" [formGroup]="myform">
+  <mat-card appearance="outlined" @enterAnimateUpDwn style="max-width: 50%" [formGroup]="myform">
     <mat-card-header>
       <label>{{to.label}}-{{formControl.value | json}}</label></mat-card-header>

diff --git a/src/app/_shared/ui-form/types/textarea.type.ts b/src/app/_shared/ui-form/types/textarea.type.ts
index d9050feb..8e77d24d 100644
--- a/src/app/_shared/ui-form/types/textarea.type.ts
+++ b/src/app/_shared/ui-form/types/textarea.type.ts
@@ -19,7 +19,7 @@ import { MatInput } from '@angular/material/input';



-  <mat-form-field  class="example-full-width">
+  <mat-form-field  class="block-comment-container">

                   <textarea matInput
                             [id]="id"
diff --git a/src/app/_shared/ui-form/types/video-viewer.component.ts b/src/app/_shared/ui-form/types/video-viewer.component.ts
index 1c5ab61d..3a1913d8 100644
--- a/src/app/_shared/ui-form/types/video-viewer.component.ts
+++ b/src/app/_shared/ui-form/types/video-viewer.component.ts
@@ -7,7 +7,7 @@ import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browse
   selector: 'formly-field-video-viewer',
   template: `

-  <mat-card>
+  <mat-card appearance="outlined">
   <mat-card-header>
     <mat-label>{{to.label}}</mat-label>
   </mat-card-header>
diff --git a/src/app/_shared/ui-form/types/video-viewer2.component.ts b/src/app/_shared/ui-form/types/video-viewer2.component.ts
index 8fe0c36c..943ad153 100644
--- a/src/app/_shared/ui-form/types/video-viewer2.component.ts
+++ b/src/app/_shared/ui-form/types/video-viewer2.component.ts
@@ -7,7 +7,7 @@ import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browse
   selector: 'formly-field-video-viewer2',
   template: `

-  <mat-card>
+  <mat-card appearance="outlined">
   <mat-card-header>
     <mat-label>{{to.label}}</mat-label>
   </mat-card-header>
diff --git a/src/app/_shared/ui-form/types/video-viewerDM.component.ts b/src/app/_shared/ui-form/types/video-viewerDM.component.ts
index 5088bed4..8ffb653f 100644
--- a/src/app/_shared/ui-form/types/video-viewerDM.component.ts
+++ b/src/app/_shared/ui-form/types/video-viewerDM.component.ts
@@ -7,7 +7,7 @@ import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browse
   selector: 'formly-field-video-viewer2',
   template: `

-  <mat-card>
+  <mat-card appearance="outlined">
   <mat-card-header>
     <mat-label>{{to.label}}   ({{to.uiSchema.adapter}} Video Player)</mat-label>
   </mat-card-header>
diff --git a/src/app/app.component.html b/src/app/app.component.html
index c12891b0..7262f8bb 100644
--- a/src/app/app.component.html
+++ b/src/app/app.component.html
@@ -21,10 +21,10 @@
   </button>

   <ng-container *ngIf="pageTitle$ | async as pageTitleData">
-        <span>
-          {{ pageTitleData.title | translate }}
-        </span>
-<!--    <app-bookmark-button *ngIf="pageTitleData.isWorkflow"></app-bookmark-button>-->
+      <span>
+        {{ pageTitleData.title | translate }}
+      </span>
+    <!--<app-bookmark-button *ngIf="pageTitleData.isWorkflow"></app-bookmark-button>-->
     <button *ngIf="pageTitleData.isWorkflow" mat-icon-button (click)="onRefresh()">
       <mat-icon style="color: #999999;">refresh</mat-icon>
     </button>
@@ -32,7 +32,7 @@
   <span class="spacer"></span>

   <button mat-icon-button routerLink="/workflowCloud/listWorkflows"><mat-icon>list</mat-icon></button>
-<!--  <button mat-icon-button routerLink="/core/collection"><mat-icon>collections_bookmark</mat-icon></button>-->
+  <!--<button mat-icon-button routerLink="/core/collection"><mat-icon>collections_bookmark</mat-icon></button>-->

   <button mat-icon-button routerLink="/connect"><mat-icon>person</mat-icon> </button>
   <button mat-icon-button routerLink="/notifications"><mat-icon [matBadge]="notificationCount">notifications</mat-icon></button>
@@ -54,26 +54,14 @@
 </mat-toolbar>

 <mat-sidenav-container class="app-container" style="height:100vh">
-
   <mat-sidenav #sidenav mode="side" (keydown.escape)="sidenav.close()" style="width: 260px;">
-
     <app-main-menu></app-main-menu>
-
   </mat-sidenav>

   <mat-sidenav-content>

-
-
-
     <div class="page-content" style="margin-bottom: 4rem;">
-
-
-
-
-
-
-<!--      <app-breadcrumb [locale]="locale"></app-breadcrumb>-->
+    <!--<app-breadcrumb [locale]="locale"></app-breadcrumb>-->
       <router-outlet name="popup"></router-outlet>
       <router-outlet></router-outlet>

@@ -84,12 +72,8 @@

   </mat-sidenav-content>

-
-
   <mat-sidenav #blocksSidePane position="end" mode="side">
     <app-workflow-sidenav (closeSidenav)="blocksSidePane.close()"></app-workflow-sidenav>
   </mat-sidenav>

-
-
 </mat-sidenav-container>
diff --git a/src/app/blocks/card-block/card-block.component.html b/src/app/blocks/card-block/card-block.component.html
index cc125ac3..d74b77df 100644
--- a/src/app/blocks/card-block/card-block.component.html
+++ b/src/app/blocks/card-block/card-block.component.html
@@ -1,3 +1,3 @@
-<mat-card>
+<mat-card appearance="outlined">
   <app-blocks-workflow [blocks]="blocks" [models]="[model]" [context]="context" (workflowComplete)="onWorkflowComplete($event)"></app-blocks-workflow>
 </mat-card>
diff --git a/src/app/blocks/card-block/card-block.component.scss b/src/app/blocks/card-block/card-block.component.scss
index 20f3086a..e69de29b 100644
--- a/src/app/blocks/card-block/card-block.component.scss
+++ b/src/app/blocks/card-block/card-block.component.scss
@@ -1,7 +0,0 @@
-mat-card {
-  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
-  display: block;
-  position: relative;
-  padding: 1em;
-  margin-bottom: 1em;
-}
\ No newline at end of file
diff --git a/src/app/blocks/image-block/image-block.component.scss b/src/app/blocks/image-block/image-block.component.scss
index 08577110..e69de29b 100644
--- a/src/app/blocks/image-block/image-block.component.scss
+++ b/src/app/blocks/image-block/image-block.component.scss
@@ -1,3 +0,0 @@
-mat-card {
-  margin-bottom: 1em;
-}
diff --git a/src/app/components/block-builder-box/block-builder-box.component.html b/src/app/components/block-builder-box/block-builder-box.component.html
index bedd0166..ad96a6b0 100644
--- a/src/app/components/block-builder-box/block-builder-box.component.html
+++ b/src/app/components/block-builder-box/block-builder-box.component.html
@@ -5,7 +5,7 @@
                      [(ngModel)]="blockModel" (onInit)="initEditor()"></ngx-monaco-editor>
 </ng-container>

-<mat-form-field class="example-full-width">
-  <textarea type="textarea" rows="3" placeholder="Block Comment" aria-label="Block Comment" matInput
+<mat-form-field class="block-comment-container">
+  <textarea type="textarea" rows="2" placeholder="Block Comment" aria-label="Block Comment" matInput
     [formControl]="blockCommentFormControl" ></textarea>
 </mat-form-field>
diff --git a/src/app/components/block-comparison-builder-box/block-comparison-builder-box.component.html b/src/app/components/block-comparison-builder-box/block-comparison-builder-box.component.html
index db3e49d1..a159f61e 100644
--- a/src/app/components/block-comparison-builder-box/block-comparison-builder-box.component.html
+++ b/src/app/components/block-comparison-builder-box/block-comparison-builder-box.component.html
@@ -1,5 +1,5 @@
 <div class="example-container" [formGroup]="form">
-    <mat-form-field class="example-full-width">
+    <mat-form-field class="block-comment-container">
         <mat-label>Value source (jmespath)</mat-label>
         <input type="text" placeholder="valueGetter" aria-label="valueGetter" matInput formControlName="valueGetter">
     </mat-form-field>
diff --git a/src/app/components/block-gosub-builder-box/block-gosub-builder-box.component.html b/src/app/components/block-gosub-builder-box/block-gosub-builder-box.component.html
index 4d3b9d6a..4c2007a3 100644
--- a/src/app/components/block-gosub-builder-box/block-gosub-builder-box.component.html
+++ b/src/app/components/block-gosub-builder-box/block-gosub-builder-box.component.html
@@ -1,4 +1,4 @@
-<mat-form-field class="example-full-width">
+<mat-form-field class="block-comment-container">
   <input type="text" placeholder="Adapter" aria-label="Adapter" matInput [formControl]="adapterNameFormControl"
     [matAutocomplete]="autoAdapter">
   <mat-autocomplete #autoAdapter="matAutocomplete">
@@ -8,7 +8,7 @@
   </mat-autocomplete>
 </mat-form-field>

-<mat-form-field class="example-full-width">
+<mat-form-field class="block-comment-container">
   <input type="text" placeholder="Workflow" aria-label="Workflow" matInput [formControl]="workflowIdFormControl"
     [matAutocomplete]="autoWorkflow">
   <mat-autocomplete #autoWorkflow="matAutocomplete">
@@ -19,7 +19,7 @@
 </mat-form-field>


-<mat-form-field class="example-full-width">
+<mat-form-field class="block-comment-container">
   <textarea type="textarea" rows="3" placeholder="Block Comment" aria-label="Block Comment" matInput
     [formControl]="blockCommentFormControl" ></textarea>
 </mat-form-field>
\ No newline at end of file
diff --git a/src/app/components/block-mapping-builder-box/block-mapping-builder-box.component.html b/src/app/components/block-mapping-builder-box/block-mapping-builder-box.component.html
index 40651655..fea4ff85 100644
--- a/src/app/components/block-mapping-builder-box/block-mapping-builder-box.component.html
+++ b/src/app/components/block-mapping-builder-box/block-mapping-builder-box.component.html
@@ -1,5 +1,5 @@
 <ngx-monaco-editor [options]="editorOptions" style="height: 240px;" [(ngModel)]="mappingModel"></ngx-monaco-editor>
-<mat-form-field class="example-full-width">
+<mat-form-field class="block-comment-container">
   <textarea type="textarea" rows="3" placeholder="Block Comment" aria-label="Block Comment" matInput
     [formControl]="blockCommentFormControl" ></textarea>
 </mat-form-field>
diff --git a/src/app/components/layout/layout.component.html b/src/app/components/layout/layout.component.html
index 9b7b67f9..637b164a 100644
--- a/src/app/components/layout/layout.component.html
+++ b/src/app/components/layout/layout.component.html
@@ -1,13 +1,8 @@
-<mat-sidenav-container  class="app-container">
+<mat-sidenav-container class="app-container">

   <mat-sidenav #sidenav mode="side" opened (keydown.escape)="sidenav.close()">
     <mat-nav-list>

-
-
-
-
-
         <mat-list-item (click)="gotoPage('/assets', sidenav)"  >
             <mat-icon mat-list-icon [matMenuTriggerFor]="menu">favorite</mat-icon>
             <a matLine [matMenuTriggerFor]="menu">Assets</a>
@@ -19,13 +14,11 @@
             </mat-menu>
           </mat-list-item>

-
       <mat-list-item *ngFor="let link of links" (click)="gotoPage(link.href, sidenav)">
         <mat-icon mat-list-icon>{{ link.icon }}</mat-icon>
         <a matLine>{{ link.title }}</a>
       </mat-list-item>

-
     </mat-nav-list>
   </mat-sidenav>

@@ -44,18 +37,13 @@
       </span>
       <span class="spacer"></span>

-
-
-
       <button mat-icon-button (click)="gotoPage('/user', sidenav)">
         <mat-icon>person</mat-icon>
       </button>
     </mat-toolbar>

-
-
     <div class="page-content">
-<!--        <app-breadcrumb></app-breadcrumb>-->
+      <!--<app-breadcrumb></app-breadcrumb>-->
       <router-outlet></router-outlet>
     </div>
   </mat-sidenav-content>
diff --git a/src/app/components/layout/layout.component.scss b/src/app/components/layout/layout.component.scss
index 78a47966..14d75c19 100644
--- a/src/app/components/layout/layout.component.scss
+++ b/src/app/components/layout/layout.component.scss
@@ -1,14 +1,15 @@
 .spacer {
   flex: 1 1 auto;
 }
+
 .page-content {
   margin: 1em;
 }

 .app-container {
-   position: absolute;
-   top: 0;
-   bottom: 0;
-   left: 0;
-   right: 0;
- }
+  position: absolute;
+  top: 0;
+  bottom: 0;
+  left: 0;
+  right: 0;
+}
diff --git a/src/app/components/layout/layout.component.ts b/src/app/components/layout/layout.component.ts
index f586a0d7..24360e99 100644
--- a/src/app/components/layout/layout.component.ts
+++ b/src/app/components/layout/layout.component.ts
@@ -1,9 +1,7 @@
 import { Component, OnInit } from '@angular/core';
 import { Router } from '@angular/router';
-import { MatMenu } from '@angular/material/menu';
 import { MatSidenav } from '@angular/material/sidenav';
 import { Observable } from 'rxjs';
-import {SharedModule} from '../../_shared/shared.module';
 import { PageTitleService } from '../../services/page-title.service';

 @Component({
diff --git a/src/app/components/workflow-sidenav/workflow-sidenav.component.html b/src/app/components/workflow-sidenav/workflow-sidenav.component.html
index 7e77d0f3..372b895d 100644
--- a/src/app/components/workflow-sidenav/workflow-sidenav.component.html
+++ b/src/app/components/workflow-sidenav/workflow-sidenav.component.html
@@ -7,7 +7,7 @@
       <button type="button" mat-icon-button (click)="workflow.clearBlocks()" matTooltip="Clear workflow">
         <mat-icon>delete_forever</mat-icon>
       </button>
-<!--      <button type="button" mat-icon-button (click)="workflow.clearWorkflowData()" matTooltip="Clear workflow data">-->
+<!--     = <button type="button" mat-icon-button (click)="workflow.clearWorkflowData()" matTooltip="Clear workflow data">-->
 <!--        <app-kendraio-icon icon="fa-eraser"></app-kendraio-icon>-->
 <!--      </button>-->
       <button type="button" mat-icon-button (click)="workflow.shareConfig()" matTooltip="Share">
@@ -37,17 +37,17 @@
       </button>
     </div>

-    <mat-card class="adapter-metadata">
-      <div class="metadata-edit">
+    <mat-card appearance="outlined" class="adapter-metadata">
+      <div class="adapter-metadata-edit">
+        <p class="adapter-metadata-edit-text">
+          Title: {{ workflow.title }}<br>
+          Adapter: {{ workflow.getAdapterName() }}<br>
+          Workflow ID: {{ workflow.id }}<br>
+          Tags: {{ workflow.tags.join(', ') }}
+        </p>
         <button type="button" mat-icon-button (click)="workflow.editMetadata()" matTooltip="Edit metadata">
           <mat-icon>edit</mat-icon>
         </button>
-      </div>
-      <p>
-        Title: {{ workflow.title }}<br>
-        Adapter: {{ workflow.getAdapterName() }}<br>
-        Flow ID: {{ workflow.id || 'Flow ID' }}<br>
-        Tags: {{ workflow.tags.join(', ') }}
-      </p>
+    </div>
     </mat-card>
     <app-blocks-editor [blocks]="workflow.blocks" (blockUpdate)="workflow.onBlocksUpdate($event)"></app-blocks-editor>
diff --git a/src/app/components/workflow-sidenav/workflow-sidenav.component.scss b/src/app/components/workflow-sidenav/workflow-sidenav.component.scss
index 563db05c..71e4ab54 100644
--- a/src/app/components/workflow-sidenav/workflow-sidenav.component.scss
+++ b/src/app/components/workflow-sidenav/workflow-sidenav.component.scss
@@ -12,9 +12,15 @@
 .adapter-metadata {
   margin-bottom: 1em;
 }
-.metadata-edit {
-  float: right;
+
+.adapter-metadata-edit{
+  display: flex;
+}
+
+.adapter-metadata-edit-text {
+  flex: 1;
 }
+
 app-blocks-editor {
   display: block;
   margin-bottom: 4rem;
diff --git a/src/app/dialogs/adapter-blocks-config-select-dialog/adapter-blocks-config-select-dialog.component.html b/src/app/dialogs/adapter-blocks-config-select-dialog/adapter-blocks-config-select-dialog.component.html
index 7b14a2de..3d79eee4 100644
--- a/src/app/dialogs/adapter-blocks-config-select-dialog/adapter-blocks-config-select-dialog.component.html
+++ b/src/app/dialogs/adapter-blocks-config-select-dialog/adapter-blocks-config-select-dialog.component.html
@@ -1,20 +1,22 @@
-<p class="mat-typography">Load config from Adapter:</p>
-<ng-container *ngIf="adapters$ | async as adapters">
+<mat-dialog-content>
+  <p class="mat-typography">Load config from Adapter:</p>
+  <ng-container *ngIf="adapters$ | async as adapters">

-  <select [(ngModel)]="selectedAdapter" (ngModelChange)="adapterChange()">
-    <option class="row" *ngFor="let adapter of adapters | objectKeys | orderKeys" [value]="adapter">
-      <ng-container *ngIf="adapters[adapter] as config">{{ config?.adapter?.name }}</ng-container>
-    </option>
-  </select>
+    <select [(ngModel)]="selectedAdapter" (ngModelChange)="adapterChange()">
+      <option class="row" *ngFor="let adapter of adapters | objectKeys | orderKeys" [value]="adapter">
+        <ng-container *ngIf="adapters[adapter] as config">{{ config?.adapter?.name }}</ng-container>
+      </option>
+    </select>

-  <select *ngIf="configs.length > 0" [(ngModel)]="selectedConfig">
-    <option *ngFor="let q of configs; let i = index" [value]="i">
-      {{ q?.title || 'Untitled' }}
-    </option>
-  </select>
+    <select *ngIf="configs.length > 0" [(ngModel)]="selectedConfig">
+      <option *ngFor="let q of configs; let i = index" [value]="i">
+        {{ q?.title || 'Untitled' }}
+      </option>
+    </select>

-</ng-container>
-
-<br><br>
-<button mat-flat-button (click)="loadConfig()" color="primary">Load Config</button>
-<button mat-flat-button (click)="cancel()">Cancel</button>
+  </ng-container>
+</mat-dialog-content>
+<mat-dialog-actions>
+  <button mat-flat-button (click)="loadConfig()" color="primary">Load Config</button>
+  <button mat-flat-button (click)="cancel()">Cancel</button>
+</mat-dialog-actions>
diff --git a/src/app/dialogs/adapter-query-select-dialog/adapter-query-select-dialog.component.html b/src/app/dialogs/adapter-query-select-dialog/adapter-query-select-dialog.component.html
index 5994d9cc..54595ba2 100644
--- a/src/app/dialogs/adapter-query-select-dialog/adapter-query-select-dialog.component.html
+++ b/src/app/dialogs/adapter-query-select-dialog/adapter-query-select-dialog.component.html
@@ -1,20 +1,22 @@
-<p class="mat-typography">Load query from Adapter:</p>
-<ng-container *ngIf="adapters$ | async as adapters">
+<mat-dialog-content>
+  <p class="mat-typography">Load query from Adapter:</p>
+  <ng-container *ngIf="adapters$ | async as adapters">

-  <select [(ngModel)]="selectedAdapter" (ngModelChange)="adapterChange()">
-    <option class="row" *ngFor="let adapter of adapters | objectKeys | orderKeys" [value]="adapter">
-      <ng-container *ngIf="adapters[adapter] as config">{{ config?.adapter?.name }}</ng-container>
-    </option>
-  </select>
+    <select [(ngModel)]="selectedAdapter" (ngModelChange)="adapterChange()">
+      <option class="row" *ngFor="let adapter of adapters | objectKeys | orderKeys" [value]="adapter">
+        <ng-container *ngIf="adapters[adapter] as config">{{ config?.adapter?.name }}</ng-container>
+      </option>
+    </select>

-  <select *ngIf="queries.length > 0" [(ngModel)]="selectedQuery">
-    <option *ngFor="let q of queries; let i = index" [value]="i">
-      {{ q?.title || 'Untitled' }}
-    </option>
-  </select>
+    <select *ngIf="queries.length > 0" [(ngModel)]="selectedQuery">
+      <option *ngFor="let q of queries; let i = index" [value]="i">
+        {{ q?.title || 'Untitled' }}
+      </option>
+    </select>

-</ng-container>
-
-<br><br>
-<button mat-flat-button (click)="loadForm()" color="primary">Load Query</button>
-<button mat-flat-button (click)="cancel()">Cancel</button>
+  </ng-container>
+</mat-dialog-content>
+<mat-dialog-actions>
+  <button mat-flat-button (click)="loadForm()" color="primary">Load Query</button>
+  <button mat-flat-button (click)="cancel()">Cancel</button>
+</mat-dialog-actions>
diff --git a/src/app/dialogs/add-block-dialog/add-block-dialog.component.html b/src/app/dialogs/add-block-dialog/add-block-dialog.component.html
index ac5d1682..91098b08 100644
--- a/src/app/dialogs/add-block-dialog/add-block-dialog.component.html
+++ b/src/app/dialogs/add-block-dialog/add-block-dialog.component.html
@@ -14,7 +14,7 @@
     </ng-container>
   </div>

-  <mat-card>
+  <mat-card appearance="outlined">
     <ng-container *ngIf="!!selectedBlockType">
       <h3>{{ selectedBlockType.label }}</h3>
       <p>{{ selectedBlockType.description }}</p>
diff --git a/src/app/dialogs/add-block-dialog/add-block-dialog.component.scss b/src/app/dialogs/add-block-dialog/add-block-dialog.component.scss
index 95c54d0b..b1844fc6 100644
--- a/src/app/dialogs/add-block-dialog/add-block-dialog.component.scss
+++ b/src/app/dialogs/add-block-dialog/add-block-dialog.component.scss
@@ -1,17 +1,12 @@
 .dialog-buttons > button {
   margin-right: 1em;
 }
-.button-selections {
-  margin-bottom: 1em;
-}

-mat-card {
-  height: 150px;
+.button-selections {
   margin-bottom: 1em;
 }

-
-.mat-flat-button {
+.mat-mdc-unelevated-button {
   display: inline-block;
   min-width: 12em;
   height: 3em;
diff --git a/src/app/dialogs/edit-clip-dialog/edit-clip-dialog.component.html b/src/app/dialogs/edit-clip-dialog/edit-clip-dialog.component.html
index 20effaa0..4b7d113b 100644
--- a/src/app/dialogs/edit-clip-dialog/edit-clip-dialog.component.html
+++ b/src/app/dialogs/edit-clip-dialog/edit-clip-dialog.component.html
@@ -1,29 +1,26 @@
 <h1 mat-dialog-title>Edit Clip</h1>

 <div mat-dialog-content>
-<form [formGroup]="form" autocomplete="off">
+  <form [formGroup]="form" autocomplete="off">
+    <mat-form-field>
+      <input matInput placeholder="Name" formControlName="name">
+    </mat-form-field>

-<mat-form-field>
-  <input matInput placeholder="Name" formControlName="name">
-</mat-form-field>
+      <mat-form-field>
+        <mat-select placeholder="Add rights group" formControlName="right">
+          <mat-option *ngFor="let group of rightsGroups" [value]="group">
+            {{group}}
+          </mat-option>
+        </mat-select>
+      </mat-form-field>

-  <mat-form-field>
-    <mat-select placeholder="Add rights group" formControlName="right">
-      <mat-option *ngFor="let group of rightsGroups" [value]="group">
-        {{group}}
-      </mat-option>
-    </mat-select>
-  </mat-form-field>
-
-<mat-form-field>
-  <input matInput placeholder="Role" formControlName="role">
-</mat-form-field>
-<mat-form-field>
-  <input matInput placeholder="Contributor" formControlName="contributor">
-</mat-form-field>
-
-
-</form>
+    <mat-form-field>
+      <input matInput placeholder="Role" formControlName="role">
+    </mat-form-field>
+    <mat-form-field>
+      <input matInput placeholder="Contributor" formControlName="contributor">
+    </mat-form-field>
+  </form>
 </div>

 <div mat-dialog-actions>
diff --git a/src/app/dialogs/edit-workflow-metadata-dialog/edit-workflow-metadata-dialog.component.html b/src/app/dialogs/edit-workflow-metadata-dialog/edit-workflow-metadata-dialog.component.html
index 5949f61f..f32b321d 100644
--- a/src/app/dialogs/edit-workflow-metadata-dialog/edit-workflow-metadata-dialog.component.html
+++ b/src/app/dialogs/edit-workflow-metadata-dialog/edit-workflow-metadata-dialog.component.html
@@ -1,30 +1,32 @@
-<form [formGroup]="form">
-  <mat-form-field>
-    <input matInput placeholder="Title" formControlName="title" name="title">
-  </mat-form-field>
-  <mat-form-field>
-    <input matInput placeholder="Adapter name" formControlName="adapterName" name="adapterName">
-  </mat-form-field>
-  <mat-form-field>
-    <input matInput placeholder="Workflow ID" formControlName="id" name="id">
-  </mat-form-field>
-  <mat-form-field class="example-chip-list">
-    <mat-chip-listbox #chipList aria-label="Fruit selection">
-      <mat-chip *ngFor="let tag of tags.getRawValue()" [selectable]="selectable"
-                [removable]="removable" (removed)="removeTag(tag)">
-        {{tag}}
-        <mat-icon matChipRemove *ngIf="removable">cancel</mat-icon>
-      </mat-chip>
-      <input placeholder="Add tag..."
-             [matChipInputFor]="chipList"
-             [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
-             [matChipInputAddOnBlur]="addOnBlur"
-             (matChipInputTokenEnd)="addTag($event)">
-    </mat-chip-listbox>
-  </mat-form-field>
-</form>
+<mat-dialog-content>
+  <form [formGroup]="form">
+    <mat-form-field>
+      <input matInput placeholder="Title" formControlName="title" name="title">
+    </mat-form-field>
+    <mat-form-field>
+      <input matInput placeholder="Adapter name" formControlName="adapterName" name="adapterName">
+    </mat-form-field>
+    <mat-form-field>
+      <input matInput placeholder="Workflow ID" formControlName="id" name="id">
+    </mat-form-field>
+    <mat-form-field class="example-chip-list">
+      <mat-chip-listbox #chipList aria-label="Fruit selection">
+        <mat-chip-option *ngFor="let tag of tags.getRawValue()" [selectable]="selectable"
+                  [removable]="removable" (removed)="removeTag(tag)">
+          {{tag}}
+          <mat-icon matChipRemove *ngIf="removable">cancel</mat-icon>
+        </mat-chip-option>
+        <input placeholder="Add tag..."
+              [matChipInputFor]="chipList"
+              [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
+              [matChipInputAddOnBlur]="addOnBlur"
+              (matChipInputTokenEnd)="addTag($event)">
+      </mat-chip-listbox>
+    </mat-form-field>
+  </form>
+</mat-dialog-content>
+<mat-dialog-actions>
+  <button mat-flat-button color="primary" (click)="onSave()" style="margin-right: 1em;">Save</button>
+  <button mat-flat-button (click)="onCancel()">Cancel</button>
+</mat-dialog-actions>

-<br>
-<button mat-flat-button color="primary" (click)="onSave()" style="margin-right: 1em;">Save</button>
-<button mat-flat-button (click)="onCancel()">Cancel</button>
-<br>
diff --git a/src/app/dialogs/export-config-dialog/export-config-dialog.component.html b/src/app/dialogs/export-config-dialog/export-config-dialog.component.html
index b2d9915b..a2ce54ea 100644
--- a/src/app/dialogs/export-config-dialog/export-config-dialog.component.html
+++ b/src/app/dialogs/export-config-dialog/export-config-dialog.component.html
@@ -1,6 +1,10 @@
-<p class="mat-typography">Config export:</p>
-<textarea #textBox readonly="readonly" class="config-text-box">
-{{ configText }}
-</textarea><br>
-<button mat-flat-button (click)="textBox.focus();textBox.select()">Select all</button>
-<button mat-flat-button color="primary" (click)="copyText()">Copy config</button>
+<mat-dialog-content>
+    <p class="mat-typography">Config export:</p>
+    <textarea #textBox readonly="readonly" class="config-text-box">
+    {{ configText }}
+    </textarea>
+</mat-dialog-content>
+<mat-dialog-actions>
+    <button mat-flat-button (click)="textBox.focus();textBox.select()">Select all</button>
+    <button mat-flat-button color="primary" (click)="copyText()">Copy config</button>
+</mat-dialog-actions>
\ No newline at end of file
diff --git a/src/app/dialogs/form-data-select-dialog/form-data-select-dialog.component.html b/src/app/dialogs/form-data-select-dialog/form-data-select-dialog.component.html
index 9d67ae88..31ff2ee3 100644
--- a/src/app/dialogs/form-data-select-dialog/form-data-select-dialog.component.html
+++ b/src/app/dialogs/form-data-select-dialog/form-data-select-dialog.component.html
@@ -1,11 +1,12 @@
 <p>Select data ({{ data?.schemaName }}):</p>
-
-<select [(ngModel)]="selectedID" *ngIf="data.docs && data.docs.length > 0">
-  <option class="row" *ngFor="let doc of data.docs" [value]="doc._id">
-    {{ doc._id }}
-  </option>
-</select>
-
-<br><br>
-<button mat-flat-button (click)="loadData()" color="primary">Load Data</button>
-<button mat-flat-button (click)="cancel()">Cancel</button>
+<mat-dialog-actions>
+  <select [(ngModel)]="selectedID" *ngIf="data.docs && data.docs.length > 0">
+    <option class="row" *ngFor="let doc of data.docs" [value]="doc._id">
+      {{ doc._id }}
+    </option>
+  </select>
+</mat-dialog-actions>
+<mat-dialog-actions>
+  <button mat-flat-button (click)="loadData()" color="primary">Load Data</button>
+  <button mat-flat-button (click)="cancel()">Cancel</button>
+</mat-dialog-actions>
diff --git a/src/app/dialogs/form-select-dialog/form-select-dialog.component.html b/src/app/dialogs/form-select-dialog/form-select-dialog.component.html
index b8d03d12..7804f6c5 100644
--- a/src/app/dialogs/form-select-dialog/form-select-dialog.component.html
+++ b/src/app/dialogs/form-select-dialog/form-select-dialog.component.html
@@ -1,28 +1,30 @@
 <p class="mat-typography">Load form from Adapter:</p>
-<ng-container *ngIf="adapters$ | async as adapters">
+<mat-dialog-content>
+  <ng-container *ngIf="adapters$ | async as adapters">

-  <select [(ngModel)]="selectedAdapter" (ngModelChange)="selectedForm = ''">
-    <option class="row" *ngFor="let adapter of adapters | objectKeys | orderKeys" [value]="adapter">
-      <ng-container *ngIf="adapters[adapter] as config">{{ config?.adapter?.name }}</ng-container>
-    </option>
-  </select>
+    <select [(ngModel)]="selectedAdapter" (ngModelChange)="selectedForm = ''">
+      <option class="row" *ngFor="let adapter of adapters | objectKeys | orderKeys" [value]="adapter">
+        <ng-container *ngIf="adapters[adapter] as config">{{ config?.adapter?.name }}</ng-container>
+      </option>
+    </select>

-  <ng-container *ngIf="adapters[selectedAdapter]">
-    <ng-container *ngIf="adapters[selectedAdapter]['adapter'] as adapterConfig">
-      <ng-container *ngIf="adapterConfig['forms'] as formConfig; else noForms">
-        <select [(ngModel)]="selectedForm">
-          <option *ngFor="let formId of formConfig | objectKeys" [value]="formId">
-            {{ formId }}
-          </option>
-        </select>
+    <ng-container *ngIf="adapters[selectedAdapter]">
+      <ng-container *ngIf="adapters[selectedAdapter]['adapter'] as adapterConfig">
+        <ng-container *ngIf="adapterConfig['forms'] as formConfig; else noForms">
+          <select [(ngModel)]="selectedForm">
+            <option *ngFor="let formId of formConfig | objectKeys" [value]="formId">
+              {{ formId }}
+            </option>
+          </select>
+        </ng-container>
       </ng-container>
     </ng-container>
-  </ng-container>
-
-</ng-container>

-<ng-template #noForms>No forms</ng-template>
+  </ng-container>

-<br><br>
-<button mat-flat-button (click)="loadForm()" color="primary">Load Form</button>
-<button mat-flat-button (click)="cancel()">Cancel</button>
+  <ng-template #noForms>No forms</ng-template>
+</mat-dialog-content>
+<mat-dialog-actions>
+  <button mat-flat-button (click)="loadForm()" color="primary">Load Form</button>
+  <button mat-flat-button (click)="cancel()">Cancel</button>
+</mat-dialog-actions>
diff --git a/src/app/dialogs/import-progress-dialog/import-progress-dialog.component.html b/src/app/dialogs/import-progress-dialog/import-progress-dialog.component.html
index 2e29961b..b859fc91 100644
--- a/src/app/dialogs/import-progress-dialog/import-progress-dialog.component.html
+++ b/src/app/dialogs/import-progress-dialog/import-progress-dialog.component.html
@@ -1,2 +1,4 @@
 <h1 mat-dialog-title>Importing...</h1>
-<mat-progress-bar mode="determinate" [value]="progress"></mat-progress-bar>
+<mat-dialog-content>
+    <mat-progress-bar mode="determinate" [value]="progress"></mat-progress-bar>
+</mat-dialog-content>
diff --git a/src/app/dialogs/load-workflow-dialog/load-workflow-dialog.component.html b/src/app/dialogs/load-workflow-dialog/load-workflow-dialog.component.html
index 5c3512da..7dcca37a 100644
--- a/src/app/dialogs/load-workflow-dialog/load-workflow-dialog.component.html
+++ b/src/app/dialogs/load-workflow-dialog/load-workflow-dialog.component.html
@@ -1,4 +1,4 @@
-<div>
+<mat-dialog-content>
   <mat-form-field style="width: 450px;">
     <mat-label>Select configuration</mat-label>
     <mat-select #configSelect>
@@ -7,9 +7,11 @@
       </mat-option>
     </mat-select>
   </mat-form-field>
-</div>
-<br>
-<button mat-flat-button color="primary" (click)="onLoad(configSelect.value)" style="margin-right: 1em;">Load</button>
-<button mat-flat-button (click)="onCancel()">Cancel</button>
-<br>
+</mat-dialog-content>
+
+<mat-dialog-actions>
+  <button mat-flat-button color="primary" (click)="onLoad(configSelect.value)" style="margin-right: 1em;">Load</button>
+  <button mat-flat-button (click)="onCancel()">Cancel</button>
+</mat-dialog-actions>
+
 <mat-spinner *ngIf="isLoading"></mat-spinner>
diff --git a/src/app/dialogs/paste-config-dialog/paste-config-dialog.component.html b/src/app/dialogs/paste-config-dialog/paste-config-dialog.component.html
index b553aefb..3756f7c2 100644
--- a/src/app/dialogs/paste-config-dialog/paste-config-dialog.component.html
+++ b/src/app/dialogs/paste-config-dialog/paste-config-dialog.component.html
@@ -1,6 +1,9 @@
-<p class="mat-typography">Paste config:</p>
-<textarea #textBox class="config-text-box">
-</textarea>
-<br>
-<button mat-flat-button (click)="dialogRef.close()">Cancel</button>
-<button mat-flat-button color="primary" (click)="dialogRef.close(textBox.value)">Import...</button>
+<mat-dialog-content>
+    <p class="mat-typography">Paste config:</p>
+    <textarea #textBox class="config-text-box">
+    </textarea>
+</mat-dialog-content>
+<mat-dialog-actions>
+    <button mat-flat-button (click)="dialogRef.close()">Cancel</button>
+    <button mat-flat-button color="primary" (click)="dialogRef.close(textBox.value)">Import...</button>
+</mat-dialog-actions>
diff --git a/src/app/dialogs/save-workflow-dialog/save-workflow-dialog.component.html b/src/app/dialogs/save-workflow-dialog/save-workflow-dialog.component.html
index ac403042..0ebe0792 100644
--- a/src/app/dialogs/save-workflow-dialog/save-workflow-dialog.component.html
+++ b/src/app/dialogs/save-workflow-dialog/save-workflow-dialog.component.html
@@ -1,21 +1,29 @@
 <div *ngIf="isLoggedIn; else notLoggedIn">
-  <div *ngIf="hasId" class="mat-typography">
-    <p>
-      Workflow ID: {{ data.adapterName }}/{{ data.id }}
-    </p>
-  </div>
-  <button mat-flat-button color="primary" (click)="onSave()" style="margin-right: 1em;">Save as new</button>
-  <button mat-flat-button color="primary" [disabled]="!hasId" (click)="onUpdate()" style="margin-right: 1em;">Update existing</button>
-  <button mat-flat-button (click)="onCancel()">Cancel</button>
+  <mat-dialog-content>
+    <div *ngIf="hasId" class="mat-typography">
+      <p>
+        Workflow ID: {{ data.adapterName }}/{{ data.id }}
+      </p>
+    </div>
+  </mat-dialog-content>
+  <mat-dialog-actions>
+    <button mat-flat-button color="primary" (click)="onSave()" style="margin-right: 1em;">Save as new</button>
+    <button mat-flat-button color="primary" [disabled]="!hasId" (click)="onUpdate()" style="margin-right: 1em;">Update existing</button>
+    <button mat-flat-button (click)="onCancel()">Cancel</button>
+  </mat-dialog-actions>
 </div>

 <ng-template #notLoggedIn>
-  <div class="mat-typography">
-    <p>
-      Please login to save workflows.
-    </p>
-  </div>
-  <button mat-flat-button (click)="onCancel()">Cancel</button>
+  <mat-dialog-content>
+    <div class="mat-typography">
+      <p>
+        Please login to save workflows.
+      </p>
+    </div>
+  </mat-dialog-content>
+  <mat-dialog-actions>
+    <button mat-flat-button (click)="onCancel()">Cancel</button>
+  </mat-dialog-actions>
 </ng-template>

 <mat-spinner *ngIf="isLoading"></mat-spinner>
diff --git a/src/app/dialogs/show-share-link-dialog/show-share-link-dialog.component.html b/src/app/dialogs/show-share-link-dialog/show-share-link-dialog.component.html
index c7a8970a..9cde7dc4 100644
--- a/src/app/dialogs/show-share-link-dialog/show-share-link-dialog.component.html
+++ b/src/app/dialogs/show-share-link-dialog/show-share-link-dialog.component.html
@@ -1,16 +1,27 @@
-<button mat-flat-button (click)="shareMode='flow'">Share flow</button>
-<button mat-flat-button (click)="shareMode='database'">Share database</button>
+<mat-dialog-actions>
+  <button mat-flat-button (click)="shareMode='flow'">Share flow</button>
+  <button mat-flat-button (click)="shareMode='database'">Share database</button>
+</mat-dialog-actions>
+
 <div *ngIf="shareMode=='flow'">
-  <p class="mat-typography">Share the following flow link:</p>
-  <textarea #textBox readonly="readonly">{{flowShareLink}}</textarea><br>
-  <button mat-flat-button (click)="textBox.focus();textBox.select()">Select all</button>
-  <button mat-flat-button (click)="copyText()">Copy link</button>
+  <mat-dialog-content>
+    <p class="mat-typography">Share the following flow link:</p>
+    <textarea #textBox readonly="readonly">{{flowShareLink}}</textarea><br>
+  </mat-dialog-content>
+  <mat-dialog-actions>
+    <button mat-flat-button (click)="textBox.focus();textBox.select()">Select all</button>
+    <button mat-flat-button (click)="copyText()">Copy link</button>
+  </mat-dialog-actions>
 </div>

 <div *ngIf="shareMode=='database'">
-    <p class="mat-typography">Share the following database link:</p>
-    <textarea #textBox readonly="readonly">{{dbShareLink}}</textarea><br>
-    <button mat-flat-button (click)="textBox.focus();textBox.select()">Select all</button>
-    <button mat-flat-button (click)="copyText()">Copy link</button>
+  <mat-dialog-content>
+      <p class="mat-typography">Share the following database link:</p>
+      <textarea #textBox readonly="readonly">{{dbShareLink}}</textarea><br>
+    </mat-dialog-content>
+    <mat-dialog-actions>
+      <button mat-flat-button (click)="textBox.focus();textBox.select()">Select all</button>
+      <button mat-flat-button (click)="copyText()">Copy link</button>
+    </mat-dialog-actions>
   </div>

diff --git a/src/app/dialogs/swagger-form-select-dialog/swagger-form-select-dialog.component.html b/src/app/dialogs/swagger-form-select-dialog/swagger-form-select-dialog.component.html
index d7afd3ee..9384aa8c 100644
--- a/src/app/dialogs/swagger-form-select-dialog/swagger-form-select-dialog.component.html
+++ b/src/app/dialogs/swagger-form-select-dialog/swagger-form-select-dialog.component.html
@@ -1,26 +1,28 @@
 <p class="mat-typography">Load form from Swagger:</p>
-<ng-container *ngIf="adapters$ | async as adapters">
+<mat-dialog-content>
+  <ng-container *ngIf="adapters$ | async as adapters">

-  <select [(ngModel)]="selectedAdapter" (ngModelChange)="selectedForm = ''">
-    <option class="row" *ngFor="let adapter of adapters | objectKeys | orderKeys" [value]="adapter">
-      <ng-container>{{ adapter }}</ng-container>
-    </option>
-  </select>
+    <select [(ngModel)]="selectedAdapter" (ngModelChange)="selectedForm = ''">
+      <option class="row" *ngFor="let adapter of adapters | objectKeys | orderKeys" [value]="adapter">
+        <ng-container>{{ adapter }}</ng-container>
+      </option>
+    </select>

-  <ng-container *ngIf="adapters[selectedAdapter] as swaggerConfig">
-    <ng-container *ngIf="swaggerConfig['definitions'] as definitionsConfig; else noForms">
-      <select [(ngModel)]="selectedForm">
-        <option *ngFor="let formId of definitionsConfig | objectKeys" [value]="formId">
-          {{ formId }}
-        </option>
-      </select>
+    <ng-container *ngIf="adapters[selectedAdapter] as swaggerConfig">
+      <ng-container *ngIf="swaggerConfig['definitions'] as definitionsConfig; else noForms">
+        <select [(ngModel)]="selectedForm">
+          <option *ngFor="let formId of definitionsConfig | objectKeys" [value]="formId">
+            {{ formId }}
+          </option>
+        </select>
+      </ng-container>
     </ng-container>
-  </ng-container>
-
-</ng-container>

-<ng-template #noForms>No Swagger config</ng-template>
+  </ng-container>

-<br><br>
-<button mat-flat-button (click)="loadForm()" color="primary">Load Form</button>
-<button mat-flat-button (click)="cancel()">Cancel</button>
+  <ng-template #noForms>No Swagger config</ng-template>
+</mat-dialog-content>
+<mat-dialog-actions>
+  <button mat-flat-button (click)="loadForm()" color="primary">Load Form</button>
+  <button mat-flat-button (click)="cancel()">Cancel</button>
+</mat-dialog-actions>
\ No newline at end of file
diff --git a/src/app/form-controls/formly-card-list/formly-card-list.component.html b/src/app/form-controls/formly-card-list/formly-card-list.component.html
index a0f0f446..9623a60d 100644
--- a/src/app/form-controls/formly-card-list/formly-card-list.component.html
+++ b/src/app/form-controls/formly-card-list/formly-card-list.component.html
@@ -1,6 +1,6 @@

 <ng-container *ngIf="field.fieldGroup.length > 0">
-  <mat-card *ngFor="let currentField of field.fieldGroup; let i = index;">
+  <mat-card appearance="outlined" *ngFor="let currentField of field.fieldGroup; let i = index;">
     <button mat-flat-button (click)="remove(i)">
       <mat-icon>delete</mat-icon>
       <span class="button-label">Remove {{ field.templateOptions?.uiSchema["ui:cardItemLabel"] }}</span>
diff --git a/src/app/form-controls/formly-card-list/formly-card-list.component.scss b/src/app/form-controls/formly-card-list/formly-card-list.component.scss
index 08577110..e69de29b 100644
--- a/src/app/form-controls/formly-card-list/formly-card-list.component.scss
+++ b/src/app/form-controls/formly-card-list/formly-card-list.component.scss
@@ -1,3 +0,0 @@
-mat-card {
-  margin-bottom: 1em;
-}
diff --git a/src/app/forms/teosto-user-form/teosto-user-form.component.html b/src/app/forms/teosto-user-form/teosto-user-form.component.html
index 2f5f8519..38e8912d 100644
--- a/src/app/forms/teosto-user-form/teosto-user-form.component.html
+++ b/src/app/forms/teosto-user-form/teosto-user-form.component.html
@@ -1,3 +1,3 @@
-<mat-card>
+<mat-card appearance="outlined">
   <app-generic-form adapter="teosto" formId="profile" [model]="model"></app-generic-form>
 </mat-card>
diff --git a/src/app/forms/teosto-user-form/teosto-user-form.component.scss b/src/app/forms/teosto-user-form/teosto-user-form.component.scss
index 08577110..e69de29b 100644
--- a/src/app/forms/teosto-user-form/teosto-user-form.component.scss
+++ b/src/app/forms/teosto-user-form/teosto-user-form.component.scss
@@ -1,3 +0,0 @@
-mat-card {
-  margin-bottom: 1em;
-}
diff --git a/src/app/forms/user-ipn-form/user-ipn-form.component.html b/src/app/forms/user-ipn-form/user-ipn-form.component.html
index 19fcefa7..5c6faa50 100644
--- a/src/app/forms/user-ipn-form/user-ipn-form.component.html
+++ b/src/app/forms/user-ipn-form/user-ipn-form.component.html
@@ -1,4 +1,4 @@
-<mat-card *ngIf="isFormLoaded">
+<mat-card appearance="outlined" *ngIf="isFormLoaded">
 <!--  <h3>{{ formLabel }}</h3>-->
 <!--  <p>{{ formDescription }}</p>-->

diff --git a/src/app/forms/user-ipn-form/user-ipn-form.component.scss b/src/app/forms/user-ipn-form/user-ipn-form.component.scss
index 08577110..e69de29b 100644
--- a/src/app/forms/user-ipn-form/user-ipn-form.component.scss
+++ b/src/app/forms/user-ipn-form/user-ipn-form.component.scss
@@ -1,3 +0,0 @@
-mat-card {
-  margin-bottom: 1em;
-}
diff --git a/src/app/messages/messages.component.html b/src/app/messages/messages.component.html
index e95102f5..483a0c68 100644
--- a/src/app/messages/messages.component.html
+++ b/src/app/messages/messages.component.html
@@ -3,7 +3,7 @@



-    <mat-card  *ngFor="let message of messageService.messages; let i=index" (click)="closeMe(i)"  @enterAnimateUpDwn
+    <mat-card  appearance="outlined"  *ngFor="let message of messageService.messages; let i=index" (click)="closeMe(i)"  @enterAnimateUpDwn
     [ngClass]="message.cssClass" >
         <mat-card-header>
           <mat-card-title i18n="@@helpdesk">Help Desk</mat-card-title>
diff --git a/src/app/pages/adapters-page/adapters-page.component.html b/src/app/pages/adapters-page/adapters-page.component.html
index 766fc099..5d7a7c34 100644
--- a/src/app/pages/adapters-page/adapters-page.component.html
+++ b/src/app/pages/adapters-page/adapters-page.component.html
@@ -6,7 +6,7 @@
 <section class="row" *ngIf="adapters$ | async as adapters">

   <div *ngFor="let adapter of adapters | objectKeys" class="col-sm-12 col-md-6 col-lg-4">
-    <mat-card *ngIf="adapters[adapter] as config">
+    <mat-card appearance="outlined" *ngIf="adapters[adapter] as config">
       <mat-card-title>
         {{ config.adapter.title }} [{{ config.adapter.name }}]
       </mat-card-title>
diff --git a/src/app/pages/adapters-page/adapters-page.component.scss b/src/app/pages/adapters-page/adapters-page.component.scss
index 2fb19cd0..54bc5ad3 100644
--- a/src/app/pages/adapters-page/adapters-page.component.scss
+++ b/src/app/pages/adapters-page/adapters-page.component.scss
@@ -1,6 +1,4 @@
-mat-card {
-  margin-bottom: 1em;
-}
+
 .adapter-buttons {
   button {
     margin-right: 0.5em;
diff --git a/src/app/pages/blocks-builder-page/blocks-builder-page.component.scss b/src/app/pages/blocks-builder-page/blocks-builder-page.component.scss
index 7161329d..e78dc008 100644
--- a/src/app/pages/blocks-builder-page/blocks-builder-page.component.scss
+++ b/src/app/pages/blocks-builder-page/blocks-builder-page.component.scss
@@ -1,9 +1,3 @@
-
-mat-card {
-  margin-bottom: 1em;
-}
-
-
 .button-label {
   margin-left: 0.5em;
 }
diff --git a/src/app/pages/bloomen-search-page/bloomen-search-page.component.html b/src/app/pages/bloomen-search-page/bloomen-search-page.component.html
index 75d665dd..63c73da1 100644
--- a/src/app/pages/bloomen-search-page/bloomen-search-page.component.html
+++ b/src/app/pages/bloomen-search-page/bloomen-search-page.component.html
@@ -13,13 +13,13 @@
 </div>

 <div *ngIf="results && results.length > 0">
-  <mat-card *ngFor="let r of results">
+  <mat-card appearance="outlined" *ngFor="let r of results">
     <pre style="font-size: 0.75em">{{ r | json }}</pre>
   </mat-card>
 </div>

 <ng-template #noAuth>
-  <mat-card>
+  <mat-card appearance="outlined">
     <p>
       No authorisation found for Bloomen API. Please enter Auth on <a routerLink="/user">account page</a>.
     </p>
diff --git a/src/app/pages/bloomen-search-page/bloomen-search-page.component.scss b/src/app/pages/bloomen-search-page/bloomen-search-page.component.scss
index cea28d2b..c7acb4bf 100644
--- a/src/app/pages/bloomen-search-page/bloomen-search-page.component.scss
+++ b/src/app/pages/bloomen-search-page/bloomen-search-page.component.scss
@@ -1,6 +1,3 @@
 mat-form-field {
   width: 100%;
 }
-mat-card {
-  margin-bottom: 1em;
-}
diff --git a/src/app/pages/bloomen-test-page/bloomen-test-page.component.html b/src/app/pages/bloomen-test-page/bloomen-test-page.component.html
index 42fe172a..4cb8cf0c 100644
--- a/src/app/pages/bloomen-test-page/bloomen-test-page.component.html
+++ b/src/app/pages/bloomen-test-page/bloomen-test-page.component.html
@@ -2,7 +2,7 @@
   <h2>Import from Bloomen API</h2>
 </div>

-<mat-card>
+<mat-card appearance="outlined">
   <mat-form-field style="margin-right: 1em;">
     <mat-select placeholder="Example user" [(ngModel)]="activeUser">
       <mat-option [value]="'Publisher'">Publisher</mat-option>
@@ -12,7 +12,7 @@
   <button mat-flat-button (click)="login()" color="primary" type="button">Login as selected user</button>
 </mat-card>

-<mat-card *ngIf="userInfo$">
+<mat-card appearance="outlined" *ngIf="userInfo$">
   <button class="button-row-item" mat-flat-button color="primary" type="button" (click)="importPhotos()">Import Photos</button>
   <button *ngIf="activeUser == 'Publisher'" mat-flat-button color="primary" type="button" (click)="importUsers()">Import Users</button>
   <pre>{{ userInfo$ | async | json }}</pre>
diff --git a/src/app/pages/connect/connect.component.html b/src/app/pages/connect/connect.component.html
index f6ddd57b..c36344d3 100644
--- a/src/app/pages/connect/connect.component.html
+++ b/src/app/pages/connect/connect.component.html
@@ -1,18 +1,11 @@
-
-
 <div *ngIf="isLoading">
   <p>Loading...</p>
 </div>
 <app-grid-block *ngIf="!isLoading" [config]="config" [model]="connectionManager.flows"></app-grid-block>

-
 <div class="preview-message">
-  <!--link to previous version of user page-->
-<!--  <p>-->
-<!--    You are viewing a preview of the new connect page-->
-<!--  </p>-->
-  <div>
-    <button mat-icon-button routerLink="/user"><mat-icon>person</mat-icon>
-      click here for the old account page</button>
-  </div>
+    <a routerLink="/user">
+      <mat-icon>person</mat-icon>
+      <span>click here for the old account page</span>
+    </a>
 </div>
diff --git a/src/app/pages/connect/connect.component.scss b/src/app/pages/connect/connect.component.scss
index 59449d34..5d4a67df 100644
--- a/src/app/pages/connect/connect.component.scss
+++ b/src/app/pages/connect/connect.component.scss
@@ -1,13 +1,12 @@
-.preview-message {
-  font-size: 0.75rem;
-  margin-bottom: 1rem;
-  margin-top: 1rem;
-  padding: 0.5rem;
-  background-color: #f7fafc;
-  display: flex;
-  justify-content: flex-start;
-  align-items: center;
+.preview-message a {
+  color: black;
+  text-decoration: none;
 }
-.preview-message p {
-  margin: 0 1rem 0 0;
+
+.preview-message .mat-icon {
+  padding-top: 2px;
 }
+
+.preview-message span {
+  padding-left: 10px;
+}
\ No newline at end of file
diff --git a/src/app/pages/settings-page/settings-page.component.html b/src/app/pages/settings-page/settings-page.component.html
index f3fb4b71..01fac36c 100644
--- a/src/app/pages/settings-page/settings-page.component.html
+++ b/src/app/pages/settings-page/settings-page.component.html
@@ -1,4 +1,4 @@
-<mat-card>
+<mat-card appearance="outlined">
   <p>
     Delete all data...
   </p>
@@ -7,7 +7,7 @@
   <button (click)="resetApp()" mat-raised-button color="warn">Reset App</button>
 </mat-card>

-<mat-card>
+<mat-card appearance="outlined">
   <p>Debug mode <b>{{ isDebug ? 'enabled' : 'disabled' }}</b></p>

   <button mat-raised-button color="primary" (click)="toggleDebugMode()">Toggle debug mode</button>
@@ -16,7 +16,7 @@



-<mat-card>
+<mat-card appearance="outlined">
   <p>Show Help<b> {{ showHelp ? 'on' : 'off' }}</b></p>

   <button mat-raised-button color="primary" (click)="toggleShowHelp()">Toggle Show Help</button>
diff --git a/src/app/pages/settings-page/settings-page.component.scss b/src/app/pages/settings-page/settings-page.component.scss
index 08577110..e69de29b 100644
--- a/src/app/pages/settings-page/settings-page.component.scss
+++ b/src/app/pages/settings-page/settings-page.component.scss
@@ -1,3 +0,0 @@
-mat-card {
-  margin-bottom: 1em;
-}
diff --git a/src/app/pages/test-api-page/test-api-page.component.html b/src/app/pages/test-api-page/test-api-page.component.html
index 2c6ea7fa..9a658934 100644
--- a/src/app/pages/test-api-page/test-api-page.component.html
+++ b/src/app/pages/test-api-page/test-api-page.component.html
@@ -2,7 +2,7 @@
   <h2>Temporary page to test API</h2>
 </div>

-<mat-card *ngIf="entityTypes$ | async as entityTypeList">
+<mat-card appearance="outlined" *ngIf="entityTypes$ | async as entityTypeList">
   <mat-form-field style="margin-right: 1em;">
     <mat-select placeholder="Entity type" (valueChange)="changeEntityType($event)">
       <mat-option *ngFor="let type of entityTypeList" [value]="type">
@@ -13,7 +13,7 @@
   <button mat-flat-button [disabled]="isLoadingAll" (click)="importEverything()" color="primary" type="button">Import all</button>
 </mat-card>

-<mat-card *ngIf="entityList$ | async as entityList">
+<mat-card appearance="outlined" *ngIf="entityList$ | async as entityList">
   <mat-form-field style="margin-right: 0.5em;">
     <mat-select placeholder="Entity ID" (valueChange)="changeEntity($event)">
       <mat-option *ngFor="let entity of entityList" [value]="entity.id">
@@ -26,10 +26,10 @@
   <button mat-flat-button (click)="importAll()" color="primary" type="button">Import all {{ selectedType }}</button>
 </mat-card>

-<mat-card *ngIf="selectedEntity$ | async as entity">
+<mat-card appearance="outlined" *ngIf="selectedEntity$ | async as entity">
   <pre>{{ entity | json }}</pre>
 </mat-card>

-<mat-card *ngIf="listAll$ | async as allItems">
+<mat-card appearance="outlined" *ngIf="listAll$ | async as allItems">
   <pre>{{ allItems | json }}</pre>
 </mat-card>
diff --git a/src/app/pages/test-api-page/test-api-page.component.scss b/src/app/pages/test-api-page/test-api-page.component.scss
index 08577110..e69de29b 100644
--- a/src/app/pages/test-api-page/test-api-page.component.scss
+++ b/src/app/pages/test-api-page/test-api-page.component.scss
@@ -1,3 +0,0 @@
-mat-card {
-  margin-bottom: 1em;
-}
diff --git a/src/app/pages/upload-page/upload-page.component.scss b/src/app/pages/upload-page/upload-page.component.scss
index fb780410..59066777 100644
--- a/src/app/pages/upload-page/upload-page.component.scss
+++ b/src/app/pages/upload-page/upload-page.component.scss
@@ -2,12 +2,9 @@
   flex: 1 1 auto;
   min-width: 2rem;
 }
+
 .upload-file,
 .upload-button {
   margin-top: 1em;
   text-align: center;
 }
-
-mat-progress-bar {
-  max-width: 70%;
-}
diff --git a/src/app/pages/user-page/user-page.component.html b/src/app/pages/user-page/user-page.component.html
index 13e0f5c3..85ed233d 100644
--- a/src/app/pages/user-page/user-page.component.html
+++ b/src/app/pages/user-page/user-page.component.html
@@ -1,6 +1,6 @@


-<mat-card *ngIf="isAuthenticated; else notLoggedIn">
+<mat-card appearance="outlined" *ngIf="isAuthenticated; else notLoggedIn">
   <h3>Identities</h3>

   <p>You are logged in as <em>{{ profile?.nickname }}</em></p>
@@ -33,7 +33,7 @@
 </mat-card>

 <ng-template #notLoggedIn>
-  <mat-card>
+  <mat-card appearance="outlined">
     <h3>Connected Profiles</h3>

     <p>No profiles are saved on this device. You can connect multiple profiles by
diff --git a/src/app/pages/user-page/user-page.component.scss b/src/app/pages/user-page/user-page.component.scss
index 15308976..1f661aff 100644
--- a/src/app/pages/user-page/user-page.component.scss
+++ b/src/app/pages/user-page/user-page.component.scss
@@ -1,6 +1,3 @@
-mat-card {
-  margin-bottom: 1em;
-}

 .full-width-field {
   width: 100%;
diff --git a/src/app/pages/youtube-page/youtube-page.component.html b/src/app/pages/youtube-page/youtube-page.component.html
index 61510bd8..82fe035c 100644
--- a/src/app/pages/youtube-page/youtube-page.component.html
+++ b/src/app/pages/youtube-page/youtube-page.component.html
@@ -1,4 +1,4 @@
-<mat-card *ngIf="error$ | async as error" class="yt-error">
+<mat-card appearance="outlined" *ngIf="error$ | async as error" class="yt-error">
   <p>{{ error }}</p>
 </mat-card>

diff --git a/src/styles.scss b/src/styles.scss
index e76dc01e..609daddb 100644
--- a/src/styles.scss
+++ b/src/styles.scss
@@ -17,12 +17,11 @@
 //  If you specify typography styles for the components you use elsewhere, you should delete this line.
 //  If you don't need the default component typographies but still want the hierarchy styles,
 //  you can delete this line and instead use:
-//    `@include mat.legacy-typography-hierarchy(mat.define-legacy-typography-config());`

-@include mat.all-legacy-component-typographies();
-@include mat.legacy-core();
+@include mat.all-component-typographies();
+@include mat.core();
 @import '@angular/material/theming';
-@include mat-core();
+// @include mat-core();

 // Define the palettes for your theme using the Material Design palettes available in palette.scss
 // (imported above). For each palette, you can optionally specify a default, lighter, and darker
@@ -48,7 +47,7 @@ $kendraio-app-theme: mat.define-light-theme((
 // Include theme styles for core and each component used in your app.
 // Alternatively, you can import and @include the theme mixins for each component
 // that you are using.
-@include mat.all-legacy-component-themes($kendraio-app-theme);
+@include mat.all-component-themes($kendraio-app-theme);
 @include angular-material-theme($kendraio-app-theme);


@@ -62,10 +61,10 @@ body { margin: 0; font-family: Roboto, "Helvetica Neue", sans-serif; }
   margin-top: 1em;
 }

-dynamic-material-form-control .mat-form-field {
+dynamic-material-form-control .mat-mdc-form-field {
   width: 100%;
 }
-.mat-radio-button ~ .mat-radio-button {
+.mat-mdc-radio-button ~ .mat-radio-button {
   margin-left: 16px;
 }

diff --git a/src/styles/_ng-select-theme.scss b/src/styles/_ng-select-theme.scss
index 880f8f7d..ce5e0c62 100644
--- a/src/styles/_ng-select-theme.scss
+++ b/src/styles/_ng-select-theme.scss
@@ -75,7 +75,7 @@
         color: mat.get-color-from-palette($foreground, text) !important;


-        .mat-option.ng-option-selected:not(.ng-option-marked):not(:hover) {
+        .mat-mdc-option.ng-option-selected:not(.ng-option-marked):not(:hover) {
           background: mat.get-color-from-palette($background, card);

           &:not(.ng-option-disabled) {
diff --git a/src/styles/main.scss b/src/styles/main.scss
index a111a7ff..b7eaa192 100644
--- a/src/styles/main.scss
+++ b/src/styles/main.scss
@@ -10,10 +10,6 @@ Global Style Guide:

 @import "~@ng-select/ng-select/themes/material.theme.css";

-.formFieldWidth380 .mat-form-field-infix {
-  width: 380px;
-}
-
 .ken-tree-invisible {
   display: none;
   opacity: 0;
@@ -36,12 +32,6 @@ Global Style Guide:
   overflow: hidden;
 }

-.ken-tree li>ul>.mat-tree-node li,
-.mat-nested-tree-node li {
-  //   background: rgba(0, 0, 0, 0.04);
-  //  font-size: 12px
-}
-
 .mat-nested-tree-node ul li {
   min-height: 28px !important;
 }
@@ -61,22 +51,16 @@ button:focus {
   padding: 16px;
 }

-.mat-tree-node {
-  // padding-left: 16px;
-}
-
 button.active {
-  // background-color: silver!important;
   opacity: 0.4;
   cursor: default;
 }

 .menu-item--active {
-  // background: rgba(0, 0, 0, 0.2);
   background-color: whitesmoke;
 }

-.mat-menu-item {
+.mat-mdc-menu-item {
   padding: 10px 16px;
 }

@@ -147,15 +131,17 @@ button.active {
   right: 0;
 }

-.mat-menu-item {
-  text-transform: capitalize;
+.mat-drawer-side {
+  margin-left: 10px;
 }

-//  .mat-drawer,  .mat-sidenav {
-//    min-width:200px;
-//    transition: all 3s ease-in-out;
-//    position: relative!important;
-//  }
+.mat-drawer-side li .mat-icon {
+  margin-right: 10px;
+}
+
+.mat-mdc-menu-item {
+  text-transform: capitalize;
+}

 .form-container>* {
   width: 100%;
@@ -165,17 +151,16 @@ dynamic-material-form-control:not(:last-child) {
   margin-right: 40px;
 }

-.mat-menu-item .mat-icon-no-color,
-.mat-menu-item-submenu-trigger::after {
+.mat-mdc-menu-item .mat-icon-no-color,
+.mat-mdc-menu-item-submenu-trigger::after {
   color: rgba(0, 0, 0, 1);
 }

-.mat-card {
-  img {
-    object-fit: cover;
-    width: 100%;
-    margin-top: 20px;
-  }
+.mat-mdc-card {
+  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
+  display: block;
+  position: relative;
+  padding: 1em;
 }

 // HELPER CLASS
@@ -227,48 +212,13 @@ formly-field {
   }
 }

-
-.mat-form-field-type-boolean .mat-form-field-wrapper {
-  padding-bottom: 0 !important;
-  height: 44px;
-}
-
-formly-object-type formly-object-type>formly-field {
-  //margin-left: 40px
-}
-
-formly-object-type legend {
-  //margin-left: 20px
-}
-
-formly-object-type {
-  // background-color: blue;
-}
-
 formly-array-type {
-  // >.mat-card {
-  //   display: flex;
-  //   flex-wrap: wrap;
-  //   align-content: space-around ;
-  //   align-items: flex-end;
-    .mat-card {
+    .mat-mdc-card {
       margin-right: 16px;
     }
-  // }
-  mat-card-header {
-    font-size: 1.5rem;
-  }
-
-  mat-card {
-    margin-bottom: 16px
-  }

 }

-.mat-form-field{
-  margin-bottom: 1rem;
-}
-
 // Fix for cut-off Formly Material label
 .mdc-text-field--filled::before{
   content: "" !important;
@@ -287,4 +237,8 @@ formly-array-type {
   content: "(read-only)";
 }

-// Kendraio3ca31f6bcb87c68721363847192dbd57
\ No newline at end of file
+.block-comment-container {
+  width: 95%;
+  margin-left: 2%;
+  position: relative;
+}
```

## Commit: 2a52b8af380816bdbb86650bb7de87e029edae75

**Message:** upate package.json

**Author:** gio

**Date:** 2024-03-06

### Diff:

```diff

```

## Commit: 743704d0d4823141f28bbfcba80319971121cd29

**Message:** remove force:true from click (#457)

**Author:** designbygio

**Date:** 2024-03-06

### Diff:

```diff
diff --git a/cypress/e2e/gosub.ts b/cypress/e2e/gosub.ts
index ad305ff1..269b959d 100644
--- a/cypress/e2e/gosub.ts
+++ b/cypress/e2e/gosub.ts
@@ -24,7 +24,7 @@ describe('Subroutine workflow block', () => {
                 "workflowId": "madeUpFlowIDA"
             }
         ]);
-        cy.get('mat-toolbar > button mat-icon').contains('settings').click({force: true});
+        cy.get('[data-cy="toolbar-setting-button"]').click();
         cy.get("#mat-expansion-panel-header-0").click();
         // cy.pause();
         cy.get("#mat-input-0")
diff --git a/cypress/e2e/share.ts b/cypress/e2e/share.ts
index 865c7c16..29e51afe 100644
--- a/cypress/e2e/share.ts
+++ b/cypress/e2e/share.ts
@@ -36,9 +36,9 @@ describe('Share functionality', () => {
         cy.contains('Rishi');

         // Now we press the share button, and select share database:
-        cy.get('mat-icon').contains("settings").click({force: true});
-        cy.get('mat-icon').contains("share").click({force: true});
-        cy.get('button:contains("Share database")').click({force: true});
+        cy.get('[data-cy="toolbar-setting-button"]').click();
+        cy.get('[data-cy="sidenav-share-button"]').click();
+        cy.get('[data-cy="dialog-share-shareDatabase"]').click();

         // assert shareValue is in the databaseUrl
         cy.get('app-show-share-link-dialog textarea').should('contain', databaseUrl);
diff --git a/cypress/e2e/spec.ts b/cypress/e2e/spec.ts
index 21e15ca7..d4369b60 100644
--- a/cypress/e2e/spec.ts
+++ b/cypress/e2e/spec.ts
@@ -51,12 +51,12 @@ describe('workspace-project App', () => {
     cy.get('app-root mat-toolbar').contains('menu').click();
     cy.contains('Flow Builder').click();
     cy.contains('settings');
-    cy.get('mat-toolbar > button mat-icon').contains('settings').click({force: true});
+    cy.get('[data-cy="toolbar-setting-button"]').click();
     cy.get('app-workflow-sidenav').contains('delete_forever').click().get('app-workflow-sidenav').contains('Mapping').should('not.exist');
-    cy.get('app-workflow-sidenav').contains('Add Task').click({force: true});
+    cy.get('[data-cy="blocks-editor-add-task"]').click();
     cy.contains('Select Task');
     cy.get('mat-dialog-container').contains('Mapping').click();
-    cy.get('button').contains('Add Task').click({force: true});
+    cy.get('[data-cy="dialog-addBlock-addTask-button"]').click();
     cy.get('button').contains('Mapping');
   });

@@ -69,7 +69,7 @@ describe('workspace-project App', () => {
         "blockComment": "testingComment",
       }
     ]);
-    cy.get('mat-toolbar > button > mat-icon').contains('settings').click({force: true});
+    cy.get('[data-cy="toolbar-setting-button"]').click();
     cy.get('app-workflow-sidenav').contains('testingComment').should('exist');
     cy.get('app-workflow-sidenav').contains('testingComment').click();
     // cy.get('app-workflow-sidenav').contains('Block Comment'); // FIXME: regression - MatFormField placeholder text is not visible
@@ -83,7 +83,7 @@ describe('workspace-project App', () => {
         "blockComment": "testingComment first line\nComment line2",
       }
     ]);
-    cy.get('mat-toolbar > button mat-icon').contains('settings').click({force: true});
+    cy.get('[data-cy="toolbar-setting-button"]').click();
     cy.get('app-workflow-sidenav').contains('testingComment').should('exist');
     cy.get('app-workflow-sidenav').contains('line2').should('not.exist');
     cy.get('app-workflow-sidenav').contains('testingComment').click();
diff --git a/src/app/app.component.html b/src/app/app.component.html
index 7262f8bb..236ee26e 100644
--- a/src/app/app.component.html
+++ b/src/app/app.component.html
@@ -40,13 +40,15 @@
   <ng-container *ngIf="pageTitle$ | async as pageTitleData">
       <button mat-icon-button
               (click)="blocksSidePane.close()"
-              *ngIf="blocksSidePane.opened">
+              *ngIf="blocksSidePane.opened"
+              data-cy="toolbar-setting-button">
         <mat-icon>settings</mat-icon>
       </button>
       <button mat-icon-button
               (click)="blocksSidePane.open()"
               [disabled]="!pageTitleData.isWorkflow"
-              *ngIf="!blocksSidePane.opened">
+              *ngIf="!blocksSidePane.opened"
+              data-cy="toolbar-setting-button">
         <mat-icon>settings</mat-icon>
       </button>
   </ng-container>
diff --git a/src/app/components/blocks-editor/blocks-editor.component.html b/src/app/components/blocks-editor/blocks-editor.component.html
index 27f8bdef..fa265565 100644
--- a/src/app/components/blocks-editor/blocks-editor.component.html
+++ b/src/app/components/blocks-editor/blocks-editor.component.html
@@ -1,4 +1,3 @@
-
 <mat-accordion cdkDropList (cdkDropListDropped)="drop($event)">
   <mat-expansion-panel *ngFor="let block of blocks; let i = index" cdkDrag>
     <mat-expansion-panel-header>
@@ -115,7 +114,7 @@
 </mat-accordion>

 <br>
-<button mat-flat-button (click)="addBlock()">
+<button mat-flat-button (click)="addBlock()" data-cy="blocks-editor-add-task">
   <mat-icon>add</mat-icon>
   <span class="button-label">Add Task</span>
 </button>
diff --git a/src/app/components/workflow-sidenav/workflow-sidenav.component.html b/src/app/components/workflow-sidenav/workflow-sidenav.component.html
index 372b895d..08b18727 100644
--- a/src/app/components/workflow-sidenav/workflow-sidenav.component.html
+++ b/src/app/components/workflow-sidenav/workflow-sidenav.component.html
@@ -10,7 +10,7 @@
 <!--     = <button type="button" mat-icon-button (click)="workflow.clearWorkflowData()" matTooltip="Clear workflow data">-->
 <!--        <app-kendraio-icon icon="fa-eraser"></app-kendraio-icon>-->
 <!--      </button>-->
-      <button type="button" mat-icon-button (click)="workflow.shareConfig()" matTooltip="Share">
+      <button type="button" mat-icon-button (click)="workflow.shareConfig()" matTooltip="Share" data-cy="sidenav-share-button">
         <mat-icon>share</mat-icon>
       </button>
       <button type="button" mat-icon-button (click)="workflow.loadFromAdapter()" matTooltip="Load from Adapter">
diff --git a/src/app/dialogs/add-block-dialog/add-block-dialog.component.html b/src/app/dialogs/add-block-dialog/add-block-dialog.component.html
index 91098b08..d7f5b53a 100644
--- a/src/app/dialogs/add-block-dialog/add-block-dialog.component.html
+++ b/src/app/dialogs/add-block-dialog/add-block-dialog.component.html
@@ -23,6 +23,8 @@
 </div>

 <div mat-dialog-actions class="dialog-buttons">
-  <button mat-flat-button (click)="addBlock()" color="primary" [disabled]="!selectedBlockType">Add Task</button>
+  <button mat-flat-button (click)="addBlock()" color="primary" [disabled]="!selectedBlockType" data-cy="dialog-addBlock-addTask-button">
+    Add Task
+  </button>
   <button mat-flat-button (click)="cancel()" cdkFocusInitial>Cancel</button>
 </div>
diff --git a/src/app/dialogs/show-share-link-dialog/show-share-link-dialog.component.html b/src/app/dialogs/show-share-link-dialog/show-share-link-dialog.component.html
index 9cde7dc4..f7fd5e98 100644
--- a/src/app/dialogs/show-share-link-dialog/show-share-link-dialog.component.html
+++ b/src/app/dialogs/show-share-link-dialog/show-share-link-dialog.component.html
@@ -1,6 +1,6 @@
 <mat-dialog-actions>
   <button mat-flat-button (click)="shareMode='flow'">Share flow</button>
-  <button mat-flat-button (click)="shareMode='database'">Share database</button>
+  <button mat-flat-button (click)="shareMode='database'" data-cy="dialog-share-shareDatabase">Share database</button>
 </mat-dialog-actions>

 <div *ngIf="shareMode=='flow'">
```

## Commit: 507d449be266123b96dbba8b1a32d6f9472edfec

**Message:** fix style in Audio control component

**Author:** gio

**Date:** 2024-03-13

### Diff:

```diff
diff --git a/src/app/form-controls/audio-input-control/audio-input-control.component.html b/src/app/form-controls/audio-input-control/audio-input-control.component.html
index 4fb57050..a5c9aa49 100644
--- a/src/app/form-controls/audio-input-control/audio-input-control.component.html
+++ b/src/app/form-controls/audio-input-control/audio-input-control.component.html
@@ -14,7 +14,7 @@
 <ul>
   <li *ngFor="let d of clipControl.value; index as i">
     <div class="dragging-container" [appTrackClip]="d" (clipUpdate)="onClipUpdate(i, $event)">
-      {{ d.name }}
+      <span>{{ d.name }}</span>
       <div class="clip-buttons">
         <button (click)="editClip(i)" type="button" mat-icon-button>
           <mat-icon aria-label="Edit clip">settings</mat-icon>
@@ -27,10 +27,9 @@
   </li>
 </ul>

-<br>
 <mat-form-field>
-<input matInput type="text" (keydown.enter)="add(name.value); name.value = ''" #name placeholder="Add clip">
-<mat-icon matSuffix (click)="add(name.value); name.value = ''">add_box</mat-icon>
+  <input matInput type="text" (keydown.enter)="add(name.value); name.value = ''" #name placeholder="Add clip">
+  <mat-icon matSuffix (click)="add(name.value); name.value = ''">add_box</mat-icon>
 </mat-form-field>

 <div style="display: block;">
diff --git a/src/app/form-controls/audio-input-control/audio-input-control.component.scss b/src/app/form-controls/audio-input-control/audio-input-control.component.scss
index 8fd97990..3a921790 100644
--- a/src/app/form-controls/audio-input-control/audio-input-control.component.scss
+++ b/src/app/form-controls/audio-input-control/audio-input-control.component.scss
@@ -5,7 +5,6 @@ input[type='file'] {
 ul {
    list-style: none;
    user-select: none;
-   margin: 0;
    padding: 0;
 }

@@ -18,32 +17,10 @@ li {
   margin-bottom: 0.3em;
 }

-.clip-buttons {
-  background-color: #ccf;
-  position: absolute;
-  right: 0;
-  top: 0;
-  padding-right: 12px;
-}
-
 .dragging-container {
-  position: relative;
-  display: block;
+  display: flex;
+  justify-content: space-between;
+  align-items: center;
   background-color: #ccf;
-  padding-left: 12px;
-  overflow: hidden;
-  height: 2.5em;
-  line-height: 2.5em;
-
-  -ms-touch-action: none;
-  touch-action: none;
-
-  button {
-    width: 20px;
-    height: 20px;
-
-    mat-icon {
-      font-size: 20px;
-    }
-  }
+  padding: 6px 0px 6px 18px;
 }
```

## Commit: 8417ac727192f47b12efa18ce8a36a20bdd70567

**Message:** clean up track-clip directive, fix resizable and draggable

**Author:** gio

**Date:** 2024-03-22

### Diff:

```diff
diff --git a/src/app/directives/track-clip.directive.ts b/src/app/directives/track-clip.directive.ts
index 9f7e09e5..9ed47879 100644
--- a/src/app/directives/track-clip.directive.ts
+++ b/src/app/directives/track-clip.directive.ts
@@ -1,14 +1,20 @@
-import { AfterViewInit, Directive, ElementRef, EventEmitter, HostBinding, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
+import {
+  AfterViewInit,
+  Directive,
+  ElementRef,
+  EventEmitter,
+  HostBinding,
+  Input,
+  Output
+} from '@angular/core';
 import * as interact_ from 'interactjs';
+
 const interact = interact_ as any;

 @Directive({
   selector: '[appTrackClip]'
 })
-export class TrackClipDirective implements AfterViewInit, OnChanges {
-
-  @Input('appTrackClip') clip;
-
+export class TrackClipDirective implements AfterViewInit {
   @HostBinding('style.margin-left.%')
   _start = 0;

@@ -18,22 +24,7 @@ export class TrackClipDirective implements AfterViewInit, OnChanges {
   @Output() clipUpdate = new EventEmitter<{ start: number, end: number }>();

   constructor(private el: ElementRef) { }
-
-  ngOnChanges(changes: SimpleChanges) {
-    // console.log({ changes });
-    const { clip: { currentValue: { start, end } }} = changes;
-    this.setStart(start);
-    this.setEnd(end);
-  }
-
-  setStart(startPercent) {
-    this._start = startPercent;
-  }
-
-  setEnd(endPercent) {
-    this._end = (100 - endPercent);
-  }
-
+
   ngAfterViewInit() {
     interact(this.el.nativeElement)
       .draggable({
@@ -42,43 +33,32 @@ export class TrackClipDirective implements AfterViewInit, OnChanges {
           restriction: 'parent',
           elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
         },
-        onmove: event => {
-          const { dx } = event;
-          const node = this.el.nativeElement as HTMLSpanElement;
-          const { clientWidth } = node.parentElement;
-          this._start += (dx / clientWidth) * 100;
-          this._end -= (dx / clientWidth) * 100;
-        },
-        onend: event => {
-          this.sendValue(event);
+        listeners: {
+          move: event => {
+            let { rect } = (event as any)
+            event.target.style.transform = `translate(${rect.left}px, 0)`
+          }
         }
       } as any)
       .resizable({
         edges: { top: false, bottom: false, left: true, right: true },
         restrictEdges: { outer: 'parent' },
         restrictSize: {
-          min: { width: 50, height: 19 },
-        },
-        onmove: event => {
-          const w = (event as any).rect.width;
-          const dx = (event as any).deltaRect.left;
-
-          const node = this.el.nativeElement as HTMLLIElement;
-          const { clientWidth } = node.parentElement;
-
-          this._start += (dx / clientWidth) * 100;
-          this.setEnd(this._start + (w / clientWidth) * 100);
+          min: { width: 200 },
         },
-        onend: event => {
-          this.sendValue(event);
+        listeners: {
+          move: event => {
+            let { x } = (event as any).target.dataset
+            x = (parseFloat(x) || 0) + (event as any).deltaRect.left
+
+            Object.assign((event as any).target.style, {
+              width: `${(event as any).rect.width}px`,
+              transform: `translate(${x}px`
+            })
+
+            Object.assign(event.target.dataset, { x })
+          }
         }
       } as any);
   }
-
-  sendValue(event) {
-    this.clipUpdate.emit({
-      start: Math.max(this._start, 0),
-      end: 100 - this._end
-    });
-  }
 }
diff --git a/src/app/form-controls/audio-input-control/audio-input-control.component.html b/src/app/form-controls/audio-input-control/audio-input-control.component.html
index a5c9aa49..fda1eaa8 100644
--- a/src/app/form-controls/audio-input-control/audio-input-control.component.html
+++ b/src/app/form-controls/audio-input-control/audio-input-control.component.html
@@ -29,7 +29,7 @@

 <mat-form-field>
   <input matInput type="text" (keydown.enter)="add(name.value); name.value = ''" #name placeholder="Add clip">
-  <mat-icon matSuffix (click)="add(name.value); name.value = ''">add_box</mat-icon>
+  <mat-icon matSuffix (click)="add(name.value); name.value = ''" class="add-icon">add_box</mat-icon>
 </mat-form-field>

 <div style="display: block;">
diff --git a/src/app/form-controls/audio-input-control/audio-input-control.component.scss b/src/app/form-controls/audio-input-control/audio-input-control.component.scss
index 3a921790..992eea6a 100644
--- a/src/app/form-controls/audio-input-control/audio-input-control.component.scss
+++ b/src/app/form-controls/audio-input-control/audio-input-control.component.scss
@@ -17,10 +17,23 @@ li {
   margin-bottom: 0.3em;
 }

+.clip-buttons {
+  margin-right: 20px
+}
+
+.add-icon {
+  margin-right: 20px;
+}
+
 .dragging-container {
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-color: #ccf;
   padding: 6px 0px 6px 18px;
+
+  // Suggested rules from interactjs documentation
+  // https://github.com/taye/interact.js/blob/824037570b88a2df84b5fcfc9600c19e332f89a9/docs/resizable.md?plain=1#L65
+  touch-action: none;
+  box-sizing: border-box;
 }
```

## Commit: f05a3a98773d18dac4be0330fc6dc5688ebd2c5f

**Message:** fix draggable, use ngOnInit

**Author:** gio

**Date:** 2024-03-25

### Diff:

```diff
diff --git a/src/app/directives/track-clip.directive.ts b/src/app/directives/track-clip.directive.ts
index 9ed47879..ec70e282 100644
--- a/src/app/directives/track-clip.directive.ts
+++ b/src/app/directives/track-clip.directive.ts
@@ -14,7 +14,7 @@ const interact = interact_ as any;
 @Directive({
   selector: '[appTrackClip]'
 })
-export class TrackClipDirective implements AfterViewInit {
+export class TrackClipDirective {
   @HostBinding('style.margin-left.%')
   _start = 0;

@@ -25,7 +25,7 @@ export class TrackClipDirective implements AfterViewInit {

   constructor(private el: ElementRef) { }

-  ngAfterViewInit() {
+  ngOnInit() {
     interact(this.el.nativeElement)
       .draggable({
         axis: 'x',
@@ -35,8 +35,11 @@ export class TrackClipDirective implements AfterViewInit {
         },
         listeners: {
           move: event => {
-            let { rect } = (event as any)
-            event.target.style.transform = `translate(${rect.left}px, 0)`
+            let { target, delta } = (event as any)
+            const x = (parseFloat(target.getAttribute('data-x')) || 0) + delta.x;
+            target.style.transform = `translate(${x}px)`;
+
+            target.setAttribute('data-x', x.toString());
           }
         }
       } as any)
@@ -53,9 +56,8 @@ export class TrackClipDirective implements AfterViewInit {

             Object.assign((event as any).target.style, {
               width: `${(event as any).rect.width}px`,
-              transform: `translate(${x}px`
+              transform: `translate(${x}px, 0)`
             })
-
             Object.assign(event.target.dataset, { x })
           }
         }
```

## Commit: 9d4738312c8291272f5be1915e3c095c3088b520

**Message:** fix spinner UI on page loading and on HTTP load

**Author:** gio

**Date:** 2024-03-25

### Diff:

```diff
diff --git a/src/app/blocks/http-block/http-block.component.html b/src/app/blocks/http-block/http-block.component.html
index 28aa4129..1ea6e682 100644
--- a/src/app/blocks/http-block/http-block.component.html
+++ b/src/app/blocks/http-block/http-block.component.html
@@ -10,11 +10,6 @@
                        [context]="context"></app-blocks-workflow>
 </div>

-<mat-spinner *ngIf="isLoading" diameter="50"></mat-spinner>
-
-<!-- <pre>httpblock-contect:{{context | json}}</pre>
-
-
-<hr>
-<pre>httpblock-config{{config | json}}</pre> -->
-
+<div class="spinner-wrapper">
+  <mat-spinner *ngIf="isLoading"></mat-spinner>
+</div>
\ No newline at end of file
diff --git a/src/app/components/not-found/not-found.component.html b/src/app/components/not-found/not-found.component.html
index 04f4f93b..5bba68d7 100644
--- a/src/app/components/not-found/not-found.component.html
+++ b/src/app/components/not-found/not-found.component.html
@@ -2,5 +2,7 @@
   <app-blocks-workflow [blocks]="workflow.blocks" [models]="workflow.models" [context]="workflow.context"></app-blocks-workflow>
 </ng-container>
 <ng-template #loadingState>
-  <mat-spinner></mat-spinner>
+  <div class="spinner-wrapper spinner-wrapper-allpage">
+    <mat-spinner></mat-spinner>
+  </div>
 </ng-template>
diff --git a/src/app/dialogs/save-workflow-dialog/save-workflow-dialog.component.html b/src/app/dialogs/save-workflow-dialog/save-workflow-dialog.component.html
index 0ebe0792..593a8385 100644
--- a/src/app/dialogs/save-workflow-dialog/save-workflow-dialog.component.html
+++ b/src/app/dialogs/save-workflow-dialog/save-workflow-dialog.component.html
@@ -26,4 +26,6 @@
   </mat-dialog-actions>
 </ng-template>

-<mat-spinner *ngIf="isLoading"></mat-spinner>
+<div class="spinner-wrapper">
+  <mat-spinner *ngIf="isLoading"></mat-spinner>
+</div>
\ No newline at end of file
diff --git a/src/styles/main.scss b/src/styles/main.scss
index b7eaa192..3c3791c5 100644
--- a/src/styles/main.scss
+++ b/src/styles/main.scss
@@ -186,7 +186,6 @@ ng-select {
 }

 .ng-select {
-
   .ng-select-container {
     overflow: visible !important;
   }
@@ -242,3 +241,15 @@ formly-array-type {
   margin-left: 2%;
   position: relative;
 }
+
+.mat-mdc-progress-spinner,
+.spinner-wrapper {
+  display: flex;
+  justify-content: center;
+  align-items: center;
+  margin: 20px;
+}
+
+.spinner-wrapper-allpage {
+  height: 100vh;
+}
\ No newline at end of file
```

## Commit: 7ad97da6efd2a7ddd202f880fab6c4bf07220ff7

**Message:** update angular core and cli

**Author:** gio

**Date:** 2024-07-04

### Diff:

```diff
diff --git a/angular.json b/angular.json
index aefe73e5..8ea04312 100644
--- a/angular.json
+++ b/angular.json
@@ -131,26 +131,26 @@
         "serve": {
           "builder": "@angular-devkit/build-angular:dev-server",
           "options": {
-            "browserTarget": "kendraio-app:build",
             "host": "0.0.0.0",
-            "disableHostCheck": true
+            "disableHostCheck": true,
+            "buildTarget": "kendraio-app:build"
           },
           "configurations": {
             "de": {
-              "browserTarget": "kendraio-app:build:de"
+              "buildTarget": "kendraio-app:build:de"
             },
             "fr": {
-              "browserTarget": "kendraio-app:build:fr"
+              "buildTarget": "kendraio-app:build:fr"
             },
             "production": {
-              "browserTarget": "kendraio-app:build:production"
+              "buildTarget": "kendraio-app:build:production"
             }
           }
         },
         "extract-i18n": {
           "builder": "@angular-devkit/build-angular:extract-i18n",
           "options": {
-            "browserTarget": "kendraio-app:build"
+            "buildTarget": "kendraio-app:build"
           }
         },
         "test": {
diff --git a/package.json b/package.json
index 8eda2f6c..7ab3d603 100644
--- a/package.json
+++ b/package.json
@@ -24,19 +24,19 @@
   },
   "private": true,
   "dependencies": {
-    "@angular/animations": "^16.1.7",
+    "@angular/animations": "^17.3.11",
     "@angular/cdk": "^16.1.6",
-    "@angular/common": "^16.1.7",
-    "@angular/core": "^16.1.7",
+    "@angular/common": "^17.3.11",
+    "@angular/core": "^17.3.11",
     "@angular/flex-layout": "^15.0.0-beta.42",
-    "@angular/forms": "^16.1.7",
-    "@angular/localize": "^16.1.7",
+    "@angular/forms": "^17.3.11",
+    "@angular/localize": "^17.3.11",
     "@angular/material": "^16.1.6",
-    "@angular/platform-browser": "^16.1.7",
-    "@angular/platform-browser-dynamic": "^16.1.7",
+    "@angular/platform-browser": "^17.3.11",
+    "@angular/platform-browser-dynamic": "^17.3.11",
     "@angular/pwa": "^16.1.6",
-    "@angular/router": "^16.1.7",
-    "@angular/service-worker": "^16.1.7",
+    "@angular/router": "^17.3.11",
+    "@angular/service-worker": "^17.3.11",
     "@asymmetrik/ngx-leaflet": "^16.0.1",
     "@asymmetrik/ngx-leaflet-markercluster": "^16.0.0",
     "@daz.is/jmespath": "^1.3.1",
@@ -103,21 +103,21 @@
     "wavesurfer.js": "^3.3.3",
     "x2js": "^3.4.2",
     "xlsx": "https://cdn.sheetjs.com/xlsx-0.20.0/xlsx-0.20.0.tgz",
-    "zone.js": "~0.13.0"
+    "zone.js": "~0.14.7"
   },
   "devDependencies": {
-    "@angular-devkit/build-angular": "^16.1.6",
-    "@angular-devkit/core": "^16.1.6",
-    "@angular-devkit/schematics": "^16.1.6",
+    "@angular-devkit/build-angular": "^17.3.8",
+    "@angular-devkit/core": "^17.3.8",
+    "@angular-devkit/schematics": "^17.3.8",
     "@angular-eslint/builder": "16.1.0",
     "@angular-eslint/eslint-plugin": "16.1.0",
     "@angular-eslint/eslint-plugin-template": "16.1.0",
     "@angular-eslint/schematics": "16.1.0",
     "@angular-eslint/template-parser": "16.1.0",
-    "@angular/cli": "^16.1.6",
-    "@angular/compiler": "^16.1.7",
-    "@angular/compiler-cli": "^16.1.7",
-    "@angular/language-service": "^16.1.7",
+    "@angular/cli": "^17.3.8",
+    "@angular/compiler": "^17.3.11",
+    "@angular/compiler-cli": "^17.3.11",
+    "@angular/language-service": "^17.3.11",
     "@cypress/schematic": "^1.6.0",
     "@ngrx/schematics": "^16.1.0",
     "@types/blob-util": "^1.3.3",
@@ -141,9 +141,6 @@
     "@types/tus-js-client": "^1.8.0",
     "@types/uuid": "^8.3.1",
     "@types/wavesurfer.js": "^2.0.2",
-    "@typescript-eslint/eslint-plugin": "^5.59.2",
-    "@typescript-eslint/parser": "^5.59.2",
-    "cypress": "^10.10.0",
     "@typescript-eslint/eslint-plugin": "5.48.2",
     "@typescript-eslint/parser": "5.48.2",
     "cypress": "^13.3.3",
@@ -159,14 +156,14 @@
     "karma-jasmine": "^5.1.0",
     "karma-jasmine-html-reporter": "^2.0.0",
     "mochawesome": "^7.0.1",
-    "ng-packagr": "^16.1.0",
+    "ng-packagr": "^17.3.0",
     "nodemon": "^2.0.15",
     "npm-run-all": "^4.1.5",
     "serve": "^14.2.0",
     "start-server-and-test": "^2.0.3",
     "ts-node": "^10.4.0",
     "tslib": "^2.3.1",
-    "typescript": "^4.9.3",
+    "typescript": "^5.4.5",
     "webpack": "^5.76.2",
     "webpack-dev-server": "^4.4.0",
     "xvfb-maybe": "^0.2.1"
@@ -177,4 +174,4 @@
   "resolutions": {
     "uglify-es": "npm:terser"
   }
-}
+}
\ No newline at end of file
```

## Commit: fdb99f0c1295c6b127b59e51f1f3269cb41884d4

**Message:** upgrade eslint pakcages

**Author:** gio

**Date:** 2024-07-05

### Diff:

```diff
diff --git a/package.json b/package.json
index 7ab3d603..7f4785a0 100644
--- a/package.json
+++ b/package.json
@@ -109,11 +109,11 @@
     "@angular-devkit/build-angular": "^17.3.8",
     "@angular-devkit/core": "^17.3.8",
     "@angular-devkit/schematics": "^17.3.8",
-    "@angular-eslint/builder": "16.1.0",
-    "@angular-eslint/eslint-plugin": "16.1.0",
-    "@angular-eslint/eslint-plugin-template": "16.1.0",
-    "@angular-eslint/schematics": "16.1.0",
-    "@angular-eslint/template-parser": "16.1.0",
+    "@angular-eslint/builder": "^17.5.2",
+    "@angular-eslint/eslint-plugin": "^17.5.2",
+    "@angular-eslint/eslint-plugin-template": "^17.5.2",
+    "@angular-eslint/schematics": "^17.5.2",
+    "@angular-eslint/template-parser": "^17.5.2",
     "@angular/cli": "^17.3.8",
     "@angular/compiler": "^17.3.11",
     "@angular/compiler-cli": "^17.3.11",
@@ -174,4 +174,4 @@
   "resolutions": {
     "uglify-es": "npm:terser"
   }
-}
\ No newline at end of file
+}
```

## Commit: e998061472102d7b54341118b930f1b545021a2f

**Message:** upgrade all the patch with ncu command and upgrade @angular/pwa@17

**Author:** gio

**Date:** 2024-07-05

### Diff:

```diff
diff --git a/package.json b/package.json
index 7f4785a0..b3a6dac4 100644
--- a/package.json
+++ b/package.json
@@ -34,7 +34,7 @@
     "@angular/material": "^16.1.6",
     "@angular/platform-browser": "^17.3.11",
     "@angular/platform-browser-dynamic": "^17.3.11",
-    "@angular/pwa": "^16.1.6",
+    "@angular/pwa": "^17.3.8",
     "@angular/router": "^17.3.11",
     "@angular/service-worker": "^17.3.11",
     "@asymmetrik/ngx-leaflet": "^16.0.1",
@@ -46,62 +46,62 @@
     "@ng-select/ng-select": "^11.1.1",
     "@ngrx/store": "^16.1.0",
     "@ngtools/webpack": "^16.1.6",
-    "@ngx-formly/core": "^6.1.8",
-    "@ngx-formly/material": "^6.1.8",
+    "@ngx-formly/core": "^6.3.5",
+    "@ngx-formly/material": "^6.3.5",
     "@ngx-translate/core": "^14.0.0",
     "@ngx-translate/http-loader": "^6.0.0",
     "ag-grid-angular": "^31.0.3",
     "ag-grid-community": "^31.0.3",
-    "ajv": "^8.12.0",
+    "ajv": "^8.16.0",
     "ajv-errors": "^3.0.0",
     "ajv-formats": "^2.1.1",
     "amplitudejs": "^5.3.2",
-    "auth0-js": "^9.17.0",
-    "axios": "^1.6.0",
+    "auth0-js": "^9.26.1",
+    "axios": "^1.7.2",
     "blob-util": "^2.0.2",
-    "bootstrap": "^5.2.3",
-    "bootstrap-scss": "^5.2.3",
+    "bootstrap": "^5.3.3",
+    "bootstrap-scss": "^5.3.3",
     "buffer": "^6.0.3",
     "buffer-crc32": "^0.2.13",
     "camel-case": "^4.1.2",
     "chart.js": "^2.9.4",
-    "core-js": "^3.25.5",
+    "core-js": "^3.37.1",
     "dexie": "^3.2.2",
     "dompurify": "^2.3.3",
     "faker": "^5.5.3",
     "fd-slicer": "^1.1.0",
-    "handlebars": "4.7.7",
-    "interactjs": "^1.10.11",
+    "handlebars": "4.7.8",
+    "interactjs": "^1.10.27",
     "isarray": "^2.0.5",
     "jmespath": "^0.15.0",
     "js-yaml": "^3.14.1",
-    "json-formatter-js": "^2.3.4",
+    "json-formatter-js": "^2.5.17",
     "json-schema-faker": "^0.5.0-rcv.40",
     "json-stringify-safe": "^5.0.1",
-    "json-to-graphql-query": "^2.1.0",
-    "leaflet": "^1.7.1",
+    "json-to-graphql-query": "^2.2.5",
+    "leaflet": "^1.9.4",
     "leaflet.markercluster": "^1.5.3",
     "lodash-es": "^4.17.21",
     "luxon": "^1.28.0",
-    "lz-string": "^1.4.4",
+    "lz-string": "^1.5.0",
     "mermaid": "^9.1.7",
     "monaco-editor": "^0.41.0",
     "ng-update": "^0.0.0",
     "ngx-material-timepicker": "^13.1.1",
     "ngx-monaco-editor-v2": "^16.0.1",
-    "papaparse": "^5.3.1",
+    "papaparse": "^5.4.1",
     "param-case": "^3.0.4",
     "pascal-case": "^3.1.2",
-    "qs": "^6.10.1",
+    "qs": "^6.12.2",
     "reflect-metadata": "^0.1.13",
     "rxjs": "~6.6.7",
-    "schema-utils": "^4.0.0",
+    "schema-utils": "^4.2.0",
     "showdown": "^1.9.1",
     "text-mask-addons": "^3.8.0",
     "tus-js-client": "^2.3.0",
     "uuid": "^8.3.2",
     "wavesurfer.js": "^3.3.3",
-    "x2js": "^3.4.2",
+    "x2js": "^3.4.4",
     "xlsx": "https://cdn.sheetjs.com/xlsx-0.20.0/xlsx-0.20.0.tgz",
     "zone.js": "~0.14.7"
   },
@@ -121,50 +121,50 @@
     "@cypress/schematic": "^1.6.0",
     "@ngrx/schematics": "^16.1.0",
     "@types/blob-util": "^1.3.3",
-    "@types/chart.js": "^2.9.34",
+    "@types/chart.js": "^2.9.41",
     "@types/faker": "^5.5.9",
     "@types/handlebars": "^4.1.0",
     "@types/jasmine": "~3.10.2",
-    "@types/jasminewd2": "~2.0.10",
+    "@types/jasminewd2": "~2.0.13",
     "@types/jmespath": "^0.15.0",
     "@types/js-yaml": "^3.12.7",
-    "@types/json-stringify-safe": "^5.0.0",
-    "@types/leaflet": "^1.7.5",
-    "@types/leaflet.markercluster": "^1.4.5",
-    "@types/lodash-es": "^4.17.5",
+    "@types/json-stringify-safe": "^5.0.3",
+    "@types/leaflet": "^1.9.12",
+    "@types/leaflet.markercluster": "^1.5.4",
+    "@types/lodash-es": "^4.17.12",
     "@types/luxon": "^2.0.5",
     "@types/mermaid": "^8.2.9",
     "@types/node": "^18.15.1",
-    "@types/papaparse": "^5.3.1",
-    "@types/qs": "^6.9.7",
+    "@types/papaparse": "^5.3.14",
+    "@types/qs": "^6.9.15",
     "@types/showdown": "^1.9.4",
     "@types/tus-js-client": "^1.8.0",
     "@types/uuid": "^8.3.1",
     "@types/wavesurfer.js": "^2.0.2",
     "@typescript-eslint/eslint-plugin": "5.48.2",
     "@typescript-eslint/parser": "5.48.2",
-    "cypress": "^13.3.3",
-    "cypress-localstorage-commands": "^2.2.1",
+    "cypress": "^13.13.0",
+    "cypress-localstorage-commands": "^2.2.6",
     "electron": "^23.1.3",
     "eslint": "^8.39.0",
     "jasmine-core": "^4.5.0",
     "jasmine-spec-reporter": "~7.0.0",
-    "karma": "^6.4.1",
-    "karma-chrome-launcher": "~3.1.0",
+    "karma": "^6.4.3",
+    "karma-chrome-launcher": "~3.2.0",
     "karma-coverage-istanbul-reporter": "~3.0.3",
-    "karma-electron": "^7.1.0",
+    "karma-electron": "^7.3.0",
     "karma-jasmine": "^5.1.0",
-    "karma-jasmine-html-reporter": "^2.0.0",
-    "mochawesome": "^7.0.1",
+    "karma-jasmine-html-reporter": "^2.1.0",
+    "mochawesome": "^7.1.3",
     "ng-packagr": "^17.3.0",
     "nodemon": "^2.0.15",
     "npm-run-all": "^4.1.5",
-    "serve": "^14.2.0",
-    "start-server-and-test": "^2.0.3",
-    "ts-node": "^10.4.0",
-    "tslib": "^2.3.1",
-    "typescript": "^5.4.5",
-    "webpack": "^5.76.2",
+    "serve": "^14.2.3",
+    "start-server-and-test": "^2.0.4",
+    "ts-node": "^10.9.2",
+    "tslib": "^2.6.3",
+    "typescript": "^5.5.3",
+    "webpack": "^5.92.1",
     "webpack-dev-server": "^4.4.0",
     "xvfb-maybe": "^0.2.1"
   },
```

## Commit: 0135e3c672d18298887281d35843f8bcebc70883

**Message:** upgrade material ui

**Author:** gio

**Date:** 2024-07-22

### Diff:

```diff
diff --git a/package.json b/package.json
index b3a6dac4..bd34c062 100644
--- a/package.json
+++ b/package.json
@@ -25,13 +25,13 @@
   "private": true,
   "dependencies": {
     "@angular/animations": "^17.3.11",
-    "@angular/cdk": "^16.1.6",
+    "@angular/cdk": "^17.3.10",
     "@angular/common": "^17.3.11",
     "@angular/core": "^17.3.11",
     "@angular/flex-layout": "^15.0.0-beta.42",
     "@angular/forms": "^17.3.11",
     "@angular/localize": "^17.3.11",
-    "@angular/material": "^16.1.6",
+    "@angular/material": "^17.3.10",
     "@angular/platform-browser": "^17.3.11",
     "@angular/platform-browser-dynamic": "^17.3.11",
     "@angular/pwa": "^17.3.8",
@@ -174,4 +174,4 @@
   "resolutions": {
     "uglify-es": "npm:terser"
   }
-}
+}
\ No newline at end of file
```

## Commit: b2da14b5d7544656e2f474e4f54eeae2cfef7f48

**Message:** upgrade leaflet, asymmetrick

**Author:** gio

**Date:** 2024-07-22

### Diff:

```diff
diff --git a/package.json b/package.json
index bd34c062..356938a7 100644
--- a/package.json
+++ b/package.json
@@ -37,8 +37,8 @@
     "@angular/pwa": "^17.3.8",
     "@angular/router": "^17.3.11",
     "@angular/service-worker": "^17.3.11",
-    "@asymmetrik/ngx-leaflet": "^16.0.1",
-    "@asymmetrik/ngx-leaflet-markercluster": "^16.0.0",
+    "@asymmetrik/ngx-leaflet": "^17.0.0",
+    "@asymmetrik/ngx-leaflet-markercluster": "^17.0.0",
     "@daz.is/jmespath": "^1.3.1",
     "@fortawesome/fontawesome-free": "^5.15.4",
     "@maskito/angular": "^1.4.0",
```

## Commit: ace33688ce9510eab9436ac9c7c5881ccf648322

**Message:** update ngtools/webpack

**Author:** gio

**Date:** 2024-07-22

### Diff:

```diff
diff --git a/package.json b/package.json
index 356938a7..36540bdb 100644
--- a/package.json
+++ b/package.json
@@ -45,7 +45,7 @@
     "@maskito/core": "^1.4.0",
     "@ng-select/ng-select": "^11.1.1",
     "@ngrx/store": "^16.1.0",
-    "@ngtools/webpack": "^16.1.6",
+    "@ngtools/webpack": "^17.3.8",
     "@ngx-formly/core": "^6.3.5",
     "@ngx-formly/material": "^6.3.5",
     "@ngx-translate/core": "^14.0.0",
```

## Commit: 63d7030d687e5e08b270e032af325d7991459c76

**Message:** update ngrx

**Author:** gio

**Date:** 2024-07-22

### Diff:

```diff
diff --git a/package.json b/package.json
index 36540bdb..97846de2 100644
--- a/package.json
+++ b/package.json
@@ -44,7 +44,7 @@
     "@maskito/angular": "^1.4.0",
     "@maskito/core": "^1.4.0",
     "@ng-select/ng-select": "^11.1.1",
-    "@ngrx/store": "^16.1.0",
+    "@ngrx/store": "^17.2.0",
     "@ngtools/webpack": "^17.3.8",
     "@ngx-formly/core": "^6.3.5",
     "@ngx-formly/material": "^6.3.5",
@@ -119,7 +119,7 @@
     "@angular/compiler-cli": "^17.3.11",
     "@angular/language-service": "^17.3.11",
     "@cypress/schematic": "^1.6.0",
-    "@ngrx/schematics": "^16.1.0",
+    "@ngrx/schematics": "^17.2.0",
     "@types/blob-util": "^1.3.3",
     "@types/chart.js": "^2.9.41",
     "@types/faker": "^5.5.9",
```

## Commit: 17ad0f0fe10c34a3f18f4b9babf39dd42ac96d26

**Message:** --stash

**Author:** gio

**Date:** 2024-07-23

### Diff:

```diff
diff --git a/package.json b/package.json
index 97846de2..6d8fcfed 100644
--- a/package.json
+++ b/package.json
@@ -163,7 +163,7 @@
     "start-server-and-test": "^2.0.4",
     "ts-node": "^10.9.2",
     "tslib": "^2.6.3",
-    "typescript": "^5.5.3",
+    "typescript": "^5.3.3",
     "webpack": "^5.92.1",
     "webpack-dev-server": "^4.4.0",
     "xvfb-maybe": "^0.2.1"
```

## Commit: 38c71ab214fb934eae170065e1786b2c1c1e9d72

**Message:** update ng-select

**Author:** gio

**Date:** 2024-07-23

### Diff:

```diff
diff --git a/package.json b/package.json
index 6d8fcfed..8c10a0c7 100644
--- a/package.json
+++ b/package.json
@@ -43,7 +43,7 @@
     "@fortawesome/fontawesome-free": "^5.15.4",
     "@maskito/angular": "^1.4.0",
     "@maskito/core": "^1.4.0",
-    "@ng-select/ng-select": "^11.1.1",
+    "@ng-select/ng-select": "^12.0.7",
     "@ngrx/store": "^17.2.0",
     "@ngtools/webpack": "^17.3.8",
     "@ngx-formly/core": "^6.3.5",
```

## Commit: 865ca3b629f4254e423195371c9d2fcbb9adf931

**Message:** upgrade ngx-monaco-editor

**Author:** gio

**Date:** 2024-07-23

### Diff:

```diff
diff --git a/package.json b/package.json
index 8c10a0c7..6a7fbd62 100644
--- a/package.json
+++ b/package.json
@@ -85,10 +85,10 @@
     "luxon": "^1.28.0",
     "lz-string": "^1.5.0",
     "mermaid": "^9.1.7",
-    "monaco-editor": "^0.41.0",
+    "monaco-editor": "^0.44.0",
     "ng-update": "^0.0.0",
     "ngx-material-timepicker": "^13.1.1",
-    "ngx-monaco-editor-v2": "^16.0.1",
+    "ngx-monaco-editor-v2": "^17.0.1",
     "papaparse": "^5.4.1",
     "param-case": "^3.0.4",
     "pascal-case": "^3.1.2",
```

## Commit: bab96da904a9e70db9d957978d7c89cf9f0bba68

**Message:** fix most of typescript error

**Author:** gio

**Date:** 2024-07-31

### Diff:

```diff
diff --git a/src/app/_shared/ui-form/helpers/validations-messages.ts b/src/app/_shared/ui-form/helpers/validations-messages.ts
index 8afea9f9..9df14de5 100644
--- a/src/app/_shared/ui-form/helpers/validations-messages.ts
+++ b/src/app/_shared/ui-form/helpers/validations-messages.ts
@@ -1,7 +1,7 @@
 import {has} from 'lodash-es';

 export function requiredValidationMessage(err, field) {
-  if (has(field, 'templateOptions.errMessage.required')) {
+  if (field && has(field, 'templateOptions.errMessage.required')) {
     return `${field.templateOptions.errMessage.required}`;
   } else {
     return `"${field.templateOptions.label}" is required!`;
@@ -10,7 +10,7 @@ export function requiredValidationMessage(err, field) {

 export function minlengthValidationMessage(err, field) {
   // field.templateOptions.maxLength = 7; // we can def TO. here!
-  if (has(field, 'templateOptions.errMessage.minLength')) {
+  if (field && has(field, 'templateOptions.errMessage.minLength')) {
     return `${field.templateOptions.errMessage.minLength}`;
   } else {
     return ` ${err} "${field.templateOptions.label}" Should have at least ${field.templateOptions.minLength} characters`;
@@ -18,7 +18,7 @@ export function minlengthValidationMessage(err, field) {
 }

 export function maxlengthValidationMessage(err, field) {
-  if (has(field, 'templateOptions.errMessage.maxLength')) {
+  if (field && has(field, 'templateOptions.errMessage.maxLength')) {
     return `${field.templateOptions.errMessage.maxLength}`;
   } else {
     return `This value should be less than ${field.templateOptions.maxLength} characters`;
@@ -27,7 +27,7 @@ export function maxlengthValidationMessage(err, field) {
 }

 export function patternMatchMessage(err, field) {
-  if (has(field, 'templateOptions.errMessage.maxLength'))  {
+  if (field && has(field, 'templateOptions.errMessage.maxLength'))  {
     return `${field.templateOptions.errMessage.pattern}`;
   } else {
     return `This value needs to match the following pattern  ${field.templateOptions.pattern}`;
diff --git a/src/app/blocks/form-block/form-block.component.ts b/src/app/blocks/form-block/form-block.component.ts
index bdf416a8..44d43d25 100644
--- a/src/app/blocks/form-block/form-block.component.ts
+++ b/src/app/blocks/form-block/form-block.component.ts
@@ -89,10 +89,11 @@ export class FormBlockComponent implements OnInit, OnChanges, OnDestroy {
     this.options['context'] = this.context;
   }

-  injectContextToJsonSchema(jsonSchema: any) {
+  injectContextToJsonSchema<T>(jsonSchema: T) {
     let mutatedJsonSchema = clone(jsonSchema);
+    //@ts-ignore
     mutatedJsonSchema = set(mutatedJsonSchema, 'definitions.context', this.context);
-    return mutatedJsonSchema;
+    return mutatedJsonSchema as T;
   }

   updateForm() {
@@ -104,6 +105,7 @@ export class FormBlockComponent implements OnInit, OnChanges, OnDestroy {
     } else if (has(this.config, 'jsonSchema') && has(this.config, 'uiSchema')) {
       const { uiSchema } = this.config;
       let { jsonSchema } = this.config;
+      console.log('jsonSchema', jsonSchema)
       jsonSchema = this.injectContextToJsonSchema(jsonSchema);
       this.fields = this.formService.schemasToFieldConfig(jsonSchema, uiSchema);
     } else if (has(this.config,  'schemaGetter')) {
diff --git a/src/app/blocks/load-schema-block/load-schema-block.component.ts b/src/app/blocks/load-schema-block/load-schema-block.component.ts
index 6da3642a..1d73f6cc 100644
--- a/src/app/blocks/load-schema-block/load-schema-block.component.ts
+++ b/src/app/blocks/load-schema-block/load-schema-block.component.ts
@@ -6,6 +6,13 @@ import { LocalDatabaseService } from '../../services/local-database.service';
 import { validate as isValidUUID } from 'uuid';
 import { convertTemplateToSchema } from './convertTemplateToSchema';

+interface SchemaInterface {
+  title: string;
+  description: string;
+  type: string;
+  properties: { [key: string]: any }; // Replace any with a more specific type
+}
+
 @Component({
   selector: 'app-load-schema-block',
   templateUrl: './load-schema-block.component.html',
@@ -75,7 +82,8 @@ export class LoadSchemaBlockComponent extends BaseBlockComponent {
    * @param schemaName
    * @returns
    */
-  async resolveSchema(schemaDefinitions, schemaName, depth) {
+
+  async resolveSchema(schemaDefinitions: { [key: string]: SchemaInterface }, schemaName: string, depth: number) {
     if (!has(schemaDefinitions, schemaName)) {
       try {
         const result = await this.loadSchemaFromDatabase(schemaName);
@@ -113,7 +121,7 @@ export class LoadSchemaBlockComponent extends BaseBlockComponent {
    * @param inputSchemaName
    * @returns {object} Json schema
    */
-  async mapSchema(schemaDefinitions, inputSchema, inputSchemaName, depth) {
+  async mapSchema(schemaDefinitions: { [key: string]: SchemaInterface }, inputSchema, inputSchemaName: string, depth: number): Promise<SchemaInterface> {
     // Create the base schema object
     let outputSchema = {
       title: get(inputSchema, 'name', ''),
@@ -213,7 +221,7 @@ export class LoadSchemaBlockComponent extends BaseBlockComponent {
     return outputSchema;
   }

-  private async mapSchemaObject(outputSchema, p, schemaDefinitions, inputSchemaName, depth) {
+  private async mapSchemaObject(outputSchema, p, schemaDefinitions: { [key: string]: SchemaInterface }, inputSchemaName: string, depth: number) {
     // Object type turns into a JSON schema object, with a reference to the embedded schema
     // Loads referenced schema if not already found.
     // It does not load data from the database, it just defines a schema definition.
@@ -238,7 +246,7 @@ export class LoadSchemaBlockComponent extends BaseBlockComponent {
     return outputSchema;
   }

-  private async mapSchemaList(outputSchema, p, schemaDefinitions, inputSchemaName, depth) {
+  private async mapSchemaList(outputSchema, p, schemaDefinitions: { [key: string]: SchemaInterface }, inputSchemaName: string, depth: number) {
     // List type turns into a JSON schema array, with a reference to the embedded schema
     // Loads the referenced schema if not already found.
     // It does not load data from the database, it just defines a
@@ -269,7 +277,7 @@ export class LoadSchemaBlockComponent extends BaseBlockComponent {
     return outputSchema;
   }

-  private async mapSchemaObjectReference(outputSchema, p, schemaDefinitions, inputSchemaName, depth) {
+  private async mapSchemaObjectReference(outputSchema, p, schemaDefinitions: { [key: string]: SchemaInterface }, inputSchemaName: string, depth: number) {
     // ObjectReference type injects a single record from the database into the schema,
     // with the default value set to the record's data.
     // This form property is an object type that conforms to a schema,
@@ -321,7 +329,7 @@ export class LoadSchemaBlockComponent extends BaseBlockComponent {
     return outputSchema;
   }

-  private async mapSchemaListReference(outputSchema, p, schemaDefinitions, inputSchemaName, depth) {
+  private async mapSchemaListReference(outputSchema, p, schemaDefinitions: { [key: string]: SchemaInterface }, inputSchemaName: string, depth: number) {
     // ListReference type injects multiple records from the
     // database into the schema, for selection from a list.
     //
diff --git a/src/styles.scss b/src/styles.scss
index 609daddb..79226d4e 100644
--- a/src/styles.scss
+++ b/src/styles.scss
@@ -20,8 +20,6 @@

 @include mat.all-component-typographies();
 @include mat.core();
-@import '@angular/material/theming';
-// @include mat-core();

 // Define the palettes for your theme using the Material Design palettes available in palette.scss
 // (imported above). For each palette, you can optionally specify a default, lighter, and darker
```

## Commit: 9c89c12964f8e2f11b9060afce0c00f8ac76fa01

**Message:** fix type issue and material angular

**Author:** gio

**Date:** 2024-07-31

### Diff:

```diff
diff --git a/src/app/blocks/form-block/form-block.component.ts b/src/app/blocks/form-block/form-block.component.ts
index 44d43d25..ff0f6159 100644
--- a/src/app/blocks/form-block/form-block.component.ts
+++ b/src/app/blocks/form-block/form-block.component.ts
@@ -7,6 +7,11 @@ import {debounceTime, distinctUntilChanged, filter, tap} from 'rxjs/operators';
 import {clone, get, has, isUndefined, set} from 'lodash-es';
 import {mappingUtility} from '../mapping-block/mapping-util';

+interface BaseJsonSchema {
+  properties?: any,
+  type?: string;
+}
+
 @Component({
   selector: 'app-form-block',
   templateUrl: './form-block.component.html',
@@ -89,9 +94,8 @@ export class FormBlockComponent implements OnInit, OnChanges, OnDestroy {
     this.options['context'] = this.context;
   }

-  injectContextToJsonSchema<T>(jsonSchema: T) {
+  injectContextToJsonSchema<T extends BaseJsonSchema>(jsonSchema: T): T {
     let mutatedJsonSchema = clone(jsonSchema);
-    //@ts-ignore
     mutatedJsonSchema = set(mutatedJsonSchema, 'definitions.context', this.context);
     return mutatedJsonSchema as T;
   }
diff --git a/src/styles.scss b/src/styles.scss
index 79226d4e..fae9203f 100644
--- a/src/styles.scss
+++ b/src/styles.scss
@@ -46,7 +46,7 @@ $kendraio-app-theme: mat.define-light-theme((
 // Alternatively, you can import and @include the theme mixins for each component
 // that you are using.
 @include mat.all-component-themes($kendraio-app-theme);
-@include angular-material-theme($kendraio-app-theme);
+// @include angular-material-theme($kendraio-app-theme);


 html, body { height: 100%; overflow: hidden; }
```

## Commit: 149a319b4b08d9f8850cacce3bbfca8121afdb81

**Message:** upgrade ag grid

**Author:** gio

**Date:** 2024-07-31

### Diff:

```diff
diff --git a/package.json b/package.json
index 6a7fbd62..83e6fab6 100644
--- a/package.json
+++ b/package.json
@@ -24,6 +24,7 @@
   },
   "private": true,
   "dependencies": {
+    "@ag-grid-community/angular": "^31.3.4",
     "@angular/animations": "^17.3.11",
     "@angular/cdk": "^17.3.10",
     "@angular/common": "^17.3.11",
@@ -46,13 +47,13 @@
     "@ng-select/ng-select": "^12.0.7",
     "@ngrx/store": "^17.2.0",
     "@ngtools/webpack": "^17.3.8",
-    "@ngx-formly/core": "^6.3.5",
-    "@ngx-formly/material": "^6.3.5",
+    "@ngx-formly/core": "^6.3.6",
+    "@ngx-formly/material": "^6.3.6",
     "@ngx-translate/core": "^14.0.0",
     "@ngx-translate/http-loader": "^6.0.0",
     "ag-grid-angular": "^31.0.3",
-    "ag-grid-community": "^31.0.3",
-    "ajv": "^8.16.0",
+    "ag-grid-community": "^31.3.4",
+    "ajv": "^8.17.1",
     "ajv-errors": "^3.0.0",
     "ajv-formats": "^2.1.1",
     "amplitudejs": "^5.3.2",
@@ -92,7 +93,7 @@
     "papaparse": "^5.4.1",
     "param-case": "^3.0.4",
     "pascal-case": "^3.1.2",
-    "qs": "^6.12.2",
+    "qs": "^6.12.3",
     "reflect-metadata": "^0.1.13",
     "rxjs": "~6.6.7",
     "schema-utils": "^4.2.0",
@@ -143,13 +144,13 @@
     "@types/wavesurfer.js": "^2.0.2",
     "@typescript-eslint/eslint-plugin": "5.48.2",
     "@typescript-eslint/parser": "5.48.2",
-    "cypress": "^13.13.0",
+    "cypress": "^13.13.1",
     "cypress-localstorage-commands": "^2.2.6",
     "electron": "^23.1.3",
     "eslint": "^8.39.0",
     "jasmine-core": "^4.5.0",
     "jasmine-spec-reporter": "~7.0.0",
-    "karma": "^6.4.3",
+    "karma": "^6.4.4",
     "karma-chrome-launcher": "~3.2.0",
     "karma-coverage-istanbul-reporter": "~3.0.3",
     "karma-electron": "^7.3.0",
@@ -160,11 +161,11 @@
     "nodemon": "^2.0.15",
     "npm-run-all": "^4.1.5",
     "serve": "^14.2.3",
-    "start-server-and-test": "^2.0.4",
+    "start-server-and-test": "^2.0.5",
     "ts-node": "^10.9.2",
     "tslib": "^2.6.3",
-    "typescript": "^5.3.3",
-    "webpack": "^5.92.1",
+    "typescript": "^5.5.4",
+    "webpack": "^5.93.0",
     "webpack-dev-server": "^4.4.0",
     "xvfb-maybe": "^0.2.1"
   },
@@ -174,4 +175,4 @@
   "resolutions": {
     "uglify-es": "npm:terser"
   }
-}
\ No newline at end of file
+}
```

## Commit: ba347519aaec7c353aabcff3a5a69f8f42158f25

**Message:** --stash

**Author:** gio

**Date:** 2024-07-31

### Diff:

```diff
diff --git a/package.json b/package.json
index 83e6fab6..2c63068a 100644
--- a/package.json
+++ b/package.json
@@ -24,7 +24,6 @@
   },
   "private": true,
   "dependencies": {
-    "@ag-grid-community/angular": "^31.3.4",
     "@angular/animations": "^17.3.11",
     "@angular/cdk": "^17.3.10",
     "@angular/common": "^17.3.11",
@@ -47,13 +46,13 @@
     "@ng-select/ng-select": "^12.0.7",
     "@ngrx/store": "^17.2.0",
     "@ngtools/webpack": "^17.3.8",
-    "@ngx-formly/core": "^6.3.6",
-    "@ngx-formly/material": "^6.3.6",
+    "@ngx-formly/core": "^6.3.5",
+    "@ngx-formly/material": "^6.3.5",
     "@ngx-translate/core": "^14.0.0",
     "@ngx-translate/http-loader": "^6.0.0",
     "ag-grid-angular": "^31.0.3",
     "ag-grid-community": "^31.3.4",
-    "ajv": "^8.17.1",
+    "ajv": "^8.16.0",
     "ajv-errors": "^3.0.0",
     "ajv-formats": "^2.1.1",
     "amplitudejs": "^5.3.2",
@@ -93,7 +92,7 @@
     "papaparse": "^5.4.1",
     "param-case": "^3.0.4",
     "pascal-case": "^3.1.2",
-    "qs": "^6.12.3",
+    "qs": "^6.12.2",
     "reflect-metadata": "^0.1.13",
     "rxjs": "~6.6.7",
     "schema-utils": "^4.2.0",
@@ -144,13 +143,13 @@
     "@types/wavesurfer.js": "^2.0.2",
     "@typescript-eslint/eslint-plugin": "5.48.2",
     "@typescript-eslint/parser": "5.48.2",
-    "cypress": "^13.13.1",
+    "cypress": "^13.13.0",
     "cypress-localstorage-commands": "^2.2.6",
     "electron": "^23.1.3",
     "eslint": "^8.39.0",
     "jasmine-core": "^4.5.0",
     "jasmine-spec-reporter": "~7.0.0",
-    "karma": "^6.4.4",
+    "karma": "^6.4.3",
     "karma-chrome-launcher": "~3.2.0",
     "karma-coverage-istanbul-reporter": "~3.0.3",
     "karma-electron": "^7.3.0",
@@ -161,11 +160,11 @@
     "nodemon": "^2.0.15",
     "npm-run-all": "^4.1.5",
     "serve": "^14.2.3",
-    "start-server-and-test": "^2.0.5",
+    "start-server-and-test": "^2.0.4",
     "ts-node": "^10.9.2",
     "tslib": "^2.6.3",
-    "typescript": "^5.5.4",
-    "webpack": "^5.93.0",
+    "typescript": "^5.3.3",
+    "webpack": "^5.92.1",
     "webpack-dev-server": "^4.4.0",
     "xvfb-maybe": "^0.2.1"
   },
```

## Commit: 31c10a8f3c38ffd301b8dec89fa7314572aefcf8

**Message:** upgrade all patch versions

**Author:** gio

**Date:** 2024-07-31

### Diff:

```diff
diff --git a/package.json b/package.json
index 2c63068a..21eade00 100644
--- a/package.json
+++ b/package.json
@@ -46,11 +46,11 @@
     "@ng-select/ng-select": "^12.0.7",
     "@ngrx/store": "^17.2.0",
     "@ngtools/webpack": "^17.3.8",
-    "@ngx-formly/core": "^6.3.5",
-    "@ngx-formly/material": "^6.3.5",
+    "@ngx-formly/core": "^6.3.6",
+    "@ngx-formly/material": "^6.3.6",
     "@ngx-translate/core": "^14.0.0",
     "@ngx-translate/http-loader": "^6.0.0",
-    "ag-grid-angular": "^31.0.3",
+    "ag-grid-angular": "^31.3.4",
     "ag-grid-community": "^31.3.4",
     "ajv": "^8.16.0",
     "ajv-errors": "^3.0.0",
@@ -92,7 +92,7 @@
     "papaparse": "^5.4.1",
     "param-case": "^3.0.4",
     "pascal-case": "^3.1.2",
-    "qs": "^6.12.2",
+    "qs": "^6.12.3",
     "reflect-metadata": "^0.1.13",
     "rxjs": "~6.6.7",
     "schema-utils": "^4.2.0",
@@ -143,13 +143,13 @@
     "@types/wavesurfer.js": "^2.0.2",
     "@typescript-eslint/eslint-plugin": "5.48.2",
     "@typescript-eslint/parser": "5.48.2",
-    "cypress": "^13.13.0",
+    "cypress": "^13.13.1",
     "cypress-localstorage-commands": "^2.2.6",
     "electron": "^23.1.3",
     "eslint": "^8.39.0",
     "jasmine-core": "^4.5.0",
     "jasmine-spec-reporter": "~7.0.0",
-    "karma": "^6.4.3",
+    "karma": "^6.4.4",
     "karma-chrome-launcher": "~3.2.0",
     "karma-coverage-istanbul-reporter": "~3.0.3",
     "karma-electron": "^7.3.0",
@@ -160,7 +160,7 @@
     "nodemon": "^2.0.15",
     "npm-run-all": "^4.1.5",
     "serve": "^14.2.3",
-    "start-server-and-test": "^2.0.4",
+    "start-server-and-test": "^2.0.5",
     "ts-node": "^10.9.2",
     "tslib": "^2.6.3",
     "typescript": "^5.3.3",
```

## Commit: 7b0d40cfd34f09711d0e3665d9c9abf032f4a79f

**Message:** clean up code

**Author:** gio

**Date:** 2024-08-01

### Diff:

```diff
diff --git a/src/app/blocks/form-block/form-block.component.ts b/src/app/blocks/form-block/form-block.component.ts
index ff0f6159..94418834 100644
--- a/src/app/blocks/form-block/form-block.component.ts
+++ b/src/app/blocks/form-block/form-block.component.ts
@@ -3,7 +3,7 @@ import {KendraioFormService} from '../../_shared/ui-form/services/kendraio.form.
 import {UntypedFormGroup} from '@angular/forms';
 import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
 import {Subject} from 'rxjs';
-import {debounceTime, distinctUntilChanged, filter, tap} from 'rxjs/operators';
+import {debounceTime, filter} from 'rxjs/operators';
 import {clone, get, has, isUndefined, set} from 'lodash-es';
 import {mappingUtility} from '../mapping-block/mapping-util';

@@ -109,7 +109,6 @@ export class FormBlockComponent implements OnInit, OnChanges, OnDestroy {
     } else if (has(this.config, 'jsonSchema') && has(this.config, 'uiSchema')) {
       const { uiSchema } = this.config;
       let { jsonSchema } = this.config;
-      console.log('jsonSchema', jsonSchema)
       jsonSchema = this.injectContextToJsonSchema(jsonSchema);
       this.fields = this.formService.schemasToFieldConfig(jsonSchema, uiSchema);
     } else if (has(this.config,  'schemaGetter')) {
diff --git a/src/app/blocks/grid-block/grid-block.component.html b/src/app/blocks/grid-block/grid-block.component.html
index 17c60dbe..ac28c905 100644
--- a/src/app/blocks/grid-block/grid-block.component.html
+++ b/src/app/blocks/grid-block/grid-block.component.html
@@ -1,12 +1,3 @@
-<!-- <pre>
-{{config | json}}
-</pre>
-
-<pre>
-    {{defaultColDef | json}}
-
-</pre> -->
-
 <ag-grid-angular *ngIf="enabled"
                  #gridAngular style="width: 100%;"
                  class="ag-theme-alpine"
diff --git a/src/app/blocks/grid-block/grid-block.component.ts b/src/app/blocks/grid-block/grid-block.component.ts
index 3a607478..cebd246f 100644
--- a/src/app/blocks/grid-block/grid-block.component.ts
+++ b/src/app/blocks/grid-block/grid-block.component.ts
@@ -1,6 +1,5 @@
 import { Component, ElementRef, EventEmitter, Input, NgZone, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
-import { clone, get, has, isArray, isObject, toPairs } from 'lodash-es';
-import { search } from 'jmespath';
+import { clone, get, has, isArray, toPairs } from 'lodash-es';
 import { WorkflowCellRendererComponent } from '../../components/workflow-cell-renderer/workflow-cell-renderer.component';
 import { mappingUtility } from '../mapping-block/mapping-util';
 import { ConnectionStatusRendererComponent } from '../../components/connection-status-renderer/connection-status-renderer.component';
```

## Commit: 32214e608a5707fcce3fbd5f8a637d038541344f

**Message:** downgrade ag grid

**Author:** gio

**Date:** 2024-08-05

### Diff:

```diff
diff --git a/package.json b/package.json
index 21eade00..1982f856 100644
--- a/package.json
+++ b/package.json
@@ -50,8 +50,8 @@
     "@ngx-formly/material": "^6.3.6",
     "@ngx-translate/core": "^14.0.0",
     "@ngx-translate/http-loader": "^6.0.0",
-    "ag-grid-angular": "^31.3.4",
-    "ag-grid-community": "^31.3.4",
+    "ag-grid-angular": "^31.3.0",
+    "ag-grid-community": "^31.3.0",
     "ajv": "^8.16.0",
     "ajv-errors": "^3.0.0",
     "ajv-formats": "^2.1.1",
```

## Commit: e6862e1e3d710a9f83fa49aa809cc5ca115c5617

**Message:** upgrade cli and angular to v18

**Author:** gio

**Date:** 2024-08-05

### Diff:

```diff
diff --git a/angular.json b/angular.json
index 8ea04312..131a5614 100644
--- a/angular.json
+++ b/angular.json
@@ -18,15 +18,18 @@
       },
       "architect": {
         "build": {
-          "builder": "@angular-devkit/build-angular:browser",
+          "builder": "@angular-devkit/build-angular:application",
           "options": {
             "allowedCommonJsDependencies": [
                 "lodash"
             ],
-            "outputPath": "dist",
+            "outputPath": {
+              "base": "dist"
+            },
             "index": "src/index.html",
-            "main": "src/main.ts",
-            "polyfills": "src/polyfills.ts",
+            "polyfills": [
+              "src/polyfills.ts"
+            ],
             "tsConfig": "src/tsconfig.app.json",
             "assets": [
               "src/favicon.ico",
@@ -50,12 +53,16 @@
               "node_modules/auth0-js/dist/auth0.js",
               "node_modules/json-schema-faker/dist/bundle.js"
             ],
-            "vendorChunk": true,
             "extractLicenses": false,
-            "buildOptimizer": false,
             "sourceMap": true,
             "optimization": false,
-            "namedChunks": true
+            "namedChunks": true,
+            "browser": "src/main.ts",
+            "stylePreprocessorOptions": {
+              "includePaths": [
+                "."
+              ]
+            }
           },
           "configurations": {
             "production": {
@@ -77,8 +84,6 @@
               "sourceMap": false,
               "namedChunks": false,
               "extractLicenses": true,
-              "vendorChunk": false,
-              "buildOptimizer": true,
               "budgets": [
                 {
                   "type": "initial",
@@ -110,8 +115,6 @@
               "sourceMap": true,
               "namedChunks": false,
               "extractLicenses": false,
-              "vendorChunk": false,
-              "buildOptimizer": false,
               "budgets": [
                 {
                   "type": "initial",
diff --git a/package.json b/package.json
index 1982f856..b0426250 100644
--- a/package.json
+++ b/package.json
@@ -24,19 +24,19 @@
   },
   "private": true,
   "dependencies": {
-    "@angular/animations": "^17.3.11",
+    "@angular/animations": "^18.1.3",
     "@angular/cdk": "^17.3.10",
-    "@angular/common": "^17.3.11",
-    "@angular/core": "^17.3.11",
+    "@angular/common": "^18.1.3",
+    "@angular/core": "^18.1.3",
     "@angular/flex-layout": "^15.0.0-beta.42",
-    "@angular/forms": "^17.3.11",
-    "@angular/localize": "^17.3.11",
+    "@angular/forms": "^18.1.3",
+    "@angular/localize": "^18.1.3",
     "@angular/material": "^17.3.10",
-    "@angular/platform-browser": "^17.3.11",
-    "@angular/platform-browser-dynamic": "^17.3.11",
+    "@angular/platform-browser": "^18.1.3",
+    "@angular/platform-browser-dynamic": "^18.1.3",
     "@angular/pwa": "^17.3.8",
-    "@angular/router": "^17.3.11",
-    "@angular/service-worker": "^17.3.11",
+    "@angular/router": "^18.1.3",
+    "@angular/service-worker": "^18.1.3",
     "@asymmetrik/ngx-leaflet": "^17.0.0",
     "@asymmetrik/ngx-leaflet-markercluster": "^17.0.0",
     "@daz.is/jmespath": "^1.3.1",
@@ -106,18 +106,18 @@
     "zone.js": "~0.14.7"
   },
   "devDependencies": {
-    "@angular-devkit/build-angular": "^17.3.8",
-    "@angular-devkit/core": "^17.3.8",
-    "@angular-devkit/schematics": "^17.3.8",
+    "@angular-devkit/build-angular": "^18.1.3",
+    "@angular-devkit/core": "^18.1.3",
+    "@angular-devkit/schematics": "^18.1.3",
     "@angular-eslint/builder": "^17.5.2",
     "@angular-eslint/eslint-plugin": "^17.5.2",
     "@angular-eslint/eslint-plugin-template": "^17.5.2",
     "@angular-eslint/schematics": "^17.5.2",
     "@angular-eslint/template-parser": "^17.5.2",
-    "@angular/cli": "^17.3.8",
-    "@angular/compiler": "^17.3.11",
-    "@angular/compiler-cli": "^17.3.11",
-    "@angular/language-service": "^17.3.11",
+    "@angular/cli": "^18.1.3",
+    "@angular/compiler": "^18.1.3",
+    "@angular/compiler-cli": "^18.1.3",
+    "@angular/language-service": "^18.1.3",
     "@cypress/schematic": "^1.6.0",
     "@ngrx/schematics": "^17.2.0",
     "@types/blob-util": "^1.3.3",
@@ -156,7 +156,7 @@
     "karma-jasmine": "^5.1.0",
     "karma-jasmine-html-reporter": "^2.1.0",
     "mochawesome": "^7.1.3",
-    "ng-packagr": "^17.3.0",
+    "ng-packagr": "^18.1.0",
     "nodemon": "^2.0.15",
     "npm-run-all": "^4.1.5",
     "serve": "^14.2.3",
diff --git a/src/app/_shared/404.interceptor.ts b/src/app/_shared/404.interceptor.ts
index a5415b3f..ecbf7ca7 100644
--- a/src/app/_shared/404.interceptor.ts
+++ b/src/app/_shared/404.interceptor.ts
@@ -1,11 +1,4 @@
-import {
-    HttpInterceptor,
-    HttpRequest,
-    HttpResponse,
-    HttpHandler,
-    HttpEvent,
-    HttpErrorResponse
-} from '@angular/common/http';
+import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
 import {Injectable} from '@angular/core';
 import {Router} from '@angular/router';
 import { Observable, of, from, EMPTY, empty, throwError  } from 'rxjs';
diff --git a/src/app/_shared/shared.module.ts b/src/app/_shared/shared.module.ts
index ee8243b6..6ab41f35 100644
--- a/src/app/_shared/shared.module.ts
+++ b/src/app/_shared/shared.module.ts
@@ -1,6 +1,6 @@
 import { NgModule } from '@angular/core';
 import { CommonModule, LowerCasePipe, DatePipe } from '@angular/common';
-import { HttpClientModule } from '@angular/common/http';
+import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
 import { FormsModule, ReactiveFormsModule, NG_VALIDATORS } from '@angular/forms';
 import { RouterModule } from '@angular/router';
 import { MatButtonToggleModule } from '@angular/material/button-toggle';
@@ -26,49 +26,42 @@ export function minlengthValidationMessage(err: any, field: { templateOptions: {
   return `what the.. ${field.templateOptions.minLength} characters`;
 }

-@NgModule({
-  imports: [
-    CommonModule,
-    HttpClientModule,
-    ReactiveFormsModule,
-    FormsModule,
-    RouterModule,
-    MatButtonToggleModule,
-    MatIconModule,
-    MatTreeModule,
-    FlexModule, FlexLayoutModule,
-    FormsModule,
-    ReactiveFormsModule,
-    UiFormModule,
-    NgSelectModule,
-    FormlyModule.forChild(), MatCardModule, MatInputModule
-  ],
-  declarations: [
-    matComponents.MatInputComponent,
-    matComponents.MatButtonComponent,
-    BreadcrumbComponent,
-    HelpTextBtnDirective,
-    PasswordInputComponent,
-  ],
-  exports: [
-  FormsModule,
-  ReactiveFormsModule,
-  FlexModule,
-  FlexLayoutModule,
-  BreadcrumbComponent,
-
-  MatTreeModule,
-  HelpTextBtnDirective,
-  UiFormModule,
-  NgSelectModule,
-TranslateModule
-  ],
-  providers: [
-    DatePipe,
-    LowerCasePipe,
-    HelpTextService,
-    {provide: NG_VALIDATORS , useValue: PasswordStrength2, multi: true},
-    {provide: NG_VALIDATORS , useValue: matchPasswords, multi: true},
-  ]
-})
+@NgModule({ declarations: [
+        matComponents.MatInputComponent,
+        matComponents.MatButtonComponent,
+        BreadcrumbComponent,
+        HelpTextBtnDirective,
+        PasswordInputComponent,
+    ],
+    exports: [
+        FormsModule,
+        ReactiveFormsModule,
+        FlexModule,
+        FlexLayoutModule,
+        BreadcrumbComponent,
+        MatTreeModule,
+        HelpTextBtnDirective,
+        UiFormModule,
+        NgSelectModule,
+        TranslateModule
+    ], imports: [CommonModule,
+        ReactiveFormsModule,
+        FormsModule,
+        RouterModule,
+        MatButtonToggleModule,
+        MatIconModule,
+        MatTreeModule,
+        FlexModule, FlexLayoutModule,
+        FormsModule,
+        ReactiveFormsModule,
+        UiFormModule,
+        NgSelectModule,
+        FormlyModule.forChild(), MatCardModule, MatInputModule], providers: [
+        DatePipe,
+        LowerCasePipe,
+        HelpTextService,
+        { provide: NG_VALIDATORS, useValue: PasswordStrength2, multi: true },
+        { provide: NG_VALIDATORS, useValue: matchPasswords, multi: true },
+        provideHttpClient(withInterceptorsFromDi()),
+    ] })
 export class SharedModule {}
diff --git a/src/app/app.module.ts b/src/app/app.module.ts
index 1ea6dbab..e24bd926 100644
--- a/src/app/app.module.ts
+++ b/src/app/app.module.ts
@@ -13,7 +13,7 @@ import {AdaptersPageComponent} from './pages/adapters-page/adapters-page.compone
 import {SettingsPageComponent} from './pages/settings-page/settings-page.component';
 import {UserPageComponent} from './pages/user-page/user-page.component';
 import {ConfirmAppResetDialogComponent} from './dialogs/confirm-app-reset-dialog/confirm-app-reset-dialog.component';
-import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
+import { HttpClient, HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
 import {ObjectKeysPipe} from './pipes/object-keys.pipe';
 import {ImportProgressDialogComponent} from './dialogs/import-progress-dialog/import-progress-dialog.component';
 import {AddNewNodeDialogComponent} from './dialogs/add-new-node-dialog/add-new-node-dialog.component';
@@ -198,8 +198,7 @@ const monacoConfig: NgxMonacoEditorConfig = {
   monacoRequire: (window as any).monacoRequire
 };

-@NgModule({
-    declarations: [
+@NgModule({ declarations: [
         AppComponent,
         LayoutComponent,
         DocsListPageComponent,
@@ -355,36 +354,32 @@ const monacoConfig: NgxMonacoEditorConfig = {
         BlockComparisonBuilderBoxComponent,
         LinkActionComponent
     ],
-  imports: [
-    FormlyModule.forRoot({}),
-    BrowserModule,
-    AppRoutingModule,
-    BrowserAnimationsModule,
-    AppMaterialModule,
-    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
-    TranslateModule.forRoot({
-      loader: {
-        provide: TranslateLoader,
-        useFactory: HttpLoaderFactory,
-        deps: [HttpClient]
-      }
-    }),
-    HttpClientModule,
-    ReactiveFormsModule,
-    FormsModule,
-    NgxTaggerModule,
-    MessagesModule,
-    DragDropModule,
-    LeafletModule,
-    LeafletMarkerClusterModule,
-    FormlyModule.forRoot(config),
-    FormlyMaterialModule,
-    MonacoEditorModule.forRoot(monacoConfig),
-    MatAutocompleteModule,
-    AgGridModule,
-    MatChipsModule
-  ],
-    providers: [
+    bootstrap: [AppComponent], imports: [FormlyModule.forRoot({}),
+        BrowserModule,
+        AppRoutingModule,
+        BrowserAnimationsModule,
+        AppMaterialModule,
+        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
+        TranslateModule.forRoot({
+            loader: {
+                provide: TranslateLoader,
+                useFactory: HttpLoaderFactory,
+                deps: [HttpClient]
+            }
+        }),
+        ReactiveFormsModule,
+        FormsModule,
+        NgxTaggerModule,
+        MessagesModule,
+        DragDropModule,
+        LeafletModule,
+        LeafletMarkerClusterModule,
+        FormlyModule.forRoot(config),
+        FormlyMaterialModule,
+        MonacoEditorModule.forRoot(monacoConfig),
+        MatAutocompleteModule,
+        AgGridModule,
+        MatChipsModule], providers: [
         // This service is from old legacy code and no longer used,
         // so I'm commenting out the init() function and the whole thing
         // can be removed once confirmed nothing is still using it.
@@ -414,9 +409,8 @@ const monacoConfig: NgxMonacoEditorConfig = {
         {
             provide: ErrorHandler,
             useClass: GlobalErrorHandlerService
-        }
-    ],
-    bootstrap: [AppComponent]
-})
+        },
+        provideHttpClient(withInterceptorsFromDi())
+    ] })
 export class AppModule {
 }
diff --git a/src/app/blocks/graphql-block/graphql-block.component.ts b/src/app/blocks/graphql-block/graphql-block.component.ts
index 22b083ea..6453a818 100644
--- a/src/app/blocks/graphql-block/graphql-block.component.ts
+++ b/src/app/blocks/graphql-block/graphql-block.component.ts
@@ -1,6 +1,6 @@
 import { Component } from '@angular/core';
 import {BaseBlockComponent} from '../base-block/base-block.component';
-import {HttpClient} from '@angular/common/http';
+import { HttpClient } from '@angular/common/http';
 import { get, isObject } from 'lodash';
 import {mappingUtility} from '../mapping-block/mapping-util';
 import { SharedStateService } from 'src/app/services/shared-state.service';
diff --git a/src/app/blocks/query-block/query-block.component.ts b/src/app/blocks/query-block/query-block.component.ts
index 35c8502e..ed4dcc09 100644
--- a/src/app/blocks/query-block/query-block.component.ts
+++ b/src/app/blocks/query-block/query-block.component.ts
@@ -1,5 +1,5 @@
 import {Component, EventEmitter, Input, NgZone, OnChanges, OnInit, Output} from '@angular/core';
-import {HttpClient, HttpHeaders} from '@angular/common/http';
+import { HttpClient, HttpHeaders } from '@angular/common/http';
 import {get, has, isString} from 'lodash-es';
 import {DocumentRepositoryService} from '../../services/document-repository.service';
 import {ContextDataService} from '../../services/context-data.service';
diff --git a/src/app/blocks/xlsx-template-block/xlsx-template-block.component.ts b/src/app/blocks/xlsx-template-block/xlsx-template-block.component.ts
index 9f0622ab..1e4fa46f 100644
--- a/src/app/blocks/xlsx-template-block/xlsx-template-block.component.ts
+++ b/src/app/blocks/xlsx-template-block/xlsx-template-block.component.ts
@@ -1,6 +1,6 @@
 import {Component} from '@angular/core';
 import {BaseBlockComponent} from '../base-block/base-block.component';
-import {HttpClient} from '@angular/common/http';
+import { HttpClient } from '@angular/common/http';
 import * as XLSX from 'xlsx';
 import {map} from 'rxjs/operators';
 import {get, isArray, isString} from 'lodash-es';
diff --git a/src/app/dialogs/adapter-blocks-config-select-dialog/adapter-blocks-config-select-dialog.component.ts b/src/app/dialogs/adapter-blocks-config-select-dialog/adapter-blocks-config-select-dialog.component.ts
index 79f9d3e0..366b814f 100644
--- a/src/app/dialogs/adapter-blocks-config-select-dialog/adapter-blocks-config-select-dialog.component.ts
+++ b/src/app/dialogs/adapter-blocks-config-select-dialog/adapter-blocks-config-select-dialog.component.ts
@@ -1,6 +1,6 @@
 import { Component, OnInit } from '@angular/core';
 import {AdaptersService} from '../../services/adapters.service';
-import {HttpClient} from '@angular/common/http';
+import { HttpClient } from '@angular/common/http';
 import {MatDialogRef } from '@angular/material/dialog';
 import {map, tap} from 'rxjs/operators';
 import {get, has, pickBy} from 'lodash-es';
diff --git a/src/app/dialogs/adapter-query-select-dialog/adapter-query-select-dialog.component.ts b/src/app/dialogs/adapter-query-select-dialog/adapter-query-select-dialog.component.ts
index 615cc283..40b8aa9d 100644
--- a/src/app/dialogs/adapter-query-select-dialog/adapter-query-select-dialog.component.ts
+++ b/src/app/dialogs/adapter-query-select-dialog/adapter-query-select-dialog.component.ts
@@ -1,6 +1,6 @@
 import { Component, OnInit } from '@angular/core';
 import { MatDialogRef } from '@angular/material/dialog';
-import {HttpClient} from '@angular/common/http';
+import { HttpClient } from '@angular/common/http';
 import {AdaptersService} from '../../services/adapters.service';
 import {map, tap} from 'rxjs/operators';
 import {get, has, pickBy} from 'lodash-es';
diff --git a/src/app/dialogs/api-data-select-dialog/api-data-select-dialog.component.ts b/src/app/dialogs/api-data-select-dialog/api-data-select-dialog.component.ts
index b0064e23..6e391d24 100644
--- a/src/app/dialogs/api-data-select-dialog/api-data-select-dialog.component.ts
+++ b/src/app/dialogs/api-data-select-dialog/api-data-select-dialog.component.ts
@@ -1,5 +1,5 @@
 import { Component, OnInit } from '@angular/core';
-import {HttpClient} from '@angular/common/http';
+import { HttpClient } from '@angular/common/http';
 import { MatDialogRef } from '@angular/material/dialog';

 @Component({
diff --git a/src/app/dialogs/load-workflow-dialog/load-workflow-dialog.component.ts b/src/app/dialogs/load-workflow-dialog/load-workflow-dialog.component.ts
index d05cbcd4..ef2a8a75 100644
--- a/src/app/dialogs/load-workflow-dialog/load-workflow-dialog.component.ts
+++ b/src/app/dialogs/load-workflow-dialog/load-workflow-dialog.component.ts
@@ -1,6 +1,6 @@
 import { Component, OnInit } from '@angular/core';
 import { MatDialogRef } from '@angular/material/dialog';
-import {HttpClient} from '@angular/common/http';
+import { HttpClient } from '@angular/common/http';
 import {environment} from '../../../environments/environment';

 @Component({
diff --git a/src/app/dialogs/save-workflow-dialog/save-workflow-dialog.component.ts b/src/app/dialogs/save-workflow-dialog/save-workflow-dialog.component.ts
index 348178de..3b70f664 100644
--- a/src/app/dialogs/save-workflow-dialog/save-workflow-dialog.component.ts
+++ b/src/app/dialogs/save-workflow-dialog/save-workflow-dialog.component.ts
@@ -1,6 +1,6 @@
 import {Component, Inject, OnInit} from '@angular/core';
 import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
-import {HttpClient, HttpHeaders} from '@angular/common/http';
+import { HttpClient, HttpHeaders } from '@angular/common/http';
 import {has, get} from 'lodash-es';
 import {environment} from '../../../environments/environment';

diff --git a/src/app/dialogs/swagger-form-select-dialog/swagger-form-select-dialog.component.ts b/src/app/dialogs/swagger-form-select-dialog/swagger-form-select-dialog.component.ts
index 057b7f70..686f9ad9 100644
--- a/src/app/dialogs/swagger-form-select-dialog/swagger-form-select-dialog.component.ts
+++ b/src/app/dialogs/swagger-form-select-dialog/swagger-form-select-dialog.component.ts
@@ -4,7 +4,7 @@ import { MatDialogRef } from '@angular/material/dialog';
 import {map, switchMap, tap} from 'rxjs/operators';
 import {has, pickBy} from 'lodash-es';
 import {forkJoin} from 'rxjs';
-import {HttpClient} from '@angular/common/http';
+import { HttpClient } from '@angular/common/http';
 import {environment} from '../../../environments/environment';

 @Component({
diff --git a/src/app/pages/bloomen-search-page/bloomen-search-page.component.ts b/src/app/pages/bloomen-search-page/bloomen-search-page.component.ts
index 71eb8f2a..825ed33a 100644
--- a/src/app/pages/bloomen-search-page/bloomen-search-page.component.ts
+++ b/src/app/pages/bloomen-search-page/bloomen-search-page.component.ts
@@ -2,7 +2,7 @@ import {Component, OnDestroy, OnInit} from '@angular/core';
 import {UntypedFormControl} from '@angular/forms';
 import {from, of, Subject} from 'rxjs';
 import {catchError, debounceTime, distinctUntilChanged, map, switchMap, takeUntil} from 'rxjs/operators';
-import {HttpClient} from '@angular/common/http';
+import { HttpClient } from '@angular/common/http';

 @Component({
   selector: 'app-bloomen-search-page',
diff --git a/src/app/pages/bloomen-test-page/bloomen-test-page.component.ts b/src/app/pages/bloomen-test-page/bloomen-test-page.component.ts
index ce2e2e9a..a729b123 100644
--- a/src/app/pages/bloomen-test-page/bloomen-test-page.component.ts
+++ b/src/app/pages/bloomen-test-page/bloomen-test-page.component.ts
@@ -1,5 +1,5 @@
 import { Component, OnInit } from '@angular/core';
-import {HttpClient} from '@angular/common/http';
+import { HttpClient } from '@angular/common/http';
 import {tap} from 'rxjs/operators';
 import {TestImportDialogComponent} from '../../dialogs/test-import-dialog/test-import-dialog.component';
 import {PageTitleService} from '../../services/page-title.service';
diff --git a/src/app/pages/kql-builder/kql-builder.component.ts b/src/app/pages/kql-builder/kql-builder.component.ts
index 72a7450f..78860604 100644
--- a/src/app/pages/kql-builder/kql-builder.component.ts
+++ b/src/app/pages/kql-builder/kql-builder.component.ts
@@ -3,7 +3,7 @@ import {JSON_EDITOR_OPTIONS} from './json-editor-options';
 import {KQL_EDITOR_OPTIONS} from './kql-editor-options';
 import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
 import {mappingUtility} from '../../blocks/mapping-block/mapping-util';
-import {HttpClient} from '@angular/common/http';
+import { HttpClient } from '@angular/common/http';
 import {map, take} from 'rxjs/operators';
 import {camelCase, get, sortBy, set} from 'lodash-es';
 import {WorkflowService} from '../../services/workflow.service';
diff --git a/src/app/services/adapter-install.service.ts b/src/app/services/adapter-install.service.ts
index 8a317636..00553463 100644
--- a/src/app/services/adapter-install.service.ts
+++ b/src/app/services/adapter-install.service.ts
@@ -1,5 +1,5 @@
 import { Injectable } from '@angular/core';
-import {HttpClient} from '@angular/common/http';
+import { HttpClient } from '@angular/common/http';
 import {LocalDatabaseService} from './local-database.service';
 import {findIndex, get, has} from 'lodash-es';
 import {AppSettingsService} from './app-settings.service';
diff --git a/src/app/services/bloomen-api.service.ts b/src/app/services/bloomen-api.service.ts
index 701de25f..a169e8d1 100644
--- a/src/app/services/bloomen-api.service.ts
+++ b/src/app/services/bloomen-api.service.ts
@@ -1,7 +1,7 @@
 import { Injectable } from '@angular/core';
 import {map, tap} from 'rxjs/operators';
 import {omit} from 'lodash-es';
-import {HttpClient} from '@angular/common/http';
+import { HttpClient } from '@angular/common/http';

 const BLOOMEN_URL = 'https://bloomen.herokuapp.com'; // no trailing slash

diff --git a/src/app/services/connection-manager.service.ts b/src/app/services/connection-manager.service.ts
index 360f9a7d..666346b2 100644
--- a/src/app/services/connection-manager.service.ts
+++ b/src/app/services/connection-manager.service.ts
@@ -1,6 +1,6 @@
 import { Injectable } from '@angular/core';
 import { set } from 'lodash';
-import {HttpClient} from '@angular/common/http';
+import { HttpClient } from '@angular/common/http';
 import {environment} from '@env/environment';
 import {tap} from 'rxjs/operators';

diff --git a/src/app/services/form-data.service.ts b/src/app/services/form-data.service.ts
index 9dda4c32..bfb24940 100644
--- a/src/app/services/form-data.service.ts
+++ b/src/app/services/form-data.service.ts
@@ -7,7 +7,7 @@ import {DocumentRepositoryService} from './document-repository.service';
 import {map, switchMap, tap} from 'rxjs/operators';
 import {get, has} from 'lodash-es';
 import {ApiDataSelectDialogComponent} from '../dialogs/api-data-select-dialog/api-data-select-dialog.component';
-import {HttpClient} from '@angular/common/http';
+import { HttpClient } from '@angular/common/http';

 @Injectable({
   providedIn: 'root'
diff --git a/src/app/services/workflow-repo.service.ts b/src/app/services/workflow-repo.service.ts
index 5e3afd8d..78074310 100644
--- a/src/app/services/workflow-repo.service.ts
+++ b/src/app/services/workflow-repo.service.ts
@@ -3,7 +3,7 @@ import {AdaptersService} from './adapters.service';
 import {catchError, map, switchMap, tap} from 'rxjs/operators';
 import {get} from 'lodash-es';
 import {from, of} from 'rxjs';
-import {HttpClient} from '@angular/common/http';
+import { HttpClient } from '@angular/common/http';
 import {LocalDatabaseService} from './local-database.service';
 import {environment} from '../../environments/environment';
 import {camelCase} from 'camel-case';
diff --git a/src/app/services/youtube-data.service.ts b/src/app/services/youtube-data.service.ts
index 8ae4dbc6..6dfcc921 100644
--- a/src/app/services/youtube-data.service.ts
+++ b/src/app/services/youtube-data.service.ts
@@ -2,7 +2,7 @@ import { Injectable } from '@angular/core';
 import {AuthService} from './auth.service';
 import {BehaviorSubject, from, of} from 'rxjs';
 import {catchError, map, switchMap, tap} from 'rxjs/operators';
-import {HttpClient, HttpEventType, HttpHeaders} from '@angular/common/http';
+import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';

 @Injectable({
   providedIn: 'root'
diff --git a/src/styles/main.scss b/src/styles/main.scss
index 3c3791c5..aa74795d 100644
--- a/src/styles/main.scss
+++ b/src/styles/main.scss
@@ -8,7 +8,7 @@ Global Style Guide:
 *********/


-@import "~@ng-select/ng-select/themes/material.theme.css";
+@import "@ng-select/ng-select/themes/material.theme.css";

 .ken-tree-invisible {
   display: none;
diff --git a/src/styles/vendor.scss b/src/styles/vendor.scss
index 589de9c2..12b2745f 100644
--- a/src/styles/vendor.scss
+++ b/src/styles/vendor.scss
@@ -5,7 +5,7 @@
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */

-@import "~bootstrap/dist/css/bootstrap.css";
+@import "bootstrap/dist/css/bootstrap.css";

 // Our own variables that override bootstrap
 @import "_variables";
@@ -19,7 +19,7 @@
  */

 // $fa-font-path: "~font-awesome/fonts";  /// maybe??
-// @import "~font-awesome/scss/font-awesome";
+// @import "font-awesome/scss/font-awesome";

 //TODO:  move to main

diff --git a/tsconfig.json b/tsconfig.json
index 41a0e4dc..60c20d68 100644
--- a/tsconfig.json
+++ b/tsconfig.json
@@ -5,6 +5,7 @@
     "outDir": "./dist/out-tsc",
     "sourceMap": true,
     "declaration": false,
+    "esModuleInterop": true,
     "module": "esnext",
     "moduleResolution": "node",
     "emitDecoratorMetadata": true,
@@ -19,7 +20,6 @@
       "es2018",
       "dom"
     ],
-    "allowSyntheticDefaultImports": true,
     "paths": {
       "@env/*": [
         "./src/environments/*"
```

## Commit: de351a8e268c8d79ffbc09b7cdcca0c85f0c92df

**Message:** upgrade 18 cdk

**Author:** gio

**Date:** 2024-08-05

### Diff:

```diff
diff --git a/package.json b/package.json
index b0426250..68140782 100644
--- a/package.json
+++ b/package.json
@@ -25,7 +25,7 @@
   "private": true,
   "dependencies": {
     "@angular/animations": "^18.1.3",
-    "@angular/cdk": "^17.3.10",
+    "@angular/cdk": "^18.1.3",
     "@angular/common": "^18.1.3",
     "@angular/core": "^18.1.3",
     "@angular/flex-layout": "^15.0.0-beta.42",
```

## Commit: 16ed243ff481724cddf8c1a4d78dc008168b0bd6

**Message:** update other angular packages to 18

**Author:** gio

**Date:** 2024-08-05

### Diff:

```diff
diff --git a/package.json b/package.json
index 68140782..6b2b447e 100644
--- a/package.json
+++ b/package.json
@@ -31,7 +31,7 @@
     "@angular/flex-layout": "^15.0.0-beta.42",
     "@angular/forms": "^18.1.3",
     "@angular/localize": "^18.1.3",
-    "@angular/material": "^17.3.10",
+    "@angular/material": "^18.1.3",
     "@angular/platform-browser": "^18.1.3",
     "@angular/platform-browser-dynamic": "^18.1.3",
     "@angular/pwa": "^17.3.8",
@@ -42,9 +42,9 @@
     "@daz.is/jmespath": "^1.3.1",
     "@fortawesome/fontawesome-free": "^5.15.4",
     "@maskito/angular": "^1.4.0",
-    "@maskito/core": "^1.4.0",
+    "@maskito/core": "^3.0.0",
     "@ng-select/ng-select": "^12.0.7",
-    "@ngrx/store": "^17.2.0",
+    "@ngrx/store": "^18.0.2",
     "@ngtools/webpack": "^17.3.8",
     "@ngx-formly/core": "^6.3.6",
     "@ngx-formly/material": "^6.3.6",
@@ -109,17 +109,17 @@
     "@angular-devkit/build-angular": "^18.1.3",
     "@angular-devkit/core": "^18.1.3",
     "@angular-devkit/schematics": "^18.1.3",
-    "@angular-eslint/builder": "^17.5.2",
-    "@angular-eslint/eslint-plugin": "^17.5.2",
-    "@angular-eslint/eslint-plugin-template": "^17.5.2",
-    "@angular-eslint/schematics": "^17.5.2",
-    "@angular-eslint/template-parser": "^17.5.2",
+    "@angular-eslint/builder": "^18.2.0",
+    "@angular-eslint/eslint-plugin": "^18.2.0",
+    "@angular-eslint/eslint-plugin-template": "^18.2.0",
+    "@angular-eslint/schematics": "^18.2.0",
+    "@angular-eslint/template-parser": "^18.2.0",
     "@angular/cli": "^18.1.3",
     "@angular/compiler": "^18.1.3",
     "@angular/compiler-cli": "^18.1.3",
     "@angular/language-service": "^18.1.3",
     "@cypress/schematic": "^1.6.0",
-    "@ngrx/schematics": "^17.2.0",
+    "@ngrx/schematics": "^18.0.2",
     "@types/blob-util": "^1.3.3",
     "@types/chart.js": "^2.9.41",
     "@types/faker": "^5.5.9",
diff --git a/src/styles.scss b/src/styles.scss
index fae9203f..28b6dd22 100644
--- a/src/styles.scss
+++ b/src/styles.scss
@@ -24,20 +24,20 @@
 // Define the palettes for your theme using the Material Design palettes available in palette.scss
 // (imported above). For each palette, you can optionally specify a default, lighter, and darker
 // hue. Available color palettes: https://material.io/design/color/
-$kendraio-app-primary: mat.define-palette(mat.$green-palette);
-$kendraio-app-accent: mat.define-palette(mat.$orange-palette, A200, A100, A400);
+$kendraio-app-primary: mat.m2-define-palette(mat.$m2-green-palette);
+$kendraio-app-accent: mat.m2-define-palette(mat.$m2-orange-palette, A200, A100, A400);

 // The warn palette is optional (defaults to red).
-$kendraio-app-warn: mat.define-palette(mat.$red-palette);
+$kendraio-app-warn: mat.m2-define-palette(mat.$m2-red-palette);

 // Create the theme object (a Sass map containing all of the palettes).
-$kendraio-app-theme: mat.define-light-theme((
+$kendraio-app-theme: mat.m2-define-light-theme((
   color: (
     primary: $kendraio-app-primary,
     accent: $kendraio-app-accent,
     warn: $kendraio-app-warn
   ),
-  typography: mat.define-typography-config(),
+  typography: mat.m2-define-typography-config(),
   density: 0,
 ));

diff --git a/src/styles/_ng-select-theme.scss b/src/styles/_ng-select-theme.scss
index ce5e0c62..ddc730a3 100644
--- a/src/styles/_ng-select-theme.scss
+++ b/src/styles/_ng-select-theme.scss
@@ -10,16 +10,16 @@
     $background: map-get($theme, background);


-    $highlight-color: if($isdark, mat.get-color-from-palette($foreground, text)  ,mat.get-color-from-palette($primary));
+    $highlight-color: if($isdark, mat.m2-get-color-from-palette($foreground, text)  ,mat.m2-get-color-from-palette($primary));

     .ng-select, .ng-select-container, .ng-input>input {
-        color: mat.get-color-from-palette($foreground, text) !important;
+        color: mat.m2-get-color-from-palette($foreground, text) !important;
         font: inherit;
         font-family: inherit;
     }
     .ng-placeholder{
         display: none;
-        color: mat.get-color-from-palette($foreground, text,.54) !important;
+        color: mat.m2-get-color-from-palette($foreground, text,.54) !important;
     }

     .ng-select-focused {
@@ -35,10 +35,10 @@

     .ng-clear-wrapper, .ng-arrow-wrapper{
         height: 1em;
-        color: mat.get-color-from-palette($foreground, text, .4);
+        color: mat.m2-get-color-from-palette($foreground, text, .4);
     }
     .ng-clear-wrapper:hover, .ng-arrow-wrapper:hover{
-        color: mat.get-color-from-palette($foreground, text);
+        color: mat.m2-get-color-from-palette($foreground, text);
     }
     .ng-select .ng-arrow-wrapper .ng-arrow{
         border-left: 5px solid transparent;
@@ -55,8 +55,8 @@
       margin-bottom: -4px;
       .ng-value{
           // WIP
-          color: mat.get-color-from-palette($primary, default-contrast);
-          background: mat.get-color-from-palette($primary);
+          color: mat.m2-get-color-from-palette($primary, default-contrast);
+          background: mat.m2-get-color-from-palette($primary);
           padding: 4px 8px;
           border-radius: 12px;
           margin: 0 4px 2px 0;
@@ -71,15 +71,15 @@

     .ng-dropdown-panel{
         @include mat.elevation(4);
-        background: mat.get-color-from-palette($background, card);
-        color: mat.get-color-from-palette($foreground, text) !important;
+        background: mat.m2-get-color-from-palette($background, card);
+        color: mat.m2-get-color-from-palette($foreground, text) !important;


         .mat-mdc-option.ng-option-selected:not(.ng-option-marked):not(:hover) {
-          background: mat.get-color-from-palette($background, card);
+          background: mat.m2-get-color-from-palette($background, card);

           &:not(.ng-option-disabled) {
-            color: mat.get-color-from-palette($foreground, text);
+            color: mat.m2-get-color-from-palette($foreground, text);
           }
         }

@@ -93,23 +93,23 @@
         &.multiple {
             .ng-option {
                 &.selected {
-                    background: mat.get-color-from-palette($background,card);
+                    background: mat.m2-get-color-from-palette($background,card);
                 }
                 &.marked {
-                    background: mat.get-color-from-palette($foreground, text, .04);
+                    background: mat.m2-get-color-from-palette($foreground, text, .04);
                 }
             }
         }

         .ng-dropdown-header {
-            border-bottom: 1px solid mat.get-color-from-palette($foreground, text,.12);
+            border-bottom: 1px solid mat.m2-get-color-from-palette($foreground, text,.12);
             padding: 0 16px;
             line-height: 3em;
             min-height: 3em;
         }

         .ng-dropdown-footer {
-            border-top: 1px solid mat.get-color-from-palette($foreground, text,.12);
+            border-top: 1px solid mat.m2-get-color-from-palette($foreground, text,.12);
             padding: 0 16px;
             line-height: 3em;
             min-height: 3em;
@@ -122,16 +122,16 @@
                 line-height: 3em;
                 height: 3em;
                 padding: 0 16px;
-                color: mat.get-color-from-palette($foreground, text);
+                color: mat.m2-get-color-from-palette($foreground, text);
                 font-weight: 500;
                 &.ng-option-marked {
-                    background:mat.get-color-from-palette($foreground, text, .04);
+                    background:mat.m2-get-color-from-palette($foreground, text, .04);
                 }
                 &.ng-option-disabled {
                     cursor: default;
                 }
                 &.ng-option-selected {
-                    background: mat.get-color-from-palette($foreground, text, .12);
+                    background: mat.m2-get-color-from-palette($foreground, text, .12);
                     color: $highlight-color;
                 }
             }
@@ -144,19 +144,19 @@
                 padding: 0 16px;
                 text-decoration: none;
                 position: relative;
-                color: mat.get-color-from-palette($foreground, text,.87);
+                color: mat.m2-get-color-from-palette($foreground, text,.87);
                 text-align: left;

                 &.ng-option-marked {
-                    background: mat.get-color-from-palette($foreground, text, .04);
-                    color: mat.get-color-from-palette($foreground, text,.87);
+                    background: mat.m2-get-color-from-palette($foreground, text, .04);
+                    color: mat.m2-get-color-from-palette($foreground, text,.87);
                 }
                 &.ng-option-selected {
-                    background: mat.get-color-from-palette($foreground, text, .12);
+                    background: mat.m2-get-color-from-palette($foreground, text, .12);
                     color: $highlight-color;
                 }
                 &.ng-option-disabled {
-                    color: mat.get-color-from-palette($foreground, text, 0.38);
+                    color: mat.m2-get-color-from-palette($foreground, text, 0.38);
                 }
                 &.ng-option-child {
                     padding-left: 32px;
@@ -165,7 +165,7 @@
                     padding-right: 5px;
                     font-size: 80%;
                     font-weight: 400;
-                    color: mat.get-color-from-palette($foreground, text, 0.38);
+                    color: mat.m2-get-color-from-palette($foreground, text, 0.38);
                 }
             }
         }
```

## Commit: 535c754f820d7579a851f00e1dc0eb221d042cb5

**Message:** update pwa

**Author:** gio

**Date:** 2024-08-05

### Diff:

```diff
diff --git a/package.json b/package.json
index 6b2b447e..11047c7c 100644
--- a/package.json
+++ b/package.json
@@ -34,7 +34,7 @@
     "@angular/material": "^18.1.3",
     "@angular/platform-browser": "^18.1.3",
     "@angular/platform-browser-dynamic": "^18.1.3",
-    "@angular/pwa": "^17.3.8",
+    "@angular/pwa": "^18.1.3",
     "@angular/router": "^18.1.3",
     "@angular/service-worker": "^18.1.3",
     "@asymmetrik/ngx-leaflet": "^17.0.0",
```

## Commit: 3e4d30bdb021a9147a94ce180849c2e32f77fe70

**Message:** upgrade packages

**Author:** gio

**Date:** 2024-08-05

### Diff:

```diff
diff --git a/package.json b/package.json
index 11047c7c..5ec6b117 100644
--- a/package.json
+++ b/package.json
@@ -37,8 +37,8 @@
     "@angular/pwa": "^18.1.3",
     "@angular/router": "^18.1.3",
     "@angular/service-worker": "^18.1.3",
-    "@asymmetrik/ngx-leaflet": "^17.0.0",
-    "@asymmetrik/ngx-leaflet-markercluster": "^17.0.0",
+    "@asymmetrik/ngx-leaflet": "^18.0.1",
+    "@asymmetrik/ngx-leaflet-markercluster": "^18.0.0",
     "@daz.is/jmespath": "^1.3.1",
     "@fortawesome/fontawesome-free": "^5.15.4",
     "@maskito/angular": "^1.4.0",
```

## Commit: 0b0703c3f70a9b06712d49a1d385d624487528b2

**Message:** upgraded maskito packages

**Author:** gio

**Date:** 2024-08-05

### Diff:

```diff
diff --git a/package.json b/package.json
index 5ec6b117..830ed22b 100644
--- a/package.json
+++ b/package.json
@@ -41,7 +41,7 @@
     "@asymmetrik/ngx-leaflet-markercluster": "^18.0.0",
     "@daz.is/jmespath": "^1.3.1",
     "@fortawesome/fontawesome-free": "^5.15.4",
-    "@maskito/angular": "^1.4.0",
+    "@maskito/angular": "^3.0.0",
     "@maskito/core": "^3.0.0",
     "@ng-select/ng-select": "^12.0.7",
     "@ngrx/store": "^18.0.2",
```

## Commit: 653985657416d2b14447132135ec335f2d54b162

**Message:** update ngselect

**Author:** gio

**Date:** 2024-08-06

### Diff:

```diff
diff --git a/package.json b/package.json
index 830ed22b..ce78f207 100644
--- a/package.json
+++ b/package.json
@@ -43,7 +43,7 @@
     "@fortawesome/fontawesome-free": "^5.15.4",
     "@maskito/angular": "^3.0.0",
     "@maskito/core": "^3.0.0",
-    "@ng-select/ng-select": "^12.0.7",
+    "@ng-select/ng-select": "^13.5.2",
     "@ngrx/store": "^18.0.2",
     "@ngtools/webpack": "^17.3.8",
     "@ngx-formly/core": "^6.3.6",
```

## Commit: e9bc2c139fecc7eb9c4d24b51cca910efb53a79a

**Message:** ngtool/webpack

**Author:** gio

**Date:** 2024-08-06

### Diff:

```diff
diff --git a/package.json b/package.json
index ce78f207..25b53366 100644
--- a/package.json
+++ b/package.json
@@ -45,7 +45,7 @@
     "@maskito/core": "^3.0.0",
     "@ng-select/ng-select": "^13.5.2",
     "@ngrx/store": "^18.0.2",
-    "@ngtools/webpack": "^17.3.8",
+    "@ngtools/webpack": "^18.1.3",
     "@ngx-formly/core": "^6.3.6",
     "@ngx-formly/material": "^6.3.6",
     "@ngx-translate/core": "^14.0.0",
```

## Commit: 11094df2bb6cc031bfaf39ff26681f54823b188b

**Message:** monaco-editor

**Author:** gio

**Date:** 2024-08-06

### Diff:

```diff
diff --git a/package.json b/package.json
index 25b53366..b143dc50 100644
--- a/package.json
+++ b/package.json
@@ -85,10 +85,10 @@
     "luxon": "^1.28.0",
     "lz-string": "^1.5.0",
     "mermaid": "^9.1.7",
-    "monaco-editor": "^0.44.0",
+    "monaco-editor": "^0.50.0",
     "ng-update": "^0.0.0",
     "ngx-material-timepicker": "^13.1.1",
-    "ngx-monaco-editor-v2": "^17.0.1",
+    "ngx-monaco-editor-v2": "^18.1.0",
     "papaparse": "^5.4.1",
     "param-case": "^3.0.4",
     "pascal-case": "^3.1.2",
```

## Commit: 377f320b5752b27cf73d46a09638bae7a7144997

**Message:** upgrade types, change serviceWorker

**Author:** gio

**Date:** 2024-08-07

### Diff:

```diff
diff --git a/angular.json b/angular.json
index 131a5614..03d028c4 100644
--- a/angular.json
+++ b/angular.json
@@ -95,7 +95,7 @@
                   "maximumWarning": "6kb"
                 }
               ],
-              "serviceWorker": true
+              "serviceWorker": "true"
             },
             "dev": {
               "fileReplacements": [
@@ -126,7 +126,7 @@
                   "maximumWarning": "6kb"
                 }
               ],
-              "serviceWorker": true
+              "serviceWorker": "true"
             }
           },
           "defaultConfiguration": "dev"
diff --git a/package.json b/package.json
index b143dc50..471abd29 100644
--- a/package.json
+++ b/package.json
@@ -2,7 +2,7 @@
   "name": "kendraio-app",
   "version": "0.5.0",
   "engines": {
-    "node": ">=16.13"
+    "node": ">=18.19.0"
   },
   "scripts": {
     "start:dev": "npm-run-all serve:dev",
@@ -52,12 +52,12 @@
     "@ngx-translate/http-loader": "^6.0.0",
     "ag-grid-angular": "^31.3.0",
     "ag-grid-community": "^31.3.0",
-    "ajv": "^8.16.0",
+    "ajv": "^8.17.1",
     "ajv-errors": "^3.0.0",
     "ajv-formats": "^2.1.1",
     "amplitudejs": "^5.3.2",
     "auth0-js": "^9.26.1",
-    "axios": "^1.7.2",
+    "axios": "^1.7.3",
     "blob-util": "^2.0.2",
     "bootstrap": "^5.3.3",
     "bootstrap-scss": "^5.3.3",
@@ -65,7 +65,7 @@
     "buffer-crc32": "^0.2.13",
     "camel-case": "^4.1.2",
     "chart.js": "^2.9.4",
-    "core-js": "^3.37.1",
+    "core-js": "^3.38.0",
     "dexie": "^3.2.2",
     "dompurify": "^2.3.3",
     "faker": "^5.5.3",
@@ -92,7 +92,7 @@
     "papaparse": "^5.4.1",
     "param-case": "^3.0.4",
     "pascal-case": "^3.1.2",
-    "qs": "^6.12.3",
+    "qs": "^6.13.0",
     "reflect-metadata": "^0.1.13",
     "rxjs": "~6.6.7",
     "schema-utils": "^4.2.0",
@@ -120,30 +120,30 @@
     "@angular/language-service": "^18.1.3",
     "@cypress/schematic": "^1.6.0",
     "@ngrx/schematics": "^18.0.2",
-    "@types/blob-util": "^1.3.3",
+    "@types/blob-util": "^2.0.0",
     "@types/chart.js": "^2.9.41",
-    "@types/faker": "^5.5.9",
+    "@types/faker": "^6.6.9",
     "@types/handlebars": "^4.1.0",
-    "@types/jasmine": "~3.10.2",
+    "@types/jasmine": "~5.1.4",
     "@types/jasminewd2": "~2.0.13",
     "@types/jmespath": "^0.15.0",
-    "@types/js-yaml": "^3.12.7",
+    "@types/js-yaml": "^4.0.9",
     "@types/json-stringify-safe": "^5.0.3",
     "@types/leaflet": "^1.9.12",
     "@types/leaflet.markercluster": "^1.5.4",
     "@types/lodash-es": "^4.17.12",
-    "@types/luxon": "^2.0.5",
-    "@types/mermaid": "^8.2.9",
-    "@types/node": "^18.15.1",
+    "@types/luxon": "^3.4.2",
+    "@types/mermaid": "^9.2.0",
+    "@types/node": "^22.1.0",
     "@types/papaparse": "^5.3.14",
     "@types/qs": "^6.9.15",
-    "@types/showdown": "^1.9.4",
-    "@types/tus-js-client": "^1.8.0",
-    "@types/uuid": "^8.3.1",
-    "@types/wavesurfer.js": "^2.0.2",
+    "@types/showdown": "^2.0.6",
+    "@types/tus-js-client": "^2.1.0",
+    "@types/uuid": "^10.0.0",
+    "@types/wavesurfer.js": "^6.0.12",
     "@typescript-eslint/eslint-plugin": "5.48.2",
     "@typescript-eslint/parser": "5.48.2",
-    "cypress": "^13.13.1",
+    "cypress": "^13.13.2",
     "cypress-localstorage-commands": "^2.2.6",
     "electron": "^23.1.3",
     "eslint": "^8.39.0",
@@ -157,14 +157,14 @@
     "karma-jasmine-html-reporter": "^2.1.0",
     "mochawesome": "^7.1.3",
     "ng-packagr": "^18.1.0",
-    "nodemon": "^2.0.15",
+    "nodemon": "^3.1.4",
     "npm-run-all": "^4.1.5",
     "serve": "^14.2.3",
     "start-server-and-test": "^2.0.5",
     "ts-node": "^10.9.2",
     "tslib": "^2.6.3",
-    "typescript": "^5.3.3",
-    "webpack": "^5.92.1",
+    "typescript": "^5.5.4",
+    "webpack": "^5.93.0",
     "webpack-dev-server": "^4.4.0",
     "xvfb-maybe": "^0.2.1"
   },
```

## Commit: 1e92855ee6cba592cabf3323def4dff29b843324

**Message:** fix imports, serviceWorkers, polyfill, deep style and more

**Author:** gio

**Date:** 2024-08-07

### Diff:

```diff
diff --git a/angular.json b/angular.json
index 03d028c4..6daf0371 100644
--- a/angular.json
+++ b/angular.json
@@ -28,7 +28,9 @@
             },
             "index": "src/index.html",
             "polyfills": [
-              "src/polyfills.ts"
+              "src/polyfills.ts",
+              "zone.js",
+              "@angular/localize/init"
             ],
             "tsConfig": "src/tsconfig.app.json",
             "assets": [
@@ -95,7 +97,7 @@
                   "maximumWarning": "6kb"
                 }
               ],
-              "serviceWorker": "true"
+              "serviceWorker": "ngsw-config.json"
             },
             "dev": {
               "fileReplacements": [
@@ -126,7 +128,7 @@
                   "maximumWarning": "6kb"
                 }
               ],
-              "serviceWorker": "true"
+              "serviceWorker": "ngsw-config.json"
             }
           },
           "defaultConfiguration": "dev"
diff --git a/src/app/_shared/components/material/mat-button.component.ts b/src/app/_shared/components/material/mat-button.component.ts
index b051cb0c..c8ad97ca 100644
--- a/src/app/_shared/components/material/mat-button.component.ts
+++ b/src/app/_shared/components/material/mat-button.component.ts
@@ -14,8 +14,7 @@ import {IHeaderAngularComp, ICellRendererAngularComp} from 'ag-grid-angular';
             width: 100%;
         }

-        /deep/
-        .ag-header-cell {
+        ::ng-deep .ag-header-cell {
             text-align: left;
         }
     `]
diff --git a/src/app/_shared/ui-form/config.ts b/src/app/_shared/ui-form/config.ts
index 85846bd3..0e6f7230 100644
--- a/src/app/_shared/ui-form/config.ts
+++ b/src/app/_shared/ui-form/config.ts
@@ -20,7 +20,7 @@ import {
 // import { RepeatSectionComponent } from './types/repeat-section.component';
 // import { FormlyFieldInputMoney } from './types/money.component';
 import { KendraFieldInputPercentage } from './types/percentage.component';
-import { ConfigOption, FormlyFieldConfig } from '@ngx-formly/core';
+import { ConfigOption } from '@ngx-formly/core';

 import * as types from './types';
 import {FormlyImageInputComponent} from '../../form-controls/formly-image-input/formly-image-input.component';
@@ -30,7 +30,6 @@ import {FormlyBlocksInputComponent} from '../../form-controls/formly-blocks-inpu
 import {FormlyWorkflowFieldComponent} from '../../form-controls/formly-workflow-field/formly-workflow-field.component';
 import {FormlyCardListComponent} from '../../form-controls/formly-card-list/formly-card-list.component';
 import {FormlyTableWidgetComponent} from '../../form-controls/formly-table-widget/formly-table-widget.component';
-import {FormlyFieldFileComponent} from './types/file-type.component';
 import {FormlyFileInputComponent} from '../../form-controls/formly-file-input/formly-file-input.component';
 import {FormlyPaginatedWidgetComponent} from '../../form-controls/formly-paginated-widget/formly-paginated-widget.component';
 import {ReadonlyInputComponent} from '../../form-controls/readonly-input/readonly-input.component';
@@ -243,7 +242,6 @@ export const config: ConfigOption = {
     {
       name: 'file',
       component: FormlyFileInputComponent
-      // component: FormlyFieldFileComponent,
       // wrappers: ['form-field']
     },
   ],
diff --git a/src/app/_shared/ui-form/ui-form.module.ts b/src/app/_shared/ui-form/ui-form.module.ts
index 90abb269..265a1562 100644
--- a/src/app/_shared/ui-form/ui-form.module.ts
+++ b/src/app/_shared/ui-form/ui-form.module.ts
@@ -19,7 +19,7 @@ import {FormlyFieldFileComponent} from './types/file-type.component';
 import {FormlyModule} from '@ngx-formly/core';
 import {MatCardModule} from '@angular/material/card';
 import {MatInputModule} from '@angular/material/input';
-import {MaskitoModule} from '@maskito/angular';
+import {MaskitoDirective} from '@maskito/angular';
 import {MatRadioModule} from '@angular/material/radio';

 @NgModule({
@@ -40,7 +40,7 @@ import {MatRadioModule} from '@angular/material/radio';
     FormlyModule.forChild(),
     MatCardModule,
     MatInputModule,
-    MaskitoModule,
+    MaskitoDirective,
     MatRadioModule
   ],
   exports: [
diff --git a/src/app/blocks/chart-block/chart-block.component.ts b/src/app/blocks/chart-block/chart-block.component.ts
index e7fecb87..44de7dfe 100644
--- a/src/app/blocks/chart-block/chart-block.component.ts
+++ b/src/app/blocks/chart-block/chart-block.component.ts
@@ -1,6 +1,6 @@
 import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
 import {clone, cloneDeep, get, isArray, isObject, isString} from 'lodash-es';
-import * as Chart from 'chart.js';
+import Chart from 'chart.js';
 import {BehaviorSubject, combineLatest, Subject} from 'rxjs';
 import {filter, map, takeUntil, tap} from 'rxjs/operators';
 import {mappingUtility} from '../mapping-block/mapping-util';
diff --git a/src/app/blocks/data-import-block/data-import-block.component.ts b/src/app/blocks/data-import-block/data-import-block.component.ts
index 5c6f78ed..89b44744 100644
--- a/src/app/blocks/data-import-block/data-import-block.component.ts
+++ b/src/app/blocks/data-import-block/data-import-block.component.ts
@@ -1,8 +1,6 @@
-import { Component, OnInit } from '@angular/core';
+import { Component } from '@angular/core';
 import {BaseBlockComponent} from '../base-block/base-block.component';
-import {parse} from 'papaparse';
 import {flatten, get} from 'lodash-es';
-import * as X2JS from 'x2js';

 @Component({
   selector: 'app-data-import-block',
diff --git a/src/app/blocks/faker-block/faker-block.component.ts b/src/app/blocks/faker-block/faker-block.component.ts
index d5b5873b..67d3dcd5 100644
--- a/src/app/blocks/faker-block/faker-block.component.ts
+++ b/src/app/blocks/faker-block/faker-block.component.ts
@@ -1,5 +1,5 @@
-import {Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
-import {get, has} from 'lodash-es';
+import {Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
+import {get} from 'lodash-es';
 import {KendraioFormService} from '../../_shared/ui-form/services/kendraio.form.service';
 import * as faker from 'faker/locale/en_GB';

diff --git a/src/app/blocks/file-export-block/file-export-block.component.ts b/src/app/blocks/file-export-block/file-export-block.component.ts
index 324c4ab7..e4f0b56c 100644
--- a/src/app/blocks/file-export-block/file-export-block.component.ts
+++ b/src/app/blocks/file-export-block/file-export-block.component.ts
@@ -1,8 +1,8 @@
 import { Component } from '@angular/core';
 import {BaseBlockComponent} from '../base-block/base-block.component';
 import {get, has, isArray, isObject, isString} from 'lodash-es';
-import * as stringify from 'json-stringify-safe';
-import * as X2JS from 'x2js';
+import stringify from 'json-stringify-safe';
+import X2JS from 'x2js';

 @Component({
   selector: 'app-file-export-block',
diff --git a/src/app/blocks/parse-data-block/parse-data-block.component.ts b/src/app/blocks/parse-data-block/parse-data-block.component.ts
index 724a8ca1..12e76ddc 100644
--- a/src/app/blocks/parse-data-block/parse-data-block.component.ts
+++ b/src/app/blocks/parse-data-block/parse-data-block.component.ts
@@ -1,7 +1,7 @@
 import { Component } from '@angular/core';
 import {BaseBlockComponent} from '../base-block/base-block.component';
 import {parse} from 'papaparse';
-import * as X2JS from 'x2js';
+import X2JS from 'x2js';
 import {fromPairs, get} from 'lodash-es';
 import * as XLSX from 'xlsx';

diff --git a/src/app/blocks/serialize-data-block/serialize-data-block.component.ts b/src/app/blocks/serialize-data-block/serialize-data-block.component.ts
index dceb299b..496fa8e3 100644
--- a/src/app/blocks/serialize-data-block/serialize-data-block.component.ts
+++ b/src/app/blocks/serialize-data-block/serialize-data-block.component.ts
@@ -1,7 +1,7 @@
 import {Component} from '@angular/core';
 import {BaseBlockComponent} from '../base-block/base-block.component';
-import * as serialize from 'json-stringify-safe';
-import * as X2JS from 'x2js';
+import serialize from 'json-stringify-safe';
+import X2JS from 'x2js';
 import {unparse} from 'papaparse';
 import {get, isArray, isNull, isObject} from 'lodash-es';

diff --git a/src/app/blocks/variable-set/variable-set.component.ts b/src/app/blocks/variable-set/variable-set.component.ts
index 6fd07b95..7731777c 100644
--- a/src/app/blocks/variable-set/variable-set.component.ts
+++ b/src/app/blocks/variable-set/variable-set.component.ts
@@ -1,6 +1,6 @@
-import {Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
-import {clone, get, isArray, isObject} from 'lodash-es';
-import * as stringify from 'json-stringify-safe';
+import {Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
+import {clone, get, isObject} from 'lodash-es';
+import stringify from 'json-stringify-safe';
 import { MatSnackBar } from '@angular/material/snack-bar';
 import {AppSettingsService} from '../../services/app-settings.service';
 import {mappingUtility} from '../mapping-block/mapping-util';
diff --git a/src/app/components/data-chart-output/data-chart-output.component.ts b/src/app/components/data-chart-output/data-chart-output.component.ts
index e1641f5b..131935c8 100644
--- a/src/app/components/data-chart-output/data-chart-output.component.ts
+++ b/src/app/components/data-chart-output/data-chart-output.component.ts
@@ -1,5 +1,5 @@
 import {AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
-import * as Chart from 'chart.js';
+import Chart from 'chart.js';
 import {get} from 'lodash-es';

 @Component({
diff --git a/src/app/components/waveform/waveform.component.ts b/src/app/components/waveform/waveform.component.ts
index 4c25b2b2..12c67557 100644
--- a/src/app/components/waveform/waveform.component.ts
+++ b/src/app/components/waveform/waveform.component.ts
@@ -9,7 +9,7 @@ import {
   Output,
   ViewChild
 } from '@angular/core';
-import * as WaveSurfer from 'wavesurfer.js';
+import WaveSurfer from 'wavesurfer.js';
 // import RegionPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.regions.min.js';

 @Component({
diff --git a/src/app/dialogs/import-progress-dialog/import-progress-dialog.component.ts b/src/app/dialogs/import-progress-dialog/import-progress-dialog.component.ts
index 2ae08271..457e4e2c 100644
--- a/src/app/dialogs/import-progress-dialog/import-progress-dialog.component.ts
+++ b/src/app/dialogs/import-progress-dialog/import-progress-dialog.component.ts
@@ -2,7 +2,7 @@ import { Component, Inject, OnInit } from '@angular/core';
 import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
 import { interval } from 'rxjs';
 import { startWith, take } from 'rxjs/operators';
-import * as X2JS from 'x2js';
+import X2JS from 'x2js';
 import { DocumentRepositoryService } from '../../services/document-repository.service';

 @Component({
diff --git a/src/app/directives/doughnut-chart.directive.ts b/src/app/directives/doughnut-chart.directive.ts
index a98626fc..83e748eb 100644
--- a/src/app/directives/doughnut-chart.directive.ts
+++ b/src/app/directives/doughnut-chart.directive.ts
@@ -1,7 +1,7 @@
 import { AfterViewInit, Directive, ElementRef, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
-import * as Chart from 'chart.js';
+import Chart from 'chart.js';
 import { Subject } from 'rxjs';
-import { map, takeUntil, tap } from 'rxjs/operators';
+import { takeUntil } from 'rxjs/operators';

 @Directive({
   selector: '[appDoughnutChart]'
diff --git a/src/app/directives/track-clip.directive.ts b/src/app/directives/track-clip.directive.ts
index ec70e282..2ca0e290 100644
--- a/src/app/directives/track-clip.directive.ts
+++ b/src/app/directives/track-clip.directive.ts
@@ -1,10 +1,8 @@
 import {
-  AfterViewInit,
   Directive,
   ElementRef,
   EventEmitter,
   HostBinding,
-  Input,
   Output
 } from '@angular/core';
 import * as interact_ from 'interactjs';
diff --git a/src/app/pages/blocks-builder-page/blocks-builder-page.component.ts b/src/app/pages/blocks-builder-page/blocks-builder-page.component.ts
index 1e7cf1e3..b334b414 100644
--- a/src/app/pages/blocks-builder-page/blocks-builder-page.component.ts
+++ b/src/app/pages/blocks-builder-page/blocks-builder-page.component.ts
@@ -1,17 +1,9 @@
 import {Component, OnInit} from '@angular/core';
-import {clone, get, has, isArray} from 'lodash-es';
-import {moveItemInArray} from '@angular/cdk/drag-drop';
 import {ShareLinkGeneratorService} from '../../services/share-link-generator.service';
 import {AdaptersService} from '../../services/adapters.service';
 import {filter, take} from 'rxjs/operators';
 import { MatDialog } from '@angular/material/dialog';
-import {AdapterBlocksConfigSelectDialogComponent} from
-    '../../dialogs/adapter-blocks-config-select-dialog/adapter-blocks-config-select-dialog.component';
-import {ExportConfigDialogComponent} from '../../dialogs/export-config-dialog/export-config-dialog.component';
-import {PasteConfigDialogComponent} from '../../dialogs/paste-config-dialog/paste-config-dialog.component';
-import * as stringify from 'json-stringify-safe';
 import {PageTitleService} from '../../services/page-title.service';
-import {AddBlockDialogComponent} from '../../dialogs/add-block-dialog/add-block-dialog.component';
 import {WorkflowService} from '../../services/workflow.service';

 @Component({
diff --git a/src/app/services/adapter-install.service.ts b/src/app/services/adapter-install.service.ts
index 00553463..4aab57b0 100644
--- a/src/app/services/adapter-install.service.ts
+++ b/src/app/services/adapter-install.service.ts
@@ -1,10 +1,9 @@
 import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http';
 import {LocalDatabaseService} from './local-database.service';
-import {findIndex, get, has} from 'lodash-es';
+import {get, has} from 'lodash-es';
 import {AppSettingsService} from './app-settings.service';
 import { MatSnackBar } from '@angular/material/snack-bar';
-import * as LZS from 'lz-string';

 @Injectable({
   providedIn: 'root'
diff --git a/src/app/services/schema-repository.service.ts b/src/app/services/schema-repository.service.ts
index 0e4ca981..bd65a86e 100644
--- a/src/app/services/schema-repository.service.ts
+++ b/src/app/services/schema-repository.service.ts
@@ -1,7 +1,7 @@
 import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http';
 import { map, tap } from 'rxjs/operators';
-import { safeLoad as YamlLoad } from 'js-yaml';
+const yaml = require('js-yaml');
 import { forkJoin } from 'rxjs';

 @Injectable({
@@ -26,7 +26,7 @@ export class SchemaRepositoryService {
     return forkJoin(enabledSchemas.map(schemaName => this.http
       .get(`assets/schemas/${ schemaName }.yaml`, {responseType: 'text'})
       .pipe(
-        map(text => YamlLoad(text)),
+        map(text => yaml.load(text)),
         tap(schema => this.schemas[schemaName] = schema)
       )))
       .toPromise();
diff --git a/src/app/services/workflow.service.ts b/src/app/services/workflow.service.ts
index 9d5fea5b..52ecc63c 100644
--- a/src/app/services/workflow.service.ts
+++ b/src/app/services/workflow.service.ts
@@ -1,8 +1,8 @@
 import { Injectable } from '@angular/core';
 import {NavigationEnd, Router} from '@angular/router';
-import {filter, take, tap, withLatestFrom} from 'rxjs/operators';
+import {filter, take, withLatestFrom} from 'rxjs/operators';
 import {ExportConfigDialogComponent} from '../dialogs/export-config-dialog/export-config-dialog.component';
-import * as stringify from 'json-stringify-safe';
+import stringify from 'json-stringify-safe';
 import {PasteConfigDialogComponent} from '../dialogs/paste-config-dialog/paste-config-dialog.component';
 import {clone, findIndex, get, has, isArray, pick, set} from 'lodash-es';
 import { MatDialog } from '@angular/material/dialog';
diff --git a/src/main.ts b/src/main.ts
index e76caeea..07c43151 100644
--- a/src/main.ts
+++ b/src/main.ts
@@ -1,12 +1,21 @@

 import { enableProdMode } from '@angular/core';
 import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
-
 import { AppModule } from './app/app.module';
 import { environment } from './environments/environment';

 if (environment.production) {
   enableProdMode();
+
+  if ('serviceWorker' in navigator) {
+    window.addEventListener('load', () => {
+      navigator.serviceWorker.register('/ngsw-worker.js').then(registration => {
+        console.log('ServiceWorker registration successful with scope: ', registration.scope);
+      }, err => {
+        console.log('ServiceWorker registration failed: ', err);
+      });
+    });
+  }
 }

 platformBrowserDynamic().bootstrapModule(AppModule)
diff --git a/src/styles.scss b/src/styles.scss
index 28b6dd22..fb869c72 100644
--- a/src/styles.scss
+++ b/src/styles.scss
@@ -5,18 +5,9 @@
 @import "@fortawesome/fontawesome-free/css/all.css";
 // Custom Theming for Angular Material
 // For more information: https://material.angular.io/guide/theming
-// Plus imports for other components in your app.
-
-// Include the common styles for Angular Material. We include this here so that you only
-// have to load a single css file for Angular Material in your app.
-// Be sure that you only ever include this mixin once!
-// TODO(v15): As of v15 mat.legacy-core no longer includes default typography styles.
-//  The following line adds:
-//    1. Default typography styles for all components
-//    2. Styles for typography hierarchy classes (e.g. .mat-headline-1)
-//  If you specify typography styles for the components you use elsewhere, you should delete this line.
-//  If you don't need the default component typographies but still want the hierarchy styles,
-//  you can delete this line and instead use:
+
+// Include the common styles for Angular Material.
+// We include this here so that you only have to load a single css file for Angular Material in your app.

 @include mat.all-component-typographies();
 @include mat.core();
```

## Commit: 2913ce365b2cc66cca1ab86ecc88ab893603265b

**Message:** fix yaml and axios import

**Author:** gio

**Date:** 2024-08-08

### Diff:

```diff
diff --git a/src/app/_shared/services/uphold_service.ts b/src/app/_shared/services/uphold_service.ts
index c9aff6f2..e91cf761 100644
--- a/src/app/_shared/services/uphold_service.ts
+++ b/src/app/_shared/services/uphold_service.ts
@@ -3,7 +3,8 @@ import { search } from '@daz.is/jmespath';

 import { environment } from '../../../environments/environment';
 import * as uuid from 'uuid';
-const axios = require('axios').default;
+// const axios = require('axios').default;
+import axios from 'axios';

 const UPHOLD_OAUTH_PROXY_URL = environment.uphold.proxy + 'api/login?code=';
 const UPHOLD_SITE_ROOT = environment.uphold.siteRoot;
diff --git a/src/app/services/schema-repository.service.ts b/src/app/services/schema-repository.service.ts
index bd65a86e..ec73ad97 100644
--- a/src/app/services/schema-repository.service.ts
+++ b/src/app/services/schema-repository.service.ts
@@ -1,7 +1,7 @@
 import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http';
 import { map, tap } from 'rxjs/operators';
-const yaml = require('js-yaml');
+import * as yaml from 'js-yaml';
 import { forkJoin } from 'rxjs';

 @Injectable({
```

## Commit: 038e6e86c2dae249b854309475f1057fde374791

**Message:** upgrade patch Material UI

**Author:** gio

**Date:** 2024-08-12

### Diff:

```diff
diff --git a/package.json b/package.json
index 471abd29..320c51c5 100644
--- a/package.json
+++ b/package.json
@@ -31,7 +31,7 @@
     "@angular/flex-layout": "^15.0.0-beta.42",
     "@angular/forms": "^18.1.3",
     "@angular/localize": "^18.1.3",
-    "@angular/material": "^18.1.3",
+    "@angular/material": "^18.1.4",
     "@angular/platform-browser": "^18.1.3",
     "@angular/platform-browser-dynamic": "^18.1.3",
     "@angular/pwa": "^18.1.3",
```

## Commit: df78b94dbc315bf4d4f96d753e08fbb452ff9c1f

**Message:** codemod from ag-grid

**Author:** gio

**Date:** 2024-08-13

### Diff:

```diff
diff --git a/package.json b/package.json
index 320c51c5..14192c42 100644
--- a/package.json
+++ b/package.json
@@ -50,8 +50,8 @@
     "@ngx-formly/material": "^6.3.6",
     "@ngx-translate/core": "^14.0.0",
     "@ngx-translate/http-loader": "^6.0.0",
-    "ag-grid-angular": "^31.3.0",
-    "ag-grid-community": "^31.3.0",
+    "ag-grid-angular": "^32.0.0",
+    "ag-grid-community": "^32.0.0",
     "ajv": "^8.17.1",
     "ajv-errors": "^3.0.0",
     "ajv-formats": "^2.1.1",
diff --git a/src/app/blocks/grid-block/grid-block.component.ts b/src/app/blocks/grid-block/grid-block.component.ts
index cebd246f..8bf6dc9f 100644
--- a/src/app/blocks/grid-block/grid-block.component.ts
+++ b/src/app/blocks/grid-block/grid-block.component.ts
@@ -121,7 +121,7 @@ export class GridBlockComponent implements OnInit, OnChanges {
   preprocessColumnDefinition(def: Array<any>) {
     return def.map(item => ({
       ...item,
-      ...has(item, 'valueGetter') ? {
+      ...(has(item, 'valueGetter') ? {
         valueGetter: ({ data }) => {
           try {
             return mappingUtility(data, item['valueGetter']);
@@ -129,8 +129,8 @@ export class GridBlockComponent implements OnInit, OnChanges {
             return e.message;
           }
         }
-      } : {},
-      ...has(item, 'valueFormatter') ? {
+      } : {}),
+      ...(has(item, 'valueFormatter') ? {
         valueFormatter: (params) => {
           try {
             return mappingUtility(params, item['valueFormatter']);
@@ -138,10 +138,8 @@ export class GridBlockComponent implements OnInit, OnChanges {
             return e.message;
           }
         }
-      } : {},
-      ...has(item, 'cellRendererParams')
-        ? { cellRendererParams: { ...item.cellRendererParams, context: this.context } }
-        : {}
+      } : {}),
+      ...(has(item, 'cellRendererParams') ? { cellRendererParams: { ...item.cellRendererParams, context: this.context } } : {})
     }));
   }

diff --git a/src/app/blocks/image-block/image-block.component.ts b/src/app/blocks/image-block/image-block.component.ts
index d3fc8a52..f19c4ae8 100644
--- a/src/app/blocks/image-block/image-block.component.ts
+++ b/src/app/blocks/image-block/image-block.component.ts
@@ -29,7 +29,7 @@ export class ImageBlockComponent implements OnInit, OnChanges {
   ngOnChanges(changes) {
     this.type = get(this.config, 'type', '');
     // this.title = compile(get(this.config, 'title', ''))({ context: this.context || {}, data: this.model, ...this.model || {} });
-    this.src = compile(get(this.config, 'src', ''))({ context: this.context || {}, data: this.model, ...this.model || {} });
+    this.src = compile(get(this.config, 'src', ''))({ context: this.context || {}, data: this.model, ...(this.model || {}) });
     this.output.emit(clone(this.model));
   }

diff --git a/src/app/blocks/message-block/message-block.component.ts b/src/app/blocks/message-block/message-block.component.ts
index a95459dd..81011959 100644
--- a/src/app/blocks/message-block/message-block.component.ts
+++ b/src/app/blocks/message-block/message-block.component.ts
@@ -50,8 +50,8 @@ export class MessageBlockComponent implements OnInit, OnChanges {

   ngOnChanges(changes) {
     this.type = get(this.config, 'type', '');
-    this.title = compile(get(this.config, 'title', ''))({ context: this.context || {}, data: this.model, ...this.model || {} });
-    this.message = compile(get(this.config, 'message', ''))({ context: this.context || {}, data: this.model, ...this.model || {} });
+    this.title = compile(get(this.config, 'title', ''))({ context: this.context || {}, data: this.model, ...(this.model || {}) });
+    this.message = compile(get(this.config, 'message', ''))({ context: this.context || {}, data: this.model, ...(this.model || {}) });
     this.output.emit(clone(this.model));
   }

diff --git a/src/app/blocks/vimeo-block/vimeo-block.component.ts b/src/app/blocks/vimeo-block/vimeo-block.component.ts
index ec213342..64756b1f 100644
--- a/src/app/blocks/vimeo-block/vimeo-block.component.ts
+++ b/src/app/blocks/vimeo-block/vimeo-block.component.ts
@@ -38,7 +38,7 @@ export class VimeoBlockComponent  implements OnInit, OnChanges  {
   ngOnChanges(changes) {
     this.type = get(this.config, 'type', '');
     // this.title = compile(get(this.config, 'title', ''))({ context: this.context || {}, data: this.model, ...this.model || {} });
-    this.src = compile(get(this.config, 'src', ''))({ context: this.context || {}, data: this.model, ...this.model || {} });
+    this.src = compile(get(this.config, 'src', ''))({ context: this.context || {}, data: this.model, ...(this.model || {}) });
     this.output.emit(clone(this.model));


diff --git a/src/app/form-controls/formly-blocks-input/formly-blocks-input.component.ts b/src/app/form-controls/formly-blocks-input/formly-blocks-input.component.ts
index 29f906a0..f542b7ac 100644
--- a/src/app/form-controls/formly-blocks-input/formly-blocks-input.component.ts
+++ b/src/app/form-controls/formly-blocks-input/formly-blocks-input.component.ts
@@ -27,7 +27,7 @@ export class FormlyBlocksInputComponent extends FieldType implements OnInit, OnC
       app: {
         adapterName,
       },
-      ...this.options['context'] || {}
+      ...(this.options['context'] || {})
     };
     this.models.push(this.formControl.value);
   }
@@ -39,7 +39,7 @@ export class FormlyBlocksInputComponent extends FieldType implements OnInit, OnC
       app: {
         adapterName,
       },
-      ...this.options['context'] || {}
+      ...(this.options['context'] || {})
     };
   }

diff --git a/src/app/pages/query-builder-page/query-builder-page.component.ts b/src/app/pages/query-builder-page/query-builder-page.component.ts
index ef91549f..d6eebfe4 100644
--- a/src/app/pages/query-builder-page/query-builder-page.component.ts
+++ b/src/app/pages/query-builder-page/query-builder-page.component.ts
@@ -195,14 +195,14 @@ export class QueryBuilderPageComponent implements OnInit, AfterViewInit {
   preprocessColumnDefinition(def: Array<any>) {
     return def.map(item => ({
       ...item,
-      ...has(item, 'valueGetter') ? { valueGetter: ({ data }) => {
+      ...(has(item, 'valueGetter') ? { valueGetter: ({ data }) => {
         // console.log({ data, item });
         try {
           return search(data, item['valueGetter']);
         } catch (e) {
           return e.message;
         }
-      }} : {}
+      }} : {})
     }));
   }

diff --git a/src/app/services/menu-builder.service.ts b/src/app/services/menu-builder.service.ts
index 91de92b9..50286619 100644
--- a/src/app/services/menu-builder.service.ts
+++ b/src/app/services/menu-builder.service.ts
@@ -55,13 +55,13 @@ export class MenuBuilderService {
         label: 'dashboard' ,
         icon: 'dashboard',
       },
-      ...(services.length === 0) ? [] : [{
+      ...((services.length === 0) ? [] : [{
         label: 'services',
         icon: 'live_tv',
         path: '/services',
         children: services
-      }],
-      ...this.settings.get('disablePreview', true) ? [] : PROTOTYPE_MENU,
+      }]),
+      ...(this.settings.get('disablePreview', true) ? [] : PROTOTYPE_MENU),
       {
         path: '/core/settings',
         label: 'settings',
```

## Commit: ac6cd9718df9b1eb47d3ab46e6f05f339b3238c7

**Message:** npm i

**Author:** gio

**Date:** 2024-08-13

### Diff:

```diff

```

## Commit: a3dc3bfda742979fc9ce53d451be4d0bde75a677

**Message:** fix tags autocomplete filter

**Author:** gio

**Date:** 2024-08-14

### Diff:

```diff
diff --git a/src/app/dialogs/edit-workflow-metadata-dialog/edit-workflow-metadata-dialog.component.html b/src/app/dialogs/edit-workflow-metadata-dialog/edit-workflow-metadata-dialog.component.html
index f32b321d..1b894646 100644
--- a/src/app/dialogs/edit-workflow-metadata-dialog/edit-workflow-metadata-dialog.component.html
+++ b/src/app/dialogs/edit-workflow-metadata-dialog/edit-workflow-metadata-dialog.component.html
@@ -9,19 +9,19 @@
     <mat-form-field>
       <input matInput placeholder="Workflow ID" formControlName="id" name="id">
     </mat-form-field>
-    <mat-form-field class="example-chip-list">
-      <mat-chip-listbox #chipList aria-label="Fruit selection">
-        <mat-chip-option *ngFor="let tag of tags.getRawValue()" [selectable]="selectable"
+    <mat-form-field class="chip-list">
+      <mat-chip-grid #chipList aria-label="tags">
+        <mat-chip-row *ngFor="let tag of tags.getRawValue()" [selectable]="selectable"
                   [removable]="removable" (removed)="removeTag(tag)">
           {{tag}}
           <mat-icon matChipRemove *ngIf="removable">cancel</mat-icon>
-        </mat-chip-option>
+        </mat-chip-row>
         <input placeholder="Add tag..."
               [matChipInputFor]="chipList"
               [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
               [matChipInputAddOnBlur]="addOnBlur"
               (matChipInputTokenEnd)="addTag($event)">
-      </mat-chip-listbox>
+      </mat-chip-grid>
     </mat-form-field>
   </form>
 </mat-dialog-content>
diff --git a/src/app/dialogs/edit-workflow-metadata-dialog/edit-workflow-metadata-dialog.component.ts b/src/app/dialogs/edit-workflow-metadata-dialog/edit-workflow-metadata-dialog.component.ts
index 6dd3ad1d..5c5fc39f 100644
--- a/src/app/dialogs/edit-workflow-metadata-dialog/edit-workflow-metadata-dialog.component.ts
+++ b/src/app/dialogs/edit-workflow-metadata-dialog/edit-workflow-metadata-dialog.component.ts
@@ -18,6 +18,7 @@ export class EditWorkflowMetadataDialogComponent implements OnInit {
   removable = true;
   addOnBlur = true;
   readonly separatorKeysCodes: number[] = [ENTER, COMMA];
+

   get tags() {
     return (this.form.get('tags') as UntypedFormArray);
```

## Commit: 1e1ab2f09429a715553044cdb6b32e1534c3c0c0

**Message:** Add lable to all form field without

**Author:** gio

**Date:** 2024-08-15

### Diff:

```diff
diff --git a/src/app/_shared/components/material/mat-input.component.ts b/src/app/_shared/components/material/mat-input.component.ts
index 355c203f..550e163e 100644
--- a/src/app/_shared/components/material/mat-input.component.ts
+++ b/src/app/_shared/components/material/mat-input.component.ts
@@ -7,7 +7,8 @@ import { ICellEditorAngularComp } from 'ag-grid-angular';
     template: `
         <mat-card appearance="outlined">
         <form class="container" tabindex="0" (keydown)="onKeyDown($event)">
-            <mat-form-field class="block-comment-container">
+            <mat-form-field class="block-comment-container">
+                <mat-label>Title</mat-label>
                 <input #input matInput [(ngModel)]="Title" placeholder="Title"
                        [ngModelOptions]="{standalone: true}">
             </mat-form-field>
diff --git a/src/app/_shared/ui-form/types/password.type.ts b/src/app/_shared/ui-form/types/password.type.ts
index 674eaa7d..0d14bad2 100644
--- a/src/app/_shared/ui-form/types/password.type.ts
+++ b/src/app/_shared/ui-form/types/password.type.ts
@@ -7,6 +7,7 @@ import { FieldType } from '@ngx-formly/core';
   template: `

   <mat-form-field>
+    <mat-label>Enter your password</mat-label>
     <input matInput
     [maxlength]="to.maxLength"
     placeholder="Enter your password"
diff --git a/src/app/_shared/ui-form/types/playlists.component.html b/src/app/_shared/ui-form/types/playlists.component.html
index 0f1b7124..96b95a90 100644
--- a/src/app/_shared/ui-form/types/playlists.component.html
+++ b/src/app/_shared/ui-form/types/playlists.component.html
@@ -26,6 +26,7 @@
         <div [formGroup]="newPlaylistForm">

           <mat-form-field>
+            <mat-label>Title</mat-label>
             <input matInput placeholder="Title" formControlName="playlistTitle" />
           </mat-form-field>

diff --git a/src/app/components/block-gosub-builder-box/block-gosub-builder-box.component.html b/src/app/components/block-gosub-builder-box/block-gosub-builder-box.component.html
index 4c2007a3..9755f75f 100644
--- a/src/app/components/block-gosub-builder-box/block-gosub-builder-box.component.html
+++ b/src/app/components/block-gosub-builder-box/block-gosub-builder-box.component.html
@@ -1,4 +1,5 @@
 <mat-form-field class="block-comment-container">
+  <mat-label>Adapter</mat-label>
   <input type="text" placeholder="Adapter" aria-label="Adapter" matInput [formControl]="adapterNameFormControl"
     [matAutocomplete]="autoAdapter">
   <mat-autocomplete #autoAdapter="matAutocomplete">
@@ -9,6 +10,7 @@
 </mat-form-field>

 <mat-form-field class="block-comment-container">
+  <mat-label>Workflow</mat-label>
   <input type="text" placeholder="Workflow" aria-label="Workflow" matInput [formControl]="workflowIdFormControl"
     [matAutocomplete]="autoWorkflow">
   <mat-autocomplete #autoWorkflow="matAutocomplete">
diff --git a/src/app/components/youtube-upload/youtube-upload.component.html b/src/app/components/youtube-upload/youtube-upload.component.html
index 6ff6eab5..f9753935 100644
--- a/src/app/components/youtube-upload/youtube-upload.component.html
+++ b/src/app/components/youtube-upload/youtube-upload.component.html
@@ -10,9 +10,11 @@
     <ng-container *ngIf="!isUploading; else uploadProgress">
       <form [formGroup]="form">
         <mat-form-field>
+          <mat-label>Title</mat-label>
           <input matInput placeholder="Title" formControlName="title">
         </mat-form-field>
         <mat-form-field>
+          <mat-label>Description</mat-label>
           <input matInput placeholder="Description" formControlName="description">
         </mat-form-field>
         <mat-form-field>
diff --git a/src/app/dialogs/add-new-node-dialog/add-new-node-dialog.component.html b/src/app/dialogs/add-new-node-dialog/add-new-node-dialog.component.html
index 675e6923..6a6e8f3a 100644
--- a/src/app/dialogs/add-new-node-dialog/add-new-node-dialog.component.html
+++ b/src/app/dialogs/add-new-node-dialog/add-new-node-dialog.component.html
@@ -1,7 +1,7 @@
 <h1 mat-dialog-title>Add {{ data.type }}</h1>
-
 <div mat-dialog-content>
   <mat-form-field>
+    <mat-label>{{ labelField.label }}</mat-label>
     <input #itemName
            autocomplete="off"
            matInput
diff --git a/src/app/dialogs/edit-clip-dialog/edit-clip-dialog.component.html b/src/app/dialogs/edit-clip-dialog/edit-clip-dialog.component.html
index 4b7d113b..d78323b6 100644
--- a/src/app/dialogs/edit-clip-dialog/edit-clip-dialog.component.html
+++ b/src/app/dialogs/edit-clip-dialog/edit-clip-dialog.component.html
@@ -3,10 +3,12 @@
 <div mat-dialog-content>
   <form [formGroup]="form" autocomplete="off">
     <mat-form-field>
+      <mat-label>Name</mat-label>
       <input matInput placeholder="Name" formControlName="name">
     </mat-form-field>

       <mat-form-field>
+        <mat-label>Add rights group</mat-label>
         <mat-select placeholder="Add rights group" formControlName="right">
           <mat-option *ngFor="let group of rightsGroups" [value]="group">
             {{group}}
@@ -15,9 +17,11 @@
       </mat-form-field>

     <mat-form-field>
+      <mat-label>Role</mat-label>
       <input matInput placeholder="Role" formControlName="role">
     </mat-form-field>
     <mat-form-field>
+      <mat-label>Contributor</mat-label>
       <input matInput placeholder="Contributor" formControlName="contributor">
     </mat-form-field>
   </form>
diff --git a/src/app/dialogs/edit-workflow-metadata-dialog/edit-workflow-metadata-dialog.component.html b/src/app/dialogs/edit-workflow-metadata-dialog/edit-workflow-metadata-dialog.component.html
index 1b894646..42333917 100644
--- a/src/app/dialogs/edit-workflow-metadata-dialog/edit-workflow-metadata-dialog.component.html
+++ b/src/app/dialogs/edit-workflow-metadata-dialog/edit-workflow-metadata-dialog.component.html
@@ -1,15 +1,19 @@
 <mat-dialog-content>
   <form [formGroup]="form">
     <mat-form-field>
+      <mat-label>Title</mat-label>
       <input matInput placeholder="Title" formControlName="title" name="title">
     </mat-form-field>
     <mat-form-field>
+      <mat-label>Adapter name</mat-label>
       <input matInput placeholder="Adapter name" formControlName="adapterName" name="adapterName">
     </mat-form-field>
     <mat-form-field>
+      <mat-label>Workflow ID</mat-label>
       <input matInput placeholder="Workflow ID" formControlName="id" name="id">
     </mat-form-field>
     <mat-form-field class="chip-list">
+      <mat-label>Add tag...</mat-label>
       <mat-chip-grid #chipList aria-label="tags">
         <mat-chip-row *ngFor="let tag of tags.getRawValue()" [selectable]="selectable"
                   [removable]="removable" (removed)="removeTag(tag)">
diff --git a/src/app/dialogs/replace-image-url-dialog/replace-image-url-dialog.component.html b/src/app/dialogs/replace-image-url-dialog/replace-image-url-dialog.component.html
index c46e2746..679df3cb 100644
--- a/src/app/dialogs/replace-image-url-dialog/replace-image-url-dialog.component.html
+++ b/src/app/dialogs/replace-image-url-dialog/replace-image-url-dialog.component.html
@@ -2,6 +2,7 @@

 <div mat-dialog-content>
   <mat-form-field>
+    <mat-label>URL</mat-label>
     <input #itemName autocomplete="off" matInput required placeholder="URL" cdkFocusInitial>
   </mat-form-field>
 </div>
diff --git a/src/app/form-controls/audio-input-control/audio-input-control.component.html b/src/app/form-controls/audio-input-control/audio-input-control.component.html
index fda1eaa8..94ff2897 100644
--- a/src/app/form-controls/audio-input-control/audio-input-control.component.html
+++ b/src/app/form-controls/audio-input-control/audio-input-control.component.html
@@ -28,6 +28,7 @@
 </ul>

 <mat-form-field>
+  <mat-label>Add clip</mat-label>
   <input matInput type="text" (keydown.enter)="add(name.value); name.value = ''" #name placeholder="Add clip">
   <mat-icon matSuffix (click)="add(name.value); name.value = ''" class="add-icon">add_box</mat-icon>
 </mat-form-field>
diff --git a/src/app/form-controls/image-input-control/image-input-control.component.html b/src/app/form-controls/image-input-control/image-input-control.component.html
index 712ccbd6..df6b2eb2 100644
--- a/src/app/form-controls/image-input-control/image-input-control.component.html
+++ b/src/app/form-controls/image-input-control/image-input-control.component.html
@@ -12,6 +12,7 @@
     </div>

     <mat-form-field class="text-input">
+      <mat-label>Name</mat-label>
       <input matInput [placeholder]="'Name'" [(ngModel)]="tagControl.value[i].data">
     </mat-form-field>

diff --git a/src/app/form-controls/reference-input-control/reference-input-control.component.html b/src/app/form-controls/reference-input-control/reference-input-control.component.html
index 855d3770..d05d4628 100644
--- a/src/app/form-controls/reference-input-control/reference-input-control.component.html
+++ b/src/app/form-controls/reference-input-control/reference-input-control.component.html
@@ -1,3 +1,4 @@
 <mat-form-field>
+  <mat-label>placeholer</mat-label>
   <input matInput [placeholder]="placeholder">
 </mat-form-field>
diff --git a/src/app/form-controls/text-input-form-control/text-input-form-control.component.html b/src/app/form-controls/text-input-form-control/text-input-form-control.component.html
index 7e051eb8..4b0d9a77 100644
--- a/src/app/form-controls/text-input-form-control/text-input-form-control.component.html
+++ b/src/app/form-controls/text-input-form-control/text-input-form-control.component.html
@@ -1,3 +1,4 @@
 <mat-form-field>
+  <mat-label>Placeholder</mat-label>
   <input matInput [placeholder]="placeholder" [formControl]="formControl">
 </mat-form-field>
diff --git a/src/app/pages/bloomen-test-page/bloomen-test-page.component.html b/src/app/pages/bloomen-test-page/bloomen-test-page.component.html
index 4cb8cf0c..7072b101 100644
--- a/src/app/pages/bloomen-test-page/bloomen-test-page.component.html
+++ b/src/app/pages/bloomen-test-page/bloomen-test-page.component.html
@@ -4,6 +4,7 @@

 <mat-card appearance="outlined">
   <mat-form-field style="margin-right: 1em;">
+    <mat-label>Publisher.</mat-label>
     <mat-select placeholder="Example user" [(ngModel)]="activeUser">
       <mat-option [value]="'Publisher'">Publisher</mat-option>
       <mat-option [value]="'Photographer'">Photographer</mat-option>
diff --git a/src/app/pages/test-api-page/test-api-page.component.html b/src/app/pages/test-api-page/test-api-page.component.html
index 9a658934..f9ea8635 100644
--- a/src/app/pages/test-api-page/test-api-page.component.html
+++ b/src/app/pages/test-api-page/test-api-page.component.html
@@ -4,6 +4,7 @@

 <mat-card appearance="outlined" *ngIf="entityTypes$ | async as entityTypeList">
   <mat-form-field style="margin-right: 1em;">
+    <mat-label>Entity type</mat-label>
     <mat-select placeholder="Entity type" (valueChange)="changeEntityType($event)">
       <mat-option *ngFor="let type of entityTypeList" [value]="type">
         {{ type }}
@@ -15,6 +16,7 @@

 <mat-card appearance="outlined" *ngIf="entityList$ | async as entityList">
   <mat-form-field style="margin-right: 0.5em;">
+    <mat-label>Entity ID.</mat-label>
     <mat-select placeholder="Entity ID" (valueChange)="changeEntity($event)">
       <mat-option *ngFor="let entity of entityList" [value]="entity.id">
         {{ entity['id'] }}
```

## Commit: ffc9a4c9dd8610ca8c05c46951964cf2e7991e76

**Message:** fix material ui dialog paddings

**Author:** gio

**Date:** 2024-08-15

### Diff:

```diff
diff --git a/src/app/dialogs/save-workflow-dialog/save-workflow-dialog.component.html b/src/app/dialogs/save-workflow-dialog/save-workflow-dialog.component.html
index 593a8385..375aacec 100644
--- a/src/app/dialogs/save-workflow-dialog/save-workflow-dialog.component.html
+++ b/src/app/dialogs/save-workflow-dialog/save-workflow-dialog.component.html
@@ -26,6 +26,6 @@
   </mat-dialog-actions>
 </ng-template>

-<div class="spinner-wrapper">
-  <mat-spinner *ngIf="isLoading"></mat-spinner>
+<div class="spinner-wrapper" *ngIf="isLoading">
+  <mat-spinner></mat-spinner>
 </div>
\ No newline at end of file
diff --git a/src/styles.scss b/src/styles.scss
index fb869c72..99a28ec8 100644
--- a/src/styles.scss
+++ b/src/styles.scss
@@ -1,27 +1,25 @@
 @use '@angular/material' as mat;
 @import '../node_modules/ag-grid-community/styles/ag-grid.css';
 @import '../node_modules/ag-grid-community/styles/ag-theme-alpine.css';
-
 @import "@fortawesome/fontawesome-free/css/all.css";
+
 // Custom Theming for Angular Material
 // For more information: https://material.angular.io/guide/theming
-
 // Include the common styles for Angular Material.
 // We include this here so that you only have to load a single css file for Angular Material in your app.
-
 @include mat.all-component-typographies();
 @include mat.core();

 // Define the palettes for your theme using the Material Design palettes available in palette.scss
 // (imported above). For each palette, you can optionally specify a default, lighter, and darker
-// hue. Available color palettes: https://material.io/design/color/
+// hue. Available color palettes up to vM2: https://material.io/design/color/
 $kendraio-app-primary: mat.m2-define-palette(mat.$m2-green-palette);
 $kendraio-app-accent: mat.m2-define-palette(mat.$m2-orange-palette, A200, A100, A400);
-
-// The warn palette is optional (defaults to red).
 $kendraio-app-warn: mat.m2-define-palette(mat.$m2-red-palette);

-// Create the theme object (a Sass map containing all of the palettes).
+$container-padding: 20px;
+
+// Create custom MUI theme.
 $kendraio-app-theme: mat.m2-define-light-theme((
   color: (
     primary: $kendraio-app-primary,
@@ -29,20 +27,20 @@ $kendraio-app-theme: mat.m2-define-light-theme((
     warn: $kendraio-app-warn
   ),
   typography: mat.m2-define-typography-config(),
-  density: 0,
+  density: -1,
 ));

-
-// Include theme styles for core and each component used in your app.
-// Alternatively, you can import and @include the theme mixins for each component
-// that you are using.
 @include mat.all-component-themes($kendraio-app-theme);
-// @include angular-material-theme($kendraio-app-theme);


+// Global style, not part of the custom theme.
 html, body { height: 100%; overflow: hidden; }
 body { margin: 0; font-family: Roboto, "Helvetica Neue", sans-serif; }

+.mat-mdc-dialog-container .mat-mdc-dialog-actions {
+  padding: 10px 20px 20px;
+}
+
 .mb-1 {
   margin-bottom: 1em;
 }
@@ -65,18 +63,16 @@ dynamic-material-form-control .mat-mdc-form-field {
 }

 .schedule-popup{
-  // display:none;
   position: absolute;
   box-shadow: 3px 3px 3px rgba(55,3, 3, .5);
   padding: 16px;
   background-color: silver;
-transform: translatey(-80px);
-transition: all 2s ease;
-z-index: 9;
-&.in{
-  display: block;
-//  transform: translate(80px,-80px);
-}
+  transform: translatey(-80px);
+  transition: all 2s ease;
+  z-index: 9;
+  &.in{
+    display: block;
+  }
 }

 .editor-config-column .mat-expansion-panel-body {
```

## Commit: 12ec7ba6666889e5c940778575444d5e4deb326d

**Message:** fix code writing style, fix button MUI, add leaflet marker style

**Author:** gio

**Date:** 2024-08-27

### Diff:

```diff
diff --git a/angular.json b/angular.json
index 6daf0371..90cc5c64 100644
--- a/angular.json
+++ b/angular.json
@@ -48,7 +48,9 @@
               "src/styles.scss",
               "src/styles/vendor.scss",
               "src/styles/main.scss",
-              "node_modules/leaflet/dist/leaflet.css"
+              "node_modules/leaflet/dist/leaflet.css",
+              "node_modules/leaflet.markercluster/dist/MarkerCluster.css",
+              "node_modules/leaflet.markercluster/dist/MarkerCluster.Default.css"
             ],
             "scripts": [
               "node_modules/@fortawesome/fontawesome-free/js/all.js",
diff --git a/src/app/app.module.ts b/src/app/app.module.ts
index e24bd926..768397cd 100644
--- a/src/app/app.module.ts
+++ b/src/app/app.module.ts
@@ -150,8 +150,8 @@ import {JsonViewPageComponent} from './pages/json-view-page/json-view-page.compo
 import {GosubBlockComponent} from './blocks/gosub-block/gosub-block.component';
 import {GsheetBlockComponent} from './blocks/gsheet-block/gsheet-block.component';
 import {MapBlockComponent} from './blocks/map-block/map-block.component';
-import {LeafletModule} from '@asymmetrik/ngx-leaflet';
-import {LeafletMarkerClusterModule} from '@asymmetrik/ngx-leaflet-markercluster';
+import { LeafletModule } from '@asymmetrik/ngx-leaflet';
+import { LeafletMarkerClusterModule } from '@asymmetrik/ngx-leaflet-markercluster';
 import {DashboardPageComponent} from './pages/dashboard-page/dashboard-page.component';
 import {config} from './_shared/ui-form/config';
 import {FormlyMaterialModule} from '@ngx-formly/material';
@@ -198,7 +198,8 @@ const monacoConfig: NgxMonacoEditorConfig = {
   monacoRequire: (window as any).monacoRequire
 };

-@NgModule({ declarations: [
+@NgModule({
+    declarations: [
         AppComponent,
         LayoutComponent,
         DocsListPageComponent,
@@ -354,7 +355,9 @@ const monacoConfig: NgxMonacoEditorConfig = {
         BlockComparisonBuilderBoxComponent,
         LinkActionComponent
     ],
-    bootstrap: [AppComponent], imports: [FormlyModule.forRoot({}),
+    bootstrap: [AppComponent],
+    imports: [
+        FormlyModule.forRoot({}),
         BrowserModule,
         AppRoutingModule,
         BrowserAnimationsModule,
@@ -379,16 +382,9 @@ const monacoConfig: NgxMonacoEditorConfig = {
         MonacoEditorModule.forRoot(monacoConfig),
         MatAutocompleteModule,
         AgGridModule,
-        MatChipsModule], providers: [
-        // This service is from old legacy code and no longer used,
-        // so I'm commenting out the init() function and the whole thing
-        // can be removed once confirmed nothing is still using it.
-        // {
-        //   provide: APP_INITIALIZER,
-        //   multi: true,
-        //   useFactory: (schemaRepo: SchemaRepositoryService) => () => schemaRepo.init(),
-        //   deps: [SchemaRepositoryService]
-        // },
+        MatChipsModule
+    ],
+    providers: [
         {
             provide: APP_INITIALIZER,
             multi: true,
diff --git a/src/styles.scss b/src/styles.scss
index 99a28ec8..3c512c9d 100644
--- a/src/styles.scss
+++ b/src/styles.scss
@@ -41,6 +41,15 @@ body { margin: 0; font-family: Roboto, "Helvetica Neue", sans-serif; }
   padding: 10px 20px 20px;
 }

+.mdc-button.mat-mdc-button > .mat-icon,
+.mdc-button.mat-mdc-unelevated-button > .mat-icon,
+.mdc-button.mat-mdc-raised-button > .mat-icon,
+.mdc-button.mat-mdc-outlined-button > .mat-icon {
+  font-size: 1.5rem;
+  height: 1.5rem;
+  width: 1.5rem;
+}
+
 .mb-1 {
   margin-bottom: 1em;
 }
```

## Commit: cbd25a4a68c3367635426513c1ce952e65247232

**Message:** update leafleft component

**Author:** gio

**Date:** 2024-08-27

### Diff:

```diff
diff --git a/package.json b/package.json
index 14192c42..cc615a43 100644
--- a/package.json
+++ b/package.json
@@ -37,8 +37,8 @@
     "@angular/pwa": "^18.1.3",
     "@angular/router": "^18.1.3",
     "@angular/service-worker": "^18.1.3",
-    "@asymmetrik/ngx-leaflet": "^18.0.1",
-    "@asymmetrik/ngx-leaflet-markercluster": "^18.0.0",
+    "@bluehalo/ngx-leaflet": "^18.0.2",
+    "@bluehalo/ngx-leaflet-markercluster": "^18.0.1",
     "@daz.is/jmespath": "^1.3.1",
     "@fortawesome/fontawesome-free": "^5.15.4",
     "@maskito/angular": "^3.0.0",
diff --git a/src/app/blocks/map-block/map-block.component.ts b/src/app/blocks/map-block/map-block.component.ts
index 4de309ed..d5daa159 100644
--- a/src/app/blocks/map-block/map-block.component.ts
+++ b/src/app/blocks/map-block/map-block.component.ts
@@ -1,6 +1,6 @@
 import {Component} from '@angular/core';
 import {BaseBlockComponent} from '../base-block/base-block.component';
-import {icon, latLng, marker, tileLayer, divIcon, geoJSON} from 'leaflet';
+import {icon, latLng, marker, tileLayer, divIcon, geoJSON, Marker} from 'leaflet';
 import {get, isArray, set} from 'lodash-es';
 import * as DOMPurify from 'dompurify';

@@ -26,7 +26,7 @@ contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA
     center: latLng(51.505, -0.09)
   };
   layers = [];
-  markerClusterData = [];
+  markerClusterData: Marker[] = [];
   markerClusterOptions = {};

   // Country GeoJSON provider base URL
@@ -78,6 +78,19 @@ contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA
   }

   onData(data: any, firstChange: boolean) {
+    console.log('hello', data)
+    // if (isArray(data)) {
+    //   this.layers = data.map(({ lat, long, label }) =>
+    //     marker(latLng(lat, long), {
+    //       icon: icon({
+    //         iconSize: [ 25, 41 ],
+    //         iconAnchor: [ 13, 41 ],
+    //         iconUrl: '/assets/marker-icon.png',
+    //         shadowUrl: '/assets/marker-shadow.png'
+    //       })
+    //     }).bindPopup(label));
+    // }
+
     if (isArray(data)) {
       this.layers = [];

@@ -117,4 +130,4 @@ contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA
       });
     }
   }
-}
\ No newline at end of file
+}
```

## Commit: 1107cf419b39a4e6880dde391079a2f4390a1b25

**Message:** render map with marker

**Author:** gio

**Date:** 2024-08-28

### Diff:

```diff
diff --git a/src/app/app.module.ts b/src/app/app.module.ts
index 768397cd..002e2b21 100644
--- a/src/app/app.module.ts
+++ b/src/app/app.module.ts
@@ -150,8 +150,8 @@ import {JsonViewPageComponent} from './pages/json-view-page/json-view-page.compo
 import {GosubBlockComponent} from './blocks/gosub-block/gosub-block.component';
 import {GsheetBlockComponent} from './blocks/gsheet-block/gsheet-block.component';
 import {MapBlockComponent} from './blocks/map-block/map-block.component';
-import { LeafletModule } from '@asymmetrik/ngx-leaflet';
-import { LeafletMarkerClusterModule } from '@asymmetrik/ngx-leaflet-markercluster';
+import { LeafletModule } from '@bluehalo/ngx-leaflet';
+import { LeafletMarkerClusterModule } from '@bluehalo/ngx-leaflet-markercluster';
 import {DashboardPageComponent} from './pages/dashboard-page/dashboard-page.component';
 import {config} from './_shared/ui-form/config';
 import {FormlyMaterialModule} from '@ngx-formly/material';
diff --git a/src/app/blocks/map-block/map-block.component.ts b/src/app/blocks/map-block/map-block.component.ts
index d5daa159..4e24f448 100644
--- a/src/app/blocks/map-block/map-block.component.ts
+++ b/src/app/blocks/map-block/map-block.component.ts
@@ -1,6 +1,6 @@
 import {Component} from '@angular/core';
 import {BaseBlockComponent} from '../base-block/base-block.component';
-import {icon, latLng, marker, tileLayer, divIcon, geoJSON, Marker} from 'leaflet';
+import {icon, latLng, marker, tileLayer, divIcon, geoJSON, } from 'leaflet';
 import {get, isArray, set} from 'lodash-es';
 import * as DOMPurify from 'dompurify';

@@ -79,18 +79,6 @@ contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA

   onData(data: any, firstChange: boolean) {
     console.log('hello', data)
-    // if (isArray(data)) {
-    //   this.layers = data.map(({ lat, long, label }) =>
-    //     marker(latLng(lat, long), {
-    //       icon: icon({
-    //         iconSize: [ 25, 41 ],
-    //         iconAnchor: [ 13, 41 ],
-    //         iconUrl: '/assets/marker-icon.png',
-    //         shadowUrl: '/assets/marker-shadow.png'
-    //       })
-    //     }).bindPopup(label));
-    // }
-
     if (isArray(data)) {
       this.layers = [];

```

## Commit: 2c60e8694cbf43e5badb4d353e1c78b992b48fb7

**Message:** fix map issue

**Author:** gio

**Date:** 2024-08-29

### Diff:

```diff
diff --git a/src/app/blocks/map-block/map-block.component.html b/src/app/blocks/map-block/map-block.component.html
index 956703bd..f47baa3e 100644
--- a/src/app/blocks/map-block/map-block.component.html
+++ b/src/app/blocks/map-block/map-block.component.html
@@ -3,6 +3,7 @@
      leaflet
      [leafletOptions]="options"
      [leafletLayers]="layers"
+
      [leafletMarkerCluster]="markerClusterData"
      [leafletMarkerClusterOptions]="markerClusterOptions">
 </div>
diff --git a/src/app/blocks/map-block/map-block.component.ts b/src/app/blocks/map-block/map-block.component.ts
index 4e24f448..35bca580 100644
--- a/src/app/blocks/map-block/map-block.component.ts
+++ b/src/app/blocks/map-block/map-block.component.ts
@@ -1,16 +1,15 @@
 import {Component} from '@angular/core';
 import {BaseBlockComponent} from '../base-block/base-block.component';
-import {icon, latLng, marker, tileLayer, divIcon, geoJSON, } from 'leaflet';
+import {icon, latLng, marker, tileLayer, divIcon, geoJSON, Marker, markerClusterGroup } from 'leaflet';
 import {get, isArray, set} from 'lodash-es';
 import * as DOMPurify from 'dompurify';
-
+import 'leaflet.markercluster';
 @Component({
   selector: 'app-map-block',
   templateUrl: './map-block.component.html',
   styleUrls: ['./map-block.component.scss']
 })
 export class MapBlockComponent extends BaseBlockComponent {
-
   height = 500;
   options = {
     layers: [
@@ -26,6 +25,7 @@ contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA
     center: latLng(51.505, -0.09)
   };
   layers = [];
+  markerClusterGroup: any;
   markerClusterData: Marker[] = [];
   markerClusterOptions = {};

@@ -44,6 +44,10 @@ contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA

   // In-memory cache for country GeoJSON data
   countryCache: { [key: string]: any } = {};
+  constructor() {
+    super()
+    this.markerClusterGroup = markerClusterGroup();
+  }

   onConfigUpdate(config: any) {
     this.height = get(config, 'height', 500);
@@ -78,7 +82,6 @@ contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA
   }

   onData(data: any, firstChange: boolean) {
-    console.log('hello', data)
     if (isArray(data)) {
       this.layers = [];

@@ -115,6 +118,9 @@ contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA
             this.layers.push(geojsonLayer);
           });
         }
+
+        this.markerClusterGroup.clearLayers();
+        this.markerClusterGroup.addLayers(this.markerClusterData);
       });
     }
   }
```
