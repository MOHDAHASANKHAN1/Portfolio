import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAboutRouteComponent } from './update-about-route.component';

describe('UpdateAboutRouteComponent', () => {
  let component: UpdateAboutRouteComponent;
  let fixture: ComponentFixture<UpdateAboutRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAboutRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAboutRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
