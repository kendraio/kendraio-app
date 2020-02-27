import { Component, OnInit } from '@angular/core';
import {BloomenApiService} from '../../../services/bloomen-api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  selectedUserIds: number[];
  users$;
  displayedColumns: string[] = ['role', 'username', 'hash', 'organisation', 'createdAtUTC'];

  constructor(
    private readonly bloomenApi: BloomenApiService
  ) { }

  ngOnInit() {
    this.users$ = this.bloomenApi.getUsers();
  }

  addCustomUser = (term) => ({id: term, name: term});

}
