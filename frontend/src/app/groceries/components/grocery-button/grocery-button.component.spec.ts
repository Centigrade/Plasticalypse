/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IconPipe } from '../../../shared/pipes/icon.pipe';
import { GroceryButtonComponent } from './grocery-button.component';

describe('GroceryButtonComponent', () => {
  let component: GroceryButtonComponent;
  let fixture: ComponentFixture<GroceryButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GroceryButtonComponent, IconPipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
