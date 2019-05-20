import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DocumentoComponent } from '../documento/documento.component';
import { FormService } from '../services/form.service';
import { DocumentReference } from '@angular/fire/firestore';
import { R3ResolvedDependencyType } from '@angular/core/src/render3/jit/compiler_facade_interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;
  constructor(private modalService: NgbModal, 
    private formBuilder:FormBuilder,
    public activeModal: NgbActiveModal, 
    private formService: FormService) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      apellido: ['', Validators.required],
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required]
    })
  }

  handleModalFormularioClose(){
    alert('Se ha cerrado el formulario');
    }

}
