import { Component, OnInit } from '@angular/core';

import { SalesService } from 'src/app/services/sales.service';
import Sale from 'src/app/models/sale.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-empresas-list',
  templateUrl: './empresas-list.component.html',
  styleUrls: ['./empresas-list.component.css']
})
export class EmpresasListComponent implements OnInit {

  sales?: Sale[];
  empresas?: String[] = [];

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
    });
  }

  retrieveEmpresas(): void {
    for (let sale of this.sales) {
      if (!this.empresas.includes(sale.nameAgency)) {
        this.empresas.push(sale.nameAgency);
      }
    }
  }

}
