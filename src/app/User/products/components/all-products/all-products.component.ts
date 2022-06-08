import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  products: any[]=[];
  categories: any[]=[];
  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }
 
  getProducts(){
    this.productService.getAllProducts().subscribe(
      (res:any)=> {
           this.products=res;
      },
      err =>{
        alert("Error");
      }
    )
  }

  getCategories(){
      this.productService.getAllGategories().subscribe(
        (res:any) =>{
          this.categories=res;
         
        },
        err =>{
          alert("Error");
        }
      )
  }

  filterCategory(event:any){
      let value = event.target.value;
      if(value!="all"){
        this.productService.getProductByCategory(value).subscribe(
          (res:any) =>{
            this.products=res;
          },
          err =>{
            alert("Error");
          }
        )
        // console.log(value);
               
      }
      else{
        this.getProducts(); 
  }}
}
