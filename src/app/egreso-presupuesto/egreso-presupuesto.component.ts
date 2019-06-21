import { Component, OnInit } from '@angular/core';
import { PresupuestoEgreso } from '../presupuestoEgreso.service';
import { Presupuesto } from '../presupuesto.model';

@Component({
  selector: 'app-egreso-presupuesto',
  templateUrl: './egreso-presupuesto.component.html',
  styleUrls: ['./egreso-presupuesto.component.css']
})
export class EgresoPresupuestoComponent {

  constructor(private presupuestoEgresoService: PresupuestoEgreso) { }

  onObtenerEgresos(): Presupuesto[] {
    return this.presupuestoEgresoService.listadoEgreso;
  }

  onObtenerPorcentajeItem(valor: number): number {
    return this.presupuestoEgresoService.onObtenerPorcentajeItem(valor, this.presupuestoEgresoService.onObtenerTotalEgreso());
  }
}
