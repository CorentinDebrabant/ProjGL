import { Component, OnInit } from '@angular/core';
import {Livre} from '../../models/livre';
import { BDService } from "../../models/bd.service";

@Component({
  selector: 'app-barre-recherche',
  templateUrl: './barre-recherche.component.html',
  styleUrls: ['./barre-recherche.component.css']
})
export class BarreRechercheComponent implements OnInit {

  public listeLivre : Livre[] = [];

  getResultat(titre: string)
  {
    console.log(titre);
    this.bdServ.getLivreByName(titre).subscribe(resultat => this.listeLivre = resultat);
  }

  constructor(private bdServ : BDService) { }

  ngOnInit(): void {
  }

}
