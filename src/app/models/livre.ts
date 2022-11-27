export class Livre{
  private auteur: string;
  private theme: string;
  private avis: number;
  private isbn: string;
  private titre: string;
  private imageURI: string;
  private prix: number;



  constructor(
    Auteur: string,
    Theme: string,
    Avis: number,
    ISBN: string,
    ImageURI: string,
    titre:string,
    prix:number
  ) {
    this.auteur = Auteur;
    this.theme = Theme;
    this.avis = Avis;
    this.isbn = ISBN;
    this.titre=titre;
    this.imageURI = ImageURI;
    this.prix=prix;
  }


  public getAuteur(): string {
    return this.auteur;
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

  public getAvis(): number {
    return this.avis;
  }

  public setAvis(avis: number): void {
    this.avis = avis;
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
