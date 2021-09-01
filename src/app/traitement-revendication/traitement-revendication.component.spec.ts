import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitementRevendicationComponent } from './traitement-revendication.component';

describe('TraitementRevendicationComponent', () => {
  let component: TraitementRevendicationComponent;
  let fixture: ComponentFixture<TraitementRevendicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraitementRevendicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraitementRevendicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
