import { Component, OnInit } from '@angular/core';
import { Livre } from "../../models/livre";
import { BDService } from "../../models/bd.service";
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-detail-livre',
  templateUrl: './detail-livre.component.html',
  styleUrls: ['./detail-livre.component.css']
})
export class DetailLivreComponent implements OnInit {

  livres: Livre[]|undefined;
  livre: Livre|undefined;
  constructor(private bdServ : BDService,private router: ActivatedRoute) { }

  ngOnInit(): void {
    const local_isbn: string| null = this.router.snapshot.paramMap.get('id');
    console.log(local_isbn);


    if(local_isbn!=null)
    {
      this.bdServ.getLivreRecherche(undefined,undefined,undefined,local_isbn,undefined,undefined,undefined).subscribe(livres => this.livres = livres);
      this.livre = this.livres?.at(0);
    }
    console.log(this.livres?.at(0));


  }
 AjoutePanier(livre:Livre)
  {
    this.bdServ.addToPanier(livre);
    this.bdServ.getPanier().subscribe(panier => console.log(panier));
    alert("Vous avez ajouté le livre : "+livre.getTitre()+" au panier !");
  }

  getRandomMot():string
  {
    let random = Math.random();
    let mot:string;
    if(random<0.33)
    {
      mot="Fabuleux";
    }
    else if(random<0.66)
    {
      mot="Magnifique";
    }
    else
    {
      mot="Formidable";
    }
    return mot;


  }
}
