import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownwithobjectsComponent } from './dropdownwithobjects.component';

describe('DropdownwithobjectsComponent', () => {
  let component: DropdownwithobjectsComponent;
  let fixture: ComponentFixture<DropdownwithobjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownwithobjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownwithobjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
