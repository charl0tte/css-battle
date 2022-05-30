import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplySquareComponent } from './simply-square.component';

describe('SimplySquareComponent', () => {
  let component: SimplySquareComponent;
  let fixture: ComponentFixture<SimplySquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplySquareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplySquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
