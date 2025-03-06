import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommunicationsHomeComponent } from './communications-home.component';

describe('CommunicationsHomeComponent', () => {
  let component: CommunicationsHomeComponent;
  let fixture: ComponentFixture<CommunicationsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunicationsHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CommunicationsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
