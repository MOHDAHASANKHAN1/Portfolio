import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadSkillComponent } from './upload-skill.component';

describe('UploadSkillComponent', () => {
  let component: UploadSkillComponent;
  let fixture: ComponentFixture<UploadSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
