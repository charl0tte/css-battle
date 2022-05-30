import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebMakerLogoComponent } from './web-maker-logo.component';

describe('WebMakerLogoComponent', () => {
  let component: WebMakerLogoComponent;
  let fixture: ComponentFixture<WebMakerLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebMakerLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebMakerLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
