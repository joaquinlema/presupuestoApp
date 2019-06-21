import { Presupuesto } from './presupuesto.model';

export class PresupuestoIngreso {

  private _listadoIngreso: Presupuesto[] = [new Presupuesto('Salario', 2100.00),
                                            new Presupuesto('Cuota Alquiler', 1100.00)];

  public get listadoIngreso(): Presupuesto[] {
    return this._listadoIngreso;
  }

  public onAgregarPresupuestoIngreso(descripcion: string, valor: number) {
    this._listadoIngreso.push(new Presupuesto(descripcion, valor));
  }

  public onObtenerTotalIngreso(): number {
    let total = 0;
    this._listadoIngreso.forEach(element => {
      total += element.valor;
    });
    return total;
  }

  public onEliminarRegistro(indice: number) {
    this._listadoIngreso.splice(indice, 1);
  }
}
