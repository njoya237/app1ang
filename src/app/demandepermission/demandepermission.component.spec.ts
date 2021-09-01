import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandepermissionComponent } from './demandepermission.component';

describe('DemandepermissionComponent', () => {
  let component: DemandepermissionComponent;
  let fixture: ComponentFixture<DemandepermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandepermissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandepermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
