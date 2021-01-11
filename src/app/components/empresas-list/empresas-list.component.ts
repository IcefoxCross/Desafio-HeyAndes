import { Component, OnInit } from '@angular/core';

import { SalesService } from 'src/app/services/sales.service';
import Sale from 'src/app/models/sale.model';
import { map } from 'rxjs/operators';

interface Empresa {
  nombre: string,
  ventas: number,
  comision: number
}

@Component({
  selector: 'app-empresas-list',
  templateUrl: './empresas-list.component.html',
  styleUrls: ['./empresas-list.component.css']
})
export class EmpresasListComponent implements OnInit {

  sales?: Sale[];
  empresas?: Empresa[] = [];
  mayorVentas?: number = 0;
  mesesVentas: number[] = Array(12).fill(0);
  mes?: string = '';

  meses = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE",
    "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];

  constructor(private salesService: SalesService) { }

  ngOnInit(): void {
    this.retrieveSales();
  }

  retrieveSales():void {
    this.salesService.getAll().snapshotChanges().pipe(
      map(changes => changes.map(c => 
          ({key: c.payload.doc.id, ...c.payload.doc.data()})
        )
      )
    ).subscribe(data => {
      this.sales = data;
      this.retrieveEmpresas();
      this.mayorVentas = this.empresas.reduce((prev, curr) => (prev.ventas > curr.ventas) ? prev : curr).ventas;
      this.mes = this.meses[this.mesesVentas.indexOf(Math.max(...this.mesesVentas))];
    });
  }

  retrieveEmpresas(): void {
    let nombres = [];
    for (let sale of this.sales) {
      if (!nombres.includes(sale.nameAgency)) {
        nombres.push(sale.nameAgency);
      }
      let m = parseInt(sale.day.split("-")[1]) - 1;
      this.mesesVentas[m] += sale.finalPrice;
    }
    for (let empresa of nombres) {
      const total = this.sales.filter(sale => sale.nameAgency === empresa).reduce((a,b) => a + b.finalPrice, 0);
      let e: Empresa = {
        nombre: empresa,
        ventas: total,
        comision: total * 0.025
      };
      this.empresas.push(e);
    }
  }

}
