import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgresoPresupuestoComponent } from './egreso-presupuesto.component';

describe('EgresoPresupuestoComponent', () => {
  let component: EgresoPresupuestoComponent;
  let fixture: ComponentFixture<EgresoPresupuestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgresoPresupuestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgresoPresupuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
