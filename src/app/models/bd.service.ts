import { Injectable } from '@angular/core';
import { Livre } from "./livre";

@Injectable({
  providedIn: 'root'
})
export class BDService {
  mockLivre: Livre[] = [];

  constructor() {
    this.pushLivre(new Livre("Corentin","Surnaturel",3.5,"00000","path.jpg","Le loup blanc"));
    this.pushLivre(new Livre("Ismael", "Fantastique", 5.5, "0001", "imagepathIsmael.jpg","Le renard de combat"));
    this.pushLivre(new Livre("J.R.R Tolkien","Fantasy",0,"0123456789","...","Seigneur des anneau"));
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

}
