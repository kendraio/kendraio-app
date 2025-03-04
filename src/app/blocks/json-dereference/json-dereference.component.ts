import { Component, OnInit, SimpleChanges } from '@angular/core';
import { BaseBlockComponent } from '../base-block/base-block.component';
import { JSONSchemaRefParser } from './json-schema-ref-parser';

@Component({
  selector: 'app-json-dereference-block',
  templateUrl: './json-dereference.component.html',
  styleUrls: ['./json-dereference.component.scss']
})
export class JsonDereferenceBlockComponent extends BaseBlockComponent implements OnInit {

  public dereferencedSchema: any;
  public errorMessage: string | null = null;

  ngOnInit() {
    super.ngOnInit(); 
    this.loadSchema();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['model']) {
        this.loadSchema();
    }
}

  async loadSchema() {

    this.errorMessage = null;
    try {
        const url = this.model && typeof this.model === 'object' && this.model.url ? this.model.url : this.model;
      if (!url) {
        this.dereferencedSchema = null;
        this.errorMessage = 'URL not provided';
        this.output.emit(null);
        return;
      }

      const parser = new JSONSchemaRefParser();
      const dereferenced = await parser.dereference(url, {validateSchema:true});
      this.dereferencedSchema = dereferenced;
      this.output.emit(dereferenced);
    } catch (error: any) {
      this.errorMessage = error.message;
      this.dereferencedSchema = null;
      this.output.emit(null);
    }
  }
}


// next step:
// URL Sanitization
// Implement basic validation to check if data is JSON Schema