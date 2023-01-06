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


  public user : Utilisateur|undefined;
  identifiant!:string;
  mdp!:string;
  email!:string;

  constructor(private bdServ : BDService,private router:Router )
  {

  }

  ngOnInit(): void
  {
    this.bdServ.getConnectedUser().subscribe(user => this.user = user);
    if(this.user!=undefined)
    {
      this.identifiant=this.user.getIdentifiant();
      this.email=this.user.getEmail();
      this.mdp=this.user.getMdp();
    }
    else
    {
      this.router.navigate(['']);
    }

  }

  deconnexion()
  {
  }

  modifierMDP() : void
  {
    this.router.navigate(["modifier-profil"]);
  }

}

