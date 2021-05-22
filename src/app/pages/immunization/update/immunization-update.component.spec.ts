import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmunizationUpdateComponent } from './immunization-update.component';

describe('ImmunizationUpdateComponent', () => {
  let component: ImmunizationUpdateComponent;
  let fixture: ComponentFixture<ImmunizationUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImmunizationUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmunizationUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
