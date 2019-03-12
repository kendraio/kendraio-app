import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MatButton , MatDialog, MatDialogClose } from '@angular/material';
import { Router } from '@angular/router';
import { Animations } from 'src/app/_shared/animations';

@Component({
  selector: 'app-send-claims',
  templateUrl: './send-claims.component.html',
  styleUrls: ['./send-claims.component.scss'],
  animations: [Animations.pageAni]
})
export class SendClaimsComponent implements OnInit {
  nextStep = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private readonly router: Router,
  ) { }

  ngOnInit() {
  }


  nextClaimStep(){
    console.log(this.data);
    this.nextStep = true;
  }

  nextClaimStep3() {

    localStorage.setItem('myClaims', JSON.stringify(this.data));

      this.router.navigate(['/claims']);
    // sidenav.open();
 


  }

  removeClaim(i){
    this.data.splice(i, 1);
  }


}
