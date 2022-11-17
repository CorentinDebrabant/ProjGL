import { Component, OnInit } from '@angular/core';
import { Article } from "../models/article";
import { BDService } from "../models/bd.service";

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  public listeArticle : Article[] = [];

  getCatalogue()
  {
    this.bdServ.getCatalogue().subscribe(catalogue => this.listeArticle = catalogue);
  }

  constructor(private bdServ : BDService) {
  }

  ngOnInit(): void {
    this.getCatalogue();
  }

}
