import { Component, OnInit } from '@angular/core';
import { Livre } from "../models/livre";
import { BDService } from "../models/bd.service";

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  constructor(private bdServ : BDService) {
  }

  public AjoutLivre(l: Livre) {
    this.bdServ.pushLivre(l);
  }

  public SupprimeLivre(l: Livre) {
    this.bdServ.deleteLivre(l);
  }

  ngOnInit(): void {
  }

}
