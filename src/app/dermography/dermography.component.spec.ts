import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DermographyComponent } from './dermography.component';

describe('DermographyComponent', () => {
  let component: DermographyComponent;
  let fixture: ComponentFixture<DermographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DermographyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DermographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
