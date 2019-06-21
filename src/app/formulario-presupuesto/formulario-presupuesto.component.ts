import { Component, OnInit } from '@angular/core';
import { PresupuestoIngreso } from '../presupuestoIngreso.service';
import { PresupuestoEgreso } from '../presupuestoEgreso.service';

@Component({
  selector: 'app-formulario-presupuesto',
  templateUrl: './formulario-presupuesto.component.html',
  styleUrls: ['./formulario-presupuesto.component.css']
})
export class FormularioPresupuestoComponent {

  _presupuestoSelec: string;

  constructor(private ingresoService: PresupuestoIngreso,
              private egresoService: PresupuestoEgreso) { }

  private onAgregarIngreso(desc: string, valor: number) {
    this.ingresoService.onAgregarPresupuestoIngreso(desc, valor);
  }

  private onAgregarEgreso(desc: string, valor: number) {
    this.egresoService.onAgregarPresupuestoEgreso(desc, valor);
  }

  onAgregarPresupuesto(descripcion: HTMLInputElement, valor: HTMLInputElement) {
    console.log(this._presupuestoSelec);
    if (this._presupuestoSelec === '0') {
      this.onAgregarIngreso(descripcion.value, Number(valor.value));
    } else {
      this.onAgregarEgreso(descripcion.value, Number(valor.value));
    }
  }


}
