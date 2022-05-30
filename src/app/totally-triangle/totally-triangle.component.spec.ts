import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotallyTriangleComponent } from './totally-triangle.component';

describe('TotallyTriangleComponent', () => {
  let component: TotallyTriangleComponent;
  let fixture: ComponentFixture<TotallyTriangleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotallyTriangleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotallyTriangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
