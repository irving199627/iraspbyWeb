import { Component,  } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-humedad',
  templateUrl: './humedad.component.html',
  styles: []
})
export class HumedadComponent {
  dataSource: Object;
  constructor( public _fbs: FirebaseService ) {


    setTimeout(() => {
      this.grafica();
    setInterval(() => {
      this.grafica();
    }, 1000);
    }, 2000);

    }

    grafica() {
      this.dataSource = {
        chart: {
          caption: 'Humedad',
          showvalues: 0,
          numvisibleplot: 12,
          theme: 'candy'
        },
        categories: [
          {
            category: this._fbs.label
          }
        ],
        dataset: [
          {
            data: this._fbs.humedad
          }
        ]
      };
  }
  }
