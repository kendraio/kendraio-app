import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {

  @Input() session;
  @Input() id;

  constructor() { }

  ngOnInit() {
  }

}
