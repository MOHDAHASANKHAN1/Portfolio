import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadAboutComponent } from './upload-about.component';

describe('UploadAboutComponent', () => {
  let component: UploadAboutComponent;
  let fixture: ComponentFixture<UploadAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
