import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthsListComponent } from './months-list.component';

describe('MonthsListComponent', () => {
  let component: MonthsListComponent;
  let fixture: ComponentFixture<MonthsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthsListComponent]
    });
    fixture = TestBed.createComponent(MonthsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
