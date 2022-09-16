import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClientesComponent } from './clientes/list-clientes/list-clientes.component';
import { ListproductosComponent } from './productos/listproductos/listproductos.component';
import { ListVentasComponent } from './ventas/list-ventas/list-ventas.component';

const routes: Routes = [

  {path:"clientes",component:ListClientesComponent},
  {path:"productos",component:ListproductosComponent},
  {path:"ventas",component:ListVentasComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
