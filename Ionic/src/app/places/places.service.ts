import { Injectable } from '@angular/core';
import { PlaceInterface } from "./place.model";

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor() { }

    //hereda de la interfaz donde estan especificadas variables
  private placesDatos: PlaceInterface[] = [
    {
      id: '1',
    title:'Torre ifeil',
    imagenUrl: 'https://www.toureiffel.paris/sites/default/files/actualite/image_principale/vue_depuisjardins_webbanner.jpg',
    comments:['Awesone place', 'Wonderful experience']
    },

    {
      id: '2',
    title:'Estatua libertad', 
    imagenUrl: 'https://www.turismonuevayork.com/wp-content/uploads/2014/09/La-Estatua-de-la-Libertad-en-Nueva-York-760x500.jpg',
    comments:['Awesone place', 'Wonderful experience']
    },

    {
      id: '3',
    title:'Torres Gemelas', 
    imagenUrl: 'https://www.eluniverso.com/resizer/UUN53-fCGvCVrZRtP75ectpYrvo=/993x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/27SG6N7WM5GLTIZGSRZ6KPAXWY.jpg',
    comments:[]
    }
    

  ];
  
  //listar lugares
  getPlaces(){
      return [...this.placesDatos]
  }
  // listar un lugar, pedir el id para buscar
  //retornar un objeto
  //comparar el q hay con el q llega
  getPlace1(placesId: string){
    return {
      ...this.placesDatos.find(place => {
        return place.id === placesId
      })
    }
  }

  //agregar lugares 
  //hay q recibir lo q queremos agregar
  addPlaces(title, imagenUrl){
    this.placesDatos.push({
      id: this.placesDatos.length + 1 + "" ,
      title,
      imagenUrl,
      comments: []
    });

  }

  // buscar filtrar y condicion q si el q llega con el q esta coindiden
  // coincide no enviarlo al arreglo general
  deletePlaces(placesId){
    this.placesDatos = this.placesDatos.filter( place =>{
      return place.id !== placesId
    });
  }


}
