import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantApplications } from './tenant-applications';

describe('TenantApplications', () => {
  let component: TenantApplications;
  let fixture: ComponentFixture<TenantApplications>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenantApplications]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenantApplications);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
