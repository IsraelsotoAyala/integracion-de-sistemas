import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {
  
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  txtValor:string="";

  clientes: any[] = [];

  constructor(private service:ClientesService) { }
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
