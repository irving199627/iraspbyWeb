import { Component, OnInit } from '@angular/core';
import { CargaDatosService } from '../../services/carga-datos.service';

@Component({
  selector: 'app-rasp',
  templateUrl: './rasp.component.html',
  styles: []
})
export class RaspComponent implements OnInit {


  constructor( public _cds: CargaDatosService ) {

}

  ngOnInit() {
  }

}
