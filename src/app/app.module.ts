import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OperacionesComponent } from './componentes/operaciones/operaciones.component';
import { AreaComponent } from './componentes/area/area.component';
import { EmpleadosComponent } from './componentes/empleados/empleados.component';
import { AreasHospitalComponent } from './componentes/areas-hospital/areas-hospital.component';
import { AppRoutingModule } from './app.routing/app.routing.module';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    OperacionesComponent,
    AreaComponent,
    EmpleadosComponent,
    AreasHospitalComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
