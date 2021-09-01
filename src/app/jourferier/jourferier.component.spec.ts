import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourferierComponent } from './jourferier.component';

describe('JourferierComponent', () => {
  let component: JourferierComponent;
  let fixture: ComponentFixture<JourferierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JourferierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JourferierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
