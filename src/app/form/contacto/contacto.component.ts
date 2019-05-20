import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-formulario',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  formulario: FormGroup;
  constructor(private modalService: NgbModal, 
    private formBuilder:FormBuilder,
    public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      direccion: ['', Validators.required],
      ciudad: ['', Validators.required],
      pais: ['', Validators.required],
      celular: ['', Validators.required],
      contacto_emergencia: ['', Validators.required],
      numero_contacto: ['', Validators.required]
    })
  }
  clickSiguiente(){
    const modal = this.modalService.open(ContactoComponent);
    modal.result.then(
      this.handleModalFormularioClose.bind(this),
      this.handleModalFormularioClose.bind(this)
   )
  }

  handleModalFormularioClose(){
    alert('Se ha cerrado el formulario');
    }

}
