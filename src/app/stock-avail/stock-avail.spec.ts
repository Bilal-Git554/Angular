import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockAvail } from './stock-avail';

describe('StockAvail', () => {
  let component: StockAvail;
  let fixture: ComponentFixture<StockAvail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockAvail],
    }).compileComponents();

    fixture = TestBed.createComponent(StockAvail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
