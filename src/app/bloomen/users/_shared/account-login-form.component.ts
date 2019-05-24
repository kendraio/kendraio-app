
import {distinctUntilChanged,  map, filter, tap, debounceTime } from 'rxjs/operators';
// import { UserService } from '../../_shared/services';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, } from '@angular/forms';
import { Component, HostBinding, OnChanges, OnDestroy, OnInit, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
// import { AnimationService } from '../../_shared/animations/animation.service';
import { IUser } from 'src/app/_models/classes';
import { PasswordValidation, PasswordStrength } from 'src/app/_shared/directives/passwordValidation';
import { Subscription } from 'rxjs';
 import { DynamicFormModel, DynamicFormLayout, DynamicFormService } from '@ng-dynamic-forms/core';
import { LOGIN_FORM_MODEL } from '../../_shared/form-models/login-form.modal';
import { LOGIN_FORM_LAYOUT } from '../../_shared/form-models/login-form.layout';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

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

  formGroupNew: FormGroup;
  formLayout: DynamicFormLayout = LOGIN_FORM_LAYOUT;
  formModel: DynamicFormModel = LOGIN_FORM_MODEL;

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};


  fields: FormlyFieldConfig[] = [{
    key: 'password',
    validators: {
      fieldMatch: {
        expression: (control) => {
          const value = control.value;
          return value.passwordConfirm === value.password
            // avoid displaying the message error when values are empty
            || (!value.passwordConfirm || !value.password);
        },
        message: 'Password Not Matching',
        errorPath: 'passwordConfirm',
      },
    },
    fieldGroup: [
      {
        key: 'password',
        type: 'input',
        templateOptions: {
          type: 'password',
          label: 'Password',
          placeholder: `Must be at least 8 characters`,
          required: true,
          minLength: 8,
        },
      },
      {
        key: 'passwordConfirm',
        type: 'input',
        hideExpression: (model) => !model.password,
        templateOptions: {
          type: 'password',
          label: 'Confirm Password',
          placeholder: 'Please re-enter your password',
          required: true,
        },
      },
    ],
  }];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private formService: DynamicFormService
  ) {
    // this.passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!+_#\-&$£*])(?=.*[0-9])$/g
    this.formGroupNew = this.formService.createFormGroup(this.formModel);
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
    const passwordStatusChange$ = this.password2.statusChanges;
    passwordStatusChange$.pipe(distinctUntilChanged()).subscribe(
      status => {
        if (status === 'INVALID') {
          this.confirmPassword2.disable();
        } else if (status === 'VALID') {
          this.confirmPassword2.enable();
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

//        this.sub.add(
// this.password2.statusChanges.subscribe(
//   (val) => {
//     this.confirmPassword2.enable();
// })

//        );

      // this.formGroupNew = this.formService.createFormGroup(this.formModel);
      // this.formGroupNew.get('password').setValidators(
      //   PasswordStrength.strong
      // );

  }
  get password2() {
    return this.formGroupNew.get('passwordSetterGroup.password');
  }
  get confirmPassword2() {
    return this.formGroupNew.get('passwordSetterGroup.confirmPassword');
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

  
  onBlur($event) {
    console.log(`Material blur event on: ${$event.model.id}: `, $event);
  }

  onChange($event) {
    console.log(`Material change event on: ${$event.model.id}: `, $event);
  }

  onFocus($event) {
    console.log(`Material focus event on: ${$event.model.id}: `, $event);
  }

  onMatEvent($event) {
    console.log(`Material ${$event.type} event on: ${$event.model.id}: `, $event);
  }

}








