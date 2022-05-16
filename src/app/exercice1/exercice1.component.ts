import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  constructor() { 
    
  }
  
  ngOnInit(): void {
  }
  public nom:string = "dyma";
  public alignement:string = "center";
  public couleur:string = "white";


  modifierNom():void{
    this.nom = "autres";
  }

}
