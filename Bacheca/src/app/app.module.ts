import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { ElencoComponent } from './elenco/elenco.component'; //aggiungo gli import per le from

@NgModule({
  declarations: [
    AppComponent,
    ElencoComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, FormsModule, NgbModule //aggiungo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
