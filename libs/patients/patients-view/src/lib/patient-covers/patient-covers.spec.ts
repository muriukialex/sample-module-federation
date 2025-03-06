import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PatientCoversComponent } from './patient-covers';

describe('PatientCoversComponent', () => {
  let component: PatientCoversComponent;
  let fixture: ComponentFixture<PatientCoversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientCoversComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PatientCoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
