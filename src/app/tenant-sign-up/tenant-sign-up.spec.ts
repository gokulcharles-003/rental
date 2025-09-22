import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantSignUp } from './tenant-sign-up';

describe('TenantSignUp', () => {
  let component: TenantSignUp;
  let fixture: ComponentFixture<TenantSignUp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenantSignUp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenantSignUp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
