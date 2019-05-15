import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';  //Importo ste cose per utilizzarle 3

import {bacheca} from './bacheca'; //importo la classe creata  (se siamo nell'app component ./ in un componente ../)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bacheca';
  f1: FormGroup; //dichiaro la form dopo aver scritto l'input
  input : bacheca; // creo un oggetto di tipo bacheca
  //creiamo il costruttore della form
  constructor(fb: FormBuilder){
    this.f1 = fb.group({
      'nome' : ['NOME',Validators.required],   // nome è l'input, 'NOME' è il valore di default nel campo input, validators controlla se è giusto 
      'cognome' : ['COGNOME',Validators.required],
      'email' : ['EMAIL',[Validators.required , Validators.email]],
      'password' : ['PASSWORD',Validators.required],
      'cellulare' : ['CELLULARE',Validators.required],
     
    });
    
  } // fuori dal costruttore
  onSubmit(){
    if(!this.f1.invalid) // se tutti gli imput sono ok 
    {
      
      let x = this.f1.controls['nome'].value + this.f1.controls['cognome'].value + this.f1.controls['email'].value + this.f1.controls['password'].value + this.f1.controls['cellulare'].value ;
      // let (una variabile che puo essere di tutti i tipi )
      
    }
  }
}
