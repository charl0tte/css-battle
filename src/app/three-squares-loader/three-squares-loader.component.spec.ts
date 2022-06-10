import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeSquaresLoaderComponent } from './three-squares-loader.component';

describe('ThreeSquaresLoaderComponent', () => {
  let component: ThreeSquaresLoaderComponent;
  let fixture: ComponentFixture<ThreeSquaresLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeSquaresLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeSquaresLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
