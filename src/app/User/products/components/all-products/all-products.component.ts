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
  loading: boolean=false;
  cartProducts: any[]=[];
  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }
 
  getProducts(){
    this.loading=true;
    this.productService.getAllProducts().subscribe(
      (res:any)=> {
           this.products=res;
           this.loading=false;
      },
      err =>{
        this.loading=false;
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
        this.loading=true;
        this.productService.getProductByCategory(value).subscribe(
          (res:any) =>{
            this.products=res;
            this.loading=false;
          },
          err =>{
            this.loading=false;
            alert("Error");
          }
        )      
      }
      else{
        this.getProducts(); 
  }
}

addToCart(event:any){
if("cart" in localStorage){
  this.cartProducts=JSON.parse(localStorage.getItem("cart")!);
  let exist = this.cartProducts.find(item => item.id == event.id);
  if(exist){
    alert('Product is already in your cart');
  }
  else{
    this.cartProducts.push(event)
    localStorage.setItem("cart" ,JSON.stringify(this.cartProducts));
  }
 

}else{
  this.cartProducts.push(event)
  localStorage.setItem("cart" ,JSON.stringify(this.cartProducts))
}
}
}
