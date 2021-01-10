import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresasListComponent } from './components/empresas-list/empresas-list.component';
import { EmpresaDetailsComponent } from './components/empresa-details/empresa-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpresasListComponent,
    EmpresaDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
