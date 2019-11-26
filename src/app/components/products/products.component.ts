import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';
import { AnyAction, Unsubscribe } from 'redux';
import { ActionType } from 'src/app/redux/action-type';
import { store } from 'src/app/redux/store';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    public allProducts: Product[];
    private unsubscribe: Unsubscribe;

    constructor(private prodService: ProductsService) { }

    ngOnDestroy(): void {
        this.unsubscribe();
    }

    /*async */ ngOnInit() {
        
        this.unsubscribe = store.subscribe(() => this.allProducts = store.getState().products);
        store.subscribe(() => this.allProducts = store.getState().products);
        
        
        if (store.getState().products.length > 0) {
            this.allProducts = store.getState().products;
        }
        else {
            this.prodService.getAllProductsFromServer()
            .subscribe(products => {
                alert("products download from server")
                
                const action: AnyAction = {
                    type: ActionType.GetAllProducts,
                    payload: products
                };
                
                store.dispatch(action);
            })
        }

        // this.allProducts = this.prodService.getAllProducts();
        
        // this.prodService.getAllProductsFromServer()
        //     .subscribe(products => this.allProducts = products, err => alert(err.message));
    }

    onMouseOut(): void {
        console.log(event)
    }

}