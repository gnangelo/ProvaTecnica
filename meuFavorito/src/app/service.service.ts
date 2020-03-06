import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Filmes } from './models/filmeModel';
//import { Movie } from './models/movieModel';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  //public token: string;
  Url = 'https://api.themoviedb.org/3/movie/';
  apiKey = 'fc1333328fd6f9fac895bc645b26a06f';
  
  constructor( private httpClient: HttpClient ) { }
   
  getLista() {
    let ListaFilmeUrl = `${this.Url}popular?api_key=${this.apiKey}`;
    return this.httpClient.get(ListaFilmeUrl);
  }
  
}
