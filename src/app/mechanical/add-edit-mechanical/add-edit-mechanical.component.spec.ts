import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMechanicalComponent } from './add-edit-mechanical.component';

describe('AddEditMechanicalComponent', () => {
  let component: AddEditMechanicalComponent;
  let fixture: ComponentFixture<AddEditMechanicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditMechanicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditMechanicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
