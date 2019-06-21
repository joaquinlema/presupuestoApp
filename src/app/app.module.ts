import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FormularioPresupuestoComponent } from './formulario-presupuesto/formulario-presupuesto.component';
import { IngresoPresupuestoComponent } from './ingreso-presupuesto/ingreso-presupuesto.component';
import { EgresoPresupuestoComponent } from './egreso-presupuesto/egreso-presupuesto.component';
import { EgresoPresupuestoItemComponent } from './egreso-presupuesto-item/egreso-presupuesto-item.component';
import { IngresoPresupuestoItemComponent } from './ingreso-presupuesto-item/ingreso-presupuesto-item.component';
import { PresupuestoEgreso } from './presupuestoEgreso.service';
import { PresupuestoIngreso } from './presupuestoIngreso.service';
import { PresupuestoGeneral } from './presupuestoGeneral.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule,
  MatButtonModule, MatSidenavModule,
  MatIconModule, MatListModule,
  MatFormFieldModule, MatInputModule,
  MatSelectModule, MatOptionModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FormularioPresupuestoComponent,
    IngresoPresupuestoComponent,
    EgresoPresupuestoComponent,
    EgresoPresupuestoItemComponent,
    IngresoPresupuestoItemComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule

  ],
  providers: [PresupuestoEgreso, PresupuestoIngreso, PresupuestoGeneral],
  bootstrap: [AppComponent]
})
export class AppModule { }
