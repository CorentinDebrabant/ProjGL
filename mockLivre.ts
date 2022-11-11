import { Livre } from "./Livre";

export class mockLivre {
  mockLivre: Livre[] = [];

  constructor() {
    this.mockLivre.push(new Livre("Corentin","Surnaturel",3.5,"00000","path.jpg","Le loup blanc"));
    this.mockLivre.push(new Livre("Ismael", "Fantastique", 5.5, "0001", "imagepathIsmael.jpg","Le renard de combat"));
  }

  public getLivres() {
    return this.mockLivre;
  }

  public delete(l: Livre) {
    const index: number = this.mockLivre.indexOf(l);
    if (index !== -1) {
      this.mockLivre.splice(index, 1);
    }
  }

  public push(l: Livre) {
    this.mockLivre.push(l);
  }
}
