import {Component, Input, OnInit} from '@angular/core';
import {FormRepositoryService} from '../../services/form-repository.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-repo',
  templateUrl: './dynamic-form-repo.component.html',
  styleUrls: ['./dynamic-form-repo.component.scss']
})
export class DynamicFormRepoComponent implements OnInit {

  @Input() formName: string;
  @Input() formGroup: FormGroup;

  formModel$;
  formLayout = {};

  constructor(
    private readonly formRepo: FormRepositoryService
  ) { }

  ngOnInit() {
    this.formModel$ = this.formRepo.getForm(this.formName);
  }

}
