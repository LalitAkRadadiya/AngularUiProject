import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAppoinmentComponent } from './edit-appoinment.component';

describe('EditAppoinmentComponent', () => {
  let component: EditAppoinmentComponent;
  let fixture: ComponentFixture<EditAppoinmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAppoinmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAppoinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
