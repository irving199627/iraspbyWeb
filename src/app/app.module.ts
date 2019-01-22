import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/share/navbar/navbar.component';

import { ChartsModule } from 'ng2-charts';

// Components
import { GraficasComponent } from './components/graficas/graficas.component';
import { HumedadComponent } from './components/humedad/humedad.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { RaspComponent } from './components/rasp/rasp.component';

import { app_routing } from './app.routes';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';

// Servicios
import { FirebaseService } from './services/firebase.service';
import { CargaDatosService } from './services/carga-datos.service';

// Plugins
import { FusionChartsModule } from 'angular-fusioncharts';
import FusionCharts from 'fusioncharts/core';
import scrollline2d from 'fusioncharts/viz/scrollline2d';
import thermometer from 'fusioncharts/viz/thermometer';
import hled from 'fusioncharts/viz/hled';
import angulargauge from 'fusioncharts/viz/angulargauge';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';

// Include Below Snippet
FusionChartsModule.fcRoot(FusionCharts, scrollline2d, thermometer, hled, angulargauge, FusionTheme);


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GraficasComponent,
    HumedadComponent,
    PrincipalComponent,
    RaspComponent,
  ],
  imports: [
    BrowserModule,
    app_routing,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    ChartsModule,
    FusionChartsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [FirebaseService, CargaDatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
