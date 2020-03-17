import { Component, OnInit } from '@angular/core';
import{Product} from '../Product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit():void  {
  }
 product: Product={
 name:"Item 1",
 price:5.5,
 desc:"Nội dung để mô tả SP!",
 img:'https://dummyimage.com/275x175/000/fff',
 status:true,
 }
changeStatus(){
  this.product.status=! this.product.status;
 }
 changeTitle(e){
// this.product.name=e.target.value;
 }
}