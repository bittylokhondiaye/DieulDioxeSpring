import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotCompteComponent } from './depot-compte.component';

describe('DepotCompteComponent', () => {
  let component: DepotCompteComponent;
  let fixture: ComponentFixture<DepotCompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepotCompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepotCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
