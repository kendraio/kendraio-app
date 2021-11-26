
Kendraio App
============

Kendraio App is an open source dashboard application for rights owners, music makers, managers and record labels, enabling users to manage and track their digital media assets, collaborations and associated rights.

- Online demo: <https://app.kendra.io>
- Read the Docs: <https://kendraio-app.readthedocs.io>
- More information: <https://www.kendra.io/kendraio-app>
- Privacy policy: <https://www.kendra.io/privacy>

[![deployment_tests](https://img.shields.io/github/workflow/status/kendraio/kendraio-app/vercel_deployment_tests)](https://github.com/kendraio/kendraio-app/actions/workflows/vercel_deployment_tests.yml)

![Uptime Robot](https://img.shields.io/uptimerobot/ratio/7/m783523815-565ba269d3dc13ded01aae34)

![Version](https://img.shields.io/github/package-json/v/kendraio/kendraio-app/main)

![License](https://img.shields.io/github/license/kendraio/kendraio-app)

![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/kendraio/kendraio-app)

[![Documentation Status](https://readthedocs.org/projects/kendraio-app/badge/?version=latest)](https://kendraio-app.readthedocs.io/en/latest/?badge=latest)

![Angular Version](https://img.shields.io/github/package-json/dependency-version/kendraio/kendraio-app/@angular/core)

Contribute
----------

- Read the documentation: <https://kendraio-app.readthedocs.io>
- For help and support, join the conversation on Slack: <http://slack.kendra.io>
- Kendraio Google Drive folder: <https://goo.gl/Oyuli4>
- To report bugs, suggest improvements, or request features, use the issue tracker: <https://github.com/kendraio/kendraio-app/issues>
- To download the source code, visit the repo: <https://github.com/kendraio/kendraio-app>

Setting up a local development environment
------------------------------------------

You will need to install node, npm, and the Angular CLI.
Clone the repo.
Run `npm install`
Start the development server using `npm run serve:dev`


Running End-to-end tests with the development environment
------------------------------------------
`npm run e2e:autorun` is good for running tests on an already running server once automatically.

`npm run e2e:retest_on_change` will rerun tests automatically upon file changes.

`npm run e2e:serve_and_test` will start the dev server, and run headless tests once automatically and stop. It should work in CI, producing a HTML report file and JSON file at `cypress/results/mochawesome.json` on first run.

`npm run e2e:serve_and_retest_on_change` will start the dev server, and rerun tests automatically upon file changes, good for general develoment.

The existing `npx ng e2e` Angular command works too, though requires clicking on the set of tests that need running. It builds and runs the server then runs E2E tests once.


Adding a "Block" (i.e. Task for the Flow editor)
--------------------------------------------------

Use the Angular CLI to scaffold a new block: `npx ng g c blocks/my-block`
Edit the generated my-block.component.ts to make it a sub-class of BaseBlock.
Take a look at one of the more recent blocks as an example, eg the AudioPlayer:

```javascript
export class AudioPlayerBlockComponent extends BaseBlockComponent {
```

There are two functions to implement to make it work:

```javascript
onConfigUpdate(config: any) {
   this.someVar = get(config, 'key', 'default value');
}

onData(data: any, firstChange: boolean) {
   // block is receiving data from the block before it in the flow
   // if you need to pass data to the next block, call emit on output 
   this.output.emit(this.model);
}
```

Implement onConfigUpdate() to modify the block state based on changes to the block configuration.
Implement onData() to respond to data being sent into the block.
Add any UI or output to the angular template for the block component.
Add any required CSS to the stylesheet for the component.
To make the block show up in the App:

- Add the component to this horrible big switch block in the BlocksWorkflowComponent [src/app/components/blocks-workflow/blocks-workflow.component.html](src/app/components/blocks-workflow/blocks-workflow.component.html)
This is needed for the flow to show up in rendered workflows.
- Add a definition, and default configuration, for the block to the block types so it can appear in the "Add Task" dialog:
[src/app/dialogs/add-block-dialog/block-types.ts](src/app/dialogs/add-block-dialog/block-types.ts)
