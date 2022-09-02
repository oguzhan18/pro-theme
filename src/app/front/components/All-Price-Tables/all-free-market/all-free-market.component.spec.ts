import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFreeMarketComponent } from './all-free-market.component';

describe('AllFreeMarketComponent', () => {
  let component: AllFreeMarketComponent;
  let fixture: ComponentFixture<AllFreeMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllFreeMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFreeMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
