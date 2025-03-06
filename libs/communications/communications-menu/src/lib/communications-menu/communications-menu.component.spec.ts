import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommunicationsMenuComponent } from './communications-menu.component';

describe('CommunicationsMenuComponent', () => {
  let component: CommunicationsMenuComponent;
  let fixture: ComponentFixture<CommunicationsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunicationsMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CommunicationsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
