import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-perfil',
	templateUrl: './perfil.component.html',
	styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
	public nomeDaPagina: string = "Perfil";
	form: FormGroup;

	constructor( private fb: FormBuilder) { 
		this.form = new FormGroup({});
	}
	
	get f(): any {
		return this.form.controls;
	}

	ngOnInit(): void {
		this.formValidation();
	}

	formValidation(): void {
		this.form = this.fb.group({
			primeiroNome: ['', [Validators.required]],
			ultimoNome: ['', [Validators.required]],
			email: ['', [Validators.required]],
			telefone: ['', [Validators.required]],
			descricao: ['', [Validators.required]],
			senha: ['', [Validators.required]],
			confirmarSenha: ['', [Validators.required]],
		});
	}

}
