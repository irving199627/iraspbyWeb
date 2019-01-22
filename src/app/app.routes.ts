import { RouterModule, Routes } from '@angular/router';
import { GraficasComponent } from './components/graficas/graficas.component';
import { HumedadComponent } from './components/humedad/humedad.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { RaspComponent } from './components/rasp/rasp.component';


const app_routes: Routes = [
  { path: 'principal', component: PrincipalComponent },
  { path: 'temperatura', component: GraficasComponent},
  { path: 'rasp', component: RaspComponent},
  { path: 'humedad', component: HumedadComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'principal' }
];

export const app_routing = RouterModule.forRoot(app_routes);
