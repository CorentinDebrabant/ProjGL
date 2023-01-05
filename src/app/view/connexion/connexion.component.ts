import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { BDService } from "../../models/bd.service";
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  @Output() connect = new EventEmitter<Utilisateur>();

  ngOnInit(): void {
  }
  getlogin(nom: string, password:string)
  {
    if(nom==null||password==null)
    {
      alert("wrong name or password");
    }
    else
    {
      let v1 : Utilisateur |undefined ;
      this.bdServ.connect(password,nom).subscribe(user=>v1=user);
      //console.log(this.bdServ.connectedUser);
      this.connect.emit(v1);
      this.router.navigate([""]);
    }
  }

  setins(nomin:string,email:string,passwordin:string,passwordcheck:string)
  {
    if(passwordcheck.localeCompare(passwordin)==0)
    {
      if(nomin==null)
    {
      alert("wrong name");
    }
    else
    {
      this.bdServ.inscrire(nomin,email,passwordin);
    }

    }

  }
  constructor(private bdServ : BDService, private router : Router) { }
}

