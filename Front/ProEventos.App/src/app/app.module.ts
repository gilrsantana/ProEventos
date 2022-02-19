import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { PalestrantesComponent } from './components/palestrantes/palestrantes.component';
import { TituloComponent } from './shared/titulo/titulo.component';
import { ContatosComponent } from './components/contatos/contatos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { NavComponent } from './shared/nav/nav.component';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';

import { EventoService } from "./services/evento.service";
import { DateTimeFormatPipe } from './helpers/date-time-format.pipe';

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
		PerfilComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		FormsModule,
		CollapseModule.forRoot(),
		TooltipModule.forRoot(),
		BsDropdownModule.forRoot(),
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
