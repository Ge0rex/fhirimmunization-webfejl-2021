import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactionUpdateComponent } from './reaction-update.component';

describe('ReactionUpdateComponent', () => {
  let component: ReactionUpdateComponent;
  let fixture: ComponentFixture<ReactionUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactionUpdateComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
