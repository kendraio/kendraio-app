import {Component} from '@angular/core';
import {IHeaderAngularComp, ICellRendererAngularComp} from 'ag-grid-angular';


@Component({
    selector: 'button-component',
    template: `
        <div class="container">
        <button mat-raised-button mat-button>Edit</button>
        </div>
    `,
    styles: [`
        .container {
            width: 100%;
        }

        /deep/
        .ag-header-cell {
            text-align: left;
        }
    `]
})
export class MatButtonComponent implements ICellRendererAngularComp {
    params: any;

    agInit(params: any): void {
        this.params = params;
    }


    refresh(params: any): boolean {
        this.params = params;
        return true;
    }

    constructor(
     //   private columnAlignmentService: ColumnAlignmentService
        ) {
    }

    groupChanged($event) {
      //  this.columnAlignmentService.changeColumnAlignment($event.value);
    }
}
