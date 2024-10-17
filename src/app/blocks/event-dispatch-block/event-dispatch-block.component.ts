import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { clone, get } from 'lodash-es';
import { FormSubmitHandlerService } from '../../services/form-submit-handler.service';

@Component({
  selector: 'app-event-dispatch-block',
  templateUrl: './event-dispatch-block.component.html',
  styleUrls: ['./event-dispatch-block.component.scss'],
})
export class EventDispatchBlockComponent implements OnInit, OnChanges {
  @Input() config;
  @Input() context;
  @Input() model: any = {};
  @Output() output = new EventEmitter();

  constructor(private readonly submitHandler: FormSubmitHandlerService) {}

  ngOnInit() {}

  // TODO: Event dispatch safety check
  // Adapters must not be able to spoof events from other adapters
  ngOnChanges(changes) {
    if (get(changes, 'model.firstChange', false)) {
      return;
    }
    const adapterName = get(this.context, 'app.adapterName', 'UNKNOWN');
    this.submitHandler.handle({
      form: adapterName,
      action: get(this.config, 'action', 'submit'),
      payload: clone(this.model),
    });
    this.output.emit(clone(this.model));
  }
}
