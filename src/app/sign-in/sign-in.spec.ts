import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigIn } from './sign-in';

describe('Home', () => {
  let component: SigIn;
  let fixture: ComponentFixture<SigIn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigIn],
    }).compileComponents();

    fixture = TestBed.createComponent(SigIn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
