import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultationMenuComponent } from './consultation-menu.component';

describe('ConsultationMenuComponent', () => {
  let component: ConsultationMenuComponent;
  let fixture: ComponentFixture<ConsultationMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultationMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultationMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
