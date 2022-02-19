import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-contatos',
	templateUrl: './contatos.component.html',
	styleUrls: ['./contatos.component.scss']
})
export class ContatosComponent implements OnInit {
	public nomeDaPagina: string = "Contatos";

	constructor() { }

	ngOnInit(): void {
	}

}
