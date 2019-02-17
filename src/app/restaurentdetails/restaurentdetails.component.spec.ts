import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurentdetailsComponent } from './restaurentdetails.component';

describe('RestaurentdetailsComponent', () => {
  let component: RestaurentdetailsComponent;
  let fixture: ComponentFixture<RestaurentdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurentdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
