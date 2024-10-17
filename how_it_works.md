## Deep Dive into Kendraio App: An Open-Source Workflow Automation Engine

Kendraio App is a powerful low-code platform for creating automated workflows that manage data, interact with external services, and design user interfaces. It achieves this through a modular architecture centered around "blocks," each encapsulating a specific function. By assembling and connecting these blocks in a user-friendly graphical interface, users can build complex workflows without extensive coding knowledge.

### General Mechanism: A Symphony of Blocks

1. **Blocks as Building Blocks:** The core concept is the "block." Each block represents a self-contained unit of functionality, like fetching data from an API, transforming JSON, displaying a form, or making a database query.

2. **Workflow as a Directed Graph:** A workflow is a directed graph where blocks are the nodes, and the connections between them represent the flow of data. Data flows sequentially from one block to the next, with each block processing the input and emitting an output.

3. **Data Transformation and Manipulation:** The "mapping" block is crucial for data handling. It leverages JSONPath expressions and custom functions to select, filter, and transform JSON data, enabling seamless data manipulation throughout the workflow.

4. **External Service Integration:** Blocks like "http" and "graphql" enable interaction with external APIs, extending the capabilities of workflows beyond the app's internal functions.

5. **User Interface Design:** UI blocks like "form," "grid," and "template" empower users to create interactive interfaces for data input, display, and visualization.

6. **State and Context Management:** The app employs a shared "state" and block-specific "context" to store and access data across different blocks.

7. **Asynchronous Processing:** Many blocks, especially those involving external services, are asynchronous, meaning they return an initial response and then update later when the task is completed.

8. **Change Detection Optimization:** Angular's change detection mechanism efficiently updates only the affected parts of the UI, ensuring performance even with complex, asynchronous workflows.

### Diving into Specific Components and Files

#### 1. `app.component.ts`: The Maestro

- **Central Hub:** The main component of the application, managing the overall layout, navigation, and data flow.
- **Page Title Service:** Utilizes the `PageTitleService` to set page titles and manage app layout (app-like vs. standard).
- **Refresh Handling:** The `onRefresh` method triggers the refresh mechanism to reinitialize the currently running workflow.
- **Translation Management:** Leverages the `TranslateService` to handle language switching and dynamically update page titles based on the selected language.

#### 2. `app.module.ts`: The Orchestra

- **Module Definition:** Defines the `AppModule`, which imports all necessary Angular modules, including UI components, services, and external libraries like Formly, Ag-Grid, and Leaflet.
- **Block Declarations:** Declares all the available block components, making them accessible for use in workflows.
- **Service Providers:** Provides essential services like `SchemaRepositoryService`, `DocumentRepositoryService`, `AppSettingsService`, and global error handling.

#### 3. `app-routing.module.ts`: The Stage Directions

- **Route Configuration:** Defines the app's routing, mapping URLs to specific components.
- **Route Data:** Provides metadata for each route, including page title, breadcrumb, and menu label translations.
- **Dynamic Loading:** Uses lazy loading for modules like Notifications and Settings, optimizing initial load time.

#### 4. `base-block.component.ts` and `base-block.component.html`: The Foundation

- **Abstract Base Class:** Defines the `BaseBlockComponent`, an abstract class that serves as the foundation for all individual block components.
- **Input/Output Properties:** Defines common input properties like `config`, `context`, and `model`, and an `output` event emitter for sending data to the next block.
- **Lifecycle Hooks:** Implements `ngOnChanges` to handle changes in input properties and trigger block-specific logic like `onConfigUpdate`, `onContextUpdate`, and `onData`.

#### 5. `blocks-workflow.component.ts` and `blocks-workflow.component.html`: The Conductor

- **Workflow Orchestrator:** The `BlocksWorkflowComponent` manages the execution of a workflow, handling the flow of data between blocks.
- **Block Rendering:** Dynamically renders the appropriate Angular component for each block based on the `type` property.
- **Data Propagation:** The `updateModel` method receives output from a block and propagates it to the next block in the sequence.
- **Workflow Completion:** Emits a `workflowComplete` event when the final block in the workflow has emitted its output.

#### 6. `mapping-block.component.ts` and `mapping-util.ts`: The Data Alchemist

- **Data Transformation Powerhouse:** The `MappingBlockComponent` is responsible for data manipulation using JMESPath expressions and custom functions.
- **`mappingUtility` Function:** The `mappingUtility` function (defined in `mapping-util.ts`) provides a wrapper around the JMESPath engine, making it easier to use within the block.
- **Error Handling:** Implements error handling to catch invalid JMESPath expressions and display informative error messages.

#### 7. `form-block.component.ts` and `form-block.component.html`: The User Interaction Specialist

- **Form Generation:** The `FormBlockComponent` leverages Formly to generate interactive forms based on JSON Schema and UI Schema definitions.
- **Data Binding and Validation:** Handles data binding between the form and the data model, providing real-time validation.
- **Debounce Mechanism:** Implements a debounce mechanism to control the frequency of data emission when the form doesn't have a submit button.

#### 8. `db-block.component.ts` and `local-database.service.ts`: The Data Librarian

- **Database Interaction:** The `DbBlockComponent` handles CRUD operations on the local IndexedDB database.
- **Local Database Service:** The `LocalDatabaseService` is a wrapper for Dexie.js, providing a convenient interface for interacting with the database.
- **Metadata Table:** Data is stored in a single "metadata" table, segmented based on `adapterName` and `schemaName`.

#### 9. `http-block.component.ts`: The API Ambassador

- **External API Communication:** Handles making HTTP requests to external APIs based on configuration, including method, URL, headers, and payload.
- **Error Handling:** Implements error handling to catch HTTP errors and display error messages or trigger alternate workflows.
- **CORS Proxy:** Supports using a CORS proxy for bypassing cross-origin restrictions.

#### 10. `workflow-repo.service.ts`: The Flow Curator

- **Workflow Retrieval:** The `WorkflowRepoService` fetches workflow definitions from various sources, including the adapter repository, local database, or a shared link.
- **Config Cache:** Implements a cache for workflow configurations to optimize retrieval performance.

#### 11. `workflow.service.ts`: The Flow Director

- **Workflow Management:** Manages the state of the active workflow, including title, blocks, data models, and context.
- **Persistence:** Saves and loads the workflow state to/from local storage, allowing users to resume their work.
- **Sharing and Import/Export:** Handles generating shareable links, copying/pasting config, and importing/exporting workflows from adapters or the workflow cloud.

#### 12. `shared-state.service.ts`: The Global Messenger

- **State Management:** Provides a shared "state" store for data that can be accessed and updated by different blocks across workflows.
- **Global and Local State:** Differentiates between global state (accessible by all flows) and local state (specific to the current URL).
- **Flags:** Implements a "flags" mechanism for storing and accessing key-value pairs outside the standard URL hierarchy.

### Conclusion

Kendraio App's strength lies in its modular, block-based architecture and the use of technologies like JMESPath, Formly, and IndexedDB to empower users to build powerful, complex workflows with minimal coding. By understanding the interplay between these components and files, you can unleash the full potential of this versatile low-code platform.
