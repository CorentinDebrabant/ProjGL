import { Component, OnInit } from '@angular/core';
import {Livre} from '../../models/livre';
import { BDService } from "../../models/bd.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-recherche',
  templateUrl: './page-recherche.component.html',
  styleUrls: ['./page-recherche.component.css']
})
export class PageRechercheComponent implements OnInit {

  public listeLivre : Livre[] = [];
  public prixmax : number = 0;
  public valNote : number = 0;
  public valPrix : number = 0;

  changeNote(value : string)
  {
    this.valNote = Number(value);
  }

  clear()
  {
    this.listeLivre=[];
  }

  changePrix(value : string)
  {
    this.valPrix = Number(value);
  }

  getResultat(titre: string|undefined, auteur : string|undefined, theme : string|undefined, isbn : string|undefined, note : string|undefined, prixmax : string|undefined)
  {
    if(theme=="")
    {
      console.log("no theme");
      theme=undefined;
    }
    if(isbn=="")
    {
      console.log("no isbn");
      isbn=undefined;
    }
    let valNote : number = Number(note);
    let valPrix : number = Number(prixmax);
    this.bdServ.getLivreRecherche(titre,auteur,theme,isbn,valNote,undefined,valPrix).subscribe(resultat => this.listeLivre = resultat);
    this.bdServ.setListeActuelle(this.listeLivre);
    this.router.navigate(['/catalogue']);

  }

  constructor(private bdServ : BDService, private router : Router) { }

  ngOnInit(): void {
    this.bdServ.getPrixMaxCatalogue().subscribe(prix => this.prixmax=prix);
    this.valPrix = Number(this.prixmax.toFixed(0));
  }

}
