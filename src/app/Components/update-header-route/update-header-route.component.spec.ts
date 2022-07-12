import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHeaderRouteComponent } from './update-header-route.component';

describe('UpdateHeaderRouteComponent', () => {
  let component: UpdateHeaderRouteComponent;
  let fixture: ComponentFixture<UpdateHeaderRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateHeaderRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHeaderRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
