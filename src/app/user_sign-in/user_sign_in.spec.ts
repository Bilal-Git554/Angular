import { ComponentFixture, TestBed } from '@angular/core/testing';

import { User_Sig_In } from './user_sign_in';

describe('Home', () => {
  let component: User_Sig_In;
  let fixture: ComponentFixture<User_Sig_In>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [User_Sig_In],
    }).compileComponents();

    fixture = TestBed.createComponent(User_Sig_In);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
