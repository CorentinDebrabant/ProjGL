import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HTTPService {

  constructor(private http: HttpClient) { }

  upload(file : File)
  {
    const formData = new FormData();

    formData.append("thumbnail", file);

    const upload$ = this.http.post("/api/thumbnail-upload", formData);

    upload$.subscribe();
  }
}
