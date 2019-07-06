import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonsEditComponent } from './dragons-edit.component';

describe('DragonsEditComponent', () => {
  let component: DragonsEditComponent;
  let fixture: ComponentFixture<DragonsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
