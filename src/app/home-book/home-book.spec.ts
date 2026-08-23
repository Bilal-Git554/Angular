import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBook } from './home-book';

describe('Home', () => {
  let component: HomeBook;
  let fixture: ComponentFixture<HomeBook>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBook],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeBook);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
