import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Filmes } from '../models/filmeModel';
import { Movie } from '../models/movieModel';

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.scss']
})
export class FavoritoComponent implements OnInit {

  listaFilmes: any;
  movies: any[];
  sort: number;

  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
    this.getLista();
  }

  getLista(){
    this.serviceService.getLista()
      .subscribe(response=>{
        this.listaFilmes=response;
        this.listaFilmes = Array.of(this.listaFilmes.results);
        console.log(this.listaFilmes);
      }, error=>{
        console.log(error);
      });
  }
}
