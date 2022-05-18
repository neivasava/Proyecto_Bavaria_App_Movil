

import { Component, OnInit } from '@angular/core';
// para poder llamar los datos hay q llamar al enrutador e importarlo
import { ActivatedRoute, Router } from "@angular/router";
import { PlaceInterface } from '../place.model';
import { PlacesService } from '../places.service';
import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-places-details',
  templateUrl: './places-details.page.html',
  styleUrls: ['./places-details.page.scss'],
})
export class PlacesDetailsPage implements OnInit {

  //llamar la interface
  placeInterface: PlaceInterface;

  // el Router para obtener el id 

  constructor(private activateRouter: ActivatedRoute, private placesService: PlacesService, 
    private router: Router, private altertController: AlertController) { }

  ngOnInit() {
    // mostrar los datos q estan asociados a la ruta o url
    // paramMap => {} esto es recorrerlos
    this.activateRouter.paramMap.subscribe(paramMap => {
      //obtener el parametro id
      const recipeId = paramMap.get('placeId')
      this.placeInterface = this.placesService.getPlace1(recipeId)
      console.log(this.placeInterface);
    })
  }

  async deletePlaces() {
      // crear alerta cuando se elimine muestre ventana y elimine lugar
    const alertElement = await this.altertController.create({
      header: 'Esta seguro que quiere eliminar',
      buttons:[
        {
          text: 'Calcel',
          //este rol se encarga de si se le da clic por fuera de la ventana o 
          //otras posivilidades
          role: 'cancel'
        },
        {
          //cuando da clic en el boton
          text: 'Eliminar',
          handler: () => {
            this.placesService.deletePlaces(this.placeInterface.id);
            // al eliminar me redirecciona donde quiera
            this.router.navigate(['/places'])
            console.log(this.placesService.getPlaces())
          }
        }
      ]
    });

    // muestra por pantalla
    await alertElement.present();

    
  }

}
