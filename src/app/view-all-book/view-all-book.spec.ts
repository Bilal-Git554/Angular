import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllBook } from './view-all-book';

describe('ViewAllBook', () => {
  let component: ViewAllBook;
  let fixture: ComponentFixture<ViewAllBook>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAllBook],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewAllBook);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
