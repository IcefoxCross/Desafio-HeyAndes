import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpresasListComponent } from 'src/app/components/empresas-list/empresas-list.component';

const routes: Routes = [
  {path:'', redirectTo: 'empresas', pathMatch: 'full'},
  {path:'empresas', component: EmpresasListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
