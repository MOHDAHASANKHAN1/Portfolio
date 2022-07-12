import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadSkillRouteComponent } from './upload-skill-route.component';

describe('UploadSkillRouteComponent', () => {
  let component: UploadSkillRouteComponent;
  let fixture: ComponentFixture<UploadSkillRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadSkillRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadSkillRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
