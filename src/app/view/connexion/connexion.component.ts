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

      sessionStorage.setItem("user",JSON.stringify(v1));


      console.log("Voici ce  qu'il y aaa"+sessionStorage.getItem("user"));
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
      let us : Utilisateur = new Utilisateur("","",0,"");
      this.bdServ.inscrire(nomin,email,passwordin).subscribe(user => us = user);
      sessionStorage.setItem("user",JSON.stringify(us));


      console.log("Voici ce  qu'il y aaa"+sessionStorage.getItem("user"));
      this.connect.emit(us);
      this.router.navigate([""]);
    }

    }

  }
  constructor(private bdServ : BDService, private router : Router) { }
}

