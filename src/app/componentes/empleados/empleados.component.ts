import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/interfaces/empleado';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  nuevo:Empleado={
    nombre: "",
    salario: 0
  }

  a: number = 0;
  coleccionEmpleado: Empleado[] = [];

  EmpleadoMayorSalario: Empleado[] = [];

  show: boolean = false;
  block: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  saveEmpleado():void{
    this.coleccionEmpleado.push(this.nuevo);
    console.log(this.nuevo);

    this.nuevo={
      nombre: "",
      salario: 0
    }

    this.show = true;
  }

  salarioMayor(){
    this.block= true;
    let acumulador = 0;
    let indice = 0;

    for (let i = 0; i < this.coleccionEmpleado.length; i++) {

      this.a = Math.max(this.coleccionEmpleado[i].salario);

      if(this.a > acumulador){
        acumulador = this.a;
        indice = i;
      }
    }

    this.EmpleadoMayorSalario.push(this.coleccionEmpleado[indice]);


  }
}
