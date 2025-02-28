import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SilNavbarComponent } from './sil-navbar.component';

describe('SilNavbarComponent', () => {
  let component: SilNavbarComponent;
  let fixture: ComponentFixture<SilNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SilNavbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SilNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
