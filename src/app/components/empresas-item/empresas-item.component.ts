import { Component, OnInit, Input } from '@angular/core';
import Sale from 'src/app/models/sale.model';

interface Empresa {
  nombre: string,
  ventas: number,
  comision: number
}

@Component({
  selector: 'tr [app-empresas-item]',
  templateUrl: './empresas-item.component.html',
  styleUrls: ['./empresas-item.component.css']
})
export class EmpresasItemComponent implements OnInit {

  @Input() empresa?: Empresa;

  //comision: number = 0;
  //total?: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
