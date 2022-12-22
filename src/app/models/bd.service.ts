import { Injectable } from '@angular/core';
import { Livre } from "./livre";
import { Utilisateur } from './utilisateur';
import { Observable, of } from 'rxjs';
import { Panier } from './panier';
import { InvokeFunctionExpr } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class BDService {
  mockLivre: Livre[] = [];
  mockUser: Utilisateur[] = [];
  connectedUser: Utilisateur | undefined;
  panier : Panier;
  mockCommande : Map<Utilisateur, Panier[]>;

  constructor() {
    this.pushLivre(new Livre("Corentin","Surnaturel",3.5,"00000","path.jpg","Le loup blanc",10.2));
    this.pushLivre(new Livre("Ismael", "Fantastique", 4.9, "0001", "imagepathIsmael.jpg","Le renard de combat",15.3));
    this.pushLivre(new Livre("J.R.R Tolkien","Fantasy",0,"0123456789","...","Seigneur des anneau",25.99));
    this.mockUser.push(new Utilisateur("Plop","Plop@Plop",0,"Plop"));
    this.mockUser.push(new Utilisateur("Gens","Gens@Bon",0,"BonAnnee"));
    this.mockUser.push(new Utilisateur("Arg","Arg@gmail.com",0,"Arg"));
    this.panier = new Panier();
    this.mockCommande = new Map();
  }

  public deleteLivre(l: Livre) {
    const index: number = this.mockLivre.indexOf(l);
    if (index !== -1) {
      this.mockLivre.splice(index, 1);
    }
  }

  public pushLivre(l: Livre) {
    this.mockLivre.push(l);
  }

  public connect(mdp : string, id : string) : Observable<Utilisateur | undefined>
  {
    let ret : Utilisateur | undefined;
    for(let u of this.mockUser)
    {
        if(mdp==u.getMdp() && id==u.getIdentifiant())
        {
          ret=u;
        }
    }
    this.connectedUser = ret;
    return of(ret);
  }

  public inscrire(id: string, email: string, mdp: string) : Observable<Utilisateur>
  {
    let user : Utilisateur = new Utilisateur(id,email,0,mdp);
    this.mockUser.push(user);
    this.connectedUser = user;
    return of(user);
  }

  public getConnectedUser() : Observable<Utilisateur | undefined>
  {
    return of(this.connectedUser);
  }

  public addToPanier(livre: Livre)
  {
    this.panier.ajouteArticle(livre);
  }

  public deleteFromPanier(livre : Livre)
  {
    this.panier.supprimeArticle(livre);
  }

  public getPanier() : Observable<Panier>
  {
    return of(this.panier);
  }

  public getCatalogue() : Observable<Livre[]>
  {
    return of(this.mockLivre);
  }

  public commande()
  {
    if(this.panier.nombreArticle != 0 && this.connectedUser!=undefined)
    {
      let listCommandes:Panier[] | undefined = this.mockCommande.get(this.connectedUser);
      if(listCommandes!=undefined)
      {
        listCommandes.push(this.panier);
        this.mockCommande.set(this.connectedUser,listCommandes);
      }
      else{
        this.mockCommande.set(this.connectedUser,[this.panier]);
      }
      this.panier=new Panier();
    }
  }

  public getLivreByName(search:string) : Observable<Livre[]>
  {
    let livres:Livre[]=[];
    for(let livre of this.mockLivre)
    {
      if(livre.getTitre().toLowerCase().indexOf(search.toLowerCase())>=0)
      {
        livres.push(livre);
      }
    }
    return of(livres);
  }

  public getLivreRecherche(titre:string | undefined, auteur:string | undefined, theme:string | undefined, isbn:string | undefined, avis:number | undefined, prixmin:number | undefined, prixmax:number | undefined) : Observable<Livre[]>
  {
    let livres:Livre[]=[];
    for(let livre of this.mockLivre)
    {
      let get:boolean = true;
      if(isbn!=undefined)
      {
        if(livre.getIsbn().toLowerCase().localeCompare(isbn.toLowerCase())!=0)
        {
          get=false;
        }
      }
      else
      {
        if(titre!=undefined)
        {

          if(livre.getTitre().toLowerCase().indexOf(titre.toLowerCase())==-1)
          {
            get=false;
          }
        }
        if(get && auteur!=undefined)
        {
          if(livre.getAuteur().toLowerCase().indexOf(auteur.toLowerCase())==-1)
          {
            get=false;
          }
        }
        if(get && theme!=undefined)
        {
          if(livre.getTheme().toLowerCase().localeCompare(theme.toLowerCase())!=0)
          {
            get=false;
          }
        }

        if(get && avis!=undefined)
        {
          if(livre.getAvis()<avis)
          {
            get=false;
          }
        }
        if(get && prixmin!=undefined)
        {
          if(livre.getPrix()<prixmin)
          {
            get=false;
          }
        }
        if(get && prixmax!=undefined)
        {
          if(livre.getPrix()>prixmax)
          {
            get=false;
          }
        }
      }
      if(get)
      {
        livres.push(livre);
      }
    }
    return of(livres);
  }

  public getPrixMaxCatalogue() : Observable<number>
  {
    let val : number = 0;
    for(let livre of this.mockLivre)
    {
      if(livre.getPrix()>val)
      {
        val=livre.getPrix();
      }
    }
    return of(val);
  }

}
