import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDealerComponent } from './show-dealer.component';

describe('ShowDealerComponent', () => {
  let component: ShowDealerComponent;
  let fixture: ComponentFixture<ShowDealerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDealerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
