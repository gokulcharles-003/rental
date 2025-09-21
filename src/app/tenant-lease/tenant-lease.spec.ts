import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantLease } from './tenant-lease';

describe('TenantLease', () => {
  let component: TenantLease;
  let fixture: ComponentFixture<TenantLease>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenantLease]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenantLease);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
