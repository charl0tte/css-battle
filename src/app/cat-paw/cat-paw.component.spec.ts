import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatPawComponent } from './cat-paw.component';

describe('CatPawComponent', () => {
  let component: CatPawComponent;
  let fixture: ComponentFixture<CatPawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatPawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatPawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
