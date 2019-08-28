import { Component, OnInit } from '@angular/core';
import { TeostoProfileHandlerService } from '../../handlers/teosto-profile-handler.service';

@Component({
  selector: 'app-teosto-user-form',
  templateUrl: './teosto-user-form.component.html',
  styleUrls: ['./teosto-user-form.component.scss']
})
export class TeostoUserFormComponent implements OnInit {

  model = {};

  constructor(
    private readonly handler: TeostoProfileHandlerService
  ) { }

  ngOnInit() {
    this.model = this.handler.getProfile();
  }

}
