import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAppoinmentComponent } from './show-appoinment.component';

describe('ShowAppoinmentComponent', () => {
  let component: ShowAppoinmentComponent;
  let fixture: ComponentFixture<ShowAppoinmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAppoinmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAppoinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
