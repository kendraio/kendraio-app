import {Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {clone, get, isArray, isObject} from 'lodash-es';
import { compile } from 'handlebars';

@Component({
  selector: 'app-message-block',
  templateUrl: './message-block.component.html',
  styleUrls: ['./message-block.component.scss']
})
export class MessageBlockComponent implements OnInit, OnChanges {

  @Input() config;
  @Input() context;
  @Input() model: any = {};

  @Output() output = new EventEmitter();

  title = '';
  message = '';
  type = '';

  constructor() { }

  ngOnInit() {
    // this.updateOutputDisplay();
  // use for later
  //   Handlebars.registerHelper('formatDate', function(dateString) {
  //     return new Handlebars.SafeString(
  //         moment(dateString).format('MMM D').toUpperCase()
  //     );
  // });
  // Deprecated since version 0.8.0 
// Handlebars.registerHelper("formatDate", function(datetime, format) {

//   // Use UI.registerHelper..
//   UI.registerHelper("formatDate", function(datetime, format) {
//     if (moment) {
//       // can use other formats like 'lll' too
//       format = DateFormats[format] || format;
//       return moment(datetime).format(format);
//     }
//     else {
//       return datetime;
//     }
//   });
  // usage in template {{formatDate date}}  {{formatDate datetime  'short'}} 


  }

  ngOnChanges(changes) {
    this.type = get(this.config, 'type', '');
    this.title = compile(get(this.config, 'title', ''))({ context: this.context || {}, data: this.model, ...this.model || {} });
    this.message = compile(get(this.config, 'message', ''))({ context: this.context || {}, data: this.model, ...this.model || {} });
    this.output.emit(clone(this.model));
  }

}
