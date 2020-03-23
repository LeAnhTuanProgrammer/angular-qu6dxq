import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SlideComponent } from './slide/slide.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './product.service';
import { ProductAddComponent } from './product-add/product-add.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ManagerComponent } from './manager/manager.component';
import { NewComponent } from './new/new.component';
import { NewService } from './new.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule,   HttpClientModule],
  declarations: [ AppComponent, HelloComponent, ProductListComponent, SlideComponent, CategoryComponent, ProductComponent, ProductAddComponent, HomeComponent, ProductDetailComponent, NotFoundComponent, ManagerComponent, NewComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService, NewService]
})
export class AppModule { }
