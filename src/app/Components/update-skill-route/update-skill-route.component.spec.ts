import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSkillRouteComponent } from './update-skill-route.component';

describe('UpdateSkillRouteComponent', () => {
  let component: UpdateSkillRouteComponent;
  let fixture: ComponentFixture<UpdateSkillRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSkillRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSkillRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
