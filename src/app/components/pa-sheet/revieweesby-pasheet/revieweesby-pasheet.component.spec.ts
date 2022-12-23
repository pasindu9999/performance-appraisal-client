import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevieweesbyPasheetComponent } from './revieweesby-pasheet.component';

describe('RevieweesbyPasheetComponent', () => {
  let component: RevieweesbyPasheetComponent;
  let fixture: ComponentFixture<RevieweesbyPasheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevieweesbyPasheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevieweesbyPasheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
