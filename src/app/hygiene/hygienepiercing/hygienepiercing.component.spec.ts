import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HygienepiercingComponent } from './hygienepiercing.component';

describe('HygienepiercingComponent', () => {
  let component: HygienepiercingComponent;
  let fixture: ComponentFixture<HygienepiercingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HygienepiercingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HygienepiercingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
