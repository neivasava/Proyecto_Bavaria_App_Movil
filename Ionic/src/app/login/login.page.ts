import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { dataRolList, Users } from '../models/user.modelo';
import { PedidoService } from '../service/pedido.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string;
  password:string;  
  usuarioLogueado: Users;
  idUsuario: string;
  idUsuarioS: String;
  user: Users;
  rolList: dataRolList[]=[];
  usuariosArray: Users[]=[];
  usuarioEditar: Users;
  idemail: Users;

  constructor(
    private menuCtrl: MenuController,
    private http: HttpClient,
    private router: Router,
    private alertCtrl: AlertController,
    private pedidoService: PedidoService
    ) {  }

  ngOnInit() {
    
    //this.ionViewDidLoad();

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

  // ionViewDidLoad() {
  //   this.pedidoService.idUsuarioS = this.usuariosArray[0]._id;
  //   this.idUsuarioS = this.pedidoService.idUsuarioS
  //   console.log('id del usuario ', this.idUsuario);
    

  //   this.pedidoService.mostrarUsuario(this.idUsuario).subscribe(
  //     (data) => {
  //       this.usuarioEditar = data.data;
  //       console.log('editar de detalle',this.usuarioEditar);
        
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   )   

  // }

  // toggleMenu(){
  //   this.menuCtrl.toggle();
  // }
  

  ingresar(){
    const credentials = {
      email: this.email,
      password: this.password 
    }    
    this.pedidoService.loginUser(credentials.email, credentials.password,this.usuarioEditar).subscribe(data => {
      console.log('datos usuario',data);
      this.pedidoService.usuarioLogeado = data;
      // this.routes.navigateByUrl('/menu2', {skipLocationChange: true}).then(() => {
      //   this.routes.navigateByUrl("/home");
      // });   
      this.router.navigateByUrl("/home");
    },error => {
      this.presentAlert()
      console.log(error);
      
    });


    // this.usuarioEditar.Rol_List = this.rolList;
    // console.log('rols' , this.rolList);
    

    
    // this.pedidoService.editarUsuario(this.idUsuario,this.usuarioEditar)
    // .subscribe(res=>{
    //   console.log('entro a editar ionView');
      
    // }, error=>{
    //   console.log(error);
      
    // })

    
  }

  async presentAlert() {
    const alert = this.alertCtrl.create({
      header: 'Alert',
      message:'Contraseña y/o usuario incorrectos',
      buttons: ['OK']
      
    });
    (await alert).present();
  }



}
