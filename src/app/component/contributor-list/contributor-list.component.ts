import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contributor-list',
  templateUrl: './contributor-list.component.html',
  styleUrls: ['./contributor-list.component.scss']
})
export class ContributorListComponent implements OnInit {
  @Input() contributors;

  constructor() { }

  ngOnInit() {
  }

}
