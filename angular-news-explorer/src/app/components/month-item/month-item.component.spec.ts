import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthItemComponent } from './month-item.component';

describe('MonthItemComponent', () => {
  let component: MonthItemComponent;
  let fixture: ComponentFixture<MonthItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthItemComponent]
    });
    fixture = TestBed.createComponent(MonthItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
