import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test';
  x=9;
  calcul(a:number,b:number) {
    return a+b;
  }
  calculSomme(T:any) {
    let s= 0;
    for (let i = 0; i < T.length; i++) {
      s = s+T[i];      
    } 
    return s;
  }

  maxT(T:any) {
    let maxVal = T[0];
    for (let i = 1; i < T.length; i++) {
      if (T[i]>maxVal)   {
        maxVal = T[i]
      }    
    }
    return maxVal;
  }

  alertMessage(msg:string) {
    alert(msg);
  }

  displayData(T:any){
    let msg ="";
    for (let i = 0; i < T.length; i++) {
      msg = msg + T[i] + " : " + T[i].length + ' ';
    }
    return msg;
  }

}
