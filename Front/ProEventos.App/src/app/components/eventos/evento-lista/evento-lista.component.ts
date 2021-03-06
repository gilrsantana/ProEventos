import { Component, OnInit, TemplateRef } from '@angular/core';
import { EventoService } from '../../../services/evento.service';
import { Evento } from '../../../models/Evento';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { TituloComponent } from 'src/app/shared/titulo/titulo.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evento-lista',
  templateUrl: './evento-lista.component.html',
  styleUrls: ['./evento-lista.component.scss']
})
export class EventoListaComponent implements OnInit {
	public eventos: Evento[] = [];
	public eventosFiltrados: Evento[] = [];
	public widthImg = 150;
	public isCollapsed = true;
	public showImg = true;
	private _filtroLista: string = '';

	modalRef?: BsModalRef;

	// ------- Construtor ------ //
	constructor(
		private eventoService: EventoService,
		private modalService: BsModalService,
		private toastr: ToastrService,
		private spinner: NgxSpinnerService,
		private router: Router)
	{ }

	// ------- Getters e Setters ------ //
	public get filtroLista(): string {
		return this._filtroLista;
	}

	public set filtroLista(value: string) {
		this._filtroLista = value;
		this.eventosFiltrados = this.filtroLista
			? this.filtrarEventos(this.filtroLista)
			: this.eventos;
	}

	// ------- OnInit ------ //
	public ngOnInit(): void {
		this.spinner.show();
		this.getEventos();
	}

	// ------- Métodos da classe ------ //
	public filtrarEventos(filtrarPor: string): Evento[] {
		filtrarPor = filtrarPor.toLocaleLowerCase();
		return this.eventos.filter(
			(evento: { tema: string; local: string }) =>
				evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
				evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
		);
	}


	public alterarEstadoImg(): void {
		this.showImg = !this.showImg;
	}

	public getEventos(): void {
		const observer = {
			next: (eventosResponse: Evento[]) => {
				this.eventos = eventosResponse;
				this.eventosFiltrados = this.eventos;
			},
			error: (error: any) => {
				this.spinner.hide();
				this.toastr.error('Erro ao caregar os eventos!', 'Erro');
			},
			complete: () => { this.spinner.hide(); },
		};

		this.eventoService.getEventos().subscribe(
			observer
			// (eventosResponse: Evento[]) => {
			//   this.eventos = eventosResponse;
			//   this.eventosFiltrados = this.eventos;
			// },
			// error => console.log(error)
		);
	}

	openModal(template: TemplateRef<any>): void {
		this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
	}

	confirm(): void {
		this.modalRef?.hide();
		this.toastr.success('O evento foi excluído com sucesso.', 'Excluído!');
	}

	decline(): void {
		this.modalRef?.hide();
	}

	detalheEvento(id: number): void {
		this.router.navigate([`eventos/detalhe/${id}`]);
	}
}
