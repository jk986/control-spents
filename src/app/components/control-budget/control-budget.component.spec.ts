import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlBudgetComponent } from './control-budget.component';

describe('ControlBudgetComponent', () => {
  let component: ControlBudgetComponent;
  let fixture: ComponentFixture<ControlBudgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlBudgetComponent]
    });
    fixture = TestBed.createComponent(ControlBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
