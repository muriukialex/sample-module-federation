import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectAppComponent } from './select-app.component';

describe('SelectAppComponent', () => {
  let component: SelectAppComponent;
  let fixture: ComponentFixture<SelectAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectAppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
