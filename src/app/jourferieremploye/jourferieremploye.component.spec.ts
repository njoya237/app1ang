import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourferieremployeComponent } from './jourferieremploye.component';

describe('JourferieremployeComponent', () => {
  let component: JourferieremployeComponent;
  let fixture: ComponentFixture<JourferieremployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JourferieremployeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JourferieremployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
