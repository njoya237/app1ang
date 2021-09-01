import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouslesemployesComponent } from './touslesemployes.component';

describe('TouslesemployesComponent', () => {
  let component: TouslesemployesComponent;
  let fixture: ComponentFixture<TouslesemployesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TouslesemployesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TouslesemployesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
