import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultationVisitsComponent } from './consultation-visits.component';

describe('ConsultationVisitsComponent', () => {
  let component: ConsultationVisitsComponent;
  let fixture: ComponentFixture<ConsultationVisitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultationVisitsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultationVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
