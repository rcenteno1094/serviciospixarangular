import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatePixarComponent } from './create-pixar-component';

describe('CreatePixarComponent', () => {
  let component: CreatePixarComponent;
  let fixture: ComponentFixture<CreatePixarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatePixarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreatePixarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
