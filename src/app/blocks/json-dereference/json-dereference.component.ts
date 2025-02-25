import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BaseBlockComponent } from '../base-block/base-block.component';
import { clone } from 'lodash-es';
import $RefParser from "@apidevtools/json-schema-ref-parser";
@Component({
    selector: 'app-json-dereference-block',
    templateUrl: './json-dereference.component.html'
})
export class JsonDereferenceBlockComponent extends BaseBlockComponent {
    @Input() config;
    @Input() model: any = {};
    @Output() output = new EventEmitter();

    dataUrl: string | unknown = '';
    resolvedSchemaOutput: any = '';
    errorMessage: string = '';

    onConfigUpdate(config: any) {
        super.onConfigUpdate(config);
    }

    isValidUrl(url: string): boolean {
        const urlPattern = new RegExp(
            '^(https?:\\/\\/)' +
            '(([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,})' + 
            '(\\:\\d+)?' + // Port
            '(\\/.*)?$', // Path
            'i'
        );
        return urlPattern.test(url);
    }

  
    ngOnChanges(changes): void {
        // console.log('model', this.model)
        // this.dataUrl = Object.values(this.model)[0];
        this.dataUrl = this.model;


        if (typeof this.dataUrl !== 'string' || !this.dataUrl.trim()) {
            this.errorMessage = 'URl is either not a string or is empty.';
            return;
        } else {
            this.handleDereference(this.dataUrl)
        }
    }

    async handleDereference(url) {
        this.errorMessage = '';        

        if (!this.isValidUrl(url)) {
            this.errorMessage = "Invalid URl format";
            return;
        }

        try {
            const resolvedSchema = await new $RefParser().dereference(this.dataUrl);
            this.resolvedSchemaOutput = resolvedSchema;
            this.output.emit(clone(this.resolvedSchemaOutput));
            console.log("resolvedSchema", this.resolvedSchemaOutput)
          } catch (error) {
            console.error("An error occurred:", error);
            this.errorMessage = 'Failed to dereference schema. Check console for details.';
            this.resolvedSchemaOutput = null;
          }
    }
}


// {
//     "type": "form",
//     "hasSubmit": false,
//     "jsonSchema": {
//         "type": "object",
//         "properties": {
//             "mapping": {
//                 "title": "Select a schema to import",
//                 "type": "string",
//                 "enum": [
//                     "https://test-library.murmurations.network/v2/schemas/people_schema-v0.1.0",
//                     "https://test-library.murmurations.network/v2/schemas/test_schema-v2.3.8",
//                     "https://test-library.murmurations.network/v2/schemas/cta_opportunity-v0.1.0",
//                     "https://test-library.murmurations.network/v2/schemas/permaculture_addon_schema-v1.0.0"
//                 ]
//             }
//         }
//     },
//     "uiSchema": {}
// }