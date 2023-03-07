import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent {

  myOrders:any = [];

  constructor(private ds:DataService) { }

  ngOnInit(): void {
    this.getMyOrders()
   
  }

  getMyOrders(){
    this.ds.getMyOrders().subscribe(
      (result:any) => {
        this.myOrders = result.myorders;
        console.log(this.myOrders);
        
      },
      (result:any) => {
        alert(result.error.message);
      }
    )
  }

}
