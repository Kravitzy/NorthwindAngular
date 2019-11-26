import { Component, OnInit } from '@angular/core';
import { Unsubscribe } from 'redux';
import { store } from 'src/app/redux/store';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    public totalProducts: number;
    private unsubscribe: Unsubscribe;

    constructor() { }

    ngOnInit() {
        this.unsubscribe = store.subscribe( () => 
            this.totalProducts = store.getState().products.length)
    }

}
