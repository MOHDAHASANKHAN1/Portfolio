import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupRouteComponent } from './signup-route.component';

describe('SignupRouteComponent', () => {
  let component: SignupRouteComponent;
  let fixture: ComponentFixture<SignupRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
