import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CashiersMenuComponent } from './cashiers-menu.component';

describe('CashiersMenuComponent', () => {
  let component: CashiersMenuComponent;
  let fixture: ComponentFixture<CashiersMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashiersMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CashiersMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
