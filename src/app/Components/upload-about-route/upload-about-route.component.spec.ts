import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadAboutRouteComponent } from './upload-about-route.component';

describe('UploadAboutRouteComponent', () => {
  let component: UploadAboutRouteComponent;
  let fixture: ComponentFixture<UploadAboutRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadAboutRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadAboutRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
