import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PatientAccountStatementsComponent } from './patient-account-statements';

describe('PatientAccountStatementsComponent', () => {
  let component: PatientAccountStatementsComponent;
  let fixture: ComponentFixture<PatientAccountStatementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientAccountStatementsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PatientAccountStatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
