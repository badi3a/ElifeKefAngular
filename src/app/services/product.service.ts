import { Injectable } from '@angular/core';
import { Product } from '../model/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public list: Product[] =[
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
  ];
  constructor() {

  }

}
