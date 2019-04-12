import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Arrat51Component } from './arrat51.component';

describe('Arrat51Component', () => {
  let component: Arrat51Component;
  let fixture: ComponentFixture<Arrat51Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Arrat51Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Arrat51Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
