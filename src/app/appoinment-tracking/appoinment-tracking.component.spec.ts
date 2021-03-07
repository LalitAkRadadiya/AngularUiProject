import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmentTrackingComponent } from './appoinment-tracking.component';

describe('AppoinmentTrackingComponent', () => {
  let component: AppoinmentTrackingComponent;
  let fixture: ComponentFixture<AppoinmentTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppoinmentTrackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppoinmentTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
