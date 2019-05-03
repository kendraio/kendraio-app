
import {distinctUntilChanged,  map, filter, tap, debounceTime } from 'rxjs/operators';
// import { UserService } from '../../_shared/services';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, } from '@angular/forms';
import { Component, HostBinding, OnChanges, OnDestroy, OnInit, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
// import { AnimationService } from '../../_shared/animations/animation.service';
import { IUser } from 'src/app/_models/classes';
import { PasswordValidation, PasswordStrength } from 'src/app/_shared/directives/passwordValidation';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-account-login-form',
  templateUrl: './account-login-form.component.html'
})
export class AccountLoginFormComponent implements OnInit, OnDestroy {
  @Input() userId: string;
  @Input() pageTitle: string;
  @Input() email: string;
  @Input() mode: string;
  @Output() onSubmit = new EventEmitter<IUser>();
  @Input()
  data: any;
  @Output()
  formData: EventEmitter<Object> = new EventEmitter<Object>();
  @HostBinding('style.display') display = 'block';

  subTitle: string;
  user: IUser;
  isLoading: boolean;
  showPassword = false;

  loginForm: FormGroup;
  passwordCtrl: FormControl;
  confirmPasswordCtrl: FormControl;
  currentPasswordCtrl: FormControl;
  hidePassword = true;
  // passwordPattern: RegExp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!+_#\-&$£*])(?=.*[0-9]).{8,24}?$/g;
  passwordPattern: RegExp = /^(?=.*[a-z])(?=.*[A-Z]).{8,30}$/g;
  private userFormChanges: any;
  sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,

  ) {
    // this.passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!+_#\-&$£*])(?=.*[0-9])$/g
  }

  ngOnInit() {

   
    this.loginForm = this.fb.group({
      currentPassword: 'Whollop-99', //currentPasswordCtrl,
      password: ['Whollop99', [
        Validators.required,
         PasswordStrength.strong,
        // Validators.pattern(this.passwordPattern)
      ]],
      confirmPassword: [{ value: 'Whollop99', disabled: true}, [Validators.required]],
      username: [{ value: 'Whollop99'}, [Validators.required, Validators.minLength(4)]]
    }, 
    {
        validator: PasswordValidation.MatchPassword
      });

    this.currentPasswordCtrl = (<any>this.loginForm).controls.currentPassword;
    this.passwordCtrl = (<any>this.loginForm).controls.password;
    this.confirmPasswordCtrl = (<any>this.loginForm).controls.confirmPassword; //TODO is this nessesary?
    if (this.mode === 'create' || this.mode === 'reset') {
      this.currentPasswordCtrl.setValidators(null);
      this.currentPasswordCtrl.updateValueAndValidity();
    }

    this.showPassword = false;
    const passwordStatusChange$ = this.passwordCtrl.statusChanges;
    passwordStatusChange$.pipe(distinctUntilChanged()).subscribe(
      status => {
        if (status === 'INVALID') {
          this.confirmPassword.disable();
        } else if (status === 'VALID') {
          this.confirmPassword.enable();
        }
      });

      this.sub = this.loginForm.valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(600)
      )
      .subscribe(newValue => {

        this.formData.emit(this.loginForm);

      });

  }
  get password() {
    return this.loginForm.get('password');
  }
  get confirmPassword() {
    return this.loginForm.get('confirmPassword');
  }
  ngOnDestroy() {
    //   this.userFormChanges.unsubscribe() //TODO!!!
  }

  toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  submit() {
    if (this.loginForm.valid) {
      this.onSubmit.emit(this.loginForm.value);
    }

  }

}








