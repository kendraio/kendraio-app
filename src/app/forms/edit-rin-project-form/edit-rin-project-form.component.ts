import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-rin-project-form',
  templateUrl: './edit-rin-project-form.component.html',
  styleUrls: ['./edit-rin-project-form.component.scss']
})
export class EditRinProjectFormComponent implements OnInit {

  @Input() item;

  constructor() { }

  ngOnInit() {
  }

}
