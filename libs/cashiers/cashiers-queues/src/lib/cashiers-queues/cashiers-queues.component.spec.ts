import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CashiersQueuesComponent } from './cashiers-queues.component';

describe('CashiersQueuesComponent', () => {
  let component: CashiersQueuesComponent;
  let fixture: ComponentFixture<CashiersQueuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashiersQueuesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CashiersQueuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
