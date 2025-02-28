import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SilDatatableComponent } from './sil-datatable.component';

describe('SilDatatableComponent', () => {
  let component: SilDatatableComponent;
  let fixture: ComponentFixture<SilDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SilDatatableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SilDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
