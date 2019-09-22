import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './shopping/cart/cart.component';
import { MenuComponent } from './food/menu/menu.component';
import { ItemEditComponent } from './food/item-edit/item-edit.component';
import { SignupComponent } from './site/signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  {path:'cart', component: CartComponent},
  {path:'edit-item/:itemId', component: ItemEditComponent},
  {path:'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
