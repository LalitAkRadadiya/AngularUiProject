import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCustomervehicleComponent } from './show-customervehicle.component';

describe('ShowCustomervehicleComponent', () => {
  let component: ShowCustomervehicleComponent;
  let fixture: ComponentFixture<ShowCustomervehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCustomervehicleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCustomervehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
