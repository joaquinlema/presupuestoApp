import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoPresupuestoItemComponent } from './ingreso-presupuesto-item.component';

describe('IngresoPresupuestoItemComponent', () => {
  let component: IngresoPresupuestoItemComponent;
  let fixture: ComponentFixture<IngresoPresupuestoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoPresupuestoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoPresupuestoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
