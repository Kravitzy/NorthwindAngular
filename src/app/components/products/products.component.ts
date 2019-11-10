import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    public allProducts : Product[];

    


  constructor(private prodService: ProductsService) { }

  ngOnInit() {
    // this.allProducts = this.prodService.getAllProducts();

    this.prodService.getAllProductsFromServer()
        .subscribe(products => this.allProducts = products, err => alert(err.message));
  }

}
