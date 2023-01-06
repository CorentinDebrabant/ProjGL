import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilleComponent } from './view/accueille/accueille.component';
import { CatalogueComponent } from './view/catalogue/catalogue.component';
import { PageRechercheComponent } from './view/page-recherche/page-recherche.component';
import { PageNotFoundComponent } from './view/page-not-found/page-not-found.component';
import { DetailLivreComponent } from './view/detail-livre/detail-livre.component';
import { PagePanierComponent } from './view/page-panier/page-panier.component';
import { PageAdminComponent } from './view/page-admin/page-admin.component';
import { CommandeComponent } from './view/commande/commande.component';

const routes: Routes = [{ path:"", component:AccueilleComponent},
{ path:"catalogue", component:CatalogueComponent},
{ path:"panier", component:PagePanierComponent},
{ path:"search", component:PageRechercheComponent},
{ path : "admin", component : PageAdminComponent},
{ path : "commande", component : CommandeComponent},
{ path : "detail/:id", component : DetailLivreComponent},
{ path:"**", component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
