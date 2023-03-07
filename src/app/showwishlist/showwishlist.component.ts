import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-showwishlist',
  templateUrl: './showwishlist.component.html',
  styleUrls: ['./showwishlist.component.css']
})
export class ShowwishlistComponent {
  allwishlist:any=[];//array of data //product
  constructor(private ds:DataService) { }
 
 
 
  ngOnInit(): void {
    this.getwishlist()

  } 

  getwishlist(){
    this.ds.getwishlist().subscribe(
      (result:any)=>{
        this.allwishlist = result.products
        console.log(this.allwishlist,"f");
        
      }
    )
  }



}
