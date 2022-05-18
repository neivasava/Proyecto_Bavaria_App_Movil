import { Component, OnInit } from '@angular/core';
import { PedidoService } from "../app/service/pedido.service";
import { Users } from './models/user.modelo';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  usuarioLogueado: Users;

  constructor( private pedidoService: PedidoService ) {}

  ngOnInit(): void {
    console.log("USUARIO LOGUEADO app");
    console.log(this.pedidoService.usuarioLogeado);
    this.usuarioLogueado = this.pedidoService.usuarioLogeado;
  }

}
