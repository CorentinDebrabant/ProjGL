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
import { CommentairesComponent } from './view/commentaires/commentaires.component';
import { PageAdminComponent } from './view/page-admin/page-admin.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CatalogueComponent,
    ConnexionComponent,
    BarreRechercheComponent,
    PageRechercheComponent,
    PageNotFoundComponent,
    PagePanierComponent,
    CommentairesComponent,
    PageAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
