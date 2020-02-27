import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-data-form',
  templateUrl: './profile-data-form.component.html',
  styleUrls: ['./profile-data-form.component.scss']
})
export class ProfileDataFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private readonly fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      ipi: [''],
      fullName: [''],
      bloomenAuth: ['']
    });
    const profile = JSON.parse(localStorage.getItem('kendraio-user-profile'));
    if (!!profile) {
      this.form.patchValue(profile);
    }
  }

  saveProfile() {
    localStorage.setItem('kendraio-user-profile', JSON.stringify(this.form.getRawValue()));
  }
}
