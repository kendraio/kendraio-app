import {ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FieldType} from '@ngx-formly/core';
import {get} from 'lodash-es';

@Component({
  selector: 'app-formly-blocks-input',
  templateUrl: './formly-blocks-input.component.html',
  styleUrls: ['./formly-blocks-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyBlocksInputComponent extends FieldType implements OnInit, OnChanges {

  blocks = [];
  models = [];
  context = {};

  ngOnInit() {
    // TODO: refactor (c)
    // TODO: does this need to run OnChange
    this.blocks = get(this.field, 'templateOptions.uiSchema.blocksConfig.blocks', []);
    // console.log(this.field, this.blocks);
    // console.log('form block value', this.formControl.value);
    // this.models = this.blocks.map(blockDef => get(blockDef, 'defaultValue', {}));
    // this.context = { ...this.context, defaultValue: this.formControl.value };
    const adapterName = get(this.field, 'templateOptions.uiSchema.blocksConfig.adapterName', 'UNKNOWN');
    this.context = {
      app: {
        adapterName,
      },
      ...(this.options['context'] || {})
    };
    this.models.push(this.formControl.value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log({ changes });
    const adapterName = get(this.field, 'templateOptions.uiSchema.blocksConfig.adapterName', 'UNKNOWN');
    this.context = {
      app: {
        adapterName,
      },
      ...(this.options['context'] || {})
    };
  }

  onWorkflowComplete(value) {
    // console.log('formly blocks workflow complete', { value });
    if (!!value) {
      // this._onValueChanged(value);
      this.formControl.setValue(value);
    }
  }
}
