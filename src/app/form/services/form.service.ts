import { Injectable } from '@angular/core';
import { Form } from 'src/app/form/models/form';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ViewModel } from '../models/view-model';
 
@Injectable({
  providedIn: 'root'
})
export class FormService {
 
  constructor(private db: AngularFirestore) { }
 
  private formCollectionName = 'forms';
 
  getForm(): Observable<firebase.firestore.QuerySnapshot> {
    return this.db.collection<Form>(this.formCollectionName, ref => ref.orderBy('lastModifiedDate', 'desc')).get();
  }
  saveForm(form: Form): Promise<DocumentReference> {
    return this.db.collection(this.formCollectionName).add(form);
  }
//  editForm(form: ViewModel): Promise<void>{
//    return this.db.collection(this.formCollectionName).doc(form).update(form);
// }
  editFormPartial(id: string, obj: Object): Promise<void>{
    return this.db.collection(this.formCollectionName).doc(id).update(obj);
  }
//  deleteForm(idForm: string): Promise<void>{
//    return this.db.collection(this.formCollectionName).doc(form).delete();
//  }
}