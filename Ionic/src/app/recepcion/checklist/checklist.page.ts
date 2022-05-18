import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dataChecklist, Pedido } from 'src/app/models/pedido.modelo';
import { PedidoService } from 'src/app/service/pedido.service';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.page.html',
  styleUrls: ['./checklist.page.scss'],
})
export class ChecklistPage implements OnInit {
  
  idDespachoEditar: string;
  pedidoEditar: Pedido;
  editarCheck: Pedido;
  checkBolean: dataChecklist[] = [];

  constructor(
    private router: Router,
    private pedidoService: PedidoService,
    ) {}

  

  ngOnInit() {
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
}
