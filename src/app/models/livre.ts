export class Livre{
  private auteur: string;
  private theme: string;
  private avis: number;
  private isbn: string;
  private titre: string;
  private imageURI: string;
  private prix: number;
  private resume:string;



  constructor(
    Auteur: string,
    Theme: string,
    Avis: number,
    ISBN: string,
    ImageURI: string,
    titre:string,
    prix:number,
    resume:string
  ) {
    this.auteur = Auteur;
    this.theme = Theme;
    this.avis = Avis;
    this.isbn = ISBN;
    this.titre=titre;
    this.imageURI = ImageURI;
    this.prix=prix;
    this.resume=resume;
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
