import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicComponent } from './graphic.component';

describe('GraphicComponent', () => {
  let component: GraphicComponent;
  let fixture: ComponentFixture<GraphicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraphicComponent]
    });
    fixture = TestBed.createComponent(GraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
