import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-titulo',
	templateUrl: './titulo.component.html',
	styleUrls: ['./titulo.component.scss']
})
export class TituloComponent implements OnInit {
	@Input() titulo: string = 'Título';
	@Input() subtitulo: string = 'Desde 2021';
	@Input() iconClass: string = 'fa fa-user me-3 fs-1';
	@Input() botaoListar = false;

	constructor(private router: Router) { }

	ngOnInit(): void {
	}

	listar(): void {
		this.router.navigate([`/${this.titulo.toLocaleLowerCase()}/lista`]);
	}
}
