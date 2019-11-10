import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {

    @Input()
    public imageSource: string;
    @Input()
    public imageWidth: string;
    @Input()    
    public imageHeight: string;

    @Output() // חשיפה החוצה מה-Child ל-Parent
    public mouseEnter = new EventEmitter<string>(); // אוביקט שמדווח אירוע
    public onMouseEnter(): void {
        this.mouseEnter.emit(this.imageSource); // Raising and Event
    }

    @Output() // חשיפה החוצה מה-Child ל-Parent
    public mouseOut = new EventEmitter<string>(); // אוביקט שמדווח אירוע
    public onMouseOut(): void {
        this.mouseEnter.emit(); // Raising and Event
    }

  constructor() { }

  ngOnInit() {
  }




}
