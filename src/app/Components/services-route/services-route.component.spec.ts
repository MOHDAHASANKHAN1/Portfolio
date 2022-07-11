import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesRouteComponent } from './services-route.component';

describe('ServicesRouteComponent', () => {
  let component: ServicesRouteComponent;
  let fixture: ComponentFixture<ServicesRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
