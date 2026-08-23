import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidComponent } from './invalid-component';

describe('InvalidComponent', () => {
  let component: InvalidComponent;
  let fixture: ComponentFixture<InvalidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvalidComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InvalidComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
