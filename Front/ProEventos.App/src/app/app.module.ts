import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EventoDetalheComponent } from './components/eventos/evento-detalhe/evento-detalhe.component';
import { PalestrantesComponent } from './components/palestrantes/palestrantes.component';
import { TituloComponent } from './shared/titulo/titulo.component';
import { ContatosComponent } from './components/contatos/contatos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PerfilComponent } from './components/user/perfil/perfil.component';

import { NavComponent } from './shared/nav/nav.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
defineLocale('pt-br', ptBrLocale);

import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';

import { NgxSpinnerModule } from 'ngx-spinner';
import { EventoService } from "./services/evento.service";
import { DateTimeFormatPipe } from './helpers/date-time-format.pipe';
import { EventoListaComponent } from './components/eventos/evento-lista/evento-lista.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegistrationComponent } from './components/user/registration/registration.component';

@NgModule({
	declarations: [
		AppComponent,
		EventosComponent,
		PalestrantesComponent,
		NavComponent,
		DateTimeFormatPipe,
		TituloComponent,
		ContatosComponent,
		DashboardComponent,
		PerfilComponent,
  		EventoDetalheComponent,
		EventoListaComponent,
		UserComponent,
		LoginComponent,
		RegistrationComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		CollapseModule.forRoot(),
		TooltipModule.forRoot(),
		BsDropdownModule.forRoot(),
		BsDatepickerModule.forRoot(),
		ModalModule.forRoot(),
		ToastrModule.forRoot({
			timeOut: 4000,
			positionClass: 'toast-bottom-right',
			preventDuplicates: true,
			progressBar: true
		}),
		NgxSpinnerModule

	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	providers: [EventoService],
	bootstrap: [AppComponent]
})
export class AppModule {
}
