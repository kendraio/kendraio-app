import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { KendraioFormService } from '../../_shared/ui-form/services/kendraio.form.service';
import { FormSubmitHandlerService } from '../../services/form-submit-handler.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.scss']
})
export class GenericFormComponent implements OnInit, OnChanges {

  @Input() adapter: string;
  @Input() formId: string;

  form = new FormGroup({});
  fields: FormlyFieldConfig[];
  options: FormlyFormOptions = {};
  model = {};

  constructor(
    private formService: KendraioFormService,
    private formSubmitHandler: FormSubmitHandlerService
  ) { }

  ngOnInit() {
    this.updateForm();
  }

  ngOnChanges(changes): void {
    // console.log({ changes });
    this.updateForm();
  }

  updateForm() {
    this.formService.getJSONSchemaForm(this.adapter, this.formId)
      .pipe(tap(console.log))
      .subscribe((fields) => {
        console.log({ fields });
        this.fields = fields;
      });
  }

  onSubmit() {
    this.formSubmitHandler.handle({
      form: `${this.adapter}:${this.formId}`,
      action: 'submit',
      payload: this.form.getRawValue()
    });
  }
}
