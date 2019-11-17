import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

    public time: string;

  constructor() { }

  ngOnInit() {
      setInterval( () => {
        const d = new Date();
        this.time = d.toLocaleTimeString();
      }, 1000);
  }



}
