import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(filtroArreglo: any, texto: string): any {
    // si es vacio no aplique filtro
    if(texto === ''){
      return filtroArreglo;
    }

    texto = texto.toLowerCase();
    console.log('pipes texto ', texto);

    // returna un verdadero ofalso si coincide con el contenido del arreglo
    return filtroArreglo.filter(item=>{
      return item.Load_ID
          .toLowerCase().includes(texto);
          
          
    })
     
  }

}
