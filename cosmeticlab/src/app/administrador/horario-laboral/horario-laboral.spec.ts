import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioLaboral } from './horario-laboral';

describe('HorarioLaboral', () => {
  let component: HorarioLaboral;
  let fixture: ComponentFixture<HorarioLaboral>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorarioLaboral],
    }).compileComponents();

    fixture = TestBed.createComponent(HorarioLaboral);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
