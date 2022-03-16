import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasHospitalComponent } from './areas-hospital.component';

describe('AreasHospitalComponent', () => {
  let component: AreasHospitalComponent;
  let fixture: ComponentFixture<AreasHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreasHospitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreasHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
