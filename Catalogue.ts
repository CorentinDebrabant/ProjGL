import { Livre } from "./Livre";
import { mockLivre } from "./mockLivre";
export class Catalogue {
  public listeLivre;

  constructor() {
    this.listeLivre = new mockLivre();
  }

  public AjoutLivre(l: Livre) {
    this.listeLivre.push(l);
  }

  public SupprimeLivre(l: Livre) {
    this.listeLivre.delete(l);
  }

  
}
