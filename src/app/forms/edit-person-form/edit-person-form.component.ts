import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-person-form',
  templateUrl: './edit-person-form.component.html',
  styleUrls: ['./edit-person-form.component.scss']
})
export class EditPersonFormComponent implements OnInit {

  @Input() item;

  constructor() { }

  ngOnInit() {
  }

}
