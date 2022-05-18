import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dataNumeroEstibasList, dataProductosList, dataRolList, dataTipo_vehiculo, Pedido } from 'src/app/models/pedido.modelo';
import { PedidoService } from '../../../app/service/pedido.service';
import { AlertController, Platform} from '@ionic/angular';

@Component({
  selector: 'app-despacho-detalle',
  templateUrl: './despacho-detalle.page.html',
  styleUrls: ['./despacho-detalle.page.scss'],
})
export class DespachoDetallePage implements OnInit {
  pedidosArray: Pedido[]=[];
  editarCampo: Pedido;
  guardar: Pedido;


  idDespachoEditar: string;
  pedidoEditar: Pedido;
  productosList: dataProductosList[]=[];
  tipovehiculoList: dataTipo_vehiculo[]=[];
  numeroEstibaslist: dataNumeroEstibasList[]=[];
  rolList: dataRolList []=[];
  //habilitarBoton: Boolean = false;


  constructor(
    private router: Router,
    private http: HttpClient,
    private alertCtrl: AlertController,
    private pedidoService: PedidoService,
    private plataform: Platform,
    // private file: File,
    // private fileTransfer: FileTransfer,
    // private fileOpener: FileOpener,
    // private document: Document
    

    ) { }

  ngOnInit() {

    this.ionViewDidLoad();
      debugger;
    this.idDespachoEditar = this.pedidoService.idDespachoEditar;
    console.log('id despacho ',this.idDespachoEditar);
    this.pedidoService.mostrarDespacho(this.idDespachoEditar).subscribe(
      (data) => {
        this.pedidoEditar = data.data;
        console.log('editar de detalle',this.pedidoEditar);
        
      },
      err => {
        console.log(err);
      }
    )


    this.productosList.push({
      SKU: 2224,
      SKU2: "Pony Malta Pet  1.5 L X 6",
      TIPO_DE_PROD: "PET",
      PRESENTAION: "1.5",
      X_CANT: "6",
      Pallets:1
    });
    this.productosList.push({
      SKU: 9480,
      SKU2: "POKER RN 1000cc X 13",
      TIPO_DE_PROD: "RETORNABLE",
      PRESENTAION: "1000",
      X_CANT: "13",
      Pallets:2
    });
    this.productosList.push({
      SKU: 8828,
      SKU2: "BECKS LTA 355CC X 6",
      TIPO_DE_PROD: "LATA",
      PRESENTAION: "355",
      X_CANT: "6",
      Pallets:3
    });
    this.productosList.push({
      SKU: 9858,
      SKU2: "Aguila Lig TW 330cc X 24 MANUAL",
      TIPO_DE_PROD: "TW",
      PRESENTAION: "330",
      X_CANT: "24",
      Pallets:4
    });
    this.productosList.push({
      SKU: 9150,
      SKU2: "Poker RN 250cc X 38.",
      TIPO_DE_PROD: "RETORNABLE",
      PRESENTAION: "250",
      X_CANT: "38",
      Pallets:5
    });
  
    this.productosList.push({
      SKU: 3128,
      SKU2: "Aguila RN 330cc X 30",
      TIPO_DE_PROD: "RETORNABLE",
      PRESENTAION: "330",
      X_CANT: "30",
      Pallets:6
    });
    this.productosList.push({
      SKU: 2222,
      SKU2: "Pony Malta Pet 330cc X 24",
      TIPO_DE_PROD: "PET",
      PRESENTAION: "",
      X_CANT: "",
      Pallets:7
    });
    this.productosList.push({
      SKU: 9508,
      SKU2: "Marte 210 NR x 6",
      TIPO_DE_PROD: "NO RETORNABLE",
      PRESENTAION: "OTROS",
      X_CANT: "6",
      Pallets:8
    });
    this.productosList.push({
      SKU: 13631,
      SKU2: "Poker 269 ",
      TIPO_DE_PROD: "LATA",
      PRESENTAION: "269",
      X_CANT: "269",
      Pallets:9
    });
    this.productosList.push({
      SKU: 8923,
      SKU2: "Azteca lta 330 x 6",
      TIPO_DE_PROD: "LATA",
      PRESENTAION: "330",
      X_CANT: "6",
      Pallets:10
    });

    /////////////////////////////////////////////////////////////////////////
    ////////////// pruebas front
    // this.productosList.push({
    //   SKU: 2224,
    //   SKU2: "Lote",
    //   TIPO_DE_PROD: "PET",
    //   PRESENTAION: "1.5",
    //   X_CANT: "6",
    //   Pallets:1
    // });
    // this.productosList.push({
    //   SKU: 2224,
    //   SKU2: "Fecha",
    //   TIPO_DE_PROD: "PET",
    //   PRESENTAION: "1.5",
    //   X_CANT: "6",
    //   Pallets:1
    // });
    // this.productosList.push({
    //   SKU: 2224,
    //   SKU2: "Hora",
    //   TIPO_DE_PROD: "PET",
    //   PRESENTAION: "1.5",
    //   X_CANT: "6",
    //   Pallets:1
    // });
  
  
  /////////////////////////////////////////////
    this.numeroEstibaslist.push({
      Numero: 1
    });
    this.numeroEstibaslist.push({
      Numero: 2
    });
    this.numeroEstibaslist.push({
      Numero: 3
    });
    this.numeroEstibaslist.push({
      Numero: 4
    });
    this.numeroEstibaslist.push({
      Numero: 5
    });
    this.numeroEstibaslist.push({
      Numero: 6
    });
    this.numeroEstibaslist.push({
      Numero: 7
    });
    this.numeroEstibaslist.push({
      Numero: 8
    });
    this.numeroEstibaslist.push({
      Numero: 9
    });
    this.numeroEstibaslist.push({
      Numero: 10
    });
    this.numeroEstibaslist.push({
      Numero: 11
    });
    this.numeroEstibaslist.push({
      Numero: 12
    });
    this.numeroEstibaslist.push({
      Numero: 13
    });
    this.numeroEstibaslist.push({
      Numero: 14
    });
    this.numeroEstibaslist.push({
      Numero: 15
    });
    this.numeroEstibaslist.push({
      Numero: 16
    });
    this.numeroEstibaslist.push({
      Numero: 17
    });
    this.numeroEstibaslist.push({
      Numero: 18
    });
    this.numeroEstibaslist.push({
      Numero: 19
    });
    this.numeroEstibaslist.push({
      Numero: 20
    });
    this.numeroEstibaslist.push({
      Numero: 21
    });
    this.numeroEstibaslist.push({
      Numero: 22
    });
    this.numeroEstibaslist.push({
      Numero: 23
    });
    this.numeroEstibaslist.push({
      Numero: 24
    });
    this.numeroEstibaslist.push({
      Numero: 25
    });
    this.numeroEstibaslist.push({
      Numero: 26
    });
    this.numeroEstibaslist.push({
      Numero: 27
    });
    this.numeroEstibaslist.push({
      Numero: 28
    });
    this.numeroEstibaslist.push({
      Numero: 29
    });
    this.numeroEstibaslist.push({
      Numero: 30
    });
    this.numeroEstibaslist.push({
      Numero: 31
    });
    this.numeroEstibaslist.push({
      Numero: 32
    });
    this.numeroEstibaslist.push({
      Numero: 33
    });
    this.numeroEstibaslist.push({
      Numero: 34
    });
    this.numeroEstibaslist.push({
      Numero: 35
    });
  
  
    /////////////////////////////////////////////
  
  this.tipovehiculoList.push({
    Tipo_de_Vehiculo: "SIDER"
  });
  this.tipovehiculoList.push({
    Tipo_de_Vehiculo: "SÚPER SIDER"
  });
  this.tipovehiculoList.push({
    Tipo_de_Vehiculo: "JUMBO SIDER"
  });
  this.tipovehiculoList.push({
    Tipo_de_Vehiculo: "JUMBO SIDER CON SEPARADORES"
  });
  this.tipovehiculoList.push({
    Tipo_de_Vehiculo: "SIDER CAMABAJA"
  });
  this.tipovehiculoList.push({
    Tipo_de_Vehiculo: "SIDER CAMABAJA DOS EJES"
  });
  this.tipovehiculoList.push({
    Tipo_de_Vehiculo: "MAXI SIDER PET"
  });
  this.tipovehiculoList.push({
    Tipo_de_Vehiculo: "SIDER SP"
  });


  this.rolList.push({
    nameRol: "Administrador"
  });
  this.rolList.push({
    nameRol: "Analista"
  });
  this.rolList.push({
    nameRol: "Supervisor"
  });
  this.rolList.push({
    nameRol: "Revisor"
  });
  
  
  

  }

