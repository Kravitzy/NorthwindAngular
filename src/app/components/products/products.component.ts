import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    public products : Product[];

  constructor(private prodService: ProductsService) { }

  ngOnInit() {
    this.products = this.prodService.getAllProducts();
  }

}
