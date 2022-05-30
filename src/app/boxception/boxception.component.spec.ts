import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxceptionComponent } from './boxception.component';

describe('BoxceptionComponent', () => {
  let component: BoxceptionComponent;
  let fixture: ComponentFixture<BoxceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxceptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
