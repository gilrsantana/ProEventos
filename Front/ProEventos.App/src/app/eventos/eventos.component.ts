import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
  public eventos: any = [
    {
      Tema: 'Angular',
      Local: 'Belo Horizonte'
    },
    {
      Tema: '.NET',
      Local: 'Rio de Janeiro'
    },
    {
      Tema: 'Angular e suas novidades',
      Local: 'São Paulo'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
