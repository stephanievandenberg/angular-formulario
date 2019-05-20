import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactoComponent } from '../contacto/contacto.component';

@Component({
  selector: 'app-formulario',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.css']
})
export class DocumentoComponent implements OnInit {

  formulario: FormGroup;
  constructor(private modalService: NgbModal, 
    private formBuilder:FormBuilder,
    public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      tipo_documento: ['', Validators.required],
      documento: ['', Validators.required],
      lugar_expedicion: ['', Validators.required],
      fecha_expedicion: ['', Validators.required]
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
