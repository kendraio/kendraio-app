import { distinctUntilChanged, debounceTime, map, filter, tap } from 'rxjs/operators';
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
import { Observable, of, Subscription } from 'rxjs';
// import { ValidationService } from 'src/app/_shared/services/validation.service';
import { IUser } from 'src/app/_models/classes';

// import { environment } from 'environments/environment';
@Component({
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
  @Input()
  data: any;
  @Output()
  formData: EventEmitter<Object> = new EventEmitter<Object>();

  // @Output()
  onSubmit = new EventEmitter<IUser>();
  // @HostBinding('@routing')
  // routing;
  @HostBinding('style.display')
  display = 'block';
  emailChanges$: Observable<string>;

  email: FormControl;
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
  // EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  TEL_REGEX = /^[\d\s]+$/i;

  now: string;
  firstname: FormControl;
  lastname: FormControl;
  telephone: FormControl;
  sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _fb: FormBuilder,
    // private validationService: ValidationService
  ) {
     this.createForm();
  }
  // updateOn: 'blur' USE THIS TODO:

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('pattern') ? 'Not a valid email' :
            '';
  }

  createForm() {
    this.email = new FormControl('test@test.com', [Validators.required, Validators.email]);
    this.firstname = this._fb.control('', [
      Validators.required,
      Validators.minLength(2)
    ]);
    this.lastname = this._fb.control('lastName', [
      Validators.required,
      Validators.minLength(2)
    ]);
    this.telephone = this._fb.control('999-999-999', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.userForm = this._fb.group({
      // bloomenRef: this.now,
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        telephone: this.telephone,
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
    this.emailChanges$ = this.email.valueChanges;
    // this.currentUser$ = this.currentUser;
    this.subTitle = this.route.snapshot.data['subTitle'];
    this.crumb = this.route.snapshot.data['crumbs'];
    this.emailSub = this.emailChanges$
      .pipe(
        distinctUntilChanged(),
        debounceTime(400),
        tap(() => {
          this.isUnique = false;
          this.email.setValidators([
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(this.EMAIL_REGEXP)
          ]);
          this.email.updateValueAndValidity();
          this.isLoading = true;
          this.msg = null;
        })
      )
      .pipe(debounceTime(400))
      .subscribe(val => {
        // this.checkEmailName(this.email.value);
        this.isLoading = false;
      });


      this.sub = this.userForm.valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(600)
      )
      .subscribe(newValue => {

        this.formData.emit(this.userForm);

      });


  }

  ngOnChanges() {
console.log('ive changed')
  }

  // checkEmailName(val: string): void {
  //   if (this.email.valid && this.email.value !== this.originalEmail) {
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
    this.email.setValidators([
      Validators.required,
      Validators.minLength(8),
      // isValid(this.isUnique),
      Validators.pattern(this.EMAIL_REGEXP)
    ]);
    this.email.updateValueAndValidity();
    this.isLoading = false;
  }
  onEmailChange() {}

  submit() {
    if (this.userForm.valid) {
      this.onSubmit.emit(this.userForm.value);
      // this.originalEmail = this.userForm.value.contactDetails.email;
    }
  }

  prepareSaveUser(): IUser {
    const formModel = this.userForm.value;
    const saveUser: IUser = {
      id: '',
      fName: '',
      lName: ''
    };
    return saveUser;
  }

  ngOnDestroy() {
    // this.userFormChanges.unsubscribe() // TODO!!
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


