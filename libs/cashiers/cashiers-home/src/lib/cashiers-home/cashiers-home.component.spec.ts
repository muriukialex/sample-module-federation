import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CashiersHomeComponent } from './cashiers-home.component';

describe('CashiersHomeComponent', () => {
  let component: CashiersHomeComponent;
  let fixture: ComponentFixture<CashiersHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashiersHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CashiersHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
