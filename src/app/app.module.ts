import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { Page404Component } from './components/page404/page404.component';
import { LogoComponent } from './components/logo/logo.component';
import { VisitorsComponent } from './components/visitors/visitors.component';
import { HeadingComponent } from './components/heading/heading.component';
import { HttpClientModule} from '@angular/common/http';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { FormsModule } from '@angular/forms'
import { SharedModule } from './modules/shared.module';


@NgModule({
    declarations: [LayoutComponent, 
        HeaderComponent, 
        FooterComponent, 
        MenuComponent, 
        HomeComponent, 
        ProductsComponent, 
        AboutComponent, 
        Page404Component, 
        LogoComponent, 
        VisitorsComponent, 
        HeadingComponent, 
        ThumbnailComponent, 
        ProductDetailsComponent, 
        AddProductComponent,
        ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, SharedModule],
    exports: [],
    providers: [Title],
    bootstrap: [LayoutComponent]
})
export class AppModule { }
