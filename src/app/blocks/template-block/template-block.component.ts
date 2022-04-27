import {Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import {clone, get, set} from 'lodash-es';
import { compile } from 'handlebars/dist/handlebars.js';
import DOMPurify from './dom-sanitiser';
import { SharedStateService } from 'src/app/services/shared-state.service';

@Component({
  selector: 'app-template-block',
  templateUrl: './template-block.component.html',
  styleUrls: ['./template-block.component.scss']
})
export class TemplateBlockComponent implements OnChanges {

  @Input() config;
  @Input() context;
  @Input() model: any = {};

  @Output() output = new EventEmitter();
  
  innerHtml = '';

  constructor(private stateService: SharedStateService) {        
    this.stateService.state$.subscribe(state => { Promise.resolve(null).then(() => this.render()); });
  }
  
  

  ngOnChanges(changes) {
    // TODO: Allow loading template from Adapter    
    this.render();
    this.output.emit(clone(this.model));  
  }

  render(){
    try {
      let renderedHtml = DOMPurify.sanitize(        
          compile(get(this.config, 'template', ''))({ context: this.context, data: this.model, state: this.stateService.state })      
      );
      // Store rendered html in data
      set(this.model,get(this.config, 'key', 'renderedHtml'), renderedHtml);
      // if we want to display the html too, set the value of the innerHtml property
      if (get(this.config, 'renderToScreen', true)) {
        this.innerHtml = renderedHtml;
      }
    } catch {
    // hide errors for now
    }
  }
}
