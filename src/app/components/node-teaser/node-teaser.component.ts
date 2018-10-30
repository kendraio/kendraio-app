import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { Router } from '@angular/router';
import { ConfirmDeleteDialogComponent } from '../../dialogs/confirm-delete-dialog/confirm-delete-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-node-teaser',
  templateUrl: './node-teaser.component.html',
  styleUrls: ['./node-teaser.component.scss']
})
export class NodeTeaserComponent implements OnInit {

  @Input() id: string;
  data$;

  @Output() deleted = new EventEmitter();

  constructor(
    private readonly database: DatabaseService,
    private readonly router: Router,
    private readonly dialog: MatDialog
  ) { }

  ngOnInit() {
    this.data$ = this.database.get(this.id);
  }

  deleteNode(item) {
    this.dialog.open(ConfirmDeleteDialogComponent, {
      data: { item }
    }).afterClosed().subscribe(result => {
      if (result) {
        this.database.delete(item.id).subscribe(() => {
          console.log(`Deleted ${item.id}`);
          this.deleted.emit();
        });
      }
    });
  }

  editNode() {
    this.router.navigate(['/node', this.id]);
  }
}
