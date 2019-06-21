export class Presupuesto {
  private _descripcion: string;
  private _valor: number;

  constructor(desc: string, val: number) {
    this._descripcion = desc;
    this._valor = val;
  }
  public get descripcion(): string {
    return this._descripcion;
  }

  public set descripcion(value: string) {
    this._descripcion = value;
  }

  public get valor(): number {
    return this._valor;
  }

  public set valor(value: number) {
    this._valor = value;
  }

}
