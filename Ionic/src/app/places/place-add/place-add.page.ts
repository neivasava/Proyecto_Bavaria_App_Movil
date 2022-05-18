import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-place-add',
  templateUrl: './place-add.page.html',
  styleUrls: ['./place-add.page.scss'],
})
export class PlaceAddPage implements OnInit {

  constructor(private placeService: PlacesService, private router: Router) { }

  ngOnInit() {
  }

  saveNewPlace(title: HTMLInputElement, imagenUrlurl: HTMLInputElement){
    // console.log(title.value, imagenUrlurl.value)
    // console.log("A cliqueado");
    this.placeService.addPlaces(title.value,imagenUrlurl.value);
    this.router.navigate(['/places']);

  }

}
