import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  scores : Observable<string>
  agents : Observable<string>

  showMsg : any = []
  agentName : any;
  
  constructor() {

  //  ------------------------------------- Example#1 ----------------------------------------
    this.scores = new Observable (
      (commentary)=>{
        commentary.next('1')
        commentary.next('2')
        commentary.next('3')
        commentary.next('4')
        commentary.next('5')
        // setInterval(() => {commentary.next('6')}, 1000);
        // setInterval(() => {commentary.next('7')}, 1000);
        // setInterval(() => {commentary.next('8')}, 1000);
        // setInterval(() => {commentary.next('9')}, 1000);
      }
    )
  //  ------------------------------------- Example#2 ----------------------------------------
    this.agents = new Observable (
      function(observer) {
        try{
          observer.next ("Ram");
          observer.next ("Laxman");
          observer.next ("Sitha");
          // setInterval(() => {
          //   observer.next ("Ram");
          // },3000)
          // setInterval(() => { 
          //   observer.next ("Laxman");
          // },6000)
          // setInterval(() => {
          //   observer.next ("Sitha");
          // },9000)
        }
        catch(e){
          observer.error(e);
        }
      }
    )
   }

  ngOnInit(): void {

    console.log("Example#1 ------Observable")
    this.scores.subscribe((data) => {
      console.log(data);
      this.showMsg.push(data)
    })

    console.log("Example#2 ------Observable")
    this.agents.subscribe((data) => {
      console.log(data); 
      this.agentName = data;
    })

  }

}
