import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule , FormsModule} from '@angular/forms'; //aggiungo gli import per le from

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, FormsModule //aggiungo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
