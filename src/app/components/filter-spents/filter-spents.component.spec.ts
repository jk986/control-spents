import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSpentsComponent } from './filter-spents.component';

describe('FilterSpentsComponent', () => {
  let component: FilterSpentsComponent;
  let fixture: ComponentFixture<FilterSpentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterSpentsComponent]
    });
    fixture = TestBed.createComponent(FilterSpentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
