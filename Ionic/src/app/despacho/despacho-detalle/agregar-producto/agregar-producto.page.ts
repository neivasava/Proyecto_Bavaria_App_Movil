import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/service/pedido.service';
import { dataProductos, dataProductosList, Pedido } from 'src/app/models/pedido.modelo';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.page.html',
  styleUrls: ['./agregar-producto.page.scss'],
})
export class AgregarProductoPage implements OnInit {

  pedidosArray: Pedido[]=[];
  idDespachoEditar: string;
  pedidoEditar: Pedido;

  productos: dataProductos[]=[];
  selectProducto: Pedido;
  selectN_Estibas: Pedido;
  campoSku: Pedido;
  campoProducto: Pedido;


  constructor(
    private pedidoService: PedidoService,
    private router: Router,
    private alertCtrl: AlertController,
  ) { }

  ngOnInit() {
    // this.ionViewDidLoad2();
  this.idDespachoEditar = this.pedidoService.idDespachoEditar;
  console.log('id despacho ',this.idDespachoEditar);
  this.pedidoService.mostrarDespacho(this.idDespachoEditar).subscribe(
    (data) => {
      this.pedidoEditar = data.data;
      console.log('editar de producto',this.pedidoEditar);
      
    },
    err => {
      console.log(err);
    }
  )
  
}

// ionViewDidLoad2() {
//   this.pedidoService.listar_producto2().subscribe(
//     (data) => {
//       console.log(data);
//       this.pedidosArray = data.data;
//       console.log(this.pedidosArray);
      
//     },
//     err => {
//       console.log(err);
//     }
//   );
  
// }

editarDespacho(){

  console.log('pedido editado producto',this.pedidoEditar);

  //this.idDespachoEditar = this.pedidoService.idDespachoEditar;
  console.log('id despacho 2 ', this.idDespachoEditar);
  
  this.pedidoService.editarDespacho(this.idDespachoEditar,this.pedidoEditar)
  .subscribe(res=>{
    console.log('ultimo editar', this.pedidoEditar);
    
    this.router.navigateByUrl("/d-despacho",{replaceUrl:true})
  }, error=>{
    console.log(error);
    
  })
  
}

crearCampos(){

  console.log('campo creado',this.pedidoEditar);

  //this.idDespachoEditar = this.pedidoService.idDespachoEditar;
  console.log('id despacho 2 ', this.idDespachoEditar);
  let pedido: Pedido;

  this.pedidoService.nuevoPedido(pedido).subscribe(data => {

    console.log(data);
    this.router.navigateByUrl("/d-despacho",{replaceUrl:true})
  }, error=>{
    console.log(error);
  });
  
}

async AlertRegistro() {
  const alert = this.alertCtrl.create({
    header: 'Aviso',
    message: 'Producto agregado correctamente',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        cssClass:'secundary',
        handler: (blah) => {
          console.log('Cancelar');
        }
      },
      {
        text: 'Ok',
        handler: (blah) => {
          this.editarDespacho()
        }
      }
    ]
  });
  (await alert).present();
}

valueProducto(){
  console.log("seleccionado", this.selectProducto);
  //this.pedidoEditar.Productos.push(this.selectProducto);
  
}

valueEstibas(){
  console.log("seleccionado", this.selectN_Estibas);
}

}
