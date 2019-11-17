import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';


@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

    public product = new Product();

    constructor(private ps: ProductsService) { }


    public addNewProduct() {
        this.ps.addNewProductsToServer(this.product)
        .subscribe(addedProd => alert("Added Product ID: " + addedProd.id),
                    err => alert(err.message));
    }


}
