import {NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EventosComponent} from './eventos/eventos.component';
import {PalestrantesComponent} from './palestrantes/palestrantes.component';
import {NavComponent} from './nav/nav.component';

import {CollapseModule} from 'ngx-bootstrap/collapse';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';

import {EventoService} from "./services/evento.service";
import { DateTimeFormatPipe } from './helpers/date-time-format.pipe';

@NgModule({
	declarations: [
		AppComponent,
		EventosComponent,
		PalestrantesComponent,
		NavComponent,
		DateTimeFormatPipe
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
