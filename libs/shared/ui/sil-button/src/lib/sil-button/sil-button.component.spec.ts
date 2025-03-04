import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SilButtonComponent } from './sil-button.component';

describe('SilButtonComponent', () => {
  let component: SilButtonComponent;
  let fixture: ComponentFixture<SilButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SilButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SilButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
