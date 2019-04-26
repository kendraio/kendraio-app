import { distinctUntilChanged, debounceTime, map, filter, tap } from 'rxjs/operators';

// import { UserService } from '../../_shared/services';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {
  Component,
  HostBinding,
  OnChanges,
  AfterViewChecked,
  OnDestroy,
  OnInit,
  SimpleChanges,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

// import { AnimationService } from '../../_shared/animations/animation.service';
// import { routeAnimation } from '../../_shared/animations/routeAnimations';

import { Store } from '@ngrx/store';

import { Observable, of, Subscription } from 'rxjs';
import { ValidationService } from 'src/app/_shared/services/validation.service';
import { IUser } from 'src/app/_models/classes';


// import { environment } from 'environments/environment';

// import { Country } from '../../_shared/country-lookup/country-lookup.component';

@Component({
  // animations: [routeAnimation],
  selector: 'app-account-form',
  templateUrl: './account-form.component.html'
})
export class AccountFormComponent implements OnInit, OnDestroy, OnChanges {
  // @Input()
  // currentUser: IUser;
  @Input()
  pageTitle: string;
  @Input()
  mode: string;
  // @Output()
  onSubmit = new EventEmitter<IUser>();
  @HostBinding('@routing')
  routing;
  @HostBinding('style.display')
  display = 'block';
  emailChanges$: Observable<string>;

  emailCtrl: FormControl;
  _animationServiceEventsSubscription: any;
  plantGroup: string;
  subTitle: string;
  showNamer = false;
  // user: IUser;
  userForm: FormGroup;
  crumb: string;
  // private userFormChanges: any;
  private emailSub: Subscription;
  isLoading = false;
  isUnique = false;
  msg: any = '';
  errorMessage: string;
  originalEmail: string;
  isUK: boolean;
  countrySelected: boolean;
  addressSelected = false;
  editAddress = this.mode === 'edit';
  // myCountry: Country = new Country('', '', '');
  // EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  TEL_REGEX = /^[\d\s]+$/i;

