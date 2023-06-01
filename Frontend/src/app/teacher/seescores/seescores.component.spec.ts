import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeescoresComponent } from './seescores.component';

describe('SeescoresComponent', () => {
  let component: SeescoresComponent;
  let fixture: ComponentFixture<SeescoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeescoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeescoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
