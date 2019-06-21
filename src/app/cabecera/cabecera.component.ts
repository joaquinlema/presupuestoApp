import { Component, OnInit, Input } from '@angular/core';
import { PresupuestoGeneral } from '../presupuestoGeneral.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  @Input()  _totalDisponible: number;
  @Input() _totalIngresos: number;
  @Input() _totalEgresos: number;
  @Input() _porcentajeEgresos: number;

  constructor(private presupuestoGeneralService: PresupuestoGeneral) { }

}
