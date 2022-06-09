import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundedBorderComponent } from './rounded-border.component';

describe('RoundedBorderComponent', () => {
  let component: RoundedBorderComponent;
  let fixture: ComponentFixture<RoundedBorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoundedBorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundedBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
