import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BlockComparisonBuilderBoxComponent } from "./block-comparison-builder-box.component";

describe("BlockComparisonBuilderBoxComponent", () => {
  let component: BlockComparisonBuilderBoxComponent;
  let fixture: ComponentFixture<BlockComparisonBuilderBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlockComparisonBuilderBoxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlockComparisonBuilderBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
