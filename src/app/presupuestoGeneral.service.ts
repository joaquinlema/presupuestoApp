import { PresupuestoIngreso } from './presupuestoIngreso.service';
import { PresupuestoEgreso } from './presupuestoEgreso.service';
import { Injectable } from '@angular/core';

@Injectable()
export class PresupuestoGeneral {

  constructor(private presupuestoIngresoService: PresupuestoIngreso,
              private presupuestoEgresoService: PresupuestoEgreso) {
  }

  onObtenerTotalDisponible(): number {
    return this.presupuestoIngresoService.onObtenerTotalIngreso() - this.presupuestoEgresoService.onObtenerTotalEgreso();
  }

  onObtenerIngresosTotal(): number {
    return this.presupuestoIngresoService.onObtenerTotalIngreso();
  }

  onObtenerEgresosTotal(): number {
    return this.presupuestoEgresoService.onObtenerTotalEgreso();
  }

  onObtenerPorcentajeEgreso(): number {
    return (this.presupuestoEgresoService.onObtenerTotalEgreso() / this.presupuestoIngresoService.onObtenerTotalIngreso());
  }

}
