import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreehandPiercingComponent } from './freehand-piercing.component';

describe('FreehandPiercingComponent', () => {
  let component: FreehandPiercingComponent;
  let fixture: ComponentFixture<FreehandPiercingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreehandPiercingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreehandPiercingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
