import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultationQueuesComponent } from './consultation-queues.component';

describe('ConsultationQueuesComponent', () => {
  let component: ConsultationQueuesComponent;
  let fixture: ComponentFixture<ConsultationQueuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultationQueuesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultationQueuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
