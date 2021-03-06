import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    
    // HttpClient can request data from a remote server, get the response post,put,delete
    constructor(private http: HttpClient) { }

    public getAllProducts(): Product[] {
        const products: Product[] = [];
        products.push(new Product(1, "Apple", 3.9, 100));
        products.push(new Product(2, "Oranges", 5, 80));
        products.push(new Product(3, "Pears", 2.5, 30));
        products.push(new Product(4, "Banana", 4, 10));
        products.push(new Product(5, "Mango", 8, 500));
        return products;
    }

    public getAllProductsFromServer():Observable<Product[]> {
        return this.http.get<Product[]>("assets/json/products.json");
    }

    public addNewProductsToServer(product : Product):Observable<Product> {
        return this.http.post<Product>("http://jsonplaceholder.typicode.com/todos",product);
    }
    
}
