import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddEditAppoinmentComponent } from './add-edit-appoinment.component';

describe('AddEditAppoinmentComponent', () => {
  let component: AddEditAppoinmentComponent;
  let fixture: ComponentFixture<AddEditAppoinmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [  AddEditAppoinmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditAppoinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});