import { Component, OnInit } from '@angular/core';
import { PresupuestoGeneral } from './presupuestoGeneral.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'presupuesto-app';

  constructor(private presupuestoGeneralService: PresupuestoGeneral) { }

  onObtenerTotal() {
    return this.presupuestoGeneralService.onObtenerTotalDisponible();
  }

  onObtenerIngresoTotal() {
    return  this.presupuestoGeneralService.onObtenerIngresosTotal();
  }

  onObtenerEgresosTotal() {
    return  this.presupuestoGeneralService.onObtenerEgresosTotal();
  }

  onObtenerPorcentajeEgreso() {
    return  this.presupuestoGeneralService.onObtenerPorcentajeEgreso();
  }


}
