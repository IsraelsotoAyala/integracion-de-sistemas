import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ClientesService } from '../clientes.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NewClienteComponent } from '../new-cliente/new-cliente.component';

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.css']
})
export class ListClientesComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  txtValor:string="";

  clientes: any[] = [];

  constructor(private service:ClientesService,public dialog: MatDialog) { }

  openNewCliente():void
{
  const dialogRef = this.dialog.open(NewClienteComponent, {
    width: '30%',
  
  });
}



/*
  addCliente()
  {
    this.clientes.push({tipo:"PERSONA",numero_documento:"42582623",nombres:"Israel"});
    //this.clientes=this.clientes;
  }

  removeCliente()
  {
    this.clientes.splice(this.clientes.length-1,1);
  }
*/
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.service.getClientes().subscribe((response:any)=>{
     
      console.log(response);
      this.clientes=response.data;

      this.dtTrigger.next(null);

    });

  }

}
