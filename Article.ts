import { Livre } from "./Livre";
export class Article extends Livre {

    private prix:number;

    public getPrix(): number {
        return this.prix;
    }

    public setPrix(prix: number): void {
        this.prix = prix;
    }

  constructor(
    Auteur: string,
    Theme: string,
    Avis: number,
    ISBN: string,
    ImageURI: string,
    prix:number
  ) {
    super(Auteur, Theme, Avis, ISBN, ImageURI);
    this.prix=prix;
  }

  
}
