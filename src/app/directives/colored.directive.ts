import { Directive, OnInit, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appColored]' // תחביר של סלקטור של דיירקטיב
})
export class ColoredDirective implements OnInit {

    
    // Technique 01
    @HostBinding("style.color") // המאפיין מקושר להוסט
    public color: string;

    // Technique 02
    // ElementRef = Refrence to the host
    // Renerer2 = רכיב המאפשר לשנות את ה-Host
    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
    ngOnInit(): void {
        setInterval(() => {
            this.color = this.getRandomColor();
        }, 1000);

        // Technique 02
        // this.elementRef.nativeElement: this is the Host Element
        this.renderer.setStyle(this.elementRef.nativeElement, "transition", "color 1s");
    }

    private getRandomColor(): string {
        const r = Math.floor(256 * Math.random());
        const g = Math.floor(256 * Math.random());
        const b = Math.floor(256 * Math.random());
        const color = `rgb(${r},${g},${b})`;  // javascript feature
        return color;
    }

}
