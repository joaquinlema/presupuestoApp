import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoPresupuestoComponent } from './ingreso-presupuesto.component';

describe('IngresoPresupuestoComponent', () => {
  let component: IngresoPresupuestoComponent;
  let fixture: ComponentFixture<IngresoPresupuestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoPresupuestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoPresupuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
