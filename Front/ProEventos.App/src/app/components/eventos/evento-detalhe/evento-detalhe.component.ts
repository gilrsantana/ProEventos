import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Evento } from '@app/models/Evento';
import { EventoService } from '@app/services/evento.service';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';

@Component({
	selector: 'app-evento-detalhe',
	templateUrl: './evento-detalhe.component.html',
	styleUrls: ['./evento-detalhe.component.scss']
})
export class EventoDetalheComponent implements OnInit {
	form: FormGroup;
	evento = {} as Evento;

	get f(): any {
		return this.form.controls;
	}

	get bsConfig(): any {
		return {
			isAnimated: true,
			adaptivePosition: true,
			dateInputFormat: 'DD/MM/YYYY hh:mm a',
			containerClass: 'theme-default',
			showWeekNumbers: false
		};
	}

	constructor(private fb: FormBuilder,
				private localeService: BsLocaleService,
				private router: ActivatedRoute,
				private eventoService: EventoService) {
		this.form = new FormGroup({});
		this.localeService.use('pt-br');
	}

	ngOnInit(): void {
		this.validation();
		this.carregarEvento();
	}

	public validation(): void {

		this.form = this.fb.group({
			tema: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
			local: ['', Validators.required],
			dataEvento: ['', [Validators.required]],
			qtdPessoas: ['', [Validators.required, Validators.min(50), Validators.max(120000)]],
			telefone: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			imagemURL: ['', Validators.required],
		})
	}

	public resetForm(): void {
		this.form.reset();
	}

	cssValidator(campoForm: FormControl): any {
		return {'is-invalid': campoForm.errors && campoForm.touched};
	}

	public carregarEvento(): void {
		const eventoIdParam = this.router.snapshot.paramMap.get('id');

		if (eventoIdParam !== null) {
			this.eventoService.getEventoById(+eventoIdParam).subscribe({
				next: (evento: Evento) => {
					this.evento = { ...evento };
					this.form.patchValue(this.evento);
				},
				error: (error: any) => { console.error(error) },
				complete: () => {},
			});
		}
	}
}
