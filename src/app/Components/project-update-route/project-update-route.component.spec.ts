import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectUpdateRouteComponent } from './project-update-route.component';

describe('ProjectUpdateRouteComponent', () => {
  let component: ProjectUpdateRouteComponent;
  let fixture: ComponentFixture<ProjectUpdateRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectUpdateRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectUpdateRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
