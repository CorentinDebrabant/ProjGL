import { Component, OnInit } from '@angular/core';
import { Livre } from "../../models/livre";
import { BDService } from "../../models/bd.service";
import { outputAst } from '@angular/compiler';
import { Router } from '@angular/router';

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

  constructor(private bdServ : BDService, private router: Router) {
  }



  debug(index:number){
    this.router.navigate(['/detail',this.listeLivre[index].getIsbn()]);
  }

  ngOnInit(): void {

    this.getCatalogue();

    //Add more books
    //this.listeLivre.push();
  }
  ngOnDestroy(): void{
    this.bdServ.videListeActuelle();
  }

}
