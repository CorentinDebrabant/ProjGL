import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl  } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Livre } from 'src/app/models/livre';


@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css']
})

export class PageAdminComponent implements OnInit {

  myform: FormGroup;

  constructor(private http: HttpClient) {
    this.myform = new FormGroup({
      auteur: new FormControl(''),
      theme: new FormControl(''),
      avis: new FormControl(0),
      isbn: new FormControl(''),
      titre: new FormControl(''),
      imageURI: new FormControl(''),
      prix: new FormControl(0),
      resume: new FormControl('')
   });
  }


  ngOnInit(): void {
    this.myform = new FormGroup({
      auteur: new FormControl(''),
      theme: new FormControl(''),
      avis: new FormControl(0),
      isbn: new FormControl(''),
      titre: new FormControl(''),
      imageURI: new FormControl(''),
      prix: new FormControl(0),
      resume: new FormControl('')
  });

}

onSubmit() {
  if (this.myform.valid) {
    const auteur = this.myform.get('auteur')!.value;
    const theme = this.myform.get('theme')!.value;
    const avis = 0;
    const isbn = this.myform.get('isbn')!.value;
    const titre = this.myform.get('titre')!.value;
    const prix = this.myform.get('prix')!.value;
    const resume = this.myform.get('resume')!.value;

    const imageFile = this.myform.get('imageURI')!.value;

    const livre = new Livre(auteur, theme, isbn, imageFile, titre, prix, resume);

    console.log(livre);
  }

}


}
