import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PariteComponent } from './parite.component';

describe('PariteComponent', () => {
  let component: PariteComponent;
  let fixture: ComponentFixture<PariteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PariteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PariteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
