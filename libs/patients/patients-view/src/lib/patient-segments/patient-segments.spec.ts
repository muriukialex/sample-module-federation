import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PatientSegmentsComponent } from './patient-segments';

describe('PatientSegmentsComponent', () => {
  let component: PatientSegmentsComponent;
  let fixture: ComponentFixture<PatientSegmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientSegmentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PatientSegmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
