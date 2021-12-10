import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {clone, get} from 'lodash-es';
import { compile } from 'handlebars/dist/handlebars.js';
import DOMPurify from './dom-sanitiser';
import { SharedStateService } from 'src/app/services/shared-state.service';

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

  constructor(private stateService: SharedStateService) {    
    stateService.shared$.subscribe(incoming => { setTimeout(() =>{this.render()}) });
  }

  ngOnInit() {
    // this.updateOutputDisplay();
  }

  ngOnChanges(changes) {
    // TODO: Allow loading template from Adapter    
    this.render();
    this.output.emit(clone(this.model));
  }

  render(){
    try {
      this.innerHtml = DOMPurify.sanitize(        
          compile(get(this.config, 'template', ''))({ context: this.context, data: this.model, state: this.stateService.state })      
      );
    } catch {
    // hide errors for now
    }
  }
}
