import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpentComponent } from './spent.component';

describe('SpentComponent', () => {
  let component: SpentComponent;
  let fixture: ComponentFixture<SpentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpentComponent]
    });
    fixture = TestBed.createComponent(SpentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
