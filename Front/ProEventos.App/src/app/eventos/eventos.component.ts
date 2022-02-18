import {Component, OnInit} from '@angular/core';
import {EventoService} from "../services/evento.service";
import {Observer} from "rxjs";
import {Evento} from "../models/Evento";

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
  public eventos: Evento[] = [];
  public eventosFiltrados: Evento[] = [];
  public widthImg: number = 150;
  public isCollapsed = true;
  public showImg = true;
  private _filtroLista: string = '';

  public get filtroLista(): string {
    return this._filtroLista;
  }

  public set filtroLista(value: string) {
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }

  public filtrarEventos(filtrarPor: string): Evento[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: { tema: string; local: string; }) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
        evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    )
  }

  constructor(private eventoService: EventoService) {
  }

  public ngOnInit(): void {
    this.getEventos();
  }

  public alterarEstadoImg(): void {
    this.showImg = !this.showImg;
  }

  public getEventos(): void {
    this.eventoService.getEventos().subscribe(
      (_eventos: Evento[]) => {
        this.eventos = _eventos;
        this.eventosFiltrados = this.eventos;
      },
      error => console.log(error)
    );

  }

}