  //cada vez que se cargue la pagina se carga todo el listado
  ionViewDidLoad() {    
    //this.permiso = false;
    this.pedidoService.listar_producto2().subscribe(
      (data) => {
        console.log(data);
        this.pedidosArray = data.data;
        console.log(this.pedidosArray);
        
      },
      err => {
        console.log(err);
      }
    );
    
  }

  editarProducto(){

    console.log('pedido editado 1',this.pedidoEditar);
  
    //this.idDespachoEditar = this.pedidoService.idDespachoEditar;
    console.log('id despacho 2 ', this.idDespachoEditar);
    this.pedidoEditar.ProductosList = this.productosList;
    this.pedidoEditar.Numero_Estibas_list = this.numeroEstibaslist;
    this.pedidoEditar.Tipo_de_Vh_list = this.tipovehiculoList;
    this.pedidoEditar.Rol_list = this.rolList;
    console.log('rols' , this.rolList);
    

    
    this.pedidoService.editarDespacho(this.idDespachoEditar,this.pedidoEditar)
    .subscribe(res=>{
      this.router.navigateByUrl("/producto",{replaceUrl:true})
    }, error=>{
      console.log(error);
      
    })
    
  }

  mostrarInformacion(){

    console.log('pedido editado 1',this.pedidoEditar);
  
    //this.idDespachoEditar = this.pedidoService.idDespachoEditar;
    console.log('id despacho 2 ', this.idDespachoEditar);
    this.pedidoEditar.ProductosList = this.productosList;
    this.pedidoEditar.Numero_Estibas_list = this.numeroEstibaslist;
    this.pedidoEditar.Tipo_de_Vh_list = this.tipovehiculoList;
    this.pedidoEditar.Rol_list = this.rolList;
    console.log('rols' , this.rolList);
    

    
    this.pedidoService.editarDespacho(this.idDespachoEditar,this.pedidoEditar)
    .subscribe(res=>{
      this.router.navigateByUrl("/producto",{replaceUrl:true})
    }, error=>{
      console.log(error);
      
    })
    
  }

