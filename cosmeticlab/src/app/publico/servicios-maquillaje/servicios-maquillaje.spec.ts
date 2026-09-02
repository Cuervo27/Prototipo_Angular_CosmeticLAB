import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosMaquillaje } from './servicios-maquillaje';

describe('ServiciosMaquillaje', () => {
  let component: ServiciosMaquillaje;
  let fixture: ComponentFixture<ServiciosMaquillaje>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosMaquillaje],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiciosMaquillaje);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
