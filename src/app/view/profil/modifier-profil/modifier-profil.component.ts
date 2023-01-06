import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BDService } from 'src/app/models/bd.service';
import { Utilisateur } from 'src/app/models/utilisateur';

@Component({
  selector: 'app-modifier-profil',
  templateUrl: './modifier-profil.component.html',
  styleUrls: ['./modifier-profil.component.css']
})
export class ModifierProfilComponent implements OnInit {

  constructor(private bdServ : BDService, private router : Router) { }
  user : Utilisateur | undefined;

  ngOnInit(): void {
    this.bdServ.getConnectedUser().subscribe(us => this.user = us);
    if(this.user == undefined)
    {
      alert("Vous n'êtes pas connecté");
      this.router.navigate(['']);
    }
  }

  validerNewMDP(ancien : string, nouveau : string, conf : string)
  {
    if(nouveau.localeCompare(conf)==0)
    {
      let b = this.bdServ.modifierMDP(ancien,nouveau);
      if(!b)
      {
        alert("Le mot de passe est éronné, la modification n'a pas eu lieu");
      }
      else
      {
        this.router.navigate(['/profil']);
      }
    }
    else{
      alert("La confirmation du nouveau de passe a échoué, elle est différente du mot de passe souhaité");
    }
  }

  annulerMDP()
  {
    this.router.navigate(['/profil']);
  }

}
