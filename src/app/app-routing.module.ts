import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ManagerComponent } from './manager/manager.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
const routes: Routes = [
  {path:'home', component: HomeComponent},
  
  {path:'add-product',component:ProductAddComponent},
  {path:'product-list',component:ProductListComponent},
  {path: 'product/:productID', component: ProductDetailComponent},
  {path: 'manager', component: ManagerComponent},
  {path: 'product/edit/:productID', component: ProductEditComponent},
  {path: 'product/delete/:productID', component: ProductDeleteComponent},
  {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
