import { Product } from './../model/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  public product: Product;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.product= new Product();
  }

  saveProduct(){
  this.product.nbrLike=0;
  this.productService.list.push(this.product);
  }
}
