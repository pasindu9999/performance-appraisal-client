import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDepcriteriaComponent } from './edit-depcriteria.component';

describe('EditDepcriteriaComponent', () => {
  let component: EditDepcriteriaComponent;
  let fixture: ComponentFixture<EditDepcriteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDepcriteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDepcriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
