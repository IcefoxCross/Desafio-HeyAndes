import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import Sale from '../models/sale.model';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  private dbPath = '/sales';

  salesRef: AngularFirestoreCollection<Sale>;

  constructor(private db: AngularFirestore) {
    this.salesRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Sale> {
    return this.salesRef;
  }
}
