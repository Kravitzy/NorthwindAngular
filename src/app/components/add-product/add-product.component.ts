import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';
import { ActionType } from 'src/app/redux/action-type';
import { AnyAction } from 'redux';
import { store } from 'src/app/redux/store';


@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

    public product = new Product();
    router: any;

    constructor(private ps: ProductsService) { }


    // public addNewProduct() {
    //     this.ps.addNewProductsToServer(this.product)
    //     .subscribe(addedProd => alert("Added Product ID: " + addedProd.id),
    //                 err => alert(err.message));
    // }

    public addNewProduct(): void {
        // this.myProductsService.addProductToServer(this.product)
        //     .subscribe(
        //         addedProduct => alert("Succeed Added Product! ID: " + addedProduct.id),
        //         err => alert(err.message));

        this.ps.addNewProductsToServer(this.product)
        .subscribe(addedProduct => {
            addedProduct.id =Math.floor(Math.random() * 78);

            const action : AnyAction ={
                type: ActionType.AddProduct,
                payload: addedProduct
            }
            store.dispatch(action);
            this.router.navigate(["/products"]);
        })
    }


}
