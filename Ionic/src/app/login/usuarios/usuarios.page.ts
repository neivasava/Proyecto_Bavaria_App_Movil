import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { id } from '@swimlane/ngx-datatable';
import { Users } from 'src/app/models/user.modelo';
import { PedidoService } from 'src/app/service/pedido.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  listaUsuarios: Users[]=[];
  idUsuario: string;
  usuarioLogueado: Users;

  constructor(
    private router: Router,
    private alertCtrl: AlertController,
    private pedidoService: PedidoService

  ) { }

  ngOnInit() {
    this.ionViewDidLoad();
  }

  ionViewDidLoad() {
    
    this.pedidoService.listarUsuarios().subscribe(
      (data) => {
        console.log(data);
        this.listaUsuarios = data.data;
        console.log('usuarios al inicar',this.listaUsuarios);

      },
      err => {
        console.log(err);
      }
    );

  }

  eliminarUsuario(event, index) {
    this.pedidoService.idUsuarioS = this.listaUsuarios[index]._id;
    this.idUsuario = this.pedidoService.idUsuario;
    console.log('posicion editado',index);
    console.log('id usuario = ', this.idUsuario);

    this.pedidoService.eliminarUsuario(this.idUsuario)
    .subscribe(res=>{
      this.AlertUsuario();
    }, error=>{
      console.log(error);
      
    })

  }

  

  async AlertUsuario() {
    
    const alert = this.alertCtrl.create({
      header: 'Aviso',
      message: '¿Esta seguro que desea Elimar el usuario ?',
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
            this.ionViewDidLoad();
          }
        }
      ]
    });
    (await alert).present();
  }

  continuar(){
    this.router.navigate(['/home'])
  }
  

}
