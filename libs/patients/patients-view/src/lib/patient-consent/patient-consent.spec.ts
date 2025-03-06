import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PatientConsentComponent } from './patient-consent';

describe('PatientConsentComponent', () => {
  let component: PatientConsentComponent;
  let fixture: ComponentFixture<PatientConsentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientConsentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PatientConsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
