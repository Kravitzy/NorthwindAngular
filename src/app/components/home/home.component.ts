import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public currentDiscount: number;
    public currentDate : Date;
    public imageWidth: number;
    public maxPrice: number;


  constructor() { }

  ngOnInit() {
    this.imageWidth = 300;
  }

  public incSize():void{
    this.imageWidth += 10;
  }
  public resetSize():void{
    this.imageWidth = 300;
  }
  public decSize():void{
    this.imageWidth -= 10;
  }

  public displayDetails(event: MouseEvent):void{
      alert("width: " + event.srcElement.width + " height: " + event.srcElement.height);
  }


}
