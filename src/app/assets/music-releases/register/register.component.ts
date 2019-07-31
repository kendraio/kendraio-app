import { Component, OnInit, Inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MatDialog, MatDialogClose } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Animations } from 'src/app/_shared/animations';
import { AdaptersService } from 'src/app/services/adapters.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [Animations.kendraAnimations]
})
export class RegisterComponent implements OnInit {
  nextStep = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private readonly router: Router,
    private readonly adapters: AdaptersService
  ) { }

  ngOnInit() {
  }
// Object.keys(adapters);
  get enabled() { return Object.keys(this.adapters.enabledAdapters); }
  onNextStep() {
    console.log(this.data);
    this.nextStep = true;
  }

  nextClaimStep3(section: string) {

  //  localStorage.setItem(section, JSON.stringify(this.data.data));
   // this.router.navigate(['/claims']);

  }

  removeClaim(i) {
    this.data.splice(i, 1);
  }

}