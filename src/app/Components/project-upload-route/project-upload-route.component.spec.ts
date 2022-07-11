import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectUploadRouteComponent } from './project-upload-route.component';

describe('ProjectUploadRouteComponent', () => {
  let component: ProjectUploadRouteComponent;
  let fixture: ComponentFixture<ProjectUploadRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectUploadRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectUploadRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
