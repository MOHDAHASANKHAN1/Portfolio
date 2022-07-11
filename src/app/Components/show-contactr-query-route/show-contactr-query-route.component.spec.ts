import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowContactrQueryRouteComponent } from './show-contactr-query-route.component';

describe('ShowContactrQueryRouteComponent', () => {
  let component: ShowContactrQueryRouteComponent;
  let fixture: ComponentFixture<ShowContactrQueryRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowContactrQueryRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowContactrQueryRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
