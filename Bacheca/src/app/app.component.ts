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
  input : bacheca; // creo un oggetto di tipo bacheca ****
  vettUtenti : bacheca[]; //creo un vettore di tipo bacheca per contenere tutti gli utenti 
  //creiamo il costruttore della form
  constructor(fb: FormBuilder){
    this.vettUtenti = new Array(); // costruisco un vettore vuoto
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
      

      this.input = new bacheca(); //creo con il nome che ho dato prima l'oggetto di tipo bacheca ****
      
      //Assegno gli input 
      
      this.input.nome =  this.f1.controls['nome'].value
      this.input.cognome =  this.f1.controls['cognome'].value
      this.input.email =  this.f1.controls['email'].value
      this.input.password =  this.f1.controls['password'].value
      this.input.cellulare =  this.f1.controls['cellulare'].value ;
      
      this.vettUtenti.push(this.input);  //aggiunge utente al vettore
      
    }
  }
}
