import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockGosubBuilderBoxComponent } from './block-gosub-builder-box.component';

describe('BlockGosubBuilderBoxComponent', () => {
  let component: BlockGosubBuilderBoxComponent;
  let fixture: ComponentFixture<BlockGosubBuilderBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockGosubBuilderBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockGosubBuilderBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
