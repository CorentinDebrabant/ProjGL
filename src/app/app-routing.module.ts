import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatalogueComponent } from './view/catalogue/catalogue.component';
import { ConnexionComponent } from './view/connexion/connexion.component';
import { PageRechercheComponent } from './view/page-recherche/page-recherche.component';
import { PageNotFoundComponent } from './view/page-not-found/page-not-found.component';
import { PagePanierComponent } from './view/page-panier/page-panier.component';

const routes: Routes = [{ path:"", component:CatalogueComponent},
{ path:"catalogue", component:CatalogueComponent},
{ path:"panier", component:PagePanierComponent},
{ path:"search", component:PageRechercheComponent},
{ path:"connect", component:ConnexionComponent},
{ path:"**", component:PageNotFoundComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
