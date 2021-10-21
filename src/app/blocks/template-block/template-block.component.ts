import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {clone, get} from 'lodash-es';
import Handlebars from 'handlebars';
import DOMPurify from './dom-sanitiser';

@Component({
  selector: 'app-template-block',
  templateUrl: './template-block.component.html',
  styleUrls: ['./template-block.component.scss']
})
export class TemplateBlockComponent implements OnInit, OnChanges {

  @Input() config;
  @Input() context;
  @Input() model: any = {};

  @Output() output = new EventEmitter();

  innerHtml = '';

  constructor() { }

  ngOnInit() {
    // this.updateOutputDisplay();
  }

  ngOnChanges(changes) {
    /**
     * If template helpers need to be defined, this is an example process. 
     * 
     * 
    Handlebars.registerHelper("link", function(text, adapter, workflowID) {             
     return '<a [routerlink]="[\'/\',\''+adapter+'\',\'${workflowID}\']">'+text+'</a>';         
    });
    **/

    this.innerHtml = DOMPurify.sanitize(
      Handlebars.compile(get(this.config, 'template', ''))({ context: this.context, data: this.model })
    );
    this.output.emit(clone(this.model));
  }
}
