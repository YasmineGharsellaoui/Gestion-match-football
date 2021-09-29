import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  // Entrée nommée matchInput
  @Input() matchInput:any;
  constructor() { }

  ngOnInit() {
  }

  // Déclaration d'une fonction
  resultScore(a:number, b:number){
    if (a>b) {
      return 'Win';
    } else if (a<b) {
      return 'Loss';
    } else {
      return 'Draw';
    }
  }

  // selon une valeur, faire un traitement
  matchColor(value:string) {
    switch (value) {
      case 'Win': return 'green';
      case 'Loss': return 'red';
      case 'Draw': return 'blue';  
    }
  }

}
