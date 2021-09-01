import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresadminComponent } from './presadmin.component';

describe('PresadminComponent', () => {
  let component: PresadminComponent;
  let fixture: ComponentFixture<PresadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
