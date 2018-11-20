import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-inclusion-preview',
  templateUrl: './inclusion-preview.component.html',
  styleUrls: ['./inclusion-preview.component.scss']
})
export class InclusionPreviewComponent implements OnInit {

  @Input() id;
  @Input() image;
  item$;

  @Output() deleteTag = new EventEmitter();

  constructor(
    private readonly database: DatabaseService
  ) {
  }

  ngOnInit() {
    this.item$ = this.database.get(this.id);
  }

  onCancel() {
    this.deleteTag.emit();
  }
}
