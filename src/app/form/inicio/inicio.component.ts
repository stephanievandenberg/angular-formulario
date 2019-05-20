import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormularioComponent } from '../formulario/formulario.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  clickComenzar(){
    const modal = this.modalService.open(FormularioComponent);
    modal.result.then(
      this.handleModalFormularioClose.bind(this),
      this.handleModalFormularioClose.bind(this)
   )
  }

handleModalFormularioClose(){
  alert('Se ha cerrado el formulario');
  }
}

