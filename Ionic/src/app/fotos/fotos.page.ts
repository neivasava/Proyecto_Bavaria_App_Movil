import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../service/pedido.service';
import { Camera, CameraOriginal } from "@ionic-native/camera";
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Pedido } from '../models/pedido.modelo';


@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.page.html',
  styleUrls: ['./fotos.page.scss'],
})
export class FotosPage implements OnInit {

  imagen: any;
  idDespachoEditar: string;
  pedidoEditar: Pedido;

  constructor(
    public pedidoService: PedidoService,
    private alertCtrl: AlertController,
    private router: Router,
    //private camera: CameraOriginalinal
    ) { }

  async ngOnInit() {
    this.pedidoService.loadSaved()
    this.idDespachoEditar = this.pedidoService.idDespachoEditar;
    console.log('id despacho ',this.idDespachoEditar);
    this.pedidoService.mostrarDespacho(this.idDespachoEditar).subscribe(
      (data) => {
        this.pedidoEditar = data.data;
        console.log('editar',this.pedidoEditar);
        
      },
      err => {
        console.log(err);
      }
    )
  }

  tomarGaleria(){
    console.log('pedido check',this.pedidoEditar);
    console.log('id check ', this.idDespachoEditar);

    this.idDespachoEditar = this.pedidoService.idDespachoEditar;      
    this.pedidoService.editarDespacho(this.idDespachoEditar, this.pedidoEditar)
  .subscribe(res=>{
    
    this.router.navigateByUrl("/fotos",{replaceUrl:true})
  }, error=>{
    console.log(error);
    
  })
    
    console.log("foto todo",this.pedidoService.añadirNuevaImagen());
  }

  async AlertCheck() {
    
    const alert = this.alertCtrl.create({
      header: 'Aviso',
      message: '¿Esta seguro que desea guardar la información?',
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
          }
        }
      ]
    });
    (await alert).present();
  }

  

}
