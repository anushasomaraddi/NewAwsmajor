import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherctahomeComponent } from './teacherctahome.component';

describe('TeacherctahomeComponent', () => {
  let component: TeacherctahomeComponent;
  let fixture: ComponentFixture<TeacherctahomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherctahomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherctahomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
