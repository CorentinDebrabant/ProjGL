export class Utilisateur {
  private identifiant: string;
  private email: string;
  private panierActuel: number;
  private mdp:string;

  constructor(identifiant: string, email: string, panierActuel: number,mdp:string) {
    this.identifiant = identifiant;
    this.email = email;
    this.panierActuel = panierActuel;
    this.mdp=mdp;
  }

  public getIdentifiant(): string {
    return this.identifiant;
  }

  public setIdentifiant(identifiant: string): void {
    this.identifiant = identifiant;
  }

  public getEmail(): string {
    return this.email;
  }

  public setEmail(email: string): void {
    this.email = email;
  }

  public getPanierActuel(): number {
    return this.panierActuel;
  }

  public setPanierActuel(panierActuel: number): void {
    this.panierActuel = panierActuel;
  }
  public setMdp(mdp: string): void {
    this.mdp = mdp;
  }
}
