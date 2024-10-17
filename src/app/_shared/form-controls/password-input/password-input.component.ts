import { Component, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: PasswordInputComponent,
      multi: true,
    },
  ],
})
export class PasswordInputComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
