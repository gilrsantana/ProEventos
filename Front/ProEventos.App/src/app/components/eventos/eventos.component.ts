import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-eventos',
	templateUrl: './eventos.component.html',
	styleUrls: ['./eventos.component.scss'],
})

export class EventosComponent implements OnInit {
	public nomeDaPagina: string = "Eventos";
	public subtitulo: string = 'Gerenciando eventos';
	public meuIcone: string = 'fa fa-calendar-alt fs-1 me-3'

	ngOnInit(): void {
	}
}
