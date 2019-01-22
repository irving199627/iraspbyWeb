import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class CargaDatosService {
  tempCPU: Object;
  tempGPU: Object;
  HD: Object;
  RAM: Object;
  uso: Object;
  dataSource: Object;
  data: Object;
  constructor( public _fbs: FirebaseService ) {
    setTimeout(() => {
    this.temperaturaCPU();
    this.temperaturaGPU();
    this.DiskSpace();
    this.RAM_medidor();
    this.medidorUso();
    this.grafica();
    this.temperatura();
    setInterval(() => {
    this.temperaturaGPU();
    this.temperaturaCPU();
    this.DiskSpace();
    this.RAM_medidor();
    this.medidorUso();
    this.grafica();
    this.temperatura();
    }, 1000);
    }, 2000);
}

medidorUso() {
  this.uso = {
    chart: {
      caption: 'Uso de CPU (%)',
      theme: 'candy',
      showValue: 1
  },
  colorRange: {
    color: [{
      minValue: 0,
      maxValue: 50,
      code: '#62B58F'
    }, {
      minValue: 50,
      maxValue: 75,
      code: '#FFC533'
    }, {
      minValue: 75,
      maxValue: 100,
      code: '#F2726F'
    }]
  },
  dials: {
    dial: [{
      value: this._fbs.uso,
      toolText: '<b>$dataValue metric tonnes</b>'
        }]
      }
    };
  }


RAM_medidor() {
  this.RAM = {
    chart: {
      caption: 'Uso de la RAM (MB)',
      theme: 'candy',
      showValue: 1
  },
  colorRange: {
    color: [{
      minValue: 0,
      maxValue: 500,
      code: '#62B58F'
    }, {
      minValue: 500,
      maxValue: 750,
      code: '#FFC533'
    }, {
      minValue: 750,
      maxValue: 1000,
      code: '#F2726F'
    }]
  },
  dials: {
    dial: [{
      value: this._fbs.RAMUsado,
      toolText: '<b>$dataValue metric tonnes</b>'
        }]
      }
    };
  }

DiskSpace() {
  this.HD = {
    chart: {
      caption: 'Disco Duro en USO (G)',
      lowerLimit: 0,
      upperLimit: 16,
      lowerLimitDisplay: 'Min',
      upperLimitDisplay: 'Max',
      chartBottomMargin: 60,
      theme: 'candy'
      },
      colorRange: {
        color: [{
          minValue: 0,
          maxValue: 8,
          code: '#62B58F'
        }, {
          minValue: 8,
          maxValue: 12,
          code: '#FFC533'
        }, {
          minValue: 12,
          maxValue: 16,
          code: '#F2726F'
        }]
      },

      value: this._fbs.HDUsado,

  };
}
temperaturaCPU () {
  this.tempCPU = {
     chart: {
       caption: 'CPU',
       lowerLimit: 0,
       upperLimit: 10,
       numberSuffix: '°C',
       thmFillColor: '#29C3BE',
       plotToolText: 'CPU: <b>$datavalue</b> ',
       theme: 'candy'
       },
       value: this._fbs.tempCPU,
     };
 }

 temperaturaGPU () {
  this.tempGPU = {
     chart: {
       caption: 'GPU',
       lowerLimit: 0,
       upperLimit: 10,
       numberSuffix: '°C',
       thmFillColor: '#29C3BE',
       plotToolText: 'GPU: <b>$datavalue</b> ',
       theme: 'candy'
       },
       value: this._fbs.tempGPU,
     };
 }

 grafica() {
  this.dataSource = {
    chart: {
      caption: 'Temperatura',
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
        data: this._fbs.data
      }
    ]
  };
}
temperatura () {
this.data = {
  chart: {
    caption: 'Temperatura ambiente (actual)',
    lowerLimit: 0,
    upperLimit: 10,
    numberSuffix: '°C',
    thmFillColor: '#29C3BE',
    plotToolText: 'Temperatura: <b>$datavalue</b> ',
    theme: 'candy'
    },
    value: this._fbs.tempValue,
  };
}

}
