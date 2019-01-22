import { Component, OnInit } from '@angular/core';
import { CargaDatosService } from '../../services/carga-datos.service';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styles: []
})
export class GraficasComponent implements OnInit {
  dataSource: Object;
  data: Object;


  constructor( public _cds: CargaDatosService ) {

    }

  ngOnInit() {
  }

}
