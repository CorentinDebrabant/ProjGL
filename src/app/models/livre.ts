import { Avis } from "./avis";

export class Livre{
  private auteur: string;
  private theme: string;
  private avis: Avis[];
  private isbn: string;
  private titre: string;
  private imageURI: string;
  private prix: number;
  private resume:string;
  private note:number;



  constructor(
    Auteur: string,
    Theme: string,
    ISBN: string,
    ImageURI: string,
    titre:string,
    prix:number,
    resume:string
  ) {
    this.auteur = Auteur;
    this.theme = Theme;
    this.avis = [];
    this.isbn = ISBN;
    this.titre=titre;
    this.imageURI = ImageURI;
    this.prix=prix;
    this.resume=resume;
    this.note = 0;
  }


  public getAuteur(): string {
    return this.auteur;
  }

  public getResume():string{
    return this.resume;
  }

  public setAuteur(auteur: string): void {
    this.auteur = auteur;
  }

  public getTheme(): string {
    return this.theme;
  }

  public setTheme(theme: string): void {
    this.theme = theme;
  }

  public getAvis(): Avis[] {
    return this.avis;
  }

  public calculNote()
  {
    let sum = 0;
    for(let a of this.avis)
    {
      sum+=a.getNote();
    }
    this.note = sum / this.avis.length;
  }

  public addAvis(avis : Avis)
  {
    this.avis.push(avis);
    this.calculNote();
  }

  public getNote() : number{
    return this.note;
  }

  public getIsbn(): string {
    return this.isbn;
  }

  public setIsbn(isbn: string): void {
    this.isbn = isbn;
  }

  public getTitre(): string {
    return this.titre;
  }

  public setTitre(titre: string): void {
    this.titre = titre;
  }

  public setResume(resume: string): void{
    this.resume=resume;
  }

  public getimageURI(): string {
    return this.imageURI;
  }
  public setimageURI(url: string) {
    this.imageURI = url;
  }

  public getPrix(): number {
    return this.prix;
  }
  public setPrix(prix: number) {
    this.prix = prix;
  }

}
