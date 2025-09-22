import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerSignUp } from './owner-sign-up';

describe('OwnerSignUp', () => {
  let component: OwnerSignUp;
  let fixture: ComponentFixture<OwnerSignUp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OwnerSignUp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerSignUp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
