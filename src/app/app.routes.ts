import { Routes } from '@angular/router';
import { SportsComponent } from './sports/sports.component';
import { AddSportComponent } from './add-sport/add-sport.component';
import { UpdateSportComponent } from './update-sport/update-sport.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';

export const routes: Routes = [
  { path: 'produits', component: SportsComponent },
  { path: 'add-produit', component: AddSportComponent },
  { path: 'updateProduit/:id', component: UpdateSportComponent },
  { path: 'rechercheParNom', component: RechercheParNomComponent },
  { path: '', redirectTo: 'produits', pathMatch: 'full' }
];
