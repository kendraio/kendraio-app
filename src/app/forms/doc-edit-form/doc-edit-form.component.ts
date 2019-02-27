import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SchemaRepositoryService } from '../../services/schema-repository.service';
import { DocumentRepositoryService } from '../../services/document-repository.service';
import {FormRepositoryService} from '../../services/form-repository.service';

@Component({
  selector: 'app-doc-edit-form',
  templateUrl: './doc-edit-form.component.html',
  styleUrls: ['./doc-edit-form.component.scss']
})
export class DocEditFormComponent {

  @Output() docSaved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  _doc;
  _schema;

  @Input() set doc(doc) {
    this._doc = doc;
    if (doc) {
      this._schema = this.schemaRepo.getSchema(this._doc['@schema']);
      this.initForm();
    }
  }
  formGroup: FormGroup;
  formModel;
  formLayout = {};

  errorMessage;


  constructor(
    private readonly fb: FormBuilder,
    private readonly docsRepo: DocumentRepositoryService,
    private readonly schemaRepo: SchemaRepositoryService,
    private readonly formRepo: FormRepositoryService
  ) { }

  initForm() {
    const getDefaultValue = key => {
      const field = this._schema.fields.find(f => f.id === key);
      return field.defaultValue || undefined;
    };
    this.formGroup = this.fb.group(this._schema.fields.reduce((fg, f) => {
      fg[f.id] = [this._doc[f.id] || getDefaultValue(f.id), []]; // todo: validators
      return fg;
    }, {}));
    this.formRepo.getFormModel(this._doc['@schema'], 'edit').subscribe(model => {
      this.formModel = model;
    });
  }

  resetForm() {
    this.formGroup.reset();
    this.formGroup.patchValue(this._doc);
  }

  onSubmit() {
    this.formGroup.disable();
    this.docsRepo
      .putDoc({ ...this._doc, ...this.formGroup.getRawValue() })
      .subscribe(({ ok, rev }) => {
        if (ok) {
          this.errorMessage = null;
          this._doc['_rev'] = rev;
        }
        this.formGroup.enable();
        this.docSaved.emit();
      }, ({ message }) => this.errorMessage = message);
  }
}
