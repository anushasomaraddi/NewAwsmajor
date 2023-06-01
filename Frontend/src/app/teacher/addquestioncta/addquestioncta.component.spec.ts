import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddquestionctaComponent } from './addquestioncta.component';

describe('AddquestionctaComponent', () => {
  let component: AddquestionctaComponent;
  let fixture: ComponentFixture<AddquestionctaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddquestionctaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddquestionctaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
