import { Component, OnInit, DoCheck, ChangeDetectorRef, NgZone } from '@angular/core';

@Component({
    selector: 'app-clock',
    templateUrl: './clock.component.html',
    styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, DoCheck {
    
    public time: string;

    constructor(private changeDetector: ChangeDetectorRef,
                private ngZone: NgZone) { }

    // works evry time asyncrounes function works
    ngDoCheck(): void {
        if (this.time) {
            console.log(this.time);
        }
    }

    ngOnInit() {
        this.changeDetector.detach();
        setTimeout( ()=> this.changeDetector.reattach(), 5000);

        setInterval(() => {
            const d = new Date();
            this.time = d.toLocaleTimeString();
        }, 1000);
    }

    // start engils 2 space then 
    // fdfsdf כגכדגכד kosdk אם אתה רוצה
    // עברית English  עברית  elngile

}
