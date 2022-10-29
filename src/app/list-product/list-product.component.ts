import { Product } from './../model/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  public title: string;
  public list: Product[];
  constructor(private productService:ProductService) { }
  ngOnInit(): void {
    this.title='New App';
    this.list= this.productService.list;
  }
  incrementLike(product:Product){
    let i = this.list.indexOf(product);
    if(i!=-1){
        this.list[i].nbrLike++;
    }
  }
  buy(product:Product){
    let i = this.list.indexOf(product);
    if(i!=-1){
        this.list[i].quantity--;
    }
  }
}
