import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { dataChecklist, dataNumeroEstibasList, dataProductosList, dataTipo_vehiculo, Pedido } from 'src/app/models/pedido.modelo';
import { PedidoService } from '../service/pedido.service';
import { AlertController, Platform} from '@ionic/angular';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.page.html',
  styleUrls: ['./resumen.page.scss'],
})
export class ResumenPage implements OnInit {
  
  pedidosArray: Pedido[]=[];
  editarCampo: Pedido;
  guardar: Pedido;


  idDespachoEditar: string;
  pedidoEditar: Pedido;
  productosList: dataProductosList[]=[];
  tipovehiculoList: dataTipo_vehiculo[]=[];
  numeroEstibaslist: dataNumeroEstibasList[]=[];
  //habilitarBoton: Boolean = false;

 
 
  editarCheck: Pedido;
  checkBolean: dataChecklist[] = [];


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
  
  
      this.checkBolean.push({
        val: 'La estiba está sin humedad, desgaste, rotura o un ensamble incorrecto',
        isChecked: false, 
      });
      this.checkBolean.push({
        val: 'El producto terminado está sin rayones, abolladuras, fugas o roturas',
        isChecked: false 
      });
      this.checkBolean.push({
        val: 'EL producto está dentro de la estiba y alineado a su geometría',
      isChecked: false 
      });
      this.checkBolean.push({
        val: 'La cantidad de producto está completa según lo planeado',
      isChecked: false  
      });
      this.checkBolean.push({
        val: 'El estibado del producto está apilado correctamente',
      isChecked: false  
      });
      this.checkBolean.push({
        val: 'El termoplástico está sin roturas o deformaciones',
      isChecked: false 
      });
      this.checkBolean.push({
        val: 'La canasta de producto retornable está sin roturas, abolladuras o deformaciones',
      isChecked: false 
      });
      this.checkBolean.push({
        val: 'El papel stretch está sin humedad o rasgaduras',
      isChecked: false 
      });
      this.checkBolean.push({
        val: 'EL papel cubre de manera adecuada producto y estiba',
      isChecked: false
      });
      this.checkBolean.push({
        val: 'EL papel stretch tienen el ajuste adecuado',
      isChecked: false 
      });     
   

  }

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






 

 

  

 

  _ionChange(event){
    console.log("check boleano", event);
  }

  _getSelectedItem(selectedItem){
    console.log('before' + selectedItem.isChecked);
    this.checkBolean.forEach(item => {
      if(item.val == selectedItem.val){
        item.isChecked = selectedItem.isChecked
      }
    })
    console.log('bolean final',this.checkBolean);
    
  }

  guardarChecklist(){
      console.log('pedido check',this.pedidoEditar);
      console.log('objeto check',this.checkBolean);
      console.log('id check ', this.idDespachoEditar);

      this.pedidoEditar.CheckList = this.checkBolean

      this.idDespachoEditar = this.pedidoService.idDespachoEditar;
      
      
      this.pedidoService.editarDespacho(this.idDespachoEditar, this.pedidoEditar)
    .subscribe(res=>{
      
      this.router.navigateByUrl("/fotos",{replaceUrl:true})
    }, error=>{
      console.log(error);
      
    })
      
    }

    noGuardar(){
      this.router.navigateByUrl("/d-despacho",{replaceUrl:true})
    }

    async AlertCheck() {
    
      const alert = this.alertCtrl.create({
        header: 'Aviso',
        message: '¿Esta seguro de que la lista de verificacion esta correcta?',
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
              this.guardarChecklist();
            }
          }
        ]
      });
      (await alert).present();
    }

}
