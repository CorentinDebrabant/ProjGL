import { Component, OnInit } from '@angular/core';
import { BDService } from 'src/app/models/bd.service';
import { Panier } from 'src/app/models/panier';
import { FormGroup, FormControl  } from '@angular/forms';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  myform: FormGroup = new FormGroup({});
  valide : boolean = false;
  adresse : string = "";
  nbJour : number = 0;
  typePaiement : number = -1;
  public panier : Panier = new Panier();
  paypalValide : boolean = false;

  changerPaiement(value : number)
  {
    this.typePaiement=value;
  }

  connecterPayPal()
  {
    alert("Connection en cours");
    let chance = Math.random();
    if(chance>0.1)
    {
      this.paypalValide=true;
    }
    else
    {
      alert("Désolé, la connexion a échoué");
    }

  }

  validerCommande()
  {
    let verif : boolean = true;
    let carte : string = this.myform.get('carte')!.value;
    let secu : string = this.myform.get('secu')!.value;
    let date : string = this.myform.get('date')!.value;
    let adresse : string = this.myform.get('adresse')!.value;
    let postal : string = this.myform.get('postal')!.value;
    if(adresse.search(/[0-9]* ([a-z]|[A-Z]|[ \-\'éàùèïëç,])*/)==-1 || adresse.search(/[^0-9 a-zA-Z\-\'éàùèïëç,]/)!=-1)
    {
      verif=false;
      alert("L'adresse ne correspond pas au format français");
    }
    if(verif && (postal.search(/[0-9]{5}/)==-1 || postal.search(/[^0-9]/) !=-1))
    {
      verif=false;
      alert("Code postal non conforme");
    }
    if(verif)
    {
      this.adresse = `${adresse} ${postal} ${this.myform.get('ville')!.value}`;
    }
    if(this.typePaiement==1 && verif)
    {
      carte = carte.replace(/ /g,'');
      carte = carte.replace(/\-/g,'');
      if(carte.search(/[^0-9]/)!=-1)
      {
        verif=false;
        alert("Des caractères non autorisés sont présents dans le code de carte bancaire");
      }
      if(verif && carte.length!=16)
      {
        verif=false;
        console.log("Le code de la carte bancaire entré ne correspond pas au format");
      }
      if(verif && (secu.search(/[^0-9]/)!=-1 || secu.length!=3))
      {
        verif=false;
       alert("Erreur dans le code sécurité de la carte bancaire");
      }
      if(verif && (date.search(/([0-9]{2}|[0-9]{1})\/([0-9]{2}|[0-9]{1})/)==-1 || date.search(/[^0-9\/]/)!=-1))
      {
        verif=false;
        alert("Erreur dans la date d'expiration de la carte bancaire");
      }
    }
    if(verif)
    {
      this.valide=true;
      this.nbJour = Math.floor(10+Math.random())+3;
    }
  }

  constructor(private bdServ : BDService) { }

  ngOnInit(): void {
    this.bdServ.getPanier().subscribe(pan => this.panier = pan);
    this.myform = new FormGroup({
      adresse: new FormControl(''),
      ville: new FormControl(''),
      postal: new FormControl(''),
      carte: new FormControl(''),
      date: new FormControl(''),
      secu: new FormControl('')
    });
  }

}
