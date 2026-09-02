import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionInstitucional } from './informacion-institucional';

describe('InformacionInstitucional', () => {
  let component: InformacionInstitucional;
  let fixture: ComponentFixture<InformacionInstitucional>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformacionInstitucional],
    }).compileComponents();

    fixture = TestBed.createComponent(InformacionInstitucional);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
