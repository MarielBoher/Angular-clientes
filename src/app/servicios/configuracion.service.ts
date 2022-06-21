import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Configuracion } from './../modelo/configuracion.model';
import { Injectable } from '@angular/core';

@Injectable()

export class ConfiguracionServicio{
  configuracionDoc: AngularFirestoreDocument<Configuracion>;
  configuracion: Observable<Configuracion>;



  //id unico de la coleccion de config

  id = '1';

  constructor(private db: AngularFirestore){}

  getConfiguracion(): Observable<Configuracion>{
    this.configuracionDoc = this.db.doc<Configuracion>(`configuracion/${this.id}`);
    this.configuracion = this.configuracionDoc.valueChanges() as Observable<Configuracion>;
    return this.configuracion;
}

modificarConfiguracion(configuracion: Configuracion) {
    this.configuracionDoc = this.db.doc<Configuracion>(`configuracion/${this.id}`);
    this.configuracionDoc.update(configuracion);
}
}


