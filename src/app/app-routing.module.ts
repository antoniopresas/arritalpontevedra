
// Rutas
import { AboutComponent } from './pages/about/about.component';
import { LocationComponent } from './pages/location/location.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { BanoComponent } from './pages/bano/bano.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'cocina', component: HomeComponent},
  {path: 'bano', component: BanoComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'encuentranos', component: LocationComponent},
  {path: 'sobre-nosotros', component: AboutComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'cocina'},
  {path: '', pathMatch: 'full', redirectTo: 'cocina'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
