import { Injectable } from '@angular/core';
import { Livre } from "./livre";
import { Utilisateur } from './utilisateur';
import { Observable, of } from 'rxjs';
import { Panier } from './panier';
import { InvokeFunctionExpr } from '@angular/compiler';
import { Avis } from './avis';

@Injectable({
  providedIn: 'root'
})
export class BDService {
  mockLivre: Livre[] = [];
  listeActuelle : Livre[] = [];
  mockUser: Utilisateur[] = [];
  connectedUser: Utilisateur | undefined;
  panier : Panier;
  mockCommande : Map<Utilisateur, Panier[]>;
  isCatalogueOpen : boolean = false;
  savingListeActuel : boolean = false;

  constructor() {
    this.pushLivre(new Livre("Corentin","Surnaturel","00000","../assets/loup.jpg","Le loup blanc",10.2,"Le loup blanc, vivant seul dans la montagne, se prépare à..."));
    this.pushLivre(new Livre("Ismael", "Fantastique", "0001", "../assets/renard.jpg","Le renard de combat",15.3,"Dans une école de renards ninjas, une jeune pousse cherche à se démarquer des autres animaux "));
    this.pushLivre(new Livre("J.R.R Tolkien","Fantasy","0123456789","../assets/anneaux.jpg","Seigneur des anneaux",25.99,"Cabane d'un hobbit..."));
    this.pushLivre(new Livre("J.R.R Tolkien","Fantasy","1234567891","../assets/anneaux2.jpg","Seigneur des anneaux 2",25.99,"Plus aucune cabane de hobbit..."));
    this.pushLivre(new Livre("J.R.R Tolkien","Fantasy","1234567891","../assets/anneaux3.jpg","Seigneur des anneaux 3",25.99,"Beaucoup trop loin des cabanes de hobbit..."));
    this.pushLivre(new Livre("Charly","Comedie","7410","../assets/star.jpg","Stary",399.99,"Petite étoile à gros chiffres."));
    this.pushLivre(new Livre("J.K Rowling","Fantasy","6511111","../assets/harry-potter1.jpg","Harry Potter",16.99,"Un jeune garçon décide d'intégrer une école spéciale..."));
    this.pushLivre(new Livre("J.K Rowling","Fantasy","6522222","../assets/harry-potter2.jpg","Harry Potter II",16.99,"Un jeune garçon décide de rester dans l'école spéciale..."));
    this.pushLivre(new Livre("J.K Rowling","Fantasy","6533333","../assets/harry-potter3.jpg","Harry Potter III",16.99,"Un ado décide de tout faire pour rester à l'école spécial..."));
    this.pushLivre(new Livre("J.K Rowling","Fantasy","6544444","../assets/harry-potter4.jpg","Harry Potter IV",16.99,"Un ado décide de faire des épreuves spéciale..."));
    this.pushLivre(new Livre("J.K Rowling","Fantasy","6555555","../assets/harry-potter5.jpg","Harry Potter V",16.99,"Un ado décide de défier un ordre spécial..."));
    this.pushLivre(new Livre("J.K Rowling","Fantasy","6566666","../assets/harry-potter6.jpg","Harry Potter VI",16.99,"Un jeune homme décide de torturer son prof spécial..."));
    this.pushLivre(new Livre("J.K Rowling","Fantasy","6577777","../assets/harry-potter7.jpg","Harry Potter VII",16.99,"Un jeune homme décide de défier le vieux spécial..."));
    this.mockLivre[0].addAvis(new Avis("Plop",new Date(2022,11,5),"Bof",1));
    this.mockLivre[0].addAvis(new Avis("Plop",new Date(2022,11,6),"Le meilleur livre que j'ai jamais lu",5));
    this.mockLivre[0].addAvis(new Avis("Plop",new Date(2022,11,7),"Nul",0));
    this.mockLivre[1].addAvis(new Avis("Gens",new Date(2021,10,8),"Correct",3));
    this.mockLivre[2].addAvis(new Avis("Gens",new Date(2020,8,2),"Génial",4.3));
    this.mockLivre[3].addAvis(new Avis("Arg",new Date(2021,7,2),"Pas mal",3.3));
    this.mockLivre[4].addAvis(new Avis("Gens",new Date(2021,9,2),"Cool",4.0));
    this.mockLivre[5].addAvis(new Avis("Arg",new Date(2020,2,2),"Ok",2.7));
    this.mockLivre[6].addAvis(new Avis("Arg",new Date(2021,4,2),"Correct",2.3));
    this.mockLivre[7].addAvis(new Avis("Plop",new Date(2022,6,2),"Sympa",4.5));
    this.mockLivre[8].addAvis(new Avis("Arg",new Date(2022,8,2),"Vraiment cool",4.7));
    this.mockLivre[9].addAvis(new Avis("Plop",new Date(2022,7,6),"Sympa",4.5));
    this.mockLivre[10].addAvis(new Avis("Plop",new Date(2022,7,7),"Sympa",4.5));
    this.mockLivre[11].addAvis(new Avis("Plop",new Date(2022,7,10),"Sympa",4.5));
    this.mockLivre[12].addAvis(new Avis("Plop",new Date(2022,8,2),"Super conclusion",5));
    this.mockUser.push(new Utilisateur("Plop","Plop@Plop",0,"Plop"));
    this.mockUser.push(new Utilisateur("Gens","Gens@Bon",0,"BonAnnee"));
    this.mockUser.push(new Utilisateur("Arg","Arg@gmail.com",0,"Arg"));
    this.panier = new Panier();
    this.panier.ajouteArticle(this.mockLivre[0]);
    this.panier.ajouteArticle(this.mockLivre[2]);
    this.mockCommande = new Map();

    let panier1 = new Panier();
    panier1.ajouteArticle(this.mockLivre[3]);
    panier1.ajouteArticle(this.mockLivre[4]);
    panier1.ajouteArticle(this.mockLivre[7]);
    let commandes1: Panier[] = [];
    commandes1.push(panier1);
    
    let panier2 = new Panier();
    panier2.ajouteArticle(this.mockLivre[0]);
    panier2.ajouteArticle(this.mockLivre[5]);
    let commandes2: Panier[] = [];
    commandes2.push(panier2);

    this.mockCommande.set(this.mockUser[0], commandes1);
    this.mockCommande.set(this.mockUser[1], commandes2);
  }

  public setListeActuelle(liste : Livre[])
  {
    this.listeActuelle=liste;
    if(this.isCatalogueOpen)
    {
      this.savingListeActuel=true;
    }
  }

  public videListeActuelle()
  {
    if(!this.savingListeActuel)
      this.listeActuelle = [];
    this.isCatalogueOpen = false;
    this.savingListeActuel = false;
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
    this.isCatalogueOpen = true;
    if(this.listeActuelle.length!=0)
    {
      return of(this.listeActuelle);
    }
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
          if(livre.getNote()<avis)
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

  public getCommandes() : Observable<Panier[]|undefined>
  {
    if(this.connectedUser!=undefined)
      return of(this.mockCommande.get(this.connectedUser));
    else
      return of(undefined);
  }

}
