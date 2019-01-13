import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpanderComponent } from './expander.component';

describe('ExpanderComponent', () => {
  let component: ExpanderComponent;
  let fixture: ComponentFixture<ExpanderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpanderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
