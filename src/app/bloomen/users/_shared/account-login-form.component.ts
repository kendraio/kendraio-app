
import {distinctUntilChanged,  map, filter, tap } from 'rxjs/operators';
// import { AppState, IUser, PageStatus } from '../../_shared/interfaces';
// import { UserService } from '../../_shared/services';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, } from '@angular/forms';
import { Component, HostBinding, OnChanges, OnDestroy, OnInit, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';

// import { AnimationService } from '../../_shared/animations/animation.service';
// import { routeAnimation } from '../../_shared/animations/routeAnimations';

import { Store } from '@ngrx/store';


import { IUser } from 'src/app/_models/classes';
import { PasswordValidation, PasswordStrength } from 'src/app/_shared/directives/passwordValidation';

@Component({
  // animations: [routeAnimation],
  selector: 'app-account-login-form',
  templateUrl: './account-login-form.component.html'
})
export class AccountLoginFormComponent implements OnInit, OnDestroy {
  @Input() userId: string;
  @Input() pageTitle: string;
  @Input() email: string;
  @Input() mode: string;
  @Output() onSubmit = new EventEmitter<IUser>();
  @HostBinding('@routing') routing
  @HostBinding('style.display') display = 'block';

  _animationServiceEventsSubscription: any;
  plantGroup: string;
  subTitle: string;
  showNamer = false;
  user: IUser;
  isLoading: boolean;
  showPassword = false;

  loginForm: FormGroup;
  passwordCtrl: FormControl;
  confirmPasswordCtrl: FormControl;
  currentPasswordCtrl: FormControl;

  // passwordPattern: RegExp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!+_#\-&$£*])(?=.*[0-9]).{8,24}?$/g;

  passwordPattern: RegExp = /^(?=.*[a-z])(?=.*[A-Z]).{8,30}$/g;

  private userFormChanges: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    // private _userService: UserService,
    // private _animationService: AnimationService,
    // private _store: Store<AppState>,
  ) {
    // this.passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!+_#\-&$£*])(?=.*[0-9])$/g

 
  }

  ngOnInit() {
    const currentPasswordCtrl = this.fb.control('', [Validators.required, Validators.minLength(8)]);
    // const password = fb.control('', [Validators.required, Validators.minLength(8), Validators.pattern(this.passwordPattern)]);
    // const confirmPasswordCtrl = fb.control({ value: '', disabled: true}, [Validators.required]);
   


    this.loginForm = this.fb.group({
      currentPassword: currentPasswordCtrl,
      password: ['', [
        Validators.required,
        PasswordStrength.strong,
        // Validators.pattern(this.passwordPattern)
      ]],
      confirmPassword: [{ value: '', disabled: true}, [Validators.required]],
      email: ''
    }, {
        validator: PasswordValidation.MatchPassword
      })
    this.subTitle = this.route.snapshot.data['subTitle'];

    // this.routing = this._animationService.animationDirection();
    // this._animationServiceEventsSubscription = this._animationService.emitCurrentDirection.subscribe((direction: any) => {
    //   this.routing = direction;
    // });

    this.currentPasswordCtrl = (<any>this.loginForm).controls.currentPassword;
    this.passwordCtrl = (<any>this.loginForm).controls.password;
    this.confirmPasswordCtrl = (<any>this.loginForm).controls.confirmPassword;
    if (this.mode === 'create' || this.mode === 'reset') {
      this.currentPasswordCtrl.setValidators(null);
      this.currentPasswordCtrl.updateValueAndValidity();
    }

    this.showPassword = false;
    const passwordStatusChange$ = this.passwordCtrl.statusChanges;
    passwordStatusChange$.pipe(distinctUntilChanged()).subscribe(
      status => {
        if (status === 'INVALID') {
        } else if (status === 'VALID') {
          this.loginForm.get('confirmPassword').enable()
        }
      })



  }
  ngOnDestroy() {
    //   this.userFormChanges.unsubscribe()
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








