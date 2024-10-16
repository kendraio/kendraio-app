# Angular Image Tagger

The Image Tagger component from Kendraio App, split out into a separate reusable component.

### Usage

Include the module in your `app.module.ts` file:

    imports: [
        ...
        NgxImageTaggerModule
    ]

This module exposes an image tagger component you can use in your app:

    <ngx-image-tagger src="/assets/fake-data/example-photo.jpg" [tags]="tags"
        alt="Example Photo" (tagsChanged)="onTagsChange($event)"></ngx-image-tagger>

### Example

![](https://raw.githubusercontent.com/kendraio/kendraio-app/develop/docs/_static/images/tagger-example.png)
