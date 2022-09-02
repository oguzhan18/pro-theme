import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldsVarietiesComponent } from './golds-varieties.component';

describe('GoldsVarietiesComponent', () => {
  let component: GoldsVarietiesComponent;
  let fixture: ComponentFixture<GoldsVarietiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldsVarietiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldsVarietiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
