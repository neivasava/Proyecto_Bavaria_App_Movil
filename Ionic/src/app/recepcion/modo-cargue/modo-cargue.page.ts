import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/models/pedido.modelo';
import { PedidoService } from 'src/app/service/pedido.service';

@Component({
  selector: 'app-modo-cargue',
  templateUrl: './modo-cargue.page.html',
  styleUrls: ['./modo-cargue.page.scss'],
})
export class ModoCarguePage implements OnInit {

  pedidosArray: Pedido[]=[];
  idDespachoEditar: string;
  pedidoEditar: Pedido;
  permisos: Boolean;
  

  constructor(private router: Router,
    private pedidoService: PedidoService) { }

  ngOnInit() {
    this.ionViewDidLoad();
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

  ionViewDidLoad() {
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

  editarDespacho(){
    this.permisos = true;
    console.log('pedido editado0',this.pedidoEditar);
  
    //this.idDespachoEditar = this.pedidoService.idDespachoEditar;
    console.log('id despacho 2 ', this.idDespachoEditar);
    
    this.pedidoService.editarDespacho(this.idDespachoEditar,this.pedidoEditar)
    .subscribe(res=>{
      this.router.navigateByUrl("/d-despacho",{replaceUrl:true})
    }, error=>{
      console.log(error);
      
    })
    
  }

  


}
