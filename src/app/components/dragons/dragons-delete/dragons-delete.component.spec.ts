import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonsDeleteComponent } from './dragons-delete.component';

describe('DragonsDeleteComponent', () => {
  let component: DragonsDeleteComponent;
  let fixture: ComponentFixture<DragonsDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonsDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
