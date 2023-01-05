import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl  } from '@angular/forms';
//import { HTTPService } from 'src/app/models/httpservice.service';
import { Livre } from 'src/app/models/livre';
import { BDService } from 'src/app/models/bd.service';


@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css']
})

export class PageAdminComponent implements OnInit {

  myform: FormGroup = new FormGroup({});
  private filename : string = "";
  private file : File | undefined;

  constructor(/*public http : HTTPService,*/ public bdService : BDService) {}


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

changeFile(event)
{
  this.file = event.target.files[0];

  if (this.file) {
      this.filename = this.file.name;
      //this.http.upload(this.file);

  }
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

    const livre = new Livre(auteur, theme, isbn,`../assets/${this.filename}`, titre, prix, resume);
    this.bdService.pushLivre(livre);
    console.log(livre);
  }

}


}
