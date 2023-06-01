import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentctahomeComponent } from './studentctahome.component';

describe('StudentctahomeComponent', () => {
  let component: StudentctahomeComponent;
  let fixture: ComponentFixture<StudentctahomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentctahomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentctahomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
