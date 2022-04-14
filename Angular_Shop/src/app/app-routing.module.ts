import { WishlistComponent } from './wishlist/wishlist.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShopComponent } from './shop/shop.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ContacUsComponent } from './contac-us/contac-us.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"home/login", component:LoginComponent},
  {path:"home/register", component:RegisterComponent},
  {path:"home/cart", component:CartComponent},
  {path:"home/checkout", component:CheckoutComponent},
  {path:"home/wishlist", component:WishlistComponent},
  {path:"home/shop", component:ShopComponent},
  {path:"home/aboutus", component:AboutUsComponent},
  {path:"home/productdetail", component:ProductdetailComponent},
  {path:"home/contactus", component:ContacUsComponent},
  {path:"", redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
