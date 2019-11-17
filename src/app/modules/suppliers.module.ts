import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SellersComponent } from '../components/sellers/sellers.component';
import { RetailersComponent } from '../components/retailers/retailers.component';
import { WholeSalersComponent } from '../components/whole-salers/whole-salers.component';
import { TopSellersComponent } from '../components/top-sellers/top-sellers.component';

const routes: Routes = [
    // {path: "", component: SellersComponent}, // "" is relative to "/"
    // {path: "retailers", component: RetailersComponent}, // "" is relative to "/"
    // {path: "wholesalers", component: WholeSalersComponent} // "" is relative to "/"

    // inner router
    {
        path: "", component: SellersComponent, children: [
            { path: "retailers", component: RetailersComponent }, // "" is relative to "/"
            { path: "wholesalers", component: WholeSalersComponent }, // "" is relative to "/"
            { path: "topsellers", component: TopSellersComponent } // "" is relative to "/"
        ]
    }

]

@NgModule({
    declarations: [SellersComponent, RetailersComponent, WholeSalersComponent, TopSellersComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class SuppliersModule { }
