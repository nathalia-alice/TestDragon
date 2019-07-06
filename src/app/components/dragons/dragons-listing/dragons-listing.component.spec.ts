import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonsListingComponent } from './dragons-listing.component';

describe('DragonsListingComponent', () => {
  let component: DragonsListingComponent;
  let fixture: ComponentFixture<DragonsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
