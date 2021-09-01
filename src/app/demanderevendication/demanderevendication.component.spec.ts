import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemanderevendicationComponent } from './demanderevendication.component';

describe('DemanderevendicationComponent', () => {
  let component: DemanderevendicationComponent;
  let fixture: ComponentFixture<DemanderevendicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemanderevendicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemanderevendicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
