import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresasListComponent } from './components/empresas-list/empresas-list.component';
import { EmpresaDetailsComponent } from './components/empresa-details/empresa-details.component';
import { EmpresasItemComponent } from './components/empresas-item/empresas-item.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpresasListComponent,
    EmpresaDetailsComponent,
    EmpresasItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
