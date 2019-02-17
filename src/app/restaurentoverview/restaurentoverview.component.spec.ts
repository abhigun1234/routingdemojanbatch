import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurentoverviewComponent } from './restaurentoverview.component';

describe('RestaurentoverviewComponent', () => {
  let component: RestaurentoverviewComponent;
  let fixture: ComponentFixture<RestaurentoverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurentoverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurentoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
