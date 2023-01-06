import { Component, OnInit } from '@angular/core';
import { Livre } from '../../models/livre';
import { Panier } from '../../models/panier';
import { BDService } from "../../models/bd.service";
import { Utilisateur } from '../../models/utilisateur';

@Component({
  selector: 'app-page-panier',
  templateUrl: './page-panier.component.html',
  styleUrls: ['./page-panier.component.css']
})
export class PagePanierComponent implements OnInit {

  public panier: Panier = new Panier();
  user : Utilisateur | undefined;
  selectedLivre: Livre | null = null;

  getPanier()
  {
    this.bdServ.getPanier().subscribe(panier => this.panier = panier);
  }

  constructor(private bdServ : BDService) {
  }

  ngOnInit(): void {
    this.getPanier();
    this.bdServ.getConnectedUser().subscribe(cu => this.user =cu);
  }

  recupLivre(livre: Livre): void {
    if(this.selectedLivre == livre)
    {
      this.selectedLivre = null;
    }
    else
    {
      this.selectedLivre = livre;
    }

  }

  deleteLivre(livre: Livre): void {
    this.bdServ.deleteFromPanier(livre);
    this.selectedLivre = null;
  }

  commandeLivres(): void {
    this.bdServ.commande();
  }
}
