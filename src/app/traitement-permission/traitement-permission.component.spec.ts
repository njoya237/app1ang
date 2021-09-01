import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitementPermissionComponent } from './traitement-permission.component';

describe('TraitementPermissionComponent', () => {
  let component: TraitementPermissionComponent;
  let fixture: ComponentFixture<TraitementPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraitementPermissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraitementPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
