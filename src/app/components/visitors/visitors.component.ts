import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitors',
  templateUrl: './visitors.component.html',
  styleUrls: ['./visitors.component.css']
})
export class VisitorsComponent implements OnInit {

    public currentVistors : number;

  constructor() { }

  getRandomMax(_max:number): number{
        return Math.floor(Math.random() * Math.floor(_max));
  }

  ngOnInit() {
      this.currentVistors = this.getRandomMax(100000);
      setInterval( () => {this.currentVistors += this.getRandomMax(10)}, 1000 )
  }

}
