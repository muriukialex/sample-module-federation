import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CashiersVisitsComponent } from './cashiers-visits.component';

describe('CashiersVisitsComponent', () => {
  let component: CashiersVisitsComponent;
  let fixture: ComponentFixture<CashiersVisitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashiersVisitsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CashiersVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
