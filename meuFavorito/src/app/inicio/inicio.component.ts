import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Filmes } from '../models/filmeModel';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  listaFilmes: any; 
  
  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {  
    this.getLista()        
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
