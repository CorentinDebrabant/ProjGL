import { Injectable } from '@angular/core';
import { Livre } from "./livre";
import { Utilisateur } from './utilisateur';

@Injectable({
  providedIn: 'root'
})
export class BDService {
  mockLivre: Livre[] = [];
  mockUser: Utilisateur[] = [];

  constructor() {
    this.pushLivre(new Livre("Corentin","Surnaturel",3.5,"00000","path.jpg","Le loup blanc"));
    this.pushLivre(new Livre("Ismael", "Fantastique", 5.5, "0001", "imagepathIsmael.jpg","Le renard de combat"));
    this.pushLivre(new Livre("J.R.R Tolkien","Fantasy",0,"0123456789","...","Seigneur des anneau"));
    this.mockUser.push(new Utilisateur("Plop","Plop@Plop",0,"Plop"));
    this.mockUser.push(new Utilisateur("Gens","Gens@Bon",0,"BonAnnee"));
    this.mockUser.push(new Utilisateur("Arg","Arg@gmail.com",0,"Arg"));
  }

  public getLivres() {
    return this.mockLivre;
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

  public connect(mdp : string, id : string) : Utilisateur | undefined
  {
    let ret : Utilisateur | undefined;
    for(let u of this.mockUser)
    {
        if(mdp==u.getMdp() && id==u.getIdentifiant())
        {
          ret=u;
        }
    }
    return ret;
  }

}
