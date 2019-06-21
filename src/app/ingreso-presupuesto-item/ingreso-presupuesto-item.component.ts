import { Component, OnInit, Input } from '@angular/core';
import { PresupuestoIngreso } from '../presupuestoIngreso.service';
import { Presupuesto } from '../presupuesto.model';

@Component({
  selector: 'app-ingreso-presupuesto-item',
  templateUrl: './ingreso-presupuesto-item.component.html',
  styleUrls: ['./ingreso-presupuesto-item.component.css']
})
export class IngresoPresupuestoItemComponent {

  @Input() itemPresupuesto: Presupuesto;
  @Input() indice: number;

  constructor(private ingresoService: PresupuestoIngreso) { }

  onEliminarRegistro() {
    this.ingresoService.onEliminarRegistro(this.indice);
  }
}
