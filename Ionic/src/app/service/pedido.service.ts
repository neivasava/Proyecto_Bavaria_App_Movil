import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { dataFotos, dataFotosList, dataPedidoDelete, dataPedidoEditar, dataPedidoJson, dataPedidoMostar, dataProductos, Pedido } from "../../app/models/pedido.modelo";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { URL, URLBUSCAR, URLChecklist, URLCrearDespachoSubirJson, URLdeleteCheck, URLEditar, URLEditarUsuario, URLEliminarUsuario, URLLogin, URLRegistrar, URLUsuario, URLUsuarios} from '../config/variable.config';
import { dataPedido } from "../../app/models/pedido.modelo";
//Cameraresultype resultado cuando se toma la foto
import {Camera, CameraPhoto, CameraResultType, CameraSource, Photo } from "@capacitor/camera";
import {  Plugins, Capacitor } from "@capacitor/core";
//import { AngularFireAuth  } from "@angular/fire/compat/auth";

const { Device } = Plugins;


//almacenar las imagenes tomadas
import { Filesystem, Directory } from "@capacitor/filesystem";
//import { Storage } from "@capacitor/storage";
import { promise } from 'protractor';
import { resolve, Resolver } from 'dns';
import { rejects } from 'assert';
import { dataUserEliminar, dataUserMostar, dataUserMostar2, Users } from '../models/user.modelo';

const {Storage} = Plugins;

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  usuarioLogeado: Users;
  idUsuario: string;
  idUsuarioS: String;
  idDespachoEditar: string;
  //enpieza con arreglo vacio
  arrayUsers: Pedido[] = [];
  arrayPedido: Pedido[] = [];
  fotosArray: dataFotosList[] = [];
  private PHOTO_STORAGE: string = "fotos";

  constructor(private http: HttpClient,
    //private cerrarUsuario: AngularFireAuth
    ) 
  { }

  listar_producto2(): Observable<dataPedido> {
    return this.http.get<dataPedido>(`${URL}`);
  }

  busquedaIdService(): Observable<dataPedido>{
    return this.http.get<dataPedido>(`${URL}`);
  }

  mostrarDespacho(id: string): Observable<dataPedidoMostar>{
    return this.http.get<dataPedidoMostar>(`${URLBUSCAR}` + id);
  }

  editarDespacho(id: string, pedido: Pedido): Observable<dataPedidoEditar>{
    return this.http.put<dataPedidoEditar>(`${URLEditar}` + id, pedido);
  }

  eliminarDespacho(id: string, pedido: Pedido): Observable<dataPedidoDelete>{
    return this.http.put<dataPedidoDelete>(`${URLdeleteCheck}` + id, pedido);
  }

  editarCheck(id: string, pedido: Pedido): Observable<dataPedidoEditar>{
    return this.http.put<dataPedidoEditar>(`${URLEditar}` + id, pedido);
  }

  listarUsuarios(): Observable<dataUserMostar2> {
    return this.http.get<dataUserMostar2>(`${URLUsuarios}`);
  }

  mostrarUsuario(id: string): Observable<dataUserMostar>{
    return this.http.get<dataUserMostar>(`${URLUsuario}` + id);
  }

  editarUsuario(id: String, user: Users): Observable<dataUserMostar>{
    return this.http.put<dataUserMostar>(`${URLEditarUsuario}` + id, user);
  }

  eliminarUsuario(id: string): Observable<dataUserEliminar>{
    return this.http.delete<dataUserEliminar>(`${URLEliminarUsuario}` + id);
  }

  loginUser(correo: string, contrasena: string, user: Users): Observable<Users> {
    return this.http.get<Users>("http://localhost:5444/api/bavaria/login/" + correo + "/" + contrasena);
  }
  
  nuevoPedido(nuevoPedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>("http://localhost:5444/api/bavaria/nuevoDespacho/", nuevoPedido);
  }

  cerrarSesion(){
    this.cerrarSesion
  }



  // crearDespachoSubirJson(): Observable<dataPedidoJson>{
  //   return this.http.post<dataPedidoJson>(`${URLCrearDespachoSubirJson}`);
  // }

  async añadirNuevaImagen(){
    //Proceso para tomar una foto
    //getPhoto que me devuelva la foto
    const fotoCapturada = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    })

    //poner foto al inicio del array
    
    // this.fotosArray.unshift({
    //     filepath: 'sdsad',
    //     webviewPath: fotoCapturada.webPath
      
    // })

    const guardarfotos = await this.guardarFotos(fotoCapturada);
    this.fotosArray.unshift(guardarfotos)
    
    Storage.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.fotosArray)
    })
  }

  async guardarFotos(cameraPhoto: CameraPhoto){
    // convertir la foto a formato base64
    const base64Data = await  this.readAsBase64(cameraPhoto)
    //escribir el archivo en el directorio
    const filename = new Date().getTime + '.jpeg';
    //guardar foto necesita nombre, base y directorio
    const savefile = await Filesystem.writeFile({
      path: filename,
      data: base64Data,
      directory: Directory.Data
    })
    //que retorne los parametros para el modelo
    return{
      filepath: filename,
      webviewPath: cameraPhoto.webPath
    }
  }


    //lee la foto base64 y la envia a guardar
  async readAsBase64(cameraPhoto: CameraPhoto){
    // convertir de blob a base64
    const  convertirFot = await fetch(cameraPhoto.webPath!)
    const blob = await convertirFot.blob();

    return await this.convertBlodToBase64(blob) as string  
  }


  // convierte la foto de blob a base64
  // funcion flecha despues de la flecha es una promesa si cumple o no no es seguro 
  convertBlodToBase64 = (blob :Blob) => new Promise((resolve, rejects)=>{
    const reader = new  FileReader
    reader.onerror = rejects
    reader.onload = () => {
      resolve(reader.result)
    }
    reader.readAsDataURL(blob)
  })


   async loadSaved(){
     //Recuperar fotos de cache
     const listafotos = await Storage.get({key: this.PHOTO_STORAGE})
     this.fotosArray = JSON.parse(listafotos.value) || []
     
     //desplegar las fotos leidas en formato base64
     for(let foto of this.fotosArray){
       //leer cada foto almacenada en el sistema
       const readFile = await Filesystem.readFile({
         path: foto.filepath,
         directory: Directory.Data
       })

       //solo para plataforma web: cargar fotos en base64
       foto.webviewPath = `data:image/jepg;base64,${readFile.data}`

     }
   }                        
   

  


}
 
