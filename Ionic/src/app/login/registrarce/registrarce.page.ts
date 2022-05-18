import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { Pedido } from 'src/app/models/pedido.modelo';
import { Users } from 'src/app/models/user.modelo';
import { PedidoService } from 'src/app/service/pedido.service';

@Component({
  selector: 'app-registrarce',
  templateUrl: './registrarce.page.html',
  styleUrls: ['./registrarce.page.scss'],
})
export class RegistrarcePage implements OnInit {

  email: string;
  name: string;
  last_name: string;
  password: string;
  rol: string;
  usuarioLogueado: Users;
  idDespachoEditar: string;
  pedidosArray: Pedido[]=[];
  usuariosArray: Users[]=[];
  idUsuario: string;
  idUsuarioS: String;
  usuarioEditar: Users;

  constructor(
    private pedidoService: PedidoService,
    private menuCtrl: MenuController,
    private hppt: HttpClient,
    private alertCtrl: AlertController,
    private routes: Router
    ) { }

  ngOnInit() {
    //this.ionViewDidLoad();
    console.log("USUARIO LOGUEADO registro");
    console.log(this.pedidoService.usuarioLogeado);
    this.usuarioLogueado = this.pedidoService.usuarioLogeado;

    this.pedidoService.listarUsuarios().subscribe(
      (data) => {
        console.log(data);
        this.usuariosArray = data.data;
        console.log('usuarios',this.usuariosArray);
        
      },
      err => {
        console.log(err);
      }
    );

    

  }


  ionViewDidLoad() {
    this.pedidoService.idUsuarioS = this.usuariosArray[0]._id;
    this.idUsuarioS = this.pedidoService.idUsuarioS
    console.log('id usuario logeado botoningresar', this.idUsuarioS);
    
    this.pedidoService.mostrarUsuario(this.idUsuario).subscribe(
      (data) => {
        this.usuarioEditar = data.data;
        console.log('editar de detalle',this.usuarioEditar);
        
      },
      err => {
        console.log(err);
      }
    )
    
  }



  toggleMenu(){
    this.menuCtrl.toggle();
  }

  registrarse(){
    const user = {
      email: this.email,
      name: this.name,
      last_name: this.last_name,
      password: this.password,
      rol: this.rol
    }
    this.hppt.post('http://localhost:5444/api/bavaria/registro', user)
    .subscribe(res=>{
      this.routes.navigateByUrl("/login",{replaceUrl:true})
          console.log(user);
    }, error=>{
      console.log(error);
      
    })
  }

  async AlertRegistro() {
    const alert = this.alertCtrl.create({
      header: 'Aviso',
      message: 'Usuario creado correctamente',
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
            this.registrarse()
          }
        }
      ]
    });
    (await alert).present();
  }

}
