import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  getClientes()
  {
    return this.http.get("http://apis.integracion.com/api/v1/clientes");
  }



}
