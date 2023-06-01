import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeequestionctaComponent } from './seequestioncta.component';

describe('SeequestionctaComponent', () => {
  let component: SeequestionctaComponent;
  let fixture: ComponentFixture<SeequestionctaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeequestionctaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeequestionctaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
