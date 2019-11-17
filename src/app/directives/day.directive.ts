import { Directive, Input, ViewContainerRef, TemplateRef, OnInit } from '@angular/core';

// <p *appDay="'tuesday'>"

@Directive({
    selector: '[appDay]'
})
export class DayDirective implements OnInit {

    @Input("appDay") // קבלת ערך מבחוץ
    public dayOfWeek: string;

    // TemplateRef: Refrence to the element
    // ViewContainerRef: Refrence to the container of the element
    constructor(private templateRef: TemplateRef<any>,
        private viewContainerRef: ViewContainerRef) { }

    ngOnInit(): void {
        const days = ["sunday","monday","tuesday", "wednesday","thursday","friday","saturday"]
        const d = new Date();
        const day = days[d.getDay()];
        console.log(day);
        if (this.dayOfWeek.toLocaleLowerCase() === day) {
            // Enter the host to the DOM
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
    }

}
