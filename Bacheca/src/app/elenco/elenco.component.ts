import { Component, OnInit, Input } from '@angular/core'; //aggiungo input

import { FormBuilder, FormGroup, Validators } from '@angular/forms';  //Importo ste cose per utilizzarle 3

import {bacheca} from '../bacheca'; //importo la classe creata  (se siamo nell'app component ./ in un componente ../)


@Component({
  selector: 'app-elenco',
  templateUrl: './elenco.component.html',
  styleUrls: ['./elenco.component.css']
})
export class ElencoComponent implements OnInit {
@Input() nomeVariabile: bacheca[]; //creo il costruttore di nomeVariab
  constructor() { }

  ngOnInit() {
  }

}
