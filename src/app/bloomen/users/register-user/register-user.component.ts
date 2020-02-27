import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { BloomenUsersService } from '../../_shared/bloomen-users.service';
import { HelpTextService } from 'src/app/_shared/services/help-text.service';
import { helpers } from 'chart.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  regFormIsVaild = false;
  logonFormIsVaild = false;
  allFormsVaild = false;
  registerUser: FormGroup;
  isLoading: boolean;

  constructor(
    private fb: FormBuilder,
    private userService: BloomenUsersService,
    private help: HelpTextService,
    private router: Router
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
      accountDetails: [''],
      logonDetails: ['']
    });
  }

  eventHandler(event: any, form: string) {

    switch (form) {
      case 'accountDetails':
      this.regFormIsVaild = event.valid && event.dirty;
        break;

      case 'logonDetails':
      this.logonFormIsVaild = event.valid && event.dirty;
      console.log(event);
        break;

      default:
        break;
    }

this.allFormsVaild = this.logonFormIsVaild && this.regFormIsVaild;
    // setTimeout(() => {

    // if (event.valid) {
    //   this[form].patchValue(event.value);
    // }
    // this.name.setErrors({ invalid: true, valid: false, badword: true })
    // this[form].setErrors({ invalid: false});
    console.log(this.accountDetails.valid);
    console.log(this.logonDetails.valid);
    console.log(event);
    // });
  }

  submit() {
    this.isLoading = true;
    this.handleResponse('val');
    // this.userService.create(this.registerUser.value)
    //   .subscribe(val => {
    //     this.handleResponse(val);
    //   },
    //     error => {
    //    //   console.log(error.error.error);
    //   //    alert(error.error.error);
    //       // this.isValid = false;
    //       // this.showForm = true
    //       this.help.askHelp('', 'bloomen.registerFail' );
    //    //    this.msgHeader = 'Oops a Daisy! ' + this.handleError(error.error.errorMessage) + ' Please check and try again';
    //     });

  }

  handleResponse(str: string) {

    setTimeout(() => {
      this.help.askHelp('', 'bloomen.registerSuccess');
      this.isLoading = false;

      this.router.navigate([{ outlets: { primary: 'bloomen/users', popup: ['messages'] } }]);

      // this.name.setErrors({ invalid: true, valid: false, badword: true })
      // this[form].setErrors({ invalid: false});
    }, 3000);

    //   setTimeout(() => {
    //  this.router.navigate(['bloomen/users', { outlets: { popup: ['messages']} }]);
    //   }, 5000);
    //   setTimeout(() => {
    //   //  this.router.navigate([{ outlets: { popup: null } }]);
    //   }, 7000);

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
