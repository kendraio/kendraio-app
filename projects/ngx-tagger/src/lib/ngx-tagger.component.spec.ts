import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTaggerComponent } from './ngx-tagger.component';

describe('NgxTaggerComponent', () => {
  let component: NgxTaggerComponent;
  let fixture: ComponentFixture<NgxTaggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTaggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTaggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
