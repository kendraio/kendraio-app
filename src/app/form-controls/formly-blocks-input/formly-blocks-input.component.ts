import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FieldType} from '@ngx-formly/core';
import {get} from 'lodash-es';

@Component({
  selector: 'app-formly-blocks-input',
  templateUrl: './formly-blocks-input.component.html',
  styleUrls: ['./formly-blocks-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyBlocksInputComponent extends FieldType implements OnInit {

  blocks = [];
  models = [];

  ngOnInit() {
    // TODO: refactor (c)
    this.blocks = get(this.field, 'templateOptions.uiSchema.blocksConfig.blocks', []);
    // console.log(this.field, this.blocks);
    this.models = this.blocks.map(blockDef => get(blockDef, 'defaultValue', {}));
    this.models.push({});
  }

}
