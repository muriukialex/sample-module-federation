import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SilMenuComponent } from './sil-menu.component';

describe('SilMenuComponent', () => {
  let component: SilMenuComponent;
  let fixture: ComponentFixture<SilMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SilMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SilMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
