import { Component, OnInit } from '@angular/core';
import { Livre } from "../../models/livre";
import { BDService } from "../../models/bd.service";

@Component({
  selector: 'app-accueille',
  templateUrl: './accueille.component.html',
  styleUrls: ['./accueille.component.css']
})
export class AccueilleComponent implements OnInit {

  public listeLivre : Livre[] = [];

  getCatalogue()
  {
    this.bdServ.getCatalogue().subscribe(catalogue => this.listeLivre = catalogue);
  }

  constructor(private bdServ : BDService) { }

  debug(index:number){
    console.log(this.listeLivre[index]);
  }

  ngOnInit(): void {
    this.getCatalogue();
  }

}
