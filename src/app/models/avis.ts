export class Avis {
  private auteur : string;
  private date : Date;
  private commentaire : string;
  private note : number;

  constructor(auteur : string, date : Date, commentaire : string, note : number)
  {
    this.auteur = auteur;
    this.note = note;
    this.commentaire = commentaire;
    this.date = date;
  }

  public getAuteur() : string
  {
    return this.auteur;
  }

  public getDate() : Date
  {
    return this.date;
  }

  public getNote() : number
  {
    return this.note;
  }

  public getCommentaire() : string
  {
    return this.commentaire;
  }
}
