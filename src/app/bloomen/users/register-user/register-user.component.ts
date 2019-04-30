import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { BloomenUsersService } from '../../_shared/bloomen-users.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  childFormIsVaild: boolean;
  registerUser: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: BloomenUsersService
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
      // this.name.setErrors({ invalid: true, valid: false, badword: true })
   // this[form].setErrors({ invalid: false});
      console.log(this.registerUser.valid);
    });
  }


  submit() {
    this.userService.create(this.registerUser.value)
      .subscribe(val => {
        this.handleResponse(val);
      },
        error => {
          console.log(error.error.error);
          alert(error.error.error);
          // this.isValid = false;
          // this.showForm = true
          // this.msgHeader = 'Oops a Daisy! ' + this.handleError(error.error.errorMessage) + ' Please check and try again';
        });

  }

  handleResponse(str: string) {
    // this.isValid = true;
    // this.msgHeader = 'Your Password has been re-set!'
    // this.showForm = false;
    // this.formStatus = 'complete'
  }


  handleError(str: string) {
    const errMsg = str || 'The info you sent is not valid.'
    if (errMsg.indexOf('expired') > -1) {
      // this.showForm = false;

    } else {
      // this.showForm = true;
    }
    return errMsg;

  }





}
