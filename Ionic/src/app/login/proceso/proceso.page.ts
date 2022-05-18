import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { Pedido } from 'src/app/models/pedido.modelo';
import { Users } from 'src/app/models/user.modelo';
import { PedidoService } from 'src/app/service/pedido.service';
import * as XLSX from "xlsx";

@Component({
  selector: 'app-proceso',
  templateUrl: './proceso.page.html',
  styleUrls: ['./proceso.page.scss'],
})
export class ProcesoPage implements OnInit {

  convertedJson!: string;
  user: Users;
  idUsuario: String;
  usuarioLogueado: Users;

  constructor(
    private alertCtrl: AlertController,
    private menuCtrl: MenuController,
    private router: Router,
    private pedidoService: PedidoService
    ) { }

  ngOnInit() {
    console.log("USUARIO LOGUEADO proceso");
    console.log(this.pedidoService.usuarioLogeado);
    this.usuarioLogueado = this.pedidoService.usuarioLogeado;
  
    // this.pedidoService.mostrarDespacho(this.idDespachoEditar).subscribe(
    //   (data) => {
    //     this.pedidoEditar = data.data;
    //     console.log('editar de detalle',this.pedidoEditar);
        
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // )
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }

  // ionViewDidLoad() {    
  //   //this.permiso = false;
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

  entrarLogin(){
    //redireccionando a donde queremos pero hay q poner el objeto en el construstor
    // ya como esta creada la ventana en el navegador se llama a esa ventana
    this.router.navigate(['home'])
  }

  entrarRecepcion(){
    this.router.navigate(['home'])
  }

  fileUpload(event){
    console.log(event.target.files);
    const selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsBinaryString(selectedFile);
    fileReader.onload = (event) =>{
        console.log(event);
        const binaryData = event.target.result;
        
        // saca las hojas del archivo 
        const workbook = XLSX.read(binaryData, {type:'binary'});
        console.log('workbook',workbook);

        // selecciona la hojaa utilizar
        workbook.SheetNames.forEach(sheet =>{
          const dataExcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
          console.log("hojaaaasss", dataExcel);
          for(let i = 0; i < dataExcel.length; i++){
            let pedido: Pedido;
            console.log('un solo dato',dataExcel[i]);
            this.AlertCarge();

            Object.assign(pedido, dataExcel[i]);

            console.log("PEDIDOS")
            console.log(pedido);
            this.pedidoService.nuevoPedido(pedido).subscribe(data => {
              console.log("OBJETO " + i + " GUARDADO");
              console.log(data);
            });
          }
         this.convertedJson = JSON.stringify(dataExcel, undefined, 4)
        })
        console.log('workbook 22',workbook);
    }
  }
  

  async AlertCarge() {
    
    const alert = this.alertCtrl.create({
      header: 'Aviso',
      message: 'El archivo TMS ha sido subido correctamente',
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
