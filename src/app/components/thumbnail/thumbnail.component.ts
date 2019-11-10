import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  /**
   * onMouseEnter
   */
  public onMouseEnter(): void {
      alert("test");
  }

}
