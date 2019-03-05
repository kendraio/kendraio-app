import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MatButton , MatDialog, MatDialogClose } from '@angular/material';

@Component({
  selector: 'app-send-claims',
  templateUrl: './send-claims.component.html',
  styleUrls: ['./send-claims.component.scss']
})
export class SendClaimsComponent implements OnInit {
  nextStep = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
   // private formService: DynamicFormService
  ) { }

  ngOnInit() {
  }


  nextClaimStep(){
    console.log(this.data)
    this.nextStep = true;

  }

  nextClaimStep3() {
    // todo
  }

  removeClaim(i){
    this.data.splice(i, 1);
  }


}
