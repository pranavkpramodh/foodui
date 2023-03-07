import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyordersComponent } from './myorders/myorders.component';
import { OrderComponent } from './order/order.component';
import { RegisterComponent } from './register/register.component';
import { ShowwishlistComponent } from './showwishlist/showwishlist.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:'order/:id',component:OrderComponent},
  {path:'myorders',component:MyordersComponent},
  {path:'wishlist',component:ShowwishlistComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // PoductModule
  exports: [RouterModule]
})
export class AppRoutingModule { }
