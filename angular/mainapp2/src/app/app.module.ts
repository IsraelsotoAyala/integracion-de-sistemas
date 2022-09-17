import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FooterComponent } from './footer/footer.component';
import { ListClientesComponent } from './clientes/list-clientes/list-clientes.component';
import { NewClienteComponent } from './clientes/new-cliente/new-cliente.component';
import { ListproductosComponent } from './productos/listproductos/listproductos.component';
import { NewproductoComponent } from './productos/newproducto/newproducto.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { ListVentasComponent } from './ventas/list-ventas/list-ventas.component';
import { NewventaComponent } from './ventas/newventa/newventa.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavMenuComponent,
    FooterComponent,
    ListClientesComponent,
    NewClienteComponent,
    ListproductosComponent,
    NewproductoComponent,
    ListVentasComponent,
    NewventaComponent,

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
