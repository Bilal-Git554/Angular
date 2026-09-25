import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogOut } from './log-out';

describe('LogOut', () => {
  let component: LogOut;
  let fixture: ComponentFixture<LogOut>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogOut],
    }).compileComponents();

    fixture = TestBed.createComponent(LogOut);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
