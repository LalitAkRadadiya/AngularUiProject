import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMechanicalComponent } from './show-mechanical.component';

describe('ShowMechanicalComponent', () => {
  let component: ShowMechanicalComponent;
  let fixture: ComponentFixture<ShowMechanicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMechanicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMechanicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
