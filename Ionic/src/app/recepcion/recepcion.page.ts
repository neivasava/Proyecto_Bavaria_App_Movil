import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dataNumeroEstibasList, dataProductosList, dataTipo_vehiculo, Pedido } from 'src/app/models/pedido.modelo';
import { PedidoService } from '../../app/service/pedido.service';
import { Observable} from "rxjs";
import { URL } from '../config/variable.config';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';


@Component({
  selector: 'app-recepcion',
  templateUrl: './recepcion.page.html',
  styleUrls: ['./recepcion.page.scss'],
})
export class RecepcionPage implements OnInit {

  
  pedidosArray: Pedido[]=[];
  textoBuscar = '';
  busquedaArray: Pedido[]=[];
  productosList: dataProductosList[]=[];
  tipovehiculoList: dataTipo_vehiculo[]=[];
  numeroEstibaslist: dataNumeroEstibasList[]=[];


  constructor(
    private http: HttpClient,
    private router: Router,
    private pedidoService: PedidoService
    ) { }
//apenas se carga la pag se carga esto de primeras
  ngOnInit() {
    this.ionViewDidLoad();
  }

  ionViewDidLoad() {
    this.pedidoService.listar_producto2().subscribe(
      (data) => {
        console.log(data);
        this.pedidosArray = data.data;
        console.log('pedidoArray al inicar',this.pedidosArray);

      },
      err => {
        console.log(err);
      }
    );

  }

  busquedaID(event) {
    //valor del evento escrito
    this.textoBuscar = event.detail.value;
    console.log('id buscar ', this.textoBuscar);
    this.ionViewDidLoad()
    
  }

  mostrarDespachos(event, index){
    this.pedidoService.idDespachoEditar = this.pedidosArray[index]._id;
    console.log('posicion editado',index);
    this.router.navigate(['/red-despacho'])

  }

}
