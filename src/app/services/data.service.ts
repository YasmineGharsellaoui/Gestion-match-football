import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb(){

   let  matches =  [
    {id:1, scoreOne: 3, scoreTwo: 1, teamOne: 'CA', teamTwo: 'EST', logo1: "assets/images/logo_3.png", logo2: "assets/images/logo_2.png"},
    {id:2, scoreOne: 4, scoreTwo: 3, teamOne: 'FCB', teamTwo: 'RMD', logo1: "assets/images/logo_3.png", logo2: "assets/images/logo_2.png"},
    {id:3, scoreOne: 1, scoreTwo: 2, teamOne: 'JUV', teamTwo: 'NAP', logo1: "assets/images/logo_3.png", logo2: "assets/images/logo_2.png"},
    {id:4, scoreOne: 1, scoreTwo: 2, teamOne: 'JUV', teamTwo: 'NAP', logo1: "assets/images/logo_3.png", logo2: "assets/images/logo_2.png"},
    {id:5, scoreOne: 2, scoreTwo: 2, teamOne: 'MCI', teamTwo: 'LIV', logo1: "assets/images/logo_3.png", logo2: "assets/images/logo_2.png"}
   ];

   let players = [
    {
      id: 1, name: 'Messi', poste: 'ATK', description: 'Best player',
      dateOfBirth: '10/11/1987', image: 'assets/images/img_2.jpg'
    },
    {
      id: 2, name: 'Ronaldo', poste: 'ATK', description: 'Best player',
      dateOfBirth: '09/08/1986', image: 'assets/images/img_2.jpg'
    },
    {
      id: 3, name: 'Messi', poste: 'GK', description: 'Best player',
      dateOfBirth: '10/11/1980', image: 'assets/images/img_2.jpg'
    },
    {
      id: 4, name: 'Van Dik', poste: 'DEF', description: 'Best player',
      dateOfBirth: '10/11/1990', image: 'assets/images/img_2.jpg'
    }
  ];

  let users = [
    {id: 1, firstName: 'Abderrahmen', lastName: 'Masmoudi', email:'abderrahmen@crococoder.com', pwd: '1234', tel: '24600900'},
    {id: 2, firstName: 'Omar', lastName: 'Masmoudi', email:'omar@crococoder.com', pwd: '1234', tel: '24600900'},
    {id: 3, firstName: 'Ali', lastName: 'Masmoudi', email:'ali@crococoder.com', pwd: '1234', tel: '24600900'}
  ];

   return {matches,players, users};

  }
}
