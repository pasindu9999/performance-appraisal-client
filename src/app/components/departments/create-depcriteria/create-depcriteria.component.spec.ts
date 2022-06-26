import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDepcriteriaComponent } from './create-depcriteria.component';

describe('CreateDepcriteriaComponent', () => {
  let component: CreateDepcriteriaComponent;
  let fixture: ComponentFixture<CreateDepcriteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDepcriteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDepcriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
