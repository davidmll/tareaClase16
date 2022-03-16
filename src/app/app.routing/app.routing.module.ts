import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AreasHospitalComponent } from '../componentes/areas-hospital/areas-hospital.component';
import { OperacionesComponent } from '../componentes/operaciones/operaciones.component';
import { AreaComponent } from '../componentes/area/area.component';
import { EmpleadosComponent } from '../componentes/empleados/empleados.component';

const routes: Routes = [
  {
    path:'',
    component:OperacionesComponent,
    pathMatch:'full'
  },
  {
    path:'area',
    component:AreaComponent,
  },
  {
    path:'empleados',
    component:EmpleadosComponent,
  },
  {
    path:'presupuestos',
    component: AreasHospitalComponent,
  },
  {
    path:'**',
    redirectTo:''
  }

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes)
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }
