import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxradioComponent } from './checkboxradio.component';

describe('CheckboxradioComponent', () => {
  let component: CheckboxradioComponent;
  let fixture: ComponentFixture<CheckboxradioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxradioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxradioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
