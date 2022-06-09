import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprovmxComponent } from './improvmx.component';

describe('ImprovmxComponent', () => {
  let component: ImprovmxComponent;
  let fixture: ComponentFixture<ImprovmxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImprovmxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprovmxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
