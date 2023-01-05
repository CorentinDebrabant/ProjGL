import { ModifierProfilComponent } from './../modifier-profil/modifier-profil.component';
import { BDService } from 'src/app/models/bd.service';
import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-profil',
  templateUrl: './page-profil.component.html',
  styleUrls: ['./page-profil.component.css']
})

export class PageProfilComponent implements OnInit {


  public user : Utilisateur = new Utilisateur("","",0,"");
  identifiant!:string;
  mdp!:string;
  email!:string;

  constructor(private bdServ : BDService,private router:Router )
  {

  }

  ngOnInit(): void
  {
    this.bdServ.getConnectedUser();
    this.identifiant=this.user.getIdentifiant();
    this.email=this.user.getEmail();
    this.mdp=this.user.getMdp();
  }

 getUser(): void
  {
    this.bdServ.getConnectedUser().subscribe(user => this.user = user);
  }

  getUserId(): string
  {
    return this.user.getIdentifiant();
  }

  deconnexion()
  {
  }

  modifierMDP() : void
  {
    this.router.navigate(["modifier-profil"]);
  }

}

