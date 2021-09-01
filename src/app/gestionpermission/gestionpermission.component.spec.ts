import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionpermissionComponent } from './gestionpermission.component';

describe('GestionpermissionComponent', () => {
  let component: GestionpermissionComponent;
  let fixture: ComponentFixture<GestionpermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionpermissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionpermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
