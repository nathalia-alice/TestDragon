import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonsCreateComponent } from './dragons-create.component';

describe('DragonsCreateComponent', () => {
  let component: DragonsCreateComponent;
  let fixture: ComponentFixture<DragonsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
