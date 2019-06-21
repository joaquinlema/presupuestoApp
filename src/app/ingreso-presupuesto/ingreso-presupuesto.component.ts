import { Component, OnInit } from '@angular/core';
import { PresupuestoIngreso } from '../presupuestoIngreso.service';
import { Presupuesto } from '../presupuesto.model';

@Component({
  selector: 'app-ingreso-presupuesto',
  templateUrl: './ingreso-presupuesto.component.html',
  styleUrls: ['./ingreso-presupuesto.component.css']
})
export class IngresoPresupuestoComponent {

  constructor(private _presupuestoIngresoService: PresupuestoIngreso) { }

  onObtenerIngresos(): Presupuesto[] {
    return this._presupuestoIngresoService.listadoIngreso;
  }

}
