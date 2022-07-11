import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClintSayComponent } from './clint-say.component';

describe('ClintSayComponent', () => {
  let component: ClintSayComponent;
  let fixture: ComponentFixture<ClintSayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClintSayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClintSayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
