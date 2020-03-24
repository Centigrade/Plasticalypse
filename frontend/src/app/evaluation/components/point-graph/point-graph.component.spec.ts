/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PointGraphComponent } from './point-graph.component';

describe('PointGraphComponent', () => {
  let component: PointGraphComponent;
  let fixture: ComponentFixture<PointGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PointGraphComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
