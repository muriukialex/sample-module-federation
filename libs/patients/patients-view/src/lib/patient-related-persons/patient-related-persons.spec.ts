import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PatientRelatedPersonsComponent } from './patient-related-persons';

describe('PatientRelatedPersonsComponent', () => {
  let component: PatientRelatedPersonsComponent;
  let fixture: ComponentFixture<PatientRelatedPersonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientRelatedPersonsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PatientRelatedPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
