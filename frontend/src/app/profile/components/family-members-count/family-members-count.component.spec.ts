import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyMembersCountComponent } from './family-members-count.component';

describe('FamilyMembersCountComponent', () => {
  let component: FamilyMembersCountComponent;
  let fixture: ComponentFixture<FamilyMembersCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyMembersCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyMembersCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
