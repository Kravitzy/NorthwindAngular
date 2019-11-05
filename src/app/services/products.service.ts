import { Injectable } from '@angular/core';
import { Product } from '../models/product'

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    
    constructor() { }

    public getAllProducts(): Product[] {
        const products: Product[] = [];
        products.push(new Product(1, "Apple", 3.9, 100));
        products.push(new Product(2, "Oranges", 5, 80));
        products.push(new Product(3, "Pears", 2.5, 30));
        products.push(new Product(4, "Banana", 4, 10));
        products.push(new Product(5, "Mango", 8, 500));
        return products;
    }
}
