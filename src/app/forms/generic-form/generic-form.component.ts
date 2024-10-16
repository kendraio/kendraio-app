import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { UntypedFormGroup } from "@angular/forms";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";
import { KendraioFormService } from "../../_shared/ui-form/services/kendraio.form.service";
import { FormSubmitHandlerService } from "../../services/form-submit-handler.service";

@Component({
  selector: "app-generic-form",
  templateUrl: "./generic-form.component.html",
  styleUrls: ["./generic-form.component.scss"],
})
export class GenericFormComponent implements OnInit, OnChanges {
  @Input() adapter: string;
  @Input() formId: string;
  @Input() model: any = {};

  form = new UntypedFormGroup({});
  fields: FormlyFieldConfig[];
  options: FormlyFormOptions = {};

  constructor(
    private formService: KendraioFormService,
    private formSubmitHandler: FormSubmitHandlerService,
  ) {}

  ngOnInit() {
    this.updateForm();
  }

  ngOnChanges(changes): void {
    // console.log({ changes });
    this.updateForm();
  }

  updateForm() {
    this.formService
      .getJSONSchemaForm(this.adapter, this.formId)
      .subscribe((fields) => {
        this.fields = fields;
      });
  }

  onSubmit() {
    this.formSubmitHandler.handle({
      form: `${this.adapter}:${this.formId}`,
      action: "submit",
      payload: this.form.getRawValue(),
    });
  }
}
