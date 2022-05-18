import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsPageModule } from 'src/app/components/components.module';
import { PipesModule } from './pipes/pipes.module';
import { ReactiveFormsModule } from "@angular/forms";

import { Camera } from "@ionic-native/camera";
import { InAppBrowser } from "@ionic-native/in-app-browser";

import { AngularFirestore, AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
// import { AngularFireDatabaseModule } from '@angular/fire/database';
// import { AngularFireModule } from '@angular/fire';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    ComponentsPageModule,
    HttpClientModule,
    PipesModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [
    
    {provide: RouteReuseStrategy, 
    useClass: IonicRouteStrategy},
    AngularFirestore
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
