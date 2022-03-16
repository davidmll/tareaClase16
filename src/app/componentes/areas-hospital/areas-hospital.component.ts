import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-areas-hospital',
  templateUrl: './areas-hospital.component.html',
  styleUrls: ['./areas-hospital.component.css']
})
export class AreasHospitalComponent implements OnInit {

  presupuesto : any = 0;

  pediatria :number = 0;
  urgencias : number = 0;
  traumatologia: number = 0;

  show:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  calcularPresupuesto(){
    this.show= true;
    this.presupuesto = parseInt(this.presupuesto,10);

    this.pediatria = (this.presupuesto * 42) /100;
    this.urgencias = (this.presupuesto * 37) /100;
    this.traumatologia = (this.presupuesto * 21) /100;

  }
}
