import { Component, OnInit, Input } from '@angular/core';
import { Presupuesto } from '../presupuesto.model';
import { PresupuestoEgreso } from '../presupuestoEgreso.service';

@Component({
  selector: 'app-egreso-presupuesto-item',
  templateUrl: './egreso-presupuesto-item.component.html',
  styleUrls: ['./egreso-presupuesto-item.component.css']
})
export class EgresoPresupuestoItemComponent {

  @Input() egresoItem: Presupuesto;
  @Input() indice: number;
  @Input() porcentaje: number;


  constructor(private egresoService: PresupuestoEgreso) { }

  onEliminarRegistro() {
    this.egresoService.onEliminarRegistro(this.indice);
  }

}
