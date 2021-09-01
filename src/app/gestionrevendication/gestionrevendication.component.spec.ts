import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionrevendicationComponent } from './gestionrevendication.component';

describe('GestionrevendicationComponent', () => {
  let component: GestionrevendicationComponent;
  let fixture: ComponentFixture<GestionrevendicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionrevendicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionrevendicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
