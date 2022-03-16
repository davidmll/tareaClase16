import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  base: any = 0;
  altura : any = 0;

  resultado : number = 0;
  show: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  calcularArea(): number{
    this.show= true;
    let area : number = 0;

    this.base = parseInt(this.base,10);
    this.altura = parseInt(this.altura,10);

    area = (this.base * this.altura) / 2;

    this.resultado = area;

    return area;
  }
}
