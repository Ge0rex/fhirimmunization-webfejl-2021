import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmunizationCardComponent } from './immunization-card.component';

describe('ImmunizationCardComponent', () => {
  let component: ImmunizationCardComponent;
  let fixture: ComponentFixture<ImmunizationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImmunizationCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmunizationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
