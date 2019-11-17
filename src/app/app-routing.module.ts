import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { Page404Component } from './components/page404/page404.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AddProductComponent } from './components/add-product/add-product.component';
// import { AdminComponent } from './components/admin/admin.component'; // not lazy loading

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "products", component: ProductsComponent },
    { path: "products/new", component: AddProductComponent },
    { path: "products/:id", component: ProductDetailsComponent },
    { path: "about", component: AboutComponent },
    // {path: "admin", component: AdminComponent}, // not lazy loading
    {path: "admin", loadChildren: "./modules/admin.module#AdminModule"}, // lazy loading
    {path: "suppliers", loadChildren: "./modules/suppliers.module#SuppliersModule"}, // lazy loading

    { path: "", redirectTo: "home", pathMatch: "full" }, // Default
    { path: "**", component: Page404Component } // All other
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
