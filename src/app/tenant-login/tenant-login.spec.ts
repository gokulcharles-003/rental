import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantLogin } from './tenant-login';

describe('TenantLogin', () => {
  let component: TenantLogin;
  let fixture: ComponentFixture<TenantLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenantLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenantLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
