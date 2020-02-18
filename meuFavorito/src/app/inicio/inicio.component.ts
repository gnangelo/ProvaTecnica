import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  listaFilmes: {};

  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
    this.listaGet();
  }

  listaGet() {
    this.serviceService.listaGet().subscribe(dados=> this.listaFilmes = dados);
  }

}