  now: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _fb: FormBuilder,
    // private _userService: UserService,
    // private _animationService: AnimationService,
    private validationService: ValidationService
  ) {
    // this.createForm();
  }
  // updateOn: 'blur' USE THIS TODO:

  createForm() {
    this.emailCtrl = this._fb.control('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern(this.EMAIL_REGEXP)
    ]);
    this.userForm = this._fb.group({
      iAccept: [false, [Validators.required]],
      rhsRef: this.now,
      contactDetails: this._fb.group({
        // <-- the child FormGroup
        firstname: ['', [Validators.required, Validators.minLength(2)]],
        lastname: ['', Validators.required],
        email: this.emailCtrl,
        telephone: ''
      }),
      address: this._fb.group({
        // <-- the child FormGroup
        addressLine1: ['', Validators.required],
        addressLine2: '',
        townCity: ['', Validators.required],
        countyState: '',
        country: ['', Validators.required],
        postCode: ''
      })
    });
  }
  get address(): any {
    return this.userForm.get('address');
  }
  get iAccept(): any {
    return this.userForm.get('iAccept');
  }
  ngOnInit() {
    this.now = (Math.floor(Math.random() * 9999) + 1).toString(); // Date().toString();
    this.createForm();
    this.emailChanges$ = this.emailCtrl.valueChanges;
    // this.currentUser$ = this.currentUser;
    this.subTitle = this.route.snapshot.data['subTitle'];
    this.crumb = this.route.snapshot.data['crumbs'];
    // this.routing = this._animationService.animationDirection();
    // this._animationServiceEventsSubscription = this._animationService.emitCurrentDirection.subscribe(
    //   (direction: any) => {
    //     this.routing = direction;
    //   }
    // );

    this.emailSub = this.emailChanges$
      .pipe(
        distinctUntilChanged(),
        debounceTime(400),
        tap(() => {
          this.isUnique = false;
          this.emailCtrl.setValidators([
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(this.EMAIL_REGEXP)
          ]);
          this.emailCtrl.updateValueAndValidity();
          this.isLoading = true;
          this.msg = null;
        })
      )
      .pipe(debounceTime(400))
      .subscribe(val => {
        // this.checkEmailName(this.emailCtrl.value);
        this.isLoading = false;
      });
  }

  ngOnChanges() {
    // if (this.currentUser) {
    //   this.isUK = this.currentUser.address.country === 'GB';
    //   this.myCountry.code = this.currentUser.address.country;
    //   if (!this.originalEmail) {
    //     this.originalEmail = this.currentUser.contactDetails.email;
    //   }
    //   this.emailSub.unsubscribe();
    //   this.userForm.patchValue(this.currentUser);
    //   this.emailSub = this.emailChanges$
    //     .pipe(
    //       distinctUntilChanged(),
    //       debounceTime(500),
    //       tap(() => {
    //         this.isUnique = false;
    //         this.emailCtrl.setValidators([
    //           Validators.required,
    //           Validators.minLength(8),
    //           Validators.pattern(this.EMAIL_REGEXP)
    //         ]);
    //         this.emailCtrl.updateValueAndValidity();
    //         this.isLoading = true;
    //         this.msg = null;
    //       })
    //     )
    //     //    .debounceTime(400)
    //     .subscribe(val => {
    //       if (this.originalEmail !== this.emailCtrl.value) {
    //         this.checkEmailName(this.emailCtrl.value);
    //       }
    //       this.isLoading = false;
    //     });
    // }
  }

  // checkEmailName(val: string): void {
  //   if (this.emailCtrl.valid && this.emailCtrl.value !== this.originalEmail) {
  //     const sub = this.validationService
  //       .checkForDupEmail(val)
  //       .subscribe((res: string) => this.onEmailChecked(res), (error: any) => (this.errorMessage = <any>error));
  //     this.emailSub.add(sub);
  //   }
  // }

  onEmailChecked(res: any): void {
    this.isUnique = !res.result.value;
    if (this.isUnique) {
      this.msg = { msg: null, isValid: true };
    } else {
      this.msg = { msg: 'This Email is Already in use! Please try another', isValid: false };
    }
    this.emailCtrl.setValidators([
      Validators.required,
      Validators.minLength(8),
      // isValid(this.isUnique),
      Validators.pattern(this.EMAIL_REGEXP)
    ]);
    this.emailCtrl.updateValueAndValidity();
    this.isLoading = false;
  }
  onEmailChange() {}

  getAddress(event): void {
    this.addressSelected = true;
    this.address.patchValue(event);
  }

  getCountry(event): void {
    this.addressSelected = false;
    this.countrySelected = event;
    this.isUK = event === 'GB';
    this.address.controls.country.patchValue(event);
  }

  submit() {
    if (this.userForm.valid) {
      this.onSubmit.emit(this.userForm.value);
      // this.originalEmail = this.userForm.value.contactDetails.email;
    }
  }

  // selectCountry() {
  //   this.addressSelected = false
  //   this.countrySelected = (this.address.value.country)
  //   this.isUK = (this.address.value.country === 'RHS');
  // }

  prepareSaveUser(): IUser {
    const formModel = this.userForm.value;
    const saveUser: IUser = {
      id: '',
      fName: '',
      lName: ''
      // contactDetails: {
      //   firstname: formModel.contactDetails.firstName,
      //   lastname: formModel.contactDetails.lastName,
      //   email: formModel.contactDetails.email,
      //   telephone: formModel.contactDetails.telephone
      // },
      // address: formModel.address
    };
    return saveUser;
  }

  ngOnDestroy() {
    // this.userFormChanges.unsubscribe()
    this.emailSub.unsubscribe();
  }

  toggleLogin() {
    // this.loginService.isDisplayed = !this.loginService.isDisplayed;
    // if (this.loginService.isDisplayed) {
    this.router.navigate([{ outlets: { popup: ['login'] } }]);
    // } else {
    //   this._router.navigate([{ outlets: { popup: null } }]);
    // }
  }
}


