
Kendraio App
============

Kendraio App is an open source dashboard application for rights owners, music makers, managers and record labels, enabling users to manage and track their digital media assets, collaborations and associated rights.

- Online demo: https://app.kendra.io
- Read the Docs: https://kendraio-app.readthedocs.io
- More information: https://www.kendra.io/kendraio-app
- Privacy policy: https://www.kendra.io/privacy

![Uptime Robot](https://img.shields.io/uptimerobot/ratio/7/m783523815-565ba269d3dc13ded01aae34)
![Version](https://img.shields.io/github/package-json/v/kendraio/kendraio-app/main)
![License](https://img.shields.io/github/license/kendraio/kendraio-app)
![Dependencies Status](https://img.shields.io/david/kendraio/kendraio-app)
[![Documentation Status](https://readthedocs.org/projects/kendraio-app/badge/?version=latest)](https://kendraio-app.readthedocs.io/en/latest/?badge=latest)
![Angular Version](https://img.shields.io/github/package-json/dependency-version/kendraio/kendraio-app/@angular/core)


Contribute
----------

- Read the documentation: https://kendraio-app.readthedocs.io
- For help and support, join the conversation on Slack: http://slack.kendra.io
- Kendraio Google Drive folder: https://goo.gl/Oyuli4
- To report bugs, suggest improvements, or request features, use the issue tracker: https://github.com/kendraio/kendraio-app/issues
- To download the source code, visit the repo: https://github.com/kendraio/kendraio-app



Setting up a local development environment
------------------------------------------

You will need to install node, npm, and the Angular CLI.
Clone the repo.
Run `npm install`
Start the development server using `npm run serve:dev`

Adding a "Block" (i.e. Task for the Flow editor)
--------------------------------------------------

Use the Angular CLI to scaffold a new block: `ng g c blocks/my-block`
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
-   Add the component to this horrible big switch block in the BlocksWorkflowComponent [src/app/components/blocks-workflow/blocks-workflow.component.html](src/app/components/blocks-workflow/blocks-workflow.component.html)
This is needed for the flow to show up in rendered workflows.
-   Add a definition for the block to the block types so it can appear in the "Add Task" dialog:
[src/app/dialogs/add-block-dialog/block-types.ts](src/app/dialogs/add-block-dialog/block-types.ts)