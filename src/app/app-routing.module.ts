import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './User/products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './User/products/components/products-details/products-details.component';

const routes: Routes = [
  {path:' ' , redirectTo:'products' ,pathMatch:'full'},
  {path:'products' ,component: AllProductsComponent},
  {path:'details' , component:ProductsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
