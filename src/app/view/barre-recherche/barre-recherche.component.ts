import { Component, OnInit } from '@angular/core';
import {Livre} from '../../models/livre';
import { BDService } from "../../models/bd.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-barre-recherche',
  templateUrl: './barre-recherche.component.html',
  styleUrls: ['./barre-recherche.component.css']
})
export class BarreRechercheComponent implements OnInit {

  public listeLivre : Livre[] = [];

  getResultat(titre: string)
  {
    this.bdServ.getLivreByName(titre).subscribe(resultat => this.listeLivre = resultat);
    console.log(this.listeLivre);
   this.router.navigate(['/catalogue']);
   this.bdServ.setListeActuelle(this.listeLivre);
  }

  constructor(private bdServ : BDService, private router : Router) { }

  ngOnInit(): void {
  }

}
