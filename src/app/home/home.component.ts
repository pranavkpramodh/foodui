import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  allproducts:any=[];//array of data //product
 constructor(private ds:DataService, private api:ApiService, private router:Router) { }



 searchTerm:string='';
 foodData:any = [];
 showcard:boolean = false;


 ngOnInit(): void {
   this.api.getAllProducts().subscribe(

    (data:any)=>{
      this.allproducts = data.products;
      for(let i of this.allproducts){

        console.log(i);
      };
       
    
      
    }
    )

   this.api.searchKey.subscribe(
    (data:any)=>{
      this.searchTerm = data
 

    } 
   )
 
 }

 cardshow(){
  this.showcard =! this.showcard;
  
 }


 addtowishlist(product:any){
  console.log(product, "ggg");
  
  this.ds.addtowishlist(product).subscribe(
    (result:any)=>{
      alert(result.message)
    },
    (result:any)=>{(
      alert(result.error.message)
      )
    }
  )
 }




addtocart(product:any){
  this.ds.addtocart(product)

}

showfood(book:any){
  let bookId = book.id;
  console.log(bookId);
  
  this.ds.showfood(bookId).subscribe(
    (result:any) => {
      this.foodData = result.foodData;
      
    },
    (result:any) => {
      alert('currently unable to show')
      
    }
  )
  
}

order(food:any){
  this.router.navigate(['order',food.id])
}




}
