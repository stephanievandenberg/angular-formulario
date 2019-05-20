import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './form/inicio/inicio.component';
import { FormularioComponent } from './form/formulario/formulario.component';

import{AngularFireModule} from '@angular/fire'
import {AngularFirestoreModule} from '@angular/fire/firestore'
import {environment} from 'src/environments/environment'

import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import{ReactiveFormsModule} from '@angular/forms';
import { DocumentoComponent } from './form/documento/documento.component';
import { ContactoComponent } from './form/contacto/contacto.component'

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    FormularioComponent,
    DocumentoComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [FormularioComponent]
})
export class AppModule { }
