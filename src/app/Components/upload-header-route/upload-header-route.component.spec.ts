import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadHeaderRouteComponent } from './upload-header-route.component';

describe('UploadHeaderRouteComponent', () => {
  let component: UploadHeaderRouteComponent;
  let fixture: ComponentFixture<UploadHeaderRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadHeaderRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadHeaderRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
