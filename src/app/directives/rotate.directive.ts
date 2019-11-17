import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appRotate]'
})
export class RotateDirective implements OnInit{

    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit(): void {
        this.renderer.setStyle(this.elementRef.nativeElement, "animation", "RotateAnimation 3s infinite linear");
    }

}
