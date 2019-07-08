import { Component, OnInit, Input } from '@angular/core';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';

@Component({
  selector: 'app-kendraio-form',
  templateUrl: './kendraio-form.component.html',
  styleUrls: ['./kendraio-form.component.scss']
})
export class KendraioFormComponent implements OnInit {
  @Input()
  model;

  @Input()
  fields;

  @Input()
  form;

  @Input()
  options;




  constructor() { }

  ngOnInit() {
  }

  submit() {
    alert(JSON.stringify(this.model));
  }

}
