import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MermaidBlockComponent } from './mermaid-block.component';

describe('MermaidBlockComponent', () => {
  let component: MermaidBlockComponent;
  let fixture: ComponentFixture<MermaidBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MermaidBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MermaidBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
