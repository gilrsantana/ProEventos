import { Component, OnInit, TemplateRef } from '@angular/core';
import { EventoService } from '../../services/evento.service';
import { Evento } from '../../models/Evento';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { TituloComponent } from 'src/app/shared/titulo/titulo.component';

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
