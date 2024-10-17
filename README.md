# Kendraio App

Kendraio App is an open source dashboard application for rights owners, music makers, managers and record labels, enabling users to manage and track their digital media assets, collaborations and associated rights.

- Online demo: <https://app.kendra.io>
- Read the Docs: <https://kendraio-app.readthedocs.io>
- More information: <https://www.kendra.io/kendraio-app>
- Privacy policy: <https://www.kendra.io/privacy>

![Tests](https://img.shields.io/github/checks-status/kendraio/kendraio-app/main)

![Uptime Robot](https://img.shields.io/uptimerobot/ratio/7/m783523815-565ba269d3dc13ded01aae34)

![Version](https://img.shields.io/github/package-json/v/kendraio/kendraio-app/main)

![License](https://img.shields.io/github/license/kendraio/kendraio-app)

![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/kendraio/kendraio-app)

[![Documentation Status](https://readthedocs.org/projects/kendraio-app/badge/?version=latest)](https://kendraio-app.readthedocs.io/en/latest/?badge=latest)

![Angular Version](https://img.shields.io/github/package-json/dependency-version/kendraio/kendraio-app/@angular/core)

## Contribute

- Read the documentation: <https://kendraio-app.readthedocs.io>
- For help and support, join the conversation on Slack: <http://slack.kendra.io>
- Kendraio Google Drive folder: <https://goo.gl/Oyuli4>
- To report bugs, suggest improvements, or request features, use the issue tracker: <https://github.com/kendraio/kendraio-app/issues>
- To download the source code, visit the repo: <https://github.com/kendraio/kendraio-app>
- Sponsored by [▲ Vercel](https://vercel.com?utm_source=kendraio&utm_campaign=oss), [Mailgun](https://www.mailgun.com), [Atlassian](https://www.atlassian.com), [Auth0](https://auth0.com)

## Instant Development with Github Codespaces

If you have access to github codespaces, you can start developing on Kendraio immediately.
The "code" button on our github page (https://github.com/kendraio/kendraio-app) will offer you
the opportunity to launch a codespace.

All the required configuration is already in the repostitory, so when you boot a codespace, you'll
be taken to a web version of Visual Studio Code. All you need to do is start the development server.

VSCode provides a terminal, run `npm run serve:dev`. Once the server is up, it will output a link
to "localhost:4200", click on this link to open the running Kndraio app in a new window.

You now have a live development environment. Create yourself a branch and you're off.

# The Devcontainer.json file

A devcontainer.json file in your project tells Visual Studio Code (and other services and tools that support the format) how to access (or create) a development container with a well-defined tool and runtime stack. This file is used to automatically configure Codespaces, and it will also allow for local development using containers.

## Setting up a local development environment

If you are not running inside a container, you will need to install node, npm, and the Angular CLI.

- Clone the repo.
- Run `npm install`

You can start the development server using `npm run serve:dev` or use `npm run test:serve_and_retest_on_change`, which will run the dev server and tests upon changes.

## Running Unit and End-to-end tests with the development environment

`npm run test:serve_and_retest_on_change` will start the dev server, and run unit and E2E tests automatically upon file changes. It is useful for general local develoment.

`npm run test:retest_on_change` will re-run unit and E2E tests automatically upon file changes, but it needs a running server.

`npm run test:autorun` is good for automatically running unit and E2E tests ONCE, using an already running server.

`npm run test:serve_and_test` will start the dev server, and run unit and E2E headless tests once automatically and stop, producing a HTML report file and JSON file at `cypress/results/mochawesome.json` on first run.

The existing `npx ng e2e` Angular command works too, but requires clicking on the set of tests that need running. It builds and runs the server then runs E2E tests once.

# Running tests in a container

The predefined npm test commands have all been configured to run in a container, but if you are using alternative testing commands, you may find that testing fails due to the lack of a display. To get around this, use **xvfb-maybe**, which will set up a virtual display if one is needed.

To use xvfb-maybe, prefix any commandline with `npx xvfb-maybe`
eg:

- `npx xvfb-maybe ng test`

## Adding a "Block" (i.e. Task for the Flow editor)

Use the Angular CLI to scaffold a new block: `npx ng g c blocks/my-block`
Edit the generated my-block.component.ts to make it a sub-class of BaseBlock.

Start by setting up your initial imports.

```javascript
import { BaseBlockComponent } from '../base-block/base-block.component';
import { get } from 'lodash-es';
```

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

## Adding a custom block editor interface

The block editor is implemented using the blocks-editor component.
In order to create a custom editor, you will need to create a new component,
and call it via [blocks-editor.component.html](/src/app/components/blocks-editor/blocks-editor.component.html)
