import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.css'],
})
export class OperacionesComponent implements OnInit {
  num1: any = 0;
  num2: any = 0;
  resultado : number = 0;
  show : boolean = false;
  constructor() {}

  ngOnInit(): void {
  }

  calcularSuma(): number {
    this.show= true;
    let suma: number = 0;

    this.num1 = parseInt(this.num1,10);
    this.num2 = parseInt(this.num2,10);

    suma = this.num1 + this.num2;

    this.resultado = suma;

    return suma;
  }

  calcularResta(): number {
    this.show= true;
    let resta: number = 0;

    this.num1 = parseInt(this.num1,10);
    this.num2 = parseInt(this.num2,10);

    resta = this.num1 - this.num2;

    this.resultado = resta;
    return resta;
  }

  calcularMultiplicacion(): number {
    this.show= true;
    let multiplicacion: number = 0;

    this.num1 = parseInt(this.num1,10);
    this.num2 = parseInt(this.num2,10);

    multiplicacion = this.num1 * this.num2;

    this.resultado = multiplicacion;

    return multiplicacion;
  }

  calcularDivision(): number {
    this.show= true;
    let division: number = 0;

    this.num1 = parseInt(this.num1,10);
    this.num2 = parseInt(this.num2,10);

    if (this.num2 !== 0) {
      division = this.num1 / this.num2;
      this.resultado = division;
      return division;
    }

    this.resultado = 0;
    return 0;
  }
}
