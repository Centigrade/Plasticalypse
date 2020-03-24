/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CleanessImageComponent } from './cleaness-image.component';

describe('CleanessImageComponent', () => {
  let component: CleanessImageComponent;
  let fixture: ComponentFixture<CleanessImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CleanessImageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanessImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
