import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonsDetailsComponent } from './dragons-details.component';

describe('DragonsDetailsComponent', () => {
  let component: DragonsDetailsComponent;
  let fixture: ComponentFixture<DragonsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
