import { Injectable } from '@angular/core';
import { Livre } from "./livre";
import { Utilisateur } from './utilisateur';
import { Observable, of } from 'rxjs';
import { Panier } from './panier';
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

 // Create more books inspired by real books

    this.pushLivre(new Livre("Corentin","Surnaturel","00000","../assets/loup.jpg","Le loup blanc",10.2,"Le loup blanc, vivant seul dans la montagne, se prépare à..."));
    this.pushLivre(new Livre("Ismael", "Fantastique", "0001", "../assets/renard.jpg","Le renard de combat",15.3,"Dans une école de renards ninjas, une jeune pousse cherche à se démarquer des autres animaux "));
    this.pushLivre(new Livre("J.R.R Tolkien","Fantasy","0123456789","../assets/anneaux.jpg","Seigneur des anneau",25.99,"Cabane d'un hobbit..."));


    this.mockLivre[0].addAvis(new Avis("Plop",new Date(2022,11,5),"Bof",1));
    this.mockLivre[0].addAvis(new Avis("Plop",new Date(2022,11,6),"Le meilleur livre que j'ai jamais lu",5));
    this.mockLivre[0].addAvis(new Avis("Plop",new Date(2022,11,7),"Nul",0));
    this.mockLivre[1].addAvis(new Avis("Gens",new Date(2021,10,8),"Correct",3));
    this.mockLivre[2].addAvis(new Avis("Gens",new Date(2020,8,2),"Génial",4.3));
    this.mockUser.push(new Utilisateur("Plop","Plop@Plop",0,"Plop"));
    this.mockUser.push(new Utilisateur("Gens","Gens@Bon",0,"BonAnnee"));
    this.mockUser.push(new Utilisateur("Arg","Arg@gmail.com",0,"Arg"));
    this.panier = new Panier();
    //this.panier.ajouteArticle(this.mockLivre[0]);
    //this.panier.ajouteArticle(this.mockLivre[2]);
    this.mockCommande = new Map();

    //localStorage.clear();
    if(localStorage.getItem("panier")!=null)
    {
      this.panier = new Panier();
      //Ajoute les livres du panier dans le panier
      let panier = JSON.parse(localStorage.getItem("panier")!);
      //Pour chaque livre dans le panier, on l'ajoute au panier
      for(let i=0;i<panier.listeArticle.length;i++)
      {
        let livre = new Livre(panier.listeArticle[i].auteur,panier.listeArticle[i].theme,panier.listeArticle[i].isbn,panier.listeArticle[i].imageURI,panier.listeArticle[i].titre,panier.listeArticle[i].prix,panier.listeArticle[i].resume );
        this.addToPanier(livre);
      }
    }
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
    localStorage.removeItem("panier");
    localStorage.setItem("panier",JSON.stringify(this.panier));
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
