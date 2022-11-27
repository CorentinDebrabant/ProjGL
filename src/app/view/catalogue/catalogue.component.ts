import { Component, OnInit } from '@angular/core';
import { Livre } from "../../models/livre";
import { BDService } from "../../models/bd.service";

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  public listeLivre : Livre[] = [];

  getCatalogue()
  {
    this.bdServ.getCatalogue().subscribe(catalogue => this.listeLivre = catalogue);
  }

  constructor(private bdServ : BDService) {
  }

  ngOnInit(): void {
    this.getCatalogue();
  }

}
