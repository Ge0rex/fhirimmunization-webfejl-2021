import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactionAddComponent } from './reaction-add.component';

describe('ReactionAddComponent', () => {
  let component: ReactionAddComponent;
  let fixture: ComponentFixture<ReactionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactionAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
