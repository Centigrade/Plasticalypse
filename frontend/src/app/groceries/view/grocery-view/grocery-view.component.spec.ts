/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IconPipe } from '../../../shared/pipes/icon.pipe';
import { GroceryButtonComponent } from '../../components/grocery-button/grocery-button.component';
import { GroceryViewComponent } from './grocery-view.component';

describe('GroceryViewComponent', () => {
  let component: GroceryViewComponent;
  let fixture: ComponentFixture<GroceryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GroceryViewComponent, GroceryButtonComponent, IconPipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
