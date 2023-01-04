import { Component, OnInit, Input } from '@angular/core';
import { Avis } from 'src/app/models/avis';
import { BDService } from 'src/app/models/bd.service';
import { Utilisateur } from 'src/app/models/utilisateur';
import { Livre } from 'src/app/models/livre';


@Component({
  selector: 'app-commentaires',
  templateUrl: './commentaires.component.html',
  styleUrls: ['./commentaires.component.css']
})
export class CommentairesComponent implements OnInit {

  @Input() livre : Livre = new Livre("","","","","",0,"");
  @Input() avis : Avis[] = [];
  user : Utilisateur | undefined;
  valNote : number = 2.5;
  images : string[]=[];
  etoileGaucheVide : string = "../../../assets/etoile_gauche_v.png";
  etoileGauche : string = "../../../assets/etoile_gauche.png";
  etoileDroiteVide : string = "../../../assets/etoile_droite_v.png";
  etoileDroite : string = "../../../assets/etoile_droite.png";

  changeNote(value : number)
  {
    this.valNote = value;
    for(let i=0; i<value*2; i++)
    {
      if(i%2==0)
      {
        this.images[i]=this.etoileGauche;
      }
      else{
        this.images[i]=this.etoileDroite;
      }
    }
    for(let i=value*2; i<11; i++)
    {
      if(i%2==0)
      {
        this.images[i]=this.etoileGaucheVide;
      }
      else{
        this.images[i]=this.etoileDroiteVide;
      }
    }
  }

  envoyerAvis(commentaire : string)
  {
    if(this.user!=undefined)
    {
      let newAvis = new Avis(this.user.getIdentifiant(),new Date(),commentaire,this.valNote);
      this.avis.push(newAvis);
      this.livre.addAvis(newAvis);
    }
  }

  constructor(public bdServ : BDService) { }

  ngOnInit(): void {
    this.bdServ.getConnectedUser().subscribe(connect => this.user=connect);
    this.images[0]=this.etoileGauche;
    this.images[1]=this.etoileDroite;
    this.images[2]=this.etoileGauche;
    this.images[3]=this.etoileDroite;
    this.images[4]=this.etoileGauche;
    this.images[5]=this.etoileDroiteVide;
    this.images[6]=this.etoileGaucheVide;
    this.images[7]=this.etoileDroiteVide;
    this.images[8]=this.etoileGaucheVide;
    this.images[9]=this.etoileDroiteVide;
  }

}
