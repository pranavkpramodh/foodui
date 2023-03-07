import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FilterPipe } from './products/pipes/filter.pipe';
import { HeaderComponent } from './header/header.component';
import { OrderComponent } from './order/order.component';
import { MyordersComponent } from './myorders/myorders.component';
import { ShowwishlistComponent } from './showwishlist/showwishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FilterPipe,
    HeaderComponent,
    OrderComponent,
    MyordersComponent,
    ShowwishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
