import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  items: Observable<any>;
  temp: Observable<any>;
  rasp: Observable<any>;
  baseRef = 'home/';
  graficas = 'grafica';
  tempValue;
  tempCPU;
  tempGPU;
  uso;
  HDDisp;
  HDUsado;
  RAMDisp;
  RAMUsado;
  label: Array<any> = [];
  data: Array<any> = [];
  humedad: Array<any> = [];


  constructor( public db: AngularFireDatabase ) {
   this.getDatos();
   this.getDatosRasp();
  }

  getDatos() {
    this.items = this.db.list(`${this.baseRef}sensores/temperatura/${this.graficas}`).valueChanges();
    this.items.subscribe(data => {
      data.forEach(element => {
        this.data.push({value: element.temp});
        this.humedad.push({value: element.humedad});
        this.label.push({label: element.label});
      });
    });
    this.temp = this.db.list(`${this.baseRef}sensores/temperatura`).valueChanges();
    this.temp.subscribe(temperatura => {
      this.tempValue = temperatura[2];
    });
  }

  getDatosRasp() {
    this.rasp = this.db.list(`${this.baseRef}raspInfo`).valueChanges();
    this.rasp.subscribe(data => {
      this.HDDisp = data[0];
      this.HDUsado = data[1];
      this.RAMDisp = data[2];
      this.RAMUsado = data[3];
      this.tempCPU = data[4];
      this.tempGPU = data[5];
      this.uso = data[6];
    });
  }
}
