import { Presupuesto } from './presupuesto.model';

export class PresupuestoEgreso {

  private _listadoEgreso: Presupuesto[] = [new Presupuesto('Renta departamento', 1900.00),
                                           new Presupuesto('Patente', 900.00)];

  public get listadoEgreso(): Presupuesto[] {
    return this._listadoEgreso;
  }

  public onAgregarPresupuestoEgreso(desc: string, valor: number) {
    this._listadoEgreso.push(new Presupuesto(desc, valor));
  }

  public onObtenerTotalEgreso(): number {
    let total = 0;
    this._listadoEgreso.forEach(element => {
      total += element.valor;
    });
    return total;
  }

  public onEliminarRegistro(indice: number) {
    this._listadoEgreso.splice(indice, 1);
  }

  public onObtenerPorcentajeItem(valor: number, total: number) {
      return valor / total;
  }


}
