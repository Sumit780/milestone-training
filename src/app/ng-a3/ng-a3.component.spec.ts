import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgA3Component } from './ng-a3.component';

describe('NgA3Component', () => {
  let component: NgA3Component;
  let fixture: ComponentFixture<NgA3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgA3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgA3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
