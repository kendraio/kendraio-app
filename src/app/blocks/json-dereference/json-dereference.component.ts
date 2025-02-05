import { Component } from '@angular/core';
import {BaseBlockComponent} from '../base-block/base-block.component';
import {get} from 'lodash-es';
import $RefParser from "@apidevtools/json-schema-ref-parser";

@Component({
    selector: 'app-json-dereference-block',
    templateUrl: './json-dereference.component.html'
})
export class JsonDereferenceBlockComponent extends BaseBlockComponent {

    label = 'Trasform';
    inputUrl: string = '';
    resolvedSchemaOutput: any = '';
    errorMessage: string = '';

    onConfigUpdate(config: any) {
        console.log('onConfigUpdate')
        super.onConfigUpdate(config);
        this.label = get(config, 'label', 'Trasform');
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

    async onButtonClick() {
        console.log('onButtonClick')
        this.errorMessage = '';
        
        if (!this.inputUrl.trim()) {
            this.errorMessage = 'Input URl is empty';
            return;
        }

        if (!this.isValidUrl(this.inputUrl)) {
            this.errorMessage = "Invalid URl format";
            return;
        }

        try {
            const resolvedSchema = await new $RefParser().dereference(this.inputUrl);
            console.log(JSON.stringify(resolvedSchema, null, 2));
          } catch (error) {
            console.error("An error occurred:", error);
          }
    }
}