import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtauploadComponent } from './ctaupload.component';

describe('CtauploadComponent', () => {
  let component: CtauploadComponent;
  let fixture: ComponentFixture<CtauploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtauploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtauploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
