import { Component, OnInit, Input } from '@angular/core';
import Sale from 'src/app/models/sale.model';

@Component({
  selector: 'tr [app-empresas-item]',
  templateUrl: './empresas-item.component.html',
  styleUrls: ['./empresas-item.component.css']
})
export class EmpresasItemComponent implements OnInit {

  @Input() empresa?: string;
  @Input() sales?: Sale[];

  comision: number = 0;
  total?: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.total = this.sales.filter(sale => sale.nameAgency === this.empresa).reduce((a,b) => a + b.finalPrice, 0);
    this.comision = this.total * 0.025;
  }

}
