import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  id:number=0
  phone=''
  name=''
  email=''
  address=''
  location=''
  pincode=''

  selectedFood:any = [];

  constructor( private router:Router ,private activatedRoute: ActivatedRoute, private ds: DataService, private fb:FormBuilder) { }


  ngOnInit(): void {
   this.id = parseInt(this.activatedRoute.snapshot.params['id'])

   this.getSelectedFood()
   
  }

  orderForm = this.fb.group({
     name:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
     phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')]] ,
     email:['',[Validators.required, Validators.email]],
     address:['',[Validators.required,Validators.pattern('[a-zA-Z0-9,/ ]*')]],
     pincode: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6),Validators.pattern('[0-9]*')]] ,
     location:['',[Validators.required,Validators.pattern('[a-zA-Z,0-9 ]*')]],

  })

  getSelectedFood () {
    let id = this.id
    
    this.ds.getSelectedFood(id).subscribe(
      (result:any) => {
        this.selectedFood = result.food
        

      }
    )

  }

  placeorder(){
    console.log(this.selectedFood,'sss');
    
    if(this.orderForm.valid){
      let id = this.id;
      let name = this.orderForm.value.name
      let phone = this.orderForm.value.phone
      let email = this.orderForm.value.email
      let address = this.orderForm.value.address
      let pincode = this.orderForm.value.pincode
      let location = this.orderForm.value.location
      let item = this.selectedFood.item
      let price = this.selectedFood.price
      let image = this.selectedFood.image
      let origin = this.selectedFood.origin
      console.log(origin);
      
      this.ds.placeorder( id, name, phone, email, address, pincode, location, item, price, image, origin ).subscribe(
        (result:any) => {
          alert(result.message)
          this.router.navigateByUrl('/myorders')

        },(result:any) => {
          alert(result.error.message)
        }
      )
    }else{
      alert('Form not valid')
    }
  }


}
 