import { Component } from '@angular/core';
import { BDService } from "./models/bd.service";
import { Utilisateur } from "./models/utilisateur";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjGL';
  user : Utilisateur | undefined = undefined;

  constructor(private bdServ : BDService) { }
  ngOnInit()
  {
    this.bdServ.getConnectedUser().subscribe(connected => this.user=connected);
  }
  userco(value )
  {
    console.log(value);
    this.user=value;

  }

}
