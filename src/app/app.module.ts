import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogueComponent } from './view/catalogue/catalogue.component';
import { ConnexionComponent } from './view/connexion/connexion.component';
import { BarreRechercheComponent } from './view/barre-recherche/barre-recherche.component';
import { PageRechercheComponent } from './view/page-recherche/page-recherche.component';
import { PageNotFoundComponent } from './view/page-not-found/page-not-found.component';

import { PagePanierComponent } from './view/page-panier/page-panier.component';
import { DetailLivreComponent } from './view/detail-livre/detail-livre.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogueComponent,
    ConnexionComponent,
    BarreRechercheComponent,
    PageRechercheComponent,
    PageNotFoundComponent,
    PagePanierComponent,
    DetailLivreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
