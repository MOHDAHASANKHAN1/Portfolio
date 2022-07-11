import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowContactrQueryComponent } from './show-contactr-query.component';

describe('ShowContactrQueryComponent', () => {
  let component: ShowContactrQueryComponent;
  let fixture: ComponentFixture<ShowContactrQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowContactrQueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowContactrQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
