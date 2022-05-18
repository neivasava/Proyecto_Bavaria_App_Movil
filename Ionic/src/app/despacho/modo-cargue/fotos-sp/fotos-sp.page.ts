import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fotos-sp',
  templateUrl: './fotos-sp.page.html',
  styleUrls: ['./fotos-sp.page.scss'],
})
export class FotosSPPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  continuar(){
    this.router.navigateByUrl("d-despacho",{replaceUrl:true})
  }

}
