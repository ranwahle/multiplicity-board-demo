import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplyCellComponent } from './multiply-cell.component';

describe('MultiplyCellComponent', () => {
  let component: MultiplyCellComponent;
  let fixture: ComponentFixture<MultiplyCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiplyCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplyCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
