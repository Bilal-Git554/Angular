import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBook } from './delete-book';

describe('DeleteBook', () => {
  let component: DeleteBook;
  let fixture: ComponentFixture<DeleteBook>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteBook],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteBook);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
