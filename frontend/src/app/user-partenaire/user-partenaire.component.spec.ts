import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPartenaireComponent } from './user-partenaire.component';

describe('UserPartenaireComponent', () => {
  let component: UserPartenaireComponent;
  let fixture: ComponentFixture<UserPartenaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPartenaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPartenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
