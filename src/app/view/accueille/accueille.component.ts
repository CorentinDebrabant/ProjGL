import { Component, OnInit } from '@angular/core';
import { Livre } from "../../models/livre";
import { Panier } from "../../models/panier";
import { BDService } from "../../models/bd.service";

@Component({
  selector: 'app-accueille',
  templateUrl: './accueille.component.html',
  styleUrls: ['./accueille.component.css']
})
export class AccueilleComponent implements OnInit {

  public listeLivre : Livre[] = [];
  public listeRecommendations : Livre[] | undefined = undefined;
  public 

  alreadyBought(livre: Livre): boolean
  {
    if (this.bdServ.getConnectedUser() != undefined)
    {
      let commandes: Panier[] | undefined = [];
      this.bdServ.getCommandes().subscribe(c => commandes = c);
      if (commandes == undefined)
        return false;
      for (let i = 0; i < commandes.length; i++) {
        let panier: Panier = commandes[i];
        for (let j = 0; j < panier.getnombreArticle(); j++) {
          if (panier.listeArticle[j] == livre)
            return true;
        }
      }
    }
    return false;
  }
  getStringMatchingScore(input: string, toMatch: string): number
  {
    let inputWords = input.split(' ');
    let toMatchWords = toMatch.split(' ');

    let matches = toMatchWords.filter(word => inputWords.some(inputWord => word.toLowerCase().includes(inputWord.toLowerCase())));

    return matches.length / inputWords.length;
  }
  getMatchingScore(inputLivre: Livre, livre: Livre): number
  {
    let auteur = this.getStringMatchingScore(inputLivre.getAuteur(), livre.getAuteur());
    let titre = this.getStringMatchingScore(inputLivre.getTitre(), livre.getTitre());
    let resume = this.getStringMatchingScore(inputLivre.getResume(), livre.getResume());

    return auteur * 0.5 + titre * 0.3 + resume * 0.2;
  }

  livreScore(livre: Livre): number
  {
    let matchingScore: number = 0;
    let matchingTheme: number = 0;
    let note: number = 0;
    if (this.bdServ.getConnectedUser() != undefined)
    {
      let commandes: Panier[] | undefined = [];
      this.bdServ.getCommandes().subscribe(c => commandes = c);
      if (commandes != undefined)
      {
        for (let i = 0; i < commandes.length; i++)
        {
          let panier: Panier = commandes[i];
          for (let j = 0; j < panier.getnombreArticle(); j++) {
            if (panier.listeArticle[j].getTheme() == livre.getTheme())
            {
              matchingTheme += 1;
            }
            matchingScore += this.getMatchingScore(livre, panier.listeArticle[j]);
          }
        }
      }
    }

    note = livre.getNote();

    return matchingScore * 0.5 + matchingTheme * 0.2 + note * 0.3;
  }

  computeRecommendations(livres: Livre[]): Livre[]
  {
    let result: Livre[] = [];

    for (let i = 0; i < livres.length; i++)
    {
      if (!this.alreadyBought(livres[i]))
        result.push(livres[i]);
    }

    result.sort((a, b) => {
      let scoreA = this.livreScore(a);
      let scoreB = this.livreScore(b);
      return scoreB - scoreA;
    });

    result.splice(5);

    console.log("Set recommendations for current user");
    console.log(result);
    this.bdServ.setRecommendations(result);

    return result;
  }

  getCatalogue()
  {
    this.bdServ.getCatalogue().subscribe(catalogue => this.listeLivre = catalogue);
  }

  getRecommendations()
  {
    this.bdServ.getRecommandations().subscribe(recommendations => this.listeRecommendations = recommendations);
    if (this.listeRecommendations == undefined)
    {
      console.log("Had no premade recommendations for user");
      this.getCatalogue();
      this.listeRecommendations = this.computeRecommendations(this.listeLivre);
    }
    else
      console.log("Recommendations already made!");
  }

  constructor(private bdServ : BDService) { }

  debug(index:number){
    if (this.listeRecommendations != undefined)
      console.log(this.listeRecommendations[index]);
  }

  ngOnInit(): void {
    this.getRecommendations();
  }
}
