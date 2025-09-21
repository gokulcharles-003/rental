import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandlordLease } from './landlord-lease';

describe('LandlordLease', () => {
  let component: LandlordLease;
  let fixture: ComponentFixture<LandlordLease>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandlordLease]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandlordLease);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
