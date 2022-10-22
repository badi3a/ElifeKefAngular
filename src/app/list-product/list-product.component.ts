import { Product } from './../model/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  public title: string;
  public list: Product[];
  constructor() { }
  ngOnInit(): void {
    this.title = 'New App';
    this.list=[
      {
        id: 12,
        name: 'T-shirt 1',
        price: 100,
        nbrLike: 10,
        quantity: 0,
        picture: 'https://www.exist.com.tn/61485-large_default/t-shirt.jpg'
      },
      {
        id: 13,
        name: 'T-shirt 2',
        price: 130,
        nbrLike: 90,
        quantity: 10,
        picture: 'https://www.exist.com.tn/81822-large_default/t-shirt-de-sport.jpg'
      }
    ]
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
