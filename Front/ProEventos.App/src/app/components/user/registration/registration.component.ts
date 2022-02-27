import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorField } from '@app/helpers/ValidatorField';

@Component({
	selector: 'app-registration',
	templateUrl: './registration.component.html',
	styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
	form: FormGroup;
	constructor(private fb: FormBuilder) {
		this.form = new FormGroup({});
	}

	get f(): any{
		return this.form.controls;
	}

	ngOnInit(): void {
		this.formValidation();
	}

	formValidation() :void {
		const formOptions: AbstractControlOptions = {
			validators: ValidatorField.MustMatch('senha', 'confirmaSenha')
		};

		this.form = this.fb.group({
			primeiroNome: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
			ultimoNome: ['', [Validators.maxLength(50)]],
			email: ['', [Validators.required, Validators.email]],
			usuario: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
			senha: ['', [Validators.required, Validators.minLength(5)]],
			confirmaSenha: ['', [Validators.required]]
		}, formOptions);
	}

}
