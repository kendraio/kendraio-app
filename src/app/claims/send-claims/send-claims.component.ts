import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-send-claims',
  templateUrl: './send-claims.component.html',
  styleUrls: ['./send-claims.component.scss']
})
export class SendClaimsComponent implements OnInit {
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
   // private formService: DynamicFormService
  ) { }

  ngOnInit() {
  }




  removeClaim(i){
    this.data.splice(i, 1);
  }


}
