import { Product } from './../model/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  public product: Product;
  constructor() { }

  ngOnInit(): void {
    this.product= new Product();
    console.log(this.product)
  }
  saveProduct(){
    console.log(this.product)
    //add product in the list
  }
}
