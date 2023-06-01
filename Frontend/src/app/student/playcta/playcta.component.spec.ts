import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayctaComponent } from './playcta.component';

describe('PlayctaComponent', () => {
  let component: PlayctaComponent;
  let fixture: ComponentFixture<PlayctaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayctaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayctaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
