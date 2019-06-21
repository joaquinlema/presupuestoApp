import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgresoPresupuestoItemComponent } from './egreso-presupuesto-item.component';

describe('EgresoPresupuestoItemComponent', () => {
  let component: EgresoPresupuestoItemComponent;
  let fixture: ComponentFixture<EgresoPresupuestoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgresoPresupuestoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgresoPresupuestoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