  editarDespacho(){
    console.log('pedido editado0',this.pedidoEditar);
  
    //this.idDespachoEditar = this.pedidoService.idDespachoEditar;
    console.log('id despacho 2 ', this.idDespachoEditar);

    this.idDespachoEditar = this.pedidoService.idDespachoEditar;

    

    // console.log("contenido proudctolist ",this.productosList);
    
    
    this.pedidoService.editarDespacho(this.idDespachoEditar,this.pedidoEditar)
    .subscribe(res=>{
      console.log("entro casi pag");
      
      this.router.navigateByUrl("/check-list",{replaceUrl:true})
    }, error=>{
      console.log(error);
      
    })
    
  }

  async AlertRegistro() {
    
    const alert = this.alertCtrl.create({
      header: 'Aviso',
      message: 'Despacho editado correctamente',
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
  
  abrirModoCarge(){
    //this.habilitarBoton = true;
    console.log('pedido editado0',this.pedidoEditar);
  
    //this.idDespachoEditar = this.pedidoService.idDespachoEditar;
    console.log('id despacho 2 ', this.idDespachoEditar);
    this.pedidoEditar.ProductosList = this.productosList;
    this.pedidoEditar.Numero_Estibas_list = this.numeroEstibaslist;
    this.pedidoEditar.Tipo_de_Vh_list = this.tipovehiculoList;

    
    this.pedidoService.editarDespacho(this.idDespachoEditar,this.pedidoEditar)
    .subscribe(res=>{
      
      this.router.navigateByUrl("/modo-carge",{replaceUrl:true})
      
    }, error=>{
      console.log(error);
      
      
    })
  }
  

}
