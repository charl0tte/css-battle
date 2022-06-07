import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiamondCutComponent } from './diamond-cut.component';

describe('DiamondCutComponent', () => {
  let component: DiamondCutComponent;
  let fixture: ComponentFixture<DiamondCutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiamondCutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiamondCutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
