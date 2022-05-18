import { Component, OnInit } from '@angular/core';
import { PlacesService } from "./places.service";
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {
  // arreglo vacio para llenarlo con lo q venga de placeservice
  // y mostrarlo en .html arreglo places forstech
  placesDatos = []

  //instanciar el placeservice llamarla para utilizarla
  constructor(private placeService: PlacesService, private router: Router,
              private menuCtrl: MenuController) { }

  //lo primero q carga
  ngOnInit() {
    this.placesDatos = this.placeService.getPlaces(); 
  }

  //cuando elimina un dato este se encarga de recargar la pag y mostrar los q no fueron eliminados
  ionViewWillEnter(){
    this.placesDatos = this.placeService.getPlaces();
  }

  //agregar lugar
  addNewPlace(){
    //redireccionando a donde queremos pero hay q poner el objeto en el construstor
    // ya como esta creada la ventana en el navegador se llama a esa ventana
    this.router.navigate(['new-place'])
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }

}
