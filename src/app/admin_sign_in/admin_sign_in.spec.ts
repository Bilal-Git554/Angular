import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Admin_Sign_In } from './admin_sign_in';

describe('Admin_Sign_In', () => {
  let component: Admin_Sign_In;
  let fixture: ComponentFixture<Admin_Sign_In>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Admin_Sign_In],
    }).compileComponents();

    fixture = TestBed.createComponent(Admin_Sign_In);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
