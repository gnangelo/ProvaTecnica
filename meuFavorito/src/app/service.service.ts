import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  listaUrl = 'https://developers.themoviedb.org/4/getting-started/authorization';

  constructor( private http: HttpClient ) { }

  listaGet() {
    return this.http.get(this.listaUrl, { headers: {'Content-type': 'application/json'}});
  }

}
