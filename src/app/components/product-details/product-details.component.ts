import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';

import { Unsubscribe } from 'redux';
import { store } from 'src/app/redux/store';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    public product: Product;

    public lst : Product[];

    constructor(private ps: ProductsService, private ar: ActivatedRoute) { }
    

    ngOnInit() {
        // parse to int
        const productId = +this.ar.snapshot.params.id;
        // this.ps.getAllProductsFromServer().subscribe(products => {
        //     this.product = products.find(x => x.id === productId);
        // });

        // get data from store  
        this.product = store.getState().products.find(x => x.id === productId);
    }

}
