import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  childFormIsVaild: boolean;
  registerUser: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm()
  }

  get accountDetails() {
    return this.registerUser.get('accountDetails');
  }
  get logonDetails() {
    return this.registerUser.get('logonDetails');
  }
  createForm() {
    this.registerUser = this.fb.group({
      accountDetails: ['', Validators.required],
      logonDetails: ['', Validators.required]
    });
  }

  eventHandler(event: any, form: string) {
    this.childFormIsVaild = event.valid;
    setTimeout(() => {

 if (event.valid) {
        this[form].patchValue(event.value);
      }
    
      console.log(this.registerUser.valid)
    });
  }



}
