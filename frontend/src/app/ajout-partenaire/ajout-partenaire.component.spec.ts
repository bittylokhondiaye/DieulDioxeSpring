import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutPartenaireComponent } from './ajout-partenaire.component';

describe('AjoutPartenaireComponent', () => {
  let component: AjoutPartenaireComponent;
  let fixture: ComponentFixture<AjoutPartenaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutPartenaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutPartenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
