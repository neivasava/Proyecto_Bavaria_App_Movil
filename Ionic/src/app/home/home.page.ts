import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { dataRolList, Users } from '../models/user.modelo';
import { PedidoService } from '../service/pedido.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuarioLogueado: Users;
  idUsuario: string;
  idUsuarioS: String;
  user: Users;
  rolList: dataRolList[]=[];
  usuariosArray: Users[]=[];
  usuarioEditar: Users;

  constructor(private menuCtrl: MenuController,
    private router: Router,
    private alertCtrl: AlertController,
    private pedidoService: PedidoService) {}

  toggleMenu(){
    
    this.menuCtrl.toggle();
  }

  ngOnInit() {
    
    //this.ionViewDidLoad();
      console.log("USUARIO LOGUEADO home");
      console.log(this.pedidoService.usuarioLogeado);
      this.idUsuario = this.pedidoService.usuarioLogeado._id.toString();
    console.log('id usurario home', this.idUsuario);

    this.pedidoService.listarUsuarios().subscribe(
      (data) => {
        console.log('lista usuarios ',data);
        this.usuariosArray = data.data;
        console.log(this.usuariosArray);
        
      },
      err => {
        console.log(err);
      }
    );


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

  ionViewDidLoad(){
    //this.idUsuario =  this.usuarioLogueado._id.toString();
    this.pedidoService.idUsuarioS = this.usuariosArray[0]._id;
    this.idUsuarioS = this.pedidoService.idUsuarioS
    console.log('id usuario logeado botoningresar', this.idUsuarioS);
    
    console.log('roles agregados' , this.rolList);

   this.usuarioEditar.Rol_List = this.rolList;

    //this.usuarioEditar.Rol_List = this.rolList;
    
    this.pedidoService.editarUsuario(this.idUsuarioS,this.usuarioEditar)
    .subscribe(res=>{
      this.router.navigateByUrl("/producto",{replaceUrl:true})
    }, error=>{
      console.log(error);
      
    })
  }

}
