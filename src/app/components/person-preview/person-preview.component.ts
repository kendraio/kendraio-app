import { Component, Input, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-person-preview',
  templateUrl: './person-preview.component.html',
  styleUrls: ['./person-preview.component.scss']
})
export class PersonPreviewComponent implements OnInit {

  @Input() id;
  item$;

  constructor(
    private readonly database: DatabaseService
  ) { }

  ngOnInit() {
    this.item$ = this.database.get(this.id);
  }

}
